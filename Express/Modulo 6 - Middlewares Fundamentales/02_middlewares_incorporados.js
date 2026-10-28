// ==========================================
// EJERCICIO 2: MIDDLEWARES INCORPORADOS (JSON, URLENCODED, STATIC)
// Para ejecutar: node "Express/Modulo 6 - Middlewares Fundamentales/02_middlewares_incorporados.js"
// ==========================================

const express = require('express');
const path = require('path');
const app = express();

console.log("=== CONFIGURANDO MIDDLEWARES BUILT-IN ===");

// RETO 2.1: Habilitar parseo de cuerpo JSON y Form URL-Encoded
// TODO: Usa app.use(express.json()) y app.use(express.urlencoded({ extended: true })).


// RETO 2.2: Servir archivos estáticos
// TODO: Usa app.use('/archivos', express.static(path.join(__dirname, 'public'))).


console.log("Middlewares incorporados configurados exitosamente.");
