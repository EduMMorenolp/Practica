# 📖 Módulo 5: Rutas y Rutas de Archivos (Path & URL)

El módulo `path` provee utilidades para trabajar con rutas de archivos y directorios de forma independiente al sistema operativo (Windows usa `\`, POSIX usa `/`).

---

## 1. Normalización y Resolución
- `path.join(...segmentos)`: Concatena fragmentos de rutas normalizando separadores.
- `path.resolve(...segmentos)`: Resuelve una ruta absoluta desde el directorio de trabajo actual.
- `path.sep`: Separador del sistema operativo (`\` en Windows, `/` en Linux/Mac).

---

## 2. Desglose y Extracción
- `path.basename(ruta, [ext])`: Nombre del archivo (opcionalmente sin extensión).
- `path.dirname(ruta)`: Directorio padre.
- `path.extname(ruta)`: Extensión (`.js`, `.json`).
- `path.parse(ruta)`: Desglosa la ruta en un objeto (`root`, `dir`, `base`, `ext`, `name`).

---

## 🛠️ Ejercicios Prácticos del Módulo (1 a 1 por tema)

1. [01_path_join_resolve.js](./01_path_join_resolve.js):
   - **1.1** Comparar `path.join()` vs `path.resolve()`.

2. [02_path_parse_format.js](./02_path_parse_format.js):
   - **2.1** Desglosar una ruta con `path.parse()` y extraer componentes.
