// ==========================================
// PROYECTO 2: API REST CRUD NATIVA
// Para ejecutar: node "NodeJS/Modulo 15 - Proyectos Practicos Node/02_proyecto_api_rest_nativa.js"
// ==========================================

const http = require('http');

console.log("=== PROYECTO 2: API REST NATIVA ===");

const baseDatos = [
  { id: 1, nombre: "Item 1" },
  { id: 2, nombre: "Item 2" }
];

// RETO 2.1: Enrutador simple nativo
// TODO: Crea el servidor nativo:
// - GET /items: Responde status 200 con JSON.stringify(baseDatos).
// - POST /items: Lee chunks de datos (req.on('data'), req.on('end')),
//   parsea el body JSON, agrega { id: baseDatos.length + 1, ...nuevo } a baseDatos
//   y responde 201 con el item creado.
let serverRest = null;


// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA
// ==========================================
async function testRestNative() {
  if (!serverRest) {
    console.log("❌ RETO 2.1: 'serverRest' aún no ha sido instanciado con http.createServer().");
    return;
  }

  serverRest.listen(0, async () => {
    const port = serverRest.address().port;
    const baseUrl = `http://localhost:${port}`;
    console.log(`
🚀 Servidor REST nativo escuchando en puerto: ${port}\n`);

    try {
      const resGet = await fetch(`${baseUrl}/items`);
      if (resGet.status === 200) {
        console.log("✔ GET /items (Status 200):", await resGet.json());
      } else {
        console.log(`❌ GET /items devolvió status ${resGet.status}`);
      }

      const resPost = await fetch(`${baseUrl}/items`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nombre: "Item Nuevo" })
      });
      if (resPost.status === 201) {
        console.log("✔ POST /items (Status 201):", await resPost.json());
      } else {
        console.log(`❌ POST /items devolvió status ${resPost.status}`);
      }
    } catch (err) {
      console.log("❌ Error en pruebas:", err.message);
    } finally {
      console.log("\\n--- Fin de la comprobación ---\n");
      serverRest.close();
    }
  });
}

testRestNative();
