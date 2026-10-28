// ==========================================
// TEMA 1: TIMERS Y EVENT LOOP
// Para ejecutar: node "JavaScript/Modulo 11 - Asincronismo Timers y Fetch API/01_timers_y_event_loop.js"
// ==========================================

console.log("=== TEMA 1: TIMERS Y EVENT LOOP ===");

// RETO 1.1: Predecir y verificar el orden de ejecución
// Observa las siguientes instrucciones y escribe en comentarios cuál será el orden de salida (ej: 1, 2, 3).
console.log("1. Instrucción síncrona A");

// TODO: Usa setTimeout para imprimir después de 0 milisegundos: "3. Tarea asíncrona de la cola de eventos"


console.log("2. Instrucción síncrona B");

// RETO 1.2: Temporizador acumulativo con setTimeout o setInterval
// TODO: Usa setTimeout para imprimir a los 50ms: "4. Fin del ejercicio de timers"

// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA (no modificar)
// ==========================================
async function validar(nombre, condicion, pista) {
  try {
    if (await condicion()) {
      console.log('✔ ' + nombre);
      return true;
    }
    console.log('❌ ' + nombre + ': ' + pista);
  } catch (err) {
    console.log('❌ ' + nombre + ': Error -> ' + err.message);
  }
  return false;
}

(async () => {
  console.log('\n--- Comprobación ---');

  await validar('RETO 1.1/1.2 (Timers)', () => typeof setTimeout === 'function', 'Usa setTimeout para programar tareas asíncronas');

  console.log('\n--- Fin de la comprobación ---\n');
})();
