// ==========================================
// TEMA 1: READLINE E INTERACCIÓN CLI
// Para ejecutar: node "NodeJS/Modulo 13 - Readline y CLI/01_readline_preguntas.js"
// ==========================================

const readline = require('readline');
const { PassThrough } = require('stream');

console.log("=== TEMA 1: READLINE INTERACTION ===");

// RETO 1.1: crearInterfaz(entrada, salida) debe retornar readline.createInterface({ input, output })
function crearInterfaz(entrada, salida) {

}

// RETO 1.2: preguntar(rl, texto) debe retornar una Promise que use rl.question()
// y resuelva con la respuesta sin espacios (trim)
function preguntar(rl, texto) {

}

// RETO 1.3: contarLineas(entrada) debe crear una interfaz, contar las líneas NO vacías
// con el evento 'line' y resolver con el total en el evento 'close'
function contarLineas(entrada) {

}

// Modo interactivo real: node 01_readline_preguntas.js --interactivo
if (process.argv[2] === '--interactivo') {
  const rl = crearInterfaz(process.stdin, process.stdout);
  preguntar(rl, '¿Cuál es tu framework favorito?: ').then((r) => {
    console.log('Elegiste: ' + r);
    rl.close();
  });
} else {

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

  let rl = null;
  const entrada = new PassThrough();
  await validar('RETO 1.1 (createInterface)', () => { rl = crearInterfaz(entrada, new PassThrough()); return rl && typeof rl.question === 'function'; }, 'crearInterfaz() debe retornar la interfaz de readline');
  if (rl) {
    await validar('RETO 1.2 (rl.question)', async () => {
      const promesa = preguntar(rl, '¿Framework? ');
      entrada.write('  Express  \n');
      return (await conTiempo(promesa)) === 'Express';
    }, 'preguntar() debería resolver con "Express" (respuesta con trim)');
    rl.close();
  }
  await validar('RETO 1.3 (evento line / close)', async () => {
    const entrada2 = new PassThrough();
    const promesa = contarLineas(entrada2);
    entrada2.end('uno\ndos\n\ntres\n');
    return (await conTiempo(promesa)) === 3;
  }, 'contarLineas() debería resolver con 3 (ignora las líneas vacías)');

  console.log('\n--- Fin de la comprobación ---\n');
})();
}
