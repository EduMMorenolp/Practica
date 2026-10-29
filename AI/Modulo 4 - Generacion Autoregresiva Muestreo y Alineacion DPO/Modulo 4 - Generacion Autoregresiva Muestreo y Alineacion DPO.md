# Módulo 4: Generación Autorregresiva, Muestreo y Alineación DPO

---

## 🧭 Visión General: De un "Completador de Frases" a un "Asistente Inteligente"

Cuando un modelo de lenguaje (como GPT, LLaMA o Claude) termina su fase inicial de entrenamiento masivo (*pre-entrenamiento*), no es un asistente conversacional: es una **máquina colosal de autocompletar texto**.

Si le preguntas a un modelo base crudo:
> *"¿Cuál es la capital de Francia?"*

El modelo podría completar diciendo:
> *"¿Y cuál es la de España? Capítulo 4: Geografía Europea..."*

Para transformar ese completador probabilístico en un asistente útil, seguro y alineado con los deseos humanos, la industria de la IA utiliza una secuencia de tres etapas:
1. **Predicción Autorregresiva Causal:** Generación token por token.
2. **Estrategias de Muestreo (Temperatura, Top-K, Top-P):** Controlar si el modelo es estricto y lógico o creativo y variado.
3. **Alineación de Preferencias (DPO - Direct Preference Optimization):** Enseñar al modelo a elegir respuestas útiles y seguras frente a respuestas deficientes o dañinas.

A continuación, aprenderás la matemática y la intuición práctica detrás de cada uno de estos mecanismos.

---

## 1. El Bucle de Generación Autorregresiva

¿Cómo escribe texto un LLM? **Una sola palabra a la vez.**

```text
Paso 1:  Prompt inicial:            "La inteligencia"
         Predice siguiente palabra: "artificial"

Paso 2:  Prompt actualizado:        "La inteligencia artificial"
         Predice siguiente palabra: "transforma"

Paso 3:  Prompt actualizado:        "La inteligencia artificial transforma"
         Predice siguiente palabra: "el"
```

El término **"autorregresivo"** significa que la salida de cada paso ($t$) se retroalimenta como la entrada del siguiente paso ($t+1$). Este bucle se repite continuamente hasta que el modelo emite un token especial de parada: `<|endoftext|>` o `<EOS>` (*End of Sequence*).

---

## 2. De Vectores Ocultos a Probabilidades: Logits y Temperatura

Al final del bloque Transformer, el último token produce un vector de estado oculto $\mathbf{h} \in \mathbb{R}^{d_{model}}$ (por ejemplo, 4.096 números flotantes). ¿Cómo convertimos ese vector en una palabra del diccionario?

### 2.1 ¿Qué son los "Logits"?
Multiplicamos el vector oculto $\mathbf{h}$ por la matriz de vocabulario $\mathbf{W}_{vocab}$. Esto produce una lista de números reales sin normalizar (uno por cada palabra de nuestro vocabulario de 32.000 palabras):

$$\mathbf{z} = \mathbf{h} \cdot \mathbf{W}_{vocab}$$

Estos números crudos $\mathbf{z}$ se denominan **Logits**.
* Un logit alto (ej. $+12.5$) significa que el modelo tiene mucha confianza en esa palabra.
* Un logit bajo (ej. $-8.2$) significa que la palabra es improbable.

---

### 2.2 La Temperatura ($T$): Controlando la Creatividad del Modelo

Para convertir los logits en porcentajes reales de probabilidad que sumen $100\%$, usamos la función Softmax. Pero antes de aplicarla, dividimos cada logit por un factor escalar llamado **Temperatura ($T$)**:

$$P(t_i) = \frac{e^{z_i / T}}{\sum_j e^{z_j / T}}$$

#### La Analogía Física de la Temperatura:
* **Temperatura baja ($T = 0.2$, Frío):** En física, a bajas temperaturas las moléculas están congeladas y casi no se mueven. Matemáticamente, dividir por un número pequeño ($0.2$) hace que las diferencias entre números se magnifiquen: el logit más alto aplasta por completo a todos los demás.
  * *Efecto:* El modelo se vuelve **altamente determinista, factual y predecible**. Ideal para matemáticas, código y respuestas precisas.
* **Temperatura media ($T = 0.7$, Equilibrada):** El estándar conversacional. El modelo prefiere la opción más lógica, pero ocasionalmente elige sinónimos elegantes para que el texto fluya con naturalidad.
* **Temperatura alta ($T = 1.5$, Caliente):** Las moléculas hierven y rebotan por todas partes. Dividir por $1.5$ aplana la curva: palabras poco probables ahora tienen oportunidades reales de ser elegidas.
  * *Efecto:* El modelo se vuelve **creativo, poético o delirante** (si la temperatura es excesiva, produce sinsentidos gramaticales).

```text
Logits originales: ["gato": 8.0,  "perro": 6.0,  "mesa": 1.0]

Con T = 0.2 (Frío):
  Probabilidades:   ["gato": 99.9%, "perro": 0.1%, "mesa": 0.0001%] -> ¡Casi siempre elegirá "gato"!

Con T = 1.0 (Normal):
  Probabilidades:   ["gato": 87.8%, "perro": 11.9%, "mesa": 0.3%]

Con T = 2.0 (Caliente):
  Probabilidades:   ["gato": 68.2%, "perro": 25.1%, "mesa": 6.7%]  -> ¡"Mesa" tiene una oportunidad!
```

---

## 3. Filtros de Muestreo: Evitando Alucinaciones con Top-K y Top-P

Incluso con temperatura controlada, si un vocabulario tiene 50.000 palabras, sumar probabilidades diminutas de miles de palabras raras puede provocar que el modelo escoja una palabra absurda en medio de una frase seria. Para evitarlo, se usan dos filtros:

### 3.1 Muestreo Top-K
Regla muy simple: **Conserva solo las $K$ palabras más probables (ej. $K = 40$) y descarta todas las demás**.
* Si la palabra 41 tenía $0.001\%$ de probabilidad, se trunca a $0.0$.
* Luego se renormaliza la suma de las $K$ elegidas para que vuelvan a sumar $1.0$ ($100\%$).

### 3.2 Muestreo Top-P (Nucleus Sampling)
En lugar de fijar un número fijo $K$, **Top-P acumula dinámicamente palabras hasta alcanzar un porcentaje $P$ (ej. $P = 0.90$ o $90\%$)**:
* Si una palabra es súper obvia (ej. *"Buenos"* $\rightarrow$ *"días"* con $95\%$), el conjunto Top-P tendrá solo **1 palabra**.
* Si hay muchas opciones válidas (ej. *"Mi color favorito es el..."*), el conjunto Top-P incluirá 10 o 15 colores hasta sumar el $90\%$.
* Adapta su rigidez según la incertidumbre real de cada contexto.

---

## 4. Alineación: ¿Cómo enseñar al Modelo qué Respuestas son Buenas?

Imagina que le pedimos a un LLM: *"Explícame cómo funciona una tarjeta de crédito"*.

El modelo podría generar dos respuestas posibles:
* **Respuesta A ($y_w$, Ganadora/Winner):** *"Una tarjeta de crédito es un instrumento financiero donde el banco te presta dinero para realizar pagos que devuelves a fin de mes..."* (Clara, útil y educada).
* **Respuesta B ($y_l$, Perdedora/Loser):** *"Es un plástico para comprar cosas y endeudarte hasta la ruina jajaja."* (Informal, poco útil o sesgada).

Queremos que los pesos del modelo $\theta$ aumenten la probabilidad de emitir $y_w$ y disminuyan la probabilidad de emitir $y_l$.

---

### 4.1 La Revolución de DPO (Direct Preference Optimization, 2023)

Antes de 2023, el método dominante era **RLHF (Reinforcement Learning from Human Feedback)** con el algoritmo PPO (usado en InstructGPT y ChatGPT original). RLHF era extremadamente complejo:
1. Requería entrenar un **segundo modelo de IA** (llamado *Reward Model* o Modelo de Recompensa) para puntuar respuestas.
2. Luego requería usar Aprendizaje por Refuerzo con bucles de política que colapsaban o eran numéricamente muy inestables.

En 2023, Rafailov et al. (Universidad de Stanford) demostraron una identidad matemática deslumbrante:
> **El propio modelo de lenguaje ya actúa implícitamente como su propio modelo de recompensa.**

No se necesita ningún modelo de recompensa externo ni ningún algoritmo complejo de RL. Se puede optimizar la política directamente utilizando una **función de pérdida de entropía cruzada binaria**.

---

### 4.2 La Fórmula Matemática de DPO Desglosada

$$\mathcal{L}_{DPO}(\pi_\theta; \pi_{ref}) = -\log \sigma\left( \beta \left( \log \frac{\pi_\theta(y_w \mid x)}{\pi_{ref}(y_w \mid x)} - \log \frac{\pi_\theta(y_l \mid x)}{\pi_{ref}(y_l \mid x)} \right) \right)$$

Desmenucemos cada término con total claridad:
* $\pi_\theta$: El **modelo que estamos entrenando** actualmente con nuestros pesos $\theta$.
* $\pi_{ref}$: El **modelo de referencia congelado** (el modelo base original antes de alinearlo). Sirve como ancla para que el modelo no olvide cómo hablar español ni se degrade.
* $y_w$: La respuesta preferida por humanos (*Winner*).
* $y_l$: La respuesta rechazada (*Loser*).
* $\beta$ (*beta*, ej. $0.1$): Controla qué tan fuerte penalizamos que el nuevo modelo se aleje del modelo de referencia $\pi_{ref}$.
* $\sigma$: La función sigmoide que comprime la diferencia a una probabilidad entre 0 y 1.

#### La Lógica en Palabras Simples:
1. Calculamos cuánto mejoró la respuesta ganadora en el nuevo modelo frente a la referencia:
   $$\Delta_w = \log \pi_\theta(y_w) - \log \pi_{ref}(y_w)$$
2. Calculamos cuánto cambió la respuesta perdedora frente a la referencia:
   $$\Delta_l = \log \pi_\theta(y_l) - \log \pi_{ref}(y_l)$$
3. La pérdida disminuye cuando $\Delta_w$ es mucho mayor que $\Delta_l$.
4. ¡Si el modelo sube la probabilidad de la respuesta buena y baja la de la mala, la pérdida es casi cero!

---

## 5. Implementación Completa en Python Puro

```python
import math

def sigmoide(x):
    """Comprime cualquier valor al intervalo (0, 1)."""
    x_seguro = max(-500.0, min(500.0, x))
    return 1.0 / (1.0 + math.exp(-x_seguro))

def calcular_perdida_dpo(logp_ganadora_nuevo, logp_perdedora_nuevo, 
                         logp_ganadora_ref, logp_perdedora_ref, beta=0.1):
    """
    Calcula la función de pérdida DPO para un par de respuestas (ganadora vs perdedora).
    
    Argumentos:
        logp_ganadora_nuevo: Log-probabilidad de y_w en el modelo actual pi_theta
        logp_perdedora_nuevo: Log-probabilidad de y_l en el modelo actual pi_theta
        logp_ganadora_ref: Log-probabilidad de y_w en el modelo congelado pi_ref
        logp_perdedora_ref: Log-probabilidad de y_l en el modelo congelado pi_ref
        beta: Parámetro de regularización KL
    """
    # 1. Razón de log-probabilidades para la respuesta preferida
    ratio_w = logp_ganadora_nuevo - logp_ganadora_ref
    
    # 2. Razón de log-probabilidades para la respuesta rechazada
    ratio_l = logp_perdedora_nuevo - logp_perdedora_ref
    
    # 3. Diferencia escalada por beta
    logit_preferencia = beta * (ratio_w - ratio_l)
    
    # 4. Probabilidad sigmoide
    prob = sigmoide(logit_preferencia)
    
    # 5. Pérdida logarítmica negativa: -log(prob)
    loss = -math.log(max(prob, 1e-12))
    return loss

# Demostración numérica:
# Caso 1: El modelo actual favorece claramente a la respuesta ganadora (Buen aprendizaje)
perdida_optima = calcular_perdida_dpo(
    logp_ganadora_nuevo=-1.2, logp_perdedora_nuevo=-8.5,
    logp_ganadora_ref=-4.0,   logp_perdedora_ref=-4.1,
    beta=0.1
)

# Caso 2: El modelo actual prefiere erróneamente la respuesta rechazada (Mal aprendizaje)
perdida_mala = calcular_perdida_dpo(
    logp_ganadora_nuevo=-8.5, logp_perdedora_nuevo=-1.2,
    logp_ganadora_ref=-4.0,   logp_perdedora_ref=-4.1,
    beta=0.1
)

print(f"Pérdida con modelo bien alineado: {perdida_optima:.4f}  (Baja, modelo premiado)")
print(f"Pérdida con modelo mal alineado:  {perdida_mala:.4f}    (Alta, modelo castigado)")
```

---

## 💡 Resumen Mental

1. **Logits**: Puntuaciones directas no normalizadas para cada palabra del vocabulario.
2. **Temperatura**: Perilla térmica que afina entre precisión lógica ($T \to 0$) y creatividad ($T > 1$).
3. **Top-K y Top-P**: Filtros de seguridad para eliminar palabras basura o raras de la cola probabilística.
4. **DPO**: El estándar moderno de alineación que sustituye a RLHF, enseñando matemáticamente al modelo qué respuestas prefieren los seres humanos sin requerir modelos de recompensa auxiliares.
