// ==========================================
// TEMA 3: OBSERVADORES DE ARCHIVOS (FS.WATCH)
// Para ejecutar: node "NodeJS/Modulo 4 - File System fs/03_watchers.js"
// ==========================================

const fs = require('fs');

console.log("=== TEMA 3: FS.WATCH ===");

// RETO 3.1: Observar cambios en el directorio actual
// TODO: Declara un observador con fs.watch(__dirname, (eventType, filename) => { ... })
// e imprime el tipo de evento y nombre de archivo afectado:
console.log("Observador configurado en:", __dirname);
