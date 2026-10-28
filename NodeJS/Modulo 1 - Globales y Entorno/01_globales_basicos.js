// ==========================================
// TEMA 1: VARIABLES GLOBALES Y ENTORNO
// Para ejecutar: node "NodeJS/Modulo 1 - Globales y Entorno/01_globales_basicos.js"
// ==========================================

console.log("=== TEMA 1: VARIABLES GLOBALES EN NODE.JS ===");

let directorioActual = null;
let archivoActual = null;

// RETO 1.1: Rutas absolutas del archivo actual
// TODO: Asigna __dirname a 'directorioActual' y __filename a 'archivoActual' e imprímelos


// RETO 1.2: El objeto 'global' y 'globalThis'
// TODO: Agrega la propiedad 'NOMBRE_APP' con valor "PracticeNode" al objeto 'global'
// e imprime globalThis.NOMBRE_APP para comprobar que apuntan al mismo objeto


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

  await validar('RETO 1.1 (__dirname)', () => directorioActual === __dirname, 'directorioActual debe valer __dirname');
  await validar('RETO 1.1 (__filename)', () => archivoActual === __filename, 'archivoActual debe valer __filename');
  await validar('RETO 1.2 (global / globalThis)', () => globalThis.NOMBRE_APP === 'PracticeNode', 'global.NOMBRE_APP debe ser "PracticeNode"');

  console.log('\n--- Fin de la comprobación ---\n');
})();
