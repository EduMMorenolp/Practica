// ==========================================
// EJERCICIO 2: CATCH-ALL 404 Y ERRORES ASÍNCRONOS
// Para ejecutar: node "Express/Modulo 7 - Manejo de Errores/02_manejador_404_async.js"
// ==========================================

const express = require('express');
const app = express();

console.log("=== ERRORES ASÍNCRONOS Y RUTAS NO ENCONTRADAS ===");

// Simula una consulta a base de datos que falla (no modificar)
function buscarUsuarios() {
  return new Promise((_, reject) => setTimeout(() => reject(new Error('Base de datos no disponible')), 20));
}

// RETO 2.1: Ruta asíncrona que propaga el error
// TODO: Define GET '/usuarios-async' con un handler async que haga await buscarUsuarios()
// dentro de try/catch y, si falla, llame a next(err)


// RETO 2.2: Catch-all 404 (debajo de todas las rutas)
// TODO: app.use((req, res) => ...) -> status 404 y JSON { error: "La ruta solicitada no existe." }


// RETO 2.3: Middleware de error (4 argumentos, al final de todo)
// TODO: app.use((err, req, res, next) => ...) -> status 500 y JSON { error: err.message }


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
  await probar('RETO 2.1/2.3 (error asíncrono -> 500 JSON)',
    () => fetch(base + '/usuarios-async'),
    (res, body) => (res.status === 500 && body && body.error === 'Base de datos no disponible') ||
      'Se esperaba status 500 con JSON { error: "Base de datos no disponible" }');

  await probar('RETO 2.2 (catch-all 404 JSON)',
    () => fetch(base + '/ruta-inventada'),
    (res, body) => (res.status === 404 && body && body.error === 'La ruta solicitada no existe.') ||
      'Se esperaba status 404 con JSON { error: "La ruta solicitada no existe." }');
});
