# Módulo 5: Colores, Fondos y Degradados

El color y los fondos proporcionan identidad visual, armonía y dinamismo a cualquier sitio web. CSS moderno soporta múltiples modelos de color y un conjunto amplio de propiedades para el manejo de imágenes y degradados.

---

## 1. Modelos de Color Modernos

- **HEX (Hexadecimal):** `#0f172a`, `#3b82f6` (o `#3b82f680` con canal alfa de transparencia).
- **RGB / RGBA:** `rgb(59, 130, 246)` o con canal alfa `rgba(59, 130, 246, 0.5)`.
- **HSL / HSLA:** Matiz, Saturación y Luminosidad (ideal para crear paletas armónicas): `hsl(217, 91%, 60%)` o `hsla(217, 91%, 60%, 0.8)`.
- **`currentcolor`:** Palabra clave que hereda el valor actual de la propiedad `color` del texto (muy útil para bordes e iconos SVG).

---

## 2. Propiedades de Fondo (`background-*`)

| Propiedad | Propósito | Valores Comunes |
| :--- | :--- | :--- |
| `background-color` | Color de fondo sólido o semitransparente | `#1e293b`, `rgba(0,0,0,0.5)` |
| `background-image` | Imagen o degradado de fondo | `url('...')`, `linear-gradient(...)` |
| `background-repeat` | Control de repetición | `no-repeat`, `repeat-x`, `repeat-y`, `repeat` |
| `background-position` | Ubicación de la imagen | `center`, `top left`, `center bottom`, `50% 50%` |
| `background-size` | Escala de la imagen | `cover` (llena sin deformar), `contain` (completa visible) |
| `background-attachment` | Comportamiento al hacer scroll | `scroll`, `fixed` (efecto parallax básico) |

---

## 3. Degradados: `linear-gradient` y `radial-gradient`

Los degradados se consideran **imágenes generadas** por CSS, por lo que se declaran en `background-image` o en el shorthand `background`:

### Degradado Lineal (`linear-gradient`):
```css
/* De izquierda a derecha */
.boton-gradiente {
  background: linear-gradient(to right, #3b82f6, #8b5cf6);
}

/* En ángulo (45 grados) con puntos de parada */
.hero {
  background: linear-gradient(45deg, #0f172a 0%, #1e293b 100%);
}
```

### Degradado Radial (`radial-gradient`):
Se expande en círculo o elipse desde un punto central hacia afuera:
```css
.foco-luz {
  background: radial-gradient(circle at center, #38bdf8 0%, #0f172a 70%);
}
```

---

## 4. Opacidad Global: `opacity`

La propiedad `opacity` (valores de `0.0` totalmente transparente a `1.0` opaco) afecta al elemento **y a todos sus hijos**. Si solo deseas transparentar el fondo sin hacer transparente el texto interior, utiliza colores `rgba()` o `hsla()` en `background-color` en vez de `opacity`.
