// ==========================================
// TEMA 2: METADATOS Y DIRECTORIOS
// Para ejecutar: node "NodeJS/Modulo 4 - File System fs/02_directorios_y_stats.js"
// ==========================================

const fs = require('fs/promises');
const path = require('path');

console.log("=== TEMA 2: METADATOS Y DIRECTORIOS ===");

const carpetaTemp = path.join(__dirname, 'carpeta_temporal');
let tamano = null;
let esArchivo = null;
let listado = null;

async function inspeccionar() {
  // RETO 2.1: Usa fs.stat(__filename) y guarda stats.size en 'tamano' y stats.isFile() en 'esArchivo'


  // RETO 2.2: Crea 'carpetaTemp' con fs.mkdir (recursive: true) y guarda en 'listado' el resultado de fs.readdir(__dirname)


  // RETO 2.3: Elimina 'carpetaTemp' con fs.rm (recursive: true, force: true)

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

  try { await conTiempo(inspeccionar()); } catch (err) { console.log('❌ inspeccionar(): ' + err.message); }
  await validar('RETO 2.1 (fs.stat)', () => tamano === require('fs').statSync(__filename).size && esArchivo === true, 'tamano debe ser stats.size y esArchivo stats.isFile()');
  await validar('RETO 2.2 (mkdir + readdir)', () => Array.isArray(listado) && listado.includes('carpeta_temporal') && listado.includes('02_directorios_y_stats.js'), 'listado debe incluir "carpeta_temporal" (créala antes de leer el directorio)');
  await validar('RETO 2.3 (fs.rm)', () => listado !== null && !require('fs').existsSync(carpetaTemp), 'carpeta_temporal sigue existiendo');

  console.log('\n--- Fin de la comprobación ---\n');
})();
