# Módulo 3: Enlaces, Navegación y Rutas

El hipertexto es la base de la World Wide Web. La etiqueta `<a>` (*anchor*) permite conectar documentos entre sí, saltar a secciones específicas de una misma página, iniciar llamadas telefónicas o redactar correos.

---

## 1. Anatomía del Enlace: La Etiqueta `<a>`

```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visitar Example</a>
```

### Atributos Fundamentales:
- `href` (*Hypertext Reference*): La URL de destino (obligatoria).
- `target`: Especifica dónde se abrirá el enlace:
  - `_self` (por defecto): En la misma pestaña o marco.
  - `_blank`: En una nueva pestaña o ventana.
  - `_parent` / `_top`: En el marco superior o contenedor.
- `rel="noopener noreferrer"`: **Crítico de seguridad y rendimiento** al usar `target="_blank"`. Evita que la página destino tenga acceso al objeto `window.opener` de tu página (previniendo ataques de *reverse tabnabbing*).
- `download`: Instruye al navegador a descargar el archivo en lugar de navegar hacia él (admite como valor el nombre sugerido para el archivo guardado).

---

## 2. Tipos de Rutas

### Rutas Absolutas:
Contienen el protocolo completo y dominio. Se usan para enlazar a recursos externos:
```html
<a href="https://developer.mozilla.org/es/">Documentación MDN</a>
```

### Rutas Relativas:
Hacen referencia a archivos dentro del mismo sitio web:
- `nosotros.html`: Archivo en el mismo directorio.
- `blog/articulo.html`: Subdirectorio.
- `../contacto.html`: Subir un nivel en el árbol de carpetas.
- `/imagenes/logo.png`: Ruta desde la raíz del dominio web.

---

## 3. Navegación Intra-página con Anclas (`#id`)

Permite a los usuarios saltar directamente a una sección específica del documento asignándole un `id` al elemento de destino:

```html
<!-- Menú de salto superior -->
<nav>
  <a href="#temario">Ir al Temario</a>
  <a href="#contacto">Ir al Contacto</a>
</nav>

<!-- Secciones con ID correspondiente -->
<section id="temario">
  <h2>Temario del Curso</h2>
</section>

<section id="contacto">
  <h2>Formulario de Contacto</h2>
</section>
```

---

## 4. Protocolos Especiales (`mailto:` y `tel:`)

HTML permite interactuar con las aplicaciones nativas del sistema operativo:

- `mailto:correo@ejemplo.com`: Abre el cliente de correo predeterminado.
- `tel:+5491123456789`: Inicia la llamada en dispositivos móviles o aplicaciones de telefonía.

```html
<a href="mailto:soporte@practicehub.dev?subject=Consulta">Enviar Correo</a>
<a href="tel:+5491100000000">Llamar a Soporte</a>
```
