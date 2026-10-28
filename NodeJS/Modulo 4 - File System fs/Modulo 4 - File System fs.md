# 📖 Módulo 4: Sistema de Archivos (File System - fs & fs/promises)

El módulo nativo `fs` provee APIs completas para interactuar con el sistema de archivos local de forma síncrona, asíncrona mediante callbacks o con Promesas (`fs/promises`).

---

## 1. Operaciones CRUD con Archivos
- `fs.promises.writeFile(ruta, contenido, 'utf-8')`: Escribe o sobrescribe un archivo.
- `fs.promises.readFile(ruta, 'utf-8')`: Lee el archivo como string.
- `fs.promises.appendFile(ruta, contenido)`: Añade contenido al final.
- `fs.promises.unlink(ruta)`: Elimina un archivo.

---

## 2. Directorios y Metadatos
- `fs.promises.mkdir(ruta, { recursive: true })`: Crea carpetas y subcarpetas.
- `fs.promises.readdir(ruta)`: Lista los archivos y subdirectorios.
- `fs.promises.stat(ruta)`: Retorna un objeto `Stats` con tamaño, fecha y métodos (`.isFile()`, `.isDirectory()`).

---

## 🛠️ Ejercicios Prácticos del Módulo (1 a 1 por tema)

1. [01_crud_archivos.js](./01_crud_archivos.js):
   - **1.1** Escribir, leer y anexar datos con `fs.promises`.

2. [02_directorios_y_stats.js](./02_directorios_y_stats.js):
   - **2.1** Inspeccionar metadatos de un archivo con `fs.promises.stat()`.

3. [03_watchers.js](./03_watchers.js):
   - **3.1** Monitoreo de eventos con `fs.watch()`.
