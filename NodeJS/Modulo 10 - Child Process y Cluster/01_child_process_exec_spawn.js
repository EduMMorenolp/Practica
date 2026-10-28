// ==========================================
// TEMA 1: EXEC Y SPAWN
// Para ejecutar: node "NodeJS/Modulo 10 - Child Process y Cluster/01_child_process_exec_spawn.js"
// ==========================================

const { exec, spawn } = require('child_process');

console.log("=== TEMA 1: CHILD_PROCESS EXEC Y SPAWN ===");

// RETO 1.1: exec()
// TODO: ejecutarVersion() debe retornar una Promise que ejecute el comando 'node -v' con exec()
// y resuelva con el stdout sin espacios (trim). Si hay error, rechaza.
function ejecutarVersion() {

}

// RETO 1.2: spawn()
// TODO: ejecutarConSpawn() debe hacer spawn(process.execPath, ['-e', "console.log('desde spawn')"]),
// acumular hijo.stdout.on('data') y en 'close' resolver con el texto (trim)
function ejecutarConSpawn() {

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

  await validar('RETO 1.1 (exec)', async () => (await conTiempo(ejecutarVersion(), 5000)) === process.version, 'ejecutarVersion() debería resolver con ' + process.version);
  await validar('RETO 1.2 (spawn)', async () => (await conTiempo(ejecutarConSpawn(), 5000)) === 'desde spawn', 'ejecutarConSpawn() debería resolver con "desde spawn"');

  console.log('\n--- Fin de la comprobación ---\n');
})();
