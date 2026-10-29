# Módulo 1: De la Neurona Escalar al Perceptrón Multicapa y Backpropagation

---

## 🧭 Visión General: ¿Qué hace realmente una Red Neuronal?

A menudo se describe a las redes neuronales con términos abstractos como *"cajas negras"* o *"cerebros artificiales"*. En realidad, una red neuronal es algo mucho más tangible y elegante: **un aproximador universal de funciones matemáticas**.

Imagina que tienes una tabla con datos de entrada (por ejemplo, el tamaño de una casa y su cantidad de habitaciones) y quieres predecir una salida (su precio). Si la relación fuera una simple línea recta, bastaría con una regla de tres. Pero la realidad es compleja y llena de curvas. 

Una red neuronal resuelve esto combinando dos operaciones fundamentales repetidas en cadena:
1. **Ponderar y sumar entradas** (Álgebra lineal: multiplicaciones y sumas).
2. **Aplicar una curvatura o filtro de decisión** (Funciones de activación no lineales).
3. **Aprender de sus propios errores** ajustando sus perillas (*pesos*) hacia atrás mediante derivadas (Cálculo diferencial: *Backpropagation*).

A continuación, construiremos paso a paso cada pieza del rompecabezas, entendiendo el **porqué** de cada símbolo y cómo se traduce exactamente a código Python.

---

## 1. La Neurona Artificial: Anatomía y Álgebra Básica

### 1.1 La Analogía Intuitiva: Tomar una Decisión Ponderada
Imagina que estás decidiendo si vas a salir a correr hoy al aire libre (Salida: $1 = \text{Sí}$, $0 = \text{No}$). Para decidir, evalúas 3 factores (*entradas* $x$):
* $x_1$: ¿Hace buen clima? ($1 = \text{Sí}, 0 = \text{No}$)
* $x_2$: ¿Es fin de semana? ($1 = \text{Sí}, 0 = \text{No}$)
* $x_3$: ¿Tienes un amigo que te acompañe? ($1 = \text{Sí}, 0 = \text{No}$)

No todos los factores tienen la misma importancia para ti. Esa importancia subjetiva es el **peso sináptico ($w$)**:
* Si odias correr con lluvia, el clima tiene un peso gigante: $w_1 = +5$.
* Si no te importa tanto si es fin de semana o no: $w_2 = +1$.
* Si prefieres correr solo, que vaya un amigo puede restar: $w_3 = -2$.

Por último, existe tu predisposición natural: ¿Eres una persona muy deportista que sale casi siempre, o alguien perezoso que necesita un incentivo enorme? Esa predisposición base es el **sesgo (*bias*, $b$)**.
* Un sesgo negativo ($b = -4$) significa: *"Por defecto me quedo en casa, a menos que las razones a favor sumen mucho"*.

---

### 1.2 La Ecuación Matemática Formal

Una neurona artificial formaliza exactamente esta intuición:

$$z = \mathbf{w}^T \mathbf{x} + b = \sum_{i=1}^n w_i x_i + b = (w_1 x_1 + w_2 x_2 + \dots + w_n x_n) + b$$

Desglosemos cada término:
* $\mathbf{x} = [x_1, x_2, \dots, x_n]^T$: **Vector de entrada**. Son los datos crudos (ej. píxeles de una imagen, palabras o mediciones).
* $\mathbf{w} = [w_1, w_2, \dots, w_n]^T$: **Vector de pesos**. Representa la fuerza o influencia de cada entrada. Un peso positivo amplifica la señal; un peso negativo la inhibe; un peso cercano a cero la ignora.
* $b \in \mathbb{R}$: **Sesgo (*bias*)**. Es un término independiente que permite a la neurona desplazar su umbral de activación hacia arriba o hacia abajo, sin depender de que las entradas sean cero.
* $z$: **Valor de pre-activación**. Es la suma neta ponderada antes de pasar por el filtro final.

Una vez obtenido el valor $z$, la neurona lo pasa por una **función de activación** $f(z)$ para producir el resultado final $a$ (*activación*):

$$a = f(z)$$

```text
Entradas          Pesos               Suma Ponderada            Activación
  x₁ ──────────▶ ( w₁ ) ───┐
                           │
  x₂ ──────────▶ ( w₂ ) ───┼──▶ [ ∑ (wᵢ · xᵢ) + b ] ──▶ [ f(z) ] ──▶ Salida (a)
                           │            ▲
  x₃ ──────────▶ ( w₃ ) ───┘            │
                                    Sesgo (b)
```

---

### 1.3 Traducción Paso a Paso a Python

Veamos cómo se calcula esto en Python puro, sin ninguna librería externa:

```python
# 1. Definimos las entradas de la neurona (ej. 2 características numéricas)
x = [0.5, 0.8]

# 2. Definimos los pesos asociados a cada entrada
w = [0.4, -0.6]

# 3. Definimos el sesgo (bias)
b = 0.1

# 4. Calculamos la suma ponderada z = (x[0]*w[0] + x[1]*w[1]) + b
# Usamos zip(w, x) para emparejar cada peso con su entrada correspondiente
suma_ponderada = sum(peso * entrada for peso, entrada in zip(w, x))
z = suma_ponderada + b

print(f"Paso a paso:")
print(f"  (0.5 * 0.4) + (0.8 * -0.6) + 0.1")
print(f"  = 0.20 - 0.48 + 0.10")
print(f"  = {z:.2f}")  # Resultado: -0.18
```

---

## 2. Límites del Perceptrón Simple: La Paradoja de Minsky y Papert

### 2.1 El Perceptrón de Rosenblatt (1958)
El **Perceptrón Simple** fue el primer modelo computacional de una neurona que podía aprender automáticamente a partir de ejemplos. Utilizaba una función de activación de tipo **escalón (Heaviside)**:

$$f(z) = \begin{cases} 1 & \text{si } z \ge \theta \quad (\text{se activa / dispara}) \\ 0 & \text{si } z < \theta \quad (\text{permanece apagada}) \end{cases}$$

Donde $\theta$ representa el **umbral de disparo (*threshold*)**.

### 2.2 ¿Cómo aprende el Perceptrón? (Regla de Actualización de Pesos)
Cuando el perceptrón comete un error, ajustamos sus pesos en proporción a la diferencia entre lo que esperábamos ($y$) y lo que predijo ($\hat{y}$):

$$\text{Error: } e = y - \hat{y}$$
$$\Delta w_i = \lambda \cdot e \cdot x_i$$
$$\Delta \theta = -\lambda \cdot e$$

Donde:
* $e$: Puede ser $+1$ (si la neurona debió activarse pero no lo hizo), $-1$ (si se activó falsamente) o $0$ (si acertó).
* $\lambda$ (*lambda* o tasa de aprendizaje): Un número pequeño (ej. $0.1$) que controla qué tan drástico es el cambio en cada paso para no desestabilizar el aprendizaje.
* $x_i$: La entrada asociada. Si la entrada $x_i$ era $0$, ese peso no tuvo la culpa del error, por lo que su ajuste es $0$.

---

### 2.3 Separabilidad Lineal: ¿Por qué falló con la puerta XOR?

En 1969, Marvin Minsky y Seymour Papert publicaron un libro que provocó el primer *"invierno de la Inteligencia Artificial"*. Demostraron matemáticamente que **un solo perceptrón solo puede trazar una línea recta** (o un hiperplano plano en más dimensiones) para separar dos clases de datos.

Veamos la tabla de verdad de las puertas lógicas:

| $x_1$ | $x_2$ | **AND** (Y) | **OR** (O) | **XOR** (O Exclusivo) |
| :---: | :---: | :---: | :---: | :---: |
| 0 | 0 | 0 | 0 | **0** |
| 0 | 1 | 0 | 1 | **1** |
| 1 | 0 | 0 | 1 | **1** |
| 1 | 1 | 1 | 1 | **0** |

#### ¿Por qué XOR es imposible para una sola neurona?
Visualiza un plano cartesiano con 4 puntos:
* En **AND**: Solo el punto $(1,1)$ es positivo. Puedes trazar una línea recta que deje al $(1,1)$ de un lado y a los otros tres del otro.
* En **OR**: Los puntos $(0,1)$, $(1,0)$ y $(1,1)$ son positivos. Una sola línea recta los separa de $(0,0)$.
* En **XOR**: Los positivos están en las diagonales opuestas: $(0,1)$ y $(1,0)$ son $1$, mientras que $(0,0)$ y $(1,1)$ son $0$. **¡Es geométricamente imposible trazar una sola línea recta que separe los unos de los ceros!** Necesitas al menos dos líneas.

```text
    Puerta AND (Lineal)              Puerta XOR (No Lineal)
  x₂                                x₂
  1 │    o         ●                1 │    ●         o
    │                                 │      \     /
    │  ────────────── [Línea]         │   ¿Cómo separas
  0 │    o         o                0 │    o         ●   con 1 recta?
    └───┴─────────┴───▶ x₁            └───┴─────────┴───▶ x₁
        0         1                       0         1
   o = Salida 0, ● = Salida 1        o = Salida 0, ● = Salida 1
```

---

## 3. ¿Por qué necesitamos Capas Ocultas y Activaciones No Lineales?

Para resolver problemas no lineales como XOR, la solución es apilar neuronas en **capas intermedias (capas ocultas)**, formando un **Perceptrón Multicapa (MLP)**.

Pero aquí surge un misterio matemático crucial:
> **¿Por qué no podemos simplemente apilar neuronas lineales?**

Si cada neurona solo calcula una suma ponderada $z = Wx + b$, encadenar dos capas sería:
$$\text{Capa 1: } h = W_1 x + b_1$$
$$\text{Capa 2: } y = W_2 h + b_2 = W_2 (W_1 x + b_1) + b_2 = (W_2 W_1) x + (W_2 b_1 + b_2)$$

Observa atentamente: el producto de dos matrices $(W_2 W_1)$ es simplemente **otra matriz**, y $(W_2 b_1 + b_2)$ es simplemente **otro vector**. 
¡Sin importar si pones 2 capas o 100 capas, una combinación lineal de combinaciones lineales sigue siendo una simple línea recta! La red profunda colapsaría en una sola capa equivalente.

### La Solución: Funciones de Activación No Lineales
Al intercalar una función no lineal continua entre cada capa, permitimos que la red deforme, curve y doble el espacio geométrico, permitiéndole aproximar **cualquier función continua del universo** (*Teorema de Aproximación Universal*).

#### 1. La Función Sigmoide $\sigma(z)$
Toma cualquier número en la recta real (desde $-\infty$ hasta $+\infty$) y lo comprime suavemente al intervalo $(0, 1)$, ideal para interpretar la salida como una probabilidad:

$$\sigma(z) = \frac{1}{1 + e^{-z}}$$

```text
           σ(z)
         1.0 ┼───────────────────────┈┈┈  (Tiende a 1 cuando z es muy positivo)
             │                 .··
             │              .·
         0.5 ┼──────────── ● ──────────── (En z = 0, σ(0) = 0.5)
             │         .·
             │     .··
         0.0 ┼┈┈┈───────────────────────  (Tiende a 0 cuando z es muy negativo)
             └───┴─────────┴─────────┴───▶ z
                -4         0        +4
```

#### Su hermosa propiedad matemática para derivadas:
Para que la red aprenda con cálculo, necesitamos conocer la pendiente (derivada) de la función. La derivada de la sigmoide tiene una propiedad computacional asombrosa: se puede calcular directamente a partir de su propio valor de salida $a = \sigma(z)$:

$$\sigma'(z) = \sigma(z) \cdot (1 - \sigma(z)) = a \cdot (1 - a)$$

```python
import math

def sigmoid(z):
    # Clamping numérico para evitar desbordamiento (overflow) con exp()
    z_seguro = max(-500.0, min(500.0, z))
    return 1.0 / (1.0 + math.exp(-z_seguro))

def sigmoid_derivative(a):
    """
    Calcula la derivada sabiendo de antemano el valor ya activado 'a'.
    Si a = 0.5, la derivada máxima es 0.5 * (1 - 0.5) = 0.25.
    """
    return a * (1.0 - a)
```

---

## 4. Backpropagation: El Juego de "Repartir la Culpa" del Error

### 4.1 La Intuición detrás de Backpropagation
Imagina que una fábrica tiene 3 departamentos en serie que producen un producto. Al final, el cliente recibe el producto y dice: *"Este producto tiene un defecto de 10 puntos"*.
¿A quién despedimos o a quién corregimos?
* No podemos culpar a ciegas a todos por igual.
* Debemos rastrear el proceso **hacia atrás**:
  1. ¿Cuánto del defecto final se generó en la última estación de empaque?
  2. A través de las conexiones, ¿cuánto defecto vino de la estación intermedia?
  3. ¿Y cuánto vino de la materia prima inicial?

Eso es exactamente **Backpropagation (Retropropagación)**:
1. **Paso hacia adelante (*Forward Pass*)**: Los datos entran por la izquierda, se multiplican por los pesos capa por capa, y la red genera una predicción $\hat{y}$.
2. **Cálculo del Error**: Comparamos la predicción $\hat{y}$ con el valor real deseado $y$ mediante una función de pérdida (ej. Error Cuadrático Medio: $\mathcal{L} = \frac{1}{2}(y - \hat{y})^2$).
3. **Paso hacia atrás (*Backward Pass*)**: Usamos la **Regla de la Cadena** de cálculo diferencial para propagar el gradiente del error desde la salida hasta la primera capa, preguntando a cada peso: *"¿Cuánto ayudaste a causar este error?"*.

---

### 4.2 La Regla de la Cadena explicada con Perillas
Queremos saber cómo cambia el error total $\mathcal{L}$ si movemos ligeramente una perilla de peso $w$. Esa sensibilidad matemática es la derivada parcial $\frac{\partial \mathcal{L}}{\partial w}$.

Por la regla de la cadena:

$$\frac{\partial \mathcal{L}}{\partial w} = \underbrace{\frac{\partial \mathcal{L}}{\partial a}}_{\text{1. ¿Cómo cambia el error con la salida?}} \times \underbrace{\frac{\partial a}{\partial z}}_{\text{2. ¿Cómo cambia la activación con la suma?}} \times \underbrace{\frac{\partial z}{\partial w}}_{\text{3. ¿Cómo cambia la suma con el peso?}}$$

1. **Término 1:** Si $\mathcal{L} = \frac{1}{2}(a - y)^2$, su derivada respecto a $a$ es simplemente $(a - y)$.
2. **Término 2:** Si $a = \sigma(z)$, su derivada es $\sigma'(a) = a(1 - a)$.
3. **Término 3:** Si $z = w \cdot x + b$, su derivada respecto a $w$ es simplemente la entrada $x$.

Multiplicando los dos primeros términos obtenemos el factor de error local de la neurona, comúnmente llamado **delta ($\delta$)**:

$$\delta = (a - y) \cdot \sigma'(a)$$

Y el gradiente final para actualizar el peso es:

$$\frac{\partial \mathcal{L}}{\partial w} = \delta \cdot x$$

### 4.3 Actualización mediante Descenso del Gradiente
Una vez que sabemos hacia dónde sube el error, damos un paso en la dirección opuesta (hacia abajo) multiplicando por la tasa de aprendizaje $\alpha$:

$$w_{\text{nuevo}} = w_{\text{actual}} - \alpha \cdot \delta \cdot x$$
$$b_{\text{nuevo}} = b_{\text{actual}} - \alpha \cdot \delta$$

---

## 5. Arquitectura Completa de una Red MLP (2 Entradas $\to$ 2 Ocultas $\to$ 1 Salida)

Para resolver XOR, usamos una arquitectura mínima de 3 capas:

```text
Capa de Entrada         Capa Oculta (2 neuronas)       Capa de Salida (1 neurona)
    (x₁, x₂)                   (h₁, h₂)                          (ŷ)

     x₁ ─────────────┬────────────▶ ( h₁ ) ───────────┐
                     │             ▲     ▲            │
                     │    W₁       │     │     W₂     ├──▶ ( ŷ ) ──▶ Error con y
                     │  (2 x 2)    │     │   (2 x 1)  │
     x₂ ─────────────┴─────────────┼─────┘            │
                                   ▶ ( h₂ ) ──────────┘
```

### Código Completo y Comentado en Python Puro:

```python
import math

class RedNeuronalXOR:
    def __init__(self, lr=0.5):
        self.lr = lr  # Tasa de aprendizaje (learning rate)
        
        # Pesos entre Entrada (2) y Capa Oculta (2): Matriz 2x2
        # W1[i][j] conecta la entrada i con la neurona oculta j
        self.W1 = [
            [0.5, -0.2],  # Pesos desde x0 hacia [h0, h1]
            [0.4,  0.8]   # Pesos desde x1 hacia [h0, h1]
        ]
        self.b1 = [0.1, -0.1]  # Sesgos de las 2 neuronas ocultas
        
        # Pesos entre Capa Oculta (2) y Capa de Salida (1): Vector de 2 pesos
        self.W2 = [0.7, -0.5]
        self.b2 = 0.2          # Sesgo de la neurona de salida

    @staticmethod
    def sigmoid(z):
        z_safe = max(-500.0, min(500.0, z))
        return 1.0 / (1.0 + math.exp(-z_safe))

    @staticmethod
    def sigmoid_deriv(a):
        return a * (1.0 - a)

    def forward(self, x):
        """
        Paso hacia adelante (Forward Pass):
        Calcula las activaciones de la capa oculta (a1) y de la salida (a2).
        """
        # 1. Capa Oculta: Para cada una de las 2 neuronas ocultas
        # z1_0 = x[0]*W1[0][0] + x[1]*W1[1][0] + b1[0]
        # z1_1 = x[0]*W1[0][1] + x[1]*W1[1][1] + b1[1]
        a1 = []
        for j in range(2):
            z1_j = sum(x[i] * self.W1[i][j] for i in range(len(x))) + self.b1[j]
            a1.append(self.sigmoid(z1_j))

        # 2. Capa de Salida: Suma ponderada de las activaciones de la capa oculta
        z2 = sum(a1[j] * self.W2[j] for j in range(2)) + self.b2
        a2 = self.sigmoid(z2)

        return a1, a2

    def train_step(self, x, y):
        """
        Un paso de entrenamiento para un ejemplo (x, y):
        Forward -> Cálculo de Error -> Backpropagation -> Actualización de Pesos
        """
        # 1. Forward
        a1, a2 = self.forward(x)

        # 2. Backward - Capa de Salida
        # Derivada del error MSE: (a2 - y) multiplicada por la derivada de sigmoid
        delta2 = (a2 - y) * self.sigmoid_deriv(a2)

        # 3. Backward - Capa Oculta (Regla de la Cadena propagando delta2 hacia atrás)
        delta1 = []
        for j in range(len(a1)):
            # ¿Cuánto contribuyó la neurona oculta j a la salida? (delta2 * W2[j])
            error_propagado = delta2 * self.W2[j]
            d1_j = error_propagado * self.sigmoid_deriv(a1[j])
            delta1.append(d1_j)

        # 4. Actualización de Parámetros (Descenso de Gradiente)
        # Actualizamos pesos y sesgo de la capa de salida W2, b2
        for j in range(len(self.W2)):
            self.W2[j] -= self.lr * delta2 * a1[j]
        self.b2 -= self.lr * delta2

        # Actualizamos pesos y sesgos de la capa oculta W1, b1
        for i in range(len(x)):
            for j in range(len(delta1)):
                self.W1[i][j] -= self.lr * delta1[j] * x[i]
                self.b1[j] -= self.lr * delta1[j]

        # Retornamos el error cuadrático instantáneo
        return 0.5 * ((y - a2) ** 2)
```

---

## 💡 Resumen Visual y Conexión Mental

| Concepto | ¿Qué es intuitivamente? | Fórmula Matemática | En Código Python |
| :--- | :--- | :--- | :--- |
| **Entrada ($x$)** | Los datos que observamos (ej. píxeles, características) | $\mathbf{x} \in \mathbb{R}^n$ | `x = [0.5, 0.8]` |
| **Peso ($w$)** | La importancia o fuerza de cada conexión | $\mathbf{w} \in \mathbb{R}^n$ | `w = [0.4, -0.6]` |
| **Sesgo ($b$)** | La inclinación base o umbral independiente de las entradas | $b \in \mathbb{R}$ | `b = 0.1` |
| **Suma neta ($z$)** | La combinación lineal de datos y pesos | $z = \mathbf{w}^T \mathbf{x} + b$ | `sum(wi * xi) + b` |
| **Activación ($a$)** | La decisión filtrada con curvatura no lineal | $a = \sigma(z)$ | `1.0 / (1.0 + exp(-z))` |
| **Delta ($\delta$)** | La cuota de responsabilidad/culpa en el error | $\delta = (a - y) \cdot \sigma'(a)$ | `(a - y) * a * (1 - a)` |
| **Backprop** | Ajustar perillas en sentido opuesto al error | $w \leftarrow w - \alpha \delta x$ | `w -= lr * delta * x` |

Con esta base geométrica y algorítmica bien asentada, en el siguiente módulo veremos cómo esta misma idea de multiplicar vectores y aplicar filtros se extiende a secuencias completas de texto mediante el mecanismo de **Atención del Transformer**.
