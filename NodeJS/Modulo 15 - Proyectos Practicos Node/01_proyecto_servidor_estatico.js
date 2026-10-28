// ==========================================
// PROYECTO 1: SERVIDOR DE ARCHIVOS ESTÁTICOS
// Para ejecutar: node "NodeJS/Modulo 15 - Proyectos Practicos Node/01_proyecto_servidor_estatico.js"
// ==========================================

const http = require('http');
const fs = require('fs');
const path = require('path');

console.log("=== PROYECTO 1: SERVIDOR ESTÁTICO NATIVO ===");

// RETO 1.1: Servidor estático con fs.createReadStream
// TODO: Implementa la lógica del servidor http.createServer((req, res) => { ... })
// Si solicitan '/', sirve este mismo archivo usando fs.createReadStream(__filename).pipe(res)
// Si solicitan algo que no existe, responde 404.
let staticServer = null;


// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA
// ==========================================
async function testStaticServer() {
  if (!staticServer) {
    console.log("❌ RETO 1.1: 'staticServer' aún no ha sido instanciado con http.createServer().");
    return;
  }

  staticServer.listen(0, async () => {
    const port = staticServer.address().port;
    const baseUrl = `http://localhost:${port}`;
    console.log(`
🚀 Servidor de estáticos escuchando en puerto: ${port}\n`);

    try {
      const res = await fetch(`${baseUrl}/`);
      const texto = await res.text();
      if (res.status === 200 && texto.includes("PROYECTO 1: SERVIDOR ESTÁTICO")) {
        console.log("✔ RETO 1.1: Servidor sirvió exitosamente el archivo solicitado vía stream.");
      } else {
        console.log(`❌ RETO 1.1: Esperado status 200 con el contenido, recibido ${res.status}`);
      }
    } catch (err) {
      console.log("❌ Error al probar el servidor:", err.message);
    } finally {
      console.log("\\n--- Fin de la comprobación ---\n");
      staticServer.close();
    }
  });
}

testStaticServer();
