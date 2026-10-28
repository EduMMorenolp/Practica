// ==========================================
// EJERCICIO 1: MIDDLEWARE PERSONALIZADO Y CADENAS DE EJECUCIÓN
// Para ejecutar: node "Express/Modulo 6 - Middlewares Fundamentales/01_middleware_personalizado.js"
// ==========================================

const express = require('express');
const app = express();

console.log("=== CREACIÓN DE MIDDLEWARES PROPIOS ===");

// RETO 1.1: Middleware inyector de timestamp
// TODO: Crea un middleware global app.use((req, res, next) => { ... })
// Asigna en req.timestamp = Date.now() y llama a next().


// RETO 1.2: Middleware guardián de autorización por header
// TODO: Define la ruta GET '/protegido' con un middleware intermedio que verifique:
// Si req.get('x-api-key') === 'secreto123', llama a next().
// Si no, responde status 401 y { error: "No autorizado" }.
// Si pasa la validación, responde status 200 y { acceso: "concedido", tiempo: req.timestamp }.


// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA
// ==========================================
async function testMiddleware() {
  const server = app.listen(0, async () => {
    const port = server.address().port;
    const baseUrl = `http://localhost:${port}`;
    console.log(`
🚀 Servidor de pruebas iniciado en puerto: ${port}\n`);

    try {
      // 1. Probar acceso denegado
      const resSinAuth = await fetch(`${baseUrl}/protegido`);
      if (resSinAuth.status === 401) {
        console.log("✔ RETO 1.2 (Sin auth): Respondió 401 No Autorizado correctamente.");
      } else {
        console.log(`❌ RETO 1.2: Se esperaba status 401 sin header, recibido ${resSinAuth.status}`);
      }

      // 2. Probar acceso autorizado
      const resConAuth = await fetch(`${baseUrl}/protegido`, {
        headers: { 'x-api-key': 'secreto123' }
      });
      if (resConAuth.status === 200) {
        const json = await resConAuth.json();
        if (json.tiempo) {
          console.log("✔ RETO 1.1 y 1.2: Acceso concedido y timestamp inyectado:", json);
        } else {
          console.log("❌ RETO 1.1: Acceso concedido pero req.timestamp no fue inyectado.");
        }
      } else {
        console.log(`❌ RETO 1.2: Con clave correcta se esperaba 200, recibido ${resConAuth.status}`);
      }
    } catch (err) {
      console.log("❌ Error en pruebas:", err.message);
    } finally {
      console.log("\\n--- Fin de la comprobación ---\n");
      server.close();
    }
  });
}

testMiddleware();
