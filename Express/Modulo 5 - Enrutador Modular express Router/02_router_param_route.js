// ==========================================
// EJERCICIO 2: ROUTER.PARAM Y ENCADENAMIENTO DE SUB-RUTAS
// Para ejecutar: node "Express/Modulo 5 - Enrutador Modular express Router/02_router_param_route.js"
// ==========================================

const express = require('express');
const router = express.Router();

console.log("=== INTERCEPTOR ROUTER.PARAM ===");

// RETO 2.1: Interceptar el parámetro ':articuloId'
// TODO: Usa router.param('articuloId', (req, res, next, id) => { ... })
// Valida que el ID sea numérico. Si no lo es, responde con status 400.
// Si es válido, asigna req.articuloId = Number(id) y llama a next().


// RETO 2.2: Usar router.route()
// TODO: En la ruta '/:articuloId', encadena un .get() que devuelva el req.articuloId y un .delete().


console.log("Router param configurado.");
