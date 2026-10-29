# Módulo 9: Pseudo-clases y Pseudo-elementos

En CSS, las **pseudo-clases** (`:`) y los **pseudo-elementos** (`::`) permiten estilizar estados dinámicos del usuario, relaciones posicionales en el árbol y generar contenido cosmético sin ensuciar el HTML.

---

## 1. Pseudo-clases de Interacción y Formulario

- `:hover`: Se activa al pasar el cursor del ratón sobre el elemento.
- `:focus` / `:focus-visible`: Al recibir el foco de teclado o clic en inputs/botones.
- `:active`: Durante el instante exacto en que el botón del ratón está presionado.
- `:checked`: Casillas de verificación o radios seleccionados.
- `:disabled`: Elementos deshabilitados.
- `:target`: El elemento cuyo `id` coincide con el hash `#id` actual de la URL.

```css
button:hover {
  background-color: #1d4ed8;
}

input:focus {
  border-color: #38bdf8;
}
```

---

## 2. Pseudo-clases Estructurales (OverAPI)

Permiten apuntar por orden o posición de hijos sin clases adicionales:

| Pseudo-clase | Qué selecciona |
| :--- | :--- |
| `:first-child` / `:last-child` | El primer o último hijo dentro de su padre |
| `:nth-child(even)` | Hijos pares (filas 2, 4, 6...) para tablas cebradas |
| `:nth-child(odd)` | Hijos impares (filas 1, 3, 5...) |
| `:nth-child(3)` | Exactamente el tercer hijo |
| `:not(.excluir)` | Todos los elementos que **no** coincidan con el selector |
| `:root` | La raíz del documento (`<html>`), estándar para variables CSS (`--primary-color: #...`) |
| `:empty` | Elementos que no contienen hijos ni texto |

```css
/* Filas cebradas alternadas */
tr:nth-child(even) {
  background-color: #1e293b;
}

/* Negrita en todo párrafo excepto el de disclaimer */
p:not(.disclaimer) {
  font-weight: 500;
}
```

---

## 3. Pseudo-elementos (`::before`, `::after`, `::selection`)

A diferencia de las pseudo-clases, los **pseudo-elementos** crean cajas cosméticas virtuales dentro del elemento:

### `::before` y `::after`:
- Requieren obligatoriamente la propiedad `content: ""` (incluso si está vacía).
- Por defecto son elementos en línea (`display: inline`).
- Ideales para añadir íconos decorativos, viñetas personalizadas o efectos de subrayado animado.

```css
/* Añade un ícono antes del título */
.titulo-aviso::before {
  content: "⚠️ ";
}

/* Resaltado de selección de texto del usuario */
::selection {
  background: #38bdf8;
  color: #0f172a;
}
```
