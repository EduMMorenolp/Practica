// ==========================================
// EJERCICIO 1: ENRUTADOR MODULAR CON EXPRESS.ROUTER()
// Para ejecutar: node "Express/Modulo 5 - Enrutador Modular express Router/01_router_modular.js"
// ==========================================

const express = require('express');
const app = express();

console.log("=== CREACIÓN Y MONTAJE DE SUB-ENRUTADORES ===");

// RETO 1.1: Crear un enrutador para productos
// TODO: Instancia un nuevo Router llamando a express.Router().
// Asigna las siguientes rutas en el router:
// - GET '/' -> Responde "Listado de productos"
// - GET '/:id' -> Responde `Detalle del producto ${req.params.id}`
const productosRouter = express.Router();


// RETO 1.2: Montar el enrutador en la app
// TODO: Monta 'productosRouter' bajo el prefijo '/api/productos' usando app.use():


console.log("Sub-enrutador montado con éxito.");
