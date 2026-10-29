# 🗺️ Temario de CSS & Diseño Web Moderno (OverAPI, W3C, MDN)

Ruta de aprendizaje estructurada, práctica y progresiva para dominar **CSS (Cascading Style Sheets)**, desde el modelo de caja y selectores avanzados hasta Flexbox, Grid, transformaciones 2D/3D, animaciones y diseño responsivo, practicando a mano con feedback visual inmediato.

---

## 📚 Roadmap de Módulos

### 🔹 [Módulo 1: Selectores CSS y Especificidad](./Modulo%201%20-%20Selectores%20CSS%20y%20Especificidad/Modulo%201%20-%20Selectores%20CSS%20y%20Especificidad.md)
La base para apuntar a cualquier elemento: selectores básicos (`*`, tipo, clase, id), combinadores (descendiente, hijo directo `>`, adyacente `+`, hermano general `~`), selectores de atributos (`[attr]`, `[attr=val]`, `[attr^=val]`, `[attr$=val]`, `[attr*=val]`) y la regla de la especificidad y cascada (`!important`).
- **Teoría:** [Modulo 1 - Selectores CSS y Especificidad.md](./Modulo%201%20-%20Selectores%20CSS%20y%20Especificidad/Modulo%201%20-%20Selectores%20CSS%20y%20Especificidad.md)
- **Ejercicios Prácticos:**
  - [01_selectores_basicos_y_combinadores.html](./Modulo%201%20-%20Selectores%20CSS%20y%20Especificidad/01_selectores_basicos_y_combinadores.html) — Aplicación precisa de estilos con selectores de tipo, clases, id y relaciones padre-hijo.
  - [02_selectores_de_atributos_y_especificidad.html](./Modulo%201%20-%20Selectores%20CSS%20y%20Especificidad/02_selectores_de_atributos_y_especificidad.html) — Estilos condicionales por atributos de enlaces y resolución de conflictos de especificidad.

---

### 🔹 [Módulo 2: Box Model y Dimensionamiento](./Modulo%202%20-%20Box%20Model%20y%20Dimensionamiento/Modulo%202%20-%20Box%20Model%20y%20Dimensionamiento.md)
El corazón del maquetado CSS: `box-sizing: border-box` vs `content-box`, márgenes (`margin`, colapso de márgenes), relleno (`padding`), dimensiones (`width`, `height`, `min/max-width`, `min/max-height`) y desbordamiento (`overflow-x`, `overflow-y`, `auto`, `hidden`).
- **Teoría:** [Modulo 2 - Box Model y Dimensionamiento.md](./Modulo%202%20-%20Box%20Model%20y%20Dimensionamiento/Modulo%202%20-%20Box%20Model%20y%20Dimensionamiento.md)
- **Ejercicios Prácticos:**
  - [01_box_sizing_y_margenes.html](./Modulo%202%20-%20Box%20Model%20y%20Dimensionamiento/01_box_sizing_y_margenes.html) — Control de anchos reales con `border-box` y resolución de colapso de márgenes verticales.
  - [02_dimensiones_y_overflow.html](./Modulo%202%20-%20Box%20Model%20y%20Dimensionamiento/02_dimensiones_y_overflow.html) — Contenedores scrollables y límites con `min-width` y `max-width`.

---

### 🔹 [Módulo 3: Bordes, Contornos y Sombras](./Modulo%203%20-%20Bordes%20Contornos%20y%20Sombras/Modulo%203%20-%20Bordes%20Contornos%20y%20Sombras.md)
Delimitación visual y relieve: bordes individuales (`border-width`, `border-style`, `border-color`), esquinas redondeadas (`border-radius`, píldoras y círculos), contornos accesibles (`outline`, `outline-offset`) y sombreados tridimensionales con `box-shadow` e `inset`.
- **Teoría:** [Modulo 3 - Bordes Contornos y Sombras.md](./Modulo%203%20-%20Bordes%20Contornos%20y%20Sombras/Modulo%203%20-%20Bordes%20Contornos%20y%20Sombras.md)
- **Ejercicios Prácticos:**
  - [01_bordes_y_border_radius.html](./Modulo%203%20-%20Bordes%20Contornos%20y%20Sombras/01_bordes_y_border_radius.html) — Tarjetas con bordes diferenciados y avatares redondeados.
  - [02_outline_accesible_y_box_shadow.html](./Modulo%203%20-%20Bordes%20Contornos%20y%20Sombras/02_outline_accesible_y_box_shadow.html) — Anillos de enfoque para inputs y sombras de elevación con `box-shadow`.

---

### 🔹 [Módulo 4: Tipografía, Fuentes y Estilos de Texto](./Modulo%204%20-%20Tipografia%20Fuentes%20y%20Estilos%20de%20Texto/Modulo%204%20-%20Tipografia%20Fuentes%20y%20Estilos%20de%20Texto.md)
El arte del texto legible: `font-family`, `@font-face`, `font-size`, `font-weight`, `line-height`, `letter-spacing`, alineación (`text-align`), transformación (`text-transform`), decoración (`text-decoration`), sombras tipográficas (`text-shadow`) y truncado de texto con `text-overflow: ellipsis`.
- **Teoría:** [Modulo 4 - Tipografia Fuentes y Estilos de Texto.md](./Modulo%204%20-%20Tipografia%20Fuentes%20y%20Estilos%20de%20Texto/Modulo%204%20-%20Tipografia%20Fuentes%20y%20Estilos%20de%20Texto.md)
- **Ejercicios Prácticos:**
  - [01_formato_de_texto_y_espaciado.html](./Modulo%204%20-%20Tipografia%20Fuentes%20y%20Estilos%20de%20Texto/01_formato_de_texto_y_espaciado.html) — Jerarquía tipográfica con espaciado entre letras e interlineado óptimo.
  - [02_sombras_de_texto_y_truncado.html](./Modulo%204%20-%20Tipografia%20Fuentes%20y%20Estilos%20de%20Texto/02_sombras_de_texto_y_truncado.html) — Efectos de texto con `text-shadow` y truncado de una sola línea con puntos suspensivos.

---

### 🔹 [Módulo 5: Colores, Fondos y Degradados](./Modulo%205%20-%20Colores%20Fondos%20y%20Degradados/Modulo%205%20-%20Colores%20Fondos%20y%20Degradados.md)
Sistemas de color modernos (HEX, RGB, HSL, canal alfa de opacidad) y propiedades avanzadas de fondo: `background-color`, `background-image`, `background-repeat`, `background-position`, `background-size: cover|contain`, `background-clip` y degradados con `linear-gradient` y `radial-gradient`.
- **Teoría:** [Modulo 5 - Colores Fondos y Degradados.md](./Modulo%205%20-%20Colores%20Fondos%20y%20Degradados/Modulo%205%20-%20Colores%20Fondos%20y%20Degradados.md)
- **Ejercicios Prácticos:**
  - [01_fondos_y_tamano_de_imagen.html](./Modulo%205%20-%20Colores%20Fondos%20y%20Degradados/01_fondos_y_tamano_de_imagen.html) — Fondos hero con `cover`, centrado y sin repetición.
  - [02_degradados_y_opacidad.html](./Modulo%205%20-%20Colores%20Fondos%20y%20Degradados/02_degradados_y_opacidad.html) — Botones y tarjetas con degradados lineales modernos y transparencias rgba/hsla.

---

### 🔹 [Módulo 6: Posicionamiento y Flujo Normal](./Modulo%206%20-%20Posicionamiento%20y%20Flujo%20Normal/Modulo%206%20-%20Posicionamiento%20y%20Flujo%20Normal.md)
Ubicación de elementos en el espacio: `display` (`block`, `inline`, `inline-block`, `none`), la propiedad `position` (`static`, `relative`, `absolute`, `fixed`, `sticky`), coordenadas (`top`, `right`, `bottom`, `left`) y control de capas con `z-index`.
- **Teoría:** [Modulo 6 - Posicionamiento y Flujo Normal.md](./Modulo%206%20-%20Posicionamiento%20y%20Flujo%20Normal/Modulo%206%20-%20Posicionamiento%20y%20Flujo%20Normal.md)
- **Ejercicios Prácticos:**
  - [01_posicionamiento_relativo_y_absoluto.html](./Modulo%206%20-%20Posicionamiento%20y%20Flujo%20Normal/01_posicionamiento_relativo_y_absoluto.html) — Insignias flotantes (*badges*) sobre tarjetas con contenedor relativo.
  - [02_fixed_sticky_y_zindex.html](./Modulo%206%20-%20Posicionamiento%20y%20Flujo%20Normal/02_fixed_sticky_y_zindex.html) — Barra de navegación fija y encabezados pegajosos (`sticky`) con apilamiento `z-index`.

---

### 🔹 [Módulo 7: Flexbox (Diseño Unidimensional)](./Modulo%207%20-%20Flexbox%20Diseno%20Unidimensional/Modulo%207%20-%20Flexbox%20Diseno%20Unidimensional.md)
El estándar para alinear componentes: contenedor `display: flex`, dirección (`flex-direction`), ajuste en varias líneas (`flex-wrap`), alineación en eje principal (`justify-content`), eje secundario (`align-items`, `align-content`), separación limpia con `gap` y propiedades de los hijos (`flex-grow`, `flex-shrink`, `flex-basis`, `align-self`, `order`).
- **Teoría:** [Modulo 7 - Flexbox Diseno Unidimensional.md](./Modulo%207%20-%20Flexbox%20Diseno%20Unidimensional/Modulo%207%20-%20Flexbox%20Diseno%20Unidimensional.md)
- **Ejercicios Prácticos:**
  - [01_flexbox_alineacion_y_distribucion.html](./Modulo%207%20-%20Flexbox%20Diseno%20Unidimensional/01_flexbox_alineacion_y_distribucion.html) — Barras de navegación horizontales perfectamente espaciadas y centrado absoluto.
  - [02_flex_grow_shrink_y_wrap.html](./Modulo%207%20-%20Flexbox%20Diseno%20Unidimensional/02_flex_grow_shrink_y_wrap.html) — Tarjetas responsivas que se envuelven automáticamente con `flex-wrap` y `gap`.

---

### 🔹 [Módulo 8: CSS Grid (Diseño Bidimensional)](./Modulo%208%20-%20CSS%20Grid%20Diseno%20Bidimensional/Modulo%208%20-%20CSS%20Grid%20Diseno%20Bidimensional.md)
Maquetación de cuadrículas completas: `display: grid`, definición de pistas (`grid-template-columns`, `grid-template-rows`), unidad flexible `fr`, función `repeat()` y `minmax()`, espaciado con `gap`, colocación de elementos (`grid-column`, `grid-row`) y áreas con nombre (`grid-template-areas`).
- **Teoría:** [Modulo 8 - CSS Grid Diseno Bidimensional.md](./Modulo%208%20-%20CSS%20Grid%20Diseno%20Bidimensional/Modulo%208%20-%20CSS%20Grid%20Diseno%20Bidimensional.md)
- **Ejercicios Prácticos:**
  - [01_grid_basico_y_pistas_fr.html](./Modulo%208%20-%20CSS%20Grid%20Diseno%20Bidimensional/01_grid_basico_y_pistas_fr.html) — Galería de imágenes en cuadrícula responsiva con `repeat(auto-fit, minmax(...))`.
  - [02_grid_template_areas_layout.html](./Modulo%208%20-%20CSS%20Grid%20Diseno%20Bidimensional/02_grid_template_areas_layout.html) — Layout de dashboard de aplicación completo usando nombres de áreas semánticas.

---

### 🔹 [Módulo 9: Pseudo-clases y Pseudo-elementos](./Modulo%209%20-%20Pseudo-clases%20y%20Pseudo-elementos/Modulo%209%20-%20Pseudo-clases%20y%20Pseudo-elementos.md)
Selección de estados y contenido generado: pseudo-clases de interacción (`:hover`, `:focus`, `:active`), de estado (`:checked`, `:disabled`, `:target`), estructurales (`:first-child`, `:last-child`, `:nth-child(even|odd|An+B)`, `:not()`, `:root`) y pseudo-elementos (`::before`, `::after` con `content`, `::selection`, `::placeholder`).
- **Teoría:** [Modulo 9 - Pseudo-clases y Pseudo-elementos.md](./Modulo%209%20-%20Pseudo-clases%20y%20Pseudo-elementos/Modulo%209%20-%20Pseudo-clases%20y%20Pseudo-elementos.md)
- **Ejercicios Prácticos:**
  - [01_pseudo_clases_interaccion_y_estructura.html](./Modulo%209%20-%20Pseudo-clases%20y%20Pseudo-elementos/01_pseudo_clases_interaccion_y_estructura.html) — Botones interactivos con hover/focus y tablas cebradas con `:nth-child(even)`.
  - [02_pseudo_elementos_before_y_after.html](./Modulo%209%20-%20Pseudo-clases%20y%20Pseudo-elementos/02_pseudo_elementos_before_y_after.html) — Badges decorativos y comillas tipográficas con `::before` y `::after`.

---

### 🔹 [Módulo 10: Transiciones, Transformaciones y Animaciones](./Modulo%2010%20-%20Transiciones%20Transformaciones%20y%20Animaciones/Modulo%2010%20-%20Transiciones%20Transformaciones%20y%20Animaciones.md)
Movimiento y microinteracciones en la interfaz: `transition` (`property`, `duration`, `timing-function`, `delay`), transformaciones 2D/3D con `transform` (`translate`, `rotate`, `scale`, `skew`), `@keyframes` y la propiedad `animation` (`duration`, `iteration-count`, `fill-mode`, `direction`).
- **Teoría:** [Modulo 10 - Transiciones Transformaciones y Animaciones.md](./Modulo%2010%20-%20Transiciones%20Transformaciones%20y%20Animaciones/Modulo%2010%20-%20Transiciones%20Transformaciones%20y%20Animaciones.md)
- **Ejercicios Prácticos:**
  - [01_transiciones_suaves_y_transforms.html](./Modulo%2010%20-%20Transiciones%20Transformaciones%20y%20Animaciones/01_transiciones_suaves_y_transforms.html) — Efectos de hover suaves con escalado y rotación sobre botones y tarjetas.
  - [02_keyframes_y_animaciones_continuas.html](./Modulo%2010%20-%20Transiciones%20Transformaciones%20y%20Animaciones/02_keyframes_y_animaciones_continuas.html) — Spinner de carga infinito y notificación pulsante con `@keyframes`.

---

## ⚡ Cómo Practicar

1. Cada ejercicio es un archivo `.html` con su propio bloque `<style>` para escribir tus reglas CSS a mano.
2. Abre el archivo en tu navegador con doble clic o desde el **Practice Hub** (`http://localhost:3000`) con el botón **"↗️ Abrir en Navegador"**.
3. Resuelve los retos indicados en los comentarios `/* TODO: */`.
4. La **Suite de Validación Automática en vivo** inspecciona las reglas calculadas mediante `getComputedStyle()` y las hojas de estilo del documento:
   - `✔ RETO X.X ...` en verde cuando la propiedad CSS cumple con la regla.
   - `❌ RETO X.X ...` en rojo con una pista descriptiva del selector o valor esperado.
