# Módulo 10: Transiciones, Transformaciones y Animaciones

El movimiento bien diseñado transforma una página estática en una aplicación dinámica, atractiva y fluida. CSS3 permite crear microinteracciones y animaciones continuas aceleradas por hardware (GPU) sin depender de JavaScript.

---

## 1. Transiciones Suaves: `transition`

Permite que el cambio de una propiedad CSS (como color, tamaño u opacidad) ocurra gradualmente a lo largo de un período de tiempo:

```css
transition: propiedad duración función-de-tiempo retardo;
```

- `transition-property`: Qué propiedades animar (`all`, `background-color`, `transform`, `opacity`).
- `transition-duration`: Tiempo que dura la transición (`0.3s`, `300ms`).
- `transition-timing-function`: Curva de aceleración (`ease`, `linear`, `ease-in`, `ease-out`, `ease-in-out`, `cubic-bezier(...)`).
- `transition-delay`: Tiempo de espera antes de comenzar la transición (`0.1s`).

```css
.boton {
  background-color: #2563eb;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.boton:hover {
  background-color: #1d4ed8;
  transform: translateY(-2px);
}
```

---

## 2. Transformaciones 2D y 3D: `transform`

Las transformaciones no afectan al flujo del documento (no recalculan el layout de los vecinos), por lo que ofrecen **rendimiento de 60fps**:

| Función | Efecto | Ejemplo |
| :--- | :--- | :--- |
| `translate(x, y)` | Desplaza el elemento | `transform: translateY(-5px);` |
| `scale(factor)` | Agranda o achica | `transform: scale(1.05);` |
| `rotate(angulo)` | Rota en grados | `transform: rotate(45deg);` |
| `skew(x, y)` | Deforma o inclina | `transform: skewX(10deg);` |

---

## 3. Animaciones con `@keyframes`

Para secuencias de movimiento complejas o continuas que se reproducen solas sin necesidad de un `:hover`:

```css
/* 1. Definir los fotogramas clave */
@keyframes girar-infinito {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* 2. Asignar la animación al elemento */
.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #334155;
  border-top-color: #38bdf8;
  border-radius: 50%;
  animation: girar-infinito 1s linear infinite;
}
```

### Propiedades de `animation`:
- `animation-name`: Nombre de la regla `@keyframes`.
- `animation-duration`: Duración de una vuelta (`1s`, `2s`).
- `animation-iteration-count`: Cuántas veces se reproduce (`1`, `3`, `infinite`).
- `animation-fill-mode`: `forwards` (mantiene los estilos del último fotograma al terminar).
- `animation-direction`: `normal`, `reverse`, `alternate` (va y vuelve).
