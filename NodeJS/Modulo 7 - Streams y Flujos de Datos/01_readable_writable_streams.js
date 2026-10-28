// ==========================================
// TEMA 1: STREAMS DE LECTURA Y ESCRITURA
// Para ejecutar: node "NodeJS/Modulo 7 - Streams y Flujos de Datos/01_readable_writable_streams.js"
// ==========================================

const fs = require('fs');
const path = require('path');

console.log("=== TEMA 1: READABLE Y WRITABLE STREAMS ===");

const tamanosChunks = [];
const archivoSalida = path.join(__dirname, 'salida_stream.txt');

function leerPorChunks() {
  return new Promise((resolve, reject) => {
    // RETO 1.1: Crea un readStream de __filename con { encoding: 'utf-8', highWaterMark: 64 }.
    // En 'data' haz tamanosChunks.push(chunk.length); en 'end' llama a resolve(); en 'error' a reject

  });
}

function escribirLineas() {
  return new Promise((resolve, reject) => {
    // RETO 1.2: Crea un writeStream hacia 'archivoSalida', escribe "linea 1\n" y "linea 2\n",
    // ciérralo con .end() y llama a resolve() en el evento 'finish'

  });
}


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

  try { await conTiempo(leerPorChunks()); } catch (err) { console.log('❌ leerPorChunks(): ' + err.message); }
  await validar('RETO 1.1 (createReadStream)', () => tamanosChunks.length > 1 && tamanosChunks.every((n) => n <= 64), 'Se esperaban varios chunks de máximo 64 caracteres');

  try { await conTiempo(escribirLineas()); } catch (err) { console.log('❌ escribirLineas(): ' + err.message); }
  await validar('RETO 1.2 (createWriteStream)', () => fs.existsSync(archivoSalida) && fs.readFileSync(archivoSalida, 'utf-8') === 'linea 1\nlinea 2\n', 'salida_stream.txt debe contener "linea 1\\nlinea 2\\n"');
  if (fs.existsSync(archivoSalida)) fs.unlinkSync(archivoSalida);

  console.log('\n--- Fin de la comprobación ---\n');
})();
