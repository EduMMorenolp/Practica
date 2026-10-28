# 📖 Módulo 12: Utilidades, Sistema Operativo y Compresión (Util, OS & Zlib)

Tres módulos de utilidad esenciales para monitoreo de hardware, compresión de archivos y conversión de funciones.

---

## 1. Módulo OS
- `os.cpus()`: Información sobre núcleos de CPU.
- `os.totalmem()` y `os.freemem()`: Memoria RAM total y disponible.
- `os.platform()` y `os.homedir()`: Sistema operativo y carpeta del usuario.

---

## 2. Módulo Util
- `util.promisify(fnConCallback)`: Convierte funciones clásicas con callbacks a Promesas compatibles con `async/await`.
- `util.format(patron, ...args)`: Interpolador al estilo printf.

---

## 3. Módulo Zlib (Compresión)
- `zlib.gzip()` / `zlib.gunzip()`: Comprime y descomprime flujos binarios.

---

## 🛠️ Ejercicios Prácticos del Módulo (1 a 1 por tema)

1. [01_modulo_os.js](./01_modulo_os.js):
   - **1.1** Consultar CPU, plataforma y memoria RAM.

2. [02_modulo_util.js](./02_modulo_util.js):
   - **2.1** Promisificar una función de callback con `util.promisify()`.

3. [03_modulo_zlib.js](./03_modulo_zlib.js):
   - **3.1** Comprimir un texto usando `zlib.gzip()`.
