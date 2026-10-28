// ==========================================
// TEMA 3: COMPRESIÓN CON ZLIB
// Para ejecutar: node "NodeJS/Modulo 12 - Util OS y Zlib/03_modulo_zlib.js"
// ==========================================

const zlib = require('zlib');
const util = require('util');

const gzip = util.promisify(zlib.gzip);

console.log("=== TEMA 3: COMPRESIÓN GZIP ===");

async function comprimir() {
  const textoLargo = "Aprender Node.js a mano ".repeat(100);
  // RETO 3.1: Comprimir texto
  // TODO: Usa await gzip(textoLargo) e imprime la longitud original vs la comprimida:
}

comprimir();
