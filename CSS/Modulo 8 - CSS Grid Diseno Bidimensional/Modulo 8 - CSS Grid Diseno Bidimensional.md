# Módulo 8: CSS Grid (Diseño Bidimensional)

Mientras que Flexbox está optimizado para flujos en un solo eje, **CSS Grid Layout** es el primer sistema de diseño creado para trabajar con **filas y columnas simultáneamente** (bidimensional).

---

## 1. El Contenedor Grid: `display: grid`

Al declarar `display: grid`, el elemento se convierte en un contenedor de cuadrícula que divide su espacio en filas y columnas mediante la definición de **pistas (tracks)**.

### Propiedades Fundamentales:
- `grid-template-columns`: Define el número y ancho de las columnas.
- `grid-template-rows`: Define el número y alto de las filas.
- `gap`: Espaciado limpio entre celdas (filas y columnas).

---

## 2. La Unidad Fracción: `fr` y Funciones Clave

- **Unidad `fr` (*fractional unit*):** Representa una fracción del espacio libre disponible en el contenedor.
- **Función `repeat(N, pista)`:** Evita repetir valores idénticos (ej. `repeat(3, 1fr)` crea 3 columnas iguales).
- **Función `minmax(min, max)`:** Define un rango de tamaño flexible.
- **Patrón Responsivo sin Media Queries:**
  ```css
  /* Crea tantas columnas como quepan de al menos 250px cada una */
  .grid-auto {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
  }
  ```

---

## 3. Posicionamiento de Elementos: `grid-column` y `grid-row`

Los elementos hijos pueden extenderse a lo largo de varias líneas de la cuadrícula:
- `grid-column: 1 / 3;`: Inicia en la línea vertical 1 y termina en la línea 3 (abarca 2 columnas).
- `grid-column: span 2;`: Abarca 2 columnas a partir de su posición actual.
- `grid-row: span 2;`: Abarca 2 filas hacia abajo.

```css
/* Tarjeta destacada que ocupa 2 columnas */
.tarjeta-destacada {
  grid-column: span 2;
}
```

---

## 4. Áreas con Nombre: `grid-template-areas`

Permite "dibujar" el mapa mental del layout directamente con palabras en CSS:

```css
.layout-app {
  display: grid;
  grid-template-columns: 240px 1fr;
  grid-template-rows: 60px 1fr 50px;
  grid-template-areas:
    "header  header"
    "sidebar main"
    "footer  footer";
  min-height: 100vh;
}

header  { grid-area: header; }
aside   { grid-area: sidebar; }
main    { grid-area: main; }
footer  { grid-area: footer; }
```
