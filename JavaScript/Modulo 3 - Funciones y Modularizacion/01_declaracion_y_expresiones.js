// ==========================================
// TEMA 1: DECLARACIÓN Y EXPRESIONES DE FUNCIÓN
// Para ejecutar: node "JavaScript/Modulo 3/01_declaracion_y_expresiones.js"
// ==========================================

console.log("=== TEMA 1: DECLARACIÓN Y EXPRESIONES ===");

// ------------------------------------------
// 1.1 Declaración tradicional (Function Declaration)
// ------------------------------------------
// Declara una función llamada 'saludar' que reciba 'nombre'
// y retorne: "Hola, " + nombre + " bienvenido al Módulo 3"
// TODO: Escribe tu función aquí abajo e invócala imprimiendo el resultado:


// ------------------------------------------
// 1.2 Expresión de función (Function Expression)
// ------------------------------------------
// Guarda en una constante llamada 'calcularAreaRectangulo' una función anónima
// que reciba 'ancho' y 'alto' y retorne el área (ancho * alto).
// TODO: Escribe tu código aquí abajo e imprime el área para ancho=5 y alto=8:


// ------------------------------------------
// 1.3 Demostración de Hoisting
// ------------------------------------------
// Las declaraciones tradicionales pueden ser invocadas antes de su definición en el código.
// Descomenta la línea de abajo y define después la función 'funcionElevada()':
// funcionElevada(); // ¿Funciona?

// TODO: Define aquí abajo function funcionElevada() { console.log("¡Fui elevada por Hoisting!"); }

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

  await validar('RETO 1.1 (saludar)', () => typeof saludar === 'function' && typeof saludar('Ana') === 'string', 'Define function saludar(nombre)');
  await validar('RETO 1.2 (calcularArea)', () => typeof calcularArea === 'function' && calcularArea(5, 8) === 40, 'Define const calcularArea = function(ancho, alto)');
  await validar('RETO 1.3 (hoisting)', () => typeof funcionElevada === 'function', 'Define function funcionElevada()');

  console.log('\n--- Fin de la comprobación ---\n');
})();
