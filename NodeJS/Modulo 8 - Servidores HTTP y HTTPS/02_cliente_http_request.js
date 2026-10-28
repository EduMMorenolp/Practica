// ==========================================
// TEMA 2: CLIENTE HTTP NATIVO
// Para ejecutar: node "NodeJS/Modulo 8 - Servidores HTTP y HTTPS/02_cliente_http_request.js"
// ==========================================

const http = require('http');

console.log("=== TEMA 2: CLIENTE HTTP GET ===");

// RETO 2.1: Cliente HTTP con http.get()
// TODO: pedirJSON(url) debe retornar una Promise que:
// - haga http.get(url, (res) => { ... })
// - acumule los chunks con res.on('data') y en res.on('end') haga JSON.parse
// - resuelva con { status: res.statusCode, datos: <json> }
// - rechace si ocurre un 'error'
function pedirJSON(url) {

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

  // Servidor simulado para probar tu cliente
  const mock = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ mensaje: 'pong', ruta: req.url }));
  });
  await new Promise((r) => mock.listen(0, r));
  const url = 'http://localhost:' + mock.address().port + '/ping';
  await validar('RETO 2.1 (http.get + chunks)', async () => {
    const r = await conTiempo(pedirJSON(url));
    return r && r.status === 200 && r.datos && r.datos.mensaje === 'pong';
  }, 'pedirJSON debe resolver con { status: 200, datos: { mensaje: "pong" } }');
  mock.close();

  console.log('\n--- Fin de la comprobación ---\n');
})();
