// ==========================================
// EJERCICIO 1: ENVÍO DE RESPUESTAS, ESTADOS Y FORMATOS
// Para ejecutar: node "Express/Modulo 4 - Objeto Response/01_send_json_status.js"
// ==========================================

const express = require('express');
const app = express();

console.log("=== ENVIANDO RESPUESTAS CON STATUS Y JSON ===");

// RETO 1.1: Respuesta 201 Created con JSON
// TODO: Define una ruta POST '/registro'
// Responde con status 201 y un JSON con { mensaje: "Usuario registrado con éxito", id: 101 }


// RETO 1.2: Respuesta 404 con res.status() y res.send()
// TODO: Define una ruta GET '/no-existe'
// Responde con status 404 y texto: "El recurso solicitado no fue encontrado."


// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA
// ==========================================
async function testResponse() {
  const server = app.listen(0, async () => {
    const port = server.address().port;
    const baseUrl = `http://localhost:${port}`;
    console.log(`
🚀 Servidor de pruebas iniciado en puerto: ${port}\n`);

    try {
      const resPost = await fetch(`${baseUrl}/registro`, { method: 'POST' });
      if (resPost.status === 201) {
        const data = await resPost.json();
        console.log("✔ RETO 1.1 (POST 201 JSON):", data);
      } else {
        console.log(`❌ RETO 1.1: Esperado status 201, recibido ${resPost.status}`);
      }

      const resGet = await fetch(`${baseUrl}/no-existe`);
      const txt = await resGet.text();
      if (resGet.status === 404 && txt.includes("no fue encontrado")) {
        console.log(`✔ RETO 1.2 (GET 404): "${txt}"`);
      } else {
        console.log(`❌ RETO 1.2: Esperado 404 con texto específico, recibido ${resGet.status}`);
      }
    } catch (err) {
      console.log("❌ Error en pruebas:", err.message);
    } finally {
      console.log("\\n--- Fin de la comprobación ---\n");
      server.close();
    }
  });
}

testResponse();
