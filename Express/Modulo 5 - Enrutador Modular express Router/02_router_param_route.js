// ==========================================
// EJERCICIO 2: ROUTER.PARAM Y ENCADENAMIENTO DE SUB-RUTAS
// Para ejecutar: node "Express/Modulo 5 - Enrutador Modular express Router/02_router_param_route.js"
// ==========================================

const express = require('express');
const app = express();
const router = express.Router();

console.log("=== INTERCEPTOR ROUTER.PARAM ===");

// RETO 2.1: Interceptar el parámetro ':articuloId' con router.param()
// TODO: Si el id NO es numérico -> status 400 y JSON { error: "ID inválido" }
// Si es válido -> guarda req.articuloId = Number(id) y llama a next()


// RETO 2.2: Encadenar métodos con router.route('/:articuloId')
// TODO: .get()    -> JSON { id: req.articuloId }
//       .delete() -> JSON { eliminado: req.articuloId }


// RETO 2.3: Montar el router
// TODO: Monta el router bajo el prefijo '/articulos'


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
  await probar('RETO 2.1 (ID inválido -> 400)',
    () => fetch(base + '/articulos/abc'),
    (res) => res.status === 400 || 'Se esperaba status 400 para un ID no numérico');

  await probar('RETO 2.2 (GET /articulos/7)',
    () => fetch(base + '/articulos/7'),
    (res, body) => (body && body.id === 7) || 'Se esperaba JSON { id: 7 } (id como número)');

  await probar('RETO 2.2 (DELETE /articulos/7)',
    () => fetch(base + '/articulos/7', { method: 'DELETE' }),
    (res, body) => (body && body.eliminado === 7) || 'Se esperaba JSON { eliminado: 7 }');
});
