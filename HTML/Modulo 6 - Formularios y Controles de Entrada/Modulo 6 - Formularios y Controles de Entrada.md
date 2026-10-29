# Módulo 6: Formularios y Controles de Entrada (Forms)

Los formularios constituyen el canal principal de entrada de datos e interactividad entre el usuario y la aplicación web o backend.

---

## 1. El Contenedor `<form>`

```html
<form action="/api/registro" method="POST" enctype="multipart/form-data">
  ...
</form>
```

### Atributos Principales:
- `action`: La URL del endpoint de destino en el servidor.
- `method`:
  - `GET`: Los datos viajan codificados en la URL como query params (`?nombre=valor`). Apto para búsquedas y filtros.
  - `POST`: Los datos viajan en el cuerpo de la petición HTTP (*Body*). Apto para crear recursos, contraseñas o datos sensibles.
- `enctype`:
  - `application/x-www-form-urlencoded` (por defecto): Clave-valor estándar.
  - `multipart/form-data`: **Obligatorio cuando el formulario incluye subida de archivos** (`<input type="file">`).

---

## 2. Etiquetas y Accesibilidad: `<label>`

Todo control interactivo debe estar asociado a una etiqueta `<label>`:
```html
<!-- Opción 1: Asociación explícita con for e id (Recomendada) -->
<label for="correo">Correo Electrónico:</label>
<input type="email" id="correo" name="email">

<!-- Opción 2: Asociación implícita envolvente -->
<label>
  Nombre:
  <input type="text" name="nombre">
</label>
```

---

## 3. Tipos de `<input>` y Validación Nativa

HTML5 proporciona validaciones automáticas sin necesidad de escribir JavaScript:

| `type="..."` | Propósito | Atributos de Validación |
| :--- | :--- | :--- |
| `text` | Texto simple | `minlength`, `maxlength`, `pattern="[A-Za-z]+"` |
| `password` | Contraseña enmascarada | `required` |
| `email` | Formato válido de correo electrónico | `required` |
| `number` | Valores numéricos | `min="0"`, `max="100"`, `step="5"` |
| `checkbox` | Selección binaria independiente | `checked` |
| `radio` | Selección única dentro de un grupo con el mismo `name` | `checked` |
| `file` | Selector de archivos | `accept="image/*,.pdf"`, `multiple` |
| `range` | Slider de rango deslizable | `min`, `max`, `value` |
| `date` / `time` | Selector de fecha / hora | `min`, `max` |

---

## 4. Agrupación y Otros Controles

- `<fieldset>` y `<legend>`: Agrupa controles relacionados temática y visualmente (ej. "Datos Personales", "Dirección de Facturación").
- `<textarea>`: Cuadro de texto multilínea (`rows="4" cols="50"`).
- `<select>`, `<optgroup>` y `<option>`: Menús desplegables agrupados.
- `<button type="submit|button|reset">`: Botón de acción (siempre especificar el `type`).
