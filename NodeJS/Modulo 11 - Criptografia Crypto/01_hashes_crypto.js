// ==========================================
// TEMA 1: HASHES, HMAC Y ALEATORIOS
// Para ejecutar: node "NodeJS/Modulo 11 - Criptografia Crypto/01_hashes_crypto.js"
// ==========================================

const crypto = require('crypto');

console.log("=== TEMA 1: HASHES CON CRYPTO ===");

let hashSha256 = null;
let firmaHmac = null;
let tokenAleatorio = null;
let identificador = null;

// RETO 1.1: Calcula el hash SHA-256 en hexadecimal de "practica" (createHash) y guárdalo en 'hashSha256'


// RETO 1.2: Firma "mensaje" con HMAC-SHA256 usando la clave "clave-secreta" (createHmac) en 'firmaHmac'


// RETO 1.3: Genera 16 bytes aleatorios en hexadecimal (randomBytes) en 'tokenAleatorio'


// RETO 1.4: Genera un UUID v4 (randomUUID) en 'identificador'


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

  await validar('RETO 1.1 (SHA-256)', () => hashSha256 === crypto.createHash('sha256').update('practica').digest('hex'), 'hashSha256 no coincide con SHA-256 de "practica" en hex');
  await validar('RETO 1.2 (HMAC)', () => firmaHmac === crypto.createHmac('sha256', 'clave-secreta').update('mensaje').digest('hex'), 'firmaHmac no coincide');
  await validar('RETO 1.3 (randomBytes)', () => /^[0-9a-f]{32}$/.test(tokenAleatorio || ''), 'tokenAleatorio debe tener 32 caracteres hexadecimales');
  await validar('RETO 1.4 (randomUUID)', () => /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/.test(identificador || ''), 'identificador debe ser un UUID v4');

  console.log('\n--- Fin de la comprobación ---\n');
})();
