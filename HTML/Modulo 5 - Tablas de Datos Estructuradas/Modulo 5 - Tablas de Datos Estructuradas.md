# Módulo 5: Tablas de Datos Estructuradas

Las tablas en HTML deben usarse **exclusivamente para mostrar datos tabulares** (filas y columnas con relaciones multidimensionales), nunca para maquetar el diseño de una página web.

---

## 1. Estructura Semántica de una Tabla

Toda tabla completa debe dividirse en secciones semánticas para permitir que los lectores de pantalla y navegadores comprendan la relación entre encabezados y datos:

```html
<table border="1">
  <!-- 1. Título descriptivo accesible de la tabla -->
  <caption>Reporte de Ventas Trimestrales</caption>

  <!-- 2. Cabecera de la tabla -->
  <thead>
    <tr>
      <th scope="col">Producto</th>
      <th scope="col">Cantidad</th>
      <th scope="col">Total</th>
    </tr>
  </thead>

  <!-- 3. Cuerpo con las filas de datos -->
  <tbody>
    <tr>
      <th scope="row">Teclado Mecánico</th>
      <td>15</td>
      <td>$1,125</td>
    </tr>
    <tr>
      <th scope="row">Mouse Gamer</th>
      <td>8</td>
      <td>$280</td>
    </tr>
  </tbody>

  <!-- 4. Pie de tabla (totales, promedios) -->
  <tfoot>
    <tr>
      <th scope="row">Gran Total</th>
      <td>23</td>
      <td>$1,405</td>
    </tr>
  </tfoot>
</table>
```

---

## 2. Encabezados y Accesibilidad: `<th>` y `scope`

- `<th>`: Celda de encabezado (por defecto en negrita y centrada).
- `scope="col"`: Indica que el encabezado aplica a toda la columna hacia abajo.
- `scope="row"`: Indica que el encabezado aplica a toda la fila horizontal.

---

## 3. Fusión de Celdas: `colspan` y `rowspan`

- `colspan="N"` (*Column Span*): Hace que una celda se expanda horizontalmente ocupando `N` columnas.
- `rowspan="N"` (*Row Span*): Hace que una celda se expanda verticalmente ocupando `N` filas hacia abajo.

```html
<!-- Celda que abarca 2 columnas -->
<td colspan="2">Dato combinado</td>

<!-- Celda que abarca 3 filas -->
<td rowspan="3">Categoría común</td>
```

---

## 4. Agrupación de Columnas: `<colgroup>` y `<col>`

Permite aplicar estilos o propiedades a columnas completas sin necesidad de repetir clases en cada `<td>`:

```html
<table>
  <colgroup>
    <col span="1" class="col-destacada">
    <col span="2" class="col-datos">
  </colgroup>
  ...
</table>
```
