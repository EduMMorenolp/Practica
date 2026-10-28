// ==========================================
// TEMA 2: OBJETO EVENT Y DELEGACIÓN
// Para ejecutar: node "JavaScript/Modulo 10 - Eventos del DOM y Manejo de Interaccion/02_objeto_event_y_delegacion.js"
// ==========================================

console.log("=== TEMA 2: DELEGACIÓN DE EVENTOS ===");

function delegadoHandler(e) {
  // RETO 2.1: Delegación condicional
  // TODO: Comprueba si e.target.className incluye "btn-eliminar".
  // Si coincide, imprime: ">> [Delegación] Eliminando elemento con ID: " + e.target.datasetId
  // Si no coincide, imprime: ">> Click ignorado en: " + e.target.tagName
}

// Pruebas para validar tu función:
delegadoHandler({ target: { tagName: "BUTTON", className: "btn-eliminar", datasetId: "42" } });
delegadoHandler({ target: { tagName: "SPAN", className: "badge", datasetId: null } });

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

  await validar('RETO 2.1 (Delegación de eventos)', () => typeof contenedor.listeners['click'] === 'function', 'Asigna el manejador de click en contenedor evaluando target');

  console.log('\n--- Fin de la comprobación ---\n');
})();
