# 📖 Módulo 9: Manipulación del DOM (Document Object Model)

El DOM es la representación estructurada en árbol del documento HTML que permite a JavaScript seleccionar, crear, alterar o eliminar elementos visuales de la página.

---

## 1. Selección de Elementos
- Selectores modernos:
  - `document.querySelector(".clase")`: Primer elemento coincidente.
  - `document.querySelectorAll("div.tarjeta")`: Devuelve un `NodeList` iterable con todos los coincidentes.
- Clásicos: `document.getElementById("id")`, `document.getElementsByClassName("clase")`.

---

## 2. Modificación de Contenido y Atributos
- Contenido:
  - `element.textContent`: Texto puro (seguro, previene inyección XSS).
  - `element.innerHTML`: Contenido interpretando etiquetas HTML.
- Atributos:
  - `element.setAttribute("src", "imagen.png")` / `element.getAttribute("src")`.
  - Atributos directos: `input.value`, `button.disabled = true`.
  - Atributos `data-*`: `element.dataset.usuarioId`.

---

## 3. Manipulación de Estilos y Clases CSS
- El objeto `classList`:
  - `element.classList.add("activo")`
  - `element.classList.remove("oculto")`
  - `element.classList.toggle("dark-mode")`
  - `element.classList.contains("activo")`
- Estilos inline: `element.style.backgroundColor = "#ff0000";`.

---

## 4. Creación, Inserción y Eliminación de Nodos
- Creación: `const nuevoDiv = document.createElement("div")`.
- Inserción moderna: `padre.append(hijo)`, `padre.prepend(hijo)`.
- Eliminación: `elemento.remove()`.

---

## 🛠️ Ejercicios Prácticos del Módulo (1 a 1 por tema)

1. [01_selectores_dom.js](./01_selectores_dom.js):
   - **1.1** Simulación de árbol DOM y búsqueda por ID / selector.
   - **1.2** Recorrido de listas de nodos (`querySelectorAll`).

2. [02_modificacion_contenido_y_atributos.js](./02_modificacion_contenido_y_atributos.js):
   - **2.1** Asignación con `textContent` y generación con `innerHTML`.
   - **2.2** Gestión de atributos y propiedades de formulario (`value`, `disabled`).

3. [03_clases_y_estilos.js](./03_clases_y_estilos.js):
   - **3.1** Operaciones con `classList.add()`, `.remove()`, `.toggle()`.

4. [04_creacion_e_insercion_nodos.js](./04_creacion_e_insercion_nodos.js):
   - **4.1** Creación dinámica de elementos con `createElement`.
   - **4.2** Inserción en lista con `append()` y renderizado secuencial.

---

### 💻 Para probar cada archivo en tu terminal:
```bash
node "JavaScript/Modulo 9 - Manipulacion del DOM/01_selectores_dom.js"
node "JavaScript/Modulo 9 - Manipulacion del DOM/02_modificacion_contenido_y_atributos.js"
node "JavaScript/Modulo 9 - Manipulacion del DOM/03_clases_y_estilos.js"
node "JavaScript/Modulo 9 - Manipulacion del DOM/04_creacion_e_insercion_nodos.js"
```
