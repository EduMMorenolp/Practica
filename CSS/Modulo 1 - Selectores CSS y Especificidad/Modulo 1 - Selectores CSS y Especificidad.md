# Módulo 1: Selectores CSS y Especificidad

Para aplicar estilos en CSS, primero debemos apuntar con exactitud a los elementos HTML correspondientes mediante **selectores**. La **cascada** y la **especificidad** determinan qué regla gana cuando varias compiten por el mismo elemento.

---

## 1. Selectores Básicos

- **Selector Universal (`*`):** Aplica a todos los elementos del documento.
- **Selector de Tipo / Elemento (`p`, `h1`, `button`):** Apunta por el nombre de la etiqueta HTML.
- **Selector de Clase (`.nombre-clase`):** Reutilizable en múltiples elementos.
- **Selector de ID (`#mi-id`):** Apunta a un elemento con un identificador único en la página.
- **Agrupación (`h1, h2, h3`):** Aplica el mismo bloque de reglas a varios selectores separados por coma.

```css
/* Universal */
* {
  margin: 0;
  padding: 0;
}

/* Clases e IDs */
.btn-primary {
  background-color: #2563eb;
}

#encabezado-principal {
  color: #f8fafc;
}
```

---

## 2. Combinadores de Relación

Permiten seleccionar elementos según su posición respecto a otros en el árbol del DOM:

| Combinador | Nombre | Ejemplo | Qué selecciona |
| :---: | :--- | :--- | :--- |
| ` ` (espacio) | **Descendiente** | `article p` | Cualquier `<p>` dentro de un `<article>` a cualquier profundidad |
| `>` | **Hijo directo** | `ul > li` | Solo los `<li>` que son hijos inmediatos de ese `<ul>` |
| `+` | **Hermano adyacente** | `h2 + p` | El primer `<p>` que viene inmediatamente después de un `<h2>` |
| `~` | **Hermano general** | `h2 ~ p` | Todos los `<p>` que comparten el mismo padre y están después del `<h2>` |

---

## 3. Selectores de Atributos (OverAPI)

Permiten apuntar a elementos según la existencia o el valor de sus atributos HTML:

- `[disabled]`: Elementos que tienen el atributo `disabled`.
- `[type="email"]`: Coincidencia exacta de valor.
- `[href^="https://"]`: El valor **empieza por** `https://`.
- `[href$=".pdf"]`: El valor **termina en** `.pdf` (ej. para íconos de descarga).
- `[class*="tarjeta"]`: El valor **contiene** la subcadena `tarjeta`.

```css
a[href^="https://"] {
  color: #38bdf8;
}

a[href$=".pdf"]::after {
  content: " (PDF)";
}
```

---

## 4. La Regla de la Especificidad

Cuando dos o más reglas definen la misma propiedad para un elemento, el navegador calcula un puntaje de especificidad:

$$\text{Especificidad} = (ID, \text{Clases/Atributos/Pseudo-clases}, \text{Elementos/Pseudo-elementos})$$

1. **Estilo en línea (`style="..."`):** 1000 puntos (máxima prioridad directa).
2. **Selectores de ID (`#id`):** 100 puntos cada uno.
3. **Clases, atributos y pseudo-clases (`.clase`, `[attr]`, `:hover`):** 10 puntos cada uno.
4. **Elementos y pseudo-elementos (`p`, `div`, `::before`):** 1 punto cada uno.
5. **Selector universal (`*`):** 0 puntos.

> [!WARNING]
> La directiva `!important` anula el cálculo normal de especificidad. Debe usarse con extrema prudencia, ya que dificulta la mantenibilidad de la hoja de estilos.
