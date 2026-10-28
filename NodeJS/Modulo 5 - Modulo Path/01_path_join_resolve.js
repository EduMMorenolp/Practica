// ==========================================
// TEMA 1: JOIN, RESOLVE Y NORMALIZE
// Para ejecutar: node "NodeJS/Modulo 5 - Modulo Path/01_path_join_resolve.js"
// ==========================================

const path = require('path');

console.log("=== TEMA 1: JOIN Y RESOLVE ===");

let rutaUnida = null;
let rutaAbsoluta = null;
let rutaNormalizada = null;
let nombreArchivo = null;
let extension = null;

// RETO 1.1: Une "carpeta", "subcarpeta", "archivo.txt" con path.join en 'rutaUnida'
//           y obtén la versión absoluta con path.resolve en 'rutaAbsoluta'


// RETO 1.2: Normaliza "/a/b/../c/./d.txt" con path.normalize en 'rutaNormalizada'


// RETO 1.3: Guarda en 'nombreArchivo' el nombre de este archivo (path.basename) y en 'extension' su extensión (path.extname)


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

  await validar('RETO 1.1 (path.join)', () => rutaUnida === ['carpeta', 'subcarpeta', 'archivo.txt'].join(path.sep), 'rutaUnida debe unir los 3 segmentos con el separador del sistema');
  await validar('RETO 1.1 (path.resolve)', () => typeof rutaAbsoluta === 'string' && path.isAbsolute(rutaAbsoluta) && rutaAbsoluta.endsWith(rutaUnida || '###'), 'rutaAbsoluta debe ser absoluta y terminar en la rutaUnida');
  await validar('RETO 1.2 (path.normalize)', () => rutaNormalizada === ['', 'a', 'c', 'd.txt'].join(path.sep), 'rutaNormalizada debería resolver ".." y "." -> /a/c/d.txt');
  await validar('RETO 1.3 (basename / extname)', () => nombreArchivo === '01_path_join_resolve.js' && extension === '.js', 'nombreArchivo y extension no coinciden');

  console.log('\n--- Fin de la comprobación ---\n');
})();
