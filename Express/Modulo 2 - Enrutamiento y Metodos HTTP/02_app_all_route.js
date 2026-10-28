// ==========================================
// EJERCICIO 2: APP.ALL Y APP.ROUTE
// Para ejecutar: node "Express/Modulo 2 - Enrutamiento y Metodos HTTP/02_app_all_route.js"
// ==========================================

const express = require('express');
const app = express();

console.log("=== ENCADENAMIENTO CON APP.ROUTE ===");

// RETO 2.1: Usar app.all() para registrar cualquier acceso a /api/*
// TODO: Configura app.all('/api/*', (req, res, next) => { ... })
// Imprime en consola: `[LOG] Acceso a ${req.url} vía ${req.method}` y llama a next().


// RETO 2.2: Encadenar GET, POST y DELETE en la misma ruta '/productos' usando app.route()
// TODO: Implementa:
// app.route('/productos')
//   .get((req, res) => res.send('Listando productos'))
//   .post((req, res) => res.status(201).send('Producto agregado'))
//   .delete((req, res) => res.send('Producto borrado'));

console.log("Ruta encadenada lista.");
