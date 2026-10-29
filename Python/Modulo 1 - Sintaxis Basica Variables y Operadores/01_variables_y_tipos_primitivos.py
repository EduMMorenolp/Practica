"""
EJERCICIO: Variables, Tipos Primitivos y Type Casting
Módulo 1: Sintaxis Básica, Variables, Tipos y Operadores

Aprende a trabajar con tipado dinámico, conversión de tipos (casting)
y evaluación de valores Truthy/Falsy en Python.
"""

# ==============================================================================
# RETO 1: Conversión Segura a Entero (Type Casting)
# ==============================================================================
def convertir_a_entero_seguro(valor, por_defecto=0):
    """
    Intenta convertir 'valor' a un número entero con int(valor).
    Si la conversión genera un ValueError o TypeError, retorna 'por_defecto'.
    
    Argumentos:
        valor: Cualquier dato de entrada (ej: "125", "abc", 45.8)
        por_defecto (int): Valor de respaldo si falla la conversión.
        
    Retorna:
        int: El número entero convertido o el valor por defecto.
    """
    # TODO: Usa un bloque try/except para intentar int(valor).
    # En caso de ValueError o TypeError, retorna por_defecto.
    pass


# ==============================================================================
# RETO 2: Clasificación de Valores Truthy y Falsy
# ==============================================================================
def evaluar_verdad_python(valor):
    """
    Determina si un valor dado se evalúa como verdadero o falso en un contexto booleano.
    
    Retorna:
        str: "Truthy" si bool(valor) es True, o "Falsy" si bool(valor) es False.
    """
    # TODO: Evalúa bool(valor) y retorna "Truthy" o "Falsy".
    pass


# ==============================================================================
# RETO 3: Identificador de Tipos Primitivos
# ==============================================================================
def identificar_tipo_primitivo(dato):
    """
    Retorna una etiqueta en español según el tipo primitivo exacto de 'dato':
    - int -> "entero" (Ojo: en Python bool hereda de int, asegúrate de verificar bool primero!)
    - float -> "decimal"
    - str -> "texto"
    - bool -> "booleano"
    - NoneType (dato is None) -> "nulo"
    - Cualquier otro -> "otro"
    
    Retorna:
        str: Nombre del tipo primitivo.
    """
    # TODO: Usa isinstance() y la comprobación 'is None'.
    # Recuerda verificar bool antes que int porque isinstance(True, int) es True.
    pass


# ==============================================================================
# RETO 4: Comprobación de Identidad con None
# ==============================================================================
def es_completamente_nulo(objeto):
    """
    Verifica si 'objeto' es exactamente el objeto singleton None utilizando el operador 'is'.
    
    Retorna:
        bool: True si objeto is None, False en caso contrario.
    """
    # TODO: Retorna objeto is None
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
        r1_a = convertir_a_entero_seguro("123", por_defecto=-1)
        r1_b = convertir_a_entero_seguro("hola", por_defecto=-1)
        validar("RETO 1.1 - Conversión segura a entero",
                r1_a == 123 and r1_b == -1,
                f"Fallo en conversión: r1_a={r1_a}, r1_b={r1_b}")
    except Exception as e:
        validar("RETO 1.1 - Conversión segura a entero", False, f"Error: {e}")

    # Test Reto 2
    try:
        v_0 = evaluar_verdad_python(0)
        v_str = evaluar_verdad_python("Python")
        v_none = evaluar_verdad_python(None)
        validar("RETO 1.2 - Clasificación Truthy / Falsy",
                v_0 == "Falsy" and v_str == "Truthy" and v_none == "Falsy",
                f"Fallo en Truthy/Falsy: 0={v_0}, 'Python'={v_str}, None={v_none}")
    except Exception as e:
        validar("RETO 1.2 - Clasificación Truthy / Falsy", False, f"Error: {e}")

    # Test Reto 3
    try:
        t_int = identificar_tipo_primitivo(42)
        t_bool = identificar_tipo_primitivo(True)
        t_float = identificar_tipo_primitivo(3.14)
        t_none = identificar_tipo_primitivo(None)
        validar("RETO 1.3 - Identificador de tipos primitivos",
                t_int == "entero" and t_bool == "booleano" and t_float == "decimal" and t_none == "nulo",
                f"Fallo en tipos: int={t_int}, bool={t_bool}, float={t_float}, none={t_none}")
    except Exception as e:
        validar("RETO 1.3 - Identificador de tipos primitivos", False, f"Error: {e}")

    # Test Reto 4
    try:
        n_ok = es_completamente_nulo(None)
        n_false = es_completamente_nulo(0)
        validar("RETO 1.4 - Comprobación de identidad con None",
                n_ok is True and n_false is False,
                f"Fallo en comprobación is None: None={n_ok}, 0={n_false}")
    except Exception as e:
        validar("RETO 1.4 - Comprobación de identidad con None", False, f"Error: {e}")

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
