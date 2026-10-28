// ==========================================
// TEMA 1: MÉTODOS MUTABLES DE ARRAY
// Para ejecutar: node "JavaScript/Modulo 6 - Arrays y Colecciones Iterables/01_metodos_mutables.js"
// ==========================================

console.log("=== TEMA 1: MÉTODOS MUTABLES ===");

// 1.1 push, pop, unshift, shift
const lenguajes = ["Python", "Java"];
// TODO: Agrega "JavaScript" al final con push, y "C++" al inicio con unshift:
// TODO: Luego quita el último con pop y el primero con shift:
// Imprime el array resultante:


// 1.2 Ordenamiento numérico con .sort()
const numeros = [25, 8, 100, 3, 42];
// TODO: Ordena de menor a mayor con .sort((a, b) => a - b) e imprime el resultado:


// 1.3 Modificación con .splice()
const colores = ["Rojo", "Verde", "Azul", "Amarillo"];
// TODO: En la posición 1, elimina 1 elemento y en su lugar inserta "Naranja" y "Violeta":
// Imprime el array de colores:

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

  await validar('RETO 1.1/1.2 (mutables y sort)', () => typeof lenguajes !== 'undefined' && Array.isArray(lenguajes), 'Usa push, pop, unshift, shift y sort()');

  console.log('\n--- Fin de la comprobación ---\n');
})();
