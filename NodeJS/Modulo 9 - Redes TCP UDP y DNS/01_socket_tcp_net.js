// ==========================================
// TEMA 1: SERVIDOR TCP CON NET
// Para ejecutar: node "NodeJS/Modulo 9 - Redes TCP UDP y DNS/01_socket_tcp_net.js"
// ==========================================

const net = require('net');

console.log("=== TEMA 1: SOCKET TCP ===");

// RETO 1.1: Servidor TCP de eco
// TODO: Asigna a 'servidorTCP' un net.createServer((socket) => { ... })
// que al recibir datos ('data') responda con socket.write('ECO: ' + datos)
let servidorTCP = null;


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

  if (!servidorTCP) {
    console.log('❌ RETO 1.1: "servidorTCP" sigue en null.');
  } else {
    await new Promise((r) => servidorTCP.listen(0, r));
    const port = servidorTCP.address().port;
    console.log('Servidor TCP escuchando en el puerto ' + port);
    await validar('RETO 1.1 (eco TCP)', async () => {
      const respuesta = await conTiempo(new Promise((resolve, reject) => {
        const cliente = net.connect(port, () => cliente.write('hola'));
        cliente.on('data', (d) => { resolve(d.toString()); cliente.end(); });
        cliente.on('error', reject);
      }));
      return respuesta === 'ECO: hola';
    }, 'Al enviar "hola" se esperaba recibir "ECO: hola"');
    servidorTCP.close();
  }

  console.log('\n--- Fin de la comprobación ---\n');
})();
