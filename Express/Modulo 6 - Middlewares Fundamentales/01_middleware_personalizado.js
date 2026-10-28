// ==========================================
// EJERCICIO 1: MIDDLEWARE PERSONALIZADO Y CADENAS DE EJECUCIÓN
// Para ejecutar: node "Express/Modulo 6 - Middlewares Fundamentales/01_middleware_personalizado.js"
// ==========================================

const express = require('express');
const app = express();

console.log("=== CREACIÓN DE MIDDLEWARES PROPIOS ===");

// RETO 1.1: Middleware medidor de tiempo de respuesta
// TODO: Crea una función middleware que registre el tiempo inicial (Date.now()) en req.tiempoInicio.
// Luego debe llamar a next():


// RETO 1.2: Middleware de validación de API Key
// TODO: Crea una función que lea el header 'x-api-key'.
// Si el header es igual a 'clave-secreta', llama a next().
// Si no, responde con res.status(401).json({ error: "No autorizado" }).


console.log("Middlewares personalizados listos.");
