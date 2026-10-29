"""
EJERCICIO: Funciones Lambda, Ordenamiento Custom y Closures
Módulo 8: Funciones, Argumentos Flexibles y Lambdas

Aprende a crear funciones anónimas lambda, ordenar colecciones
complejas con múltiples criterios y construir generadores de funciones (closures).
"""

# ==============================================================================
# RETO 1: Transformación con Lambda (Cuadrados de Números Pares)
# ==============================================================================
def transformar_pares_al_cuadrado(lista_enteros):
    """
    Filtra los números pares de 'lista_enteros' y calcula su cuadrado
    utilizando funciones lambda con map() y filter(), o comprensión equivalente.
    
    Argumentos:
        lista_enteros (list of int): [1, 2, 3, 4, 5, 6]
        
    Retorna:
        list of int: [4, 16, 36]
    """
    # TODO: Retorna [x ** 2 for x in lista_enteros if x % 2 == 0]
    # o list(map(lambda x: x**2, filter(lambda x: x % 2 == 0, lista_enteros)))
    pass


# ==============================================================================
# RETO 2: Ordenamiento por Longitud y Alfabético
# ==============================================================================
def ordenar_por_longitud_y_nombre(lista_palabras):
    """
    Ordena una lista de palabras utilizando sorted() con una clave lambda que compare:
    1. La longitud de la palabra (len) de menor a mayor.
    2. En caso de empate en longitud, por orden alfabético en minúsculas.
    
    Argumentos:
        lista_palabras (list of str): ["pera", "manzana", "uva", "kiwi", "higo"]
        
    Retorna:
        list of str: ['uva', 'higo', 'kiwi', 'pera', 'manzana']
    """
    # TODO: Usa sorted(lista_palabras, key=lambda w: (len(w), w.lower()))
    pass


# ==============================================================================
# RETO 3: Ordenamiento Multi-Criterio de Diccionarios
# ==============================================================================
def rankear_estudiantes(lista_estudiantes):
    """
    Ordena una lista de diccionarios de estudiantes:
    ej: [{"nombre": "Ana", "nota": 9.5, "edad": 20}, ...]
    Criterios:
    1. Por 'nota' DESCENDENTE (de mayor a menor nota).
    2. En caso de empate en nota, por 'edad' ASCENDENTE (de menor a mayor edad).
    
    Retorna:
        list: Lista ordenada según los criterios.
    """
    # TODO: Usa sorted(lista_estudiantes, key=lambda e: (-e["nota"], e["edad"]))
    pass


# ==============================================================================
# RETO 4: Generador de Funciones Multiplicadoras (Closure)
# ==============================================================================
def crear_multiplicador(factor):
    """
    Retorna una función interna (o lambda) que reciba un número 'x'
    y retorne dicho número multiplicado por 'factor'.
    
    Ejemplo:
        duplicar = crear_multiplicador(2)
        duplicar(5) -> 10
    """
    # TODO: Retorna lambda x: x * factor
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
        sq = transformar_pares_al_cuadrado([1, 2, 3, 4, 5, 6])
        validar("RETO 8.1 - Filtrado y transformación de pares con lambda",
                sq == [4, 16, 36],
                f"Esperado [4, 16, 36], obtenido: {sq}")
    except Exception as e:
        validar("RETO 8.1 - Filtrado y transformación de pares con lambda", False, f"Error: {e}")

    # Test Reto 2
    try:
        words = ["pera", "manzana", "uva", "kiwi", "higo"]
        ord_w = ordenar_por_longitud_y_nombre(words)
        validar("RETO 8.2 - Ordenamiento por longitud y alfabético con sorted(key=lambda)",
                ord_w == ['uva', 'higo', 'kiwi', 'pera', 'manzana'],
                f"Resultado inesperado: {ord_w}")
    except Exception as e:
        validar("RETO 8.2 - Ordenamiento por longitud y alfabético con sorted(key=lambda)", False, f"Error: {e}")

    # Test Reto 3
    try:
        alumnos = [
            {"nombre": "Carlos", "nota": 8.5, "edad": 22},
            {"nombre": "Ana", "nota": 9.5, "edad": 21},
            {"nombre": "Beto", "nota": 8.5, "edad": 19}
        ]
        rank = rankear_estudiantes(alumnos)
        nombres_rank = [a["nombre"] for a in rank]
        # Ana (9.5), Beto (8.5, 19), Carlos (8.5, 22)
        validar("RETO 8.3 - Ordenamiento multi-criterio descendente/ascendente",
                nombres_rank == ["Ana", "Beto", "Carlos"],
                f"Orden incorrecto: {nombres_rank}")
    except Exception as e:
        validar("RETO 8.3 - Ordenamiento multi-criterio descendente/ascendente", False, f"Error: {e}")

    # Test Reto 4
    try:
        triple = crear_multiplicador(3)
        validar("RETO 8.4 - Clausuras (Closures) generadoras de funciones",
                callable(triple) and triple(10) == 30 and triple(4) == 12,
                f"Fallo en closure triple: {triple(10)}")
    except Exception as e:
        validar("RETO 8.4 - Clausuras (Closures) generadoras de funciones", False, f"Error: {e}")

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
