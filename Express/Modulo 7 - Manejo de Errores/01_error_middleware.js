// ==========================================
// EJERCICIO 1: MIDDLEWARE DE ERROR DE 4 ARGUMENTOS
// Para ejecutar: node "Express/Modulo 7 - Manejo de Errores/01_error_middleware.js"
// ==========================================

const express = require('express');
const app = express();

console.log("=== CONFIGURACIÓN DE GESTIÓN CENTRALIZADA DE ERRORES ===");

// RETO 1.1: Ruta que detona un error
// TODO: Define GET '/fallar' que ejecute: next(new Error("Fallo en la base de datos"))


// RETO 1.2: Middleware de error con 4 argumentos (err, req, res, next)
// TODO: Define app.use((err, req, res, next) => { ... })
// Debe responder con status 500 y JSON: { error: true, mensaje: err.message }


// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA
// ==========================================
async function testErrors() {
  const server = app.listen(0, async () => {
    const port = server.address().port;
    const baseUrl = `http://localhost:${port}`;
    console.log(`
🚀 Servidor de pruebas iniciado en puerto: ${port}\n`);

    try {
      const res = await fetch(`${baseUrl}/fallar`);
      const contentType = res.headers.get('content-type') || '';
      if (res.status === 500 && contentType.includes('application/json')) {
        const json = await res.json();
        if (json.error && json.mensaje === "Fallo en la base de datos") {
          console.log("✔ RETO 1.1 y 1.2: Error capturado y respondido en JSON:", json);
        } else {
          console.log("❌ RETO 1.2: Respondió 500 JSON pero el formato esperado es { error: true, mensaje }:", json);
        }
      } else if (res.status === 404) {
        console.log("❌ RETO 1.1: La ruta '/fallar' no está implementada (404).");
      } else {
        console.log(`❌ RETO 1.2: El middleware de error no devolvió JSON o falló (status ${res.status}).`);
      }
    } catch (err) {
      console.log("❌ Error en pruebas:", err.message);
    } finally {
      console.log("\\n--- Fin de la comprobación ---\n");
      server.close();
    }
  });
}

testErrors();
