"""
EJERCICIO: Operaciones Algebraicas de Conjuntos (Sets)
Módulo 6: Conjuntos (set) y Álgebra de Conjuntos

Domina la deduplicación, unión (|), intersección (&),
diferencia (-) y diferencia simétrica (^).
"""

# ==============================================================================
# RETO 1: Deduplicación y Ordenamiento
# ==============================================================================
def deduplicar_y_ordenar(lista_con_duplicados):
    """
    Toma una lista con elementos repetidos, elimina todos los duplicados
    usando set() y retorna una lista con los elementos únicos ordenados de menor a mayor.
    
    Argumentos:
        lista_con_duplicados (list): Ej: [5, 2, 8, 2, 5, 1, 9, 1]
        
    Retorna:
        list: [1, 2, 5, 8, 9]
    """
    # TODO: Usa set() para eliminar duplicados y sorted() para ordenar.
    pass


# ==============================================================================
# RETO 2: Intersección de Intereses Compartidos
# ==============================================================================
def encontrar_intereses_comunes(conjunto_usuario_a, conjunto_usuario_b):
    """
    Calcula y retorna un nuevo conjunto con los elementos que ambos usuarios
    tienen en común, utilizando el operador de intersección (&) o .intersection().
    """
    # TODO: Retorna conjunto_usuario_a & conjunto_usuario_b
    pass


# ==============================================================================
# RETO 3: Análisis de Diferencias Exclusivas
# ==============================================================================
def analizar_diferencias(conjunto_grupo_1, conjunto_grupo_2):
    """
    Calcula dos conjuntos independientes utilizando el operador de diferencia (-):
    1. Elementos que están en grupo_1 pero no en grupo_2 (solo_grupo_1).
    2. Elementos que están en grupo_2 pero no en grupo_1 (solo_grupo_2).
    
    Retorna:
        tuple: (solo_grupo_1: set, solo_grupo_2: set)
    """
    # TODO: Retorna (conjunto_grupo_1 - conjunto_grupo_2, conjunto_grupo_2 - conjunto_grupo_1)
    pass


# ==============================================================================
# RETO 4: Diferencia Simétrica (Disyuntiva)
# ==============================================================================
def elementos_no_compartidos(conjunto_x, conjunto_y):
    """
    Retorna un nuevo conjunto que contenga los elementos que están en 'conjunto_x'
    o en 'conjunto_y', pero que NO están en ambos a la vez, utilizando
    el operador de diferencia simétrica (^) o .symmetric_difference().
    """
    # TODO: Retorna conjunto_x ^ conjunto_y
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
        r1 = deduplicar_y_ordenar([4, 2, 9, 2, 4, 1, 9])
        validar("RETO 6.1 - Deduplicación y ordenamiento con set y sorted",
                r1 == [1, 2, 4, 9],
                f"Esperado [1, 2, 4, 9], obtenido: {r1}")
    except Exception as e:
        validar("RETO 6.1 - Deduplicación y ordenamiento con set y sorted", False, f"Error: {e}")

    # Test Reto 2
    try:
        u1 = {"python", "sql", "git"}
        u2 = {"javascript", "sql", "git", "docker"}
        comunes = encontrar_intereses_comunes(u1, u2)
        validar("RETO 6.2 - Intersección con &",
                comunes == {"sql", "git"},
                f"Esperado {{'sql', 'git'}}, obtenido: {comunes}")
    except Exception as e:
        validar("RETO 6.2 - Intersección con &", False, f"Error: {e}")

    # Test Reto 3
    try:
        g1 = {"a", "b", "c"}
        g2 = {"b", "c", "d"}
        solo_g1, solo_g2 = analizar_diferencias(g1, g2)
        validar("RETO 6.3 - Diferencia con -",
                solo_g1 == {"a"} and solo_g2 == {"d"},
                f"Fallo en diferencias: solo_g1={solo_g1}, solo_g2={solo_g2}")
    except Exception as e:
        validar("RETO 6.3 - Diferencia con -", False, f"Error: {e}")

    # Test Reto 4
    try:
        x = {1, 2, 3, 4}
        y = {3, 4, 5, 6}
        sim = elementos_no_compartidos(x, y)
        validar("RETO 6.4 - Diferencia Simétrica con ^",
                sim == {1, 2, 5, 6},
                f"Esperado {{1, 2, 5, 6}}, obtenido: {sim}")
    except Exception as e:
        validar("RETO 6.4 - Diferencia Simétrica con ^", False, f"Error: {e}")

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
