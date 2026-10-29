# ==========================================
# RETO: SCALED DOT-PRODUCT ATTENTION (PYTHON PURO)
# Para ejecutar: python "AI/Modulo 2 - La Arquitectura Transformer y el Mecanismo de Autoatencion/02_scaled_dot_product_y_multihead_attention.py"
# ==========================================

import math

print("=== RETO 2: SCALED DOT-PRODUCT ATTENTION DEL TRANSFORMER ===")

# ------------------------------------------
# Operaciones matriciales en Python puro
# ------------------------------------------
def matmul(A, B):
    """Multiplicación de matrices (n x m) x (m x p) = (n x p)"""
    n, m = len(A), len(A[0])
    p = len(B[0])
    C = [[0.0 for _ in range(p)] for _ in range(n)]
    for i in range(n):
        for j in range(p):
            for k in range(m):
                C[i][j] += A[i][k] * B[k][j]
    return C

def transpose(A):
    """Transposición de matriz A^T"""
    n, m = len(A), len(A[0])
    return [[A[i][j] for i in range(n)] for j in range(m)]

def softmax_rowwise(matrix):
    """Aplica softmax por cada fila de la matriz para obtener probabilidades que sumen 1.0"""
    result = []
    for row in matrix:
        max_val = max(row)
        exp_row = [math.exp(val - max_val) for val in row]
        sum_exp = sum(exp_row)
        result.append([val / sum_exp for val in exp_row])
    return result

# ------------------------------------------
# 2.1 Scaled Dot-Product Attention
# ------------------------------------------
# TODO: Implementa la función scaled_dot_product_attention(Q, K, V, mask=None):
#   1. Calcula d_k = longitud de cada vector de consulta (len(Q[0])).
#   2. Multiplica las matrices Q y K^T: scores = matmul(Q, transpose(K))
#   3. Escala dividiendo cada elemento de scores por math.sqrt(d_k).
#   4. Si mask no es None, para cada celda donde mask[i][j] == 0, suma un valor muy negativo (-1e9) a scores[i][j].
#   5. Aplica softmax por filas: attention_weights = softmax_rowwise(scores)
#   6. Multiplica los pesos de atención por V: output = matmul(attention_weights, V)
# Retorna (output, attention_weights).

def scaled_dot_product_attention(Q, K, V, mask=None):
    # TODO: Implementa los 6 pasos de la fórmula de atención
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

    # Matrices de prueba: 2 tokens, d_k = d_v = 2
    Q = [
        [1.0, 0.0],  # Token 1
        [0.0, 1.0]   # Token 2
    ]
    K = [
        [1.0, 0.0],  # Token 1 clave
        [0.0, 1.0]   # Token 2 clave
    ]
    V = [
        [10.0, 20.0], # Información del token 1
        [30.0, 40.0]  # Información del token 2
    ]

    # Test 1: Dimensiones y suma de pesos de atención = 1.0
    def test_dimensions_and_sum():
        out, weights = scaled_dot_product_attention(Q, K, V)
        if out is None or weights is None: return False
        sum_row0 = sum(weights[0])
        sum_row1 = sum(weights[1])
        return len(out) == 2 and len(out[0]) == 2 and \
               abs(sum_row0 - 1.0) < 1e-4 and abs(sum_row1 - 1.0) < 1e-4
    validar("RETO 2.1 (Dimensiones y normalización Softmax)", test_dimensions_and_sum, "Cada fila de attention_weights debe sumar 1.0")

    # Test 2: Afinidad máxima con la propia clave
    def test_diagonal_affinity():
        out, weights = scaled_dot_product_attention(Q, K, V)
        # Como Q[0] es idéntico a K[0], el peso weights[0][0] debe ser mayor que weights[0][1]
        return weights[0][0] > weights[0][1] and weights[1][1] > weights[1][0]
    validar("RETO 2.1 (Afinidad de Producto Escalar)", test_diagonal_affinity, "El token debe prestar mayor atención a la clave con la que tiene mayor producto punto")

    # Test 3: Máscara causal autoregresiva
    def test_causal_mask():
        # Máscara triangular inferior: el token 0 no puede ver al token 1
        mask = [
            [1, 0],
            [1, 1]
        ]
        out, weights = scaled_dot_product_attention(Q, K, V, mask=mask)
        # El token 0 debe poner 100% de atención en la posición 0 y 0% en la posición 1
        return abs(weights[0][0] - 1.0) < 1e-3 and abs(weights[0][1] - 0.0) < 1e-3
    validar("RETO 2.1 (Máscara de Atención Causal)", test_causal_mask, "Aplica -1e9 a las posiciones donde mask[i][j] == 0 antes del softmax")

    print("\n--- Fin de la comprobación ---\n")
