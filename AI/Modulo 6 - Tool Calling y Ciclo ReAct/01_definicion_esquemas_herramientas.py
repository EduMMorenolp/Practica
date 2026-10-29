"""
EJERCICIO: Esquemas de Herramientas (Tool Calling) y Validación
Módulo 6: Tool Calling y Ciclo ReAct

Los esquemas JSON permiten que un LLM conozca qué funciones puede invocar,
qué parámetros requiere y qué tipos de datos espera recibir.
"""

# ==============================================================================
# RETO 1: Creación de Esquema de Herramienta en Formato JSON Schema
# ==============================================================================
def crear_esquema_herramienta(nombre, descripcion, propiedades, campos_requeridos):
    """
    Construye la especificación estándar de una herramienta para LLMs.
    
    Argumentos:
        nombre (str): Nombre identificador de la función (ej: 'calcular_suma')
        descripcion (str): Explicación de lo que hace la herramienta.
        propiedades (dict): Diccionario con las propiedades y sus tipos.
                            Ej: {'a': {'type': 'number'}, 'b': {'type': 'number'}}
        campos_requeridos (list of str): Lista de nombres de parámetros obligatorios.
        
    Retorna:
        dict: Estructura de diccionario:
        {
            "name": nombre,
            "description": descripcion,
            "parameters": {
                "type": "object",
                "properties": propiedades,
                "required": campos_requeridos
            }
        }
    """
    # TODO: Construye y retorna el diccionario con la estructura descrita.
    pass


# ==============================================================================
# RETO 2: Validación de Argumentos contra el Esquema
# ==============================================================================
def validar_argumentos(argumentos_recibidos, esquema):
    """
    Verifica que los argumentos provistos por el LLM cumplan con el esquema:
    1. Que todos los campos en 'required' estén presentes en argumentos_recibidos.
    2. Que los tipos correspondan a las especificaciones básicas:
       - 'string' -> isinstance(val, str)
       - 'number' -> isinstance(val, (int, float))
       - 'boolean' -> isinstance(val, bool)
    
    Retorna:
        tuple: (es_valido: bool, mensaje_error: str o None)
    """
    # TODO:
    # 1. Extrae 'parameters' del esquema
    # 2. Revisa requeridos:
    #    Para cada campo en parameters.get('required', []):
    #        si campo not in argumentos_recibidos:
    #            retorna (False, f"Falta el parámetro requerido: {campo}")
    # 3. Revisa tipos en properties:
    #    Para cada campo, val in argumentos_recibidos.items():
    #        si campo in properties:
    #            tipo_esp = properties[campo].get('type')
    #            si tipo_esp == 'number' y not isinstance(val, (int, float)):
    #                retorna (False, f"El parámetro {campo} debe ser number")
    #            si tipo_esp == 'string' y not isinstance(val, str):
    #                retorna (False, f"El parámetro {campo} debe ser string")
    # 4. Si todo es correcto, retorna (True, None)
    pass


# ==============================================================================
# RETO 3: Registro y Despachador de Herramientas
# ==============================================================================
class ToolRegistry:
    """
    Registro centralizado de herramientas ejecutables y sus esquemas asociados.
    """
    def __init__(self):
        self._herramientas = {}  # nombre: (funcion, esquema)

    def registrar(self, nombre, funcion, esquema):
        """Asocia un nombre de herramienta a una función ejecutable y su esquema."""
        # TODO: Almacena la tupla (funcion, esquema) en self._herramientas[nombre]
        pass

    def obtener_esquemas(self):
        """Retorna una lista con todos los esquemas registrados."""
        # TODO: Retorna [esquema for func, esquema in self._herramientas.values()]
        pass

    def ejecutar(self, nombre, argumentos):
        """
        Valida los argumentos contra el esquema y ejecuta la función.
        Retorna el valor resultante de la función.
        Si la validación falla o la herramienta no existe, levanta un ValueError.
        """
        # TODO:
        # 1. Si nombre not in self._herramientas:
        #    raise ValueError(f"Herramienta '{nombre}' no encontrada.")
        # 2. func, esquema = self._herramientas[nombre]
        # 3. es_valido, err = validar_argumentos(argumentos, esquema)
        # 4. Si not es_valido:
        #    raise ValueError(f"Error de validación: {err}")
        # 5. Retorna func(**argumentos)
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
    esquema_suma = None
    try:
        props = {"a": {"type": "number"}, "b": {"type": "number"}}
        esquema_suma = crear_esquema_herramienta("sumar", "Suma dos números", props, ["a", "b"])
        validar("RETO 6.1 - Creación de Esquema JSON Schema",
                esquema_suma["name"] == "sumar" and esquema_suma["parameters"]["required"] == ["a", "b"],
                f"Esquema mal estructurado: {esquema_suma}")
    except Exception as e:
        validar("RETO 6.1 - Creación de Esquema JSON Schema", False, f"Error: {e}")

    # Test Reto 2
    try:
        ok1, _ = validar_argumentos({"a": 5, "b": 10}, esquema_suma)
        ok2, _ = validar_argumentos({"a": 5}, esquema_suma)
        ok3, _ = validar_argumentos({"a": "cinco", "b": 10}, esquema_suma)
        validar("RETO 6.2 - Validación de argumentos",
                ok1 is True and ok2 is False and ok3 is False,
                f"Fallo en validaciones: ok1={ok1}, ok2={ok2}, ok3={ok3}")
    except Exception as e:
        validar("RETO 6.2 - Validación de argumentos", False, f"Error: {e}")

    # Test Reto 3
    try:
        reg = ToolRegistry()
        reg.registrar("sumar", lambda a, b: a + b, esquema_suma)
        res_exec = reg.ejecutar("sumar", {"a": 20, "b": 22})
        validar("RETO 6.3 - Registro y Despacho de Herramientas",
                res_exec == 42 and len(reg.obtener_esquemas()) == 1,
                f"Esperado 42 y 1 esquema, obtenido resultado={res_exec}")
    except Exception as e:
        validar("RETO 6.3 - Registro y Despacho de Herramientas", False, f"Error: {e}")

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
