# Módulo 2: Jerarquía de Texto, Formato y Entidades

El texto es el componente más representativo de la web. En HTML, cada etiqueta de texto aporta **significado semántico** a navegadores y motores de búsqueda, más allá del aspecto visual (el cual debe ser controlado con CSS).

---

## 1. Encabezados Jerárquicos: `<h1>` a `<h6>`

Representan los niveles de jerarquía del documento:
- `<h1>`: Título principal del documento. **Solo debe haber uno por página** por accesibilidad y SEO.
- `<h2>`: Subtítulo o sección principal.
- `<h3>`: Subsección de un `<h2>`.
- `<h4>`, `<h5>`, `<h6>`: Niveles más profundos de granularidad.

```html
<h1>Guía de Desarrollo Web</h1>
<h2>Capítulo 1: Fundamentos</h2>
<h3>1.1 Sintaxis básica</h3>
```

---

## 2. Párrafos, Saltos y Separadores

- `<p>`: Párrafo de texto con margen de bloque automático.
- `<br>`: Salto de línea forzado dentro de un párrafo (usar solo en poemas, direcciones o cuando el quiebre sea indispensable).
- `<hr>`: Regla horizontal o quiebre temático (*thematic break*) entre secciones.

---

## 3. Formato y Énfasis Semántico

| Etiqueta | Significado Semántico | Aspecto Típico |
| :--- | :--- | :--- |
| `<strong>` | Gran importancia o seriedad | Negrita (bold) |
| `<em>` | Énfasis de pronunciación o tono de voz | Cursiva (italic) |
| `<b>` | Estilísticamente diferente sin importancia extra | Negrita |
| `<i>` | Voz alternativa, término técnico o modismo | Cursiva |
| `<mark>` | Texto resaltado por relevancia en el contexto | Fondo amarillo |
| `<small>` | Letra pequeña, comentarios al margen, derechos de autor | Tamaño reducido |
| `<del>` | Texto eliminado o tachado | Tachado |
| `<ins>` | Texto insertado recientemente | Subrayado |
| `<sub>` / `<sup>` | Subíndice (H<sub>2</sub>O) y superíndice (E = mc<sup>2</sup>) | Alineación vertical |

---

## 4. Citas y Bloques

- `<blockquote>`: Cita en bloque de una fuente externa extensa, a menudo acompañada del atributo `cite="https://..."`.
- `<q>`: Cita corta entrecomillada en línea.
- `<cite>`: Título de una obra, libro, película o artículo citado.

```html
<blockquote cite="https://es.wikipedia.org/wiki/Tim_Berners-Lee">
  La web no conecta máquinas, conecta personas.
</blockquote>
<p>Como dijo <cite>Tim Berners-Lee</cite> en su conferencia.</p>
```

---

## 5. Código y Entidades de Caracteres HTML

### Código y Bloques Monospace:
- `<code>`: Fragmento de código en línea.
- `<pre>`: Texto preformateado (conserva espacios y saltos de línea exactos).
- `<kbd>`: Entrada de teclado del usuario (ej. `<kbd>Ctrl</kbd> + <kbd>C</kbd>`).
- `<samp>`: Salida de muestra generada por un programa de computadora.

### Entidades de Caracteres (OverAPI):
En HTML, ciertos caracteres como `<` y `>` son reservados para la sintaxis de etiquetas. Para escribirlos en el texto sin romper el código, se utilizan **entidades**:

| Carácter | Nombre de la Entidad | Código Numérico | Descripción |
| :---: | :---: | :---: | :--- |
| `<` | `&lt;` | `&#60;` | Menor que (Less than) |
| `>` | `&gt;` | `&#62;` | Mayor que (Greater than) |
| `&` | `&amp;` | `&#38;` | Ampersand |
| `"` | `&quot;` | `&#34;` | Comilla doble |
| `©` | `&copy;` | `&#169;` | Símbolo de Copyright |
| `€` | `&euro;` | `&#8364;` | Símbolo de Euro |
| `•` | `&bull;` | `&#149;` | Viñeta redonda |
| Espacio | `&nbsp;` | `&#160;` | Espacio indivisible (*Non-breaking space*) |
