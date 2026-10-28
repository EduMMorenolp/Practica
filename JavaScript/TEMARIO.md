# 📚 Roadmap Integral y Exhaustivo de JavaScript (W3Schools & OverAPI)

> Temario completo y enciclopédico de JavaScript: desde la sintaxis básica, objetos nativos globales (`Array`, `String`, `Math`, `Date`, `RegExp`), APIs del navegador (`Window`, `DOM`, `Events`, `Storage`, `Canvas`), JavaScript Moderno (ES6-ESNext) hasta asincronismo y APIs avanzadas.

---

## 🧭 Índice General de Módulos

1. [Módulo 1: Fundamentos y Sintaxis Básica](#módulo-1-fundamentos-y-sintaxis-básica)
2. [Módulo 2: Control de Flujo y Estructuras Condicionales](#módulo-2-control-de-flujo-y-estructuras-condicionales)
3. [Módulo 3: Funciones y Modularización](#módulo-3-funciones-y-modularización)
4. [Módulo 4: Cadenas de Texto y Expresiones Regulares (String & RegExp)](#módulo-4-cadenas-de-texto-y-expresiones-regulares-string--regexp)
5. [Módulo 5: Números, Matemáticas y Fechas (Number, Math & Date)](#módulo-5-números-matemáticas-y-fechas-number-math--date)
6. [Módulo 6: Arrays y Colecciones Iterables (Array, Set & Map)](#módulo-6-arrays-y-colecciones-iterables-array-set--map)
7. [Módulo 7: Objetos, Prototipos y Clases (Object & OOP)](#módulo-7-objetos-prototipos-y-clases-object--oop)
8. [Módulo 8: El Objeto Global del Navegador (BOM - Browser Object Model)](#módulo-8-el-objeto-global-del-navegador-bom---browser-object-model)
9. [Módulo 9: Manipulación del DOM (Document Object Model)](#módulo-9-manipulación-del-dom-document-object-model)
10. [Módulo 10: Eventos del DOM y Manejo de Interacción](#módulo-10-eventos-del-dom-y-manejo-de-interacción)
11. [Módulo 11: Asincronismo, Timers y Fetch API](#módulo-11-asincronismo-timers-y-fetch-api)
12. [Módulo 12: Gráficos con HTML5 Canvas API](#módulo-12-gráficos-con-html5-canvas-api)
13. [Módulo 13: Almacenamiento Web y APIs Modernas del Navegador](#módulo-13-almacenamiento-web-y-apis-modernas-del-navegador)
14. [Módulo 14: Proyectos Prácticos Integradores de Código a Mano](#módulo-14-proyectos-prácticos-integradores-de-código-a-mano)

---

## Módulo 1: Fundamentos y Sintaxis Básica
*Ruta: [`Modulo 1/`](./Modulo%201/)*

- **Teoría del Módulo**: [Modulo.md](./Modulo%201/Modulo.md)
- **1. Salidas y Ejecución**: [01_salidas.js](./Modulo%201/01_salidas.js)
  - `console.log()`, `console.info()`, `console.warn()`, `console.error()`, `console.table()`, `console.time()`.
- **2. Variables y Constantes**: [02_variables_y_constantes.js](./Modulo%201/02_variables_y_constantes.js)
  - `const` (inmutabilidad de identificador), `let` (alcance de bloque), `var` (alcance de función y *hoisting*).
- **3. Tipos de Datos Primitivos**: [03_tipos_de_datos.js](./Modulo%201/03_tipos_de_datos.js)
  - `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.
  - Operador `typeof` y la peculiaridad de `typeof null === "object"`.
  - Coerción implícita vs conversión explícita (`Number()`, `String()`, `Boolean()`).
  - Valores *truthy* y *falsy*.
- **4. Operadores**: [04_operadores.js](./Modulo%201/04_operadores.js)
  - **4.1 Aritméticos**: Suma (`+`), resta (`-`), multiplicación (`*`), división (`/`), módulo o resto (`%`), exponente (`**`).
  - **4.2 Asignación**: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`.
  - **4.3 Comparación**: Igualdad estricta (`===`, `!==`) vs débil (`==`, `!=`), relacionales (`>`, `<`, `>=`, `<=`).
  - **4.4 Lógicos**: AND (`&&`), OR (`||`), NOT (`!`). Cortocircuito (*short-circuit evaluation*).
  - **4.5 Nullish Coalescing y Encadenamiento Opcional**: `??` vs `||`, encadenamiento opcional (`?.`).

---

## Módulo 2: Control de Flujo y Estructuras Condicionales
*Ruta: [`Modulo 2/`](./Modulo%202/)*

- **Teoría del Módulo**: [Modulo.md](./Modulo%202/Modulo.md)
- **1. Condicionales If / Else**: [01_condicionales_if_else.js](./Modulo%202/01_condicionales_if_else.js)
  - `if`, `else if`, `else`, condiciones compuestas y buenas prácticas.
- **2. Operador Ternario**: [02_operador_ternario.js](./Modulo%202/02_operador_ternario.js)
  - Sintaxis: `condicion ? exp1 : exp2`, salidas directas y formateo condicional.
- **3. Estructura Switch / Case**: [03_switch_case.js](./Modulo%202/03_switch_case.js)
  - Casos específicos, obligatoriedad de `break`, cláusula `default` y agrupación intencional.
- **4. Bucles While y Do...While**: [04_bucles_while_dowhile.js](./Modulo%202/04_bucles_while_dowhile.js)
  - Condición previa (`while`), garantía de ejecución mínima (`do...while`).
- **5. Bucle For Clásico y Control de Flujo**: [05_bucle_for_break_continue.js](./Modulo%202/05_bucle_for_break_continue.js)
  - `for (inicialización; condición; incremento)`, `continue` (salto de iteración) y `break` (interrupción).

---

## Módulo 3: Funciones y Modularización

- **3.1 Declaración y Expresiones de Función**
  - Declaración tradicional (`function sumar(...) { ... }`) y *hoisting*.
  - Expresión de función anónima y nombrada (`const sumar = function(...) { ... }`).
- **3.2 Parámetros, Argumentos y Retorno**
  - Parámetros por defecto (`function saludo(nombre = "Invitado")`).
  - El objeto implícito `arguments`.
  - Parámetros rest (`...args`).
  - Retorno de valores con `return`.
- **3.3 Funciones Flecha (Arrow Functions - ES6)**
  - Sintaxis concisa, retorno implícito (`x => x * 2`).
  - Diferencias fundamentales con funciones tradicionales: ausencia de `this` propio (lexical `this`), ausencia de `arguments`.
- **3.4 Alcance (Scope), Closures y Contexto (this)**
  - Scope global, de módulo, de función y de bloque.
  - Concepto y casos de uso de **Closures** (funciones que recuerdan su entorno léxico).
  - Funciones de llamada inmediata (IIFE).
  - Métodos de función: `.call()`, `.apply()`, `.bind()`.

---

## Módulo 4: Cadenas de Texto y Expresiones Regulares (String & RegExp)

- **4.1 Propiedades y Métodos de String**
  - Propiedad `.length`.
  - Acceso por índice: `str[0]`, `charAt()`, `charCodeAt()`, `fromCharCode()`.
  - Búsqueda: `indexOf()`, `lastIndexOf()`, `includes()`, `startsWith()`, `endsWith()`.
  - Extracción: `slice()`, `substring()`, `substr()`.
  - Transformación: `toUpperCase()`, `toLowerCase()`, `trim()`, `trimStart()`, `trimEnd()`, `repeat()`, `padStart()`, `padEnd()`.
  - Reemplazo y división: `replace()`, `replaceAll()`, `split()`, `concat()`.
- **4.2 Template Literals (ES6)**
  - Interpolación `${expresion}`.
  - Cadenas multilínea y *Tagged Templates*.
- **4.3 Expresiones Regulares (RegExp)**
  - Creación literal (`/patron/flags`) vs constructor (`new RegExp()`).
  - Modificadores (*flags*): `i` (ignore case), `g` (global), `m` (multiline), `u` (unicode), `s` (dotAll).
  - Clases de caracteres y corchetes: `[abc]`, `[^abc]`, `[0-9]`, `[a-z]`.
  - Metacaracteres: `.`, `\d`, `\D`, `\w`, `\W`, `\s`, `\S`, `\b`, `\B`.
  - Cuantificadores: `+`, `*`, `?`, `{n}`, `{n,m}`, `{n,}`, `^`, `$`.
  - Métodos de RegExp y String: `test()`, `exec()`, `match()`, `matchAll()`, `search()`.

---

## Módulo 5: Números, Matemáticas y Fechas (Number, Math & Date)

- **5.1 Objeto Number y Métodos Globales**
  - Constantes de Number: `MAX_VALUE`, `MIN_VALUE`, `POSITIVE_INFINITY`, `NEGATIVE_INFINITY`, `NaN`, `EPSILON`.
  - Métodos de instancia: `toFixed()`, `toPrecision()`, `toExponential()`, `toString(radix)`.
  - Métodos estáticos: `Number.isInteger()`, `Number.isNaN()`, `Number.isFinite()`.
  - Funciones globales: `parseInt()`, `parseFloat()`, `isNaN()`, `isFinite()`.
- **5.2 Objeto Math (Funciones Matemáticas)**
  - Constantes: `Math.PI`, `Math.E`, `Math.SQRT2`, `Math.LN10`.
  - Redondeo: `Math.round()`, `Math.floor()`, `Math.ceil()`, `Math.trunc()`.
  - Utilidades: `Math.abs()`, `Math.min()`, `Math.max()`, `Math.pow()`, `Math.sqrt()`.
  - Aleatorios: `Math.random()` y generación de rangos enteros `[min, max]`.
  - Trigonometría y logaritmos: `sin()`, `cos()`, `tan()`, `log()`, `exp()`.
- **5.3 Objeto Date (Manejo de Fechas y Tiempos)**
  - Instanciación: `new Date()`, `Date.now()`, `Date.parse()`, `Date.UTC()`.
  - Getters: `getFullYear()`, `getMonth()` (0-11), `getDate()`, `getDay()` (0-6), `getHours()`, `getMinutes()`, `getSeconds()`, `getTime()`.
  - Setters: `setFullYear()`, `setMonth()`, `setDate()`, etc.
  - Equivalentes UTC: `getUTCFullYear()`, `getUTCHours()`, etc.
  - Formateo: `toISOString()`, `toDateString()`, `toLocaleDateString()`, `toLocaleTimeString()`, `toLocaleString()`.

---

## Módulo 6: Arrays y Colecciones Iterables (Array, Set & Map)

- **6.1 Propiedades y Métodos Mutables de Array**
  - Propiedad `.length` y mutación directa.
  - Añadir y quitar elementos: `push()`, `pop()`, `shift()`, `unshift()`.
  - Reordenar e inversión: `reverse()`, `sort()` (con función comparadora `(a, b) => a - b`).
  - Eliminación e inserción combinada: `splice(inicio, conteo, ...elementos)`.
- **6.2 Métodos Inmutables y de Transformación**
  - Extracción y unión: `slice()`, `concat()`, `join()`.
  - Búsqueda: `indexOf()`, `lastIndexOf()`, `includes()`.
  - Conversión: `Array.from()`, `Array.isArray()`, `Array.of()`.
- **6.3 Métodos de Iteración de Orden Superior (Higher-Order Functions)**
  - `forEach(callback)`: Recorrido sin retorno.
  - `map(callback)`: Transformación y mapeo de arrays.
  - `filter(callback)`: Filtrado por predicado booleano.
  - `reduce(callback, inicial)` y `reduceRight()`: Reducción y acumuladores.
  - Búsqueda avanzada: `find()`, `findIndex()`, `findLast()`, `findLastIndex()`.
  - Validación y prueba: `some()`, `every()`.
  - Aplanado de matrices: `flat()`, `flatMap()`.
- **6.4 Desestructuración y Operador Spread en Arrays**
  - Desestructuración: `const [a, b, ...resto] = lista`.
  - Clonado y unión con spread: `const copia = [...original]`.
- **6.5 Nuevas Colecciones: Map, Set, WeakMap y WeakSet (ES6)**
  - `Set`: Colección de valores únicos (`add`, `has`, `delete`, `clear`, `size`).
  - `Map`: Colección de pares clave-valor de cualquier tipo (`set`, `get`, `has`, `delete`, `size`).
  - Bucle `for...of` y destructuración de iterables.

---

## Módulo 7: Objetos, Prototipos y Clases (Object & OOP)

- **7.1 Objetos Literales**
  - Creación, propiedades dinámicas (`obj[clave]`), notación abreviada (shorthand properties).
  - Métodos dentro de objetos y palabra reservada `this`.
  - Operador `delete` y operador `in`.
- **7.2 Métodos Estáticos de Object**
  - Inspección: `Object.keys()`, `Object.values()`, `Object.entries()`, `Object.fromEntries()`.
  - Copia y asignación: `Object.assign()`, spread operator `{ ...obj }`.
  - Inmutabilidad: `Object.freeze()`, `Object.seal()`, `Object.isFrozen()`.
  - Propiedades avanzadas: `Object.defineProperty()`, `getters` y `setters`.
- **7.3 Herencia Prototípica**
  - El prototipo (`__proto__`, `prototype`).
  - `Object.create()`, `Object.getPrototypeOf()`, `Object.setPrototypeOf()`.
  - Funciones constructoras y operador `new`.
- **7.4 Clases en JavaScript (ES6 OOP)**
  - Declaración `class`, método `constructor`.
  - Métodos de instancia vs métodos estáticos (`static`).
  - Propiedades y métodos privados (`#propiedadPrivada`).
  - Herencia con `extends` y llamada a la clase padre con `super()`.

---

## Módulo 8: El Objeto Global del Navegador (BOM - Browser Object Model)

- **8.1 El Objeto Window**
  - Propiedades del viewport: `innerHeight`, `innerWidth`, `outerHeight`, `outerWidth`.
  - Desplazamiento: `pageXOffset`, `pageYOffset` (`scrollX`, `scrollY`), `scrollTo()`, `scrollBy()`.
  - Diálogos del navegador: `alert()`, `confirm()`, `prompt()`.
  - Manipulación de ventanas: `open()`, `close()`, `print()`, `focus()`, `blur()`.
- **8.2 Navigator**
  - Propiedades: `userAgent`, `language`, `onLine`, `cookieEnabled`, `platform`.
  - Geolocalización básica y permisos (`navigator.geolocation`).
- **8.3 Screen**
  - Dimensiones de la pantalla del usuario: `width`, `height`, `availWidth`, `availHeight`, `colorDepth`.
- **8.4 Location**
  - Desglose de URL: `href`, `protocol`, `host`, `hostname`, `port`, `pathname`, `search`, `hash`.
  - Navegación programática: `assign()`, `replace()`, `reload()`.
- **8.5 History**
  - Navegación en el historial: `back()`, `forward()`, `go()`.
  - History API moderna: `pushState()`, `replaceState()`, evento `popstate`.

---

## Módulo 9: Manipulación del DOM (Document Object Model)

- **9.1 Selección y Consulta de Nodos**
  - Métodos clásicos: `getElementById()`, `getElementsByTagName()`, `getElementsByClassName()`, `getElementsByName()`.
  - Métodos modernos con selectores CSS: `querySelector()`, `querySelectorAll()`.
  - `NodeList` vs `HTMLCollection` (vivas vs estáticas).
- **9.2 Árbol de Nodos y Navegación**
  - Propiedades de jerarquía: `parentNode`, `parentElement`, `childNodes`, `children`, `firstChild`, `firstElementChild`, `lastChild`, `lastElementChild`, `nextSibling`, `nextElementSibling`, `previousSibling`, `previousElementSibling`.
  - Propiedades de nodo: `nodeType`, `nodeName`, `nodeValue`.
- **9.3 Creación, Inserción y Eliminación de Elementos**
  - Creación: `document.createElement()`, `document.createTextNode()`, `document.createDocumentFragment()`.
  - Inserción clásica: `appendChild()`, `insertBefore()`, `removeChild()`, `replaceChild()`.
  - Inserción moderna: `append()`, `prepend()`, `before()`, `after()`, `replaceWith()`, `remove()`.
  - Inserción adyacente: `insertAdjacentHTML()`, `insertAdjacentElement()`.
  - Clonado de nodos: `cloneNode(true/false)`.
- **9.4 Modificación de Contenido y Atributos**
  - Contenido: `textContent`, `innerText`, `innerHTML`, `outerHTML`.
  - Atributos: `getAttribute()`, `setAttribute()`, `hasAttribute()`, `removeAttribute()`.
  - Atributos directos: `id`, `className`, `src`, `href`, `value`, `disabled`.
  - Dataset personalizado: `element.dataset.prop`.
- **9.5 Manipulación de Estilos y Clases**
  - Estilos en línea: `element.style.propiedad`.
  - El objeto `classList`: `add()`, `remove()`, `toggle()`, `contains()`, `replace()`.
  - Cálculo de estilos: `window.getComputedStyle(element)`.

---

## Módulo 10: Eventos del DOM y Manejo de Interacción

- **10.1 Registro y Gestión de Eventos**
  - `addEventListener(tipo, handler, opciones)`.
  - `removeEventListener(tipo, handler)`.
  - Opciones de listener: `capture`, `once`, `passive`.
- **10.2 El Objeto Event (Event Interface)**
  - Propiedades clave: `e.target` vs `e.currentTarget`, `e.type`, `e.timeStamp`.
  - Métodos de control: `e.preventDefault()`, `e.stopPropagation()`, `e.stopImmediatePropagation()`.
  - Ciclo de eventos: Capturing Phase (captura), Target Phase, Bubbling Phase (burbujeo).
  - Patrón de **Delegación de Eventos** (*Event Delegation*).
- **10.3 Eventos de Ratón y Puntero (Mouse & Pointer Events)**
  - `click`, `dblclick`, `mousedown`, `mouseup`, `mousemove`, `mouseover`, `mouseout`, `mouseenter`, `mouseleave`.
  - Coordenadas: `clientX/Y`, `pageX/Y`, `screenX/Y`, `offsetX/Y`.
  - Teclas modificadoras: `altKey`, `ctrlKey`, `shiftKey`, `metaKey`.
- **10.4 Eventos de Teclado (Keyboard Events)**
  - `keydown`, `keyup`, `keypress`.
  - Propiedades: `e.key`, `e.code`, control de combinaciones de teclas.
- **10.5 Eventos de Formulario**
  - `submit`, `input`, `change`, `focus`, `blur`, `reset`, `select`.
  - Validación de formularios con JS.
- **10.6 Eventos de Ventana y Documento**
  - Ciclo de carga: `DOMContentLoaded`, `load`, `beforeunload`, `unload`.
  - Interacción: `resize`, `scroll`.
- **10.7 Eventos Personalizados (Custom Events)**
  - `new CustomEvent('miEvento', { detail: { ... } })` y `dispatchEvent()`.

---

## Módulo 11: Asincronismo, Timers y Fetch API

- **11.1 Fundamentos de Asincronismo y el Event Loop**
  - Pila de llamadas (*Call Stack*), Cola de Tareas (*Task/Callback Queue*) y Microtareas (*Microtask Queue*).
  - Temporizadores: `setTimeout()`, `clearTimeout()`, `setInterval()`, `clearInterval()`.
  - `requestAnimationFrame()` para animaciones suaves.
- **11.2 Callbacks y Callback Hell**
  - Patrones de callbacks y pirámide de la perdición.
- **11.3 Promesas (Promise Interface)**
  - Estados: *pending*, *fulfilled*, *rejected*.
  - Consumo: `.then()`, `.catch()`, `.finally()`.
  - Combinadores estáticos: `Promise.all()`, `Promise.allSettled()`, `Promise.race()`, `Promise.any()`, `Promise.resolve()`, `Promise.reject()`.
- **11.4 Async / Await**
  - Sintaxis de funciones asíncronas con `async` y `await`.
  - Manejo de excepciones con bloques `try...catch...finally`.
  - Ejecución concurrente vs secuencial con `await`.
- **11.5 Consumo de Datos con Fetch API**
  - Peticiones HTTP básicas: GET, POST, PUT, DELETE, PATCH.
  - Configuración de cabeceras (`headers: { 'Content-Type': 'application/json' }`).
  - Manejo del objeto `Response`: `.json()`, `.text()`, `.blob()`, `response.ok`, `response.status`.
  - Cancelación de peticiones con `AbortController`.

---

## Módulo 12: Gráficos con HTML5 Canvas API

- **12.1 Introducción al Elemento Canvas y Contexto 2D**
  - Elemento `<canvas width="800" height="600">`.
  - Obtención de contexto: `const ctx = canvas.getContext('2d')`.
- **12.2 Dibujo de Formas Básicas y Trazos (Paths)**
  - Rectángulos: `fillRect()`, `strokeRect()`, `clearRect()`.
  - Rutas: `beginPath()`, `closePath()`, `moveTo(x, y)`, `lineTo(x, y)`, `stroke()`, `fill()`.
  - Arcos y círculos: `arc(x, y, radio, startAngle, endAngle, anticlockwise)`.
  - Curvas de Bézier: `quadraticCurveTo()`, `bezierCurveTo()`.
- **12.3 Estilos, Colores y Gradientes**
  - Colores: `fillStyle`, `strokeStyle`.
  - Estilos de línea: `lineWidth`, `lineCap`, `lineJoin`, `setLineDash()`.
  - Gradientes: `createLinearGradient()`, `createRadialGradient()`, `addColorStop()`.
  - Sombras: `shadowColor`, `shadowBlur`, `shadowOffsetX`, `shadowOffsetY`.
- **12.4 Texto e Imágenes en Canvas**
  - Texto: `font`, `textAlign`, `textBaseline`, `fillText()`, `strokeText()`, `measureText()`.
  - Dibujo de imágenes: `drawImage(img, dx, dy)`, recorte y escalado.
- **12.5 Transformaciones y Manipulación de Píxeles**
  - Transformaciones: `translate()`, `rotate()`, `scale()`, `save()`, `restore()`.
  - Píxeles: `createImageData()`, `getImageData()`, `putImageData()`.

---

## Módulo 13: Almacenamiento Web y APIs Modernas del Navegador

- **13.1 Web Storage API**
  - `localStorage` (persistencia a largo plazo).
  - `sessionStorage` (persistencia por pestaña).
  - Métodos: `setItem(key, value)`, `getItem(key)`, `removeItem(key)`, `clear()`, `key(index)`, `length`.
  - Serialización con `JSON.stringify()` y `JSON.parse()`.
  - Evento `storage` entre pestañas.
- **13.2 Cookies en JavaScript**
  - Lectura y escritura con `document.cookie`.
  - Parámetros: `expires`, `max-age`, `path`, `SameSite`, `Secure`.
- **13.3 IndexedDB (Persistencia Estructurada)**
  - Concepto de base de datos local NoSQL para grandes volúmenes de datos.
- **13.4 Otras Web APIs Clave**
  - Clipboard API (`navigator.clipboard.writeText`).
  - Intersection Observer API (detección de elementos en viewport y lazy loading).
  - Audio API (`new Audio()`, síntesis de voz con `speechSynthesis`).

---

## Módulo 14: Proyectos Prácticos Integradores de Código a Mano

Proyectos progresivos para ensamblar todas las piezas:

1. **Calculadora Interactiva Completa**: Control de flujo, funciones, Math y eventos.
2. **Tablero Kanban / To-Do App con LocalStorage**: Arrays de objetos, orden superior, renderizado dinámico del DOM y persistencia.
3. **Reproductor de Música / Dashboard del Clima (Weather App)**: Async/await, Fetch API a una API pública, manejo de errores y estados de carga.
4. **Mini Juego en 2D con Canvas (Pong / Snake)**: Bucles de juego con `requestAnimationFrame`, manejo de colisiones, teclado y renderizado gráfico continuo.
5. **Generador y Validador de Formularios con Expresiones Regulares**: Strings, RegExp, eventos de validación en tiempo real y accesibilidad.
