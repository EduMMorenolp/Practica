"""
EJERCICIO: Limpieza, Partición y Ensamblado de Strings
Módulo 2: Cadenas de Texto (Strings) y Métodos de Manipulación

Aprende a procesar registros delimitados (split/join),
extraer pares clave-valor (partition) y aplicar rellenos numéricos (zfill).
"""

# ==============================================================================
# RETO 1: Parseo y Limpieza de Línea Delimitada (CSV)
# ==============================================================================
def parsear_linea_delimitada(linea_texto, separador=","):
    """
    Toma una línea de texto con valores separados por un delimitador,
    divide los campos con .split() y elimina espacios en blanco alrededor
    de cada campo individual usando .strip().
    
    Argumentos:
        linea_texto (str): Ej: "  101 ,  Laptop Lenovo , 899.99  "
        separador (str): Carácter separador (por defecto ',')
        
    Retorna:
        list of str: ['101', 'Laptop Lenovo', '899.99']
    """
    # TODO: Usa .split(separador) y una comprensión de lista para aplicar .strip() a cada campo.
    pass


# ==============================================================================
# RETO 2: Extracción Clave-Valor con Partition
# ==============================================================================
def extraer_clave_valor(linea_config, separador="="):
    """
    Toma una línea de configuración (ej: "DATABASE_HOST = localhost")
    y utiliza .partition(separador) para separar la clave y el valor.
    Retorna una tupla (clave_limpia, valor_limpio) descartando el separador.
    Si el separador no está presente en la línea, retorna (linea_config.strip(), None).
    
    Retorna:
        tuple: (clave: str, valor: str o None)
    """
    # TODO:
    # 1. clave, sep, valor = linea_config.partition(separador)
    # 2. Si sep == '': retorna (clave.strip(), None)
    # 3. Sino: retorna (clave.strip(), valor.strip())
    pass


# ==============================================================================
# RETO 3: Ensamblado de URLs Amigables (Slug)
# ==============================================================================
def crear_slug(palabras, separador="-"):
    """
    Toma una lista de palabras, convierte cada una a minúsculas (.lower())
    y las une en una sola cadena mediante el 'separador'.
    
    Argumentos:
        palabras (list of str): ['Curso', 'De', 'Python', 'Avanzado']
        separador (str): '-'
        
    Retorna:
        str: "curso-de-python-avanzado"
    """
    # TODO: Convierte a minúsculas y ensambla con separador.join(...)
    pass


# ==============================================================================
# RETO 4: Formateador de Código de Factura con Ceros a la Izquierda
# ==============================================================================
def generar_codigo_factura(prefijo, numero_entero, longitud_digitos=6):
    """
    Genera un identificador de factura combinando un prefijo en mayúsculas
    y el número entero formateado con ceros a la izquierda usando .zfill().
    
    Argumentos:
        prefijo (str): Ej: "fac"
        numero_entero (int): Ej: 42
        longitud_digitos (int): Ej: 6 -> "000042"
        
    Retorna:
        str: "FAC-000042"
    """
    # TODO:
    # 1. pref = prefijo.strip().upper()
    # 2. num_str = str(numero_entero).zfill(longitud_digitos)
    # 3. Retorna f"{pref}-{num_str}"
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
        csv_p = parsear_linea_delimitada("  201 ;  Teclado Mecanico ; 75.50  \n", separador=";")
        validar("RETO 2.1 - Parseo delimitado con split y strip",
                csv_p == ['201', 'Teclado Mecanico', '75.50'],
                f"Resultado inesperado: {csv_p}")
    except Exception as e:
        validar("RETO 2.1 - Parseo delimitado con split y strip", False, f"Error: {e}")

    # Test Reto 2
    try:
        k1, v1 = extraer_clave_valor("API_KEY = secret_token_xyz_123")
        k2, v2 = extraer_clave_valor("COMENTARIO_SIN_VALOR")
        validar("RETO 2.2 - Extracción con partition",
                k1 == "API_KEY" and v1 == "secret_token_xyz_123" and k2 == "COMENTARIO_SIN_VALOR" and v2 is None,
                f"Fallo en partition: caso1=({k1}, {v1}), caso2=({k2}, {v2})")
    except Exception as e:
        validar("RETO 2.2 - Extracción con partition", False, f"Error: {e}")

    # Test Reto 3
    try:
        slug = crear_slug(["Aprende", "Desarrollo", "Backend", "Moderno"])
        validar("RETO 2.3 - Ensamblado con join y lower",
                slug == "aprende-desarrollo-backend-moderno",
                f"Esperado 'aprende-desarrollo-backend-moderno', obtenido: '{slug}'")
    except Exception as e:
        validar("RETO 2.3 - Ensamblado con join y lower", False, f"Error: {e}")

    # Test Reto 4
    try:
        fac = generar_codigo_factura("inv", 125, longitud_digitos=6)
        validar("RETO 2.4 - Relleno de ceros con zfill",
                fac == "INV-000125",
                f"Esperado 'INV-000125', obtenido: '{fac}'")
    except Exception as e:
        validar("RETO 2.4 - Relleno de ceros con zfill", False, f"Error: {e}")

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
