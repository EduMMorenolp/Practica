# Módulo 3: La Arquitectura Transformer y Scaled Dot-Product Attention

---

## 🧭 Visión General: La Revolución del Mecanismo de Atención

Hasta el año 2017, para que una inteligencia artificial procesara texto se utilizaban **Redes Neuronales Recurrentes (RNN y LSTM)**. Las RNN leían el texto palabra por palabra, de izquierda a derecha, como una persona leyendo una cinta transportadora:
* Leían la palabra 1 $\rightarrow$ actualizaban una memoria interna.
* Leían la palabra 2 $\rightarrow$ actualizaban la memoria...
* Pero al llegar a la palabra 50, ¡la red ya había olvidado los detalles de la palabra 1! (Problema de desvanecimiento de memoria a largo plazo).
* Y lo peor: **no se podían procesar en paralelo** en tarjetas gráficas (GPUs), porque para procesar la palabra 10 era obligatorio haber terminado la 9.

En 2017, el equipo de Google Brain publicó el célebre artículo *"Attention Is All You Need"* (Vaswani et al.), introduciendo la **Arquitectura Transformer**. Su propuesta fue radical: **eliminar por completo la recurrencia y procesar todas las palabras simultáneamente en paralelo**, permitiendo que cada palabra "preste atención" directamente a cualquier otra palabra de la frase, sin importar la distancia.

A continuación, entenderemos paso a paso cómo funciona esta maravilla matemática y cómo se programa en Python puro.

---

## 1. El Dilema del Paralelismo: ¿Cómo sabe el Transformer el Orden de las Palabras?

Si procesamos todas las palabras al mismo tiempo como un conjunto matricial, surge un problema evidente:
Para el Transformer, las frases:
> *"El perro mordió al hombre"*
> y *"El hombre mordió al perro"*

tendrían exactamente los mismos vectores de embedding, ¡pero su significado es diametralmente opuesto! 

Para resolver esto sin perder la capacidad de procesar en paralelo, se inventó la **Codificación Posicional (Positional Encoding)**.

---

### 1.1 La Analogía: Un Reloj de Múltiples Agujas para Cada Posición
¿Cómo podemos darle a cada posición secuencial (posición 0, posición 1, posición 2...) una huella digital matemática única sin saturar los números?

Vaswani et al. utilizaron una combinación de **ondas sinusoidales y cosenoidales** de diferentes frecuencias:
* Las dimensiones iniciales oscilan rapidísimo (como el segundero de un reloj).
* Las dimensiones intermedias oscilan a velocidad moderada (como el minutero).
* Las dimensiones finales oscilan lentísimo (como la aguja de las horas).

```text
Posición 0 (Palabra 1):  [  0.00,  1.00,  0.00,  1.00,  ... ]
Posición 1 (Palabra 2):  [  0.84,  0.54,  0.09,  0.99,  ... ]
Posición 2 (Palabra 3):  [  0.90, -0.41,  0.19,  0.98,  ... ]
                               ▲      ▲      ▲      ▲
                               Dim 0  Dim 1  Dim 2  Dim 3
                             (Frecuencias de oscilación decreciente)
```

### 1.2 La Ecuación Matemática Formal

Para cada posición $pos$ y cada dimensión $i$ del vector:

$$PE_{(pos, 2i)} = \sin\left(\frac{pos}{10000^{\frac{2i}{d_{model}}}}\right)$$
$$PE_{(pos, 2i+1)} = \cos\left(\frac{pos}{10000^{\frac{2i}{d_{model}}}}\right)$$

Donde:
* $pos$: Índice de la palabra en la frase ($0, 1, 2, \dots$).
* $i$: Índice de la dimensión ($0 \le 2i < d_{model}$).
* $d_{model}$: Tamaño del vector de embedding (ej. 512 en el paper original).

#### ¿Por qué simplemente se suma?
$$\mathbf{X}_{\text{final}} = \mathbf{Embedding} + \mathbf{PE}$$
Al sumar el vector de posición directamente al vector de embedding, la representación resultante conserva tanto **qué palabra es** (semántica) como **dónde está ubicada** (sintaxis).

---

## 2. El Mecanismo de Atención: Consultas (Q), Claves (K) y Valores (V)

La fórmula más famosa de la inteligencia artificial moderna es:

$$\text{Attention}(\mathbf{Q}, \mathbf{K}, \mathbf{V}) = \text{softmax}\left(\frac{\mathbf{Q}\mathbf{K}^T}{\sqrt{d_k}}\right) \mathbf{V}$$

A primera vista parece intimidante, pero su intuición proviene de un sistema cotidiano: **los motores de búsqueda (como YouTube o una base de datos)**.

---

### 2.1 La Analogía del Buscador de Videos
Imagina que estás navegando en YouTube:
1. **La Consulta (Query - $\mathbf{Q}$):** Lo que tú escribes en la barra de búsqueda. *"tutorial de cocina italiana"*.
2. **Las Claves (Keys - $\mathbf{K}$):** Los títulos, etiquetas y palabras clave que cada video tiene registrados en el servidor:
   * Video 1 (Key): *"receta de pasta carbonara casera"* (¡Muy relevante!)
   * Video 2 (Key): *"reparación de motor de automóvil"* (Cero relevante)
   * Video 3 (Key): *"historia de Roma"* (Medianamente relevante)
3. **El Producto Punto $\mathbf{Q} \cdot \mathbf{K}^T$:** Mide la **afinidad o compatibilidad** entre lo que buscas ($Q$) y lo que ofrece cada video ($K$).
4. **La función Softmax:** Convierte esas afinidades en porcentajes que suman $100\%$:
   * $85\%$ de relevancia al Video 1.
   * $1\%$ al Video 2.
   * $14\%$ al Video 3.
5. **Los Valores (Values - $\mathbf{V}$):** Es el **contenido real del video** que vas a ver. El resultado que recibes es una mezcla ponderada: verás un $85\%$ del contenido del video 1 y casi nada del video 2.

```text
En una Frase: "El banco central anunció hoy nuevas tasas de interés"

Palabra actual: "banco" (Query: ¿A qué tipo de banco me refiero?)
  - Se compara contra todas las Keys de la frase:
    * Key("central")  -> Afinidad ALTA (0.75)
    * Key("interés")  -> Afinidad ALTA (0.20)
    * Key("hoy")      -> Afinidad BAJA (0.05)
  - El resultado contextualizado para "banco" absorbe el Value de "central" y "interés",
    ¡evitando que el modelo lo confunda con un banco de plaza para sentarse!
```

---

### 2.2 ¿Por qué se divide por $\sqrt{d_k}$? (Scaled Dot-Product)

Esta división es el factor de escala (*Scaled*). ¿Por qué no dejamos simplemente $\mathbf{Q}\mathbf{K}^T$?

* Cuando los vectores tienen muchas dimensiones (ej. $d_k = 64$ o $128$), el producto punto acumula la suma de 64 o 128 multiplicaciones.
* Matemáticamente, la varianza del producto punto crece de forma proporcional a $d_k$.
* Si no dividimos, los números en la matriz de afinidad crecen desmesuradamente (ej. valores como $+35$ o $-40$).
* Al pasar números tan extremos por la función `softmax`, la salida colapsa: el valor máximo recibe probabilidad $0.999999$ y el resto $0.000000$. En esas regiones planas extremas, **la derivada es prácticamente cero**.
* **Consecuencia fatal:** ¡El gradiente se desvanece y la red deja de aprender!
* Al dividir por $\sqrt{d_k}$ (por ejemplo $\sqrt{64} = 8$), estabilizamos la varianza en $1.0$, manteniendo los números en una escala saludable alrededor de $[-3, +3]$ donde el gradiente fluye perfectamente.

---

### 2.3 Máscara Causal: ¿Por qué usamos $-\infty$ para predecir texto?

Cuando un modelo genera texto (como GPT), debe predecir la siguiente palabra basándose **únicamente en las palabras anteriores**. ¡No tiene permitido hacer trampa mirando las palabras del futuro!

Para evitar que el token en la posición 2 mire a la posición 3 o 4, aplicamos una **Máscara Causal (Triangular Superior)** reemplazando los puntajes del futuro por un número infinitamente negativo (ej. $-10^9$ o $-\infty$):

$$\text{Puntaje con máscara} = \begin{bmatrix} 
\text{score}_{0,0} & -\infty & -\infty \\
\text{score}_{1,0} & \text{score}_{1,1} & -\infty \\
\text{score}_{2,0} & \text{score}_{2,1} & \text{score}_{2,2}
\end{bmatrix}$$

Al aplicar la función Softmax:
$$e^{-\infty} = 0$$
¡La probabilidad de atender al futuro se convierte matemáticamente en un **cero absoluto ($0.0$)**!

---

## 3. Multi-Head Attention: Múltiples Detectives en Paralelo

Una sola cabeza de atención puede enfocarse en una sola relación a la vez. Pero el lenguaje tiene múltiples capas simultáneas:
* Capa gramatical: El sujeto concuerda en género y número con el verbo.
* Capa de entidades: Un pronombre como *"él"* hace referencia a *"Juan"*.
* Capa temporal: Los adverbios como *"ayer"* se conectan con verbos en pasado.

En lugar de calcular una sola atención grande, el Transformer divide la dimensión $d_{model}$ en **$h$ cabezas paralelas** (típicamente $h = 8$).

```text
Entrada X ──┬──▶ Cabeza 1 (Afinidad gramatical) ────┐
            ├──▶ Cabeza 2 (Afinidad de pronombres) ──┼──▶ [ Concatenar ] ──▶ Matriz Wᵒ ──▶ Salida
            └──▶ Cabeza 8 (Afinidad semántica) ─────┘
```

Cada cabeza aprende a especializarse en un aspecto lingüístico diferente de manera completamente autónoma.

---

## 4. Implementación Completa en Python Puro

A continuación implementamos el cálculo matricial exacto de atención con máscara causal:

```python
import math

def producto_matricial(A, B):
    """Multiplica dos matrices A (n x m) y B (m x p) -> C (n x p)."""
    filas_A, cols_A = len(A), len(A[0])
    cols_B = len(B[0])
    C = [[0.0] * cols_B for _ in range(filas_A)]
    for i in range(filas_A):
        for j in range(cols_B):
            C[i][j] = sum(A[i][k] * B[k][j] for k in range(cols_A))
    return C

def transponer(M):
    """Transpone una matriz (intercambia filas por columnas)."""
    return [[M[i][j] for i in range(len(M))] for j in range(len(M[0]))]

def softmax_filas(matriz):
    """Aplica softmax por cada fila asegurando estabilidad numérica."""
    salida = []
    for fila in matriz:
        max_val = max(fila)
        exp_vals = [math.exp(v - max_val) for v in fila]
        suma = sum(exp_vals)
        salida.append([v / suma for v in exp_vals])
    return salida

def scaled_dot_product_attention(Q, K, V, aplicar_mascara_causal=True):
    """
    Calcula: Attention(Q, K, V) = softmax((Q @ K.T) / sqrt(d_k) + mask) @ V
    """
    d_k = len(Q[0])
    T = len(Q)  # Longitud de la secuencia de tokens
    
    # 1. Multiplicación de Consultas por Claves transpuestas (Q @ K^T)
    K_T = transponer(K)
    scores = producto_matricial(Q, K_T)
    
    # 2. Escalar por la raíz cuadrada de la dimensión
    factor_escala = math.sqrt(d_k)
    for i in range(T):
        for j in range(T):
            scores[i][j] /= factor_escala
            
            # 3. Aplicar máscara causal (-infinito si j > i, para bloquear el futuro)
            if aplicar_mascara_causal and j > i:
                scores[i][j] = -1e9
                
    # 4. Softmax por fila: Obtenemos los pesos de atención (suman 1.0 por fila)
    pesos_atencion = softmax_filas(scores)
    
    # 5. Multiplicar las probabilidades por los Valores (V)
    contexto_salida = producto_matricial(pesos_atencion, V)
    
    return contexto_salida, pesos_atencion
```

---

## 💡 Resumen Mental de la Arquitectura

1. **Tokens + Positional Encoding**: Se convierten palabras en números y se les inyecta su coordenada temporal mediante ondas sinusoidales.
2. **Q, K, V**: Cada palabra genera una consulta (*qué busca*), una clave (*qué ofrece*) y un valor (*su contenido*).
3. **Escalar y Enmascarar**: Se divide por $\sqrt{d_k}$ para proteger los gradientes y se usa $-\infty$ para no ver el futuro.
4. **Softmax y Mezcla**: Se calculan las ponderaciones y se produce la nueva representación contextualizada de cada palabra.
