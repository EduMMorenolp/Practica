# Módulo 2: Tokenización y Representación Textual (BPE y Embeddings)

---

## 🧭 Visión General: ¿Cómo lee el texto una Computadora?

Para los seres humanos, una palabra como *"inteligencia"* evoca de inmediato ideas de capacidad, mente o razonamiento. Para un ordenador, sin embargo, esa palabra es simplemente una secuencia arbitraria de bytes: `[105, 110, 116, 101, 108, 105, ...]` según la codificación ASCII o UTF-8.

Los modelos de lenguaje (LLMs como GPT-4, Claude o LLaMA) son motores puramente matemáticos: solo pueden sumar y multiplicar matrices de números. Por lo tanto, antes de que cualquier modelo pueda procesar una sola frase, debemos resolver dos desafíos cruciales:
1. **¿Cómo dividir el texto continuo en piezas manejables?** $\rightarrow$ **Tokenización (BPE - Byte-Pair Encoding)**.
2. **¿Cómo darle significado y geometría a esas piezas numéricas?** $\rightarrow$ **Embeddings y Espacios Vectoriales**.

En este módulo desglosaremos cada algoritmo, su justificación práctica y cómo implementarlo paso a paso en Python puro.

---

## 1. El Dilema de la Tokenización: Caracteres vs Palabras vs Subpalabras

Antes de entender BPE, veamos por qué las alternativas más obvias fallan en la práctica:

```text
Texto de entrada: "inconstitucionalmente"

Opción A (Caracteres):  ['i', 'n', 'c', 'o', 'n', 's', 't', 'i', 't', 'u', 'c', 'i', 'o', 'n', 'a', 'l', 'm', 'e', 'n', 't', 'e']
                        ⚠️ 21 tokens. Demasiado largo. Las secuencias explotan en costo cuadrático.

Opción B (Palabras):    ['inconstitucionalmente']
                        ⚠️ 1 token. Pero requiere un diccionario gigante con millones de palabras. 
                        Si el usuario escribe "inconstitucionalmentee" con una errata: ¡ERROR (Palabra Desconocida OOV)!

Opción C (Subpalabras): ['in', 'constitucional', 'mente']
                        ✅ 3 tokens compactos y modulares. Puede construir cualquier palabra rara usando piezas conocidas.
```

### 1.1 Comparativa Técnica de Estrategias

* **1. Tokenización por Caracteres:**
  * *Ventaja:* El vocabulario es diminuto (~256 caracteres cubre casi todo el abecedario y símbolos). Nunca hay palabras desconocidas.
  * *Desventaja fatal:* Un párrafo corto produce miles de tokens. Dado que el mecanismo de atención de los Transformers escala de forma **cuadrática** ($O(N^2)$), procesar textos largos por caracteres resulta prohibitivamente lento y costoso.
* **2. Tokenización por Palabras Completas:**
  * *Ventaja:* Las secuencias son cortas (1 palabra = 1 token).
  * *Desventaja fatal:* El vocabulario tendría que ser monstruoso (más de 1.000.000 de palabras para cubrir todas las conjugaciones, plurales y tecnicismos). Además, ante cualquier falta de ortografía o neologismo (ej. *"instagramear"*), el modelo colapsa en un token genérico `<UNK>` (*Unknown*), perdiendo todo el significado.
* **3. Tokenización por Subpalabras (BPE - Byte-Pair Encoding):**
  * Es el estándar de oro moderno. Combina lo mejor de ambos mundos: palabras muy comunes como `"el"` o `"casa"` se guardan como un solo token, mientras que palabras raras o compuestas se dividen en fragmentos frecuentes (ej. `"desoxigenar"` $\rightarrow$ `["des", "oxigen", "ar"]`).

---

## 2. El Algoritmo Byte-Pair Encoding (BPE) Paso a Paso

Originalmente inventado en 1994 como un algoritmo de compresión de datos, BPE fue adaptado por Sennrich et al. (2015) para el procesamiento del lenguaje natural.

### 2.1 La Intuición: Fusionar los Vecinos Más Frecuentes
Imagina que lees un libro en un idioma desconocido y notas que las letras `'e'` y `'s'` aparecen juntas una y otra vez (`"es"`). Tiene sentido empaquetar `"es"` como un único símbolo nuevo. Luego notas que ese nuevo símbolo `"es"` aparece frecuentemente seguido de `'t'` (`"est"`). Entonces creas otro símbolo compuesto `"est"`.

Al repetir este proceso, comienzas con letras sueltas y gradualmente vas construyendo raíces, prefijos, sufijos y palabras completas frecuentes.

### 2.2 Las 4 Etapas del Algoritmo

1. **Separación inicial**: Descomponemos cada palabra del corpus de entrenamiento en caracteres individuales y agregamos un símbolo especial de fin de palabra (por ejemplo `</w>`), para distinguir cuando un fragmento termina una palabra (ej. `"lo"` dentro de `"flor"` vs `"lo</w>"` como artículo completo).
2. **Conteo de frecuencias**: Contamos cuántas veces aparece cada par adyacente de tokens en todo el corpus.
3. **Fusión (*Merge*)**: Seleccionamos el par con la frecuencia más alta y lo unimos en un nuevo token.
4. **Iteración**: Repetimos el proceso durante $K$ iteraciones (donde $K$ es el número de reglas de fusión que deseamos aprender).

#### Ejemplo Visual con Datos Reales:
Supongamos que nuestro corpus contiene:
* `"low"` (5 veces)
* `"lower"` (2 veces)
* `"newest"` (6 veces)
* `"widest"` (3 veces)

Comenzamos dividiendo en caracteres:
```text
('l', 'o', 'w', '</w>') : 5
('l', 'o', 'w', 'e', 'r', '</w>') : 2
('n', 'e', 'w', 'e', 's', 't', '</w>') : 6
('w', 'i', 'd', 'e', 's', 't', '</w>') : 3

Paso 1: ¿Cuál es el par adyacente más frecuente?
- ('e', 's') aparece 6 veces en "newest" + 3 veces en "widest" = 9 veces.
-> Creamos la regla: ('e', 's') -> 'es'

Paso 2: Buscamos en el nuevo corpus con 'es' ya integrado:
- ('es', 't') aparece 6 + 3 = 9 veces.
-> Creamos la regla: ('es', 't') -> 'est'

Paso 3: Siguiente par más frecuente:
- ('l', 'o') aparece 5 veces en "low" + 2 en "lower" = 7 veces.
-> Creamos la regla: ('l', 'o') -> 'lo'

Paso 4:
- ('lo', 'w') aparece 5 + 2 = 7 veces.
-> Creamos la regla: ('lo', 'w') -> 'low'
```

Al terminar, si llega una palabra nunca antes vista en el entrenamiento como `"lowest"`, el tokenizador aplica las reglas aprendidas en orden y la descompone con precisión:
`['l', 'o', 'w', 'e', 's', 't', '</w>']` $\rightarrow$ `['low', 'est', '</w>']`.
¡Sin caer en token desconocido y con solo 2 tokens de longitud!

---

## 3. Embeddings: El Mapa Mental de la Máquina

Una vez que el texto se convierte en una lista de números enteros (por ejemplo `[1542, 89, 401]`), surge otro problema:
> ¿Significa el token con ID 100 el doble que el token con ID 50?
> **No.** Los números enteros son meras etiquetas arbitrarias. El número 50 no es "la mitad" del número 100.

Para darles verdadero sentido semántico, transformamos cada token en un **vector continuo de números decimales**: un **Embedding**.

### 3.1 La Analogía: Ubicar Conceptos en un Plano de Características
Imagina que te pido calificar varios animales según dos cualidades (dimensiones) del 0.0 al 1.0:
* Eje horizontal ($X$): **Tamaño**
* Eje vertical ($Y$): **Fiereza**

```text
    Fiereza
  1.0 │                     ● León (0.9, 0.95)
      │
      │
  0.5 │                                      ● Elefante (1.0, 0.4)
      │
  0.1 │    ● Ratón (0.1, 0.15)
      │    ● Hámster (0.12, 0.1)
  0.0 └───┴──────────────────────────────────▶ Tamaño
         0.0       0.5                      1.0
```

Observa la magia de esta representación:
1. **El Ratón y el Hámster** están casi en el mismo punto porque comparten características similares.
2. **El León y el Ratón** están lejísimos.
3. Si un modelo no conoce qué es un *"Jerbo"*, pero le decimos que su vector es `(0.13, 0.12)`, el modelo sabrá al instante que se comporta como un ratón, ¡sin haberlo visto antes!

En un modelo real como GPT-4 o LLaMA, en lugar de 2 dimensiones (tamaño y fiereza), se utilizan **4.096 o 12.288 dimensiones**. Cada dimensión aprende automáticamente conceptos abstractos: género gramatical, tiempo verbal, tecnicismo, carga emocional, etc.

---

### 3.2 La Matriz de Embeddings y el "Lookup"

La capa de embeddings de una red neuronal es simplemente una gran tabla de búsqueda (*lookup table*): una matriz $\mathbf{E}$ de dimensiones $|\mathcal{V}| \times d_{\text{model}}$:
* $|\mathcal{V}|$: Tamaño total del vocabulario (ej. 32.000 palabras/subpalabras).
* $d_{\text{model}}$: Longitud del vector de características (ej. 768 o 4.096 números flotantes por palabra).

```text
Vocabulario:          Matriz E (32.000 filas x 768 columnas)
ID 0: "el"        ──▶ [ 0.12, -0.45,  0.89, ...,  0.02 ] (Fila 0)
ID 1: "gato"      ──▶ [ 0.78,  0.23, -0.11, ...,  0.54 ] (Fila 1)
ID 2: "duerme"    ──▶ [-0.05,  0.91,  0.34, ..., -0.67 ] (Fila 2)
```

Hacer un **"lookup"** de la palabra `"gato"` (ID 1) consiste simplemente en **extraer la fila 1 de la matriz**:

$$\mathbf{e}_{\text{gato}} = \mathbf{E}[1]$$

---

## 4. ¿Cómo Medimos la Cercanía Semántica? Similitud Coseno

Si dos palabras tienen vectores numéricos $\mathbf{u}$ y $\mathbf{v}$, ¿cómo sabemos si significan lo mismo?

Podríamos pensar en medir la distancia euclidiana (la distancia en línea recta $\sqrt{\sum (u_i - v_i)^2}$). Sin embargo, la distancia euclidiana tiene un grave defecto: se confunde si un vector es más largo que otro simplemente porque una palabra aparece con más frecuencia.

La solución estándar es la **Similitud Coseno**: en lugar de medir la distancia entre las puntas de las flechas, **mide el ángulo entre las dos direcciones**.

$$\text{sim}(\mathbf{u}, \mathbf{v}) = \cos(\theta) = \frac{\mathbf{u} \cdot \mathbf{v}}{\|\mathbf{u}\|_2 \|\mathbf{v}\|_2} = \frac{\sum_{i=1}^d u_i v_i}{\sqrt{\sum_{i=1}^d u_i^2} \sqrt{\sum_{i=1}^d v_i^2}}$$

### 4.1 ¿Cómo interpretar el resultado?
* **$+1.0$ (Ángulo de $0^\circ$):** Las flechas apuntan exactamente en la misma dirección. Son sinónimos o conceptos estrechamente vinculados (ej. `"rey"` y `"monarca"`).
* **$0.0$ (Ángulo de $90^\circ$, Ortogonales):** No guardan ninguna relación semántica medible (ej. `"revolución"` y `"lechuga"`).
* **$-1.0$ (Ángulo de $180^\circ$):** Apuntan en direcciones exactamente opuestas (antónimos perfectos).

```text
               v (Concepto A)
              ↗
             /  θ = 15° (cos ≈ 0.96 -> Muy relacionados)
            /
           ──────▶ u (Concepto B)
```

---

### 4.2 Demostración Práctica en Python Puro

```python
import math

def producto_punto(u, v):
    """Calcula la suma de los productos componente a componente."""
    return sum(a * b for a, b in zip(u, v))

def norma_l2(v):
    """Calcula la longitud euclidiana (magnitud) del vector."""
    return math.sqrt(sum(x ** 2 for x in v))

def similitud_coseno(u, v):
    """Divide el producto punto entre la multiplicación de las magnitudes."""
    norm_u = norma_l2(u)
    norm_v = norma_l2(v)
    if norm_u == 0.0 or norm_v == 0.0:
        return 0.0
    return producto_punto(u, v) / (norm_u * norm_v)

# Vectores simplificados en 3 dimensiones: [Poder, Realeza, Alimento]
v_rey =     [0.90, 0.95, 0.05]
v_reina =   [0.88, 0.92, 0.04]
v_manzana = [0.01, 0.02, 0.98]

sim_rey_reina = similitud_coseno(v_rey, v_reina)
sim_rey_manzana = similitud_coseno(v_rey, v_manzana)

print(f"Similitud Rey <-> Reina:   {sim_rey_reina:.4f}  (Casi idénticos: ~0.999)")
print(f"Similitud Rey <-> Manzana: {sim_rey_manzana:.4f}  (Sin relación: ~0.089)")
```

---

## 💡 Resumen Visual y Conexión con los Próximos Módulos

```text
Texto Humano:           "Los gatos duermen"
                             │
                             ▼ (1. Tokenizador BPE)
Tokens / Subwords:      ["Los", " gato", "s", " duerm", "en"]
                             │
                             ▼ (2. Mapeo a Enteros)
Token IDs:              [ 421,   3104,   85,    9512,   240 ]
                             │
                             ▼ (3. Lookup en Matriz E)
Vectores de Embedding:  [ e₄₂₁,  e₃₁₀₄,  e₈₅,   e₉₅₁₂,  e₂₄₀ ]  (Tensores continuos)
                             │
                             ▼
              ¡Listos para entrar a las capas de
              Autoatención del Transformer (Módulo 3)!
```

Al entender la tokenización BPE y el espacio vectorial de los embeddings, ya comprendes cómo una máquina "entiende" y organiza las palabras antes de procesarlas con los mecanismos de atención.
