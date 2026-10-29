# Módulo 8: Atributos Globales y Eventos HTML Inline

Los **atributos globales** son aquellos que pueden utilizarse en prácticamente cualquier elemento del estándar HTML. Junto a ellos, los **manejadores de eventos inline** permiten asociar respuestas interactivas a acciones del usuario directo desde el marcado.

---

## 1. Atributos Globales de Identificación y Estilo

- `id`: Identificador único irrepetible en todo el documento (ej. `id="encabezado"`).
- `class`: Lista separada por espacios de clases CSS aplicadas al elemento (ej. `class="btn btn-primary"`).
- `title`: Información de sugerencia (*tooltip*) que se muestra al pasar el ratón por encima.
- `style`: Reglas CSS en línea directas sobre el elemento.
- `hidden`: Oculta visualmente el elemento del DOM y de los lectores de pantalla (equivalente conceptual a `display: none`).

---

## 2. Accesibilidad por Teclado e Idioma

- `tabindex`: Controla el orden de navegación secuencial con la tecla <kbd>Tab</kbd>:
  - `tabindex="0"`: Hace que un elemento no interactivo (como un `<div>`) sea enfocable por teclado en el orden natural.
  - `tabindex="-1"`: Enfocable solo programáticamente con `.focus()`, saltado por la tecla Tab.
  - `tabindex="1+"`: Orden forzado explícito (generalmente desaconsejado en favor de `0`).
- `accesskey`: Define una tecla de atajo rápida (ej. `accesskey="s"` para presionar `Alt + Shift + S`).
- `lang`: Especifica el idioma de una sección concreta (ej. `<blockquote lang="en">To be or not to be</blockquote>`).
- `dir`: Dirección de lectura del texto (`"ltr"` de izquierda a derecha, `"rtl"` de derecha a izquierda como en árabe o hebreo).
- `contenteditable="true"`: Permite al usuario editar el texto del elemento directamente en la página.

---

## 3. Atributos de Eventos Inline (OverAPI)

HTML permite declarar funciones de JavaScript que se disparan ante interacciones del usuario:

### Eventos de Ratón:
- `onclick`: Al hacer clic.
- `ondblclick`: Al hacer doble clic.
- `onmouseover` / `onmouseout`: Al entrar o salir con el cursor del ratón.

### Eventos de Formulario:
- `onchange`: Cuando un campo pierde el foco habiendo cambiado su valor (o en `<select>` tras elegir opción).
- `oninput`: Se dispara en tiempo real con cada tecla presionada en un `<input>` o `<textarea>`.
- `onsubmit`: Al enviar un formulario. Puede cancelar el envío retornando `false` (`onsubmit="return false;"`).
- `onfocus` / `onblur`: Al ganar o perder el foco.

```html
<button onclick="alert('¡Botón presionado!')">Hacer Clic</button>
<input type="text" oninput="console.log(this.value)">
```
