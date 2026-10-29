"""
EJERCICIO: Relaciones Lógicas y Mutaciones de Conjuntos
Módulo 6: Conjuntos (set) y Álgebra de Conjuntos

Aprende a evaluar relaciones (issubset, isdisjoint)
y aplicar mutaciones seguras (discard, update).
"""

# ==============================================================================
# RETO 1: Comprobación de Subconjunto (issubset)
# ==============================================================================
def verificar_todos_los_permisos(permisos_requeridos, permisos_actuales_usuario):
    """
    Verifica si 'permisos_requeridos' es un subconjunto de 'permisos_actuales_usuario'
    utilizando .issubset() o el operador <=.
    
    Retorna:
        bool: True si el usuario posee todos los permisos solicitados, False en caso contrario.
    """
    # TODO: Retorna set(permisos_requeridos).issubset(set(permisos_actuales_usuario))
    pass


# ==============================================================================
# RETO 2: Evaluación de Conjuntos Disjuntos (isdisjoint)
# ==============================================================================
def verificar_sin_conflictos(conjunto_a, conjunto_b):
    """
    Determina si dos conjuntos son completamente disjuntos (no comparten ningún elemento)
    utilizando .isdisjoint().
    
    Retorna:
        bool: True si no tienen elementos en común, False si tienen al menos uno.
    """
    # TODO: Retorna conjunto_a.isdisjoint(conjunto_b)
    pass


# ==============================================================================
# RETO 3: Descarte Seguro con .discard()
# ==============================================================================
def remover_elementos_seguro(conjunto_datos, elementos_a_remover):
    """
    Crea una copia de 'conjunto_datos' con .copy() y remueve de ella todos los elementos
    presentes en 'elementos_a_remover' utilizando .discard() (para que no falle si alguno no existe).
    Retorna el conjunto resultante.
    """
    # TODO:
    # res = conjunto_datos.copy()
    # for elem in elementos_a_remover:
    #     res.discard(elem)
    # retorna res
    pass


# ==============================================================================
# RETO 4: Mutación In-Place con .update()
# ==============================================================================
def fusionar_en_conjunto_base(conjunto_base, nuevos_iterables):
    """
    Modifica 'conjunto_base' in-place añadiendo todos los elementos de 'nuevos_iterables'
    utilizando .update() y retorna 'conjunto_base'.
    """
    # TODO:
    # conjunto_base.update(nuevos_iterables)
    # retorna conjunto_base
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
        req = {"read", "write"}
        u_ok = {"read", "write", "execute"}
        u_bad = {"read", "execute"}
        v1 = verificar_todos_los_permisos(req, u_ok)
        v2 = verificar_todos_los_permisos(req, u_bad)
        validar("RETO 6.1 - Comprobación de subconjunto con .issubset()",
                v1 is True and v2 is False,
                f"Fallo en permisos: v1={v1}, v2={v2}")
    except Exception as e:
        validar("RETO 6.1 - Comprobación de subconjunto con .issubset()", False, f"Error: {e}")

    # Test Reto 2
    try:
        d1 = verificar_sin_conflictos({1, 2}, {3, 4})
        d2 = verificar_sin_conflictos({1, 2}, {2, 3})
        validar("RETO 6.2 - Comprobación disjunta con .isdisjoint()",
                d1 is True and d2 is False,
                f"Fallo en disjuntos: d1={d1}, d2={d2}")
    except Exception as e:
        validar("RETO 6.2 - Comprobación disjunta con .isdisjoint()", False, f"Error: {e}")

    # Test Reto 3
    try:
        c_base = {"a", "b", "c"}
        c_res = remover_elementos_seguro(c_base, ["a", "z", "w"])
        validar("RETO 6.3 - Descarte seguro con .discard()",
                c_res == {"b", "c"} and c_base == {"a", "b", "c"},
                f"Fallo en descarte: c_res={c_res}, c_base={c_base}")
    except Exception as e:
        validar("RETO 6.3 - Descarte seguro con .discard()", False, f"Error: {e}")

    # Test Reto 4
    try:
        mut_base = {10, 20}
        fusionar_en_conjunto_base(mut_base, [20, 30, 40])
        validar("RETO 6.4 - Mutación in-place con .update()",
                mut_base == {10, 20, 30, 40},
                f"Resultado inesperado en .update(): {mut_base}")
    except Exception as e:
        validar("RETO 6.4 - Mutación in-place con .update()", False, f"Error: {e}")

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
