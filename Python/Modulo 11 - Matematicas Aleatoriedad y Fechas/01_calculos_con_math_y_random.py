"""
EJERCICIO: Cálculos Matemáticos (math) y Generación Aleatoria (random)
Módulo 11: Librería Estándar: Matemáticas, Aleatoriedad y Fechas

Aprende a realizar cálculos trigonométricos, redondeos exactos con math
y simulaciones probabilísticas con random (randint, sample, seed).
"""

import math
import random

# ==============================================================================
# RETO 1: Cálculo de Hipotenusa y Redondeos (math.hypot, ceil, floor)
# ==============================================================================
def calcular_geometria_triangulo(cateto_a, cateto_b):
    """
    Dado los dos catetos de un triángulo rectángulo:
    1. Calcula la hipotenusa exacta utilizando math.hypot(cateto_a, cateto_b).
    2. Calcula el redondeo hacia arriba con math.ceil(hipotenusa).
    3. Calcula el redondeo hacia abajo con math.floor(hipotenusa).
    
    Retorna:
        tuple: (hipotenusa_float, techo_int, piso_int)
    """
    # TODO: Retorna (math.hypot(cateto_a, cateto_b), math.ceil(hip), math.floor(hip))
    pass


# ==============================================================================
# RETO 2: Área de Círculo con Constante math.pi
# ==============================================================================
def calcular_area_circulo(radio):
    """
    Calcula el área de un círculo utilizando la fórmula Area = pi * r^2
    empleando la constante math.pi.
    
    Retorna:
        float: Área calculada.
    """
    # TODO: Retorna math.pi * (radio ** 2)
    pass


# ==============================================================================
# RETO 3: Simulación de Lanzamiento de Dados con random.randint()
# ==============================================================================
def lanzar_dados(cantidad_dados, caras=6, semilla=None):
    """
    Simula el lanzamiento de 'cantidad_dados', donde cada dado tiene valores
    enteros entre 1 y 'caras' (inclusive).
    - Si 'semilla' no es None, inicializa random.seed(semilla) para reproducibilidad.
    - Retorna una lista con los valores de cada dado y la suma total.
    
    Retorna:
        tuple: (tiradas: list of int, total: int)
    """
    # TODO:
    # if semilla is not None: random.seed(semilla)
    # tiradas = [random.randint(1, caras) for _ in range(cantidad_dados)]
    # retorna (tiradas, sum(tiradas))
    pass


# ==============================================================================
# RETO 4: Sorteo sin Reemplazo con random.sample()
# ==============================================================================
def sortear_ganadores(lista_participantes, cantidad_ganadores, semilla=None):
    """
    Selecciona 'cantidad_ganadores' únicos sin repetición de 'lista_participantes'
    utilizando random.sample().
    - Si 'semilla' no es None, fija la semilla primero.
    - Si 'cantidad_ganadores' es mayor que el tamaño de la lista, retorna una lista vacía [].
    
    Retorna:
        list: Lista de ganadores seleccionados al azar.
    """
    # TODO:
    # if cantidad_ganadores > len(lista_participantes): return []
    # if semilla is not None: random.seed(semilla)
    # return random.sample(lista_participantes, cantidad_ganadores)
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
        hip, c, f = calcular_geometria_triangulo(3.0, 4.5)
        # hypot(3, 4.5) = sqrt(9 + 20.25) = sqrt(29.25) ≈ 5.4083
        validar("RETO 11.1 - Hipotenusa y redondeos (hypot, ceil, floor)",
                math.isclose(hip, 5.4083, abs_tol=1e-3) and c == 6 and f == 5,
                f"Fallo en geometría: hip={hip}, ceil={c}, floor={f}")
    except Exception as e:
        validar("RETO 11.1 - Hipotenusa y redondeos (hypot, ceil, floor)", False, f"Error: {e}")

    # Test Reto 2
    try:
        area = calcular_area_circulo(10.0)
        validar("RETO 11.2 - Área de círculo con math.pi",
                math.isclose(area, 314.159265, abs_tol=1e-4),
                f"Esperado ~314.159, obtenido: {area}")
    except Exception as e:
        validar("RETO 11.2 - Área de círculo con math.pi", False, f"Error: {e}")

    # Test Reto 3
    try:
        tiradas, suma = lanzar_dados(3, caras=6, semilla=42)
        validar("RETO 11.3 - Lanzamiento de dados con random.randint() y seed",
                len(tiradas) == 3 and all(1 <= d <= 6 for d in tiradas) and suma == sum(tiradas),
                f"Fallo en tiradas: tiradas={tiradas}, suma={suma}")
    except Exception as e:
        validar("RETO 11.3 - Lanzamiento de dados con random.randint() y seed", False, f"Error: {e}")

    # Test Reto 4
    try:
        participantes = ["Ana", "Beto", "Carlos", "Diana", "Edu"]
        ganadores = sortear_ganadores(participantes, 2, semilla=42)
        validar("RETO 11.4 - Muestreo sin reemplazo con random.sample()",
                len(ganadores) == 2 and len(set(ganadores)) == 2 and all(g in participantes for g in ganadores),
                f"Fallo en sorteo: {ganadores}")
    except Exception as e:
        validar("RETO 11.4 - Muestreo sin reemplazo con random.sample()", False, f"Error: {e}")

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
