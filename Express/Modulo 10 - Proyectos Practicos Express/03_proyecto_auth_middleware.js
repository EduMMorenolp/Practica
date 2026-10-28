// ==========================================
// PROYECTO 3: PROTECCIÓN DE RUTAS CON AUTH MIDDLEWARE
// Para ejecutar: node "Express/Modulo 10 - Proyectos Practicos Express/03_proyecto_auth_middleware.js"
// ==========================================

const express = require('express');
const app = express();
app.use(express.json());

console.log("=== PROYECTO 3: AUTENTICACIÓN Y ROLES ===");

// "Base de datos" de tokens válidos (no modificar)
const TOKENS = {
  'token-super-seguro': { id: 1, role: 'admin' },
  'token-usuario': { id: 2, role: 'user' }
};

// RETO 3.1: Middleware verificarToken(req, res, next)
// TODO: Lee el header 'authorization'.
// - Si no existe o no empieza con 'Bearer ' -> status 401 y JSON { error: "Token requerido" }
// - Si el token existe en TOKENS -> req.user = TOKENS[token] y next()
// - Si no -> status 403 y JSON { error: "Token inválido" }


// RETO 3.2: Middleware de roles soloRol(rol)
// TODO: Función que RETORNA un middleware: si req.user.role !== rol -> 403 JSON { error: "Permiso denegado" }; si no, next()


// RETO 3.3: Ruta protegida
// TODO: GET '/api/panel-admin' protegida con verificarToken y soloRol('admin')
// Responde JSON { mensaje: "Bienvenido al panel", usuario: req.user }


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
  const pedir = (token) => fetch(base + '/api/panel-admin', token ? { headers: { Authorization: 'Bearer ' + token } } : {});

  await probar('RETO 3.1 (sin token -> 401)', () => pedir(null),
    (res) => res.status === 401 || 'Se esperaba status 401 sin header Authorization');

  await probar('RETO 3.1 (token falso -> 403)', () => pedir('token-falso'),
    (res) => res.status === 403 || 'Se esperaba status 403 con un token inexistente');

  await probar('RETO 3.2 (rol user -> 403)', () => pedir('token-usuario'),
    (res) => res.status === 403 || 'Un usuario con rol "user" no debería acceder al panel');

  await probar('RETO 3.3 (admin -> 200)', () => pedir('token-super-seguro'),
    (res, body) => (res.status === 200 && body && body.usuario && body.usuario.role === 'admin') ||
      'Se esperaba status 200 con JSON { mensaje, usuario: { role: "admin" } }');
});
