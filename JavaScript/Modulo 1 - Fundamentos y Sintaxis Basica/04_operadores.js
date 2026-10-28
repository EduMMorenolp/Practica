// ==========================================
// TEMA 4: OPERADORES
// Para ejecutar: node "JavaScript/Modulo 1/04_operadores.js"
// ==========================================

console.log("=== TEMA 4: OPERADORES ===");

// ------------------------------------------
// 4.1 Operadores Aritméticos
// (+, -, *, /, %, **)
// ------------------------------------------
// a) Suma y resta: Calcula 25 + 15 y 50 - 20.
// b) Multiplicación y división: Calcula 8 * 7 y 100 / 4.
// c) Módulo (%): Calcula 19 % 2 para comprobar si 19 es impar (resto 1).
// d) Exponente (**): Calcula 2 elevado a la potencia de 8 (2 ** 8).
// Imprime cada uno de los resultados.
// TODO: Escribe tu código aquí abajo:


// ------------------------------------------
// 4.2 Operadores de Asignación
// (=, +=, -=, *=, /=)
// ------------------------------------------
// Declara let saldo = 100;
// a) Súmale 50 usando +=
// b) Réstale 20 usando -=
// c) Multiplícalo por 2 usando *=
// d) Divídelo entre 4 usando /=
// Imprime el valor final de saldo (debería ser 65).
let saldo = 100;
// TODO: Escribe las operaciones de asignación aquí abajo:


// ------------------------------------------
// 4.3 Comparación Estricta (===) vs Débil (==)
// ------------------------------------------
// Compara el número 20 con el string "20".
// a) Con == (comparación débil: fuerza conversión).
// b) Con === (comparación estricta: compara valor y tipo).
// Imprime el resultado de ambas comparaciones en consola.
// TODO: Escribe tu código aquí abajo:


// ------------------------------------------
// 4.4 Operadores Lógicos (&&, ||, !)
// ------------------------------------------
// Sistema de validación de compra:
// Un usuario puede comprar si: (tieneEfectivo || tieneTarjeta) && esMayorDeEdad
const tieneEfectivo = false;
const tieneTarjeta = true;
const esMayorDeEdad = true;

// TODO: Crea la variable booleana 'puedeComprar' evaluando la condición lógica anterior.
// Imprime el valor de 'puedeComprar' (debe ser true).


// ------------------------------------------
// 4.5 Operador Nullish Coalescing (??)
// ------------------------------------------
// Dado el conteo de visitas de un usuario nuevo:
const visitas = 0;

// TODO: Evalúa `visitas || 10` y `visitas ?? 10`.
// Imprime ambos resultados y observa por qué `??` respeta el número 0 mientras que `||` lo reemplaza por 10.

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

  await validar('RETO 4.1 (Aritmética)', () => 25 + 15 === 40 && 19 % 2 === 1 && 2 ** 8 === 256, 'Calcula 25+15, 19%2 y 2**8');
  await validar('RETO 4.2 (Asignación)', () => typeof saldo !== 'undefined' && saldo === 65, 'saldo debe ser 65 tras las operaciones');
  await validar('RETO 4.4 (Operadores lógicos)', () => typeof puedeComprar !== 'undefined' && typeof puedeComprar === 'boolean', 'Declara la variable booleana puedeComprar');

  console.log('\n--- Fin de la comprobación ---\n');
})();
