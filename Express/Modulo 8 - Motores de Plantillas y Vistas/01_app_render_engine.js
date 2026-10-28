// ==========================================
// EJERCICIO 1: MOTOR DE PLANTILLAS PROPIO Y RES.RENDER
// Para ejecutar: node "Express/Modulo 8 - Motores de Plantillas y Vistas/01_app_render_engine.js"
// ==========================================

const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

console.log("=== CONFIGURACIÓN DE VISTAS ===");

// La plantilla está en ./views/saludo.tpl y contiene: <h1>{{titulo}}</h1><p>Sitio: {{nombreSitio}}</p>

// RETO 1.1: Registrar un motor de plantillas propio con app.engine('tpl', ...)
// TODO: El callback recibe (rutaArchivo, opciones, callback):
// - Lee el archivo con fs.readFile(rutaArchivo, 'utf-8', ...)
// - Reemplaza cada {{clave}} por opciones[clave] (pista: /\{\{(\w+)\}\}/g)
// - Devuelve el HTML con callback(null, html) o el error con callback(err)


// RETO 1.2: Configurar vistas
// TODO: app.set('views', path.join(__dirname, 'views')) y app.set('view engine', 'tpl')


// RETO 1.3: Variables globales de vista con res.locals
// TODO: Middleware que asigne res.locals.nombreSitio = "Practice Hub" y llame a next()


// RETO 1.4: Renderizar
// TODO: GET '/saludo' -> res.render('saludo', { titulo: "Hola Vistas" })


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
  if (app.get('view engine') === 'tpl' && app.get('views') === path.join(__dirname, 'views')) {
    console.log('✔ RETO 1.2: views y view engine configurados.');
  } else {
    console.log('❌ RETO 1.2: Falta app.set("views", ...) o app.set("view engine", "tpl").');
  }

  await probar('RETO 1.1/1.4 (render de saludo)',
    () => fetch(base + '/saludo'),
    (res, body) => (typeof body === 'string' && body.includes('<h1>Hola Vistas</h1>')) ||
      'El HTML no contiene <h1>Hola Vistas</h1>');

  await probar('RETO 1.3 (res.locals.nombreSitio)',
    () => fetch(base + '/saludo'),
    (res, body) => (typeof body === 'string' && body.includes('Sitio: Practice Hub')) ||
      'El HTML no contiene "Sitio: Practice Hub"');
});
