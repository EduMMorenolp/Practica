// ==========================================
// TEMA 2: MÓDULO UTIL
// Para ejecutar: node "NodeJS/Modulo 12 - Util OS y Zlib/02_modulo_util.js"
// ==========================================

const util = require('util');

console.log("=== TEMA 2: UTILIDADES DE UTIL ===");

// Función estilo callback (no modificar)
function tareaConCallback(nombre, callback) {
  setTimeout(() => callback(null, 'Tarea ' + nombre + ' lista'), 20);
}

const objetoAnidado = { nivel1: { nivel2: { nivel3: { nivel4: 'profundo' } } } };

let textoFormateado = null;
let tareaPromesa = null;
let inspeccion = null;
let esPromesa = null;

// RETO 2.1: Usa util.format('%s tiene %d años', 'Ana', 30) y guárdalo en 'textoFormateado'


// RETO 2.2: Convierte tareaConCallback en una función basada en promesas con util.promisify -> 'tareaPromesa'


// RETO 2.3: Inspecciona objetoAnidado con util.inspect(..., { depth: null }) -> 'inspeccion'


// RETO 2.4: Verifica con util.types.isPromise(Promise.resolve()) y guarda el resultado en 'esPromesa'


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

  await validar('RETO 2.1 (util.format)', () => textoFormateado === 'Ana tiene 30 años', 'textoFormateado debe ser "Ana tiene 30 años"');
  await validar('RETO 2.2 (util.promisify)', async () => typeof tareaPromesa === 'function' && (await conTiempo(tareaPromesa('X'))) === 'Tarea X lista', 'tareaPromesa("X") debe resolver con "Tarea X lista"');
  await validar('RETO 2.3 (util.inspect)', () => typeof inspeccion === 'string' && inspeccion.includes('profundo'), 'inspeccion debe mostrar todos los niveles (depth: null)');
  await validar('RETO 2.4 (util.types)', () => esPromesa === true, 'esPromesa debe ser true');

  console.log('\n--- Fin de la comprobación ---\n');
})();
