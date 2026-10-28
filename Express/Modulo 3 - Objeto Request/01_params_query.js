// ==========================================
// EJERCICIO 1: PARÁMETROS Y CONSULTAS (REQ.PARAMS Y REQ.QUERY)
// Para ejecutar: node "Express/Modulo 3 - Objeto Request/01_params_query.js"
// ==========================================

const express = require('express');
const app = express();

console.log("=== MANIPULACIÓN DE REQ.PARAMS Y REQ.QUERY ===");

// RETO 1.1: Leer parámetros de ruta dinámicos
// TODO: Define una ruta GET '/cursos/:categoria/:cursoId'
// Extrae de req.params los valores 'categoria' y 'cursoId'
// Responde con un JSON: { categoria, cursoId }


// RETO 1.2: Leer query parameters opcionales
// TODO: En una ruta GET '/buscar', extrae del req.query las variables 'q' y 'page' (con valor por defecto 1).
// Responde con JSON: { termino: q, pagina: page }


console.log("Manejadores de params y query registrados.");
