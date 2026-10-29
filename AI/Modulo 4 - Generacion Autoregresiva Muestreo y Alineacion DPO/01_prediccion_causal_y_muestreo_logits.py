# ==========================================
# RETO: PREDICCIÓN CAUSAL Y MUESTREO CON TEMPERATURA
# Para ejecutar: python "AI/Modulo 3 - Modelos de Lenguaje Causales Alineacion y DPO/01_prediccion_causal_y_muestreo_logits.py"
# ==========================================

import math

print("=== RETO 1: PROYECCIÓN A LOGITS, TEMPERATURA Y TOP-K ===")

# ------------------------------------------
# 1.1 Proyección Lineal a Logits
# ------------------------------------------
# TODO: Implementa compute_logits(hidden_state, vocab_weights) donde:
#   - hidden_state: lista de longitud d_model (ej: [0.5, -0.2])
#   - vocab_weights: matriz de tamaño (d_model x vocab_size)
# Retorna la lista de logits de longitud vocab_size calculando el producto punto:
#   logits[v] = sum(hidden_state[i] * vocab_weights[i][v] for i in range(d_model))

def compute_logits(hidden_state, vocab_weights):
    # TODO: Calcula y retorna los logits
    pass


# ------------------------------------------
# 1.2 Softmax con Temperatura
# ------------------------------------------
# TODO: Implementa softmax_with_temperature(logits, temperature=1.0):
#   1. Escala cada logit: scaled_logits = [l / temperature for l in logits]
#   2. Resta el valor máximo para estabilidad numérica: max_val = max(scaled_logits)
#   3. Calcula exp(l - max_val) para cada logit y normaliza dividiendo por la suma total.
# Retorna la lista de probabilidades sumando 1.0.

def softmax_with_temperature(logits, temperature=1.0):
    # TODO: Implementa softmax escalado por temperatura
    pass


# ------------------------------------------
# 1.3 Filtro Top-K
# ------------------------------------------
# TODO: Implementa top_k_filter(probs, k):
#   Deja intactas únicamente las k mayores probabilidades y coloca en 0.0 todas las demás.
#   Luego, re-normaliza las k probabilidades supervivientes para que vuelvan a sumar exactamente 1.0.
# Retorna la lista filtrada y normalizada de igual longitud que probs.

def top_k_filter(probs, k):
    # TODO: Filtra a los k valores más altos y re-normaliza
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

    h = [1.0, 2.0]
    W_v = [
        [1.0, 0.0, -1.0],  # d_model=2 x vocab=3
        [0.0, 1.0,  2.0]
    ]

    # Test 1: Cálculo de logits
    def test_logits():
        res = compute_logits(h, W_v)
        # Token 0: 1*1 + 2*0 = 1.0
        # Token 1: 1*0 + 2*1 = 2.0
        # Token 2: 1*-1 + 2*2 = 3.0
        return res == [1.0, 2.0, 3.0]
    validar("RETO 1.1 (Proyección a Logits)", test_logits, "compute_logits([1, 2], W_v) debe dar [1.0, 2.0, 3.0]")

    # Test 2: Softmax con Temperatura
    def test_temp():
        logits = [2.0, 4.0]
        # Con temperatura baja (0.5), las diferencias se acentúan hacia el valor mayor (4.0)
        p_low = softmax_with_temperature(logits, temperature=0.5)
        # Con temperatura alta (2.0), las probabilidades se vuelven más homogéneas
        p_high = softmax_with_temperature(logits, temperature=2.0)

        # En temperatura baja, p_low[1] debe ser mucho más cercano a 1 que p_high[1]
        return p_low[1] > p_high[1] and abs(sum(p_low) - 1.0) < 1e-5 and abs(sum(p_high) - 1.0) < 1e-5
    validar("RETO 1.2 (Softmax con control de Temperatura)", test_temp, "A menor temperatura la probabilidad del logit más alto debe crecer")

    # Test 3: Filtro Top-K
    def test_topk():
        probs = [0.1, 0.5, 0.3, 0.1]
        res = top_k_filter(probs, k=2)
        # Los 2 mayores son 0.5 (idx 1) y 0.3 (idx 2). Suma = 0.8
        # Normalizados: 0.5/0.8 = 0.625, 0.3/0.8 = 0.375. Los demás = 0.0
        return abs(res[1] - 0.625) < 1e-4 and abs(res[2] - 0.375) < 1e-4 and res[0] == 0.0 and res[3] == 0.0
    validar("RETO 1.3 (Filtro Top-K y re-normalización)", test_topk, "Conserva los k mayores, anula los demás y re-normaliza para que sumen 1.0")

    print("\n--- Fin de la comprobación ---\n")
