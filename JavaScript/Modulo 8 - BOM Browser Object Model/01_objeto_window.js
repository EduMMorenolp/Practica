// ==========================================
// TEMA 1: OBJETO WINDOW Y GLOBALTHIS
// Para ejecutar: node "JavaScript/Modulo 8 - BOM Browser Object Model/01_objeto_window.js"
// ==========================================

console.log("=== TEMA 1: OBJETO WINDOW & GLOBALTHIS ===");

// 1.1 globalThis: Acceso universal al objeto global (window en navegador, global en Node)
console.log("¿Existe globalThis?", typeof globalThis !== "undefined");

// 1.2 Registro de propiedades en el entorno global
globalThis.APP_VERSION = "2.4.0";
// TODO: Imprime el valor de globalThis.APP_VERSION:

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

  await validar('RETO 1.2 (globalThis.APP_VERSION)', () => globalThis.APP_VERSION === '2.4.0', 'globalThis.APP_VERSION debe valer "2.4.0"');

  console.log('\n--- Fin de la comprobación ---\n');
})();
