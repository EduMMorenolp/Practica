# 🧭 Temario Completo de Express.js

Guía completa y estructurada paso a paso de **Express.js**, basada en la documentación oficial y la Cheat Sheet de **OverAPI**.
Cada módulo cuenta con su archivo de **teoría detallada** y **ejercicios prácticos listos para codear a mano**.

---

## Módulo 1: Fundamentos y Creación de Aplicación (Application Core)
*Ruta: [`./Modulo 1 - Creacion y Configuracion de App/`](./Modulo%201%20-%20Creacion%20y%20Configuracion%20de%20App/)*
- **Teoría del Módulo**: [`Modulo 1 - Creacion y Configuracion de App.md`](./Modulo%201%20-%20Creacion%20y%20Configuracion%20de%20App/Modulo%201%20-%20Creacion%20y%20Configuracion%20de%20App.md)
- **1. Inicialización y Listener**: [`01_creacion_app_listen.js`](./Modulo%201%20-%20Creacion%20y%20Configuracion%20de%20App/01_creacion_app_listen.js)
  - `express()`, `app.listen()`, configuración de puertos y variables de entorno.
- **2. Ajustes de Aplicación y Estado**: [`02_app_set_get_locals.js`](./Modulo%201%20-%20Creacion%20y%20Configuracion%20de%20App/02_app_set_get_locals.js)
  - `app.set()`, `app.get()`, `app.enable()`, `app.disable()`, `app.enabled()`, `app.disabled()`, `app.locals`.

---

## Módulo 2: Enrutamiento Básico y Métodos HTTP (Routing)
*Ruta: [`./Modulo 2 - Enrutamiento y Metodos HTTP/`](./Modulo%202%20-%20Enrutamiento%20y%20Metodos%20HTTP/)*
- **Teoría del Módulo**: [`Modulo 2 - Enrutamiento y Metodos HTTP.md`](./Modulo%202%20-%20Enrutamiento%20y%20Metodos%20HTTP/Modulo%202%20-%20Enrutamiento%20y%20Metodos%20HTTP.md)
- **1. Métodos HTTP estándar**: [`01_metodos_http_basicos.js`](./Modulo%202%20-%20Enrutamiento%20y%20Metodos%20HTTP/01_metodos_http_basicos.js)
  - `app.get()`, `app.post()`, `app.put()`, `app.patch()`, `app.delete()`.
- **2. Enrutamiento Especial y Cadenas**: [`02_app_all_route.js`](./Modulo%202%20-%20Enrutamiento%20y%20Metodos%20HTTP/02_app_all_route.js)
  - `app.all()`, encadenamiento de rutas con `app.route('/path')`.

---

## Módulo 3: El Objeto Request (req) a Fondo
*Ruta: [`./Modulo 3 - Objeto Request/`](./Modulo%203%20-%20Objeto%20Request/)*
- **Teoría del Módulo**: [`Modulo 3 - Objeto Request.md`](./Modulo%203%20-%20Objeto%20Request/Modulo%203%20-%20Objeto%20Request.md)
- **1. Parámetros y Consultas**: [`01_params_query.js`](./Modulo%203%20-%20Objeto%20Request/01_params_query.js)
  - `req.params`, `req.query`, `req.param()`, `app.param()`.
- **2. Encabezados y Metadatos de Red**: [`02_headers_ip_path.js`](./Modulo%203%20-%20Objeto%20Request/02_headers_ip_path.js)
  - `req.get()`, `req.path`, `req.ip`, `req.protocol`, `req.secure`, `req.xhr`, `req.originalUrl`.
- **3. Negociación de Contenido**: [`03_negociacion_contenido.js`](./Modulo%203%20-%20Objeto%20Request/03_negociacion_contenido.js)
  - `req.accepts()`, `req.acceptsCharset()`, `req.acceptsLanguage()`, `req.is()`.

---

## Módulo 4: El Objeto Response (res) a Fondo
*Ruta: [`./Modulo 4 - Objeto Response/`](./Modulo%204%20-%20Objeto%20Response/)*
- **Teoría del Módulo**: [`Modulo 4 - Objeto Response.md`](./Modulo%204%20-%20Objeto%20Response/Modulo%204%20-%20Objeto%20Response.md)
- **1. Envío de Respuestas**: [`01_send_json_status.js`](./Modulo%204%20-%20Objeto%20Response/01_send_json_status.js)
  - `res.status()`, `res.send()`, `res.json()`, `res.jsonp()`, `res.type()`.
- **2. Cookies y Encabezados**: [`02_cookies_headers.js`](./Modulo%204%20-%20Objeto%20Response/02_cookies_headers.js)
  - `res.set()`, `res.get()`, `res.cookie()`, `res.clearCookie()`, `res.location()`.
- **3. Redirecciones y Archivos**: [`03_archivos_redirect.js`](./Modulo%204%20-%20Objeto%20Response/03_archivos_redirect.js)
  - `res.redirect()`, `res.download()`, `res.sendFile()`, `res.attachment()`, `res.format()`.

---

## Módulo 5: Enrutador Modular (express.Router)
*Ruta: [`./Modulo 5 - Enrutador Modular express Router/`](./Modulo%205%20-%20Enrutador%20Modular%20express%20Router/)*
- **Teoría del Módulo**: [`Modulo 5 - Enrutador Modular express Router.md`](./Modulo%205%20-%20Enrutador%20Modular%20express%20Router/Modulo%205%20-%20Enrutador%20Modular%20express%20Router.md)
- **1. Creación y Montaje de Router**: [`01_router_modular.js`](./Modulo%205%20-%20Enrutador%20Modular%20express%20Router/01_router_modular.js)
  - `express.Router()`, `router.use()`, `router.get()`, `router.post()`, montaje con prefijos en `app.use()`.
- **2. Parámetros y Cadenas de Router**: [`02_router_param_route.js`](./Modulo%205%20-%20Enrutador%20Modular%20express%20Router/02_router_param_route.js)
  - `router.param()`, `router.route()`, modularización escalable.

---

## Módulo 6: Middlewares Fundamentales y Personalizados
*Ruta: [`./Modulo 6 - Middlewares Fundamentales/`](./Modulo%206%20-%20Middlewares%20Fundamentales/)*
- **Teoría del Módulo**: [`Modulo 6 - Middlewares Fundamentales.md`](./Modulo%206%20-%20Middlewares%20Fundamentales/Modulo%206%20-%20Middlewares%20Fundamentales.md)
- **1. Anatomía de un Middleware**: [`01_middleware_personalizado.js`](./Modulo%206%20-%20Middlewares%20Fundamentales/01_middleware_personalizado.js)
  - Función `(req, res, next)`, ejecución en cadena, mutación de `req`.
- **2. Middlewares Incorporados en Express**: [`02_middlewares_incorporados.js`](./Modulo%206%20-%20Middlewares%20Fundamentales/02_middlewares_incorporados.js)
  - `express.json()`, `express.urlencoded()`, `express.static()`.

---

## Módulo 7: Manejo de Errores en Express
*Ruta: [`./Modulo 7 - Manejo de Errores/`](./Modulo%207%20-%20Manejo%20de%20Errores/)*
- **Teoría del Módulo**: [`Modulo 7 - Manejo de Errores.md`](./Modulo%207%20-%20Manejo%20de%20Errores/Modulo%207%20-%20Manejo%20de%20Errores.md)
- **1. Middleware de Error Cuádruple**: [`01_error_middleware.js`](./Modulo%207%20-%20Manejo%20de%20Errores/01_error_middleware.js)
  - `(err, req, res, next)`, propagación sincrónica y asincrónica con `next(err)`.
- **2. Captura de 404 y Errores Asíncronos**: [`02_manejador_404_async.js`](./Modulo%207%20-%20Manejo%20de%20Errores/02_manejador_404_async.js)
  - Catch-all para recursos no encontrados, `async/await` y wrappers de captura.

---

## Módulo 8: Motores de Plantillas y Vistas (View Engines)
*Ruta: [`./Modulo 8 - Motores de Plantillas y Vistas/`](./Modulo%208%20-%20Motores%20de%20Plantillas%20y%20Vistas/)*
- **Teoría del Módulo**: [`Modulo 8 - Motores de Plantillas y Vistas.md`](./Modulo%208%20-%20Motores%20de%20Plantillas%20y%20Vistas/Modulo%208%20-%20Motores%20de%20Plantillas%20y%20Vistas.md)
- **1. Configuración de Vistas y Render**: [`01_app_render_engine.js`](./Modulo%208%20-%20Motores%20de%20Plantillas%20y%20Vistas/01_app_render_engine.js)
  - `app.set('views')`, `app.set('view engine')`, `res.render()`, `res.locals`, `app.engine()`.

---

## Módulo 9: Middlewares Populares del Ecosistema Express
*Ruta: [`./Modulo 9 - Middlewares del Ecosistema/`](./Modulo%209%20-%20Middlewares%20del%20Ecosistema/)*
- **Teoría del Módulo**: [`Modulo 9 - Middlewares del Ecosistema.md`](./Modulo%209%20-%20Middlewares%20del%20Ecosistema/Modulo%209%20-%20Middlewares%20del%20Ecosistema.md)
- **1. Logging, Compresión y Seguridad**: [`01_morgan_cors_helmet.js`](./Modulo%209%20-%20Middlewares%20del%20Ecosistema/01_morgan_cors_helmet.js)
  - Morgan (logger), CORS, Cookie-parser, compresión y rate limiting.

---

## Módulo 10: Proyectos Prácticos Integradores Express
*Ruta: [`./Modulo 10 - Proyectos Practicos Express/`](./Modulo%2010%20-%20Proyectos%20Practicos%20Express/)*
- **Teoría del Módulo**: [`Modulo 10 - Proyectos Practicos Express.md`](./Modulo%2010%20-%20Proyectos%20Practicos%20Express/Modulo%2010%20-%20Proyectos%20Practicos%20Express.md)
- **1. API RESTful CRUD Completa**: [`01_proyecto_api_crud.js`](./Modulo%2010%20-%20Proyectos%20Practicos%20Express/01_proyecto_api_crud.js)
  - Router modular, validación con middlewares, respuestas JSON y control de estados HTTP.
- **2. Servidor de Archivos con Descargas y Carga**: [`02_proyecto_servidor_archivos.js`](./Modulo%2010%20-%20Proyectos%20Practicos%20Express/02_proyecto_servidor_archivos.js)
  - Servir estáticos con `express.static`, descarga con `res.download()`, gestión de tipos MIME.
- **3. Autenticación y Autorización con Middleware**: [`03_proyecto_auth_middleware.js`](./Modulo%2010%20-%20Proyectos%20Practicos%20Express/03_proyecto_auth_middleware.js)
  - Middleware de protección de rutas mediante Headers / Bearer Token y manejo de permisos.
