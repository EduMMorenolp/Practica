// ==========================================
// TEMA 1: EMISORES DE EVENTOS
// Para ejecutar: node "NodeJS/Modulo 6 - EventEmitter/01_event_emitter_basico.js"
// ==========================================

const EventEmitter = require('events');

console.log("=== TEMA 1: EMISORES DE EVENTOS ===");

const emisor = new EventEmitter();
const recibidos = [];
let vecesInicio = 0;

// RETO 1.1: Suscribe 'notificacion' con emisor.on() recibiendo (mensaje, prioridad).
// Imprime los datos y haz recibidos.push({ mensaje, prioridad }).
// Luego emite: emisor.emit("notificacion", "Servidor listo", "ALTA")


// RETO 1.2: Suscribe 'inicio' con emisor.once() incrementando 'vecesInicio'. Emite 'inicio' DOS veces.


// RETO 1.3: Crea una función 'manejador', suscríbela a 'temporal' y luego quítala con emisor.off()


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

  await validar('RETO 1.1 (on + emit)', () => recibidos.length === 1 && recibidos[0].mensaje === 'Servidor listo' && recibidos[0].prioridad === 'ALTA', 'recibidos debe tener { mensaje: "Servidor listo", prioridad: "ALTA" }');
  await validar('RETO 1.2 (once)', () => vecesInicio === 1, 'vecesInicio debe ser 1 aunque se emita 2 veces (usa once)');
  await validar('RETO 1.3 (off)', () => emisor.listenerCount('temporal') === 0 && typeof manejador === 'function', 'Declara "manejador", suscríbelo a "temporal" y quítalo con off()');

  console.log('\n--- Fin de la comprobación ---\n');
})();
