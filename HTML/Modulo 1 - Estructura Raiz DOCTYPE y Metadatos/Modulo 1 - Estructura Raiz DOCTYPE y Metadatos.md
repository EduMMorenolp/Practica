# Módulo 1: Estructura Raíz, DOCTYPE y Metadatos

Todo documento HTML moderno sigue una estructura fundamental estandarizada por el **W3C** y **WHATWG**. El navegador necesita conocer el tipo de documento, el idioma, la codificación de caracteres y la configuración de pantalla móvil antes de renderizar cualquier elemento visual.

---

## 1. El DOCTYPE y la Etiqueta Raíz

### `<!DOCTYPE html>`
Le indica al navegador que el documento debe interpretarse bajo el estándar moderno **HTML5**, evitando el *"quirks mode"* (modo de compatibilidad con navegadores antiguos). Debe ser siempre la **primera línea** del archivo, sin espacios ni comentarios antes.

```html
<!DOCTYPE html>
```

### `<html lang="es">`
Es la etiqueta raíz que envuelve absolutamente todo el documento. El atributo `lang` especifica el idioma principal del contenido (ej. `"es"` para español, `"en"` para inglés), vital para motores de búsqueda y lectores de pantalla (accesibilidad).

---

## 2. La Cabecera del Documento: `<head>`

El elemento `<head>` contiene **metadatos** (información sobre el documento que no se muestra directamente en el cuerpo visual de la página):

### Metadatos esenciales:
```html
<head>
  <!-- 1. Codificación de caracteres universal (acentos, ñ, emojis) -->
  <meta charset="UTF-8">

  <!-- 2. Responsive Web Design: adapta el ancho al dispositivo sin zoom indeseado -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- 3. Título de la pestaña en el navegador y en resultados de búsqueda -->
  <title>Mi Sitio Web Oficial</title>

  <!-- 4. Favicon (icono en la pestaña del navegador) -->
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">

  <!-- 5. URL base para enlaces relativos (opcional pero poderosa) -->
  <!-- <base href="https://example.com/"> -->
</head>
```

---

## 3. Metadatos SEO y Redes Sociales

```html
<!-- Descripción breve para motores de búsqueda (Google) -->
<meta name="description" content="Aprende desarrollo web moderno con ejercicios prácticos a mano.">

<!-- Autor del documento -->
<meta name="author" content="Practice Hub">

<!-- Tarjetas de redes sociales (Open Graph para WhatsApp/Facebook/LinkedIn) -->
<meta property="og:title" content="Practice Hub — HTML5">
<meta property="og:description" content="Plataforma interactiva para practicar código a mano.">
<meta property="og:type" content="website">
```

---

## 4. El Cuerpo del Documento: `<body>`

Contiene todo el contenido visualizable por el usuario: textos, botones, imágenes, listas y formularios. Solo debe existir **un único elemento `<body>`** por documento.

```html
<body>
  <h1>Bienvenido a HTML5</h1>
  <p>Este es el contenido visible.</p>
</body>
```

---

## 5. Resumen de Etiquetas Clave

| Etiqueta / Atributo | Propósito | Obligatorio |
| :--- | :--- | :--- |
| `<!DOCTYPE html>` | Activa el modo estándar de HTML5 | Sí (Línea 1) |
| `<html lang="...">` | Contenedor raíz con declaración de idioma | Sí |
| `<head>` | Metadatos, hojas de estilo, scripts y título | Sí |
| `<meta charset="UTF-8">` | Soporte para caracteres internacionales | Altamente recomendado |
| `<meta name="viewport">` | Adaptabilidad móvil y pantallas táctiles | Esencial para mobile |
| `<title>` | Título en la pestaña y marcadores | Sí |
| `<body>` | Contenedor del contenido visible | Sí |
