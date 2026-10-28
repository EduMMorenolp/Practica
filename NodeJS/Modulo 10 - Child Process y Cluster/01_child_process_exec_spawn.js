// ==========================================
// TEMA 1: EXEC DE COMANDOS DEL SISTEMA
// Para ejecutar: node "NodeJS/Modulo 10 - Child Process y Cluster/01_child_process_exec_spawn.js"
// ==========================================

const { exec } = require('child_process');

console.log("=== TEMA 1: CHILD_PROCESS.EXEC ===");

// RETO 1.1: Ejecutar comando de Node para ver la versión instalada
// TODO: Usa exec('node -v', (err, stdout) => { ... }) e imprime la versión obtenida:
