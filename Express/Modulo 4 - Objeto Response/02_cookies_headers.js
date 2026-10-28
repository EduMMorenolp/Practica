// ==========================================
// EJERCICIO 2: COOKIES Y ENCABEZADOS DE RESPUESTA
// Para ejecutar: node "Express/Modulo 4 - Objeto Response/02_cookies_headers.js"
// ==========================================

const express = require('express');
const app = express();

console.log("=== GESTIÓN DE COOKIES Y HEADERS ===");

// RETO 2.1: Establecer cookies y encabezados personalizados
// TODO: Define GET '/login-demo':
// - Asigna la cookie 'token_sesion' con valor 'abc-123-xyz' y la opción { httpOnly: true } (res.cookie)
// - Asigna el header 'X-Custom-Server' con valor 'PracticeExpress' (res.set)
// - Responde con JSON { estado: "sesion_iniciada" }


// RETO 2.2: Borrar una cookie
// TODO: Define GET '/logout-demo' que use res.clearCookie('token_sesion') y responda "Sesión finalizada"


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
  await probar('RETO 2.1 (cookie token_sesion)',
    () => fetch(base + '/login-demo'),
    (res) => {
      const cookie = res.headers.get('set-cookie') || '';
      return (cookie.includes('token_sesion=abc-123-xyz') && cookie.includes('HttpOnly')) ||
        'No se encontró la cookie token_sesion=abc-123-xyz con HttpOnly';
    });

  await probar('RETO 2.1 (header X-Custom-Server)',
    () => fetch(base + '/login-demo'),
    (res, body) => (res.headers.get('x-custom-server') === 'PracticeExpress' && body && body.estado === 'sesion_iniciada') ||
      'Falta el header X-Custom-Server: PracticeExpress o el JSON { estado: "sesion_iniciada" }');

  await probar('RETO 2.2 (clearCookie)',
    () => fetch(base + '/logout-demo'),
    (res) => (res.headers.get('set-cookie') || '').includes('token_sesion=;') ||
      'La respuesta no borra la cookie token_sesion (usa res.clearCookie)');
});
