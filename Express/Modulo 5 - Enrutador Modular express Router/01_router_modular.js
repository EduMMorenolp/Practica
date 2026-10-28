// ==========================================
// EJERCICIO 1: ENRUTADOR MODULAR CON EXPRESS.ROUTER()
// Para ejecutar: node "Express/Modulo 5 - Enrutador Modular express Router/01_router_modular.js"
// ==========================================

const express = require('express');
const app = express();

console.log("=== CREACIÓN Y MONTAJE DE SUB-ENRUTADORES ===");

const productosRouter = express.Router();

// RETO 1.1: Definir rutas dentro del router
// TODO: En productosRouter define:
// - GET '/'    -> responde "Listado de productos"
// - GET '/:id' -> responde "Detalle del producto " + id


// RETO 1.2: Montar el router en la app
// TODO: Monta productosRouter bajo el prefijo '/api/productos' con app.use()


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
  await probar('RETO 1.1/1.2 (GET /api/productos)',
    () => fetch(base + '/api/productos'),
    (res, body) => (typeof body === 'string' && body.includes('Listado de productos')) ||
      'Se esperaba "Listado de productos"');

  await probar('RETO 1.1/1.2 (GET /api/productos/42)',
    () => fetch(base + '/api/productos/42'),
    (res, body) => (typeof body === 'string' && body.includes('Detalle del producto 42')) ||
      'Se esperaba "Detalle del producto 42"');
});
