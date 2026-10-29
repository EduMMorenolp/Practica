"""
EJERCICIO: Iteradores Nativos (enumerate, zip, range)
Módulo 7: Estructuras de Control e Iteración Avanzada

Domina el paralelismo con zip(), la indexación limpia con enumerate()
y la generación aritmética de secuencias con range().
"""

# ==============================================================================
# RETO 1: Etiquetado de Posiciones con enumerate()
# ==============================================================================
def etiquetar_con_posicion(lista_elementos, indice_inicial=1):
    """
    Toma una lista de elementos y genera una nueva lista de cadenas con el formato:
        "#{indice}: {elemento}"
    utilizando enumerate(lista_elementos, start=indice_inicial).
    
    Ejemplo:
        etiquetar_con_posicion(["Oro", "Plata", "Bronce"], indice_inicial=1)
        -> ["#1: Oro", "#2: Plata", "#3: Bronce"]
    """
    # TODO: Usa una comprensión de lista con enumerate(lista_elementos, start=indice_inicial)
    pass


# ==============================================================================
# RETO 2: Fusión de Claves y Valores con zip()
# ==============================================================================
def construir_diccionario_desde_paralelo(lista_claves, lista_valores):
    """
    Toma dos listas paralelas (una de nombres y otra de valores) y las combina
    en un único diccionario utilizando dict(zip(lista_claves, lista_valores)).
    
    Ejemplo:
        construir_diccionario_desde_paralelo(["id", "host", "port"], [1, "localhost", 8080])
        -> {"id": 1, "host": "localhost", "port": 8080}
    """
    # TODO: Retorna dict(zip(lista_claves, lista_valores))
    pass


# ==============================================================================
# RETO 3: Producto Escalar (Dot Product) con zip()
# ==============================================================================
def calcular_producto_escalar(vector_u, vector_v):
    """
    Calcula el producto punto o escalar entre dos vectores numéricos:
    sum(u_i * v_i) para cada par emparejado con zip().
    Si los vectores tienen longitudes distintas, zip se detiene en el más corto.
    """
    # TODO: Retorna sum(a * b for a, b in zip(vector_u, vector_v))
    pass


# ==============================================================================
# RETO 4: Generación Aritmética con range()
# ==============================================================================
def generar_progresion_con_saltos(inicio, fin_excluido, salto):
    """
    Genera y retorna una lista de números enteros desde 'inicio' hasta 'fin_excluido'
    con un paso de 'salto' utilizando list(range(inicio, fin_excluido, salto)).
    
    Ejemplo:
        generar_progresion_con_saltos(5, 25, 5) -> [5, 10, 15, 20]
    """
    # TODO: Retorna list(range(inicio, fin_excluido, salto))
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

    # Test Reto 1
    try:
        et = etiquetar_con_posicion(["Python", "Rust"], indice_inicial=1)
        validar("RETO 7.1 - Etiquetado con enumerate(start=...)",
                et == ["#1: Python", "#2: Rust"],
                f"Esperado ['#1: Python', '#2: Rust'], obtenido: {et}")
    except Exception as e:
        validar("RETO 7.1 - Etiquetado con enumerate(start=...)", False, f"Error: {e}")

    # Test Reto 2
    try:
        d_zip = construir_diccionario_desde_paralelo(["ip", "puerto"], ["127.0.0.1", 3000])
        validar("RETO 7.2 - Construcción de diccionario con dict(zip(...))",
                d_zip == {"ip": "127.0.0.1", "puerto": 3000},
                f"Fallo en dict(zip): {d_zip}")
    except Exception as e:
        validar("RETO 7.2 - Construcción de diccionario con dict(zip(...))", False, f"Error: {e}")

    # Test Reto 3
    try:
        dot = calcular_producto_escalar([1, 2, 3], [4, 5, 6])
        # 1*4 + 2*5 + 3*6 = 4 + 10 + 18 = 32
        validar("RETO 7.3 - Producto escalar con sum y zip",
                dot == 32,
                f"Esperado 32, obtenido: {dot}")
    except Exception as e:
        validar("RETO 7.3 - Producto escalar con sum y zip", False, f"Error: {e}")

    # Test Reto 4
    try:
        seq = generar_progresion_con_saltos(10, 30, 5)
        validar("RETO 7.4 - Progresión con range(start, stop, step)",
                seq == [10, 15, 20, 25],
                f"Esperado [10, 15, 20, 25], obtenido: {seq}")
    except Exception as e:
        validar("RETO 7.4 - Progresión con range(start, stop, step)", False, f"Error: {e}")

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
