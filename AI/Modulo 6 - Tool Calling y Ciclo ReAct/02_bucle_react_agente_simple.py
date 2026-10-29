"""
EJERCICIO: Motor de Bucle ReAct (Reasoning + Acting)
Módulo 6: Tool Calling y Ciclo ReAct

El ciclo ReAct permite que un agente piense qué acción tomar, invoque
una herramienta, reciba la observación del entorno y decida el siguiente paso.
"""

import re

# ==============================================================================
# RETO 1: Parseo de la Acción ReAct
# ==============================================================================
def parsear_accion_react(texto):
    """
    Busca en el texto de salida del LLM una instrucción con el formato:
        Action: nombre_herramienta(clave1=valor1, clave2=valor2)
    
    Argumentos:
        texto (str): Salida del modelo.
        
    Retorna:
        tuple: (nombre_herramienta: str, argumentos: dict) o (None, None) si no hay acción.
        
    Ejemplo:
        parsear_accion_react("Thought: Calculo la suma.\\nAction: sumar(a=15, b=25)")
        -> ('sumar', {'a': 15, 'b': 25}) (convirtiendo valores numéricos si es posible)
    """
    # TODO:
    # 1. Utiliza regex: r'Action:\s*(\w+)\((.*?)\)'
    # 2. Si no coincide, retorna (None, None)
    # 3. Extrae el nombre de la herramienta y la cadena de argumentos.
    # 4. Si la cadena está vacía, argumentos = {}
    # 5. Si no, divide por ',' y luego por '='.
    #    Limpia comillas y espacios.
    #    Si el valor es un dígito entero, conviértelo a int; si tiene punto decimal, a float.
    # 6. Retorna (nombre_herramienta, dict_argumentos)
    pass


# ==============================================================================
# RETO 2: Detección y Extracción de Respuesta Final
# ==============================================================================
def extraer_respuesta_final(texto):
    """
    Detecta si el texto emitido por el agente concluye la tarea con:
        Final Answer: <respuesta>
        
    Retorna:
        str o None: El texto de la respuesta final si existe, o None si aún debe actuar.
    """
    # TODO:
    # Si "Final Answer:" está en texto:
    #     retorna el texto que sigue a "Final Answer:", sin espacios al inicio ni al final.
    # Sino:
    #     retorna None
    pass


# ==============================================================================
# RETO 3: Formateo de Observación
# ==============================================================================
def formatear_observacion(resultado):
    """
    Toma el resultado retornado por la ejecución de la herramienta y
    lo formatea como una línea estándar de observación para el historial del LLM:
        Observation: <resultado>\n
    """
    # TODO: Retorna f"Observation: {resultado}\n"
    pass


# ==============================================================================
# RETO 4: Orquestador del Bucle ReAct
# ==============================================================================
def ejecutar_ciclo_react(pregunta, mock_llm_fn, registro_herramientas, max_iteraciones=4):
    """
    Ejecuta el bucle ReAct:
    1. Inicia el historial con f"Pregunta: {pregunta}\n"
    2. En cada iteración:
       a. Llama a mock_llm_fn(historial) para obtener el pensamiento y acción.
       b. Acumula la salida en el historial.
       c. Si hay respuesta final (extraer_respuesta_final), la retorna junto con el historial.
       d. Si hay acción (parsear_accion_react):
          - Ejecuta la herramienta mediante registro_herramientas[nombre](**argumentos).
          - Genera la observación con formatear_observacion(resultado).
          - Añade la observación al historial.
    3. Si supera max_iteraciones sin respuesta final, retorna ("Límite de pasos alcanzado", historial).
    
    Retorna:
        tuple: (respuesta_final: str, historial_completo: str)
    """
    # TODO: Implementa el bucle respetando las etapas especificadas.
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
        t1 = "Thought: Necesito consultar el stock.\nAction: consultar_stock(item='laptops', cantidad=5)"
        h, args = parsear_accion_react(t1)
        validar("RETO 6.1 - Parseo de acción ReAct",
                h == "consultar_stock" and args.get("item") == "laptops" and args.get("cantidad") == 5,
                f"Fallo en parseo: herramienta={h}, args={args}")
    except Exception as e:
        validar("RETO 6.1 - Parseo de acción ReAct", False, f"Error: {e}")

    # Test Reto 2
    try:
        resp = extraer_respuesta_final("Thought: Ya tengo el dato.\nFinal Answer: Tenemos 25 unidades disponibles.")
        validar("RETO 6.2 - Extracción de respuesta final",
                resp == "Tenemos 25 unidades disponibles.",
                f"Esperado 'Tenemos 25 unidades disponibles.', obtenido: {resp}")
    except Exception as e:
        validar("RETO 6.2 - Extracción de respuesta final", False, f"Error: {e}")

    # Test Reto 3
    try:
        obs = formatear_observacion(100)
        validar("RETO 6.3 - Formateo de observación",
                obs == "Observation: 100\n",
                f"Esperado 'Observation: 100\\n', obtenido: {obs}")
    except Exception as e:
        validar("RETO 6.3 - Formateo de observación", False, f"Error: {e}")

    # Test Reto 4
    try:
        # Simulador de LLM que ejecuta 1 paso de acción y luego responde
        def mock_llm(historial):
            if "Observation:" not in historial:
                return "Thought: Debo multiplicar 6 por 7.\nAction: multiplicar(a=6, b=7)"
            else:
                return "Thought: El resultado es 42.\nFinal Answer: La multiplicación da 42."

        herramientas = {"multiplicar": lambda a, b: a * b}
        ans, hist = ejecutar_ciclo_react("¿Cuánto es 6 * 7?", mock_llm, herramientas)
        validar("RETO 6.4 - Orquestador del Bucle ReAct",
                ans == "La multiplicación da 42." and "Observation: 42" in hist,
                f"Fallo en ciclo ReAct: respuesta={ans}, historial={hist}")
    except Exception as e:
        validar("RETO 6.4 - Orquestador del Bucle ReAct", False, f"Error: {e}")

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
