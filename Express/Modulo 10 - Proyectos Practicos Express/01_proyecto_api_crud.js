// ==========================================
// PROYECTO 1: API RESTFUL CRUD DE PRODUCTOS
// Para ejecutar: node "Express/Modulo 10 - Proyectos Practicos Express/01_proyecto_api_crud.js"
// ==========================================

const express = require('express');
const app = express();
app.use(express.json());

console.log("=== PROYECTO 1: API REST CRUD ===");

// Base de datos en memoria para practicar
let productos = [
  { id: 1, nombre: "Teclado Mecánico", precio: 75 },
  { id: 2, nombre: "Mouse Gamer", precio: 45 }
];

// RETO 1: GET /api/productos -> Devuelve todos los productos
// TODO: Implementa la ruta GET para retornar el array completo con status 200:


// RETO 2: GET /api/productos/:id -> Devuelve un producto por ID o 404 si no existe
// TODO: Implementa la búsqueda por id (convirtiendo a número con Number(req.params.id)):


// RETO 3: POST /api/productos -> Agrega un producto nuevo
// TODO: Extrae nombre y precio de req.body. Si faltan datos responde con 400.
// Genera un nuevo id, agrégalo a la lista y responde con status 201 y el objeto creado:


// RETO 4: DELETE /api/productos/:id -> Elimina el producto especificado
// TODO: Filtra el producto y responde con status 200 y mensaje de confirmación:


// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA
// ==========================================
async function validarReto(nombre, ejecucion) {
  try {
    const res = await ejecucion();
    const contentType = res.headers.get('content-type') || '';
    if (res.status === 404 && !contentType.includes('application/json')) {
      console.log(`❌ ${nombre}: La ruta aún no está implementada (recibió 404 HTML).`);
      return false;
    }
    if (res.status >= 500) {
      console.log(`❌ ${nombre}: Ocurrió un error interno en el servidor (status ${res.status}). Revisa si hay variables no definidas.`);
      return false;
    }
    let data = null;
    if (contentType.includes('application/json')) {
      data = await res.json();
    } else {
      data = await res.text();
    }
    console.log(`✔ ${nombre} (Status ${res.status}):`, data);
    return true;
  } catch (err) {
    console.log(`❌ ${nombre}: Error de ejecución -> ${err.message}`);
    return false;
  }
}
const server = app.listen(0, async () => {
  const port = server.address().port;
  const baseUrl = `http://localhost:${port}`;
  console.log(`\n🚀 Servidor de pruebas iniciado en puerto: ${port}\n`);
  // Validar RETO 1
  await validarReto("RETO 1 (GET /api/productos)", () => 
    fetch(`${baseUrl}/api/productos`)
  );
  // Validar RETO 2
  await validarReto("RETO 2 (GET /api/productos/:id)", () => 
    fetch(`${baseUrl}/api/productos/1`)
  );
  // Validar RETO 3
  await validarReto("RETO 3 (POST /api/productos)", () => 
    fetch(`${baseUrl}/api/productos`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nombre: "Monitor 144Hz", precio: 220 })
    })
  );
  // Validar RETO 4
  await validarReto("RETO 4 (DELETE /api/productos/:id)", () => 
    fetch(`${baseUrl}/api/productos/1`, { method: 'DELETE' })
  );
  console.log("\n--- Fin de la comprobación ---\n");
  server.close();
});
