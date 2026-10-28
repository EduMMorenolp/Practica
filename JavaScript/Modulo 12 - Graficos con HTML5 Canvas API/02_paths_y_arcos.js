// ==========================================
// TEMA 2: PATHS, LÍNEAS Y ARCOS
// Para ejecutar: node "JavaScript/Modulo 12 - Graficos con HTML5 Canvas API/02_paths_y_arcos.js"
// ==========================================

console.log("=== TEMA 2: PATHS Y CÍRCULOS ===");

// RETO 2.1: Conversor de grados a radianes
// TODO: Crea una función 'gradosARadianes(grados)' que retorne: (grados * Math.PI) / 180
function gradosARadianes(grados) {
  // Escribe tu código aquí:
}

// TODO: Imprime el equivalente en radianes para 90°, 180° y 360° (círculo completo):
console.log("90° en radianes:", gradosARadianes(90));
console.log("180° en radianes:", gradosARadianes(180));
console.log("360° en radianes:", gradosARadianes(360));

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

  await validar('RETO 2.1 (gradosARadianes)', () => {
    if (typeof gradosARadianes !== 'function') return false;
    return Math.abs(gradosARadianes(180) - Math.PI) < 0.001;
  }, 'gradosARadianes(180) debe retornar Math.PI');

  console.log('\n--- Fin de la comprobación ---\n');
})();
