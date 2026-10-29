"""
EJERCICIO: F-Strings Avanzados y Alineación Tabular
Módulo 3: Formateo de Texto e Interpolación

Domina la sintaxis moderna de f-strings, la evaluación de expresiones dentro de llaves,
el control de decimales, la notación científica y la alineación (<, >, ^).
"""

# ==============================================================================
# RETO 1: Fila Tabular Alineada con F-Strings
# ==============================================================================
def generar_fila_tabular(nombre_item, precio_flotante, cantidad_entera):
    """
    Genera una línea formateada de tabla donde:
    - 'nombre_item' ocupa 15 caracteres y está alineado a la IZQUIERDA (<).
    - Un separador " | ".
    - 'precio_flotante' está precedido por '$', ocupa 8 caracteres a la DERECHA (>) con 2 decimales.
    - Un separador " | ".
    - 'cantidad_entera' ocupa 6 caracteres CENTRADA (^).
    
    Formato esperado:
        f"{nombre_item:<15} | ${precio_flotante:>8.2f} | {cantidad_entera:^6d}"
        
    Ejemplo:
        generar_fila_tabular("Monitor 27", 299.99, 14)
        -> "Monitor 27      | $  299.99 |   14  "
    """
    # TODO: Retorna la cadena ensamblada según las especificaciones.
    pass


# ==============================================================================
# RETO 2: Formateo de Porcentajes
# ==============================================================================
def formatear_porcentaje(ratio_decimal, decimales=2):
    """
    Toma un valor entre 0.0 y 1.0 (ej: 0.85426) y lo convierte en una cadena
    de porcentaje con el número de decimales especificado, terminando con '%'.
    
    Argumentos:
        ratio_decimal (float): Ej: 0.85426
        decimales (int): Cantidad de decimales deseados (por defecto 2)
        
    Retorna:
        str: "85.43%"
    """
    # TODO: Usa el especificador de porcentaje de Python: f"{ratio_decimal:.{decimales}%}"
    pass


# ==============================================================================
# RETO 3: Notación Científica
# ==============================================================================
def formatear_notacion_cientifica(numero_grande, decimales=2):
    """
    Formatea un número en notación exponencial científica (ej: 1500000 -> "1.50e+06")
    con la cantidad de decimales indicada.
    
    Retorna:
        str: Cadena en notación científica minúscula (e).
    """
    # TODO: Retorna f"{numero_grande:.{decimales}e}"
    pass


# ==============================================================================
# RETO 4: Encabezado Centrado con Carácter de Relleno
# ==============================================================================
def generar_banner_centrado(texto_titulo, ancho_total=30, caracter_relleno="="):
    """
    Centra 'texto_titulo' rodeándolo con 'caracter_relleno' a ambos lados
    hasta alcanzar un total de 'ancho_total' caracteres.
    
    Ejemplo:
        generar_banner_centrado(" REPORTE ", ancho_total=20, caracter_relleno="=")
        -> "===== REPORTE ======"
    """
    # TODO: Usa f"{texto_titulo:{caracter_relleno}^{ancho_total}}" o texto_titulo.center(...)
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
        fila = generar_fila_tabular("Teclado", 45.5, 8)
        esp = "Teclado         | $   45.50 |   8   "
        validar("RETO 3.1 - Fila tabular con f-string y alineaciones (<, >, ^)",
                fila == esp,
                f"\nEsperado: '{esp}'\nObtenido: '{fila}'")
    except Exception as e:
        validar("RETO 3.1 - Fila tabular con f-string y alineaciones (<, >, ^)", False, f"Error: {e}")

    # Test Reto 2
    try:
        pct = formatear_porcentaje(0.85426, decimales=2)
        validar("RETO 3.2 - Formateo de porcentajes con f-string",
                pct == "85.43%",
                f"Esperado '85.43%', obtenido: '{pct}'")
    except Exception as e:
        validar("RETO 3.2 - Formateo de porcentajes con f-string", False, f"Error: {e}")

    # Test Reto 3
    try:
        sci = formatear_notacion_cientifica(1500000, decimales=2)
        validar("RETO 3.3 - Notación científica exponencial",
                sci == "1.50e+06",
                f"Esperado '1.50e+06', obtenido: '{sci}'")
    except Exception as e:
        validar("RETO 3.3 - Notación científica exponencial", False, f"Error: {e}")

    # Test Reto 4
    try:
        banner = generar_banner_centrado(" MENU ", ancho_total=20, caracter_relleno="=")
        validar("RETO 3.4 - Banner centrado con relleno",
                len(banner) == 20 and " MENU " in banner and banner.startswith("="),
                f"Resultado inesperado en banner: '{banner}'")
    except Exception as e:
        validar("RETO 3.4 - Banner centrado con relleno", False, f"Error: {e}")

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
