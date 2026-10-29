"""
EJERCICIO: Mutación de Listas, Métodos y Desempaquetado de Tuplas
Módulo 4: Listas, Tuplas, Indexación y Slicing

Aprende a utilizar métodos de mutación (insert, pop, extend),
simular colas y pilas, y desempaquetar secuencias con el operador *.
"""

# ==============================================================================
# RETO 1: Simulación de Cola FIFO (First In, First Out)
# ==============================================================================
def simular_cola_fifo(cola_inicial, elementos_a_encolar, cantidad_a_procesar):
    """
    Simula una cola FIFO:
    1. Agrega todos los 'elementos_a_encolar' al final de la cola usando .extend().
    2. Procesa (extrae) 'cantidad_a_procesar' elementos desde el frente usando .pop(0).
    3. Retorna una tupla: (lista_elementos_procesados, cola_restante)
    
    Retorna:
        tuple: (procesados: list, cola_actual: list)
    """
    # TODO:
    # cola = cola_inicial[:]
    # cola.extend(elementos_a_encolar)
    # procesados = []
    # for _ in range(min(cantidad_a_procesar, len(cola))):
    #     procesados.append(cola.pop(0))
    # retorna (procesados, cola)
    pass


# ==============================================================================
# RETO 2: Inserción Manteniendo el Orden
# ==============================================================================
def insertar_ordenado(lista_ordenada, nuevo_numero):
    """
    Dada una lista previamente ordenada de menor a mayor, busca la posición
    donde debe ubicarse 'nuevo_numero' para conservar el orden y lo inserta
    utilizando .insert(indice, nuevo_numero).
    
    Argumentos:
        lista_ordenada (list of int): Ej: [10, 20, 30, 40]
        nuevo_numero (int): Ej: 25
        
    Retorna:
        list: La lista con el elemento insertado (ordenada: [10, 20, 25, 30, 40])
    """
    # TODO:
    # lista = lista_ordenada[:]
    # Encuentra el primer índice i donde lista[i] > nuevo_numero.
    # Si lo encuentras, lista.insert(i, nuevo_numero) y retorna.
    # Si es mayor que todos, lista.append(nuevo_numero) y retorna.
    pass


# ==============================================================================
# RETO 3: Desempaquetado con Operador Resto (*)
# ==============================================================================
def desempaquetar_podio_y_menciones(clasificacion):
    """
    Toma una lista con al menos 3 competidores y utiliza desempaquetado de tuplas
    con el operador estrella (*) para separar:
    - oro: primer elemento
    - plata: segundo elemento
    - bronce: tercer elemento
    - resto: lista con los competidores restantes
    
    Retorna:
        tuple: (oro, plata, bronce, resto_lista)
    """
    # TODO: oro, plata, bronce, *resto = clasificacion; retorna (oro, plata, bronce, resto)
    pass


# ==============================================================================
# RETO 4: Intercambio de Extremos en Tupla (Inmutabilidad)
# ==============================================================================
def intercambiar_extremos_tupla(tupla_original):
    """
    Dado que las tuplas son inmutables, para cambiar su contenido se debe construir
    una nueva tupla. Retorna una nueva tupla donde el primer y último elemento
    hayan intercambiado lugares. Si la tupla tiene 0 o 1 elementos, retorna la misma tupla.
    
    Ejemplo:
        intercambiar_extremos_tupla((1, 2, 3, 4)) -> (4, 2, 3, 1)
    """
    # TODO:
    # Si len(tupla_original) <= 1: retorna tupla_original
    # Retorna (tupla_original[-1],) + tupla_original[1:-1] + (tupla_original[0],)
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
        proc, rem = simular_cola_fifo(["A", "B"], ["C", "D"], cantidad_a_procesar=2)
        validar("RETO 4.1 - Simulación de Cola FIFO con extend y pop(0)",
                proc == ["A", "B"] and rem == ["C", "D"],
                f"Fallo en cola FIFO: procesados={proc}, restantes={rem}")
    except Exception as e:
        validar("RETO 4.1 - Simulación de Cola FIFO con extend y pop(0)", False, f"Error: {e}")

    # Test Reto 2
    try:
        ord_res = insertar_ordenado([10, 20, 30, 40], 25)
        validar("RETO 4.2 - Inserción ordenada con insert",
                ord_res == [10, 20, 25, 30, 40],
                f"Esperado [10, 20, 25, 30, 40], obtenido: {ord_res}")
    except Exception as e:
        validar("RETO 4.2 - Inserción ordenada con insert", False, f"Error: {e}")

    # Test Reto 3
    try:
        o, p, b, r = desempaquetar_podio_y_menciones(["Ana", "Beto", "Carlos", "Diana", "Edu"])
        validar("RETO 4.3 - Desempaquetado con operador resto (*)",
                o == "Ana" and p == "Beto" and b == "Carlos" and r == ["Diana", "Edu"],
                f"Fallo en podio: ({o}, {p}, {b}, {r})")
    except Exception as e:
        validar("RETO 4.3 - Desempaquetado con operador resto (*)", False, f"Error: {e}")

    # Test Reto 4
    try:
        t_swapped = intercambiar_extremos_tupla((10, 20, 30, 40))
        validar("RETO 4.4 - Intercambio de extremos en tupla inmutable",
                t_swapped == (40, 20, 30, 10) and isinstance(t_swapped, tuple),
                f"Esperado (40, 20, 30, 10), obtenido: {t_swapped}")
    except Exception as e:
        validar("RETO 4.4 - Intercambio de extremos en tupla inmutable", False, f"Error: {e}")

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
