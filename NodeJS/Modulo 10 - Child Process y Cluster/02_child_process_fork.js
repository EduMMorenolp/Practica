// ==========================================
// TEMA 2: FORK Y COMUNICACIÓN IPC
// Para ejecutar: node "NodeJS/Modulo 10 - Child Process y Cluster/02_child_process_fork.js"
// ==========================================

const { fork } = require('child_process');

// Este archivo actúa como PADRE y como HIJO: el hijo se lanza con el argumento 'hijo'.
if (process.argv[2] === 'hijo') {
  // RETO 2.2 (código del HIJO):
  // TODO: Escucha process.on('message', (numero) => { ... })
  // responde al padre con process.send({ resultado: numero * 2 }) y termina con process.exit(0)

} else {
  console.log("=== TEMA 2: FORK E IPC ===");

  // RETO 2.1 (código del PADRE):
  // TODO: calcularEnHijo(numero) debe retornar una Promise que:
  // - haga const hijo = fork(__filename, ['hijo'])
  // - envíe el número con hijo.send(numero)
  // - resuelva con msg.resultado cuando llegue hijo.on('message', (msg) => ...)
  function calcularEnHijo(numero) {

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

    await validar('RETO 2.1/2.2 (fork + IPC)', async () => (await conTiempo(calcularEnHijo(21), 4000)) === 42, 'calcularEnHijo(21) debería resolver con 42 calculado en el hijo');
    process.exit(0);

    console.log('\n--- Fin de la comprobación ---\n');
  })();

}
