// ==========================================
// TEMA 2: PIPE ENTRE STREAMS
// Para ejecutar: node "NodeJS/Modulo 7 - Streams y Flujos de Datos/02_pipe_y_transform.js"
// ==========================================

const { Readable } = require('stream');

console.log("=== TEMA 2: PIPE ===");

// RETO 2.1: Enviar un stream a process.stdout usando .pipe()
// TODO: Crea un Readable con Readable.from(["Chunk 1\n", "Chunk 2\n"])
// y envíalo a la consola con .pipe(process.stdout):
