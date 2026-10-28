// ==========================================
// EJERCICIO 2: MIDDLEWARES INCORPORADOS (JSON, URLENCODED, STATIC)
// Para ejecutar: node "Express/Modulo 6 - Middlewares Fundamentales/02_middlewares_incorporados.js"
// ==========================================

const express = require('express');
const app = express();

console.log("=== CONFIGURANDO MIDDLEWARES BUILT-IN ===");

// RETO 2.1: Habilitar el parseo del cuerpo
// TODO: Usa express.json() y express.urlencoded({ extended: true }) con app.use()


// RETO 2.2: Rutas eco
// TODO: POST '/eco-json' -> responde JSON { recibido: req.body }
// TODO: POST '/eco-form' -> responde JSON { recibido: req.body }


// RETO 2.3: Servir archivos estáticos
// TODO: Sirve la carpeta de este módulo (__dirname) bajo el prefijo '/archivos' con express.static()


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
  await probar('RETO 2.1/2.2 (POST JSON)',
    () => fetch(base + '/eco-json', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ nombre: 'Ana' }) }),
    (res, body) => (body && body.recibido && body.recibido.nombre === 'Ana') ||
      'req.body no contiene { nombre: "Ana" }. ¿Activaste express.json()?');

  await probar('RETO 2.1/2.2 (POST formulario)',
    () => fetch(base + '/eco-form', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: 'ciudad=Rosario' }),
    (res, body) => (body && body.recibido && body.recibido.ciudad === 'Rosario') ||
      'req.body no contiene { ciudad: "Rosario" }. ¿Activaste express.urlencoded()?');

  await probar('RETO 2.3 (express.static)',
    () => fetch(base + '/archivos/02_middlewares_incorporados.js'),
    (res, body) => (res.status === 200 && typeof body === 'string' && body.includes('MIDDLEWARES INCORPORADOS')) ||
      'No se pudo obtener /archivos/02_middlewares_incorporados.js');
});
