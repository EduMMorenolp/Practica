// ==========================================
// TEMA 2: VARIABLES Y CONSTANTES (let, const, var)
// Para ejecutar: node "JavaScript/Modulo 1/02_variables_y_constantes.js"
// ==========================================

console.log("=== TEMA 2: VARIABLES Y CONSTANTES ===");

// ------------------------------------------
// 2.1 Declaración con const (Inmutabilidad de valor)
// ------------------------------------------
// Declara una constante llamada 'PI' con el valor 3.1416 y una llamada 'PAIS' con tu país.
// Imprime ambas constantes en la consola.
// TODO: Escribe tu código aquí abajo:


// ------------------------------------------
// 2.2 Declaración y reasignación con let
// ------------------------------------------
// Declara una variable llamada 'puntuacion' con valor inicial 0.
// Luego súmale 10 puntos (puntuacion = puntuacion + 10 o puntuacion += 10).
// Imprime el valor de 'puntuacion'.
// TODO: Escribe tu código aquí abajo:


// ------------------------------------------
// 2.3 Alcance de Bloque (Block Scope)
// ------------------------------------------
// Observa el siguiente bloque { }.
// Declara adentro una variable 'mensajeBloque' con `let`.
// Intenta imprimirla fuera del bloque comentando la línea para ver qué error arroja JS.
{
    // TODO: let mensajeBloque = "Solo existo adentro";
}
// TODO: console.log(mensajeBloque); // Descomenta, prueba el ReferenceError y vuelve a comentarla.

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

  await validar('RETO 2.1 (const PI y PAIS)', () => typeof PI !== 'undefined' && PI === 3.1416 && typeof PAIS !== 'undefined' && typeof PAIS === 'string', 'Declara const PI = 3.1416 y const PAIS = "..."');
  await validar('RETO 2.2 (let puntuacion)', () => typeof puntuacion !== 'undefined' && puntuacion === 10, 'Declara let puntuacion = 0 y súmale 10');

  console.log('\n--- Fin de la comprobación ---\n');
})();
