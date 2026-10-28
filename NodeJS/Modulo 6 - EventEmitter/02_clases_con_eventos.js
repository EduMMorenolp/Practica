// ==========================================
// TEMA 2: CLASES QUE EXTIENDEN EVENTEMITTER
// Para ejecutar: node "NodeJS/Modulo 6 - EventEmitter/02_clases_con_eventos.js"
// ==========================================

const EventEmitter = require('events');

console.log("=== TEMA 2: SERVICIO CON EVENTOS ===");

// RETO 2.1: Crea la clase 'Temporizador' que extienda de EventEmitter.
// Método iniciar(ms):
// - emite "inicio" de inmediato
// - tras 'ms' milisegundos (setTimeout) emite "completado" con el objeto { duracion: ms }


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

  if (typeof Temporizador === 'undefined') {
    console.log('❌ RETO 2.1: La clase Temporizador no está declarada.');
  } else {
    const t = new Temporizador();
    await validar('RETO 2.1 (extends EventEmitter)', () => t instanceof EventEmitter, 'Temporizador debe extender de EventEmitter');
    let huboInicio = false;
    t.on('inicio', () => { huboInicio = true; });
    const completado = new Promise((resolve) => t.once('completado', resolve));
    t.iniciar(50);
    await validar('RETO 2.1 (evento inicio)', () => huboInicio, 'iniciar() debe emitir "inicio" de inmediato');
    await validar('RETO 2.1 (evento completado)', async () => {
      const datos = await conTiempo(completado, 1000);
      return datos && datos.duracion === 50;
    }, 'Debe emitir "completado" con { duracion: 50 }');
  }

  console.log('\n--- Fin de la comprobación ---\n');
})();
