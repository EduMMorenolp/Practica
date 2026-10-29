# ==========================================
# RETO: POSITIONAL ENCODING Y EMBEDDINGS (PYTHON PURO)
# Para ejecutar: python "AI/Modulo 2 - La Arquitectura Transformer y el Mecanismo de Autoatencion/01_positional_encoding_y_embeddings.py"
# ==========================================

import math

print("=== RETO 1: POSITIONAL ENCODING Y EMBEDDINGS DEL TRANSFORMER ===")

# ------------------------------------------
# 1.1 Tabla de Embeddings
# ------------------------------------------
# TODO: Implementa la función embedding_lookup(tokens, vocab_matrix) que recibe:
#   - tokens: lista de enteros con los IDs de tokens (ej: [2, 0, 1])
#   - vocab_matrix: lista de listas de dimension (vocab_size x d_model)
# Retorna la matriz de embeddings correspondiente (seq_len x d_model).

def embedding_lookup(tokens, vocab_matrix):
    # TODO: Extrae el vector de cada token de vocab_matrix
    pass


# ------------------------------------------
# 1.2 Encodificación Posicional Sinusoidal
# ------------------------------------------
# TODO: Implementa la función get_positional_encoding(seq_len, d_model) que calcula
# una matriz de tamaño (seq_len x d_model) según la fórmula del paper original:
#   Para cada posición pos de 0 a seq_len - 1:
#     Para cada dimensión par 2i (donde i va de 0 a d_model/2 - 1):
#       PE[pos][2*i] = sin(pos / (10000 ** ((2*i) / d_model)))
#       PE[pos][2*i + 1] = cos(pos / (10000 ** ((2*i) / d_model)))
# Retorna la matriz de tamaño (seq_len x d_model).

def get_positional_encoding(seq_len, d_model):
    # TODO: Calcula y retorna la matriz de positional encoding
    pass


# ------------------------------------------
# 1.3 Adición de Posición al Embedding
# ------------------------------------------
# TODO: Implementa add_positional_encoding(embeddings, pe) que suma elemento a elemento:
# salida[pos][dim] = embeddings[pos][dim] + pe[pos][dim]

def add_positional_encoding(embeddings, pe):
    # TODO: Retorna la suma elemento a elemento
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

    # Vocabulario simulado: 4 palabras, d_model = 4
    vocab = [
        [0.1, 0.2, 0.3, 0.4],  # Token 0
        [0.5, 0.6, 0.7, 0.8],  # Token 1
        [0.9, 1.0, 1.1, 1.2],  # Token 2
        [1.3, 1.4, 1.5, 1.6]   # Token 3
    ]

    # Test 1: Embedding lookup
    def test_lookup():
        tokens = [2, 0]
        res = embedding_lookup(tokens, vocab)
        return res == [vocab[2], vocab[0]]
    validar("RETO 1.1 (Lookup de Embeddings)", test_lookup, "embedding_lookup([2, 0], vocab) debe extraer las filas 2 y 0 de la matriz")

    # Test 2: Positional Encoding pos=0
    def test_pe_pos0():
        pe = get_positional_encoding(seq_len=4, d_model=4)
        if pe is None or len(pe) != 4 or len(pe[0]) != 4: return False
        # En pos=0: sin(0) = 0 y cos(0) = 1 para todas las dimensiones pares e impares
        return abs(pe[0][0] - 0.0) < 1e-5 and abs(pe[0][1] - 1.0) < 1e-5 and \
               abs(pe[0][2] - 0.0) < 1e-5 and abs(pe[0][3] - 1.0) < 1e-5
    validar("RETO 1.2 (Valores de PE en posición 0: [0, 1, 0, 1])", test_pe_pos0, "Para pos=0, sin(0)=0 y cos(0)=1 en todas las frecuencias")

    # Test 3: Positional Encoding pos=1
    def test_pe_pos1():
        pe = get_positional_encoding(seq_len=2, d_model=4)
        expected_sin_dim0 = math.sin(1.0 / (10000.0 ** (0.0 / 4.0)))  # sin(1) ≈ 0.84147
        expected_cos_dim0 = math.cos(1.0 / (10000.0 ** (0.0 / 4.0)))  # cos(1) ≈ 0.54030
        return abs(pe[1][0] - expected_sin_dim0) < 1e-4 and abs(pe[1][1] - expected_cos_dim0) < 1e-4
    validar("RETO 1.2 (Frecuencias sinusoidales en pos=1)", test_pe_pos1, "Revisa la fórmula de frecuencia pos / (10000 ** (2i / d_model))")

    # Test 4: Suma de Embedding + PE
    def test_add():
        emb = [[1.0, 1.0], [2.0, 2.0]]
        pe = [[0.0, 1.0], [0.5, 0.5]]
        res = add_positional_encoding(emb, pe)
        return res == [[1.0, 2.0], [2.5, 2.5]]
    validar("RETO 1.3 (Suma de vectores Embedding + PE)", test_add, "Suma elemento por elemento cada dimensión de cada posición")

    print("\n--- Fin de la comprobación ---\n")
