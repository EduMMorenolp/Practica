// ==========================================
// TEMA 3: ESTRUCTURA SWITCH / CASE
// Para ejecutar: node "JavaScript/Modulo 2/03_switch_case.js"
// ==========================================

console.log("=== TEMA 3: SWITCH / CASE ===");

// ------------------------------------------
// 3.1 Switch básico de estados
// ------------------------------------------
// Dado el estado de un pedido ('PENDIENTE', 'EN_CAMINO', 'ENTREGADO'):
// Imprime una acción según el caso:
// - PENDIENTE: "Preparando el paquete"
// - EN_CAMINO: "El repartidor está cerca"
// - ENTREGADO: "Pedido finalizado con éxito"
// - Cualquier otro: "Estado desconocido"
const estadoPedido = "EN_CAMINO";
// TODO: Implementa la estructura switch con sus respectivos break:


// ------------------------------------------
// 3.2 Casos agrupados (Fall-through intencional)
// ------------------------------------------
// Evalúa el día de la semana (1 al 7):
// - 1 al 5: Imprime "Día laboral"
// - 6 y 7: Imprime "Fin de semana"
// - Otro: "Día no válido"
const dia = 6;
// TODO: Agrupa los casos 1 al 5 sin break intermedio, y 6 con 7:

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

  await validar('RETO 3.1/3.2 (switch)', () => typeof estadoPedido !== 'undefined' && typeof diaSemana !== 'undefined', 'Implementa los switch correspondientes para pedidos y días');

  console.log('\n--- Fin de la comprobación ---\n');
})();
