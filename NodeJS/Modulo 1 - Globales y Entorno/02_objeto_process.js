// ==========================================
// TEMA 2: EL OBJETO PROCESS
// Para ejecutar: node "NodeJS/Modulo 1 - Globales y Entorno/02_objeto_process.js"
// ==========================================

console.log("=== TEMA 2: OBJETO PROCESS ===");

let versionNode = null;
let plataforma = null;
let modo = null;
let argumentos = null;
let memoriaMB = null;

// RETO 2.1: Información del proceso
// TODO: Asigna process.version a 'versionNode' y process.platform a 'plataforma'


// RETO 2.2: Variables de entorno
// TODO: Asigna process.env.APP_MODO = "practica" y luego lee ese valor en 'modo'


// RETO 2.3: Argumentos de línea de comandos
// TODO: Guarda en 'argumentos' solo los argumentos del usuario (process.argv sin los 2 primeros)
// Prueba: node archivo.js hola mundo


// RETO 2.4: Uso de memoria
// TODO: Guarda en 'memoriaMB' el heapUsed de process.memoryUsage() convertido a MB (redondeado)


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

  await validar('RETO 2.1 (version y platform)', () => versionNode === process.version && plataforma === process.platform, 'Usa process.version y process.platform');
  await validar('RETO 2.2 (process.env)', () => modo === 'practica' && process.env.APP_MODO === 'practica', 'process.env.APP_MODO debe ser "practica" y leerse en modo');
  await validar('RETO 2.3 (process.argv)', () => Array.isArray(argumentos) && argumentos.length === process.argv.length - 2, 'argumentos debe ser process.argv.slice(2)');
  await validar('RETO 2.4 (memoryUsage)', () => Number.isInteger(memoriaMB) && memoriaMB > 0 && memoriaMB < 2048, 'memoriaMB debe ser un entero en MB (Math.round(heapUsed / 1024 / 1024))');

  console.log('\n--- Fin de la comprobación ---\n');
})();
