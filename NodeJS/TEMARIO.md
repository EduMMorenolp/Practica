# 🟢 Roadmap Integral y Exhaustivo de Node.js (OverAPI & Node.js Docs)

> Temario exhaustivo y práctico de Node.js: desde objetos globales (`global`, `process`, `Buffer`), módulos y sistema de paquetes (`CommonJS` vs `ESM`), utilidades, streams, eventos (`EventEmitter`), sistema de archivos (`fs`), redes (`HTTP`, `HTTPS`, `net`, `dgram`, `DNS`), criptografía (`crypto`), procesos hijos (`child_process`), clustering hasta tests nativos (`assert`).

---

## 🧭 Índice General de Módulos de Node.js

1. [Módulo 1: Objetos Globales y Entorno (Global, Process & Console)](#módulo-1-objetos-globales-y-entorno-global-process--console)
2. [Módulo 2: Sistema de Módulos (CommonJS, ESM & Require)](#módulo-2-sistema-de-módulos-commonjs-esm--require)
3. [Módulo 3: Buffers y Manipulación Binaria](#módulo-3-buffers-y-manipulación-binaria)
4. [Módulo 4: Sistema de Archivos (File System - fs & fs/promises)](#módulo-4-sistema-de-archivos-file-system---fs--fspromises)
5. [Módulo 5: Rutas y Rutas de Archivos (Path & URL)](#módulo-5-rutas-y-rutas-de-archivos-path--url)
6. [Módulo 6: Arquitectura Basada en Eventos (EventEmitter)](#módulo-6-arquitectura-basada-en-eventos-eventemitter)
7. [Módulo 7: Streams (Readable, Writable, Transform & Pipe)](#módulo-7-streams-readable-writable-transform--pipe)
8. [Módulo 8: Módulos HTTP y HTTPS (Servidores y Clientes Nativos)](#módulo-8-módulos-http-y-https-servidores-y-clientes-nativos)
9. [Módulo 9: Redes TCP y UDP (Net, Dgram & DNS)](#módulo-9-redes-tcp-y-udp-net-dgram--dns)
10. [Módulo 10: Procesos Hijos y Paralelismo (Child Process & Cluster)](#módulo-10-procesos-hijos-y-paralelismo-child-process--cluster)
11. [Módulo 11: Seguridad y Criptografía (Crypto Module)](#módulo-11-seguridad-y-criptografía-crypto-module)
12. [Módulo 12: Utilidades, Sistema Operativo y Compresión (Util, OS & Zlib)](#módulo-12-utilidades-sistema-operativo-y-compresión-util-os--zlib)
13. [Módulo 13: Interfaces de Línea de Comandos (Readline & REPL)](#módulo-13-interfaces-de-línea-de-comandos-readline--repl)
14. [Módulo 14: Pruebas Unitarias Nativas y Asertos (Assert Module)](#módulo-14-pruebas-unitarias-nativas-y-asertos-assert-module)
15. [Módulo 15: Proyectos Prácticos Integradores de Node.js](#módulo-15-proyectos-prácticos-integradores-de-nodejs)

---

## Módulo 1: Objetos Globales y Entorno (Global, Process & Console)
*Ruta: [`Modulo 1 - Globales y Entorno/`](./Modulo%201%20-%20Globales%20y%20Entorno/)*

- **Teoría del Módulo**: [Modulo 1 - Globales y Entorno.md](./Modulo%201%20-%20Globales%20y%20Entorno/Modulo%201%20-%20Globales%20y%20Entorno.md)
- **1. Variables Globales y Contexto**: [01_globales_basicos.js](./Modulo%201%20-%20Globales%20y%20Entorno/01_globales_basicos.js)
  - `global`, `globalThis`, `__dirname`, `__filename`.
- **2. El Objeto Process**: [02_objeto_process.js](./Modulo%201%20-%20Globales%20y%20Entorno/02_objeto_process.js)
  - Argumentos de línea de comandos (`process.argv`), variables de entorno (`process.env`), control de salida (`process.exit`), memoria (`process.memoryUsage()`), tiempo de actividad (`process.uptime()`) y `process.nextTick()`.
- **3. Console Especializada en Node**: [03_console_avanzada.js](./Modulo%201%20-%20Globales%20y%20Entorno/03_console_avanzada.js)
  - `console.time()` / `timeEnd()`, `console.dir()` con profundidad e inspección de colores, `console.trace()`, `console.assert()`.

---

## Módulo 2: Sistema de Módulos (CommonJS, ESM & Require)
*Ruta: [`Modulo 2 - Sistema de Modulos/`](./Modulo%202%20-%20Sistema%20de%20Modulos/)*

- **Teoría del Módulo**: [Modulo 2 - Sistema de Modulos.md](./Modulo%202%20-%20Sistema%20de%20Modulos/Modulo%202%20-%20Sistema%20de%20Modulos.md)
- **1. CommonJS (module.exports y require)**: [01_commonjs_exports.js](./Modulo%202%20-%20Sistema%20de%20Modulos/01_commonjs_exports.js)
  - Exportación de objetos, funciones y clases con `module.exports` vs `exports`.
- **2. Caché e Inspección de Módulos**: [02_require_cache.js](./Modulo%202%20-%20Sistema%20de%20Modulos/02_require_cache.js)
  - `require.resolve()`, `require.cache`, comportamiento de carga única e invalidación de caché.
- **3. Módulos ES (ESM en Node.js)**: [03_esm_interoperabilidad.js](./Modulo%202%20-%20Sistema%20de%20Modulos/03_esm_interoperabilidad.js)
  - `import` / `export` en Node (`"type": "module"` en `package.json` o extensión `.mjs`), importaciones dinámicas `import()`.

---

## Módulo 3: Buffers y Manipulación Binaria
*Ruta: [`Modulo 3 - Buffers y Datos Binarios/`](./Modulo%203%20-%20Buffers%20y%20Datos%20Binarios/)*

- **Teoría del Módulo**: [Modulo 3 - Buffers y Datos Binarios.md](./Modulo%203%20-%20Buffers%20y%20Datos%20Binarios/Modulo%203%20-%20Buffers%20y%20Datos%20Binarios.md)
- **1. Creación y Conversión de Buffers**: [01_creacion_buffers.js](./Modulo%203%20-%20Buffers%20y%20Datos%20Binarios/01_creacion_buffers.js)
  - `Buffer.from()`, `Buffer.alloc()`, `Buffer.allocUnsafe()`, encodings (`utf-8`, `base64`, `hex`).
- **2. Operaciones con Buffers**: [02_operaciones_buffers.js](./Modulo%203%20-%20Buffers%20y%20Datos%20Binarios/02_operaciones_buffers.js)
  - `Buffer.concat()`, `buf.copy()`, `buf.slice()`, lectura y escritura numérica (`readUInt32LE`, `writeInt16BE`).

---

## Módulo 4: Sistema de Archivos (File System - fs & fs/promises)
*Ruta: [`Modulo 4 - File System fs/`](./Modulo%204%20-%20File%20System%20fs/)*

- **Teoría del Módulo**: [Modulo 4 - File System fs.md](./Modulo%204%20-%20File%20System%20fs/Modulo%204%20-%20File%20System%20fs.md)
- **1. Operaciones CRUD de Archivos**: [01_crud_archivos.js](./Modulo%204%20-%20File%20System%20fs/01_crud_archivos.js)
  - `readFile()`, `writeFile()`, `appendFile()`, `unlink()`, variantes síncronas vs asíncronas con promesas (`fs/promises`).
- **2. Directorios y Metadatos**: [02_directorios_y_stats.js](./Modulo%204%20-%20File%20System%20fs/02_directorios_y_stats.js)
  - `mkdir()`, `readdir()`, `rmdir()`, obtención de tamaño y fechas con `stat()` / `lstat()`.
- **3. Observadores de Archivos**: [03_watchers.js](./Modulo%204%20-%20File%20System%20fs/03_watchers.js)
  - `fs.watch()` y `fs.watchFile()`.

---

## Módulo 5: Rutas y Rutas de Archivos (Path & URL)
*Ruta: [`Modulo 5 - Modulo Path/`](./Modulo%205%20-%20Modulo%20Path/)*

- **Teoría del Módulo**: [Modulo 5 - Modulo Path.md](./Modulo%205%20-%20Modulo%20Path/Modulo%205%20-%20Modulo%20Path.md)
- **1. Normalización y Resolución de Rutas**: [01_path_join_resolve.js](./Modulo%205%20-%20Modulo%20Path/01_path_join_resolve.js)
  - Diferencias entre `path.join()` y `path.resolve()`, manejo multiplataforma de separadores (`path.sep`).
- **2. Extracción y Desglose**: [02_path_parse_format.js](./Modulo%205%20-%20Modulo%20Path/02_path_parse_format.js)
  - `path.basename()`, `path.dirname()`, `path.extname()`, `path.parse()` y `path.format()`.

---

## Módulo 6: Arquitectura Basada en Eventos (EventEmitter)
*Ruta: [`Modulo 6 - EventEmitter/`](./Modulo%206%20-%20EventEmitter/)*

- **Teoría del Módulo**: [Modulo 6 - EventEmitter.md](./Modulo%206%20-%20EventEmitter/Modulo%206%20-%20EventEmitter.md)
- **1. Emisores de Eventos**: [01_event_emitter_basico.js](./Modulo%206%20-%20EventEmitter/01_event_emitter_basico.js)
  - `on()`, `emit()`, `once()`, `removeListener()`.
- **2. Clases que Heredan de EventEmitter**: [02_clases_con_eventos.js](./Modulo%206%20-%20EventEmitter/02_clases_con_eventos.js)
  - Creación de servicios basados en eventos (`class TareaService extends EventEmitter`).

---

## Módulo 7: Streams (Readable, Writable, Transform & Pipe)
*Ruta: [`Modulo 7 - Streams y Flujos de Datos/`](./Modulo%207%20-%20Streams%20y%20Flujos%20de%20Datos/)*

- **Teoría del Módulo**: [Modulo 7 - Streams y Flujos de Datos.md](./Modulo%207%20-%20Streams%20y%20Flujos%20de%20Datos/Modulo%207%20-%20Streams%20y%20Flujos%20de%20Datos.md)
- **1. Streams de Lectura y Escritura**: [01_readable_writable_streams.js](./Modulo%207%20-%20Streams%20y%20Flujos%20de%20Datos/01_readable_writable_streams.js)
  - `fs.createReadStream()`, `fs.createWriteStream()`, eventos `data`, `end`, `error`.
- **2. Conexión de Streams con Pipe**: [02_pipe_y_transform.js](./Modulo%207%20-%20Streams%20y%20Flujos%20de%20Datos/02_pipe_y_transform.js)
  - `stream.pipe()`, `stream/promises` con `pipeline()`, streams de transformación (*Transform*).

---

## Módulo 8: Módulos HTTP y HTTPS (Servidores y Clientes Nativos)
*Ruta: [`Modulo 8 - Servidores HTTP y HTTPS/`](./Modulo%208%20-%20Servidores%20HTTP%20y%20HTTPS/)*

- **Teoría del Módulo**: [Modulo 8 - Servidores HTTP y HTTPS.md](./Modulo%208%20-%20Servidores%20HTTP%20y%20HTTPS/Modulo%208%20-%20Servidores%20HTTP%20y%20HTTPS.md)
- **1. Creación de Servidor HTTP Nativo**: [01_servidor_http_nativo.js](./Modulo%208%20-%20Servidores%20HTTP%20y%20HTTPS/01_servidor_http_nativo.js)
  - `http.createServer()`, lectura de `req.url`, `req.method`, `req.headers`, respuestas con `res.writeHead()` y `res.end()`.
- **2. Peticiones de Cliente HTTP/HTTPS**: [02_cliente_http_request.js](./Modulo%208%20-%20Servidores%20HTTP%20y%20HTTPS/02_cliente_http_request.js)
  - Consumo de APIs con `http.get()` y `https.request()`.

---

## Módulo 9: Redes TCP y UDP (Net, Dgram & DNS)
*Ruta: [`Modulo 9 - Redes TCP UDP y DNS/`](./Modulo%209%20-%20Redes%20TCP%20UDP%20y%20DNS/)*

- **Teoría del Módulo**: [Modulo 9 - Redes TCP UDP y DNS.md](./Modulo%209%20-%20Redes%20TCP%20UDP%20y%20DNS/Modulo%209%20-%20Redes%20TCP%20UDP%20y%20DNS.md)
- **1. Servidor y Cliente TCP con Net**: [01_socket_tcp_net.js](./Modulo%209%20-%20Redes%20TCP%20UDP%20y%20DNS/01_socket_tcp_net.js)
  - `net.createServer()`, `net.connect()`, comunicación bidireccional por sockets.
- **2. Resolución de Nombres de Dominio (DNS)**: [02_resolucion_dns.js](./Modulo%209%20-%20Redes%20TCP%20UDP%20y%20DNS/02_resolucion_dns.js)
  - `dns.lookup()`, `dns.resolve4()`, `dns.resolveMx()`.

---

## Módulo 10: Procesos Hijos y Paralelismo (Child Process & Cluster)
*Ruta: [`Modulo 10 - Child Process y Cluster/`](./Modulo%2010%20-%20Child%20Process%20y%20Cluster/)*

- **Teoría del Módulo**: [Modulo 10 - Child Process y Cluster.md](./Modulo%2010%20-%20Child%20Process%20y%20Cluster/Modulo%2010%20-%20Child%20Process%20y%20Cluster.md)
- **1. Ejecución de Comandos del Sistema**: [01_child_process_exec_spawn.js](./Modulo%2010%20-%20Child%20Process%20y%20Cluster/01_child_process_exec_spawn.js)
  - `child_process.exec()`, `child_process.spawn()`, paso de streams estándar `stdin/stdout`.
- **2. Bifurcación de Procesos con Fork**: [02_child_process_fork.js](./Modulo%2010%20-%20Child%20Process%20y%20Cluster/02_child_process_fork.js)
  - `child_process.fork()` y paso de mensajes IPC (`send` / `on('message')`).

---

## Módulo 11: Seguridad y Criptografía (Crypto Module)
*Ruta: [`Modulo 11 - Criptografia Crypto/`](./Modulo%2011%20-%20Criptografia%20Crypto/)*

- **Teoría del Módulo**: [Modulo 11 - Criptografia Crypto.md](./Modulo%2011%20-%20Criptografia%20Crypto/Modulo%2011%20-%20Criptografia%20Crypto.md)
- **1. Hashes y Digestión**: [01_hashes_crypto.js](./Modulo%2011%20-%20Criptografia%20Crypto/01_hashes_crypto.js)
  - `crypto.createHash('sha256')`, generación de firmas HMAC (`createHmac`).
- **2. Claves Aleatorias y Cifrado Simétrico**: [02_cifrado_aes.js](./Modulo%2011%20-%20Criptografia%20Crypto/02_cifrado_aes.js)
  - `crypto.randomBytes()`, `crypto.createCipheriv()` y `crypto.createDecipheriv()`.

---

## Módulo 12: Utilidades, Sistema Operativo y Compresión (Util, OS & Zlib)
*Ruta: [`Modulo 12 - Util OS y Zlib/`](./Modulo%2012%20-%20Util%20OS%20y%20Zlib/)*

- **Teoría del Módulo**: [Modulo 12 - Util OS y Zlib.md](./Modulo%2012%20-%20Util%20OS%20y%20Zlib/Modulo%2012%20-%20Util%20OS%20y%20Zlib.md)
- **1. Información del Sistema Operativo con OS**: [01_modulo_os.js](./Modulo%2012%20-%20Util%20OS%20y%20Zlib/01_modulo_os.js)
  - `os.cpus()`, `os.totalmem()`, `os.freemem()`, `os.platform()`, `os.networkInterfaces()`.
- **2. Promisify e Inspección con Util**: [02_modulo_util.js](./Modulo%2012%20-%20Util%20OS%20y%20Zlib/02_modulo_util.js)
  - `util.promisify()`, `util.inspect()`, formateo de cadenas `util.format()`.
- **3. Compresión Gzip con Zlib**: [03_modulo_zlib.js](./Modulo%2012%20-%20Util%20OS%20y%20Zlib/03_modulo_zlib.js)
  - `zlib.gzip()`, `zlib.gunzip()`, compresión mediante pipelines.

---

## Módulo 13: Interfaces de Línea de Comandos (Readline & REPL)
*Ruta: [`Modulo 13 - Readline y CLI/`](./Modulo%2013%20-%20Readline%20y%20CLI/)*

- **Teoría del Módulo**: [Modulo 13 - Readline y CLI.md](./Modulo%2013%20-%20Readline%20y%20CLI/Modulo%2013%20-%20Readline%20y%20CLI.md)
- **1. Interacción por Consola con Readline**: [01_readline_preguntas.js](./Modulo%2013%20-%20Readline%20y%20CLI/01_readline_preguntas.js)
  - `readline.createInterface()`, preguntas secuenciales con `rl.question()`.

---

## Módulo 14: Pruebas Unitarias Nativas y Asertos (Assert Module)
*Ruta: [`Modulo 14 - Testing Nativo Assert/`](./Modulo%2014%20-%20Testing%20Nativo%20Assert/)*

- **Teoría del Módulo**: [Modulo 14 - Testing Nativo Assert.md](./Modulo%2014%20-%20Testing%20Nativo%20Assert/Modulo%2014%20-%20Testing%20Nativo%20Assert.md)
- **1. Asertos y Validaciones Nativas**: [01_asertos_basicos.js](./Modulo%2014%20-%20Testing%20Nativo%20Assert/01_asertos_basicos.js)
  - `assert.strictEqual()`, `assert.deepStrictEqual()`, `assert.throws()`.

---

## Módulo 15: Proyectos Prácticos Integradores de Node.js
*Ruta: [`Modulo 15 - Proyectos Practicos Node/`](./Modulo%2015%20-%20Proyectos%20Practicos%20Node/)*

- **Teoría del Módulo**: [Modulo 15 - Proyectos Practicos Node.md](./Modulo%2015%20-%20Proyectos%20Practicos%20Node/Modulo%2015%20-%20Proyectos%20Practicos%20Node.md)
- **1. Servidor de Archivos Estáticos Nativo**: [01_proyecto_servidor_estatico.js](./Modulo%2015%20-%20Proyectos%20Practicos%20Node/01_proyecto_servidor_estatico.js)
- **2. API REST CRUD Nativa con Persistencia en Archivo**: [02_proyecto_api_rest_nativa.js](./Modulo%2015%20-%20Proyectos%20Practicos%20Node/02_proyecto_api_rest_nativa.js)
- **3. CLI de Copias de Seguridad Comprimidas (Gzip + Streams)**: [03_proyecto_cli_backup.js](./Modulo%2015%20-%20Proyectos%20Practicos%20Node/03_proyecto_cli_backup.js)
- **4. Monitor de Sistema en Tiempo Real (CPU, Memoria, Uptime)**: [04_proyecto_monitor_sistema.js](./Modulo%2015%20-%20Proyectos%20Practicos%20Node/04_proyecto_monitor_sistema.js)
