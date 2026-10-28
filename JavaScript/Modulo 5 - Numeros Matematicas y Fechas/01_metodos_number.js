// ==========================================
// TEMA 1: OBJETO NUMBER Y MÉTODOS
// Para ejecutar: node "JavaScript/Modulo 5 - Numeros Matematicas y Fechas/01_metodos_number.js"
// ==========================================

console.log("=== TEMA 1: NÚMEROS Y PARSING ===");

// 1.1 Formato de decimales con .toFixed(2)
const tasaInteres = 5.67891;
// TODO: Formatea tasaInteres a exactamente 2 decimales e imprime el resultado:


// 1.2 Extracción con parseInt y parseFloat
const anchoCSS = "120px";
const precioDolar = "45.75 USD";
// TODO: Usa parseInt para obtener 120 numérico y parseFloat para 45.75:


// 1.3 Validación estricta con Number.isInteger y Number.isNaN
const val1 = 42;
const val2 = 42.5;
const val3 = 0 / 0; // NaN
// TODO: Comprueba si val1 y val2 son enteros con Number.isInteger, y si val3 es NaN con Number.isNaN:

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

  await validar('RETO 1.1 (toFixed)', () => typeof tasaInteres !== 'undefined' && tasaInteres.toFixed(2) === '15.75', 'Usa tasaInteres.toFixed(2)');

  console.log('\n--- Fin de la comprobación ---\n');
})();
