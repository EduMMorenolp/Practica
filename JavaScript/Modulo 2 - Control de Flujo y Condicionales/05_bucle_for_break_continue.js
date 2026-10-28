// ==========================================
// TEMA 5: BUCLE FOR, BREAK Y CONTINUE
// Para ejecutar: node "JavaScript/Modulo 2/05_bucle_for_break_continue.js"
// ==========================================

console.log("=== TEMA 5: BUCLE FOR, BREAK Y CONTINUE ===");

// ------------------------------------------
// 5.1 Bucle for clásico (Tabla de multiplicar)
// ------------------------------------------
// Genera la tabla de multiplicar del número 7 (del 1 al 10).
// En cada iteración imprime: "7 x [i] = [7 * i]"
const tabla = 7;
// TODO: Escribe tu bucle for aquí abajo:


// ------------------------------------------
// 5.2 Uso de continue (Filtrado / Salto de ciclo)
// ------------------------------------------
// Itera del 1 al 10 con un for.
// Si el número es par (i % 2 === 0), usa 'continue' para saltarlo.
// Solo deben imprimirse los números impares: 1, 3, 5, 7, 9.
// TODO: Escribe tu bucle for con continue aquí abajo:


// ------------------------------------------
// 5.3 Uso de break (Detener búsqueda)
// ------------------------------------------
// Tienes una serie del 1 al 20.
// Queremos encontrar el primer número que sea múltiplo de 3 y mayor a 10.
// Cuando lo encuentres, imprímelo: "Primer objetivo encontrado: " + i y haz 'break' para detener el bucle.
// TODO: Escribe tu bucle for con break aquí abajo:

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

  await validar('RETO 5.1/5.2/5.3 (for, break, continue)', () => true, 'Comprueba la ejecución de los bucles for con break y continue');

  console.log('\n--- Fin de la comprobación ---\n');
})();
