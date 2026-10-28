# 📚 Roadmap Integral y Exhaustivo de JavaScript (W3Schools & OverAPI)

> Temario completo y enciclopédico de JavaScript: desde la sintaxis básica, objetos nativos globales (`Array`, `String`, `Math`, `Date`, `RegExp`), APIs del navegador (`Window`, `DOM`, `Events`, `Storage`, `Canvas`), JavaScript Moderno (ES6-ESNext) hasta asincronismo y proyectos integradores.

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
*Ruta: [`Modulo 1 - Fundamentos y Sintaxis Basica/`](./Modulo%201%20-%20Fundamentos%20y%20Sintaxis%20Basica/)*

- **Teoría del Módulo**: [Modulo 1 - Fundamentos y Sintaxis Basica.md](./Modulo%201%20-%20Fundamentos%20y%20Sintaxis%20Basica/Modulo%201%20-%20Fundamentos%20y%20Sintaxis%20Basica.md)
- **1. Salidas y Ejecución**: [01_salidas.js](./Modulo%201%20-%20Fundamentos%20y%20Sintaxis%20Basica/01_salidas.js)
  - `console.log()`, `console.info()`, `console.warn()`, `console.error()`, `console.table()`, `console.time()`.
- **2. Variables y Constantes**: [02_variables_y_constantes.js](./Modulo%201%20-%20Fundamentos%20y%20Sintaxis%20Basica/02_variables_y_constantes.js)
  - `const` (inmutabilidad de identificador), `let` (alcance de bloque), `var` (alcance de función y *hoisting*).
- **3. Tipos de Datos Primitivos**: [03_tipos_de_datos.js](./Modulo%201%20-%20Fundamentos%20y%20Sintaxis%20Basica/03_tipos_de_datos.js)
  - `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, `bigint`.
  - Operador `typeof` y la peculiaridad de `typeof null === "object"`.
  - Coerción implícita vs conversión explícita (`Number()`, `String()`, `Boolean()`).
  - Valores *truthy* y *falsy*.
- **4. Operadores**: [04_operadores.js](./Modulo%201%20-%20Fundamentos%20y%20Sintaxis%20Basica/04_operadores.js)
  - **4.1 Aritméticos**: Suma (`+`), resta (`-`), multiplicación (`*`), división (`/`), módulo o resto (`%`), exponente (`**`).
  - **4.2 Asignación**: `=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`.
  - **4.3 Comparación**: Igualdad estricta (`===`, `!==`) vs débil (`==`, `!=`), relacionales (`>`, `<`, `>=`, `<=`).
  - **4.4 Lógicos**: AND (`&&`), OR (`||`), NOT (`!`). Cortocircuito (*short-circuit evaluation*).
  - **4.5 Nullish Coalescing y Encadenamiento Opcional**: `??` vs `||`, encadenamiento opcional (`?.`).

---

## Módulo 2: Control de Flujo y Estructuras Condicionales
*Ruta: [`Modulo 2 - Control de Flujo y Condicionales/`](./Modulo%202%20-%20Control%20de%20Flujo%20y%20Condicionales/)*

- **Teoría del Módulo**: [Modulo 2 - Control de Flujo y Condicionales.md](./Modulo%202%20-%20Control%20de%20Flujo%20y%20Condicionales/Modulo%202%20-%20Control%20de%20Flujo%20y%20Condicionales.md)
- **1. Condicionales If / Else**: [01_condicionales_if_else.js](./Modulo%202%20-%20Control%20de%20Flujo%20y%20Condicionales/01_condicionales_if_else.js)
  - `if`, `else if`, `else`, condiciones compuestas y buenas prácticas.
- **2. Operador Ternario**: [02_operador_ternario.js](./Modulo%202%20-%20Control%20de%20Flujo%20y%20Condicionales/02_operador_ternario.js)
  - Sintaxis: `condicion ? exp1 : exp2`, salidas directas y formateo condicional.
- **3. Estructura Switch / Case**: [03_switch_case.js](./Modulo%202%20-%20Control%20de%20Flujo%20y%20Condicionales/03_switch_case.js)
  - Casos específicos, obligatoriedad de `break`, cláusula `default` y agrupación intencional.
- **4. Bucles While y Do...While**: [04_bucles_while_dowhile.js](./Modulo%202%20-%20Control%20de%20Flujo%20y%20Condicionales/04_bucles_while_dowhile.js)
  - Condición previa (`while`), garantía de ejecución mínima (`do...while`).
- **5. Bucle For Clásico y Control de Flujo**: [05_bucle_for_break_continue.js](./Modulo%202%20-%20Control%20de%20Flujo%20y%20Condicionales/05_bucle_for_break_continue.js)
  - `for (inicialización; condición; incremento)`, `continue` (salto de iteración) y `break` (interrupción).

---

## Módulo 3: Funciones y Modularización
*Ruta: [`Modulo 3 - Funciones y Modularizacion/`](./Modulo%203%20-%20Funciones%20y%20Modularizacion/)*

- **Teoría del Módulo**: [Modulo 3 - Funciones y Modularizacion.md](./Modulo%203%20-%20Funciones%20y%20Modularizacion/Modulo%203%20-%20Funciones%20y%20Modularizacion.md)
- **1. Declaración y Expresiones de Función**: [01_declaracion_y_expresiones.js](./Modulo%203%20-%20Funciones%20y%20Modularizacion/01_declaracion_y_expresiones.js)
  - `function` tradicional, expresiones con `const`, comprobación de *hoisting*.
- **2. Parámetros, Argumentos y Retorno**: [02_parametros_y_retorno.js](./Modulo%203%20-%20Funciones%20y%20Modularizacion/02_parametros_y_retorno.js)
  - Parámetros por defecto, parámetros Rest (`...args`), salida limpia con *early return*.
- **3. Funciones Flecha (Arrow Functions - ES6)**: [03_funciones_flecha.js](./Modulo%203%20-%20Funciones%20y%20Modularizacion/03_funciones_flecha.js)
  - Retorno implícito de valores y objetos literales `() => ({})`, comportamiento léxico de `this`.
- **4. Alcance (Scope), Closures y Contexto (this)**: [04_scope_closures_y_contexto.js](./Modulo%203%20-%20Funciones%20y%20Modularizacion/04_scope_closures_y_contexto.js)
  - Scope chain, variables privadas protegidas por *closure*, manipulación con `.call()` y `.bind()`.

---

## Módulo 4: Cadenas de Texto y Expresiones Regulares (String & RegExp)
*Ruta: [`Modulo 4 - String y RegExp/`](./Modulo%204%20-%20String%20y%20RegExp/)*

- **Teoría del Módulo**: [Modulo 4 - String y RegExp.md](./Modulo%204%20-%20String%20y%20RegExp/Modulo%204%20-%20String%20y%20RegExp.md)
- **1. Propiedades y Métodos de String**: [01_metodos_string.js](./Modulo%204%20-%20String%20y%20RegExp/01_metodos_string.js)
  - `.length`, acceso por índice, búsqueda (`includes`, `indexOf`, `endsWith`), extracción (`slice`, `trim`) y división (`split`).
- **2. Template Literals (ES6)**: [02_template_literals.js](./Modulo%204%20-%20String%20y%20RegExp/02_template_literals.js)
  - Interpolación `${expresion}` y cadenas multilínea con backticks.
- **3. Expresiones Regulares (RegExp)**: [03_expresiones_regulares.js](./Modulo%204%20-%20String%20y%20RegExp/03_expresiones_regulares.js)
  - Validación con `.test()`, extracción con `.match()` y sustitución con `.replace()`.

---

## Módulo 5: Números, Matemáticas y Fechas (Number, Math & Date)
*Ruta: [`Modulo 5 - Numeros Matematicas y Fechas/`](./Modulo%205%20-%20Numeros%20Matematicas%20y%20Fechas/)*

- **Teoría del Módulo**: [Modulo 5 - Numeros Matematicas y Fechas.md](./Modulo%205%20-%20Numeros%20Matematicas%20y%20Fechas/Modulo%205%20-%20Numeros%20Matematicas%20y%20Fechas.md)
- **1. Objeto Number y Métodos**: [01_metodos_number.js](./Modulo%205%20-%20Numeros%20Matematicas%20y%20Fechas/01_metodos_number.js)
  - Formateo con `.toFixed(2)` y `.toPrecision()`, conversiones con `parseInt()` / `parseFloat()`, validación con `Number.isInteger()`.
- **2. Objeto Math**: [02_objeto_math.js](./Modulo%205%20-%20Numeros%20Matematicas%20y%20Fechas/02_objeto_math.js)
  - Redondeos (`round`, `floor`, `ceil`, `trunc`), extremos (`min`, `max`), potencias y aleatorios en rangos `[min, max]`.
- **3. Objeto Date**: [03_objeto_date.js](./Modulo%205%20-%20Numeros%20Matematicas%20y%20Fechas/03_objeto_date.js)
  - Getters de tiempo, cálculo de diferencias en días con timestamps y formateo localizado con `toLocaleDateString`.

---

## Módulo 6: Arrays y Colecciones Iterables (Array, Set & Map)
*Ruta: [`Modulo 6 - Arrays y Colecciones Iterables/`](./Modulo%206%20-%20Arrays%20y%20Colecciones%20Iterables/)*

- **Teoría del Módulo**: [Modulo 6 - Arrays y Colecciones Iterables.md](./Modulo%206%20-%20Arrays%20y%20Colecciones%20Iterables/Modulo%206%20-%20Arrays%20y%20Colecciones%20Iterables.md)
- **1. Métodos Mutables**: [01_metodos_mutables.js](./Modulo%206%20-%20Arrays%20y%20Colecciones%20Iterables/01_metodos_mutables.js)
  - Inserción y extracción (`push`, `pop`, `shift`, `unshift`), ordenamiento numérico `.sort((a,b) => a-b)` y `.splice()`.
- **2. Métodos Inmutables**: [02_metodos_inmutables.js](./Modulo%206%20-%20Arrays%20y%20Colecciones%20Iterables/02_metodos_inmutables.js)
  - Extracción con `.slice()`, unión con spread `[...]`, `.join()` y búsqueda con `.includes()`.
- **3. Orden Superior (Higher Order)**: [03_orden_superior.js](./Modulo%206%20-%20Arrays%20y%20Colecciones%20Iterables/03_orden_superior.js)
  - Transformación con `.map()`, filtrado con `.filter()`, acumuladores con `.reduce()` y búsqueda con `.find()`.
- **4. Colecciones Set y Map**: [04_set_y_map.js](./Modulo%206%20-%20Arrays%20y%20Colecciones%20Iterables/04_set_y_map.js)
  - Eliminación instantánea de duplicados con `Set` y diccionarios clave-valor arbitrarios con `Map`.

---

## Módulo 7: Objetos, Prototipos y Clases (Object & OOP)
*Ruta: [`Modulo 7 - Objetos Prototipos y Clases/`](./Modulo%207%20-%20Objetos%20Prototipos%20y%20Clases/)*

- **Teoría del Módulo**: [Modulo 7 - Objetos Prototipos y Clases.md](./Modulo%207%20-%20Objetos%20Prototipos%20y%20Clases/Modulo%207%20-%20Objetos%20Prototipos%20y%20Clases.md)
- **1. Objetos Literales**: [01_objetos_literales.js](./Modulo%207%20-%20Objetos%20Prototipos%20y%20Clases/01_objetos_literales.js)
  - Acceso por corchetes dinámicos, métodos con `this` y desestructuración.
- **2. Métodos de Object**: [02_metodos_object.js](./Modulo%207%20-%20Objetos%20Prototipos%20y%20Clases/02_metodos_object.js)
  - Inspección con `Object.keys()`, `values()`, `entries()` e inmutabilidad con `Object.freeze()`.
- **3. Clases y Herencia (ES6 OOP)**: [03_clases_y_herencia.js](./Modulo%207%20-%20Objetos%20Prototipos%20y%20Clases/03_clases_y_herencia.js)
  - Campos privados con `#`, constructores y herencia con `extends` y `super()`.

---

## Módulo 8: El Objeto Global del Navegador (BOM - Browser Object Model)
*Ruta: [`Modulo 8 - BOM Browser Object Model/`](./Modulo%208%20-%20BOM%20Browser%20Object%20Model/)*

- **Teoría del Módulo**: [Modulo 8 - BOM Browser Object Model.md](./Modulo%208%20-%20BOM%20Browser%20Object%20Model/Modulo%208%20-%20BOM%20Browser%20Object%20Model.md)
- **1. Objeto Window y GlobalThis**: [01_objeto_window.js](./Modulo%208%20-%20BOM%20Browser%20Object%20Model/01_objeto_window.js)
  - Viewport, métodos globales y `globalThis`.
- **2. Location y Parseo de URLs**: [02_location_y_history.js](./Modulo%208%20-%20BOM%20Browser%20Object%20Model/02_location_y_history.js)
  - Descomposición de URLs y query params con `URLSearchParams`.
- **3. Navigator y Entorno**: [03_navigator_y_screen.js](./Modulo%208%20-%20BOM%20Browser%20Object%20Model/03_navigator_y_screen.js)
  - Detección de idioma, conectividad online y dispositivo.

---

## Módulo 9: Manipulación del DOM (Document Object Model)
*Ruta: [`Modulo 9 - Manipulacion del DOM/`](./Modulo%209%20-%20Manipulacion%20del%20DOM/)*

- **Teoría del Módulo**: [Modulo 9 - Manipulacion del DOM.md](./Modulo%209%20-%20Manipulacion%20del%20DOM/Modulo%209%20-%20Manipulacion%20del%20DOM.md)
- **1. Selectores del DOM**: [01_selectores_dom.js](./Modulo%209%20-%20Manipulacion%20del%20DOM/01_selectores_dom.js)
  - `querySelector`, `querySelectorAll` y búsqueda por jerarquía.
- **2. Contenido y Atributos**: [02_modificacion_contenido_y_atributos.js](./Modulo%209%20-%20Manipulacion%20del%20DOM/02_modificacion_contenido_y_atributos.js)
  - `textContent`, `innerHTML`, `setAttribute` y propiedades de formulario.
- **3. Clases y Estilos**: [03_clases_y_estilos.js](./Modulo%209%20-%20Manipulacion%20del%20DOM/03_clases_y_estilos.js)
  - El objeto `classList` (`add`, `remove`, `toggle`, `contains`).
- **4. Creación e Inserción**: [04_creacion_e_insercion_nodos.js](./Modulo%209%20-%20Manipulacion%20del%20DOM/04_creacion_e_insercion_nodos.js)
  - `createElement` y ensamblado con `append()`.

---

## Módulo 10: Eventos del DOM y Manejo de Interacción
*Ruta: [`Modulo 10 - Eventos del DOM y Manejo de Interaccion/`](./Modulo%2010%20-%20Eventos%20del%20DOM%20y%20Manejo%20de%20Interaccion/)*

- **Teoría del Módulo**: [Modulo 10 - Eventos del DOM y Manejo de Interaccion.md](./Modulo%2010%20-%20Eventos%20del%20DOM%20y%20Manejo%20de%20Interaccion/Modulo%2010%20-%20Eventos%20del%20DOM%20y%20Manejo%20de%20Interaccion.md)
- **1. Event Listeners**: [01_event_listeners.js](./Modulo%2010%20-%20Eventos%20del%20DOM%20y%20Manejo%20de%20Interaccion/01_event_listeners.js)
  - Registro de escuchadores y control de ejecuciones únicas (`once`).
- **2. Objeto Event y Delegación**: [02_objeto_event_y_delegacion.js](./Modulo%2010%20-%20Eventos%20del%20DOM%20y%20Manejo%20de%20Interaccion/02_objeto_event_y_delegacion.js)
  - `preventDefault()`, `stopPropagation()` y patrón de delegación.
- **3. Teclado y Formularios**: [03_eventos_teclado_y_formulario.js](./Modulo%2010%20-%20Eventos%20del%20DOM%20y%20Manejo%20de%20Interaccion/03_eventos_teclado_y_formulario.js)
  - Atajos de teclado con `e.key` y validación en `submit`.

---

## Módulo 11: Asincronismo, Timers y Fetch API
*Ruta: [`Modulo 11 - Asincronismo Timers y Fetch API/`](./Modulo%2011%20-%20Asincronismo%20Timers%20y%20Fetch%20API/)*

- **Teoría del Módulo**: [Modulo 11 - Asincronismo Timers y Fetch API.md](./Modulo%2011%20-%20Asincronismo%20Timers%20y%20Fetch%20API/Modulo%2011%20-%20Asincronismo%20Timers%20y%20Fetch%20API.md)
- **1. Timers y Event Loop**: [01_timers_y_event_loop.js](./Modulo%2011%20-%20Asincronismo%20Timers%20y%20Fetch%20API/01_timers_y_event_loop.js)
  - Call stack y orden de colas de micro/macrotareas.
- **2. Promesas**: [02_promesas.js](./Modulo%2011%20-%20Asincronismo%20Timers%20y%20Fetch%20API/02_promesas.js)
  - `new Promise`, `.then()`, `.catch()` y combinador `Promise.all()`.
- **3. Async / Await y Fetch**: [03_async_await_y_fetch.js](./Modulo%2011%20-%20Asincronismo%20Timers%20y%20Fetch%20API/03_async_await_y_fetch.js)
  - Funciones `async`, manejo con `try/catch/finally` y consumo de JSON.

---

## Módulo 12: Gráficos con HTML5 Canvas API
*Ruta: [`Modulo 12 - Graficos con HTML5 Canvas API/`](./Modulo%2012%20-%20Graficos%20con%20HTML5%20Canvas%20API/)*

- **Teoría del Módulo**: [Modulo 12 - Graficos con HTML5 Canvas API.md](./Modulo%2012%20-%20Graficos%20con%20HTML5%20Canvas%20API/Modulo%2012%20-%20Graficos%20con%20HTML5%20Canvas%20API.md)
- **1. Coordenadas y Rectángulos**: [01_contexto_y_rectangulos.js](./Modulo%2012%20-%20Graficos%20con%20HTML5%20Canvas%20API/01_contexto_y_rectangulos.js)
  - `fillRect`, `clearRect` y modelo de píxeles 2D.
- **2. Paths y Arcos**: [02_paths_y_arcos.js](./Modulo%2012%20-%20Graficos%20con%20HTML5%20Canvas%20API/02_paths_y_arcos.js)
  - Trazos personalizados con `beginPath()`, `lineTo()` y arcos en radianes con `arc()`.
- **3. Estilos y Gradientes**: [03_estilos_y_gradientes.js](./Modulo%2012%20-%20Graficos%20con%20HTML5%20Canvas%20API/03_estilos_y_gradientes.js)
  - Colores de relleno, anchos de pincel y gradientes.

---

## Módulo 13: Almacenamiento Web y APIs Modernas del Navegador
*Ruta: [`Modulo 13 - Almacenamiento Web y APIs Modernas del Navegador/`](./Modulo%2013%20-%20Almacenamiento%20Web%20y%20APIs%20Modernas%20del%20Navegador/)*

- **Teoría del Módulo**: [Modulo 13 - Almacenamiento Web y APIs Modernas del Navegador.md](./Modulo%2013%20-%20Almacenamiento%20Web%20y%20APIs%20Modernas%20del%20Navegador/Modulo%2013%20-%20Almacenamiento%20Web%20y%20APIs%20Modernas%20del%20Navegador.md)
- **1. LocalStorage y SessionStorage**: [01_localstorage_y_sessionstorage.js](./Modulo%2013%20-%20Almacenamiento%20Web%20y%20APIs%20Modernas%20del%20Navegador/01_localstorage_y_sessionstorage.js)
  - Persistencia síncrona y serialización de objetos con `JSON.stringify()` / `JSON.parse()`.
- **2. Cookies**: [02_cookies.js](./Modulo%2013%20-%20Almacenamiento%20Web%20y%20APIs%20Modernas%20del%20Navegador/02_cookies.js)
  - Parámetros de seguridad (`max-age`, `SameSite`, `Secure`).
- **3. Web APIs Modernas**: [03_apis_modernas.js](./Modulo%2013%20-%20Almacenamiento%20Web%20y%20APIs%20Modernas%20del%20Navegador/03_apis_modernas.js)
  - Portapapeles (Clipboard API) y observadores.

---

## Módulo 14: Proyectos Prácticos Integradores de Código a Mano
*Ruta: [`Modulo 14 - Proyectos Practicos Integradores/`](./Modulo%2014%20-%20Proyectos%20Practicos%20Integradores/)*

- **Teoría del Módulo**: [Modulo 14 - Proyectos Practicos Integradores.md](./Modulo%2014%20-%20Proyectos%20Practicos%20Integradores/Modulo%2014%20-%20Proyectos%20Practicos%20Integradores.md)
- **1. Calculadora Interactiva**: [01_proyecto_calculadora.js](./Modulo%2014%20-%20Proyectos%20Practicos%20Integradores/01_proyecto_calculadora.js)
  - Motor de cálculo, validación defensiva y registro de historial.
- **2. Gestor Kanban / To-Do**: [02_proyecto_kanban_todo.js](./Modulo%2014%20-%20Proyectos%20Practicos%20Integradores/02_proyecto_kanban_todo.js)
  - Ciclo de estados de tareas, filtros y serialización JSON.
- **3. Dashboard Meteorológico Asíncrono**: [03_proyecto_dashboard_clima_fetch.js](./Modulo%2014%20-%20Proyectos%20Practicos%20Integradores/03_proyecto_dashboard_clima_fetch.js)
  - Async/await, simulación de respuestas de red y control de errores.
- **4. Validador de Formularios con Regex**: [04_proyecto_validador_regex.js](./Modulo%2014%20-%20Proyectos%20Practicos%20Integradores/04_proyecto_validador_regex.js)
  - Validación exhaustiva con expresiones regulares de contraseñas, emails y teléfonos.
