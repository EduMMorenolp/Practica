// ==========================================
// EJERCICIO 3: NEGOCIACIÓN DE CONTENIDO
// Para ejecutar: node "Express/Modulo 3 - Objeto Request/03_negociacion_contenido.js"
// ==========================================

const express = require('express');
const app = express();

console.log("=== NEGOCIACIÓN CON REQ.ACCEPTS Y REQ.IS ===");

// RETO 3.1: Responder según el formato aceptado por el cliente (req.accepts)
// TODO: Define GET '/datos':
// - Si req.accepts('json') -> res.json({ tipo: "JSON" })
// - Si no, si req.accepts('html') -> res.send("<h1>HTML</h1>")
// - Si ninguno -> status 406 y texto "No aceptable"


// RETO 3.2: Validar el tipo del cuerpo entrante (req.is)
// TODO: Define POST '/recibir':
// - Si req.is('application/json') -> status 200 y JSON { ok: true }
// - Si no -> status 415 y JSON { error: "Solo se acepta JSON" }


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
  await probar('RETO 3.1 (Accept: application/json)',
    () => fetch(base + '/datos', { headers: { Accept: 'application/json' } }),
    (res, body) => (body && body.tipo === 'JSON') || 'Se esperaba JSON { tipo: "JSON" }');

  await probar('RETO 3.1 (Accept: text/html)',
    () => fetch(base + '/datos', { headers: { Accept: 'text/html' } }),
    (res, body) => (typeof body === 'string' && body.includes('<h1>HTML</h1>')) || 'Se esperaba el texto "<h1>HTML</h1>"');

  await probar('RETO 3.1 (Accept: image/png -> 406)',
    () => fetch(base + '/datos', { headers: { Accept: 'image/png' } }),
    (res) => res.status === 406 || 'Se esperaba status 406 cuando el formato no es aceptable');

  await probar('RETO 3.2 (POST JSON -> 200)',
    () => fetch(base + '/recibir', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: '{"a":1}' }),
    (res, body) => (res.status === 200 && body && body.ok === true) || 'Se esperaba status 200 y { ok: true }');

  await probar('RETO 3.2 (POST texto -> 415)',
    () => fetch(base + '/recibir', { method: 'POST', headers: { 'Content-Type': 'text/plain' }, body: 'hola' }),
    (res) => res.status === 415 || 'Se esperaba status 415 para cuerpos que no son JSON');
});
