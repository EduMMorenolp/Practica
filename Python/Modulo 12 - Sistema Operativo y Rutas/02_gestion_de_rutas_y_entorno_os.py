"""
EJERCICIO: Gestión de Rutas Portables (os.path) y Variables de Entorno (os.environ)
Módulo 12: Librería Estándar: Sistema Operativo y Rutas (os, sys)

Domina la manipulación multiplataforma de rutas (join, basename, splitext)
y la lectura segura de variables de entorno de configuración.
"""

import os

# ==============================================================================
# RETO 1: Construcción Portable de Rutas con os.path.join
# ==============================================================================
def construir_ruta_portable(*partes_de_ruta):
    """
    Recibe una cantidad arbitraria de componentes de ruta (ej: "var", "log", "app.log")
    y los ensambla en una ruta válida para el sistema operativo actual utilizando os.path.join.
    """
    # TODO: Retorna os.path.join(*partes_de_ruta)
    pass


# ==============================================================================
# RETO 2: Descomposición de Nombre y Extensión
# ==============================================================================
def desglosar_archivo(ruta_archivo):
    """
    Dada una ruta (ej: "documentos/reportes/balance_2026.pdf"):
    1. Extrae únicamente el nombre del archivo con su extensión usando os.path.basename().
    2. Separa el nombre base y su extensión usando os.path.splitext().
    
    Retorna:
        tuple: (nombre_sin_extension: str, extension: str)
        
    Ejemplo:
        desglosar_archivo("datos/usuarios.csv") -> ("usuarios", ".csv")
    """
    # TODO:
    # nombre_completo = os.path.basename(ruta_archivo)
    # nombre_base, ext = os.path.splitext(nombre_completo)
    # retorna (nombre_base, ext)
    pass


# ==============================================================================
# RETO 3: Lectura Segura de Variables de Entorno con os.environ
# ==============================================================================
def leer_configuracion_entorno(nombre_variable, valor_por_defecto="DESARROLLO"):
    """
    Consulta 'nombre_variable' en os.environ usando .get().
    Si la variable no está definida en el sistema operativo, retorna 'valor_por_defecto'.
    """
    # TODO: Retorna os.environ.get(nombre_variable, valor_por_defecto)
    pass


# ==============================================================================
# RETO 4: Inspección de Constantes del Sistema Operativo
# ==============================================================================
def obtener_constantes_os():
    """
    Retorna un diccionario con las constantes del sistema operativo provistas por 'os':
    {
        "separador_directorios": os.sep,
        "separador_lineas": os.linesep,
        "nombre_nucleo": os.name
    }
    """
    # TODO: Retorna el diccionario con os.sep, os.linesep y os.name
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
        r_port = construir_ruta_portable("app", "storage", "database.sqlite")
        esperado_sep = os.sep.join(["app", "storage", "database.sqlite"])
        validar("RETO 12.1 - Construcción portable con os.path.join",
                r_port == esperado_sep,
                f"Esperado '{esperado_sep}', obtenido: '{r_port}'")
    except Exception as e:
        validar("RETO 12.1 - Construcción portable con os.path.join", False, f"Error: {e}")

    # Test Reto 2
    try:
        n_base, ext = desglosar_archivo("C:/servidor/logs/acceso_nginx.tar.gz")
        # splitext separa la última extensión -> ('acceso_nginx.tar', '.gz')
        validar("RETO 12.2 - Descomposición de archivo con basename y splitext",
                n_base == "acceso_nginx.tar" and ext == ".gz",
                f"Fallo en desglose: base={n_base}, ext={ext}")
    except Exception as e:
        validar("RETO 12.2 - Descomposición de archivo con basename y splitext", False, f"Error: {e}")

    # Test Reto 3
    try:
        os.environ["TEST_ENV_VAR_PRUEBA"] = "ACTIVO"
        v_ok = leer_configuracion_entorno("TEST_ENV_VAR_PRUEBA")
        v_def = leer_configuracion_entorno("VARIABLE_INEXISTENTE_XYZ_999", valor_por_defecto="DEFAULT_OK")
        validar("RETO 12.3 - Lectura de variables de entorno con os.environ.get",
                v_ok == "ACTIVO" and v_def == "DEFAULT_OK",
                f"Fallo en entorno: v_ok={v_ok}, v_def={v_def}")
    except Exception as e:
        validar("RETO 12.3 - Lectura de variables de entorno con os.environ.get", False, f"Error: {e}")

    # Test Reto 4
    try:
        c_os = obtener_constantes_os()
        validar("RETO 12.4 - Constantes de sistema (os.sep, linesep, name)",
                c_os.get("separador_directorios") == os.sep and c_os.get("nombre_nucleo") == os.name,
                f"Constantes no coinciden: {c_os}")
    except Exception as e:
        validar("RETO 12.4 - Constantes de sistema (os.sep, linesep, name)", False, f"Error: {e}")

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
