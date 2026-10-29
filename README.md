# ⚡ Practice Hub — Desoxidación & Práctica de Código a Mano

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-24.x%20%7C%2022.x-339933?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2024-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Express.js](https://img.shields.io/badge/Express.js-4.x-000000?style=for-the-badge&logo=express&logoColor=white)
![SQL & ORMs](https://img.shields.io/badge/SQL%20%26%20ORMs-SQLite%20%7C%20Postgres%20%7C%20Drizzle-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![License](https://img.shields.io/badge/Licencia-MIT-informational?style=for-the-badge)

<p align="center">
  <strong>Plataforma didáctica progresiva para reaprender, practicar a mano y dominar el desarrollo backend y frontend moderno con feedback instantáneo y suites de validación automática.</strong>
</p>

[Requerimientos](#-requerimientos) •
[Inicio Rápido](#-inicio-rápido) •
[Contenido & Tracks](#-contenido--tracks-de-aprendizaje) •
[Plataforma Web](#-plataforma-web-interactiva) •
[Validación Automática](#-suite-de-validación-automática) •
[Estructura](#-estructura-del-repositorio)

</div>

---

## 🎯 ¿Qué es Practice Hub?

**Practice Hub** nace como un laboratorio personal para programadores que quieren:
1. **Desoxidar habilidades** y volver a escribir código a mano sin depender de autocompletados ciegos.
2. **Aprender haciendo (Hands-on)**: Teoría concisa, limpia y al grano (estilo W3Schools / MDN) combinada con retos prácticos inmediatos.
3. **Validación sin frustración**: Cada reto incluye una **suite de pruebas automatizada** que te indica con exactitud qué pasó, qué falló y cómo solucionarlo.
4. **Zero-Setup Frictionless**: Puedes resolver los ejercicios directamente en tus archivos locales con tu editor favorito (VS Code, Cursor, Antigravity) o mediante la **interfaz web interactiva** incluida con runner en tiempo real.

---

## 📋 Requerimientos

| Requisito | Versión Recomendada | Notas |
| :--- | :--- | :--- |
| **Node.js** | **v22.0.0** o superior (recomendado **v24.x**) | Necesario para soporte nativo de `node:sqlite`, `node:test` y ES Modules. |
| **npm** | **v10.x** o superior | Gestor de paquetes incluido con Node.js. |
| **Navegador Web** | Chrome, Edge, Firefox, Brave, Safari | Para utilizar el Practice Hub Web Runner. |
| **Editor de Código** | VS Code, Cursor o cualquier IDE moderno | Opcional pero recomendado para escribir a mano. |

> [!NOTE]
> No necesitas instalar PostgreSQL ni MySQL en tu sistema para comenzar; los módulos de bases de datos utilizan motores en memoria ultrarrápidos (`node:sqlite` nativo y `@electric-sql/pglite` WASM).

---

## 🚀 Inicio Rápido

Cada tecnología y la plataforma web se encuentran **completamente aisladas y modularizadas** con su propio `package.json` dentro de su respectiva carpeta, manteniendo la raíz del repositorio 100% limpia.

### 1. Iniciar la Plataforma Web Interactiva
No requiere dependencias externas (utiliza el servidor nativo de Node.js):
```bash
# Opción A: Desde la carpeta App
cd App
npm start

# Opción B: Directo desde la raíz
node App/server.js
```
Abre tu navegador en:
👉 **[http://localhost:3000](http://localhost:3000)**

*(Tip: Si deseas que el servidor se reinicie automáticamente con cambios, usa `npm run dev` dentro de `App/`).*

---

### 2. Instalar dependencias por tecnología (según lo que vayas a practicar)
Cada track gestiona sus propias dependencias de forma aislada:

- **Express**:
  ```bash
  cd Express
  npm install
  ```
- **Databases (SQL & PGlite)**:
  ```bash
  cd Databases
  npm install
  ```
- **ORMs (Sequelize, Drizzle, SQLite)**:
  ```bash
  cd ORMs
  npm install
  ```
- **JavaScript & Node.js**:
  ¡Cero dependencias! Corren 100% nativos con tu instalación de Node.js.

---

## 🧭 Contenido & Tracks de Aprendizaje

El repositorio está organizado por tecnologías independientes con más de **100+ ejercicios prácticos guiados** listos para codificar:

### 💛 [JavaScript Moderno (ES6+)](./JavaScript/TEMARIO.md) — 14 Módulos
- **Módulo 1:** Fundamentos, Salidas y Sintaxis Básica.
- **Módulo 2:** Tipos de Datos, Conversión y Coerción.
- **Módulo 3:** Operadores Aritméticos, Lógicos y Avanzados.
- **Módulo 4:** Estructuras de Control, Condicionales y Bucles.
- **Módulo 5:** Funciones, Scope, Closures, Currying y Recursión.
- **Módulo 6:** Arrays, Métodos Modernos (`map`, `filter`, `reduce`, `flat`).
- **Módulo 7:** Objetos, Prototipos, Clases y Herencia.
- **Módulo 8:** Asincronía, Callbacks, Promesas y `async/await`.
- **Módulo 9:** DOM, Selectores y Eventos del Navegador.
- **Módulo 10:** Storage, Web APIs y `fetch` HTTP.
- **Módulo 11:** Modularización ES Modules (`import` / `export`).
- **Módulo 12:** Manejo Robusto de Errores (`try/catch/finally`, Custom Errors).
- **Módulo 13:** Patrones de Diseño (Singleton, Factory, Observer).
- **Módulo 14:** Proyectos Prácticos Integradores.

### 💚 [Node.js Backend](./NodeJS/TEMARIO.md) — 15 Módulos
- **Módulo 1:** Globales, Entorno (`process.env`) y Consola Avanzada.
- **Módulo 2:** Sistema de Módulos (CommonJS vs ECMAScript Modules).
- **Módulo 3:** Manipulación de Rutas con `path` y URLs nativas.
- **Módulo 4:** File System síncrono, asíncrono y `fs/promises`.
- **Módulo 5:** Arquitectura orientada a eventos con `EventEmitter`.
- **Módulo 6:** Buffers, memoria y manipulación de datos binarios.
- **Módulo 7:** Streams (`Readable`, `Writable`, `Transform`) y tuberías (`pipeline`).
- **Módulo 8:** Servidores y Clientes HTTP nativos (`http` / `https`).
- **Módulo 9:** Parseo y construcción de cadenas con `URLSearchParams`.
- **Módulo 10:** Criptografía (`crypto`), hashing (SHA-256), HMAC y cifrado simétrico.
- **Módulo 11:** Procesos Hijos con `child_process` (`exec`, `spawn`, `fork`).
- **Módulo 12:** Paralelismo con `cluster` y subprocesos con `worker_threads`.
- **Módulo 13:** Compresión y descompresión con `zlib` (Gzip, Deflate, Brotli).
- **Módulo 14:** Testing nativo con `node:test` y `node:assert`.
- **Módulo 15:** Proyectos Prácticos Integradores (Servidores estáticos, CLI Tools, Microservicios).

### 🚂 [Express.js](./Express/TEMARIO.md) — 10 Módulos
- **Módulo 1:** Creación de Aplicación, Escucha (`app.listen`) y Settings.
- **Módulo 2:** Enrutamiento Básico y Métodos HTTP (GET, POST, PUT, DELETE, PATCH).
- **Módulo 3:** Anatomía de `req` (Request) y `res` (Response: json, status, send).
- **Módulo 4:** Middlewares (Aplicación, Ruta, Terceros y Cadena `next()`).
- **Módulo 5:** Parámetros de Ruta (`req.params`) y Query Strings (`req.query`).
- **Módulo 6:** Body Parsing (`express.json`, URL-Encoded y subida de datos).
- **Módulo 7:** Manejo Centralizado de Errores (`(err, req, res, next)`).
- **Módulo 8:** Enrutamiento Modular con `express.Router` y Prefijos.
- **Módulo 9:** Seguridad y Producción (CORS, Helmet, Rate Limiting).
- **Módulo 10:** Proyectos Prácticos (API RESTful CRUD, File Server, Auth Middleware con JWT).

### 💾 [Bases de Datos & SQL (MySQL, PostgreSQL, SQLite)](./Databases/TEMARIO.md) — 9 Módulos
- **Módulo 1:** MySQL Creación de Tablas, Constraints (`PRIMARY KEY`, `AUTO_INCREMENT`, `UNIQUE`, `DEFAULT`, `CHECK`) y Tipos de Datos (`INT`, `VARCHAR`, `DECIMAL`, `DATETIME`).
- **Módulo 2:** MySQL Consultas DML (`INSERT`, `UPDATE`, `DELETE`) y Operadores (`WHERE`, `BETWEEN`, `IN`, `LIKE`, `ORDER BY`, `LIMIT`).
- **Módulo 3:** MySQL Funciones de Cadena (`CONCAT_WS`, `SUBSTRING`, `LOWER`), Lógica Condicional (`IF()`, `CASE`) y Fechas (`NOW()`, `DATEDIFF()`, `YEAR()`).
- **Módulo 4:** MySQL Agrupamiento (`GROUP BY`), Funciones de Agregación (`COUNT`, `SUM`, `AVG`, `MAX`), Filtro `HAVING` y `GROUP_CONCAT()`.
- **Módulo 5:** MySQL Relaciones Claves Foráneas y JOINS (`INNER JOIN`, `LEFT JOIN`, multi-tabla y `SELF JOIN` jerárquico).
- **Módulo 6:** MySQL Subconsultas escalares, en `WHERE` con `IN`, tablas derivadas en `FROM` (alias obligatorio) y Vistas (`CREATE VIEW`).
- **Módulo 7:** PostgreSQL Tipos Avanzados: Semiestructurado `JSONB` (`->`, `->>`, `@>`), tipo `ARRAY` (`ANY()`, `UNNEST()`) y `UUID` (`gen_random_uuid()`) con PGlite en memoria.
- **Módulo 8:** PostgreSQL Expresiones de Tabla Comunes (CTEs con `WITH`) y Funciones de Ventana (`ROW_NUMBER()`, acumulados con `SUM() OVER()`, `LAG()`).
- **Módulo 9:** SQLite Arquitectura Embebida Serverless: Afinidad de Tipos (*Type Affinity*), instrucciones `PRAGMA` (claves foráneas e inspección) y transacciones ACID con `SAVEPOINT`.

### 🔄 [ORMs & Query Builders (Sequelize, Drizzle, Prisma)](./ORMs/TEMARIO.md) — 6 Módulos
- **Módulo 1:** Sequelize Modelos, `DataTypes`, restricciones, sincronización (`sync`) y ciclo de vida de instancias (`create`, `bulkCreate`).
- **Módulo 2:** Sequelize Consultas y Operadores avanzados `Op` (`Op.between`, `Op.like`, `Op.or`), ordenamiento y mutaciones (`update`, `destroy`).
- **Módulo 3:** Sequelize Asociaciones Relacionales: 1 a Muchos (`hasMany` / `belongsTo`), Muchos a Muchos (`belongsToMany` con `through`) y carga ansiosa con `include`.
- **Módulo 4:** Drizzle ORM Definición de Esquemas fuertemente tipados con `sqliteTable`/`pgTable`, constraints y operaciones CRUD básicas (`insert().values()`, `select().from()`).
- **Módulo 5:** Drizzle Queries, operadores de filtrado (`eq`, `gt`, `between`, `like`, `and`, `desc`) y uniones relacionales con `.leftJoin()`.
- **Módulo 6:** Prisma Modelado declarativo en `schema.prisma` (`@id`, `@default`, `@relation`) y patrones de consulta type-safe con la API de Prisma Client (`findMany`, `findUnique`, `include`).

### 🌐 [HTML5 & Estándares Web](./HTML/TEMARIO.md) — 10 Módulos (En Archivos .html Nativos)
- **Módulo 1:** Estructura Raíz, DOCTYPE y Metadatos (`<head>`, `<meta charset>`, `<meta name="viewport">`, `<title>`, OpenGraph).
- **Módulo 2:** Jerarquía de Texto, Semántica y Entidades (`<h1>-<h6>`, `<p>`, `<strong>`, `<em>`, `<blockquote>`, `<pre>`, `<code>`, entidades HTML).
- **Módulo 3:** Enlaces, Navegación y Rutas (`<a>`, `target="_blank" rel="noopener noreferrer"`, anclas con `#id`, `mailto:`, `tel:`).
- **Módulo 4:** Listas y Agrupación (`<ul>`, `<ol>` con `start` y `type`, `<li>` anidados, listas descriptivas `<dl>`, `<dt>`, `<dd>`).
- **Módulo 5:** Tablas Estructuradas (`<table>`, `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`, `th scope`, `colspan`, `rowspan`).
- **Módulo 6:** Formularios y Controles de Entrada (`<form>`, `<fieldset>`, `<legend>`, `<label for>`, `<input>` variados, `optgroup`, subida de archivos `enctype="multipart/form-data"`).
- **Módulo 7:** Multimedia, Embebidos y Frames (`<img>`, `<figure>`, `<figcaption>`, `<picture>` adaptativo, `<video>` nativo e `<iframe>` con `sandbox`).
- **Módulo 8:** Atributos Globales y Eventos HTML Inline (`id`, `class`, `tabindex`, `accesskey`, `contenteditable`, `dir="rtl"`, `onclick`, `oninput`, `onsubmit`).
- **Módulo 9:** Protocolo Web y Códigos de Estado HTTP (Respuestas 1XX, 2XX, 3XX, 4XX, 5XX según OverAPI, páginas 404, 201 y 500).
- **Módulo 10:** Semántica HTML5 y Accesibilidad ARIA (`<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`, `<dialog>` y roles ARIA).

### 🎨 [CSS & Diseño Web Moderno](./CSS/TEMARIO.md) — 10 Módulos (En Archivos .html con Style Nativos)
- **Módulo 1:** Selectores CSS y Especificidad (`*`, tipo, clase, id, combinadores `>`, `+`, `~`, atributos `[attr^=]`, `[attr$=]`).
- **Módulo 2:** Box Model y Dimensionamiento (`box-sizing: border-box`, `margin: 0 auto`, `padding`, `min/max-width`, `overflow-y: auto`).
- **Módulo 3:** Bordes, Contornos y Sombras (`border`, `border-radius: 50%`, píldoras, `outline`, `outline-offset`, `box-shadow` e `inset`).
- **Módulo 4:** Tipografía, Fuentes y Estilos de Texto (`line-height`, `letter-spacing`, `text-transform`, `text-shadow`, `text-overflow: ellipsis`).
- **Módulo 5:** Colores, Fondos y Degradados (`background-size: cover`, `background-position`, `linear-gradient`, `radial-gradient`).
- **Módulo 6:** Posicionamiento y Flujo Normal (`position: relative`, `absolute`, `sticky`, `fixed`, control de capas con `z-index`).
- **Módulo 7:** Flexbox Diseño Unidimensional (`display: flex`, `justify-content`, `align-items`, `gap`, `flex-wrap: wrap`, `flex-grow`).
- **Módulo 8:** CSS Grid Diseño Bidimensional (`display: grid`, `repeat(3, 1fr)`, `gap`, `grid-column: span 2`, `grid-template-areas`).
- **Módulo 9:** Pseudo-clases y Pseudo-elementos (`:hover`, `:first-child`, `:nth-child(even)`, `::before`, `::after` con `content`).
- **Módulo 10:** Transiciones, Transformaciones y Animaciones (`transition: transform`, `transform: translateY scale`, `@keyframes`, spinners infinitos).

### 🧠 [Inteligencia Artificial & Deep Learning Moderno](./AI/TEMARIO.md) — 4 Módulos (En Archivos .py)
- **Módulo 1:** Fundamentos Matemáticos y Redes Neuronales desde Cero (Neurona escalar, Perceptrón simple, MLP y Backpropagation resolviendo XOR).
- **Módulo 2:** Arquitectura Transformer y Autoatención (Positional Encoding sinusoidal, matrices $\mathbf{Q}, \mathbf{K}, \mathbf{V}$ y Scaled Dot-Product Attention con máscara causal).
- **Módulo 3:** Modelos de Lenguaje Causales, Alineación y DPO (Proyección a logits, muestreo con temperatura y top-k, y función de pérdida Direct Preference Optimization).
- **Módulo 4:** Arquitectura y Desarrollo Sistemático de Agentes de IA (Crítica a la fragilidad multiagente, arquitectura Playbook en 3 capas: Process, Toolbox, Proof, y protocolo Delegation Loop).

---

## 🖥️ Plataforma Web Interactiva

El repositorio incluye un servidor local desarrollado en Node.js puro (`App/server.js`) con interfaz gráfica reactiva:

- 🗂️ **Escaneo Dinámico**: Cualquier nueva carpeta o módulo que agregues se detecta e indexa automáticamente en la barra lateral sin reiniciar.
- ⚡ **Ejecución en Tiempo Real**: Presiona **"Ejecutar Ejercicio"** para correr el código en un subproceso de Node.js y visualizar la salida formateada inmediatamente en pantalla.
- 📖 **Lector de Teoría Integrado**: Revisa la guía teórica en Markdown sin salir de la plataforma.
- 👁️ **Visor de Código en Vivo**: Visualiza los archivos `.js` con resaltado de sintaxis antes de ejecutarlos.
- 📊 **Persistencia de Progreso**: Marca ejercicios como completados; tu progreso se guarda localmente en `localStorage`.

---

## 🧪 Suite de Validación Automática

Todos los ejercicios prácticos `.js` siguen una estructura estandarizada para garantizar que sepas exactamente si tu solución cumple los requisitos:

```javascript
// ==========================================
// RETO 1: TU ENUNCIADO AQUÍ
// ==========================================
// TODO: Escribe tu solución aquí...

function miSolucion() {
  // tu código a mano
}

// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA (no modificar)
// ==========================================
// Se encarga de evaluar tu código de forma aislada e independiente:
// ✔ RETO 1 pasó exitosamente
// ❌ RETO 1 falló (recibes una pista clara del error)
```

### Ejecutar un ejercicio manualmente desde la terminal:
Puedes ejecutar cualquier archivo directamente con Node.js en cualquier momento:

```bash
node "Express/Modulo 10 - Proyectos Practicos Express/01_proyecto_api_crud.js"
```

**Salida de ejemplo:**
```text
=== PROYECTO 1: API REST CRUD ===
Servidor de pruebas listo en puerto efímero.
✔ RETO 1.1: GET /api/productos devuelve todos los productos con status 200
✔ RETO 1.2: GET /api/productos/:id devuelve el producto solicitado
✔ RETO 1.3: POST /api/productos crea un nuevo producto correctamente
✔ RETO 1.4: PUT /api/productos/:id actualiza el producto existente
✔ RETO 1.5: DELETE /api/productos/:id elimina el producto correctamente
🎉 ¡Todos los retos de la suite pasaron correctamente!
```

---

## 📁 Estructura del Repositorio

```text
Practice/
├── AGENTS.md                 # Contexto, arquitectura y pautas de trabajo para IA
├── README.md                 # Documentación principal del repositorio
│
├── App/                      # 🌐 Plataforma Web Interactiva & Runner Dinámico
│   ├── package.json          # Scripts para iniciar la app web (npm start / npm run dev)
│   ├── server.js             # Servidor HTTP nativo con APIs de runner y escaneo
│   ├── index.html            # Interfaz SPA moderna con dark mode
│   ├── styles.css            # Estilos del dashboard, sidebar y terminal
│   └── app.js                # Lógica del cliente, tabs y runner interactivo
│
├── JavaScript/               # 💛 Track de JavaScript (14 Módulos - 100% nativo)
│   ├── TEMARIO.md
│   └── Modulo X - Nombre/
│       ├── Modulo X - Nombre.md
│       ├── 01_ejercicio.js
│       └── ...
│
├── NodeJS/                   # 💚 Track de Node.js (15 Módulos - 100% nativo)
│   ├── TEMARIO.md
│   └── Modulo X - Nombre/
│       ├── Modulo X - Nombre.md
│       ├── 01_ejercicio.js
│       └── ...
│
├── Express/                  # 🚂 Track de Express.js (10 Módulos)
│   ├── package.json          # Dependencias de Express (express v5)
│   ├── TEMARIO.md
│   └── Modulo X - Nombre/
│       ├── Modulo X - Nombre.md
│       ├── 01_ejercicio.js
│       └── ...
│
├── Databases/                # 💾 Track de SQL & Bases de Datos
│   ├── package.json          # Dependencias de BD (PGlite en memoria)
│   └── ...
│
└── ORMs/                     # 🔄 Track de ORMs & Query Builders
    ├── package.json          # Dependencias de ORMs (Sequelize, Drizzle, SQLite)
    └── ...
```

---

## 🤝 Cómo Practicar de Manera Óptima

1. **Lee la teoría primero**: Abre el archivo `Modulo X - ...md` del módulo correspondiente para entender los conceptos clave.
2. **Resuelve a mano**: Abre el archivo `.js` de ejercicio y escribe el código dentro de la sección `// TODO:` sin copiar y pegar.
3. **Comprueba con la Suite**: Ejecuta el archivo desde la consola (`node archivo.js`) o presiona el botón **"Ejecutar Ejercicio"** en el panel web.
4. **Corrige según el feedback**: Si ves un `❌`, lee la pista descriptiva provista por la suite, ajusta tu código y vuelve a ejecutar hasta obtener todos los `✔`.

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Puedes usarlo, clonarlo y adaptarlo libremente para tus propias sesiones de práctica o enseñanza.
