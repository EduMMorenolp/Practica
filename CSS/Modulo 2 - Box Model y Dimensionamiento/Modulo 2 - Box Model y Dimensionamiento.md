# Módulo 2: Box Model y Dimensionamiento

En CSS, todo elemento renderizado es considerado una caja rectangular. El **Modelo de Caja (Box Model)** define cómo se combinan el contenido, el relleno, el borde y el margen para determinar el tamaño y la separación real en pantalla.

---

## 1. Las Cuatro Capas del Box Model

De adentro hacia afuera:
1. **Content (Contenido):** El texto, imagen u otros elementos hijos (`width` y `height`).
2. **Padding (Relleno interno):** Espacio transparente entre el contenido y el borde.
3. **Border (Borde):** Línea visible que rodea el relleno y el contenido.
4. **Margin (Margen externo):** Espacio transparente que separa la caja de sus elementos vecinos.

```
+-----------------------------------+
|               Margin              |
|   +---------------------------+   |
|   |           Border          |   |
|   |   +-------------------+   |   |
|   |   |      Padding      |   |   |
|   |   |   +-----------+   |   |   |
|   |   |   |  Content  |   |   |   |
|   |   |   +-----------+   |   |   |
|   |   +-------------------+   |   |
|   +---------------------------+   |
+-----------------------------------+
```

---

## 2. La Propiedad `box-sizing`: El Gran Salto

### `content-box` (Comportamiento por defecto del navegador):
Si defines `width: 300px`, `padding: 20px` y `border: 5px`, el ancho total calculado será:
$$\text{Ancho total} = 300 + (20 \times 2) + (5 \times 2) = 350\text{px}$$
Esto suele romper layouts y diseños responsivos.

### `border-box` (El estándar moderno de la industria):
El `padding` y el `border` se absorben **dentro** del `width` especificado:
$$\text{Ancho total} = 300\text{px}$$
El contenido se ajusta a $300 - 40 - 10 = 250\text{px}$.

```css
/* Reset recomendado para todo proyecto moderno */
*, *::before, *::after {
  box-sizing: border-box;
}
```

---

## 3. Notaciones Shorthand (Taquigrafía)

Tanto `margin` como `padding` admiten de 1 a 4 valores en sentido de las agujas del reloj:

- `padding: 10px;` $\rightarrow$ Los 4 lados iguales.
- `padding: 10px 20px;` $\rightarrow$ (Arriba/Abajo) y (Izquierda/Derecha).
- `padding: 10px 20px 15px;` $\rightarrow$ Arriba, (Izquierda/Derecha), Abajo.
- `padding: 10px 20px 15px 5px;` $\rightarrow$ Arriba, Derecha, Abajo, Izquierda (Top, Right, Bottom, Left $\rightarrow$ **TRBL**).

### Centrado Horizontal con Margen:
Para centrar un elemento de bloque con ancho definido:
```css
.contenedor {
  width: 600px;
  margin: 0 auto; /* Arriba/Abajo 0, Izquierda/Derecha automático */
}
```

---

## 4. Dimensiones y Control de Desbordamiento (`overflow`)

- `min-width` / `max-width`: Establecen límites elásticos indispensables para diseño responsivo (ej. `max-width: 100%`).
- `overflow`: Controla qué ocurre cuando el contenido excede el tamaño de la caja:
  - `visible` (por defecto): El contenido se sale de la caja.
  - `hidden`: Corta el contenido que sobresale.
  - `scroll`: Agrega siempre barras de desplazamiento.
  - `auto`: Agrega barras de desplazamiento **solo si es necesario**.
