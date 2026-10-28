// ==========================================
// TEMA 1: SERVIDOR HTTP NATIVO
// Para ejecutar: node "NodeJS/Modulo 8 - Servidores HTTP y HTTPS/01_servidor_http_nativo.js"
// ==========================================

const http = require('http');

console.log("=== TEMA 1: SERVIDOR HTTP NATIVO ===");

// RETO 1.1: Crear servidor HTTP nativo
// TODO: Crea el servidor con http.createServer((req, res) => { ... })
// Si req.url === '/api/saludo', devuelve status 200, Content-Type 'application/json'
// y envía el JSON: JSON.stringify({ mensaje: "¡Hola desde Node nativo!" })
// Para cualquier otra ruta responde status 404 y texto "No encontrado".
let miServidor = null;


// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA
// ==========================================
async function testNodeHttp() {
  if (!miServidor) {
    console.log("❌ RETO 1.1: 'miServidor' aún no está creado con http.createServer().");
    return;
  }

  miServidor.listen(0, async () => {
    const port = miServidor.address().port;
    const baseUrl = `http://localhost:${port}`;
    console.log(`
🚀 Servidor HTTP de prueba escuchando en puerto: ${port}\n`);

    try {
      const res = await fetch(`${baseUrl}/api/saludo`);
      if (res.status === 200) {
        const json = await res.json();
        console.log("✔ RETO 1.1: /api/saludo respondió correctamente:", json);
      } else {
        console.log(`❌ RETO 1.1: Se esperaba status 200 en /api/saludo, recibido ${res.status}`);
      }

      const res404 = await fetch(`${baseUrl}/otra-cosa`);
      if (res404.status === 404) {
        console.log("✔ RETO 1.1: Ruta no existente manejada con 404.");
      } else {
        console.log(`❌ RETO 1.1: Ruta desconocida debería retornar 404, recibido ${res404.status}`);
      }
    } catch (err) {
      console.log("❌ Error en pruebas:", err.message);
    } finally {
      console.log("\\n--- Fin de la comprobación ---\n");
      miServidor.close();
    }
  });
}

testNodeHttp();
