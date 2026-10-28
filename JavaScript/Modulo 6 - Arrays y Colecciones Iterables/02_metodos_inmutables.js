// ==========================================
// TEMA 2: MÉTODOS INMUTABLES Y BÚSQUEDA
// Para ejecutar: node "JavaScript/Modulo 6 - Arrays y Colecciones Iterables/02_metodos_inmutables.js"
// ==========================================

console.log("=== TEMA 2: MÉTODOS INMUTABLES ===");

// 2.1 Extracción con .slice() y unión con spread [...]
const letras = ["a", "b", "c", "d", "e"];
// TODO 1: Extrae ["b", "c"] usando .slice(1, 3):
// TODO 2: Crea un nuevo array combinando letras con ["f", "g"] usando el operador spread [...letras, ...]:


// 2.2 Formato con .join() y comprobación con .includes()
const tags = ["javascript", "web", "frontend"];
// TODO 1: Convierte el array en un string separado por comas y espacio ("javascript, web, frontend") con .join():
// TODO 2: Comprueba con .includes("frontend") si la etiqueta existe en el array:

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

  await validar('RETO 2.1/2.2 (inmutables)', () => typeof frontend !== 'undefined' && Array.isArray(frontend), 'Usa slice, spread [...], join e includes');

  console.log('\n--- Fin de la comprobación ---\n');
})();
