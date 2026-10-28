# 📖 Módulo 11: Asincronismo, Timers y Fetch API

JavaScript es monohilo (*single-threaded*), pero gestiona operaciones no bloqueantes (peticiones de red, lectura de archivos, temporizadores) a través del **Event Loop**.

---

## 1. Timers y el Event Loop
- Call Stack -> Web APIs -> Task Queue -> Event Loop.
- Temporizadores:
  - `const id = setTimeout(callback, ms)` / `clearTimeout(id)`
  - `const id = setInterval(callback, ms)` / `clearInterval(id)`

---

## 2. Promesas (Promise Interface)
Representa un valor que puede estar disponible ahora, en el futuro o nunca:
- Estados: *pending* (pendiente), *fulfilled* (resuelta), *rejected* (rechazada).
- Consumo: `.then(res => ...)`, `.catch(err => ...)`, `.finally(() => ...)`.
- Métodos estáticos:
  - `Promise.all([p1, p2])`: Resuelve cuando todas terminan, rechaza si una falla.
  - `Promise.allSettled([p1, p2])`: Espera a todas sin importar si fallan.
  - `Promise.race([p1, p2])`: Retorna la primera en terminar.

---

## 3. Async / Await y Control de Errores
Sintaxis limpia que permite escribir código asíncrono como si fuera síncrono:
```javascript
async function obtenerDatos() {
  try {
    const res = await fetch("https://api.ejemplo.com/usuarios");
    if (!res.ok) throw new Error("Error HTTP " + res.status);
    const datos = await res.json();
    return datos;
  } catch (error) {
    console.error("Fallo:", error.message);
  }
}
```

---

## 🛠️ Ejercicios Prácticos del Módulo (1 a 1 por tema)

1. [01_timers_y_event_loop.js](./01_timers_y_event_loop.js):
   - **1.1** `setTimeout` y orden de ejecución en el Event Loop.
   - **1.2** Contador con `setInterval` e interrupción con `clearInterval`.

2. [02_promesas.js](./02_promesas.js):
   - **2.1** Creación de una promesa (`new Promise`).
   - **2.2** Encadenamiento `.then()` y captura de errores con `.catch()`.
   - **2.3** Concurrencia con `Promise.all()`.

3. [03_async_await_y_fetch.js](./03_async_await_y_fetch.js):
   - **3.1** Función `async` y consumo secuencial con `await`.
   - **3.2** Manejo robusto con bloque `try / catch / finally`.
   - **3.3** Simulación de llamada API HTTP GET con JSON.

---

### 💻 Para probar cada archivo en tu terminal:
```bash
node "JavaScript/Modulo 11 - Asincronismo Timers y Fetch API/01_timers_y_event_loop.js"
node "JavaScript/Modulo 11 - Asincronismo Timers y Fetch API/02_promesas.js"
node "JavaScript/Modulo 11 - Asincronismo Timers y Fetch API/03_async_await_y_fetch.js"
```
