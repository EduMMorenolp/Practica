// ==========================================
// PROYECTO 3: CLI DE BACKUP CON GZIP Y STREAMS
// Para ejecutar: node "NodeJS/Modulo 15 - Proyectos Practicos Node/03_proyecto_cli_backup.js"
// ==========================================

const fs = require('fs');
const zlib = require('zlib');
const { pipeline } = require('stream/promises');
const path = require('path');

console.log("=== PROYECTO 3: CLI BACKUP COMPRIMIDO ===");

async function respaldarArchivo(origen, destinoGz) {
  // RETO 3.1: Conectar stream de lectura -> gzip -> stream de escritura con pipeline()
  // TODO: Implementa la compresión mediante pipeline(fs.createReadStream(...), zlib.createGzip(), fs.createWriteStream(...)):
}

console.log("Función de respaldo declarada.");
