# 📖 Módulo 10: Eventos del DOM y Manejo de Interacción

Los eventos son señales enviadas por el navegador que notifican que algo ocurrió (un click, una tecla presionada, el envío de un formulario o la carga de la página).

---

## 1. Registro de Eventos y Event Listeners
- `elemento.addEventListener("click", manejador, opciones)`
- `elemento.removeEventListener("click", manejador)`
- Opciones: `{ once: true }` (se ejecuta una sola vez).

---

## 2. El Objeto Event y Fases (Burbujeo y Captura)
- Propiedades:
  - `e.target`: El elemento exacto donde se originó el evento.
  - `e.currentTarget`: El elemento que tiene asignado el listener.
- Métodos:
  - `e.preventDefault()`: Detiene la acción por defecto del navegador (ej. no recargar al enviar formulario).
  - `e.stopPropagation()`: Detiene la propagación del evento hacia los elementos padres.
- **Delegación de Eventos**: Asignar un único listener al elemento padre para escuchar a todos sus hijos dinámicos.

---

## 3. Tipos de Eventos Principales
- **Mouse / Puntero**: `click`, `dblclick`, `mousemove`, `mouseenter`, `mouseleave`.
- **Teclado**: `keydown`, `keyup` (`e.key === "Enter"`).
- **Formularios**: `submit`, `input` (en tiempo real), `change` (al perder foco).
- **Documento**: `DOMContentLoaded` (se dispara cuando el HTML está listo).

---

## 🛠️ Ejercicios Prácticos del Módulo (1 a 1 por tema)

1. [01_event_listeners.js](./01_event_listeners.js):
   - **1.1** Suscripción y desuscripción de manejadores.
   - **1.2** Listeners de una sola ejecución (`once: true`).

2. [02_objeto_event_y_delegacion.js](./02_objeto_event_y_delegacion.js):
   - **2.1** Uso de `preventDefault()` y `stopPropagation()`.
   - **2.2** Patrón de delegación de eventos (`e.target.matches()`).

3. [03_eventos_teclado_y_formulario.js](./03_eventos_teclado_y_formulario.js):
   - **3.1** Detección de atajos de teclado (`keydown` con `e.key`).
   - **3.2** Validación de formularios en el evento `submit`.

---

### 💻 Para probar cada archivo en tu terminal:
```bash
node "JavaScript/Modulo 10 - Eventos del DOM y Manejo de Interaccion/01_event_listeners.js"
node "JavaScript/Modulo 10 - Eventos del DOM y Manejo de Interaccion/02_objeto_event_y_delegacion.js"
node "JavaScript/Modulo 10 - Eventos del DOM y Manejo de Interaccion/03_eventos_teclado_y_formulario.js"
```
