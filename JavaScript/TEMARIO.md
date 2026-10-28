# 📚 Roadmap de Práctica de JavaScript (Estilo W3Schools)

> ¡A quitarse el óxido! Este temario está estructurado de manera progresiva, igual que en W3Schools, para que practiques **escribiendo código a mano** en pequeños ejercicios y proyectos.

---

## 🧭 Índice de Módulos

1. [Módulo 1: Fundamentos y Sintaxis Básica](#módulo-1-fundamentos-y-sintaxis-básica)
2. [Módulo 2: Control de Flujo y Funciones](#módulo-2-control-de-flujo-y-funciones)
3. [Módulo 3: Tipos de Datos Complejos (Arrays y Objetos)](#módulo-3-tipos-de-datos-complejos-arrays-y-objetos)
4. [Módulo 4: Manipulación del DOM y Eventos](#módulo-4-manipulación-del-dom-y-eventos)
5. [Módulo 5: JavaScript Moderno (ES6+)](#módulo-5-javascript-moderno-es6)
6. [Módulo 6: Asincronismo y Fetch API](#módulo-6-asincronismo-y-fetch-api)
7. [Módulo 7: Proyectos Prácticos para Desoxidarse](#módulo-7-proyectos-prácticos-para-desoxidarse)

---

## Módulo 1: Fundamentos y Sintaxis Básica
*Objetivo: Recordar cómo declarar variables, tipos de datos primitivos y operadores.*
*Ruta: [`JavaScript/Modulo 1/`](file:///d:/Proyectos/Practice/JavaScript/Modulo%201)*

- **Teoría del Módulo**: [Modulo.md](file:///d:/Proyectos/Practice/JavaScript/Modulo%201/Modulo.md)
- **1.1. Introducción y Salida**: [01_salidas_y_variables.js](file:///d:/Proyectos/Practice/JavaScript/Modulo%201/01_salidas_y_variables.js)
  - `console.log()`, variables con `let` vs `const`, alcance de bloque (*block scope*).
- **1.2. Tipos de Datos Primitivos**: [02_tipos_de_datos.js](file:///d:/Proyectos/Practice/JavaScript/Modulo%201/02_tipos_de_datos.js)
  - `typeof`, conversiones `Number()`, `String()`, `Boolean()`, curiosidad de `null`, *truthy* & *falsy*.
- **1.3. Operadores**: [03_operadores.js](file:///d:/Proyectos/Practice/JavaScript/Modulo%201/03_operadores.js)
  - Módulo (`%`), igualdad estricta (`===`), operadores lógicos (`&&`, `||`), operador nullish (`??`).

---

## Módulo 2: Control de Flujo y Funciones
*Objetivo: Dominar la lógica condicional, bucles y modularización de código.*
*Ruta: [`JavaScript/Modulo 2/`](file:///d:/Proyectos/Practice/JavaScript/Modulo%202)*

- **2.1. Condicionales**: `if`, `else if`, `else`, operador ternario, `switch...case`.
- **2.2. Bucles e Iteraciones**: `for`, `while`, `do...while`, `break` y `continue`.
- **2.3. Funciones Fundamentales**: Declaración vs expresión, parámetros por defecto, retornos y scopes.

---

## Módulo 3: Tipos de Datos Complejos (Arrays y Objetos)
*Objetivo: Manejar y transformar estructuras de datos con fluidez.*

- **3.1. Arrays (Arreglos)**
  - Métodos mutables (`push`, `pop`, `shift`, `unshift`, `splice`).
  - Métodos inmutables (`slice`, `concat`, `includes`).
  - Métodos de iteración de orden superior (`forEach`, `map`, `filter`, `reduce`, `find`, `some`, `every`).
- **3.2. Objetos Literales**
  - Propiedades, métodos, acceso por punto vs corchetes, `Object.keys()`, `Object.values()`, `Object.entries()`, palabra clave `this`.

---

## Módulo 4: Manipulación del DOM y Eventos
*Objetivo: Interactuar con el navegador y responder a las acciones del usuario.*

- **4.1. Selección de Elementos**: `querySelector`, `querySelectorAll`, `getElementById`.
- **4.2. Modificación del DOM**: `textContent`, `innerHTML`, `classList`, `setAttribute`, `createElement`, `append`.
- **4.3. Eventos del Navegador**: `addEventListener`, eventos de click, formularios (`submit`), teclado, delegación de eventos.

---

## Módulo 5: JavaScript Moderno (ES6+)
*Objetivo: Actualizar la sintaxis al estándar moderno de la industria.*

- **5.1. Funciones Flecha (Arrow Functions)**: Sintaxis corta, retorno implícito y `this`.
- **5.2. Template Literals**: Interpolación `${}` y strings multilínea.
- **5.3. Desestructuración (Destructuring)**: De objetos y arrays.
- **5.4. Operadores Spread y Rest**: `...` para clonar/unir y parámetros indefinidos.
- **5.5. Clases (OOP)**: `class`, `constructor`, `extends`, `super`.
- **5.6. Módulos ES (ESM)**: `export` e `import`.

---

## Módulo 6: Asincronismo y Fetch API
*Objetivo: Consumir APIs y manejar operaciones no bloqueantes.*

- **6.1. Concepto de Asincronismo**: Event Loop, Call Stack y Callback Queue.
- **6.2. Promesas**: Estados, `.then()`, `.catch()`, `.finally()`.
- **6.3. Async / Await**: Funciones asíncronas y manejo con `try...catch`.
- **6.4. Consumo de APIs (Fetch)**: Peticiones GET y POST con `fetch()`.

---

## Módulo 7: Proyectos Prácticos para Desoxidarse
*Ejercicios paso a paso para consolidar lo aprendido:*

1. **Calculadora Interactiva**: Practica control de flujo, funciones y eventos del DOM.
2. **To-Do List con LocalStorage**: Practica arrays, manipulación del DOM, eventos y persistencia en navegador.
3. **Buscador de Usuarios / Clima (API)**: Practica `async/await`, `fetch`, pintado dinámico y manejo de errores.
4. **Juego Ta-Te-Ti (Tic-Tac-Toe)**: Practica matrices/arrays, lógica de estado y condiciones de victoria.
