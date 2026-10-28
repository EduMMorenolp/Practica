// ==========================================
// EJERCICIO 3: NEGOCIACIÓN DE CONTENIDO
// Para ejecutar: node "Express/Modulo 3 - Objeto Request/03_negociacion_contenido.js"
// ==========================================

const express = require('express');
const app = express();

console.log("=== NEGOCIACIÓN CON REQ.ACCEPTS Y REQ.IS ===");

// RETO 3.1: Comprobar el formato aceptado por el cliente
// TODO: Define una ruta GET '/datos'
// Si req.accepts('json') es verdadero, responde con res.json({ tipo: "JSON" })
// Si req.accepts('html') es verdadero, responde con res.send("<h1>HTML</h1>")
// Si ninguno coincide, responde con status 406 (Not Acceptable) y mensaje "No aceptable".


console.log("Manejador de negociación registrado.");
