# Módulo 7: Flexbox (Diseño Unidimensional)

**CSS Flexible Box Layout (Flexbox)** es el modelo de diseño diseñado para distribuir espacio y alinear elementos a lo largo de un **único eje** (en fila horizontal o en columna vertical).

---

## 1. El Contenedor Flex: `display: flex`

Al declarar `display: flex` en un elemento padre, todos sus hijos directos se transforman en **flex items**, alineándose por defecto en una fila horizontal de izquierda a derecha.

### Los Dos Ejes Fundamentales:
- **Eje Principal (Main Axis):** Determinado por `flex-direction` (`row` horizontal por defecto, o `column` vertical).
- **Eje Secundario (Cross Axis):** Perpendicular al eje principal.

---

## 2. Propiedades del Contenedor Padre

| Propiedad | Función | Valores Comunes |
| :--- | :--- | :--- |
| `flex-direction` | Dirección del eje principal | `row`, `row-reverse`, `column`, `column-reverse` |
| `flex-wrap` | Permite que los hijos pasen a otra línea | `nowrap` (por defecto), `wrap`, `wrap-reverse` |
| `justify-content` | Alineación sobre el **eje principal** | `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly` |
| `align-items` | Alineación sobre el **eje secundario** | `stretch` (por defecto), `center`, `flex-start`, `flex-end`, `baseline` |
| `gap` | Espacio uniforme entre hijos (sin recurrir a márgenes) | `10px`, `1rem`, `16px 24px` (fila/columna) |

### Centrado Perfecto en 2 Líneas:
```css
.centrado-absoluto {
  display: flex;
  justify-content: center; /* Centrado en eje horizontal */
  align-items: center;     /* Centrado en eje vertical */
}
```

---

## 3. Propiedades de los Elementos Hijos (Flex Items)

- `flex-grow`: Factor de crecimiento relativo si sobra espacio en el contenedor (`0` por defecto, `1` para crecer).
- `flex-shrink`: Factor de contracción si falta espacio (`1` por defecto).
- `flex-basis`: Tamaño base ideal antes de repartir el espacio restante (`auto`, `200px`, `30%`).
- `flex: 1`: Shorthand común para `flex-grow: 1; flex-shrink: 1; flex-basis: 0%` (reparte el espacio equitativamente).
- `align-self`: Sobrescribe el `align-items` del padre para un hijo específico (`auto`, `flex-start`, `center`, `flex-end`).
- `order`: Altera el orden visual de renderizado sin cambiar el HTML (`order: 1`, `order: -1`).
