# ==========================================
# RETO: PERCEPTRÓN SIMPLE Y PUERTAS LÓGICAS (PYTHON PURO)
# Para ejecutar: python "AI/Modulo 1 - Fundamentos Matematicos y Redes Neuronales desde Cero/01_perceptron_simple_y_puertas_logicas.py"
# ==========================================

print("=== RETO 1: PERCEPTRÓN SIMPLE Y PUERTAS LÓGICAS ===")

# ------------------------------------------
# 1.1 Modelo Matemático de la Neurona Escalar
# ------------------------------------------
# TODO: Implementa la clase PerceptronSimple utilizando únicamente listas y funciones nativas de Python:
#   - __init__(self, n_inputs, learning_rate=0.1, threshold=0.5):
#       Inicializa una lista de pesos 'self.weights' de longitud 'n_inputs' en 0.0,
#       'self.lr' con la tasa de aprendizaje y 'self.threshold' con el umbral theta.
#   - predict(self, x):
#       Calcula el producto punto suma ponderada: z = sum(w * xi for w, xi in zip(self.weights, x))
#       Retorna 1 si z >= self.threshold, de lo contrario 0.
#   - train(self, X, y, epochs=20):
#       Para cada época y para cada par (x_i, target) en zip(X, y):
#           pred = self.predict(x_i)
#           error = target - pred
#           Actualiza cada peso: w_j = w_j + self.lr * error * x_i[j]
#           Actualiza el umbral: self.threshold = self.threshold - self.lr * error

class PerceptronSimple:
    def __init__(self, n_inputs, learning_rate=0.1, threshold=0.5):
        # TODO: Inicializa weights, lr y threshold aquí
        pass

    def predict(self, x):
        # TODO: Calcula z y aplica función escalón con threshold
        pass

    def train(self, X, y, epochs=20):
        # TODO: Implementa el bucle de actualización por regla de Rosenblatt
        pass


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

    # Datos de entrenamiento para compuerta OR
    X_or = [[0, 0], [0, 1], [1, 0], [1, 1]]
    y_or = [0, 1, 1, 1]

    # Datos de entrenamiento para compuerta AND
    X_and = [[0, 0], [0, 1], [1, 0], [1, 1]]
    y_and = [0, 0, 0, 1]

    # Test 1: Instanciación e inicialización
    def test_init():
        p = PerceptronSimple(2, learning_rate=0.1, threshold=0.2)
        return len(p.weights) == 2 and p.weights == [0.0, 0.0] and p.lr == 0.1 and p.threshold == 0.2
    validar("RETO 1.1 (Inicialización Perceptrón)", test_init, "Inicializa self.weights como lista de ceros de tamaño n_inputs")

    # Test 2: Entrenamiento y convergencia en compuerta OR
    def test_or():
        p_or = PerceptronSimple(2, learning_rate=0.1, threshold=0.5)
        p_or.train(X_or, y_or, epochs=30)
        preds = [p_or.predict(x) for x in X_or]
        return preds == y_or
    validar("RETO 1.1 (Convergencia Puerta OR)", test_or, "El perceptrón entrenado debe predecir [0, 1, 1, 1] para la compuerta OR")

    # Test 3: Entrenamiento y convergencia en compuerta AND
    def test_and():
        p_and = PerceptronSimple(2, learning_rate=0.1, threshold=0.5)
        p_and.train(X_and, y_and, epochs=30)
        preds = [p_and.predict(x) for x in X_and]
        return preds == y_and
    validar("RETO 1.1 (Convergencia Puerta AND)", test_and, "El perceptrón entrenado debe predecir [0, 0, 0, 1] para la compuerta AND")

    print("\n--- Fin de la comprobación ---\n")
