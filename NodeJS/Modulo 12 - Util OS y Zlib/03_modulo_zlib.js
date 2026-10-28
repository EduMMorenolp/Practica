// ==========================================
// TEMA 3: COMPRESIÓN CON ZLIB
// Para ejecutar: node "NodeJS/Modulo 12 - Util OS y Zlib/03_modulo_zlib.js"
// ==========================================

const zlib = require('zlib');
const util = require('util');

console.log("=== TEMA 3: COMPRESIÓN CON ZLIB ===");

const textoLargo = 'Node.js comprime datos con zlib. '.repeat(50);

let comprimido = null;
let descomprimido = null;
let deflateAsync = null;

// RETO 3.1: Comprime 'textoLargo' con zlib.gzipSync() en 'comprimido' e imprime ambos tamaños


// RETO 3.2: Descomprime con zlib.gunzipSync() y guarda el texto en 'descomprimido'


// RETO 3.3: Crea 'deflateAsync' con util.promisify(zlib.deflate) (lo usará la validación)


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

  await validar('RETO 3.1 (gzipSync)', () => Buffer.isBuffer(comprimido) && comprimido.length < Buffer.byteLength(textoLargo), 'comprimido debe ser un Buffer más pequeño que el texto original');
  await validar('RETO 3.2 (gunzipSync)', () => descomprimido === textoLargo, 'descomprimido debe ser igual a textoLargo');
  await validar('RETO 3.3 (deflate con promesas)', async () => {
    const r = await conTiempo(deflateAsync(Buffer.from(textoLargo)));
    return Buffer.isBuffer(r) && zlib.inflateSync(r).toString() === textoLargo;
  }, 'deflateAsync debe ser util.promisify(zlib.deflate)');

  console.log('\n--- Fin de la comprobación ---\n');
})();
