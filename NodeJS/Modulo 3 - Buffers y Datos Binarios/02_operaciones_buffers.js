// ==========================================
// TEMA 2: OPERACIONES CON BUFFERS
// Para ejecutar: node "NodeJS/Modulo 3 - Buffers y Datos Binarios/02_operaciones_buffers.js"
// ==========================================

console.log("=== TEMA 2: OPERACIONES CON BUFFERS ===");

const parte1 = Buffer.from("Hola, ");
const parte2 = Buffer.from("Mundo Binario!");

let unido = null;
let tamano = null;
let recorte = null;
let sonIguales = null;

// RETO 2.1: Une parte1 y parte2 con Buffer.concat() en 'unido' y guarda su tamaño en bytes en 'tamano'


// RETO 2.2: Guarda en 'recorte' el texto de los primeros 4 bytes de 'unido' (subarray + toString)


// RETO 2.3: Compara Buffer.from("abc") con Buffer.from("abc") usando .equals() y guarda el resultado en 'sonIguales'


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

  await validar('RETO 2.1 (Buffer.concat)', () => Buffer.isBuffer(unido) && unido.toString() === 'Hola, Mundo Binario!', 'unido debe contener "Hola, Mundo Binario!"');
  await validar('RETO 2.1 (tamaño)', () => tamano === 20, 'tamano debe ser unido.length (20 bytes)');
  await validar('RETO 2.2 (subarray)', () => recorte === 'Hola', 'recorte debe ser "Hola"');
  await validar('RETO 2.3 (equals)', () => sonIguales === true, 'sonIguales debe ser true');

  console.log('\n--- Fin de la comprobación ---\n');
})();
