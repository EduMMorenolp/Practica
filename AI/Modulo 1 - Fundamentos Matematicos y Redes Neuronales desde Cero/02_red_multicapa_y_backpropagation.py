# ==========================================
# RETO: RED MULTICAPA Y BACKPROPAGATION (XOR EN PYTHON PURO)
# Para ejecutar: python "AI/Modulo 1 - Fundamentos Matematicos y Redes Neuronales desde Cero/02_red_multicapa_y_backpropagation.py"
# ==========================================

import math
import random

print("=== RETO 2: RED MULTICAPA Y BACKPROPAGATION (PROBLEMA XOR) ===")

# ------------------------------------------
# Funciones matemáticas elementales
# ------------------------------------------
def sigmoid(z):
    # Clamping para evitar overflow numérico con exponente
    z_clamped = max(-500.0, min(500.0, z))
    return 1.0 / (1.0 + math.exp(-z_clamped))

def sigmoid_derivative(a):
    """Derivada de la sigmoide en función de su propia activación a = sigma(z)"""
    return a * (1.0 - a)

# ------------------------------------------
# 2.1 Perceptrón Multicapa (MLP) 2-2-1
# ------------------------------------------
# TODO: Implementa la red neuronal de 3 capas (2 entradas -> 2 neuronas ocultas -> 1 salida)
# para resolver la función XOR:
#   - Estructura:
#       self.W1: matriz 2x2 (pesos entrada a oculta)
#       self.b1: lista de 2 sesgos para capa oculta
#       self.W2: lista de 2 pesos (capa oculta a neurona de salida)
#       self.b2: sesgo escalar para neurona de salida
#   - forward(self, x):
#       Capa oculta: z1_j = x[0]*W1[0][j] + x[1]*W1[1][j] + b1[j]
#                    a1_j = sigmoid(z1_j)
#       Capa salida: z2 = a1[0]*W2[0] + a1[1]*W2[1] + b2
#                    a2 = sigmoid(z2)
#       Retorna (a1, a2)
#   - backward(self, x, y, a1, a2):
#       Calcula el gradiente de salida: d2 = (a2 - y) * sigmoid_derivative(a2)
#       Calcula gradientes ocultos: d1[j] = (d2 * W2[j]) * sigmoid_derivative(a1[j])
#       Actualiza pesos y sesgos con self.lr:
#         W2[j] -= self.lr * d2 * a1[j]
#         b2 -= self.lr * d2
#         W1[i][j] -= self.lr * d1[j] * x[i]
#         b1[j] -= self.lr * d1[j]

class RedMulticapaXOR:
    def __init__(self, lr=0.5):
        self.lr = lr
        random.seed(42)
        # Inicialización de pesos sinápticos aleatorios pequeños
        self.W1 = [[random.uniform(-1, 1), random.uniform(-1, 1)] for _ in range(2)]
        self.b1 = [0.0, 0.0]
        self.W2 = [random.uniform(-1, 1), random.uniform(-1, 1)]
        self.b2 = 0.0

    def forward(self, x):
        # TODO: Implementa la propagación hacia adelante
        pass

    def train_step(self, x, y):
        # TODO: Realiza forward, calcula error y ejecuta backpropagation
        pass

    def train(self, X, y, epochs=5000):
        for _ in range(epochs):
            for xi, yi in zip(X, y):
                self.train_step(xi, yi)

    def predict(self, x):
        _, a2 = self.forward(x)
        return 1 if a2 >= 0.5 else 0


# ==========================================
# 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA (no modificar)
# ==========================================
def validar(nombre, condicion, pista):
    try:
        if condicion():
            print(f"✔ {nombre}")
            return True
        print(f"❌ {nombre}: {pista}")
    except Exception as err:
        print(f"❌ {nombre}: Error -> {err}")
    return False

if __name__ == "__main__":
    print("\n--- Comprobación de Resultados ---")

    X_xor = [[0, 0], [0, 1], [1, 0], [1, 1]]
    y_xor = [0, 1, 1, 0]

    # Test 1: Funciones de activación
    def test_activaciones():
        s0 = sigmoid(0.0)
        ds = sigmoid_derivative(0.5)
        return abs(s0 - 0.5) < 1e-5 and abs(ds - 0.25) < 1e-5
    validar("RETO 2.1 (Sigmoide y su derivada)", test_activaciones, "sigmoid(0) = 0.5 y sigmoid_derivative(0.5) = 0.25")

    # Test 2: Forward pass de dimensiones correctas
    def test_forward():
        red = RedMulticapaXOR()
        res = red.forward([1, 0])
        if res is None: return False
        a1, a2 = res
        return len(a1) == 2 and (0.0 <= a2 <= 1.0)
    validar("RETO 2.1 (Forward Pass)", test_forward, "forward([1, 0]) debe retornar (a1, a2) con a1 de 2 elementos y a2 escalar entre 0 y 1")

    # Test 3: Solución exitosa al problema no lineal XOR
    def test_xor_completo():
        red = RedMulticapaXOR(lr=0.8)
        red.train(X_xor, y_xor, epochs=8000)
        preds = [red.predict(x) for x in X_xor]
        return preds == y_xor
    validar("RETO 2.1 (Resolución de la frontera no lineal XOR)", test_xor_completo, "La red entrenada con backprop debe clasificar [0, 1, 1, 0] para XOR")

    print("\n--- Fin de la comprobación ---\n")
