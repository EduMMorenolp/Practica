// ==========================================
// EJERCICIO 2: APP.ALL Y APP.ROUTE
// Para ejecutar: node "Express/Modulo 2 - Enrutamiento y Metodos HTTP/02_app_all_route.js"
// ==========================================

const express = require('express');
const app = express();

console.log("=== ENCADENAMIENTO CON APP.ROUTE ===");

let peticionesRegistradas = [];

// RETO 2.1: Usar app.all() para interceptar peticiones a /api/...
// TODO: Configura app.all('/api/{*ruta}', (req, res, next) => { ... })
// (En Express 5 el comodín se escribe '{*nombre}'; el antiguo '/api/*' lanza error)
// Registra en el array 'peticionesRegistradas.push(req.method)' y llama a next().


// RETO 2.2: Encadenar GET y POST en la misma ruta '/api/productos' usando app.route()
// TODO: Implementa:
// app.route('/api/productos')
//   .get((req, res) => res.send('Listando productos'))
//   .post((req, res) => res.status(201).send('Producto agregado'));


// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA
// ==========================================
async function testAppRoute() {
  const server = app.listen(0, async () => {
    const port = server.address().port;
    const baseUrl = `http://localhost:${port}`;
    console.log(`
🚀 Servidor de pruebas iniciado en puerto: ${port}\n`);

    try {
      const resGet = await fetch(`${baseUrl}/api/productos`);
      const txtGet = await resGet.text();
      if (resGet.status === 200 && txtGet.includes('Listando')) {
        console.log("✔ RETO 2.2 (GET /api/productos):", txtGet);
      } else {
        console.log("❌ RETO 2.2: GET /api/productos no responde como se esperaba.");
      }

      const resPost = await fetch(`${baseUrl}/api/productos`, { method: 'POST' });
      const txtPost = await resPost.text();
      if (resPost.status === 201 && txtPost.includes('agregado')) {
        console.log("✔ RETO 2.2 (POST /api/productos):", txtPost);
      } else {
        console.log("❌ RETO 2.2: POST /api/productos no responde como se esperaba.");
      }

      if (peticionesRegistradas.length >= 2) {
        console.log("✔ RETO 2.1 (app.all): Interceptó correctamente métodos:", peticionesRegistradas);
      } else {
        console.log("❌ RETO 2.1: app.all('/api/*') no registró las llamadas o faltó next().");
      }
    } catch (err) {
      console.log("❌ Error en la suite:", err.message);
    } finally {
      console.log("\\n--- Fin de la comprobación ---\n");
      server.close();
    }
  });
}

testAppRoute();
