// ==========================================
// TEMA 2: COMUNICACIÓN IPC CON PROCESS
// Para ejecutar: node "NodeJS/Modulo 10 - Child Process y Cluster/02_child_process_fork.js"
// ==========================================

console.log("=== TEMA 2: IPC EN NODE.JS ===");

// RETO 2.1: Comprobar soporte de canal IPC en el proceso actual
// TODO: Imprime si process.send está disponible en este proceso (boolean):
console.log("¿Proceso ejecutado con canal IPC?", typeof process.send === 'function');
