// ==========================================
// TEMA 3: FS.WATCH
// Para ejecutar: node "NodeJS/Modulo 4 - File System fs/03_watchers.js"
// ==========================================

const fs = require('fs');
const path = require('path');

console.log("=== TEMA 3: FS.WATCH ===");

const eventosDetectados = [];
let observador = null;

// RETO 3.1: Observar cambios en el directorio actual
// TODO: Asigna a 'observador' un fs.watch(__dirname, (tipoEvento, nombreArchivo) => { ... })
// que imprima el evento y haga eventosDetectados.push(nombreArchivo)


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

  if (!observador) {
    console.log('❌ RETO 3.1: "observador" sigue en null (asígnale fs.watch(...)).');
  } else {
    const temp = path.join(__dirname, 'temp_watch.txt');
    fs.writeFileSync(temp, 'cambio');
    await new Promise((r) => setTimeout(r, 300));
    fs.unlinkSync(temp);
    await new Promise((r) => setTimeout(r, 200));
    observador.close();
    await validar('RETO 3.1 (fs.watch)', () => eventosDetectados.includes('temp_watch.txt'), 'No se detectó el cambio en temp_watch.txt (¿hiciste push del nombreArchivo?)');
  }

  console.log('\n--- Fin de la comprobación ---\n');
})();
