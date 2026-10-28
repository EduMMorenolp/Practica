// ==========================================
// EJERCICIO 3: REDIRECCIONES Y TRANSFERENCIA DE ARCHIVOS
// Para ejecutar: node "Express/Modulo 4 - Objeto Response/03_archivos_redirect.js"
// ==========================================

const express = require('express');
const app = express();

console.log("=== REDIRECCIONES Y TRANSFERENCIA DE ARCHIVOS ===");

// RETO 3.1: Redirección permanente 301
// TODO: Define GET '/antigua-ruta' que redirija con res.redirect(301, ...) hacia '/nueva-ruta'.
// TODO: Define GET '/nueva-ruta' que responda "Bienvenido a la nueva ruta"


// RETO 3.2: Forzar la descarga de un archivo
// TODO: Define GET '/descargar' que use res.download() para enviar ESTE archivo (__filename)
// con el nombre de descarga 'ejercicio.js'


// RETO 3.3: Enviar un archivo para mostrarlo (no descargarlo)
// TODO: Define GET '/ver-codigo' que use res.sendFile(__filename)


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
  await probar('RETO 3.1 (redirect 301)',
    () => fetch(base + '/antigua-ruta', { redirect: 'manual' }),
    (res) => (res.status === 301 && res.headers.get('location') === '/nueva-ruta') ||
      'Se esperaba status 301 con Location: /nueva-ruta');

  await probar('RETO 3.1 (GET /nueva-ruta)',
    () => fetch(base + '/nueva-ruta'),
    (res, body) => (typeof body === 'string' && body.includes('Bienvenido a la nueva ruta')) ||
      'Se esperaba el texto "Bienvenido a la nueva ruta"');

  await probar('RETO 3.2 (res.download)',
    () => fetch(base + '/descargar'),
    (res) => {
      const disp = res.headers.get('content-disposition') || '';
      return (disp.includes('attachment') && disp.includes('ejercicio.js')) ||
        'Falta Content-Disposition: attachment con nombre "ejercicio.js"';
    });

  await probar('RETO 3.3 (res.sendFile)',
    () => fetch(base + '/ver-codigo'),
    (res, body) => (res.status === 200 && typeof body === 'string' && body.includes('EJERCICIO 3: REDIRECCIONES')) ||
      'Se esperaba recibir el contenido de este mismo archivo');
});
