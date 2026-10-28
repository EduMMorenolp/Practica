# 📖 Módulo 1: Objetos Globales y Entorno (Global, Process & Console)

A diferencia del navegador donde el objeto raíz es `window`, en Node.js el entorno de ejecución provee variables y objetos nativos integrados directamente en el ámbito global.

---

## 1. Variables Globales y Contexto
- `global`: El objeto raíz del entorno Node.js. Cualquier propiedad agregada aquí es accesible en toda la aplicación.
- `globalThis`: Estándar universal de ECMAScript para acceder al objeto global tanto en navegador como en Node.
- Variables de módulo disponibles automáticamente:
  - `__dirname`: Ruta absoluta al directorio del archivo actual.
  - `__filename`: Ruta absoluta incluyendo el nombre del archivo actual.

---

## 2. El Objeto Process
Proporciona información y control sobre el proceso de ejecución actual de Node.js:
- `process.argv`: Array con los argumentos pasados por terminal al ejecutar (`node script.js arg1 arg2`).
- `process.env`: Objeto con las variables de entorno del sistema operativo (`process.env.PORT`, `process.env.NODE_ENV`).
- `process.exit(codigo)`: Finaliza el proceso (`0` para salida limpia, `1` para error).
- `process.memoryUsage()`: Métricas de uso de memoria heap y rss en bytes.
- `process.uptime()`: Tiempo en segundos que lleva corriendo el proceso.
- `process.nextTick(callback)`: Coloca un callback al inicio de la cola de microtareas, ejecutándose antes que cualquier timer.

---

## 3. Console Especializada de Node.js
Además de `console.log()`:
- `console.time(etiqueta)` / `console.timeEnd(etiqueta)`: Mide el tiempo exacto de ejecución en milisegundos.
- `console.dir(obj, { depth: null, colors: true })`: Inspección profunda y con resaltado de sintaxis.
- `console.trace(mensaje)`: Imprime el rastreo completo de la pila de llamadas (*stack trace*).
- `console.assert(condicion, mensaje)`: Emite error solo si la condición es falsa.

---

## 🛠️ Ejercicios Prácticos del Módulo (1 a 1 por tema)

1. [01_globales_basicos.js](./01_globales_basicos.js):
   - **1.1** Inspección de `__dirname` y `__filename`.
   - **1.2** Comprobación del alcance con `global` y `globalThis`.

2. [02_objeto_process.js](./02_objeto_process.js):
   - **2.1** Lectura y filtrado de argumentos en `process.argv`.
   - **2.2** Lectura y asignación de variables en `process.env`.
   - **2.3** Monitoreo de memoria con `process.memoryUsage()` y tiempo con `process.uptime()`.

3. [03_console_avanzada.js](./03_console_avanzada.js):
   - **3.1** Benchmarking de bucles con `console.time()` y `console.timeEnd()`.
   - **3.2** Inspección profunda de objetos complejos con `console.dir()`.

---

### 💻 Para probar cada archivo en tu terminal:
```bash
node "NodeJS/Modulo 1 - Globales y Entorno/01_globales_basicos.js"
node "NodeJS/Modulo 1 - Globales y Entorno/02_objeto_process.js"
node "NodeJS/Modulo 1 - Globales y Entorno/03_console_avanzada.js"
```
