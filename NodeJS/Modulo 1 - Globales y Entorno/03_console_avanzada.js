// ==========================================
// TEMA 3: CONSOLE AVANZADA EN NODE.JS
// Para ejecutar: node "NodeJS/Modulo 1 - Globales y Entorno/03_console_avanzada.js"
// ==========================================

console.log("=== TEMA 3: CONSOLE EN NODE.JS ===");

// RETO 3.1: Medición de rendimiento (Benchmarking)
// TODO 1: Inicia el cronómetro con console.time("bucle_100k")
// TODO 2: Ejecuta un bucle for que sume los números del 1 al 100000
// TODO 3: Finaliza el cronómetro con console.timeEnd("bucle_100k")


// RETO 3.2: Inspección profunda con console.dir
const objetoAnidado = {
  usuario: "Lucas",
  servicios: {
    baseDatos: { host: "localhost", puerto: 5432, credenciales: { usuario: "postgres" } }
  }
};

// TODO: Usa console.dir() pasando el objeto y las opciones { depth: null, colors: true }
// para inspeccionar todos los niveles de profundidad con colores en la terminal:
