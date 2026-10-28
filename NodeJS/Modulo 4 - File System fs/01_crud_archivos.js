// ==========================================
// TEMA 1: CRUD CON FS/PROMISES
// Para ejecutar: node "NodeJS/Modulo 4 - File System fs/01_crud_archivos.js"
// ==========================================

const fs = require('fs/promises');
const path = require('path');

console.log("=== TEMA 1: CRUD CON FS/PROMISES ===");

const testPath = path.join(__dirname, 'archivo_prueba.txt');
let contenidoLeido = null;

async function demoFS() {
  // RETO 1.1: Crea el archivo con fs.writeFile(testPath, "Línea inicial\n", "utf-8")


  // RETO 1.2: Agrega "Línea agregada\n" con fs.appendFile()


  // RETO 1.3: Lee el archivo con fs.readFile() en 'contenidoLeido' e imprímelo


  // RETO 1.4: Elimina el archivo con fs.unlink()

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

  try { await conTiempo(demoFS()); } catch (err) { console.log('❌ demoFS(): ' + err.message); }
  await validar('RETO 1.1/1.2/1.3 (escribir, agregar y leer)', () => contenidoLeido === 'Línea inicial\nLínea agregada\n', 'contenidoLeido debe ser "Línea inicial\\nLínea agregada\\n"');
  await validar('RETO 1.4 (unlink)', () => contenidoLeido !== null && !require('fs').existsSync(testPath), 'El archivo de prueba sigue existiendo o nunca se creó');

  console.log('\n--- Fin de la comprobación ---\n');
})();
