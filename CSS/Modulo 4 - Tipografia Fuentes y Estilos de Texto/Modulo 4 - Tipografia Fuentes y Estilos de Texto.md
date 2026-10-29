# Módulo 4: Tipografía, Fuentes y Estilos de Texto

La tipografía representa más del 80% de la experiencia de lectura en una página web. CSS permite controlar con precisión tanto la familia tipográfica como la legibilidad, el interlineado y los efectos visuales de texto.

---

## 1. Familia y Carga de Fuentes: `font-family` y `@font-face`

### Pila de Fuentes de Respaldo (*Font Stack*):
Siempre se debe proveer una alternativa genérica al final de la lista:
```css
body {
  font-family: 'Inter', system-ui, -apple-system, sans-serif;
}
```

### Regla `@font-face`:
Permite descargar e incrustar fuentes personalizadas alojadas en tu servidor:
```css
@font-face {
  font-family: 'MiFuenteCustom';
  src: url('/fonts/mifuente.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap; /* Muestra texto de inmediato con fuente de respaldo */
}
```

---

## 2. Propiedades de Fuente Esenciales

- `font-size`: Tamaño del texto (preferir `rem` para respetar las preferencias de accesibilidad del usuario).
- `font-weight`: Grosor (`100` a `900`, `normal = 400`, `bold = 700`).
- `font-style`: `normal`, `italic`, `oblique`.

---

## 3. Formato y Espaciado de Texto (OverAPI)

| Propiedad | Función | Valores Comunes |
| :--- | :--- | :--- |
| `line-height` | Altura de línea / Interlineado | `1.5`, `1.6` (sin unidades para proporción) |
| `letter-spacing` | Espacio entre letras (tracking) | `0.05em`, `1px`, `-0.5px` |
| `word-spacing` | Espacio entre palabras | `2px`, `4px` |
| `text-align` | Alineación horizontal | `left`, `center`, `right`, `justify` |
| `text-transform` | Transformación de mayúsculas/minúsculas | `uppercase`, `lowercase`, `capitalize`, `none` |
| `text-decoration` | Subrayado o tachado | `underline`, `line-through`, `none` |

---

## 4. Efectos y Truncado de Texto

### Sombra de Texto: `text-shadow`
A diferencia de `box-shadow`, `text-shadow` no tiene `spread` ni `inset`:
```css
text-shadow: offset-x offset-y blur-radius color;
```

```css
/* Resplandor suave para títulos */
h1 {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
}
```

### Truncado con Puntos Suspensivos (`ellipsis`):
La receta estándar de 3 propiedades para cortar texto largo en una sola línea:
```css
.truncar-texto {
  white-space: nowrap;        /* 1. Impide saltos de línea */
  overflow: hidden;           /* 2. Oculta el sobrante */
  text-overflow: ellipsis;    /* 3. Agrega "..." al final */
}
```
