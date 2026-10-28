// ==========================================
// TEMA 2: TRANSFORM Y PIPELINE
// Para ejecutar: node "NodeJS/Modulo 7 - Streams y Flujos de Datos/02_pipe_y_transform.js"
// ==========================================

const { Readable, Writable, Transform } = require('stream');
const { pipeline } = require('stream/promises');

console.log("=== TEMA 2: TRANSFORM Y PIPELINE ===");

// RETO 2.1: Fábrica de Transform
// TODO: crearMayusculas() debe RETORNAR un new Transform({ transform(chunk, encoding, callback) { ... } })
// que pase cada chunk a mayúsculas con callback(null, ...)
function crearMayusculas() {

}

// RETO 2.2: Pipeline completo
// TODO: procesar(fragmentos) debe usar await pipeline(Readable.from(fragmentos), crearMayusculas(), colector)
// donde 'colector' es un Writable que acumula el texto. Retorna el texto acumulado.
async function procesar(fragmentos) {

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

  await validar('RETO 2.1 (Transform)', () => crearMayusculas() instanceof Transform, 'crearMayusculas() debe retornar una instancia de Transform');
  await validar('RETO 2.2 (pipeline)', async () => (await conTiempo(procesar(['hola ', 'streams']))) === 'HOLA STREAMS', 'procesar(["hola ", "streams"]) debería retornar "HOLA STREAMS"');

  console.log('\n--- Fin de la comprobación ---\n');
})();
