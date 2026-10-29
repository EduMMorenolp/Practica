"""
EJERCICIO: Lectura, Escritura y Anexo de Archivos con Context Managers
Módulo 9: Manejo de Archivos (File I/O) y Context Managers

Aprende a abrir archivos de forma segura con 'with',
escribir ('w'), anexar ('a') y procesar líneas ('r').
"""

import os

# ==============================================================================
# RETO 1: Escritura Segura de Líneas ('w')
# ==============================================================================
def escribir_lineas(ruta_archivo, lista_cadenas):
    """
    Abre 'ruta_archivo' en modo de escritura ('w') con encoding="utf-8"
    utilizando el gestor de contexto 'with open(...)'.
    Escribe cada cadena de 'lista_cadenas' asegurando que cada una termine con un salto de línea '\\n'.
    """
    # TODO:
    # with open(ruta_archivo, "w", encoding="utf-8") as f:
    #     for linea in lista_cadenas:
    #         if not linea.endswith("\n"):
    #             linea += "\n"
    #         f.write(linea)
    pass


# ==============================================================================
# RETO 2: Anexo de Registro sin Borrar ('a')
# ==============================================================================
def anexar_log(ruta_archivo, nuevo_mensaje):
    """
    Abre 'ruta_archivo' en modo de anexo ('a') con encoding="utf-8".
    Agrega 'nuevo_mensaje' al final del archivo con un salto de línea '\\n'.
    """
    # TODO:
    # with open(ruta_archivo, "a", encoding="utf-8") as f:
    #     f.write(nuevo_mensaje + "\n")
    pass


# ==============================================================================
# RETO 3: Conteo de Líneas y Palabras ('r')
# ==============================================================================
def contar_lineas_y_palabras(ruta_archivo):
    """
    Abre 'ruta_archivo' en modo lectura ('r') con encoding="utf-8"
    y recorre el archivo línea por línea:
    - Cuenta la cantidad total de líneas.
    - Cuenta la cantidad total de palabras (usando .split() en cada línea).
    
    Retorna:
        tuple: (total_lineas: int, total_palabras: int)
    """
    # TODO:
    # total_lineas = 0
    # total_palabras = 0
    # with open(ruta_archivo, "r", encoding="utf-8") as f:
    #     for linea in f:
    #         total_lineas += 1
    #         total_palabras += len(linea.split())
    # retorna (total_lineas, total_palabras)
    pass


# ==============================================================================
# RETO 4: Filtrado y Copia de Archivos
# ==============================================================================
def filtrar_archivo_por_palabra(ruta_entrada, ruta_salida, palabra_clave):
    """
    Lee 'ruta_entrada' línea por línea y escribe en 'ruta_salida'
    ÚNICAMENTE aquellas líneas que contengan 'palabra_clave'.
    Retorna la cantidad de líneas filtradas que fueron escritas.
    """
    # TODO:
    # lineas_escritas = 0
    # with open(ruta_entrada, "r", encoding="utf-8") as f_in, open(ruta_salida, "w", encoding="utf-8") as f_out:
    #     for linea in f_in:
    #         if palabra_clave in linea:
    #             f_out.write(linea)
    #             lineas_escritas += 1
    # retorna lineas_escritas
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

    archivo_temp = "temp_prueba_io.txt"
    archivo_filtrado = "temp_prueba_filtrado.txt"

    try:
        # Test Reto 1
        escribir_lineas(archivo_temp, ["INFO: Inicio del sistema", "WARN: Memoria alta", "INFO: Servidor listo"])
        with open(archivo_temp, "r", encoding="utf-8") as f:
            contenido = f.readlines()
        validar("RETO 9.1 - Escritura segura con 'w' y with open",
                len(contenido) == 3 and contenido[0].strip() == "INFO: Inicio del sistema",
                f"Contenido inesperado: {contenido}")

        # Test Reto 2
        anexar_log(archivo_temp, "ERROR: Conexion perdida")
        with open(archivo_temp, "r", encoding="utf-8") as f:
            contenido_anexado = f.readlines()
        validar("RETO 9.2 - Anexo con 'a' sin sobreescritura",
                len(contenido_anexado) == 4 and "ERROR: Conexion perdida" in contenido_anexado[-1],
                f"Fallo en anexo: {contenido_anexado}")

        # Test Reto 3
        n_lines, n_words = contar_lineas_y_palabras(archivo_temp)
        validar("RETO 9.3 - Conteo de líneas y palabras",
                n_lines == 4 and n_words == 13,
                f"Esperado (4, 13), obtenido: ({n_lines}, {n_words})")

        # Test Reto 4
        cant_filtrada = filtrar_archivo_por_palabra(archivo_temp, archivo_filtrado, "INFO")
        with open(archivo_filtrado, "r", encoding="utf-8") as f:
            lineas_info = f.readlines()
        validar("RETO 9.4 - Filtrado y escritura condicional",
                cant_filtrada == 2 and len(lineas_info) == 2 and all("INFO" in l for l in lineas_info),
                f"Fallo en filtrado: cant={cant_filtrada}, lineas={lineas_info}")

    except Exception as e:
        validar("Pruebas de I/O", False, f"Error general durante las pruebas: {e}")
    finally:
        # Limpieza de archivos temporales
        for temp_file in [archivo_temp, archivo_filtrado]:
            if os.path.exists(temp_file):
                try:
                    os.remove(temp_file)
                except OSError:
                    pass

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
