# 📖 Módulo 8: El Objeto Global del Navegador (BOM - Browser Object Model)

El BOM proporciona objetos que representan componentes del navegador fuera del documento HTML: la ventana actual (`window`), la pantalla (`screen`), la ubicación actual (`location`), el historial (`history`) y los datos del navegador (`navigator`).

---

## 1. El Objeto Window
Objeto global en el navegador:
- Dimensiones del viewport: `window.innerWidth`, `window.innerHeight`.
- Desplazamiento: `window.scrollX`, `window.scrollY`, `window.scrollTo({ top: 0, behavior: 'smooth' })`.
- Diálogos: `alert()`, `confirm()`, `prompt()`.

---

## 2. Location y History
- **`location`**: Información sobre la URL actual:
  - `location.href`, `location.pathname`, `location.search` (parámetros `?id=12`), `location.hash` (`#seccion`).
  - `location.reload()`, `location.assign(url)`.
- **`history`**: Control del historial de navegación:
  - `history.back()`, `history.forward()`, `history.pushState(estado, titulo, url)`.

---

## 3. Navigator y Screen
- **`navigator`**: Información del entorno y dispositivo:
  - `navigator.userAgent`, `navigator.language`, `navigator.onLine`.
- **`screen`**: Medidas de la pantalla física: `screen.width`, `screen.height`.

---

## 🛠️ Ejercicios Prácticos del Módulo (1 a 1 por tema)

1. [01_objeto_window.js](./01_objeto_window.js):
   - **1.1** Simulación de lectura de dimensiones y viewport.
   - **1.2** Métodos globales y objeto `globalThis` compatible con Node.js y navegador.

2. [02_location_y_history.js](./02_location_y_history.js):
   - **2.1** Análisis y descomposición de una URL usando la clase nativa `URL`.
   - **2.2** Manipulación de parámetros de búsqueda (`URLSearchParams`).

3. [03_navigator_y_screen.js](./03_navigator_y_screen.js):
   - **3.1** Detección del idioma y estado de conexión.

---

### 💻 Para probar cada archivo en tu terminal:
```bash
node "JavaScript/Modulo 8 - BOM Browser Object Model/01_objeto_window.js"
node "JavaScript/Modulo 8 - BOM Browser Object Model/02_location_y_history.js"
node "JavaScript/Modulo 8 - BOM Browser Object Model/03_navigator_y_screen.js"
```
