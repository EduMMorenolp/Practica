// ==========================================
// PROYECTO 4: MONITOR DE HARDWARE EN TIEMPO REAL
// Para ejecutar: node "NodeJS/Modulo 15 - Proyectos Practicos Node/04_proyecto_monitor_sistema.js"
// ==========================================

const os = require('os');

console.log("=== PROYECTO 4: MONITOR DE SISTEMA ===");

function reportarEstado() {
  const memoriaLibreMB = Math.round(os.freemem() / 1024 / 1024);
  const memoriaTotalMB = Math.round(os.totalmem() / 1024 / 1024);
  const porcentajeUso = Math.round(((memoriaTotalMB - memoriaLibreMB) / memoriaTotalMB) * 100);

  // RETO 4.1: Mostrar reporte formateado
  // TODO: Imprime:
  // - Plataforma y Arquitectura: os.platform() + " " + os.arch()
  // - Memoria: [memoriaLibreMB]MB libres de [memoriaTotalMB]MB ([porcentajeUso]% en uso)
  // - Núcleos CPU: os.cpus().length
}

reportarEstado();
