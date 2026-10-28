// ==========================================
// TEMA 1: OPERACIONES CRUD DE ARCHIVOS
// Para ejecutar: node "NodeJS/Modulo 4 - File System fs/01_crud_archivos.js"
// ==========================================

const fs = require('fs/promises');
const path = require('path');

console.log("=== TEMA 1: CRUD CON FS/PROMISES ===");

const testPath = path.join(__dirname, 'archivo_prueba.txt');

async function demoFS() {
  // RETO 1.1: Escribir y leer archivo
  // TODO: Usa await fs.writeFile(testPath, "Línea inicial\n", "utf-8")
  // TODO: Usa await fs.appendFile(testPath, "Línea agregada\n")
  // TODO: Usa await fs.readFile(testPath, "utf-8") e imprime el contenido
  // TODO: Finalmente elimina el archivo de prueba con await fs.unlink(testPath)
}

demoFS();
