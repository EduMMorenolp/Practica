"""
EJERCICIO: Formateo Clásico (%) y Método str.format()
Módulo 3: Formateo de Texto e Interpolación

Domina los especificadores clásicos de la referencia OverAPI (%d, %f, %x, %o)
y el formateo posicional y nombrado con str.format().
"""

# ==============================================================================
# RETO 1: Formateo Clásico con el Operador %
# ==============================================================================
def formatear_registro_usuario_clasico(usuario_str, id_numero, saldo_float):
    """
    Formatea un registro de usuario utilizando EXCLUSIVAMENTE el operador '%'.
    - El nombre de usuario se formatea como texto (%s).
    - El ID numérico se formatea como un entero de al menos 4 dígitos con ceros (%04d).
    - El saldo se formatea como decimal flotante con exactamente 2 decimales (%.2f).
    
    Formato esperado:
        "USUARIO: <usuario> | ID: <id_4_digitos> | SALDO: $<saldo_2_decimales>"
        
    Ejemplo:
        formatear_registro_usuario_clasico("valeria", 7, 1250.5)
        -> "USUARIO: valeria | ID: 0007 | SALDO: $1250.50"
    """
    # TODO: Usa "USUARIO: %s | ID: %04d | SALDO: $%.2f" % (usuario_str, id_numero, saldo_float)
    pass


# ==============================================================================
# RETO 2: Conversión a Hexadecimal y Octal con %
# ==============================================================================
def convertir_bases_numericas(numero_entero):
    """
    Convierte 'numero_entero' a sus representaciones en hexadecimal minúscula (%x),
    hexadecimal mayúscula (%X) y octal (%o) utilizando el operador %.
    
    Retorna:
        tuple: (hex_min: str, hex_may: str, octal_str: str)
        
    Ejemplo:
        convertir_bases_numericas(255) -> ("ff", "FF", "377")
    """
    # TODO: Usa ("%x" % numero_entero, "%X" % numero_entero, "%o" % numero_entero)
    pass


# ==============================================================================
# RETO 3: Formateo de Plantilla con str.format()
# ==============================================================================
def renderizar_plantilla_nombrada(plantilla_texto, diccionario_datos):
    """
    Toma una cadena de plantilla con marcadores de nombres (ej: "Hola {nombre}, tu saldo es {saldo}")
    y la formatea pasando 'diccionario_datos' mediante desempaquetado de diccionario (**).
    
    Retorna:
        str: Cadena formateada resultante.
    """
    # TODO: Retorna plantilla_texto.format(**diccionario_datos)
    pass


# ==============================================================================
# RETO 4: Formato de Moneda con Separador de Miles
# ==============================================================================
def formatear_moneda_con_miles(monto_numerico):
    """
    Utiliza str.format() o f-string para formatear un número como moneda
    con comas de separación de miles y exactamente dos decimales precedido por '$'.
    
    Argumentos:
        monto_numerico (int o float): Ej: 1250000.758
        
    Retorna:
        str: "$1,250,000.76"
    """
    # TODO: Retorna f"${monto_numerico:,.2f}"
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
        r1 = formatear_registro_usuario_clasico("marcos", 23, 850.4)
        esperado_1 = "USUARIO: marcos | ID: 0023 | SALDO: $850.40"
        validar("RETO 3.1 - Formateo clásico con %s, %04d, %.2f",
                r1 == esperado_1,
                f"Esperado '{esperado_1}', obtenido: '{r1}'")
    except Exception as e:
        validar("RETO 3.1 - Formateo clásico con %s, %04d, %.2f", False, f"Error: {e}")

    # Test Reto 2
    try:
        h_min, h_may, oct_str = convertir_bases_numericas(255)
        validar("RETO 3.2 - Bases numéricas con %x, %X, %o",
                h_min == "ff" and h_may == "FF" and oct_str == "377",
                f"Fallo en bases: min={h_min}, may={h_may}, oct={oct_str}")
    except Exception as e:
        validar("RETO 3.2 - Bases numéricas con %x, %X, %o", False, f"Error: {e}")

    # Test Reto 3
    try:
        tpl = "Servidor {servidor} activo en puerto {puerto}"
        datos = {"servidor": "Nginx-01", "puerto": 80}
        r3 = renderizar_plantilla_nombrada(tpl, datos)
        validar("RETO 3.3 - Renderizado con format(**kwargs)",
                r3 == "Servidor Nginx-01 activo en puerto 80",
                f"Resultado inesperado: '{r3}'")
    except Exception as e:
        validar("RETO 3.3 - Renderizado con format(**kwargs)", False, f"Error: {e}")

    # Test Reto 4
    try:
        m = formatear_moneda_con_miles(3500200.5)
        validar("RETO 3.4 - Formato de moneda con miles",
                m == "$3,500,200.50",
                f"Esperado '$3,500,200.50', obtenido: '{m}'")
    except Exception as e:
        validar("RETO 3.4 - Formato de moneda con miles", False, f"Error: {e}")

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
