// ==========================================
// TEMA 1: READABLE STREAMS
// Para ejecutar: node "NodeJS/Modulo 7 - Streams y Flujos de Datos/01_readable_writable_streams.js"
// ==========================================

const fs = require('fs');

console.log("=== TEMA 1: STREAMS DE LECTURA ===");

// RETO 1.1: Leer este mismo archivo mediante chunks con createReadStream
// TODO: Crea un readStream para __filename con { encoding: 'utf-8', highWaterMark: 64 }.
// Escucha el evento 'data' (imprime el tamaño del chunk) y el evento 'end':
