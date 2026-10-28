// ==========================================
// EJERCICIO 2: ENCABEZADOS Y METADATOS DE RED
// Para ejecutar: node "Express/Modulo 3 - Objeto Request/02_headers_ip_path.js"
// ==========================================

const express = require('express');
const app = express();

console.log("=== INSPECCIÓN DE ENCABEZADOS Y CONEXIÓN ===");

// RETO 2.1: Leer encabezados con req.get()
// TODO: Define GET '/seguridad' que responda con JSON:
// { agente: <header User-Agent>, auth: <header Authorization> }


// RETO 2.2: Metadatos de la conexión
// TODO: Define GET '/info-conexion' que responda con JSON:
// { ip: req.ip, protocolo: req.protocol, segura: req.secure, path: req.path }


// RETO 2.3: URL original completa
// TODO: Define GET '/rastreo' que responda con JSON: { original: req.originalUrl }
// (Se probará con '/rastreo?origen=email': originalUrl incluye la query string)


// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA (no modificar)
// ==========================================
async function probar(nombre, peticion, esperado) {
  try {
    const res = await peticion();
    const tipo = res.headers.get('content-type') || '';
    const cuerpo = tipo.includes('application/json') ? await res.json() : await res.text();
    const resultado = esperado(res, cuerpo);
    if (resultado === true) {
      const mostrar = typeof cuerpo === 'string' && cuerpo.length > 80 ? cuerpo.slice(0, 80) + '...' : cuerpo;
      console.log('✔ ' + nombre + ' (Status ' + res.status + '):', mostrar);
      return true;
    }
    if (res.status === 404 && typeof cuerpo === 'string' && cuerpo.includes('Cannot')) {
      console.log('❌ ' + nombre + ': La ruta aún no está implementada (404 de Express).');
    } else if (res.status >= 500) {
      console.log('❌ ' + nombre + ': Error interno del servidor (status ' + res.status + '). Revisa el error impreso arriba.');
    } else {
      console.log('❌ ' + nombre + ': ' + resultado + ' (recibido status ' + res.status + ').');
    }
  } catch (err) {
    console.log('❌ ' + nombre + ': Error de ejecución -> ' + err.message);
  }
  return false;
}

function iniciarPruebas(pruebas) {
  const server = app.listen(0, async () => {
    const port = server.address().port;
    console.log('\n🚀 Servidor de pruebas iniciado en puerto: ' + port + '\n');
    try {
      await pruebas('http://localhost:' + port);
    } finally {
      console.log('\n--- Fin de la comprobación ---\n');
      server.close();
    }
  });
}

iniciarPruebas(async (base) => {
  await probar('RETO 2.1 (GET /seguridad)',
    () => fetch(base + '/seguridad', { headers: { 'User-Agent': 'PracticeBot/1.0', 'Authorization': 'Bearer abc123' } }),
    (res, body) => (body && body.agente === 'PracticeBot/1.0' && body.auth === 'Bearer abc123') ||
      'Se esperaba JSON { agente: "PracticeBot/1.0", auth: "Bearer abc123" }');

  await probar('RETO 2.2 (GET /info-conexion)',
    () => fetch(base + '/info-conexion'),
    (res, body) => (body && body.ip && body.protocolo === 'http' && body.segura === false && body.path === '/info-conexion') ||
      'Se esperaba JSON con ip, protocolo "http", segura false y path "/info-conexion"');

  await probar('RETO 2.3 (GET /rastreo)',
    () => fetch(base + '/rastreo?origen=email'),
    (res, body) => (body && body.original === '/rastreo?origen=email') ||
      'Se esperaba JSON { original: "/rastreo?origen=email" }');
});
