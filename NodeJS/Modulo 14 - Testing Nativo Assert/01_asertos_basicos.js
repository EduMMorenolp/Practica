// ==========================================
// TEMA 1: PRUEBAS CON ASSERT
// Para ejecutar: node "NodeJS/Modulo 14 - Testing Nativo Assert/01_asertos_basicos.js"
// ==========================================

const assert = require('assert/strict');

// ⚙️ No modificar: cuenta las aserciones que ejecutas para la validación final
const usosAssert = { strictEqual: 0, deepStrictEqual: 0, throws: 0 };
for (const metodo of Object.keys(usosAssert)) {
  const original = assert[metodo];
  assert[metodo] = (...args) => { usosAssert[metodo]++; return original(...args); };
}

console.log("=== TEMA 1: PRUEBAS CON ASSERT ===");

function multiplicar(a, b) {
  return a * b;
}

function crearUsuario(nombre) {
  return { nombre, rol: 'user' };
}

// RETO 1.1: Implementa dividir(a, b): retorna a / b, pero si b es 0 lanza new Error("División por cero")
function dividir(a, b) {

}

// RETO 1.2: Dentro de testMultiplicar() usa assert.strictEqual para verificar que multiplicar(4, 5) es 20
function testMultiplicar() {

}

// RETO 1.3: Dentro de testObjetos() usa assert.deepStrictEqual para verificar que
// crearUsuario('ana') es igual a { nombre: 'ana', rol: 'user' }
function testObjetos() {

}

// RETO 1.4: Dentro de testErrores() usa assert.throws para verificar que dividir(10, 0)
// lanza un error con el mensaje /División por cero/
function testErrores() {

}


// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA (no modificar)
// ==========================================
async function validar(nombre, condicion, pista) {
  try {
    if (await condicion()) {
      console.log('✔ ' + nombre);
      return true;
    }
    console.log('❌ ' + nombre + ': ' + pista);
  } catch (err) {
    console.log('❌ ' + nombre + ': Error -> ' + err.message);
  }
  return false;
}

function conTiempo(promesa, ms = 1500) {
  let id;
  const limite = new Promise((_, rechazar) => {
    id = setTimeout(() => rechazar(new Error('Tiempo agotado (' + ms + 'ms). ¿Falta llamar a resolve() o al callback?')), ms);
  });
  return Promise.race([Promise.resolve(promesa), limite]).finally(() => clearTimeout(id));
}

(async () => {
  console.log('\n--- Comprobación ---');

  await validar('RETO 1.1 (dividir)', () => dividir(10, 2) === 5 && (() => { try { dividir(1, 0); return false; } catch (e) { return e.message === 'División por cero'; } })(), 'dividir(10, 2) debe dar 5 y dividir(1, 0) lanzar "División por cero"');
  await validar('RETO 1.2 (strictEqual)', () => { testMultiplicar(); return usosAssert.strictEqual > 0; }, 'testMultiplicar() no ejecutó assert.strictEqual');
  await validar('RETO 1.3 (deepStrictEqual)', () => { testObjetos(); return usosAssert.deepStrictEqual > 0; }, 'testObjetos() no ejecutó assert.deepStrictEqual');
  await validar('RETO 1.4 (throws)', () => { testErrores(); return usosAssert.throws > 0; }, 'testErrores() no ejecutó assert.throws');

  console.log('\n--- Fin de la comprobación ---\n');
})();
