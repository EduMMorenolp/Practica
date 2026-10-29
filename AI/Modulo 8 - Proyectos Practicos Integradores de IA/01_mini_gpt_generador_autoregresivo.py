"""
PROYECTO INTEGRADOR 1: Mini-GPT Generador Causal Autorregresivo
Módulo 8: Proyectos Prácticos Integradores de IA

Construcción completa de un motor de inferencia Transformer tipo GPT:
tokenización, cálculo de autoatención causal, proyección de logits
y bucle generativo autorregresivo paso a paso.
"""

import math

def softmax(valores):
    max_val = max(valores)
    exp_vals = [math.exp(v - max_val) for v in valores]
    suma = sum(exp_vals)
    return [v / suma for v in exp_vals]

# ==============================================================================
# RETO 1: Tokenización y Mapeo de Vocabulario
# ==============================================================================
def codificar_texto(texto, char_to_id):
    """
    Convierte una cadena de texto en una lista de IDs enteros.
    Si un caracter no está en el mapa, se ignora o se mapea al ID de espacio ' '.
    """
    # TODO: Retorna [char_to_id[c] for c in texto if c in char_to_id]
    pass

def decodificar_ids(token_ids, id_to_char):
    """
    Convierte una lista de IDs enteros nuevamente en una cadena de texto.
    """
    # TODO: Retorna "".join(id_to_char[i] for i in token_ids if i in id_to_char)
    pass


# ==============================================================================
# RETO 2: Capa de Autoatención Causal (Causal Self-Attention)
# ==============================================================================
def autoatencion_causal(H, W_q, W_k, W_v):
    """
    Calcula el bloque de atención causal para una secuencia H in R^{T x d_model}.
    
    1. Proyecta Q = H @ W_q, K = H @ W_k, V = H @ W_v (usando producto matricial simple).
    2. Calcula scores S = (Q @ K.T) / sqrt(d_k).
    3. Aplica máscara causal: si j > i, S[i][j] = -1e9 (-infinito).
    4. Aplica softmax por cada fila de scores: A[i] = softmax(S[i]).
    5. Retorna la salida O = A @ V (forma T x d_v).
    """
    # TODO:
    # d_k = len(W_q[0])
    # T = len(H)
    # 1. Multiplica H por W_q, W_k, W_v para obtener Q, K, V.
    # 2. Por cada fila i in range(T):
    #    fila_scores = []
    #    Por cada fila j in range(T):
    #        si j > i: fila_scores.append(-1e9)
    #        sino:
    #            dot = sum(Q[i][c] * K[j][c] for c in range(d_k))
    #            fila_scores.append(dot / math.sqrt(d_k))
    #    pesos_a = softmax(fila_scores)
    #    calcula vector salida O[i] = sum(pesos_a[j] * V[j] para cada j)
    # Retorna matriz O (T x d_k)
    pass


# ==============================================================================
# RETO 3: Proyección de Logits y Muestreo con Temperatura
# ==============================================================================
def predecir_siguiente_token(vector_ultimo_token, W_vocab, temperatura=1.0):
    """
    Proyecta el vector del último token al espacio del vocabulario,
    aplica temperatura y softmax, y retorna el token_id con mayor probabilidad (argmax).
    
    Argumentos:
        vector_ultimo_token (list of float): Vector de dimensión d_model.
        W_vocab (list of list of float): Matriz de proyección de tamaño d_model x |V|.
        temperatura (float): Factor de escala (> 0.0).
        
    Retorna:
        int: ID del siguiente token más probable.
    """
    # TODO:
    # 1. Multiplica vector_ultimo_token por W_vocab para obtener los logits en R^{|V|}:
    #    num_tokens = len(W_vocab[0])
    #    logits = [sum(vector_ultimo_token[k] * W_vocab[k][v] for k in range(len(vector_ultimo_token))) for v in range(num_tokens)]
    # 2. Escala logits dividiendo por max(temperatura, 1e-5):
    #    logits_escalados = [l / max(temperatura, 1e-5) for l in logits]
    # 3. Calcula probs = softmax(logits_escalados)
    # 4. Retorna el índice con la probabilidad máxima (argmax).
    pass


# ==============================================================================
# RETO 4: Generador Autorregresivo Completo
# ==============================================================================
def generar_texto_autoregresivo(prompt_str, modelo_pesos, vocab_maps, max_tokens=3):
    """
    Ejecuta el ciclo autorregresivo:
    1. Codifica prompt_str a token_ids usando vocab_maps['char_to_id'].
    2. Por cada paso hasta max_tokens:
       a. Realiza lookup de embeddings para la secuencia actual.
       b. Pasa la matriz por autoatencion_causal.
       c. Toma la salida del último token (salida[-1]).
       d. Predice el siguiente ID con predecir_siguiente_token.
       e. Añade el nuevo ID a la secuencia.
    3. Decodifica la secuencia completa resultante y la retorna.
    """
    # TODO: Orquesta la generación paso a paso y retorna el texto resultante.
    pass


# ==========================================
# 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA (no modificar)
# ==========================================
def _ejecutar_pruebas():
    total = 0
    pasadas = 0

    def validar(reto, condicion, mensaje_error):
        nonlocal total, pasadas
        total += 1
        if condicion:
            pasadas += 1
            print(f"✔ {reto}")
        else:
            print(f"❌ {reto}: {mensaje_error}")

    chars = ["h", "o", "l", "a", " "]
    c2i = {c: i for i, c in enumerate(chars)}
    i2c = {i: c for i, c in enumerate(chars)}

    # Test Reto 1
    try:
        toks = codificar_texto("hola", c2i)
        rec = decodificar_ids(toks, i2c)
        validar("RETO 8.1 - Codificación y decodificación de texto",
                toks == [0, 1, 2, 3] and rec == "hola",
                f"Fallo en codec: toks={toks}, rec={rec}")
    except Exception as e:
        validar("RETO 8.1 - Codificación y decodificación de texto", False, f"Error: {e}")

    # Test Reto 2
    try:
        H = [[1.0, 0.0], [0.0, 1.0]]  # T=2, d=2
        I = [[1.0, 0.0], [0.0, 1.0]]  # Identidad como W_q, W_k, W_v
        salida_atn = autoatencion_causal(H, I, I, I)
        # El primer token solo se atiende a sí mismo -> [1.0, 0.0]
        validar("RETO 8.2 - Autoatención causal",
                len(salida_atn) == 2 and math.isclose(salida_atn[0][0], 1.0, abs_tol=1e-3),
                f"Error en atención causal: {salida_atn}")
    except Exception as e:
        validar("RETO 8.2 - Autoatención causal", False, f"Error: {e}")

    # Test Reto 3
    try:
        vec_ult = [1.0, 0.0]
        # W_vocab proyecta a 3 tokens; fila 0 favorece al token 2
        W_v = [
            [0.1, 0.2, 5.0],
            [1.0, 1.0, 0.1]
        ]
        siguiente = predecir_siguiente_token(vec_ult, W_v, temperatura=1.0)
        validar("RETO 8.3 - Proyección de logits y selección de token",
                siguiente == 2,
                f"Esperado token 2, obtenido: {siguiente}")
    except Exception as e:
        validar("RETO 8.3 - Proyección de logits y selección de token", False, f"Error: {e}")

    # Test Reto 4
    try:
        pesos = {
            "W_q": I, "W_k": I, "W_v": I,
            "embeddings": [[1.0, 0.0], [0.0, 1.0], [1.0, 0.0], [0.0, 1.0], [0.5, 0.5]],
            "W_vocab": [
                [0.1, 4.0, 0.1, 0.1, 0.1],
                [0.1, 0.1, 0.1, 4.0, 0.1]
            ]
        }
        res_gen = generar_texto_autoregresivo("h", pesos, {"char_to_id": c2i, "id_to_char": i2c}, max_tokens=2)
        validar("RETO 8.4 - Generador Autorregresivo Completo",
                len(res_gen) == 3 and res_gen.startswith("h"),
                f"Generación fallida: {res_gen}")
    except Exception as e:
        validar("RETO 8.4 - Generador Autorregresivo Completo", False, f"Error: {e}")

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
