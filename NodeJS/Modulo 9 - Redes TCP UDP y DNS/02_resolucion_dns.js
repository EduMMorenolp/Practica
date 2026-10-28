// ==========================================
// TEMA 2: RESOLUCIÓN DNS
// Para ejecutar: node "NodeJS/Modulo 9 - Redes TCP UDP y DNS/02_resolucion_dns.js"
// ==========================================

const dns = require('dns/promises');

console.log("=== TEMA 2: DNS LOOKUP ===");

let resultadoLocal = null;
let todasLasDirecciones = null;
let ipsGoogle = null;

async function resolver() {
  // RETO 2.1: Usa await dns.lookup("localhost") y guarda el resultado ({ address, family }) en 'resultadoLocal'


  // RETO 2.2: Usa dns.lookup("localhost", { all: true }) y guarda el array en 'todasLasDirecciones'


  // RETO 2.3 (requiere internet): Usa dns.resolve4("google.com") dentro de try/catch y guarda las IPs en 'ipsGoogle'

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

  try { await conTiempo(resolver(), 5000); } catch (err) { console.log('❌ resolver(): ' + err.message); }
  await validar('RETO 2.1 (lookup)', () => resultadoLocal && typeof resultadoLocal.address === 'string' && [4, 6].includes(resultadoLocal.family), 'resultadoLocal debe tener { address, family }');
  await validar('RETO 2.2 (lookup all)', () => Array.isArray(todasLasDirecciones) && todasLasDirecciones.length > 0, 'todasLasDirecciones debe ser un array no vacío');
  if (Array.isArray(ipsGoogle) && ipsGoogle.length) console.log('✔ RETO 2.3 (resolve4):', ipsGoogle);
  else console.log('⚠ RETO 2.3: ipsGoogle vacío (¿sin internet o sin implementar?)');

  console.log('\n--- Fin de la comprobación ---\n');
})();
