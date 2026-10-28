// ==========================================
// TEMA 2: UTIL.PROMISIFY
// Para ejecutar: node "NodeJS/Modulo 12 - Util OS y Zlib/02_modulo_util.js"
// ==========================================

const util = require('util');

console.log("=== TEMA 2: UTIL.PROMISIFY ===");

// Función clásica basada en callbacks
function operacionLenta(datos, callback) {
  setTimeout(() => callback(null, "Procesado: " + datos), 30);
}

// RETO 2.1: Convertir a Promesa con util.promisify
// TODO: Convierte operacionLenta con const operacionPromesa = util.promisify(operacionLenta)
// y ejecútala usando .then() o async/await:
