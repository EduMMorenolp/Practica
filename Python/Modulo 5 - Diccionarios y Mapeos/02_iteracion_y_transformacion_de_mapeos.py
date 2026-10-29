"""
EJERCICIO: Iteración, Transformación y Filtrado de Mapeos
Módulo 5: Diccionarios y Mapeos (dict)

Aprende a iterar con .items(), contar frecuencias, invertir mapeos
y utilizar comprensiones de diccionarios.
"""

# ==============================================================================
# RETO 1: Conteo de Frecuencias de Elementos
# ==============================================================================
def contar_frecuencias(lista_elementos):
    """
    Cuenta cuántas veces aparece cada elemento en 'lista_elementos'
    y retorna un diccionario con los conteos: {elemento: cantidad}.
    
    Argumentos:
        lista_elementos (list): Ej: ["rojo", "azul", "rojo", "verde", "azul", "rojo"]
        
    Retorna:
        dict: {"rojo": 3, "azul": 2, "verde": 1}
    """
    # TODO:
    # conteo = {}
    # for elem in lista_elementos:
    #     conteo[elem] = conteo.get(elem, 0) + 1
    # retorna conteo
    pass


# ==============================================================================
# RETO 2: Inversión de Claves y Valores
# ==============================================================================
def invertir_mapeo(diccionario_original):
    """
    Toma un diccionario con valores únicos y retorna un nuevo diccionario
    donde las claves sean los valores originales y los valores sean las claves originales.
    
    Argumentos:
        diccionario_original (dict): {"es": "España", "fr": "Francia", "it": "Italia"}
        
    Retorna:
        dict: {"España": "es", "Francia": "fr", "Italia": "it"}
    """
    # TODO: Usa {valor: clave for clave, valor in diccionario_original.items()}
    pass


# ==============================================================================
# RETO 3: Filtrado de Diccionario por Umbral Numérico
# ==============================================================================
def filtrar_por_valor_minimo(diccionario_puntajes, puntaje_minimo=60):
    """
    Retorna un nuevo diccionario que contenga únicamente los pares (clave, valor)
    cuyo valor numérico sea mayor o igual que 'puntaje_minimo'.
    
    Argumentos:
        diccionario_puntajes (dict): {"Juan": 85, "Pedro": 45, "Ana": 92}
        puntaje_minimo (int o float): 60
        
    Retorna:
        dict: {"Juan": 85, "Ana": 92}
    """
    # TODO: Usa una comprensión de diccionario con condicional:
    # {k: v for k, v in diccionario_puntajes.items() if v >= puntaje_minimo}
    pass


# ==============================================================================
# RETO 4: Inicialización Masiva con dict.fromkeys()
# ==============================================================================
def inicializar_estados_servidores(lista_nombres_host, estado_inicial="PENDING"):
    """
    Crea y retorna un nuevo diccionario donde cada host de 'lista_nombres_host'
    sea una clave con el valor 'estado_inicial', utilizando dict.fromkeys().
    
    Ejemplo:
        inicializar_estados_servidores(["srv1", "srv2"], "OK")
        -> {"srv1": "OK", "srv2": "OK"}
    """
    # TODO: Retorna dict.fromkeys(lista_nombres_host, estado_inicial)
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
        colores = ["rojo", "azul", "rojo", "verde", "azul", "rojo"]
        c_res = contar_frecuencias(colores)
        validar("RETO 5.1 - Conteo de frecuencias con .get()",
                c_res == {"rojo": 3, "azul": 2, "verde": 1},
                f"Esperado {{'rojo': 3, 'azul': 2, 'verde': 1}}, obtenido: {c_res}")
    except Exception as e:
        validar("RETO 5.1 - Conteo de frecuencias con .get()", False, f"Error: {e}")

    # Test Reto 2
    try:
        inv = invertir_mapeo({"es": "España", "fr": "Francia"})
        validar("RETO 5.2 - Inversión de claves y valores",
                inv == {"España": "es", "Francia": "fr"},
                f"Fallo en inversión: {inv}")
    except Exception as e:
        validar("RETO 5.2 - Inversión de claves y valores", False, f"Error: {e}")

    # Test Reto 3
    try:
        alumnos = {"Juan": 85, "Pedro": 45, "Ana": 92, "Luis": 59}
        aprobados = filtrar_por_valor_minimo(alumnos, puntaje_minimo=60)
        validar("RETO 5.3 - Filtrado con comprensión de diccionario",
                aprobados == {"Juan": 85, "Ana": 92},
                f"Esperado aprobados {{'Juan': 85, 'Ana': 92}}, obtenido: {aprobados}")
    except Exception as e:
        validar("RETO 5.3 - Filtrado con comprensión de diccionario", False, f"Error: {e}")

    # Test Reto 4
    try:
        hosts = inicializar_estados_servidores(["srv-web", "srv-db"], estado_inicial="ONLINE")
        validar("RETO 5.4 - Inicialización con dict.fromkeys()",
                hosts == {"srv-web": "ONLINE", "srv-db": "ONLINE"},
                f"Resultado inesperado: {hosts}")
    except Exception as e:
        validar("RETO 5.4 - Inicialización con dict.fromkeys()", False, f"Error: {e}")

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
