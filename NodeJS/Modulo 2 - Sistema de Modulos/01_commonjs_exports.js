// ==========================================
// TEMA 1: COMMONJS EXPORTS
// Para ejecutar: node "NodeJS/Modulo 2 - Sistema de Modulos/01_commonjs_exports.js"
// ==========================================

console.log("=== TEMA 1: COMMONJS EXPORTS ===");

// RETO 1.1: Declara las funciones sumar(a, b), restar(a, b) y multiplicar(a, b)


// RETO 1.2: Exporta las tres funciones con module.exports = { ... }


// RETO 1.3: Agrega la propiedad 'version' = "1.0.0" usando module.exports.version
// (Ojo: si usas exports.version DESPUÉS de reasignar module.exports, no funcionará. ¿Por qué?)


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

  const mod = require(__filename); // Este archivo se importa a sí mismo
  await validar('RETO 1.1/1.2 (sumar exportada)', () => typeof mod.sumar === 'function' && mod.sumar(20, 30) === 50, 'module.exports.sumar(20, 30) debería dar 50');
  await validar('RETO 1.1/1.2 (restar exportada)', () => typeof mod.restar === 'function' && mod.restar(50, 15) === 35, 'module.exports.restar(50, 15) debería dar 35');
  await validar('RETO 1.1/1.2 (multiplicar exportada)', () => typeof mod.multiplicar === 'function' && mod.multiplicar(4, 5) === 20, 'module.exports.multiplicar(4, 5) debería dar 20');
  await validar('RETO 1.3 (version)', () => mod.version === '1.0.0', 'module.exports.version debe ser "1.0.0"');

  console.log('\n--- Fin de la comprobación ---\n');
})();
