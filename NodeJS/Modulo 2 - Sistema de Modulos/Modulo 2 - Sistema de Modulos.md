# 📖 Módulo 2: Sistema de Módulos (CommonJS, ESM & Require)

Node.js organiza el código en módulos aislados para permitir reutilización y mantenibilidad.

---

## 1. CommonJS (module.exports y exports)
- `module.exports`: Objeto que se expone fuera del archivo. Puede ser una función, un objeto o una clase.
- `exports`: Acceso directo por referencia a `module.exports`. (Precaución: reasignar `exports = ...` rompe la referencia).

---

## 2. Require y su Caché
- `require('./ruta')`: Carga y ejecuta el módulo sincrónicamente.
- `require.cache`: Almacén en memoria de módulos ya cargados. Las llamadas posteriores retornan la instancia cacheada sin re-ejecutar.
- `require.resolve()`: Obtiene la ruta absoluta de un módulo sin cargarlo.

---

## 3. Módulos ES (ESM)
- En Node moderno puedes usar `import` y `export` usando la extensión `.mjs` o agregando `"type": "module"` en `package.json`.
- Importaciones dinámicas: `import('./modulo.js')` retorna una Promesa.

---

## 🛠️ Ejercicios Prácticos del Módulo (1 a 1 por tema)

1. [01_commonjs_exports.js](./01_commonjs_exports.js):
   - **1.1** Exportar funciones matemáticas con `module.exports`.
   - **1.2** Consumir el módulo local mediante `require()`.

2. [02_require_cache.js](./02_require_cache.js):
   - **2.1** Inspeccionar y comprobar la caché de módulos en `require.cache`.

3. [03_esm_interoperabilidad.js](./03_esm_interoperabilidad.js):
   - **3.1** Importación dinámica con `import()`.
