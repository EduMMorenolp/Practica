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


console.log("API REST CRUD lista para ser completada.");
