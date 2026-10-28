// ==========================================
// PROYECTO 2: SERVIDOR DE ARCHIVOS Y GESTOR DE DESCARGAS
// Para ejecutar: node "Express/Modulo 10 - Proyectos Practicos Express/02_proyecto_servidor_archivos.js"
// ==========================================

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

console.log("=== PROYECTO 2: SERVIDOR DE DESCARGAS ===");

// RETO 2.1: Archivos públicos
// TODO: Sirve la carpeta de este módulo (__dirname) bajo '/publico' con express.static()


// RETO 2.2: Descargas seguras
// TODO: GET '/descargas/:nombreArchivo':
// - Si el nombre contiene '..' -> status 400 y JSON { error: "Ruta no permitida" } (evita directory traversal)
// - Si el archivo no existe en __dirname -> status 404 y JSON { error: "Archivo no encontrado" }
// - Si existe -> res.download(rutaCompleta, nombreArchivo)


// RETO 2.3: Listado de archivos
// TODO: GET '/archivos' -> JSON con el array de archivos .js de __dirname (fs.readdirSync + filter)


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
  await probar('RETO 2.1 (estáticos en /publico)',
    () => fetch(base + '/publico/02_proyecto_servidor_archivos.js'),
    (res, body) => (res.status === 200 && typeof body === 'string' && body.includes('PROYECTO 2')) ||
      'No se pudo obtener /publico/02_proyecto_servidor_archivos.js');

  await probar('RETO 2.2 (descarga válida)',
    () => fetch(base + '/descargas/02_proyecto_servidor_archivos.js'),
    (res) => (res.headers.get('content-disposition') || '').includes('attachment') ||
      'Falta Content-Disposition: attachment (usa res.download)');

  await probar('RETO 2.2 (archivo inexistente -> 404)',
    () => fetch(base + '/descargas/no_existe.txt'),
    (res, body) => (res.status === 404 && Boolean(body && (body.error || (typeof body === 'string' && body.toLowerCase().includes('no encontrado'))))) ||
      'Se esperaba status 404 con mensaje o JSON de archivo no encontrado');

  await probar('RETO 2.2 (directory traversal -> 400)',
    () => fetch(base + '/descargas/..%2F..%2Fpackage.json'),
    (res) => res.status === 400 || 'Se esperaba status 400 al pedir "../../package.json"');

  await probar('RETO 2.3 (GET /archivos)',
    () => fetch(base + '/archivos'),
    (res, body) => (Array.isArray(body) && body.includes('02_proyecto_servidor_archivos.js')) ||
      'Se esperaba un array JSON que incluya "02_proyecto_servidor_archivos.js"');
});
