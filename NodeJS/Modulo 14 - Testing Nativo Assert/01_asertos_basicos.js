// ==========================================
// TEMA 1: ASERTOS ESTRICTOS CON ASSERT
// Para ejecutar: node "NodeJS/Modulo 14 - Testing Nativo Assert/01_asertos_basicos.js"
// ==========================================

const assert = require('assert/strict');

console.log("=== TEMA 1: PRUEBAS CON ASSERT ===");

function multiplicar(a, b) {
  return a * b;
}

// RETO 1.1: Validar igualdad estricta
// TODO: Usa assert.strictEqual(multiplicar(4, 5), 20) para verificar el resultado:


// RETO 1.2: Validar igualdad profunda de objetos
// TODO: Usa assert.deepStrictEqual({ rol: "admin", id: 1 }, { rol: "admin", id: 1 })
// para verificar la comparación de objetos:
