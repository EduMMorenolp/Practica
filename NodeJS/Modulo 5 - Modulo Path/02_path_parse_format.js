// ==========================================
// TEMA 2: PARSE, FORMAT Y RELATIVE
// Para ejecutar: node "NodeJS/Modulo 5 - Modulo Path/02_path_parse_format.js"
// ==========================================

const path = require('path');

console.log("=== TEMA 2: DESGLOSE DE RUTAS ===");

const rutaEjemplo = "/usuarios/proyecto/servidor.min.js";

let partes = null;
let rutaFormateada = null;
let rutaRelativa = null;

// RETO 2.1: Desglosa 'rutaEjemplo' con path.posix.parse() en 'partes' e imprime ext, name y base


// RETO 2.2: Construye con path.posix.format() la ruta '/tmp/salida/reporte.pdf'
// a partir de { dir, name, ext } y guárdala en 'rutaFormateada'


// RETO 2.3: Calcula con path.posix.relative() cómo ir de '/data/a/b' a '/data/a/c/d.txt' en 'rutaRelativa'


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

  await validar('RETO 2.1 (parse)', () => partes && partes.ext === '.js' && partes.name === 'servidor.min' && partes.base === 'servidor.min.js', 'partes debe tener ext ".js", name "servidor.min" y base "servidor.min.js"');
  await validar('RETO 2.2 (format)', () => rutaFormateada === '/tmp/salida/reporte.pdf', 'rutaFormateada debe ser "/tmp/salida/reporte.pdf"');
  await validar('RETO 2.3 (relative)', () => rutaRelativa === '../c/d.txt', 'rutaRelativa debe ser "../c/d.txt"');

  console.log('\n--- Fin de la comprobación ---\n');
})();
