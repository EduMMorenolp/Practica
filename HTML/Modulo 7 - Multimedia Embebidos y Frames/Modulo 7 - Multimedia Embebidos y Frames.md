# Módulo 7: Multimedia, Embebidos y Frames

HTML5 introdujo capacidades nativas de primera clase para audio, video e imágenes adaptativas, eliminando la necesidad de plugins externos como Flash.

---

## 1. Imágenes Semánticas y Responsivas

### La Etiqueta `<img>` Esencial:
- `src`: Ruta al archivo de imagen.
- `alt`: **Texto alternativo obligatorio** para accesibilidad (lectores de pantalla) y en caso de que la imagen falle al cargar.
- `loading="lazy"`: Optimización nativa que pospone la descarga de la imagen hasta que el usuario hace scroll cerca de ella.
- `width` y `height`: Evitan el *Cumulative Layout Shift* (CLS).

```html
<img src="/img/paisaje.webp" alt="Montañas nevadas al atardecer" loading="lazy" width="800" height="450">
```

### `<figure>` y `<figcaption>`:
Agrupa una imagen o ilustración con su descripción o pie de foto explícito:
```html
<figure>
  <img src="/img/arquitectura.jpg" alt="Plano de la red neuronal">
  <figcaption>Figura 1: Arquitectura de la red neuronal convolucional.</figcaption>
</figure>
```

### `<picture>` e Imágenes Adaptativas:
Permite servir diferentes formatos o resoluciones según las condiciones de la pantalla:
```html
<picture>
  <source srcset="/img/banner-large.webp" media="(min-width: 1024px)" type="image/webp">
  <source srcset="/img/banner-medium.webp" media="(min-width: 600px)" type="image/webp">
  <img src="/img/banner-fallback.jpg" alt="Banner promocional">
</picture>
```

---

## 2. Reproductores Nativos: `<audio>` y `<video>`

Permiten reproducir archivos multimedia sin reproductores externos:
- `controls`: Muestra los botones de reproducir, pausar y volumen.
- `autoplay`: Reproduce automáticamente (generalmente requiere `muted` en navegadores modernos).
- `loop`: Repite indefinidamente.
- `poster`: Imagen previa antes de dar play al video.
- `<source>`: Permite proveer múltiples formatos (MP4, WebM, OGG) para asegurar compatibilidad.

```html
<video controls poster="/img/preview.jpg" width="640">
  <source src="/media/video.webm" type="video/webm">
  <source src="/media/video.mp4" type="video/mp4">
  Tu navegador no soporta reproducción de video HTML5.
</video>
```

---

## 3. Marcos Aislados: `<iframe>`

Incrusta otro documento HTML independiente dentro de la página actual.

### Atributos Críticos de Seguridad:
- `src`: URL del documento a incrustar.
- `sandbox`: Restringe las capacidades del iframe (ejecución de scripts, envío de formularios, apertura de popups) para evitar ataques XSS o vulnerabilidades de seguridad.
- `allowfullscreen`: Permite que el iframe entre a pantalla completa (ej. reproductores de YouTube o Vimeo).
- `srcdoc`: Permite inyectar código HTML directamente dentro del iframe sin requerir un archivo externo.

```html
<iframe src="https://example.com" title="Demostración segura" sandbox="allow-scripts" width="500" height="300"></iframe>
```
