# Módulo 10: Semántica HTML5 y Accesibilidad ARIA

Antes de HTML5, los desarrolladores construían páginas web repletas de `<div id="header">`, `<div class="nav">` y `<div class="footer">` (un fenómeno conocido peyorativamente como *"divitis"*). HTML5 introdujo **elementos semánticos estructurales** que describen con precisión el rol de cada sección.

---

## 1. Contenedores Semánticos Principales

```html
<body>
  <!-- 1. Cabecera introductoria del sitio o de un artículo -->
  <header>
    <h1>Portal de Noticias</h1>
    <!-- 2. Bloque de navegación principal con enlaces -->
    <nav>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/tecnologia">Tecnología</a></li>
      </ul>
    </nav>
  </header>

  <!-- 3. Contenido dominante y único del documento (solo UNO por página) -->
  <main>
    <!-- 4. Contenido autónomo y reutilizable (noticia, post, producto) -->
    <article>
      <h2>Lanzamiento de HTML5</h2>
      <p>Un hito en los estándares web...</p>
    </article>

    <!-- 5. Sección temática genérica con su propio encabezado -->
    <section>
      <h2>Artículos Relacionados</h2>
    </section>
  </main>

  <!-- 6. Contenido secundario tangencial (barra lateral, widgets, publicidad) -->
  <aside>
    <h3>Lo más leído</h3>
  </aside>

  <!-- 7. Pie de página (autor, copyright, enlaces legales) -->
  <footer>
    <p>&copy; 2026 Practice Hub. Todos los derechos reservados.</p>
  </footer>
</body>
```

---

## 2. Modales Nativos: `<dialog>`

HTML5 cuenta con un elemento nativo para ventanas modales accesibles sin frameworks pesados:
```html
<dialog id="mi-modal">
  <h2>Aviso Importante</h2>
  <p>Debes guardar tus cambios antes de salir.</p>
  <button onclick="document.getElementById('mi-modal').close()">Cerrar</button>
</dialog>

<button onclick="document.getElementById('mi-modal').showModal()">Abrir Modal</button>
```

---

## 3. Accesibilidad Web (a11y) y Atributos WAI-ARIA

Cuando el HTML nativo no alcanza para describir un estado dinámico, se recurre a los atributos **ARIA**:
- `role="..."`: Define el propósito de un componente (ej. `role="banner"`, `role="navigation"`, `role="alert"`).
- `aria-label`: Etiqueta legible por lectores de pantalla cuando no hay texto visible (ej. en botones que solo tienen un icono).
- `aria-hidden="true"`: Oculta elementos puramente decorativos (como iconos SVG) de los lectores de pantalla.
- `aria-expanded="true|false"`: Comunica si un menú desplegable o acordeón está abierto o cerrado.

---

## 4. Elementos Obsoletos vs Estándar Moderno (OverAPI)

| Elemento Obsoleto | Reemplazo Estándar Moderno | Razón de Deprecación |
| :--- | :--- | :--- |
| `<center>` | CSS `text-align: center` o Flexbox | Mezcla presentación con estructura |
| `<font>` | CSS `font-family`, `font-size`, `color` | Inmantenible y redundante |
| `<frameset>` / `<frame>` | `<iframe>` o diseño con CSS Grid | Problemas graves de accesibilidad e historial |
| `<big>` / `<strike>` | `<span class="...">` o `<del>` | Falta de valor semántico claro |
| `<acronym>` | `<abbr title="...">` | Unificado bajo `<abbr>` |
