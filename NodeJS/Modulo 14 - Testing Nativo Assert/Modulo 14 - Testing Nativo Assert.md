# 📖 Módulo 14: Pruebas Unitarias Nativas y Asertos (Assert Module)

Node.js cuenta con el módulo nativo `assert` para verificar invariantes de código y crear pruebas unitarias sin dependencias externas.

---

## 1. Asertos Estrictos
- `assert.strictEqual(actual, esperado)`: Comprobación estricta con `===`.
- `assert.deepStrictEqual(actual, esperado)`: Comprobación recursiva profunda de propiedades en objetos y arrays.
- `assert.throws(bloqueFn, errorEsperado)`: Comprueba que una función lance un error.

---

## 🛠️ Ejercicios Prácticos del Módulo (1 a 1 por tema)

1. [01_asertos_basicos.js](./01_asertos_basicos.js):
   - **1.1** Verificar valores primitivos con `strictEqual`.
   - **1.2** Comparar objetos con `deepStrictEqual`.
