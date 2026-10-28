// ==========================================
// EJERCICIO 2: COOKIES Y ENCABEZADOS DE RESPUESTA
// Para ejecutar: node "Express/Modulo 4 - Objeto Response/02_cookies_headers.js"
// ==========================================

const express = require('express');
const app = express();

console.log("=== GESTIÓN DE COOKIES Y HEADERS ===");

// RETO 2.1: Establecer cookies y encabezados personalizados
// TODO: Define una ruta GET '/login-demo'
// - Asigna una cookie llamada 'token_sesion' con el valor 'abc-123-xyz' y la opción { httpOnly: true }.
// - Asigna una cabecera personalizada 'X-Custom-Server' con el valor 'PracticeExpress'.
// - Responde con un JSON { estado: "sesion_iniciada" }.


// RETO 2.2: Borrar una cookie
// TODO: Define una ruta GET '/logout-demo'
// Usa res.clearCookie('token_sesion') y responde con texto "Sesión finalizada".


console.log("Manejadores de cookies y headers listos.");
