// ==========================================
// TEMA 1: MÓDULO OS
// Para ejecutar: node "NodeJS/Modulo 12 - Util OS y Zlib/01_modulo_os.js"
// ==========================================

const os = require('os');

console.log("=== TEMA 1: INFORMACIÓN DEL SISTEMA ===");

let infoSistema = null;

// RETO 1.1: Guarda en 'infoSistema' un objeto con:
// - plataforma: os.platform()
// - arquitectura: os.arch()
// - nucleos: cantidad de CPUs (os.cpus().length)
// - memoriaTotalGB: os.totalmem() en GB con 2 decimales (como número)
// - hostname: os.hostname()
// Imprímelo con console.table(infoSistema)


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

  const i = infoSistema || {};
  await validar('RETO 1.1 (plataforma / arquitectura)', () => i.plataforma === os.platform() && i.arquitectura === os.arch(), 'Faltan plataforma o arquitectura');
  await validar('RETO 1.1 (núcleos)', () => i.nucleos === os.cpus().length, 'nucleos debe ser os.cpus().length');
  await validar('RETO 1.1 (memoria en GB)', () => typeof i.memoriaTotalGB === 'number' && Math.abs(i.memoriaTotalGB - os.totalmem() / 1024 ** 3) < 0.01, 'memoriaTotalGB debe ser un número en GB con 2 decimales');
  await validar('RETO 1.1 (hostname)', () => i.hostname === os.hostname(), 'hostname debe ser os.hostname()');

  console.log('\n--- Fin de la comprobación ---\n');
})();
