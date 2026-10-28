# 📖 Módulo 12: Gráficos con HTML5 Canvas API

La API Canvas permite renderizar gráficos 2D interactivos dinámicamente: formas geométricas, trazados complejos, gradientes, animaciones y videojuegos.

---

## 1. El Elemento Canvas y su Contexto 2D
```javascript
const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");
```

---

## 2. Formas Básicas y Trazos (Paths)
- Rectángulos directos:
  - `ctx.fillRect(x, y, ancho, alto)`: Rectángulo relleno.
  - `ctx.strokeRect(x, y, ancho, alto)`: Borde de rectángulo.
  - `ctx.clearRect(x, y, ancho, alto)`: Borra píxeles en el área.
- Rutas personalizadas:
  - `ctx.beginPath()`: Comienza un nuevo trazo.
  - `ctx.moveTo(x, y)`: Mueve el lápiz sin dibujar.
  - `ctx.lineTo(x, y)`: Traza una línea recta.
  - `ctx.arc(x, y, radio, startAngle, endAngle)`: Dibuja un arco o círculo (`0` a `Math.PI * 2`).
  - `ctx.stroke()` / `ctx.fill()`: Renderiza el borde o relleno.

---

## 3. Estilos y Gradientes
- `ctx.fillStyle = "#3b82f6"`
- `ctx.strokeStyle = "#f59e0b"`
- `ctx.lineWidth = 4`
- Gradientes: `const grad = ctx.createLinearGradient(x0, y0, x1, y1); grad.addColorStop(0, "red");`

---

## 🛠️ Ejercicios Prácticos del Módulo (1 a 1 por tema)

1. [01_contexto_y_rectangulos.js](./01_contexto_y_rectangulos.js):
   - **1.1** Modelo de coordenadas `(x, y, w, h)` y dibujo de rectángulos.
   - **1.2** Limpieza de pantalla para bucles de animación.

2. [02_paths_y_arcos.js](./02_paths_y_arcos.js):
   - **2.1** Trazado de líneas y triángulos con `beginPath()`, `moveTo()`, `lineTo()`.
   - **2.2** Cálculo angular en radianes para círculos con `arc()`.

3. [03_estilos_y_gradientes.js](./03_estilos_y_gradientes.js):
   - **3.1** Asignación de colores y anchos de línea.
   - **3.2** Creación de gradientes lineales.

---

### 💻 Para probar cada archivo en tu terminal:
```bash
node "JavaScript/Modulo 12 - Graficos con HTML5 Canvas API/01_contexto_y_rectangulos.js"
node "JavaScript/Modulo 12 - Graficos con HTML5 Canvas API/02_paths_y_arcos.js"
node "JavaScript/Modulo 12 - Graficos con HTML5 Canvas API/03_estilos_y_gradientes.js"
```
