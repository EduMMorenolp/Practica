"""
EJERCICIO: Manipulación de Fechas, Tiempos y Duraciones (datetime)
Módulo 11: Librería Estándar: Matemáticas, Aleatoriedad y Fechas

Aprende a calcular diferencias temporales con timedelta,
parsear cadenas de texto con strptime y formatear fechas con strftime e isoformat.
"""

from datetime import datetime, date, timedelta

# ==============================================================================
# RETO 1: Diferencia en Días entre Fechas (timedelta)
# ==============================================================================
def calcular_dias_de_diferencia(fecha_inicio_str, fecha_fin_str):
    """
    Recibe dos cadenas de fecha en formato ISO "AAAA-MM-DD" (ej: "2026-01-01" y "2026-01-15").
    Parsea las fechas y retorna la cantidad neta de días transcurridos como un número entero.
    Si fecha_fin es posterior a fecha_inicio, el número debe ser positivo.
    
    Retorna:
        int: Días de diferencia.
    """
    # TODO:
    # d1 = datetime.strptime(fecha_inicio_str, "%Y-%m-%d")
    # d2 = datetime.strptime(fecha_fin_str, "%Y-%m-%d")
    # retorna (d2 - d1).days
    pass


# ==============================================================================
# RETO 2: Suma de Duración y Formateo con strftime
# ==============================================================================
def proyectar_fecha_futura(fecha_base_str, dias_a_sumar):
    """
    Toma una fecha base en formato "AAAA-MM-DD" (ej: "2026-10-01"), le suma
    'dias_a_sumar' usando timedelta(days=dias_a_sumar) y retorna la fecha
    resultante formateada en el estándar latinoamericano: "DD/MM/AAAA".
    
    Ejemplo:
        proyectar_fecha_futura("2026-10-01", 10) -> "11/10/2026"
    """
    # TODO:
    # d = datetime.strptime(fecha_base_str, "%Y-%m-%d")
    # nueva = d + timedelta(days=dias_a_sumar)
    # retorna nueva.strftime("%d/%m/%Y")
    pass


# ==============================================================================
# RETO 3: Identificador de Fin de Semana (weekday)
# ==============================================================================
def es_fin_de_semana(fecha_str):
    """
    Recibe una fecha en formato "AAAA-MM-DD" y determina si cae en sábado o domingo.
    Nota: en Python, .weekday() retorna 0 para lunes, ..., 5 para sábado y 6 para domingo.
    
    Retorna:
        bool: True si es sábado (5) o domingo (6), False si es día de semana (0-4).
    """
    # TODO:
    # d = datetime.strptime(fecha_str, "%Y-%m-%d")
    # retorna d.weekday() in (5, 6)
    pass


# ==============================================================================
# RETO 4: Generación de Cadena ISO 8601
# ==============================================================================
def formatear_iso_estandar(objeto_dt):
    """
    Retorna la representación estándar ISO 8601 de 'objeto_dt' utilizando .isoformat().
    """
    # TODO: Retorna objeto_dt.isoformat()
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
        dias = calcular_dias_de_diferencia("2026-10-01", "2026-10-16")
        validar("RETO 11.1 - Diferencia de días con strptime y timedelta",
                dias == 15,
                f"Esperado 15 días, obtenido: {dias}")
    except Exception as e:
        validar("RETO 11.1 - Diferencia de días con strptime y timedelta", False, f"Error: {e}")

    # Test Reto 2
    try:
        f_futura = proyectar_fecha_futura("2026-12-25", 7)
        # 25 dic + 7 días = 1 enero 2027
        validar("RETO 11.2 - Proyección de fecha con strftime ('%d/%m/%Y')",
                f_futura == "01/01/2027",
                f"Esperado '01/01/2027', obtenido: '{f_futura}'")
    except Exception as e:
        validar("RETO 11.2 - Proyección de fecha con strftime ('%d/%m/%Y')", False, f"Error: {e}")

    # Test Reto 3
    try:
        # 2026-10-31 es Sábado, 2026-10-28 es Miércoles
        fin_sem = es_fin_de_semana("2026-10-31")
        miercoles = es_fin_de_semana("2026-10-28")
        validar("RETO 11.3 - Detección de fin de semana con .weekday()",
                fin_sem is True and miercoles is False,
                f"Fallo en detección: sabado={fin_sem}, miercoles={miercoles}")
    except Exception as e:
        validar("RETO 11.3 - Detección de fin de semana con .weekday()", False, f"Error: {e}")

    # Test Reto 4
    try:
        dt_demo = datetime(2026, 5, 20, 14, 30, 0)
        iso_str = formatear_iso_estandar(dt_demo)
        validar("RETO 11.4 - Formato ISO 8601 con .isoformat()",
                iso_str == "2026-05-20T14:30:00",
                f"Esperado '2026-05-20T14:30:00', obtenido: '{iso_str}'")
    except Exception as e:
        validar("RETO 11.4 - Formato ISO 8601 con .isoformat()", False, f"Error: {e}")

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
