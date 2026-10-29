# Módulo 4: Delegación de IA y Estructura de Playbooks

Durante la primera ola del desarrollo de agentes de IA, la industria experimentó con complejas **redes multiagente** (donde un "Agente Diseñador" conversaba con un "Agente Programador" y este con un "Agente Tester"). La experiencia empírica demostró que estos sistemas sufren de **alta fragilidad, acumulación exponencial de errores y alucinaciones en cascada**.

El estado del arte actual adopta el paradigma de **Delegación de IA (AI Delegation)**: un **único agente de propósito general de alto razonamiento**, guiado por un directorio estructurado y estandarizado de archivos denominado **Playbook**.

---

## 1. La Arquitectura en 3 Capas del Playbook

Un playbook organiza el conocimiento operativo en tres capas desacopladas y deterministas:

```
mi_tarea_playbook/
├── PROCESS.md           # 1. CAPA DE PROCESO (Reglas de negocio y secuencias)
│
├── toolbox/             # 2. CAPA DE HERRAMIENTAS (Scripts, templates, gold standards)
│   ├── templates/
│   └── scripts/
│
└── proof/               # 3. CAPA DE PRUEBA (Validación objetiva fuera del modelo)
    └── CHECKS.md
```

### Capa 1: Proceso (`PROCESS.md` / `SKILL.md`)
- Escrita en lenguaje natural claro y conciso.
- Define el objetivo, las precondiciones, el paso a paso secuencial inquebrantable y los criterios de desvío.
- **Regla de oro:** No asume sentido común; toda ambigüedad debe estar resuelta explícitamente en el documento.

### Capa 2: Caja de Herramientas (`toolbox/`)
- **Scripts mecánicos deterministas:** Pequeños scripts (Python / Bash / Node.js) que ejecutan tareas repetitivas sin gastar tokens de razonamiento ni cometer errores humanos (ej. formatear un JSON, validar un esquema SQL, comprimir una imagen).
- **Plantillas (*Templates*):** Formatos rígidos de salida esperada.
- **Ejemplos *Gold Standard*:** Muestras de calidad excepcional de cómo debe lucir exactamente el entregable final.

### Capa 3: Prueba (`proof/` / `CHECKS.md`)
- El agente **no puede autoevaluarse confiando en su propia intuición** (ya que el mismo sesgo que generó el error afirmará falsamente que el resultado es correcto).
- Contiene pruebas objetivas externas: assertions, comandos de linter, compiladores, parsers o checklists estrictas con evidencia verificable.

---

## 2. El Bucle de Delegación (The Delegation Loop)

El principio fundamental que diferencia a un operador amateur de un ingeniero de IA profesional es cómo se corrigen los errores:

$$\text{Error detectado} \;\longrightarrow\; \text{Identificar capa que falló} \;\longrightarrow\; \text{Modificar archivo del Playbook} \;\longrightarrow\; \text{Reejecutar}$$

> [!CAUTION]
> **Jamás corrijas al agente en la ventana de chat.**
> Cada corrección manual hecha en el chat se desvanece al cerrar la sesión y condena a repetir el mismo error la próxima semana.

1. **Si el agente omitió un paso:** El fallo está en la **Capa 1 (Proceso)**. Modifica `PROCESS.md` agregando una restricción explícita.
2. **Si el agente calculó mal un formato o dato repetitivo:** El fallo está en la **Capa 2 (Toolbox)**. Crea un script en `toolbox/` para que el agente simplemente lo invoque con herramientas.
3. **Si el entregable defectuoso pasó desapercibido:** El fallo está en la **Capa 3 (Prueba)**. Agrega una nueva prueba a `CHECKS.md`.

Al iterar sobre los archivos, el Playbook se convierte en un activo de software permanente y mejorado continuamente.
