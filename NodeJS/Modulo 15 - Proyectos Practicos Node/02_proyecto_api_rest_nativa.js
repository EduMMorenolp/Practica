// ==========================================
// PROYECTO 2: API REST CRUD NATIVA
// Para ejecutar: node "NodeJS/Modulo 15 - Proyectos Practicos Node/02_proyecto_api_rest_nativa.js"
// ==========================================

console.log("=== PROYECTO 2: API REST NATIVA ===");

const baseDatos = [
  { id: 1, nombre: "Item 1" },
  { id: 2, nombre: "Item 2" }
];

// RETO 2.1: Enrutador simple
// TODO: Crea una función que maneje peticiones:
// - GET /items: Retorna JSON con baseDatos
// - POST /items: Lee el body acumulando chunks y agrega el nuevo item a baseDatos:
