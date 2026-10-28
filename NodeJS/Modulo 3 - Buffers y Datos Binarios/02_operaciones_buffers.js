// ==========================================
// TEMA 2: CONCATENACIÓN Y BYTES DE BUFFERS
// Para ejecutar: node "NodeJS/Modulo 3 - Buffers y Datos Binarios/02_operaciones_buffers.js"
// ==========================================

console.log("=== TEMA 2: CONCATENACIÓN DE BUFFERS ===");

const parte1 = Buffer.from("Hola, ");
const parte2 = Buffer.from("Mundo Binario!");

// RETO 2.1: Concatenar buffers
// TODO: Une ambos buffers usando Buffer.concat([parte1, parte2]).
// Imprime el texto resultante con .toString() y su tamaño total en bytes con .length:
