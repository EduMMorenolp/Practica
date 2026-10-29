# Módulo 3: Predicción Causal, SFT, RLHF y Direct Preference Optimization (DPO)

Los modelos de lenguaje modernos (como la familia GPT, Claude o Llama) se basan en la arquitectura decodificadora causal. El proceso para convertirlos de simples continuadores de texto a asistentes útiles y alineados con las intenciones humanas involucra **Pre-entrenamiento Autoregresivo**, **Supervised Fine-Tuning (SFT)** y **Alineación de Preferencias (DPO)**.

---

## 1. Predicción Causal Autoregresiva

Un modelo causal descompone la probabilidad conjunta de una secuencia de tokens $y = (y_1, y_2, \dots, y_T)$ mediante la regla de la cadena de probabilidades:

$$P(y_1, y_2, \dots, y_T) = \prod_{t=1}^T P(y_t \mid y_1, \dots, y_{t-1})$$

Para evitar que el modelo "haga trampa" mirando tokens futuros durante el entrenamiento paralelo en GPU, la matriz de atención se multiplica por una **máscara triangular inferior** sustituyendo las posiciones del futuro por $-\infty$:

$$\mathbf{M}_{i,j} = \begin{cases} 0 & \text{si } j \le i \\ -\infty & \text{si } j > i \end{cases}$$

Al pasar por $\text{softmax}$, $e^{-\infty} = 0$, anulando la fuga de información futura.

---

## 2. De Representaciones Ocultas a Logits y Muestreo

En cada paso $t$, la última capa del Transformer produce un vector oculto $\mathbf{h}_t \in \mathbb{R}^{d_{model}}$, que se proyecta al espacio del vocabulario $\mathbf{W}_{vocab} \in \mathbb{R}^{d_{model} \times |V|}$ para obtener los **logits** no normalizados:

$$\mathbf{z}_t = \mathbf{h}_t \mathbf{W}_{vocab}$$

### Control de Aleatoriedad con Temperatura ($T$):
$$P(y_t = v) = \frac{e^{z_{t,v} / T}}{\sum_{w} e^{z_{t,w} / T}}$$

- $T \to 0$: Selección casi determinista (*Greedy Decoding* o Argmax).
- $T = 1$: Distribución natural del modelo.
- $T > 1$: Distribución más plana y diversa (mayor creatividad, pero mayor riesgo de alucinaciones).

---

## 3. El Camino Tradicional: RLHF con PPO

En el paper *InstructGPT* (Ouyang et al., 2022), OpenAI popularizó el entrenamiento por refuerzo con feedback humano (**RLHF**):

1. **SFT (Supervised Fine-Tuning):** Entrenar el modelo base con miles de conversaciones escritas por redactores humanos.
2. **Modelo de Recompensa (Reward Model):** Entrenar una red neuronal $r_\phi(x, y)$ con comparaciones binarias humanas (donde $y_w$ es la respuesta preferida e $y_l$ la rechazada) bajo el modelo probabilístico de Bradley-Terry:
   $$P(y_w \succ y_l \mid x) = \sigma\left(r_\phi(x, y_w) - r_\phi(x, y_l)\right)$$
3. **Optimización de Política con PPO:** Ajustar el modelo generador $\pi_\theta$ para maximizar la recompensa evitando alejarse demasiado del modelo base mediante una penalización de divergencia Kullback-Leibler (KL):
   $$\max_{\theta} \mathbb{E}\left[ r_\phi(x, y) - \beta D_{KL}(\pi_\theta(y \mid x) \parallel \pi_{ref}(y \mid x)) \right]$$

**El Problema de PPO:** Es notoriamente inestable, complejo de sincronizar (requiere 4 modelos simultáneos en memoria: Actor, Crítico, Referencia y Recompensa) y costoso en cómputo.

---

## 4. La Revolución Matemática: Direct Preference Optimization (DPO)

En 2023, Rafailov et al. (Stanford University) demostraron que **no es necesario entrenar un modelo de recompensa separado ni usar aprendizaje por refuerzo**.

Existe una solución analítica exacta que relaciona la recompensa implícita directamente con el cociente de probabilidades logarítmicas del modelo de lenguaje:

$$r(x, y) = \beta \log \frac{\pi_\theta(y \mid x)}{\pi_{ref}(y \mid x)} + \beta \log Z(x)$$

Al sustituir esta expresión en la función de verosimilitud de Bradley-Terry, la constante de normalización $\log Z(x)$ se cancela, derivando la **Función de Pérdida DPO**:

$$\mathcal{L}_{DPO}(\pi_\theta; \pi_{ref}) = -\mathbb{E}_{(x, y_w, y_l)}\left[ \log \sigma\left( \beta \log \frac{\pi_\theta(y_w \mid x)}{\pi_{ref}(y_w \mid x)} - \beta \log \frac{\pi_\theta(y_l \mid x)}{\pi_{ref}(y_l \mid x)} \right) \right]$$

### Ventajas de DPO:
1. **Entrenamiento como clasificación binaria estándar:** Se optimiza directamente con descenso de gradiente estándar.
2. **Estabilidad total:** Elimina la inestabilidad de las actualizaciones de política de PPO.
3. **Eficiencia en memoria:** Solo requiere el modelo actual $\pi_\theta$ y el modelo congelado de referencia $\pi_{ref}$.
