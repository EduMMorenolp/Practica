// ==========================================
// EJERCICIO 1: LOGGER, CORS Y CABECERAS DE SEGURIDAD
// Para ejecutar: node "Express/Modulo 9 - Middlewares del Ecosistema/01_morgan_cors_helmet.js"
// ==========================================

const express = require('express');
const app = express();

console.log("=== MIDDLEWARES ESTILO MORGAN, CORS Y HELMET ===");

const registros = [];

// RETO 1.1: Logger estilo morgan
// TODO: Middleware que haga registros.push('[' + req.method + '] ' + req.url), lo imprima y llame a next()


// RETO 1.2: CORS manual
// TODO: Middleware que agregue:
// 'Access-Control-Allow-Origin': '*'
// 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
// 'Access-Control-Allow-Headers': 'Content-Type, Authorization'
// Si req.method === 'OPTIONS' (preflight) responde con status 204 sin cuerpo; si no, next()


// RETO 1.3: Cabeceras de seguridad estilo helmet
// TODO: app.disable('x-powered-by') y un middleware que agregue
// 'X-Content-Type-Options': 'nosniff' y 'X-Frame-Options': 'DENY'


// Ruta de prueba (no modificar: tus middlewares deben quedar ARRIBA de esta línea)
app.get('/api/datos', (req, res) => res.json({ ok: true }));

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
  await probar('RETO 1.1 (logger)',
    () => fetch(base + '/api/datos'),
    () => registros.includes('[GET] /api/datos') || 'registros no contiene "[GET] /api/datos"');

  await probar('RETO 1.2 (CORS)',
    () => fetch(base + '/api/datos'),
    (res) => (res.headers.get('access-control-allow-origin') === '*' && (res.headers.get('access-control-allow-methods') || '').includes('DELETE')) ||
      'Faltan los headers Access-Control-Allow-Origin / Allow-Methods');

  await probar('RETO 1.2 (preflight OPTIONS -> 204)',
    () => fetch(base + '/api/datos', { method: 'OPTIONS' }),
    (res) => res.status === 204 || 'Se esperaba status 204 para OPTIONS');

  await probar('RETO 1.3 (seguridad)',
    () => fetch(base + '/api/datos'),
    (res) => (res.headers.get('x-content-type-options') === 'nosniff' && res.headers.get('x-frame-options') === 'DENY' && !res.headers.get('x-powered-by')) ||
      'Faltan nosniff / DENY o sigue presente X-Powered-By');
});
