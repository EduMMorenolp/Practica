# Módulo 6: Tool Calling y Ciclo ReAct

## 📌 Introducción y Propósito
Por diseño, un Modelo de Lenguaje Autorregresivo es un sistema estático de predicción de tokens: no puede calcular operaciones aritméticas complejas con fiabilidad, no puede consultar bases de datos en tiempo real ni puede interactuar con APIs externas.

Para dotar al modelo de capacidades de acción sobre el entorno real se desarrollaron dos tecnologías complementarias:
1. **Tool Calling (Llamada a Herramientas)**: El modelo genera una estructura formal (comúnmente JSON o llamadas de función) con el nombre de la herramienta y los argumentos requeridos.
2. **El Paradigma ReAct (Reason + Act)**: Un ciclo interactivo donde el agente alterna entre **pensar** (*Thought*), **actuar** (*Action*) y **observar** (*Observation*) los resultados del entorno antes de emitir una respuesta final (*Final Answer*).

---

## 1. Definición de Herramientas mediante JSON Schema

Los proveedores modernos (OpenAI, Anthropic, Google Gemini, Ollama) utilizan esquemas estructurados para describir las funciones que el modelo tiene a su disposición.

```json
{
  "name": "consultar_clima",
  "description": "Obtiene la temperatura actual y condición meteorológica para una ciudad determinada.",
  "parameters": {
    "type": "object",
    "properties": {
      "ciudad": {
        "type": "string",
        "description": "Nombre de la ciudad, ej: Madrid, Buenos Aires"
      },
      "unidad": {
        "type": "string",
        "enum": ["celsius", "fahrenheit"],
        "description": "Unidad de temperatura"
      }
    },
    "required": ["ciudad"]
  }
}
```

El modelo aprende a generar un bloque estructurado cuando detecta que la consulta del usuario requiere una herramienta:
```json
{
  "tool_calls": [
    {
      "name": "consultar_clima",
      "arguments": {"ciudad": "Madrid", "unidad": "celsius"}
    }
  ]
}
```

---

## 2. El Ciclo ReAct (Reasoning and Acting)

Propuesto por Yao et al. (2022), ReAct supera las limitaciones de actuar "a ciegas" o de razonar sin interacción con el entorno:

```text
[Pregunta del Usuario]
       │
       ▼
 ┌─────────────┐
 │   THOUGHT   │ ──▶ "Necesito saber la cotización actual de AAPL para calcular la ganancia."
 └──────┬──────┘
        ▼
 ┌─────────────┐
 │   ACTION    │ ──▶ get_stock_price({"ticker": "AAPL"})
 └──────┬──────┘
        ▼
 ┌─────────────┐
 │ OBSERVATION │ ──▶ 225.50 USD
 └──────┬──────┘
        │
   ¿Es suficiente para responder?
      ├── NO ──▶ (Siguiente THOUGHT / ACTION)
      └── SÍ ──▶ FINAL ANSWER: "El precio actual de AAPL es 225.50 USD."
```

---

## 3. Despachador de Herramientas (*Tool Dispatcher*) en Python

Un despachador es un registro que mapea nombres de funciones a funciones ejecutables reales de forma segura:

```python
import json

class ToolDispatcher:
    def __init__(self):
        self.registro = {}

    def registrar(self, nombre, funcion):
        self.registro[nombre] = funcion

    def ejecutar(self, nombre_herramienta, argumentos):
        if nombre_herramienta not in self.registro:
            return f"Error: Herramienta '{nombre_herramienta}' no encontrada."
        
        try:
            funcion = self.registro[nombre_herramienta]
            resultado = funcion(**argumentos)
            return json.dumps(resultado, ensure_ascii=False)
        except Exception as e:
            return f"Error al ejecutar '{nombre_herramienta}': {str(e)}"
```

---

## 4. Implementación del Bucle ReAct en Python Puro

```python
import re

def ejecutar_bucle_react(pregunta, motor_llm, dispatcher, max_iteraciones=3):
    historial = f"Pregunta: {pregunta}\n"
    
    for iteracion in range(max_iteraciones):
        # 1. El LLM genera el siguiente paso
        salida_llm = motor_llm(historial)
        historial += salida_llm + "\n"
        
        # 2. Verificar si terminó
        if "Final Answer:" in salida_llm:
            respuesta_final = salida_llm.split("Final Answer:")[1].strip()
            return respuesta_final, historial
        
        # 3. Detectar Action: herramienta(args)
        match = re.search(r'Action:\s*(\w+)\((.*?)\)', salida_llm)
        if match:
            herramienta = match.group(1)
            raw_args = match.group(2)
            
            # Parsear argumentos simples clave=valor
            args = {}
            for par in raw_args.split(','):
                if '=' in par:
                    k, v = par.split('=', 1)
                    args[k.strip()] = v.strip().strip('"\'')
            
            # 4. Ejecutar herramienta y devolver observación
            obs = dispatcher.ejecutar(herramienta, args)
            historial += f"Observation: {obs}\n"
        else:
            break
            
    return "Error: No se alcanzó una respuesta final en el límite de iteraciones.", historial
```

---

## 5. Resumen
1. **Esquema formal**: Documenta herramientas con nombres, descripciones y tipos de parámetros.
2. **ReAct**: Bucle interactivo `Thought` $\to$ `Action` $\to$ `Observation` $\to$ `Final Answer`.
3. **Dispatcher**: Aísla y ejecuta código seguro inyectando las observaciones en el historial del LLM.
