"""
EJERCICIO: Punteros de Archivo (seek, tell) y Atributos de Flujo
Módulo 9: Manejo de Archivos (File I/O) y Context Managers

Domina el control de posición del cursor de lectura/escritura (seek, tell)
y la inspección de metadatos del objeto archivo (name, mode, closed, encoding).
"""

import os

# ==============================================================================
# RETO 1: Consulta de Posición del Cursor con .tell()
# ==============================================================================
def consultar_posicion_cursor(objeto_archivo):
    """
    Retorna la posición actual (en bytes) del puntero interno de 'objeto_archivo'
    utilizando el método .tell().
    """
    # TODO: Retorna objeto_archivo.tell()
    pass


# ==============================================================================
# RETO 2: Rebobinado de Archivo con .seek(0)
# ==============================================================================
def rebobinar_y_leer_primera_linea(objeto_archivo):
    """
    Mueve el puntero al inicio absoluto del archivo utilizando .seek(0)
    y luego lee y retorna la primera línea utilizando .readline().
    """
    # TODO:
    # objeto_archivo.seek(0)
    # retorna objeto_archivo.readline()
    pass


# ==============================================================================
# RETO 3: Lectura por Desplazamiento Específico
# ==============================================================================
def leer_desde_desplazamiento(objeto_archivo, offset_bytes, longitud_caracteres):
    """
    Desplaza el cursor a la posición 'offset_bytes' desde el inicio con .seek(offset_bytes)
    y lee 'longitud_caracteres' con .read(longitud_caracteres).
    Retorna el texto leído.
    """
    # TODO:
    # objeto_archivo.seek(offset_bytes)
    # retorna objeto_archivo.read(longitud_caracteres)
    pass


# ==============================================================================
# RETO 4: Inspección de Atributos del Objeto Archivo
# ==============================================================================
def obtener_metadatos_archivo(objeto_archivo):
    """
    Inspecciona y extrae los atributos estándar de 'objeto_archivo':
    - 'name': nombre o ruta del archivo
    - 'mode': modo de apertura ('r', 'w', etc.)
    - 'closed': booleano que indica si está cerrado
    - 'encoding': codificación usada
    
    Retorna:
        dict: {"nombre": ..., "modo": ..., "cerrado": ..., "encoding": ...}
    """
    # TODO: Retorna el diccionario con los atributos name, mode, closed, encoding.
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

    archivo_temp = "temp_prueba_seek.txt"

    try:
        # Preparamos un archivo de prueba con texto predefinido
        with open(archivo_temp, "w+", encoding="utf-8") as f:
            f.write("0123456789\nSEGUNDA LINEA\n")

        with open(archivo_temp, "r+", encoding="utf-8") as f:
            # Test Reto 1
            f.read(5)  # Leemos 5 caracteres
            pos = consultar_posicion_cursor(f)
            validar("RETO 9.1 - Consulta de puntero con .tell()",
                    pos == 5,
                    f"Esperado posición 5, obtenido: {pos}")

            # Test Reto 2
            primera = rebobinar_y_leer_primera_linea(f)
            validar("RETO 9.2 - Rebobinado con .seek(0)",
                    "0123456789" in primera,
                    f"Esperado primera línea, obtenido: '{primera}'")

            # Test Reto 3
            frag = leer_desde_desplazamiento(f, offset_bytes=2, longitud_caracteres=4)
            validar("RETO 9.3 - Lectura con offset arbitrario (.seek / .read)",
                    frag == "2345",
                    f"Esperado '2345', obtenido: '{frag}'")

            # Test Reto 4
            meta = obtener_metadatos_archivo(f)
            validar("RETO 9.4 - Inspección de atributos de archivo",
                    meta.get("nombre") == archivo_temp and meta.get("modo") == "r+" and meta.get("cerrado") is False and meta.get("encoding") == "utf-8",
                    f"Metadatos no coinciden: {meta}")

    except Exception as e:
        validar("Pruebas de punteros", False, f"Error durante las pruebas: {e}")
    finally:
        if os.path.exists(archivo_temp):
            try:
                os.remove(archivo_temp)
            except OSError:
                pass

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
