// ==========================================
// PROYECTO 4: MONITOR DE SISTEMA
// Para ejecutar: node "NodeJS/Modulo 15 - Proyectos Practicos Node/04_proyecto_monitor_sistema.js"
// ==========================================

const os = require('os');

console.log("=== PROYECTO 4: MONITOR DE SISTEMA ===");

// RETO 4.1: reportarEstado() debe RETORNAR un objeto con:
// { plataforma, memoriaLibreMB, memoriaTotalMB, porcentajeUso, nucleos }
// (MB redondeados con Math.round, porcentajeUso = % de memoria usada redondeado)
// e imprimir un reporte legible en consola
function reportarEstado() {

}

// RETO 4.2: nivelAlerta(porcentaje) debe retornar:
// 'OK' si es menor a 70, 'ADVERTENCIA' entre 70 y 89, 'CRITICO' si es 90 o más
function nivelAlerta(porcentaje) {

}

// RETO 4.3 (extra): usa setInterval para reportar cada 2 segundos al ejecutar con --vivo
// y detenlo con clearInterval tras 3 reportes


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

  const r = reportarEstado() || {};
  const totalMB = Math.round(os.totalmem() / 1024 / 1024);
  await validar('RETO 4.1 (memoria)', () => r.memoriaTotalMB === totalMB && Number.isInteger(r.memoriaLibreMB) && r.memoriaLibreMB <= totalMB, 'memoriaTotalMB / memoriaLibreMB incorrectos');
  await validar('RETO 4.1 (porcentaje)', () => Number.isInteger(r.porcentajeUso) && r.porcentajeUso >= 0 && r.porcentajeUso <= 100, 'porcentajeUso debe ser un entero entre 0 y 100');
  await validar('RETO 4.1 (plataforma / núcleos)', () => r.plataforma === os.platform() && r.nucleos === os.cpus().length, 'plataforma o nucleos incorrectos');
  await validar('RETO 4.2 (nivelAlerta)', () => nivelAlerta(50) === 'OK' && nivelAlerta(70) === 'ADVERTENCIA' && nivelAlerta(89) === 'ADVERTENCIA' && nivelAlerta(90) === 'CRITICO', 'Revisa los límites: <70 OK, 70-89 ADVERTENCIA, >=90 CRITICO');

  console.log('\n--- Fin de la comprobación ---\n');
})();
