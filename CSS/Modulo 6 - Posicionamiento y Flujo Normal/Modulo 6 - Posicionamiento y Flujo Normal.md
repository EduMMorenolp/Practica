# Módulo 6: Posicionamiento y Flujo Normal

Por defecto, los elementos HTML se posicionan en el **flujo normal del documento** (de arriba hacia abajo para bloques y de izquierda a derecha para elementos en línea). La propiedad `position` permite alterar este comportamiento para crear overlays, cabeceras fijas y menús pegajosos.

---

## 1. Valores de la Propiedad `position`

| Valor | Comportamiento | Desplaza a otros elementos | Referencia para `top/left/etc.` |
| :--- | :--- | :---: | :--- |
| `static` | Flujo normal por defecto | No | Ninguna (ignora coordenadas) |
| `relative` | Se desplaza respecto a **su posición original** | No (deja el hueco intacto) | Su propia posición inicial |
| `absolute` | Se extrae del flujo y se posiciona respecto al **ancestro posicionado más cercano** | Sí | El ancestro con `relative/absolute/fixed` |
| `fixed` | Se extrae del flujo y se ancla al **viewport de la pantalla** | Sí | La ventana del navegador (no se mueve con scroll) |
| `sticky` | Híbrido: se comporta como `relative` hasta que el scroll alcanza un umbral y queda anclado | No | Su contenedor padre de scroll |

---

## 2. El Patrón Clásico: `relative` como Ancla de `absolute`

Para colocar un elemento absoluto en una esquina de una tarjeta (como una insignia o botón de cerrar):
```css
/* 1. Contenedor padre hace de ancla */
.tarjeta {
  position: relative;
}

/* 2. Hijo se posiciona con precisión milimétrica */
.badge-oferta {
  position: absolute;
  top: 10px;
  right: 10px;
}
```

---

## 3. Barras de Navegación Fijas y Pegajosas

### `position: fixed`:
Ideal para barras de navegación superiores fijas que siempre acompañan al usuario:
```css
.navbar-fija {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
```

### `position: sticky`:
Ideal para encabezados de sección o tablas que permanecen pegados al techo mientras el usuario navega por esa sección concreta:
```css
.encabezado-seccion {
  position: sticky;
  top: 0;
}
```

---

## 4. Orden de Capas y Profundidad: `z-index`

La propiedad `z-index` determina qué elemento se dibuja encima de otro cuando se superponen.

> [!IMPORTANT]
> `z-index` solo tiene efecto en elementos **que tienen una posición declarada distinta de `static`** (`relative`, `absolute`, `fixed` o `sticky`).

- A mayor valor numérico entero (`z-index: 10`, `z-index: 50`), más arriba se dibujará la capa.
- Contexto de apilamiento (*Stacking Context*): Los valores de `z-index` se comparan dentro del mismo contexto del contenedor padre.
