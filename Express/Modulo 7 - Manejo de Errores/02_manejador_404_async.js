// ==========================================
// EJERCICIO 2: CATCH-ALL 404 Y ERRORES ASÍNCRONOS
// Para ejecutar: node "Express/Modulo 7 - Manejo de Errores/02_manejador_404_async.js"
// ==========================================

const express = require('express');
const app = express();

console.log("=== MANEJO DE RUTAS NO ENCONTRADAS (404) ===");

// RETO 2.1: Middleware catch-all para 404
// TODO: Agrega un middleware al final de todo: app.use((req, res) => { ... })
// Responde con status 404 y el mensaje: "La ruta solicitada no existe."


console.log("Catch-all 404 configurado.");
