// ==========================================
// EJERCICIO 1: ENVÍO DE RESPUESTAS, ESTADOS Y FORMATOS
// Para ejecutar: node "Express/Modulo 4 - Objeto Response/01_send_json_status.js"
// ==========================================

const express = require('express');
const app = express();

console.log("=== ENVIANDO RESPUESTAS CON STATUS Y JSON ===");

// RETO 1.1: Respuesta 201 Created con JSON
// TODO: Define una ruta POST '/registro'
// Responde con status 201 y un JSON con { mensaje: "Usuario registrado con éxito", id: 101 }


// RETO 1.2: Respuesta 404 con res.status() y res.send()
// TODO: Define una ruta GET '/no-existe'
// Responde con status 404 y texto: "El recurso solicitado no fue encontrado."


console.log("Endpoints de respuesta listos.");
