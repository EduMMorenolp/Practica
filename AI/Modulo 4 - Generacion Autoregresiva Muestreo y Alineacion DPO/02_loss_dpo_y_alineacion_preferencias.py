# ==========================================
# RETO: LOSS DE DIRECT PREFERENCE OPTIMIZATION (DPO)
# Para ejecutar: python "AI/Modulo 3 - Modelos de Lenguaje Causales Alineacion y DPO/02_loss_dpo_y_alineacion_preferencias.py"
# ==========================================

import math

print("=== RETO 2: IMPLEMENTACIÓN MATEMÁTICA DE LA LOSS DPO ===")

# ------------------------------------------
# Funciones auxiliares
# ------------------------------------------
def sigmoid(x):
    x_clamped = max(-500.0, min(500.0, x))
    return 1.0 / (1.0 + math.exp(-x_clamped))

# ------------------------------------------
# 2.1 Pérdida de Direct Preference Optimization (DPO)
# ------------------------------------------
# TODO: Implementa la función dpo_loss(pi_logps_w, pi_logps_l, ref_logps_w, ref_logps_l, beta=0.1):
#   Fórmula matemática del paper DPO:
#     1. Calcula la relación de verosimilitud de la respuesta ganadora (yw):
#        pi_logratios = pi_logps_w - ref_logps_w
#     2. Calcula la relación de verosimilitud de la respuesta perdedora (yl):
#        ref_logratios = pi_logps_l - ref_logps_l
#     3. Calcula la diferencia escalada por beta:
#        logits = beta * (pi_logratios - ref_logratios)
#     4. Calcula la pérdida de entropía cruzada binaria:
#        loss = -math.log(sigmoid(logits) + 1e-12)
#   Retorna el escalar loss (float).

def dpo_loss(pi_logps_w, pi_logps_l, ref_logps_w, ref_logps_l, beta=0.1):
    # TODO: Implementa la pérdida matemática de DPO
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

    # Caso 1: Política idéntica a la referencia
    # Si pi == ref, logits = beta * (0 - 0) = 0. sigmoid(0) = 0.5. loss = -log(0.5) ≈ 0.6931
    def test_identity_loss():
        loss = dpo_loss(pi_logps_w=-1.5, pi_logps_l=-2.5, ref_logps_w=-1.5, ref_logps_l=-2.5, beta=0.1)
        expected = -math.log(0.5)
        return abs(loss - expected) < 1e-4
    validar("RETO 2.1 (Pérdida neutra pi == ref igual a ~0.6931)", test_identity_loss, "Cuando la política coincide con la referencia, loss debe ser exactamente -log(0.5)")

    # Caso 2: El modelo asigna MAYOR probabilidad a la respuesta preferida (yw)
    # y menor probabilidad a la perdedora (yl)
    # Por lo tanto, logits > 0, sigmoid(logits) > 0.5 y loss debe ser MENOR a 0.6931
    def test_aligned_model():
        loss = dpo_loss(pi_logps_w=-0.5, pi_logps_l=-4.0, ref_logps_w=-1.5, ref_logps_l=-2.0, beta=0.1)
        return 0.0 < loss < 0.6931
    validar("RETO 2.1 (Reducción de pérdida con política alineada)", test_aligned_model, "La pérdida debe disminuir cuando el modelo favorece al par preferido")

    # Caso 3: Modelo mal alineado (favorece la respuesta rechazada)
    # logits < 0, sigmoid(logits) < 0.5 y loss debe ser MAYOR a 0.6931
    def test_misaligned_model():
        loss = dpo_loss(pi_logps_w=-4.0, pi_logps_l=-0.5, ref_logps_w=-1.5, ref_logps_l=-2.0, beta=0.1)
        return loss > 0.6931
    validar("RETO 2.1 (Aumento de penalización si favorece la respuesta no deseada)", test_misaligned_model, "La pérdida debe aumentar cuando el modelo prefiere yl sobre yw")

    print("\n--- Fin de la comprobación ---\n")
