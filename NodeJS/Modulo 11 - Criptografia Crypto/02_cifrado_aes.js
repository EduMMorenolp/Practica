// ==========================================
// TEMA 2: CIFRADO SIMÉTRICO AES
// Para ejecutar: node "NodeJS/Modulo 11 - Criptografia Crypto/02_cifrado_aes.js"
// ==========================================

const crypto = require('crypto');

console.log("=== TEMA 2: CIFRADO AES-256-CBC ===");

const ALGORITMO = 'aes-256-cbc';
const clave = crypto.randomBytes(32); // 256 bits
const iv = crypto.randomBytes(16);    // vector de inicialización

// RETO 2.1: cifrar(texto) -> usa crypto.createCipheriv(ALGORITMO, clave, iv),
// .update(texto, 'utf8', 'hex') + .final('hex') y retorna el texto cifrado en hex
function cifrar(texto) {

}

// RETO 2.2: descifrar(cifradoHex) -> usa crypto.createDecipheriv(...) y retorna el texto original
function descifrar(cifradoHex) {

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

  const original = 'Mensaje secreto';
  let cifrado = null;
  await validar('RETO 2.1 (cifrar)', () => { cifrado = cifrar(original); return typeof cifrado === 'string' && /^[0-9a-f]+$/.test(cifrado) && cifrado !== original; }, 'cifrar() debe retornar un string hexadecimal distinto del original');
  await validar('RETO 2.2 (descifrar)', () => cifrado && descifrar(cifrado) === original, 'descifrar(cifrar(texto)) debe devolver el texto original');

  console.log('\n--- Fin de la comprobación ---\n');
})();
