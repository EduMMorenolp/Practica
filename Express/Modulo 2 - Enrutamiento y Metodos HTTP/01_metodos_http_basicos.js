// ==========================================
// EJERCICIO 1: MÉTODOS HTTP BÁSICOS
// Para ejecutar: node "Express/Modulo 2 - Enrutamiento y Metodos HTTP/01_metodos_http_basicos.js"
// ==========================================

const express = require('express');
const app = express();

console.log("=== CONFIGURANDO RUTAS Y MÉTODOS HTTP ===");

// RETO 1.1: Definir rutas para los verbos HTTP
// TODO: Define:
// - app.get('/articulos', ...) que responda: "Lista de artículos"
// - app.post('/articulos', ...) que responda con status 201 y texto: "Artículo creado"
// - app.delete('/articulos', ...) que responda: "Artículo eliminado"


// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA
// ==========================================
async function testRoutes() {
  const server = app.listen(0, async () => {
    const port = server.address().port;
    const baseUrl = `http://localhost:${port}`;
    console.log(`
🚀 Servidor de pruebas iniciado en puerto: ${port}\n`);

    async function check(nombre, method, path, expectedStatus, expectedText) {
      try {
        const res = await fetch(`${baseUrl}${path}`, { method });
        const text = await res.text();
        if (res.status === 404 && text.includes('Cannot')) {
          console.log(`❌ ${nombre}: La ruta ${method} ${path} aún no está implementada.`);
          return;
        }
        if (res.status === expectedStatus && text.includes(expectedText)) {
          console.log(`✔ ${nombre} (${method} ${path}) respondió status ${res.status}: "${text}"`);
        } else {
          console.log(`❌ ${nombre}: Esperado status ${expectedStatus} con "${expectedText}", recibido status ${res.status}: "${text}"`);
        }
      } catch (err) {
        console.log(`❌ ${nombre}: Error -> ${err.message}`);
      }
    }

    await check("RETO 1.1 (GET)", 'GET', '/articulos', 200, "Lista de artículos");
    await check("RETO 1.2 (POST)", 'POST', '/articulos', 201, "Artículo creado");
    await check("RETO 1.3 (DELETE)", 'DELETE', '/articulos', 200, "Artículo eliminado");

    console.log("\\n--- Fin de la comprobación ---\n");
    server.close();
  });
}

testRoutes();
