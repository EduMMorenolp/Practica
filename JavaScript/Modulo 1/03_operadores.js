// ==========================================
// EJERCICIO 3: Operadores y Comparaciones
// Para ejecutar: node "JavaScript/Modulo 1/03_operadores.js"
// ==========================================

console.log("--- EJERCICIO 3: OPERADORES ---");

// RETO 3.1: Operador módulo y paridad
// Dado un número cualquiera, calcula su residuo con % 2 para determinar si es par o impar.
// Si el resto es 0, es par.
const numero = 17;
// TODO: Calcula numero % 2 e imprime el resultado.


// RETO 3.2: Comparación Estricta (===) vs Débil (==)
// Observa qué ocurre al comparar el número 10 con el string "10".
// Compara con == e imprime el resultado.
// Compara con === e imprime el resultado.
// TODO: Escribe las comparaciones e imprímelas:


// RETO 3.3: Operadores Lógicos (&&, ||, !)
// Tienes una tienda online. Un cliente puede comprar si:
// (tieneSaldoSuficiente O tieneTarjetaCredito) Y (esMayorDeEdad)
const tieneSaldoSuficiente = false;
const tieneTarjetaCredito = true;
const esMayorDeEdad = true;

// TODO: Escribe la expresión booleana que combine las condiciones y guárdala en 'puedeComprar'.
// Imprime 'puedeComprar' (debería dar true).


// RETO 3.4: Operador Nullish Coalescing (??) vs OR (||)
// Observa la diferencia entre ?? y || cuando una variable vale 0.
const visitas = 0;

const conOR = visitas || 10;
const conNullish = visitas ?? 10;

// TODO: Imprime conOR y conNullish. Explica por qué conOR da 10 y conNullish da 0.
