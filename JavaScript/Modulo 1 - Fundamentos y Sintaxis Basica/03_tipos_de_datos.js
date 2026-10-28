// ==========================================
// TEMA 3: TIPOS DE DATOS PRIMITIVOS Y COERCIÓN
// Para ejecutar: node "JavaScript/Modulo 1/03_tipos_de_datos.js"
// ==========================================

console.log("=== TEMA 3: TIPOS DE DATOS ===");

// ------------------------------------------
// 3.1 Identificación con typeof
// ------------------------------------------
// Declara 4 variables:
// - nombre: un string ("Juan")
// - edad: un number (30)
// - esActivo: un boolean (true)
// - sinDefinir: una variable sin inicializar (undefined)
// Imprime el typeof de cada una de ellas.
// TODO: Escribe tu código aquí abajo:


// ------------------------------------------
// 3.2 La curiosidad histórica de null
// ------------------------------------------
// Declara una variable llamada 'usuarioActual' con valor null.
// Imprime en consola typeof usuarioActual.
// Explica en un comentario por qué devuelve "object".
// TODO: Escribe tu código aquí abajo:


// ------------------------------------------
// 3.3 Conversión Explícita (Casting)
// ------------------------------------------
// Tienes el string "150".
// Conviértelo explícitamente a número con Number() y súmale 50.
// Imprime el resultado (debe dar 200 numérico, no "15050").
const precioTexto = "150";
// TODO: Escribe tu código aquí abajo:


// ------------------------------------------
// 3.4 Valores Falsy y Truthy
// ------------------------------------------
// Pasa los siguientes valores por Boolean() e imprime cada resultado:
// "", "JavaScript", 0, 100, null, undefined, NaN
// Observa cuáles dan false (falsy) y cuáles true (truthy).
// TODO: Escribe tus console.log(Boolean(...)) aquí abajo:

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

  await validar('RETO 3.1 (typeof tipos primitivos)', () => typeof nombre === 'string' && typeof edad === 'number' && typeof esActivo === 'boolean' && typeof sinDefinir === 'undefined', 'Declara nombre (string), edad (number), esActivo (boolean) y sinDefinir (undefined)');
  await validar('RETO 3.2 (null histórico)', () => typeof usuarioActual !== 'undefined' && usuarioActual === null, 'Declara usuarioActual = null');
  await validar('RETO 3.3 (Casting Number)', () => typeof precioTexto !== 'undefined' && Number(precioTexto) + 50 === 200, 'Convierte precioTexto con Number() y suma 50');

  console.log('\n--- Fin de la comprobación ---\n');
})();
