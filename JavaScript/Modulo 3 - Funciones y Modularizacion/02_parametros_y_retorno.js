// ==========================================
// TEMA 2: PARÁMETROS, ARGUMENTOS Y RETORNO
// Para ejecutar: node "JavaScript/Modulo 3/02_parametros_y_retorno.js"
// ==========================================

console.log("=== TEMA 2: PARÁMETROS Y RETORNO ===");

// ------------------------------------------
// 2.1 Parámetros por defecto
// ------------------------------------------
// Crea una función 'calcularPrecioTotal' que reciba 'precioBase',
// 'impuesto' (con valor por defecto 0.21) y 'descuento' (con valor por defecto 0).
// La fórmula es: precioBase + (precioBase * impuesto) - descuento.
// TODO: Define la función e imprímela invocando con: calcularPrecioTotal(100)
// y luego con: calcularPrecioTotal(100, 0.10, 5)


// ------------------------------------------
// 2.2 Parámetros Rest (...args)
// ------------------------------------------
// Crea una función 'sumarTodos' que reciba una cantidad indefinida de números usando '...numeros'.
// Dentro, recorre el array recibido y suma todos los valores.
// TODO: Define la función e imprime el resultado de sumarTodos(10, 20, 30, 40):


// ------------------------------------------
// 2.3 Early Return (Salida limpia y defensiva)
// ------------------------------------------
// Crea una función 'procesarPago' que reciba 'monto' y 'saldoDisponible'.
// - Si monto <= 0, retorna inmediatamente: "Error: Monto inválido".
// - Si monto > saldoDisponible, retorna inmediatamente: "Error: Saldo insuficiente".
// - En cualquier otro caso, retorna: "Pago procesado con éxito. Saldo restante: " + (saldoDisponible - monto).
// TODO: Define la función y pruébala con diferentes valores:

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

  await validar('RETO 2.1 (calcularPrecioTotal)', () => typeof calcularPrecioTotal === 'function' && calcularPrecioTotal(100) === 121, 'calcularPrecioTotal(100) con IVA por defecto (0.21) debe dar 121');
  await validar('RETO 2.2 (sumarTodos)', () => typeof sumarTodos === 'function' && sumarTodos(10, 20, 30, 40) === 100, 'sumarTodos con rest params debe sumar todos los números');
  await validar('RETO 2.3 (validarUsuario)', () => typeof validarUsuario === 'function' && typeof validarUsuario({}) === 'string', 'validarUsuario debe aplicar early returns');

  console.log('\n--- Fin de la comprobación ---\n');
})();
