# Módulo 3: Bordes, Contornos y Sombras

Los bordes, contornos y sombras son los encargados de dotar a una interfaz de jerarquía espacial, profundidad tridimensional y estados de enfoque claros para accesibilidad.

---

## 1. Bordes y sus Componentes

Un borde se compone de tres propiedades que pueden declararse juntas con el shorthand `border`:
- `border-width`: Grosor (ej. `1px`, `2px`, `medium`).
- `border-style`: Estilo de trazo (`solid`, `dashed`, `dotted`, `double`, `none`).
- `border-color`: Color del trazo (HEX, RGB, HSL).

```css
/* Shorthand para los 4 lados */
.tarjeta {
  border: 1px solid #334155;
}

/* Bordes individuales */
.alerta {
  border-left: 4px solid #3b82f6; /* Borde izquierdo destacado */
}
```

---

## 2. Esquinas Redondeadas: `border-radius`

Permite suavizar las esquinas o crear formas geométricas completas:
- `border-radius: 8px;`: Esquinas redondeadas suaves.
- `border-radius: 9999px;`: Forma de píldora (*pill button*).
- `border-radius: 50%;`: Círculo perfecto (siempre que el elemento tenga igual ancho y alto).

```css
.avatar {
  width: 64px;
  height: 64px;
  border-radius: 50%;
}
```

---

## 3. Contornos (`outline`) y Accesibilidad

A diferencia de `border`, el `outline`:
1. **No ocupa espacio en el Box Model** (no altera las dimensiones del elemento ni empuja a sus vecinos).
2. Se dibuja por fuera del borde.
3. Se puede separar visualmente del elemento usando `outline-offset`.

```css
/* Anillo de enfoque accesible para teclado */
button:focus-visible {
  outline: 2px solid #38bdf8;
  outline-offset: 4px;
}
```

---

## 4. Sombras Tridimensionales: `box-shadow`

Sintaxis completa de `box-shadow`:
```css
box-shadow: [inset] offset-x offset-y blur-radius spread-radius color;
```

- `offset-x`: Desplazamiento horizontal (positivo hacia la derecha, negativo hacia la izquierda).
- `offset-y`: Desplazamiento vertical (positivo hacia abajo).
- `blur-radius`: Desenfoque de la sombra (0 es nítida, valores mayores la difuminan).
- `spread-radius`: Expansión o contracción de la sombra (opcional).
- `color`: Color y opacidad (habitualmente `rgba(0, 0, 0, 0.25)`).
- `inset` (opcional): Convierte la sombra en **interna** (sensación de elemento hundido o ranura).

```css
/* Elevación moderna */
.card-elevada {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.3),
              0 4px 6px -4px rgba(0, 0, 0, 0.2);
}
```
