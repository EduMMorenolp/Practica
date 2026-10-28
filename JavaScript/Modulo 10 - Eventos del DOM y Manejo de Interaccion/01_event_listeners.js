// ==========================================
// TEMA 1: REGISTRO DE EVENT LISTENERS
// Para ejecutar: node "JavaScript/Modulo 10 - Eventos del DOM y Manejo de Interaccion/01_event_listeners.js"
// ==========================================

console.log("=== TEMA 1: EVENT LISTENERS ===");

class EventEmitterEmulated {
  constructor() { this.listeners = {}; }
  addEventListener(event, fn) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(fn);
  }
  dispatch(event, data) {
    if (this.listeners[event]) {
      this.listeners[event].forEach(fn => fn(data));
    }
  }
}

const boton = new EventEmitterEmulated();

// RETO 1.1: Registrar un listener
// TODO: Agrega un event listener para el evento "click" en 'boton' que reciba 'e'
// e imprima: "¡Click recibido en coordenadas x=" + e.x + ", y=" + e.y:


// Despacho del evento para probar tu solución:
boton.dispatch("click", { x: 150, y: 200 });

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

  await validar('RETO 1.1 (addEventListener click)', () => boton.listeners['click'] && boton.listeners['click'].length > 0, 'Registra un listener con boton.addEventListener("click", ...)');

  console.log('\n--- Fin de la comprobación ---\n');
})();
