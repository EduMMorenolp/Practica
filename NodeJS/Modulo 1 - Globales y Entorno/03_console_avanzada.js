// ==========================================
// TEMA 3: CONSOLE AVANZADA
// Para ejecutar: node "NodeJS/Modulo 1 - Globales y Entorno/03_console_avanzada.js"
// ==========================================

// ⚙️ No modificar: registra qué métodos de console usas para la validación final
const usados = new Set();
['table', 'time', 'timeEnd', 'count', 'group', 'groupEnd'].forEach((m) => {
  const original = console[m].bind(console);
  console[m] = (...args) => { usados.add(m); return original(...args); };
});

console.log("=== TEMA 3: CONSOLE AVANZADA ===");

const usuarios = [
  { nombre: 'Ana', rol: 'admin' },
  { nombre: 'Luis', rol: 'editor' }
];

// RETO 3.1: Muestra el array 'usuarios' en formato tabla con console.table()


// RETO 3.2: Mide cuánto tarda un bucle de 1e6 iteraciones con console.time('bucle') / console.timeEnd('bucle')


// RETO 3.3: Llama 3 veces a console.count('click')


// RETO 3.4: Agrupa dos mensajes dentro de console.group('Detalles') ... console.groupEnd()


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

  await validar('RETO 3.1 (console.table)', () => usados.has('table'), 'No se usó console.table()');
  await validar('RETO 3.2 (console.time/timeEnd)', () => usados.has('time') && usados.has('timeEnd'), 'Falta console.time() o console.timeEnd()');
  await validar('RETO 3.3 (console.count)', () => usados.has('count'), 'No se usó console.count()');
  await validar('RETO 3.4 (console.group/groupEnd)', () => usados.has('group') && usados.has('groupEnd'), 'Falta console.group() o console.groupEnd()');

  console.log('\n--- Fin de la comprobación ---\n');
})();
