# Módulo 1: De la Neurona Escalar al Perceptrón Multicapa y Backpropagation

El Deep Learning moderno se fundamenta en un principio matemático elemental: la composición sucesiva de **transformaciones afines (álgebra lineal)** intercaladas con **funciones de activación no lineales**, optimizadas mediante el **cálculo diferencial multivariable**.

---

## 1. La Neurona Artificial: Álgebra de la Entrada y el Sesgo

Una neurona individual recibe un vector de entradas $\mathbf{x} = [x_1, x_2, \dots, x_n]^T \in \mathbb{R}^n$, ponderado por un vector de pesos sinápticos $\mathbf{w} = [w_1, w_2, \dots, w_n]^T$ y desplazado por un término independiente escalar denominado **sesgo (*bias*)** $b \in \mathbb{R}$:

$$z = \mathbf{w}^T \mathbf{x} + b = \sum_{i=1}^n w_i x_i + b$$

El valor pre-activado $z$ pasa a través de una función de activación no lineal $f(z)$ para generar la activación de salida $a$:

$$a = f(z)$$

### El Rol Crítico del Sesgo ($b$):
Sin el sesgo $b$, el hiperplano de decisión estaría forzado a pasar siempre por el origen de coordenadas $(0, 0, \dots, 0)$, limitando severamente la capacidad del modelo para separar clases desplazadas en el espacio vectorial.

---

## 2. Límites del Perceptrón Simple: La Paradoja de Minsky y Papert

En 1958, Frank Rosenblatt concibió el **Perceptrón Simple** con función de activación escalón (Heaviside):

$$f(z) = \begin{cases} 1 & \text{si } z \ge \theta \\ 0 & \text{si } z < \theta \end{cases}$$

Donde $\theta$ representa el umbral de disparo (*threshold*). La regla de aprendizaje para ajustar los pesos ante un error $e = y - \hat{y}$ con tasa de aprendizaje $\lambda$ es:

$$\Delta w_i = \lambda \cdot e \cdot x_i$$
$$\Delta \theta = -\lambda \cdot e$$

### Separabilidad Lineal y la Tragedia del XOR:
En 1969, Marvin Minsky y Seymour Papert publicaron *Perceptrons*, demostrando que un perceptrón de una sola capa es incapaz de clasificar funciones no linealmente separables como la disyunción exclusiva (**XOR**):

| $x_1$ | $x_2$ | $x_1 \text{ AND } x_2$ | $x_1 \text{ OR } x_2$ | $x_1 \text{ XOR } x_2$ |
| :---: | :---: | :---: | :---: | :---: |
| 0 | 0 | 0 | 0 | **0** |
| 0 | 1 | 0 | 1 | **1** |
| 1 | 0 | 0 | 1 | **1** |
| 1 | 1 | 1 | 1 | **0** |

Ninguna línea recta en $\mathbb{R}^2$ puede separar los ceros de los unos en la tabla XOR. Para resolverlo se requiere una capa oculta intermedia que proyecte las entradas a un espacio de mayor dimensión donde sí sean separables.

---

## 3. Perceptrón Multicapa (MLP) y Notación Matricial

Un Perceptrón Multicapa apila múltiples capas densas. Para una capa $l$:

$$\mathbf{z}^{[l]} = \mathbf{W}^{[l]} \mathbf{a}^{[l-1]} + \mathbf{b}^{[l]}$$
$$\mathbf{a}^{[l]} = f(\mathbf{z}^{[l]})$$

Donde $\mathbf{W}^{[l]}$ es la matriz de pesos de dimensión $(n^{[l]} \times n^{[l-1]})$ y $\mathbf{a}^{[0]} = \mathbf{x}$.

---

## 4. Algoritmo de Retropropagación (Backpropagation)

Para entrenar redes profundas, la función escalón no sirve porque su derivada es cero en casi todas partes e indefinida en el origen. Se requieren **funciones continuas y diferenciables**:

### 1. Función Sigmoide:
$$\sigma(z) = \frac{1}{1 + e^{-z}}, \quad \sigma'(z) = \sigma(z)(1 - \sigma(z))$$

### 2. Tangente Hiperbólica ($\tanh$):
$$\tanh(z) = \frac{e^z - e^{-z}}{e^z + e^{-z}}, \quad \tanh'(z) = 1 - \tanh^2(z)$$

### Regla de la Cadena y Cálculo de Gradientes:
Para una función de pérdida de error cuadrático $L = \frac{1}{2}(y - a^{[2]})^2$:

1. **Error en la capa de salida ($l=2$):**
   $$\delta^{[2]} = \frac{\partial L}{\partial z^{[2]}} = \frac{\partial L}{\partial a^{[2]}} \cdot \frac{\partial a^{[2]}}{\partial z^{[2]}} = (a^{[2]} - y) \odot f'(\mathbf{z}^{[2]})$$

2. **Propagación del error a la capa oculta ($l=1$):**
   $$\delta^{[1]} = \left( (\mathbf{W}^{[2]})^T \delta^{[2]} \right) \odot f'(\mathbf{z}^{[1]})$$

3. **Gradientes de Pesos y Sesgos:**
   $$\frac{\partial L}{\partial \mathbf{W}^{[l]}} = \delta^{[l]} (\mathbf{a}^{[l-1]})^T, \quad \frac{\partial L}{\partial \mathbf{b}^{[l]}} = \delta^{[l]}$$

4. **Descenso de Gradiente:**
   $$\mathbf{W}^{[l]} \leftarrow \mathbf{W}^{[l]} - \alpha \frac{\partial L}{\partial \mathbf{W}^{[l]}}$$
   $$\mathbf{b}^{[l]} \leftarrow \mathbf{b}^{[l]} - \alpha \frac{\partial L}{\partial \mathbf{b}^{[l]}}$$
