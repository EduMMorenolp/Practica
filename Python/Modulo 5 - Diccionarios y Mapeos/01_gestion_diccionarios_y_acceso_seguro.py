"""
EJERCICIO: Gestión de Diccionarios y Acceso Seguro
Módulo 5: Diccionarios y Mapeos (dict)

Aprende a consultar valores sin KeyError (get), agrupar elementos (setdefault),
fusionar configuraciones (update) y extraer elementos (pop).
"""

# ==============================================================================
# RETO 1: Consulta Segura con Valor por Defecto
# ==============================================================================
def consultar_configuracion(diccionario_ajustes, clave, valor_respaldo="NO_CONFIGURADO"):
    """
    Retorna el valor asociado a 'clave' en 'diccionario_ajustes'.
    Si la clave no existe, debe retornar 'valor_respaldo' sin lanzar KeyError.
    """
    # TODO: Usa diccionario_ajustes.get(clave, valor_respaldo)
    pass


# ==============================================================================
# RETO 2: Agrupación de Elementos con setdefault()
# ==============================================================================
def agrupar_por_categoria(lista_articulos):
    """
    Toma una lista de diccionarios, donde cada diccionario representa un artículo:
    ej: [{"nombre": "Manzana", "categoria": "Fruta"}, {"nombre": "Lechuga", "categoria": "Verdura"}]
    
    Agrupa los nombres de los artículos por categoría utilizando .setdefault().
    
    Retorna:
        dict: {"Fruta": ["Manzana"], "Verdura": ["Lechuga"]}
    """
    # TODO:
    # agrupados = {}
    # for item in lista_articulos:
    #     cat = item["categoria"]
    #     nombre = item["nombre"]
    #     agrupados.setdefault(cat, []).append(nombre)
    # retorna agrupados
    pass


# ==============================================================================
# RETO 3: Fusión Inmutable de Configuraciones con .update()
# ==============================================================================
def fusionar_ajustes(config_base, config_personalizada):
    """
    Crea una copia de 'config_base' usando .copy(), aplica encima las claves
    y valores de 'config_personalizada' usando .update() y retorna el diccionario resultante.
    'config_base' NO debe verse modificada.
    """
    # TODO:
    # res = config_base.copy()
    # res.update(config_personalizada)
    # retorna res
    pass


# ==============================================================================
# RETO 4: Extracción y Eliminación con .pop()
# ==============================================================================
def extraer_clave_segura(diccionario, clave_a_remover, valor_defecto=None):
    """
    Extrae y remueve 'clave_a_remover' de 'diccionario' usando .pop().
    Si la clave no existe, retorna 'valor_defecto' sin romper la ejecución.
    """
    # TODO: Retorna diccionario.pop(clave_a_remover, valor_defecto)
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
        cfg = {"timeout": 30, "debug": True}
        v1 = consultar_configuracion(cfg, "timeout")
        v2 = consultar_configuracion(cfg, "retries", valor_respaldo=3)
        validar("RETO 5.1 - Consulta segura con .get()",
                v1 == 30 and v2 == 3,
                f"Fallo en .get: timeout={v1}, retries={v2}")
    except Exception as e:
        validar("RETO 5.1 - Consulta segura con .get()", False, f"Error: {e}")

    # Test Reto 2
    try:
        items = [
            {"nombre": "Manzana", "categoria": "Frutas"},
            {"nombre": "Banana", "categoria": "Frutas"},
            {"nombre": "Zanahoria", "categoria": "Verduras"}
        ]
        agrup = agrupar_por_categoria(items)
        validar("RETO 5.2 - Agrupación con .setdefault()",
                agrup == {"Frutas": ["Manzana", "Banana"], "Verduras": ["Zanahoria"]},
                f"Resultado inesperado en agrupación: {agrup}")
    except Exception as e:
        validar("RETO 5.2 - Agrupación con .setdefault()", False, f"Error: {e}")

    # Test Reto 3
    try:
        base = {"tema": "claro", "fontSize": 12}
        custom = {"fontSize": 16, "autoguardado": True}
        fused = fusionar_ajustes(base, custom)
        validar("RETO 5.3 - Fusión inmutable con .copy() y .update()",
                fused == {"tema": "claro", "fontSize": 16, "autoguardado": True} and base == {"tema": "claro", "fontSize": 12},
                f"Fallo en fusión: fused={fused}, base={base}")
    except Exception as e:
        validar("RETO 5.3 - Fusión inmutable con .copy() y .update()", False, f"Error: {e}")

    # Test Reto 4
    try:
        d_demo = {"a": 1, "b": 2}
        rem = extraer_clave_segura(d_demo, "a")
        rem_missing = extraer_clave_segura(d_demo, "z", valor_defecto=-1)
        validar("RETO 5.4 - Extracción segura con .pop()",
                rem == 1 and "a" not in d_demo and rem_missing == -1,
                f"Fallo en pop: rem={rem}, missing={rem_missing}, d_demo={d_demo}")
    except Exception as e:
        validar("RETO 5.4 - Extracción segura con .pop()", False, f"Error: {e}")

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
