// ==========================================
// TEMA 1: SALIDAS Y EJECUCIÓN (console)
// Para ejecutar: node "JavaScript/Modulo 1/01_salidas.js"
// ==========================================

console.log("=== TEMA 1: SALIDAS ===");

// ------------------------------------------
// 1.1 Salida estándar
// ------------------------------------------
// Imprime en consola: "¡Hola, mundo desde JavaScript!"
// TODO: Escribe tu código aquí abajo:


// ------------------------------------------
// 1.2 Múltiples argumentos
// ------------------------------------------
// console.log puede recibir varios valores separados por coma.
// Imprime: "Nombre:", "Lucas", "Edad:", 28 en una sola llamada a console.log.
// TODO: Escribe tu código aquí abajo:


// ------------------------------------------
// 1.3 Salidas especializadas (info, warn, error)
// ------------------------------------------
// Imprime un mensaje informativo con console.info("Sistema listo")
// Imprime una advertencia con console.warn("Cuidado: batería baja")
// Imprime un error con console.error("Error: recurso no encontrado")
// TODO: Escribe tu código aquí abajo:

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

  await validar('RETO 1.1 (console.log)', () => typeof console.log === 'function', 'Usa console.log("¡Hola, mundo desde JavaScript!")');
  await validar('RETO 1.2 (múltiples argumentos)', () => typeof console.log === 'function', 'Usa console.log con "Nombre:", "Lucas", "Edad:", 28');
  await validar('RETO 1.3 (info, warn, error)', () => typeof console.info === 'function' && typeof console.warn === 'function' && typeof console.error === 'function', 'Usa console.info, console.warn y console.error');

  console.log('\n--- Fin de la comprobación ---\n');
})();
