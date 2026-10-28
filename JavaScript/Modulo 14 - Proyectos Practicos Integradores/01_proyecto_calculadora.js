// ==========================================
// PROYECTO 1: MOTOR DE CALCULADORA INTERACTIVA
// Para ejecutar: node "JavaScript/Modulo 14 - Proyectos Practicos Integradores/01_proyecto_calculadora.js"
// ==========================================

console.log("=== PROYECTO 1: CALCULADORA ===");

class Calculadora {
  constructor() {
    this.historial = [];
  }

  // RETO 1.1: Implementar método operar(operacion, a, b)
  // TODO: Implementa una estructura switch según 'operacion' ("+", "-", "*", "/", "**", "%").
  // Si la operación es "/" y b === 0, retorna "Error: división por cero".
  // Agrega el registro en formato `${a} ${operacion} ${b} = ${resultado}` a this.historial.
  // Retorna el resultado numérico.
  operar(operacion, a, b) {
    // Escribe tu código aquí:
  }

  obtenerHistorial() {
    return this.historial;
  }
}

// Pruebas para validar tu calculadora:
const calc = new Calculadora();
console.log("Suma 15 + 25:", calc.operar("+", 15, 25));
console.log("División 100 / 4:", calc.operar("/", 100, 4));
console.log("División 10 / 0:", calc.operar("/", 10, 0));
console.log("Historial:", calc.obtenerHistorial());

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

  await validar('RETO 1.1 (Calculadora)', () => {
    const c = new Calculadora();
    return c.operar('+', 15, 25) === 40 &&
           c.operar('/', 10, 0) === 'Error: división por cero' &&
           c.obtenerHistorial().length === 2;
  }, 'Calculadora.operar debe resolver suma, división por cero y registrar en historial');

  console.log('\n--- Fin de la comprobación ---\n');
})();
