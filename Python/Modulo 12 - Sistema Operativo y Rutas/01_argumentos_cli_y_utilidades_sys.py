"""
EJERCICIO: Argumentos de Terminal (CLI) y Utilidades del Runtime (sys)
Módulo 12: Librería Estándar: Sistema Operativo y Rutas (os, sys)

Aprende a procesar argumentos de terminal (sys.argv),
inspeccionar la versión del intérprete y consultar módulos cargados (sys.modules).
"""

import sys

# ==============================================================================
# RETO 1: Parseo de Argumentos CLI Simples
# ==============================================================================
def parsear_flags_argv(lista_argumentos):
    """
    Toma una lista que simula sys.argv (ej: ["app.py", "--host", "localhost", "--port", "8080"])
    y retorna un diccionario mapeando cada clave que comience con '--' a su valor subsiguiente.
    El primer elemento (nombre del script) se ignora.
    
    Argumentos:
        lista_argumentos (list of str): ["script.py", "--host", "127.0.0.1", "--verbose", "true"]
        
    Retorna:
        dict: {"host": "127.0.0.1", "verbose": "true"}
    """
    # TODO:
    # args = lista_argumentos[1:]
    # resultado = {}
    # i = 0
    # while i < len(args):
    #     if args[i].startswith("--") and i + 1 < len(args):
    #         clave = args[i][2:]
    #         resultado[clave] = args[i + 1]
    #         i += 2
    #     else:
    #         i += 1
    # retorna resultado
    pass


# ==============================================================================
# RETO 2: Inspección de Plataforma y Versión
# ==============================================================================
def obtener_metadatos_runtime():
    """
    Utiliza sys.platform y sys.version_info para retornar un diccionario con:
    {
        "plataforma": sys.platform,
        "version_mayor": sys.version_info.major,
        "version_menor": sys.version_info.minor
    }
    """
    # TODO: Retorna el diccionario con la información del runtime de sys.
    pass


# ==============================================================================
# RETO 3: Extracción de Argumento Nombrado con Fallback
# ==============================================================================
def extraer_parametro_cli(lista_argumentos, flag_buscada, valor_defecto=None):
    """
    Busca 'flag_buscada' (ej: "--env") dentro de 'lista_argumentos'.
    Si la encuentra y hay un valor inmediatamente a continuación, retorna ese valor.
    De lo contrario, retorna 'valor_defecto'.
    
    Ejemplo:
        extraer_parametro_cli(["run.py", "--env", "prod"], "--env") -> "prod"
        extraer_parametro_cli(["run.py"], "--env", valor_defecto="dev") -> "dev"
    """
    # TODO:
    # if flag_buscada in lista_argumentos:
    #     idx = lista_argumentos.index(flag_buscada)
    #     if idx + 1 < len(lista_argumentos):
    #         return lista_argumentos[idx + 1]
    # return valor_defecto
    pass


# ==============================================================================
# RETO 4: Comprobación de Módulo en sys.modules
# ==============================================================================
def esta_modulo_importado(nombre_modulo):
    """
    Verifica si 'nombre_modulo' (ej: 'sys' o 'math') se encuentra actualmente
    cargado en la memoria del intérprete consultando el diccionario 'sys.modules'.
    
    Retorna:
        bool: True si está en sys.modules, False en caso contrario.
    """
    # TODO: Retorna nombre_modulo in sys.modules
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
        raw_argv = ["server.py", "--host", "0.0.0.0", "--port", "5000"]
        parsed = parsear_flags_argv(raw_argv)
        validar("RETO 12.1 - Parseo de argumentos con flags --",
                parsed == {"host": "0.0.0.0", "port": "5000"},
                f"Resultado inesperado: {parsed}")
    except Exception as e:
        validar("RETO 12.1 - Parseo de argumentos con flags --", False, f"Error: {e}")

    # Test Reto 2
    try:
        meta = obtener_metadatos_runtime()
        validar("RETO 12.2 - Metadatos de plataforma y version_info",
                "plataforma" in meta and meta.get("version_mayor") == sys.version_info.major,
                f"Metadatos no coinciden: {meta}")
    except Exception as e:
        validar("RETO 12.2 - Metadatos de plataforma y version_info", False, f"Error: {e}")

    # Test Reto 3
    try:
        v_ok = extraer_parametro_cli(["app.py", "--config", "prod.json"], "--config")
        v_def = extraer_parametro_cli(["app.py"], "--config", valor_defecto="local.json")
        validar("RETO 12.3 - Extracción de parámetro CLI con fallback",
                v_ok == "prod.json" and v_def == "local.json",
                f"Fallo en extracción: v_ok={v_ok}, v_def={v_def}")
    except Exception as e:
        validar("RETO 12.3 - Extracción de parámetro CLI con fallback", False, f"Error: {e}")

    # Test Reto 4
    try:
        sys_cargado = esta_modulo_importado("sys")
        fantasma = esta_modulo_importado("modulo_inexistente_xyz_123")
        validar("RETO 12.4 - Consulta de sys.modules",
                sys_cargado is True and fantasma is False,
                f"Fallo en sys.modules: sys={sys_cargado}, fantasma={fantasma}")
    except Exception as e:
        validar("RETO 12.4 - Consulta de sys.modules", False, f"Error: {e}")

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
