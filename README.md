# ⚡ Practice Hub - Desoxidación de Código & Práctica a Mano

Entorno interactivo y estructurado para reaprender y practicar programación a mano de forma progresiva. Actualmente enfocado en **JavaScript**, con una arquitectura escalable preparada para futuros lenguajes y temas.

---

## 🎯 Objetivo
- **Aprender haciendo**: Ejercicios prácticos con teoría concisa estilo W3Schools.
- **Doble modalidad**:
  1. **A mano en archivos**: Archivos `.js` comentados con retos `// TODO:` para resolver y ejecutar con Node.js (`node archivo.js`).
  2. **Interfaz Web Interactiva**: Una aplicación web local con barra lateral (sidebar) donde puedes visualizar los módulos, redactar o probar funciones interactivamente, ver salidas de consola en vivo y marcar el progreso completado.

---

## 📁 Estructura del Repositorio

```text
Practice/
├── index.html                  # Plataforma web interactiva local
├── styles.css                  # Estilos modernos y responsivos
├── app.js                      # Lógica de la app, runner de código y estado
├── README.md                   # Documentación para el usuario
├── AGENTS.md                   # Contexto, reglas e instrucciones para IA
│
└── JavaScript/
    ├── TEMARIO.md              # Temario general y roadmap progresivo
    ├── Modulo 1/               # Fundamentos y Sintaxis Básica
    │   ├── Modulo.md           # Teoría completa del módulo
    │   ├── 01_salidas_y_variables.js
    │   ├── 02_tipos_de_datos.js
    │   └── 03_operadores.js
    └── Modulo 2/               # Control de Flujo y Funciones (en progreso)
```

---

## 🚀 Cómo Usar la Plataforma Web Local

Simplemente abre el archivo [`index.html`](file:///d:/Proyectos/Practice/index.html) directamente en tu navegador favorito:
- Puedes hacer doble clic sobre `index.html` en el explorador de archivos, o
- Usar cualquier servidor local liviano si lo deseas (como Live Server o `npx serve .`).

### Características de la Interfaz:
- 📌 **Sidebar lateral**: Navegación por tecnología (actualmente **JavaScript**) y lista de módulos con indicador de progreso.
- 📋 **Panel Principal**: Cabecera con título del módulo, descripción y objetivo.
- 🎛️ **Botones de Ejecución Rápida**: Cada ejercicio tiene su tarjeta con botón interactivo "Ejecutar", editor/consola de código en vivo y botón para marcarlo como completado.
- 🖥️ **Consola Integrada**: Muestra las salidas `console.log()` en tiempo real sin necesidad de abrir las DevTools del navegador.
