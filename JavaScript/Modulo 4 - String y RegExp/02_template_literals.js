// ==========================================
// TEMA 2: TEMPLATE LITERALS (ES6)
// Para ejecutar: node "JavaScript/Modulo 4/02_template_literals.js"
// ==========================================

console.log("=== TEMA 2: TEMPLATE LITERALS ===");

// ------------------------------------------
// 2.1 Interpolación de variables y expresiones
// ------------------------------------------
const usuario = "Lucía";
const items = 4;
const precioPorItem = 15;

// TODO: Crea una variable 'mensaje' usando template literals `${}` que imprima:
// "Hola Lucía, el costo total de tus 4 artículos es $60." (calculando 4 * 15 dentro de ${})
// Imprime el mensaje:


// ------------------------------------------
// 2.2 Plantillas Multilínea
// ------------------------------------------
// Con backticks `` puedes dar saltos de línea directamente.
// TODO: Genera y muestra por consola un fragmento de texto o tarjeta de perfil con 3 líneas:
// Nombre: [usuario]
// Artículos: [items]
// Total: $[items * precioPorItem]

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

  await validar('RETO 2.1 (mensaje con template literals)', () => typeof mensaje === 'string' && mensaje.includes('años'), 'Declara mensaje interpolando con \${}');

  console.log('\n--- Fin de la comprobación ---\n');
})();
