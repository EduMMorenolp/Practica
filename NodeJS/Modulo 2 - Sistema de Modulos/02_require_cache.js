// ==========================================
// TEMA 2: REQUIRE.CACHE
// Para ejecutar: node "NodeJS/Modulo 2 - Sistema de Modulos/02_require_cache.js"
// ==========================================

console.log("=== TEMA 2: REQUIRE.CACHE ===");

// El módulo auxiliar ./modulo_contador.cjs exporta { incrementar(), valor() } con un contador interno.

let valorCompartido = null;
let rutaModulo = null;
let valorTrasLimpiar = null;

// RETO 2.1: Caché de módulos
// TODO: Haz require('./modulo_contador.cjs') DOS veces en constantes distintas (a y b).
// Llama a.incrementar() y b.incrementar(). Guarda b.valor() en 'valorCompartido'.
// ¿Por qué vale 2 y no 1?


// RETO 2.2: Resolver la ruta absoluta del módulo
// TODO: Guarda en 'rutaModulo' el resultado de require.resolve('./modulo_contador.cjs')


// RETO 2.3: Limpiar la caché
// TODO: Elimina la entrada require.cache[rutaModulo], vuelve a hacer require y guarda su valor() en 'valorTrasLimpiar'


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

function conTiempo(promesa, ms = 1500) {
  let id;
  const limite = new Promise((_, rechazar) => {
    id = setTimeout(() => rechazar(new Error('Tiempo agotado (' + ms + 'ms). ¿Falta llamar a resolve() o al callback?')), ms);
  });
  return Promise.race([Promise.resolve(promesa), limite]).finally(() => clearTimeout(id));
}

(async () => {
  console.log('\n--- Comprobación ---');

  await validar('RETO 2.1 (instancia compartida)', () => valorCompartido === 2, 'valorCompartido debería ser 2: ambos require devuelven el mismo objeto cacheado');
  await validar('RETO 2.2 (require.resolve)', () => typeof rutaModulo === 'string' && rutaModulo.endsWith('modulo_contador.cjs') && require('path').isAbsolute(rutaModulo), 'rutaModulo debe ser la ruta absoluta de modulo_contador.cjs');
  await validar('RETO 2.3 (delete require.cache)', () => valorTrasLimpiar === 0, 'Tras borrar la caché, el nuevo require debería empezar en 0');

  console.log('\n--- Fin de la comprobación ---\n');
})();
