# 📖 Módulo 13: Interfaces de Línea de Comandos (Readline & REPL)

El módulo `readline` permite interactuar con el usuario a través de la terminal leyendo línea por línea desde `process.stdin` y escribiendo en `process.stdout`.

---

## 1. El Objeto Interface
```javascript
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
```

---

## 2. Preguntas y Eventos
- `rl.question(pregunta, respuesta => { ... })`
- Eventos: `rl.on('line', linea => ...)`, `rl.on('close', () => ...)`.
- Cierre: `rl.close()`.

---

## 🛠️ Ejercicios Prácticos del Módulo (1 a 1 por tema)

1. [01_readline_preguntas.js](./01_readline_preguntas.js):
   - **1.1** Realizar una pregunta por consola y procesar la respuesta.
