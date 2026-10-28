// ==========================================
// TEMA 3: NAVIGATOR Y ENTORNO
// Para ejecutar: node "JavaScript/Modulo 8 - BOM Browser Object Model/03_navigator_y_screen.js"
// ==========================================

console.log("=== TEMA 3: ENTORNOS Y DISPOSITIVO ===");

// 3.1 Emulación de propiedades de navigator
const emulatedNavigator = {
  userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
  language: "es-ES",
  onLine: true
};

// TODO: Imprime el idioma del usuario y si está conectado a internet:
console.log("Idioma:", emulatedNavigator.language);
console.log("Online:", emulatedNavigator.onLine);

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

  await validar('RETO 3.1 (fakeNavigator)', () => typeof fakeNavigator !== 'undefined' && fakeNavigator.onLine === true, 'Inspecciona las propiedades de fakeNavigator');

  console.log('\n--- Fin de la comprobación ---\n');
})();
