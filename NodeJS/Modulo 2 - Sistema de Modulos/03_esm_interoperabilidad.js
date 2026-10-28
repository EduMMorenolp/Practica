// ==========================================
// TEMA 3: IMPORT DINÁMICO
// Para ejecutar: node "NodeJS/Modulo 2 - Sistema de Modulos/03_esm_interoperabilidad.js"
// ==========================================

console.log("=== TEMA 3: IMPORT DINÁMICO (ESM DESDE COMMONJS) ===");

let separador = null;
let plataformaESM = null;

async function cargarModulos() {
  // RETO 3.1: Importa dinámicamente el módulo nativo 'path' con await import('path')
  // TODO: Guarda path.sep en 'separador' e imprímelo


  // RETO 3.2: Importa 'os' con await import('node:os')
  // TODO: Guarda os.platform() en 'plataformaESM'

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

  try { await conTiempo(cargarModulos()); } catch (err) { console.log('❌ cargarModulos(): ' + err.message); }
  await validar('RETO 3.1 (import("path"))', () => separador === require('path').sep, 'separador debe ser path.sep obtenido con import()');
  await validar('RETO 3.2 (import("node:os"))', () => plataformaESM === process.platform, 'plataformaESM debe ser os.platform()');

  console.log('\n--- Fin de la comprobación ---\n');
})();
