# ==========================================
# RETO: CAPA DE PRUEBA (EVALS) Y DELEGATION LOOP
# Para ejecutar: python "AI/Modulo 4 - Arquitectura y Desarrollo Sistematico de Agentes de IA/02_evals_capa_prueba_y_delegation_loop.py"
# ==========================================

print("=== RETO 2: EVALS OBJETIVOS Y PROTOCOLO DE DELEGATION LOOP ===")

# ------------------------------------------
# 2.1 Verificador Objetivo de Entregable (Proof Layer)
# ------------------------------------------
# TODO: Implementa la función verificar_entregable(json_data, required_schema):
#   - json_data: diccionario con la salida generada por el agente.
#   - required_schema: diccionario con los tipos esperados para cada clave (ej: {"titulo": str, "total": int, "tags": list}).
# Retorna (True, "OK") si:
#   1. Todas las claves de required_schema están presentes en json_data.
#   2. Cada valor es instancia del tipo esperado (isinstance(json_data[k], required_schema[k])).
# De lo contrario retorna (False, "Falta la clave X" o "El tipo de X debe ser Y").

def verificar_entregable(json_data, required_schema):
    # TODO: Implementa la validación objetiva determinista
    pass


# ------------------------------------------
# 2.2 Diagnóstico del Delegation Loop
# ------------------------------------------
# TODO: Implementa diagnosticar_fallo(tipo_error):
#   Determina a qué capa del Playbook debe aplicarse la corrección permanente:
#   - Si tipo_error == "omision_de_paso" o "regla_de_negocio": retorna "Capa 1: PROCESS.md"
#   - Si tipo_error == "calculo_mecanico" o "formato_template": retorna "Capa 2: toolbox/"
#   - Si tipo_error == "falso_positivo" o "prueba_no_detectada": retorna "Capa 3: proof/CHECKS.md"
#   - Para cualquier otro error: retorna "Capa 1: PROCESS.md"

def diagnosticar_fallo(tipo_error):
    # TODO: Retorna la capa que debe recibir la corrección permanente
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

    esquema = {
        "titulo": str,
        "conteo": int,
        "elementos": list
    }

    # Test 1: Entregable válido
    def test_valido():
        datos = {"titulo": "Reporte Semanal", "conteo": 42, "elementos": ["a", "b"]}
        es_ok, msg = verificar_entregable(datos, esquema)
        return es_ok is True
    validar("RETO 2.1 (Aprobación objetiva de entregable válido)", test_valido, "Debe retornar (True, 'OK') cuando todas las claves y tipos coinciden")

    # Test 2: Rechazo por clave faltante o tipo erróneo
    def test_invalido():
        datos_malos = {"titulo": "Reporte", "conteo": "42", "elementos": []} # conteo es str en vez de int
        es_ok, msg = verificar_entregable(datos_malos, esquema)
        return es_ok is False
    validar("RETO 2.1 (Rechazo automático de datos defectuosos)", test_invalido, "Debe retornar False si algún tipo no coincide con el esquema")

    # Test 3: Diagnóstico del Delegation Loop
    def test_diagnostico():
        c1 = diagnosticar_fallo("omision_de_paso")
        c2 = diagnosticar_fallo("calculo_mecanico")
        c3 = diagnosticar_fallo("prueba_no_detectada")
        return "Capa 1" in c1 and "Capa 2" in c2 and "Capa 3" in c3
    validar("RETO 2.2 (Protocolo Delegation Loop: Diagnóstico de Capas)", test_diagnostico, "Mapea los tipos de error a la capa correcta del Playbook para corrección permanente")

    print("\n--- Fin de la comprobación ---\n")
