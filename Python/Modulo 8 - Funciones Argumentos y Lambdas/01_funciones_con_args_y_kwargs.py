"""
EJERCICIO: Argumentos Flexibles (*args, **kwargs) y Parámetros Seguros
Módulo 8: Funciones, Argumentos Flexibles y Lambdas

Aprende a evitar la trampa de valores por defecto mutables,
empaquetar argumentos posicionales y nombrados, y reenviar invocaciones.
"""

# ==============================================================================
# RETO 1: Patrón Seguro de Acumulador (Evitar Default Mutable)
# ==============================================================================
def registrar_evento(nombre_evento, historial_eventos=None):
    """
    Agrega 'nombre_evento' a 'historial_eventos' y lo retorna.
    Debes utilizar el patrón seguro (historial_eventos=None) para garantizar
    que diferentes llamadas independientes no compartan la misma lista en memoria.
    
    Retorna:
        list: Lista actualizada con el nuevo evento.
    """
    # TODO: Si historial_eventos is None: historial_eventos = []
    # Agrega nombre_evento y retorna historial_eventos.
    pass


# ==============================================================================
# RETO 2: Estadísticas con Cantidad Variable de Argumentos (*args)
# ==============================================================================
def calcular_estadisticas(*numeros):
    """
    Recibe una cantidad arbitraria de números mediante *args y calcula:
    - Si no se pasa ningún número: retorna {"cantidad": 0}
    - Si se pasan números: retorna un diccionario con:
        {
            "cantidad": len(numeros),
            "suma": sum(numeros),
            "promedio": sum(numeros) / len(numeros),
            "minimo": min(numeros),
            "maximo": max(numeros)
        }
    """
    # TODO: Implementa el cálculo de estadísticas con *numeros.
    pass


# ==============================================================================
# RETO 3: Constructor de Query Strings con **kwargs
# ==============================================================================
def construir_url_con_parametros(url_base, **parametros):
    """
    Construye una URL con parámetros de consulta (?clave1=val1&clave2=val2)
    a partir de los argumentos nombrados recibidos en **parametros.
    - Los parámetros deben ordenarse alfabéticamente por su nombre de clave.
    - Si no se pasa ningún parámetro, retorna simplemente 'url_base'.
    
    Ejemplo:
        construir_url_con_parametros("https://api.io/buscar", q="python", page=2)
        -> "https://api.io/buscar?page=2&q=python"
    """
    # TODO:
    # Si not parametros: retorna url_base
    # Ordena sorted(parametros.items())
    # query_str = "&".join(f"{k}={v}" for k, v in ...)
    # retorna f"{url_base}?{query_str}"
    pass


# ==============================================================================
# RETO 4: Reenvío Universal de Invocaciones (*args, **kwargs)
# ==============================================================================
def envolver_ejecucion(funcion_objetivo, *args, **kwargs):
    """
    Recibe cualquier función 'funcion_objetivo' y reenvía exactamente todos los argumentos
    posicionales (*args) y nombrados (**kwargs) a dicha función.
    Retorna una tupla: (resultado_de_la_funcion, cantidad_args_posicionales, cantidad_args_nombrados)
    """
    # TODO:
    # res = funcion_objetivo(*args, **kwargs)
    # retorna (res, len(args), len(kwargs))
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
        h1 = registrar_evento("click")
        h2 = registrar_evento("scroll")
        validar("RETO 8.1 - Patrón seguro para evitar default mutable",
                h1 == ["click"] and h2 == ["scroll"] and h1 is not h2,
                f"Fallo en listas independientes: h1={h1}, h2={h2}")
    except Exception as e:
        validar("RETO 8.1 - Patrón seguro para evitar default mutable", False, f"Error: {e}")

    # Test Reto 2
    try:
        st_vacia = calcular_estadisticas()
        st_vals = calcular_estadisticas(10, 20, 30)
        validar("RETO 8.2 - Estadísticas con *args",
                st_vacia == {"cantidad": 0} and st_vals.get("suma") == 60 and st_vals.get("promedio") == 20.0,
                f"Resultado inesperado en stats: vacia={st_vacia}, vals={st_vals}")
    except Exception as e:
        validar("RETO 8.2 - Estadísticas con *args", False, f"Error: {e}")

    # Test Reto 3
    try:
        url1 = construir_url_con_parametros("https://api.io/v1")
        url2 = construir_url_con_parametros("https://api.io/v1", sort="desc", limit=10)
        validar("RETO 8.3 - Construcción de URL con **kwargs ordenados",
                url1 == "https://api.io/v1" and url2 == "https://api.io/v1?limit=10&sort=desc",
                f"Fallo en URLs: url1={url1}, url2={url2}")
    except Exception as e:
        validar("RETO 8.3 - Construcción de URL con **kwargs ordenados", False, f"Error: {e}")

    # Test Reto 4
    try:
        def suma_tres(a, b, c=0):
            return a + b + c

        res_exec, n_pos, n_kw = envolver_ejecucion(suma_tres, 5, 10, c=20)
        validar("RETO 8.4 - Reenvío universal con *args y **kwargs",
                res_exec == 35 and n_pos == 2 and n_kw == 1,
                f"Fallo en reenvío: res={res_exec}, pos={n_pos}, kw={n_kw}")
    except Exception as e:
        validar("RETO 8.4 - Reenvío universal con *args y **kwargs", False, f"Error: {e}")

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
