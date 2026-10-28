// ==========================================
// TEMA 1: CREACIÓN DE BUFFERS
// Para ejecutar: node "NodeJS/Modulo 3 - Buffers y Datos Binarios/01_creacion_buffers.js"
// ==========================================

console.log("=== TEMA 1: CREACIÓN DE BUFFERS ===");

const mensaje = "NodeJS Binario";

let buf = null;
let enBase64 = null;
let enHex = null;
let bufVacio = null;
let decodificado = null;

// RETO 1.1: Crea un Buffer desde 'mensaje' (utf-8) y guárdalo en 'buf'


// RETO 1.2: Guarda en 'enBase64' y 'enHex' su representación en base64 y hexadecimal


// RETO 1.3: Crea en 'bufVacio' un buffer de 10 bytes inicializado en cero (Buffer.alloc)


// RETO 1.4: Decodifica 'enBase64' de vuelta a texto y guárdalo en 'decodificado'


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

  await validar('RETO 1.1 (Buffer.from)', () => Buffer.isBuffer(buf) && buf.toString() === mensaje, 'buf debe ser Buffer.from(mensaje, "utf-8")');
  await validar('RETO 1.2 (base64)', () => enBase64 === 'Tm9kZUpTIEJpbmFyaW8=', 'enBase64 no coincide con la codificación base64 de mensaje');
  await validar('RETO 1.2 (hex)', () => enHex === '4e6f64654a532042696e6172696f', 'enHex no coincide con la codificación hexadecimal de mensaje');
  await validar('RETO 1.3 (Buffer.alloc)', () => Buffer.isBuffer(bufVacio) && bufVacio.length === 10 && bufVacio.every((b) => b === 0), 'bufVacio debe tener 10 bytes en cero');
  await validar('RETO 1.4 (decodificar)', () => decodificado === mensaje, 'decodificado debe volver a ser "NodeJS Binario"');

  console.log('\n--- Fin de la comprobación ---\n');
})();
