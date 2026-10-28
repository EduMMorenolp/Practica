// ==========================================
// EJERCICIO 1: MIDDLEWARE DE ERROR DE 4 ARGUMENTOS
// Para ejecutar: node "Express/Modulo 7 - Manejo de Errores/01_error_middleware.js"
// ==========================================

const express = require('express');
const app = express();

console.log("=== CONFIGURACIÓN DE GESTIÓN CENTRALIZADA DE ERRORES ===");

// RETO 1.1: Ruta que detona un error controlado
// TODO: Define una ruta GET '/provocar-error' que lance un error o invoque next(new Error("Fallo en la BD")).


// RETO 1.2: Implementar el middleware de errores (err, req, res, next)
// TODO: Configura app.use((err, req, res, next) => { ... })
// Debe responder con status 500 y un JSON con { error: true, detalle: err.message }.


console.log("Manejador centralizado de errores registrado.");
