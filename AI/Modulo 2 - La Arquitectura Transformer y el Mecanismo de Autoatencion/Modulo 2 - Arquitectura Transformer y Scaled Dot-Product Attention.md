# Módulo 2: La Arquitectura Transformer y Scaled Dot-Product Attention

En 2017, Vaswani et al. (Google Brain) publicaron el paper seminal *"Attention Is All You Need"*, reemplazando por completo las arquitecturas recurrentes (RNN, LSTM) y convolucionales por un mecanismo basado exclusivamente en **atención matricial**.

---

## 1. El Problema de las Redes Recurrentes (RNNs)

Las redes recurrentes procesan texto de forma estrictamente secuencial ($h_t = f(h_{t-1}, x_t)$):
1. **Cuello de botella de paralelización:** No es posible calcular el paso $t=100$ sin haber procesado los 99 pasos anteriores, impidiendo aprovechar el hardware masivamente paralelo de las GPUs modernas.
2. **Desvanecimiento del gradiente en dependencias lejanas:** La información de las primeras palabras se diluye conforme la secuencia se extiende a miles de tokens.

El Transformer resuelve ambos problemas procesando **toda la secuencia de tokens en paralelo en un único cálculo tensorial**.

---

## 2. Encodificación Posicional (Positional Encoding)

Al eliminar la recurrencia, el modelo no tiene noción innata del orden de las palabras ("El perro mordió al hombre" vs "El hombre mordió al perro"). Para inyectar la posición sin perder la invariancia de traducción, se suma a cada vector de embedding un vector de posición sinusoidal:

$$PE_{(pos, 2i)} = \sin\left(\frac{pos}{10000^{\frac{2i}{d_{model}}}}\right)$$
$$PE_{(pos, 2i+1)} = \cos\left(\frac{pos}{10000^{\frac{2i}{d_{model}}}}\right)$$

Donde $pos$ es la posición del token en la frase e $i$ es el índice de la dimensión del embedding ($0 \le i < d_{model}/2$).

---

## 3. El Álgebra de $Q$, $K$ y $V$

El Transformer conceptualiza la atención como una consulta en una base de datos asociativa diferenciable:
- **Query ($\mathbf{Q}$):** Lo que el token actual está buscando.
- **Key ($\mathbf{K}$):** La clave o descriptor de lo que cada token contiene.
- **Value ($\mathbf{V}$):** La información semántica real que se transferirá.

Para una secuencia de entrada $\mathbf{X} \in \mathbb{R}^{n \times d_{model}}$, se obtienen proyectando linealmente con matrices de pesos entrenables:

$$\mathbf{Q} = \mathbf{X} \mathbf{W}^Q, \quad \mathbf{K} = \mathbf{X} \mathbf{W}^K, \quad \mathbf{V} = \mathbf{X} \mathbf{W}^V$$

Donde $\mathbf{W}^Q, \mathbf{W}^K \in \mathbb{R}^{d_{model} \times d_k}$ y $\mathbf{W}^V \in \mathbb{R}^{d_{model} \times d_v}$.

---

## 4. Scaled Dot-Product Attention

La afinidad o similitud entre la consulta de un token y las claves de todos los demás se calcula mediante el producto punto:

$$\text{Attention}(\mathbf{Q}, \mathbf{K}, \mathbf{V}) = \text{softmax}\left(\frac{\mathbf{Q}\mathbf{K}^T}{\sqrt{d_k}}\right) \mathbf{V}$$

### ¿Por qué el factor de escala $\sqrt{d_k}$?
Para valores grandes de dimensión $d_k$ (ej. $d_k = 64$), la magnitud del producto escalar crece considerablemente, empujando la función softmax hacia regiones con gradientes extremadamente pequeños (saturación). Dividir por $\sqrt{d_k}$ normaliza la varianza a 1, estabilizando los gradientes durante el entrenamiento.

---

## 5. Multi-Head Attention (MHA)

En lugar de calcular una sola atención con dimensión $d_{model}$, Multi-Head Attention proyecta las consultas, claves y valores $h$ veces en paralelo a subespacios de menor dimensión ($d_k = d_{model} / h$):

$$\text{MultiHead}(\mathbf{Q}, \mathbf{K}, \mathbf{V}) = \text{Concat}(\text{head}_1, \dots, \text{head}_h) \mathbf{W}^O$$

$$\text{donde } \text{head}_i = \text{Attention}(\mathbf{Q}\mathbf{W}_i^Q, \mathbf{K}\mathbf{W}_i^K, \mathbf{V}\mathbf{W}_i^V)$$

Esto permite que diferentes cabezas atiendan a diferentes relaciones lingüísticas simultáneamente (ej. una cabeza atiende a relaciones sujeto-verbo, otra a correferencias de pronombres y otra a complementos de lugar).
