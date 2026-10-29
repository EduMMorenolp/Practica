# Módulo 7: Arquitectura y Desarrollo Sistemático de Agentes de IA

---

## 🧭 Visión General: ¿Qué es realmente un Agente de IA?

Un modelo de lenguaje tradicional es pasivo: espera que el usuario le haga una pregunta y responde con texto. Un **Agente de IA**, por el contrario, es un sistema autónomo:
* Tiene un **objetivo** asignado (ej. *"Auditar los registros de facturación de este mes y generar un reporte de discrepancias"*).
* Puede **observar el entorno** (leer archivos, consultar bases de datos, navegar por la web).
* Puede **tomar decisiones** y ejecutar acciones consecutivas mediante herramientas.
* Puede **evaluar el resultado** de sus propias acciones y corregir el rumbo si algo falla.

Sin embargo, entre 2023 y 2024, la industria descubrió una lección dolorosa:
> **Conectar 20 agentes especialistas entre sí (sistemas multi-agente complejos) suele ser una trampa frágil en producción.**

Si el Agente A comete un error del 5%, el Agente B amplifica ese error, y para cuando el mensaje llega al Agente E, todo el sistema ha colapsado.

El nuevo paradigma de la ingeniería de IA (utilizado por organizaciones de vanguardia) se conoce como **Delegación de IA (AI Delegation)**: en lugar de enredarse con múltiples agentes diminutos que se pasan notas confusas, se utiliza **un único agente de frontera de alto razonamiento** guiado sistemáticamente por un directorio estructurado de archivos locales denominado **Playbook**.

---

## 1. La Arquitectura en 3 Capas del Playbook

Un **Playbook** es una estructura de carpetas física y modular en el repositorio del proyecto que separa de forma estricta las tres dimensiones de cualquier tarea:

```text
mi_playbook_agente/
│
├── PROCESS.md           # 1. CAPA DE PROCESO (Reglas de negocio y flujo paso a paso)
│
├── toolbox/             # 2. CAPA DE HERRAMIENTAS (Scripts mecánicos, plantillas y activos)
│   ├── templates/
│   │   └── formato_entrega.json
│   └── scripts/
│       └── normalizar_fechas.py
│
└── proof/               # 3. CAPA DE PRUEBA (Validación objetiva independiente)
    └── CHECKS.md
```

---

### 1.1 Capa 1: El Proceso (`PROCESS.md` o `SKILL.md`)
* **¿Qué es?** Es la biblia operativa del agente, redactada en Markdown claro y sin ambigüedades.
* **¿Qué contiene?**
  * El objetivo principal y las restricciones no negociables.
  * El orden secuencial de pasos a seguir.
  * Guías para la toma de decisiones: *"Si la discrepancia es menor a $10, regístrala como redondeo; si es mayor, marca alerta roja"*.
* **¿Por qué existe?** Los agentes fallan cuando asumen o adivinan. Si las reglas están explicitadas en el archivo de proceso, el comportamiento es reproducible y consistente.

---

### 1.2 Capa 2: La Caja de Herramientas (`toolbox/`)
* **¿Qué es?** Un conjunto de recursos deterministas: plantillas predefinidas (*templates*), scripts de automatización mecánica y ejemplos de referencia (*gold standard*).
* **¿Por qué existe?**
  * Los modelos de lenguaje consumen tiempo y dinero (tokens) y a veces cometen errores en operaciones aritméticas triviales, formateo de fechas o generación de estructuras JSON complejas.
  * Si una tarea se puede resolver con un script de Python de 5 líneas o con una plantilla fija, **no le pidas al modelo que la imagine**: ponla en su `toolbox/` para que la use directamente.

---

### 1.3 Capa 3: La Prueba (`proof/` o `CHECKS.md`)
* **¿Qué es?** La lista de verificación de evidencia objetiva y los scripts de prueba (*evals*).
* **La Regla de Oro:** **El agente jamás debe validar su propio trabajo preguntándose a sí mismo en el chat.**
  * Si un agente alucinó un dato o calculó mal un valor, al preguntarle *"¿Está todo correcto?"*, el mismo sesgo que cometió el error responderá alegremente: *"¡Sí, todo está impecable!"*.
  * La validación debe provenir de un evaluador determinista externo (un validador de esquema JSON, un script de aserciones o una lista de comprobación de hechos externos).

---

## 2. El Protocolo "Delegation Loop": Mejora Continua a Nivel de Repositorio

¿Qué hace la mayoría de los usuarios cuando un agente de IA comete un error?
> Van al chat y le dicen: *"No, hiciste mal el paso 3, hazlo de nuevo con este formato"*.
> **¡Este es el mayor error en el trabajo con agentes!**

Si corriges al agente únicamente en la ventana de chat:
1. El chat se llena de contexto ruidoso y desordenado.
2. Mañana, cuando comiences una nueva conversación o se reinicie la sesión, **el agente volverá a cometer exactamente el mismo error**, porque sus archivos de proceso no cambiaron.

El **Delegation Loop** establece que toda corrección debe diagnosticarse y persistirse en el archivo correspondiente del Playbook:

```text
                                 [ El Agente Falla ]
                                          │
                                          ▼
                         ¿En qué capa se originó el error?
                                          │
         ┌────────────────────────────────┼────────────────────────────────┐
         ▼                                ▼                                ▼
  [ Error de Lógica ]             [ Error Mecánico ]              [ Error no Detectado ]
Faltó una regla de negocio.    Falló un cálculo o formato.       La prueba dio falso positivo.
         │                                │                                │
         ▼                                ▼                                ▼
 Editar 'PROCESS.md'          Crear script en 'toolbox/'          Añadir aserción en 'proof/'
         │                                │                                │
         └────────────────────────────────┴────────────────────────────────┘
                                          │
                                          ▼
                      [ Reejecutar el Agente desde Cero ]
                   (Ahora el sistema es permanentemente inmune a ese fallo)
```

---

## 3. Implementación del Playbook y su Diagnóstico en Python

A continuación, implementamos una suite en Python que crea la estructura del Playbook, verifica entregables contra esquemas estrictos y diagnostica la capa de falla:

```python
import os
import json

class PlaybookManager:
    """Administra la creación y diagnóstico de playbooks de agentes."""
    
    @staticmethod
    def inicializar_playbook(ruta_base, nombre_tarea, proceso_md, plantilla_json):
        """Crea físicamente la estructura de 3 capas en el disco."""
        directorio_playbook = os.path.join(ruta_base, nombre_tarea)
        dir_toolbox = os.path.join(directorio_playbook, "toolbox", "templates")
        dir_proof = os.path.join(directorio_playbook, "proof")
        
        # 1. Crear carpetas
        os.makedirs(dir_toolbox, exist_ok=True)
        os.makedirs(dir_proof, exist_ok=True)
        
        # 2. Capa 1: PROCESS.md
        with open(os.path.join(directorio_playbook, "PROCESS.md"), "w", encoding="utf-8") as f:
            f.write(proceso_md)
            
        # 3. Capa 2: Plantilla en toolbox/
        with open(os.path.join(dir_toolbox, "plantilla.json"), "w", encoding="utf-8") as f:
            f.write(json.dumps(plantilla_json, indent=2, ensure_ascii=False))
            
        # 4. Capa 3: CHECKS.md en proof/
        checks_content = (
            "# Lista de Comprobación Objetiva (Proof Layer)\n"
            "- [ ] Todos los campos requeridos existen y tienen tipo correcto\n"
            "- [ ] El valor final concuerda con las fuentes externas\n"
        )
        with open(os.path.join(dir_proof, "CHECKS.md"), "w", encoding="utf-8") as f:
            f.write(checks_content)
            
        return directorio_playbook

    @staticmethod
    def verificar_entregable_contra_esquema(datos_entregables, esquema_requerido):
        """
        Capa 3 (Proof): Valida objetivamente la salida del agente.
        esquema_requerido = {"id": int, "titulo": str, "aprobado": bool}
        """
        for campo, tipo_esperado in esquema_requerido.items():
            if campo not in datos_entregables:
                return False, f"Fallo en Proof: Falta el campo requerido '{campo}'"
            if not isinstance(datos_entregables[campo], tipo_esperado):
                tipo_real = type(datos_entregables[campo]).__name__
                return False, f"Fallo en Proof: El campo '{campo}' debe ser {tipo_esperado.__name__}, se recibió {tipo_real}"
        return True, "Validación superada exitosamente"

    @staticmethod
    def diagnosticar_capa_delegation_loop(tipo_error):
        """
        Mapea el tipo de falla detectada a la capa del Playbook que debe corregirse.
        """
        errores_proceso = ("paso_omitido", "regla_no_respetada", "decision_erronea")
        errores_toolbox = ("formato_invalido", "calculo_aritmetico_erroneo", "plantilla_rota")
        errores_proof = ("falso_positivo", "verificacion_insuficiente")
        
        if tipo_error in errores_proceso:
            return "Capa 1: Editar PROCESS.md para clarificar la regla u orden de pasos."
        elif tipo_error in errores_toolbox:
            return "Capa 2: Añadir o corregir un script/plantilla en toolbox/."
        elif tipo_error in errores_proof:
            return "Capa 3: Endurecer las aserciones de prueba en proof/CHECKS.md."
        else:
            return "Diagnóstico no determinado: revisar traza de ejecución del agente."
```

---

## 💡 Resumen Mental

1. **Un solo agente general guiado por un Playbook** es mucho más robusto que 20 agentes especialistas encadenados.
2. **Las 3 capas**:
   - `PROCESS.md`: Reglas y decisiones (Cerebro estratégico).
   - `toolbox/`: Plantillas y scripts deterministas (Mano ejecutora).
   - `proof/`: Evals y verificaciones objetivas externas (Juez imparcial).
3. **Delegation Loop**: Si el agente falla, **nunca lo corrijas solo en el chat**. Modifica el archivo correspondiente en el Playbook para que la mejora quede registrada para siempre.
