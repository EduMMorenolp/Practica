"""
EJERCICIO: Métodos de Transformación, Búsqueda y Conteo en Strings
Módulo 2: Cadenas de Texto (Strings) y Métodos de Manipulación

Aprende a normalizar texto, comprobar prefijos/sufijos y realizar
búsquedas posicionales seguras.
"""

# ==============================================================================
# RETO 1: Normalización de Títulos
# ==============================================================================
def normalizar_titulo(texto_crudo):
    """
    Toma un texto que puede tener espacios en blanco en los extremos y mayúsculas desordenadas.
    Elimina los espacios iniciales/finales y lo convierte a formato título (Title Case).
    
    Argumentos:
        texto_crudo (str): Ej: "   apRendeR pYtHon dEsde cEro  \n"
        
    Retorna:
        str: "Aprender Python Desde Cero"
    """
    # TODO: Usa .strip() y .title() y retorna la cadena transformada.
    pass


# ==============================================================================
# RETO 2: Validación de Extensiones de Archivos
# ==============================================================================
def tiene_extension_valida(nombre_archivo, extensiones_permitidas):
    """
    Comprueba si 'nombre_archivo' termina con alguna de las extensiones de la tupla/lista
    'extensiones_permitidas' (sin importar si el nombre tiene mayúsculas o minúsculas).
    
    Argumentos:
        nombre_archivo (str): Ej: "documento.PDF" o "foto.jpg"
        extensiones_permitidas (tuple de str): Ej: (".pdf", ".docx", ".txt")
        
    Retorna:
        bool: True si tiene una extensión válida, False en caso contrario.
    """
    # TODO: Convierte nombre_archivo a minúsculas con .lower()
    # Usa .endswith(tuple(ext.lower() for ext in extensiones_permitidas))
    pass


# ==============================================================================
# RETO 3: Conteo Insensible a Mayúsculas
# ==============================================================================
def contar_palabra_en_texto(texto, palabra_a_buscar):
    """
    Cuenta cuántas veces aparece 'palabra_a_buscar' dentro de 'texto'
    sin distinguir entre mayúsculas y minúsculas.
    
    Argumentos:
        texto (str): Texto completo a analizar.
        palabra_a_buscar (str): Subcadena que se desea contar.
        
    Retorna:
        int: Número de apariciones encontradas.
    """
    # TODO: Convierte ambos a .lower() y usa .count(palabra.lower())
    pass


# ==============================================================================
# RETO 4: Localizador Seguro de Subcadenas
# ==============================================================================
def localizar_posicion_segura(texto, subcadena):
    """
    Busca la posición (índice 0-indexado) de la primera aparición de 'subcadena' en 'texto'.
    Si la subcadena no existe, debe retornar None en lugar de -1 o lanzar error.
    
    Retorna:
        int o None: El índice de inicio o None si no se encuentra.
    """
    # TODO: Usa texto.find(subcadena). Si retorna -1, devuelve None; de lo contrario, el índice.
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
        t1 = normalizar_titulo("   intEligencIa artIficIal aPlicada   \n")
        validar("RETO 2.1 - Normalización de título con strip y title",
                t1 == "Inteligencia Artificial Aplicada",
                f"Esperado 'Inteligencia Artificial Aplicada', obtenido: '{t1}'")
    except Exception as e:
        validar("RETO 2.1 - Normalización de título con strip y title", False, f"Error: {e}")

    # Test Reto 2
    try:
        exts = (".pdf", ".docx")
        v1 = tiene_extension_valida("reporte_mensual.PDF", exts)
        v2 = tiene_extension_valida("imagen.png", exts)
        validar("RETO 2.2 - Validación de extensión con endswith",
                v1 is True and v2 is False,
                f"Fallo en validación de extensión: v1={v1}, v2={v2}")
    except Exception as e:
        validar("RETO 2.2 - Validación de extensión con endswith", False, f"Error: {e}")

    # Test Reto 3
    try:
        c = contar_palabra_en_texto("Python es genial porque python es simple y PYTHON es veloz", "python")
        validar("RETO 2.3 - Conteo insensible a mayúsculas con count",
                c == 3,
                f"Esperado 3 apariciones, obtenido: {c}")
    except Exception as e:
        validar("RETO 2.3 - Conteo insensible a mayúsculas con count", False, f"Error: {e}")

    # Test Reto 4
    try:
        idx_ok = localizar_posicion_segura("Aprender ciencia de datos", "ciencia")
        idx_none = localizar_posicion_segura("Aprender ciencia de datos", "algoritmos")
        validar("RETO 2.4 - Localización segura con find",
                idx_ok == 9 and idx_none is None,
                f"Fallo en localización: idx_ok={idx_ok}, idx_none={idx_none}")
    except Exception as e:
        validar("RETO 2.4 - Localización segura con find", False, f"Error: {e}")

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
