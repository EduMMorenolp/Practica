# Módulo 4: Listas y Agrupación de Contenido

Las listas permiten estructurar información de manera secuencial o jerárquica. HTML proporciona tres tipos principales de listas según la naturaleza de los datos.

---

## 1. Listas Desordenadas: `<ul>`

Se emplean cuando el orden de los elementos no altera el significado (ej. ingredientes, características, menús).
- Cada elemento de la lista se define con `<li>` (*List Item*).

```html
<ul>
  <li>Manzanas</li>
  <li>Plátanos</li>
  <li>Naranjas</li>
</ul>
```

---

## 2. Listas Ordenadas: `<ol>`

Se utilizan cuando el orden numérico o secuencial es importante (ej. pasos de una receta, rankings, algoritmos).

### Atributos Clave de `<ol>` (OverAPI / Estándar HTML):
- `start="5"`: Define el número inicial de la lista (comenzará en 5).
- `reversed`: Invierte el conteo hacia atrás (cuenta regresiva).
- `type="1|a|A|i|I"`: Formato de viñeta (arábigo, letras minúsculas/mayúsculas, números romanos).

```html
<!-- Pasos numerados con letras mayúsculas iniciando en B (start="2") -->
<ol type="A" start="2">
  <li>Preparar el molde</li>
  <li>Precalentar el horno a 180°C</li>
</ol>
```

---

## 3. Listas Anidadas Multinivel

Un `<ul>` o `<ol>` puede anidarse dentro de un elemento `<li>` existente para crear estructuras en árbol:

```html
<ul>
  <li>Frontend
    <ul>
      <li>HTML5</li>
      <li>CSS3</li>
    </ul>
  </li>
  <li>Backend</li>
</ul>
```

---

## 4. Listas de Definición / Descripción: `<dl>`

Ideales para diccionarios, glosarios de términos o pares clave-valor (como fichas técnicas):
- `<dl>`: Contenedor de la lista de descripción (*Description List*).
- `<dt>`: Término que se va a definir (*Description Term*).
- `<dd>`: Descripción o definición del término (*Description Details*).

```html
<dl>
  <dt>HTML</dt>
  <dd>Lenguaje de marcado estándar para crear documentos web.</dd>

  <dt>CSS</dt>
  <dd>Hojas de estilo en cascada para diseñar y presentar páginas.</dd>
</dl>
```
