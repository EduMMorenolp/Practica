// ==========================================
// TEMA 2: EL OBJETO PROCESS
// Para ejecutar: node "NodeJS/Modulo 1 - Globales y Entorno/02_objeto_process.js"
// ==========================================

console.log("=== TEMA 2: OBJETO PROCESS ===");

// RETO 2.1: Argumentos de línea de comandos (process.argv)
// process.argv[0] es la ruta al binario de node, process.argv[1] es la ruta al archivo ejecutado.
// TODO: Extrae únicamente los argumentos pasados por el usuario usando .slice(2) e imprímelos:
const argumentosUsuario = null; // Reemplaza null con process.argv.slice(2)
console.log("Argumentos extra:", argumentosUsuario);


// RETO 2.2: Variables de entorno (process.env)
// TODO: Si 'process.env.PORT' no está definido, asigna por defecto el puerto 3000 a la variable 'puerto'
// usando el operador nullish (??). Imprime el puerto:


// RETO 2.3: Métricas de ejecución
// TODO: Imprime el tiempo en segundos que lleva corriendo el script con 'process.uptime()'
// y la memoria heap usada en Megabytes con 'Math.round(process.memoryUsage().heapUsed / 1024 / 1024)':
