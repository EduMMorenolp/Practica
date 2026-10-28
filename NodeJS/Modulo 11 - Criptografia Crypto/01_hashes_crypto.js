// ==========================================
// TEMA 1: HASHES SHA-256 Y HMAC
// Para ejecutar: node "NodeJS/Modulo 11 - Criptografia Crypto/01_hashes_crypto.js"
// ==========================================

const crypto = require('crypto');

console.log("=== TEMA 1: HASHES CON CRYPTO ===");

const passwordTextoPlano = "MiClaveSuperSegura2026";

// RETO 1.1: Generar hash SHA-256 en formato hexadecimal
// TODO: Usa crypto.createHash('sha256').update(passwordTextoPlano).digest('hex') e imprime el hash:
