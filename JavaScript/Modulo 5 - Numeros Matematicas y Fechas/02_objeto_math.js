// ==========================================
// TEMA 2: OBJETO MATH
// Para ejecutar: node "JavaScript/Modulo 5 - Numeros Matematicas y Fechas/02_objeto_math.js"
// ==========================================

console.log("=== TEMA 2: OBJETO MATH ===");

// 2.1 Métodos de Redondeo
const precio = 19.85;
// TODO: Imprime Math.round(precio), Math.floor(precio), Math.ceil(precio) y Math.trunc(precio):


// 2.2 Extremos y Potencias
const notas = [65, 80, 95, 40, 88];
// TODO: Usa Math.min(...notas) y Math.max(...notas) para hallar la nota mínima y máxima:


// 2.3 Generador de Números Aleatorios en un Rango [min, max]
function numeroAleatorio(min, max) {
  // TODO: Retorna un entero aleatorio inclusivo entre min y max usando Math.random() y Math.floor()
}
// Prueba generando 3 tiradas de un dado de 6 caras (1 al 6):
console.log("Dado:", numeroAleatorio(1, 6));

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

  await validar('RETO 2.3 (aleatorioEntre)', () => {
    if (typeof aleatorioEntre !== 'function') return false;
    const n = aleatorioEntre(5, 10);
    return n >= 5 && n <= 10 && Number.isInteger(n);
  }, 'aleatorioEntre(min, max) debe retornar un entero entre min y max');

  console.log('\n--- Fin de la comprobación ---\n');
})();
