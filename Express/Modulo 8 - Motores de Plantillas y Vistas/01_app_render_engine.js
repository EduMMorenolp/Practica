// ==========================================
// EJERCICIO 1: CONFIGURACIÓN DE VIEW ENGINE Y RES.RENDER
// Para ejecutar: node "Express/Modulo 8 - Motores de Plantillas y Vistas/01_app_render_engine.js"
// ==========================================

const express = require('express');
const path = require('path');
const app = express();

console.log("=== CONFIGURACIÓN DE VISTAS ===");

// RETO 1.1: Configurar carpeta de vistas y motor
// TODO: Usa app.set('views', ...) para apuntar a la carpeta 'views'.
// Usa app.set('view engine', 'ejs') para definir EJS como motor.


// RETO 1.2: Inyectar variables globales para vistas con res.locals
// TODO: Crea un middleware app.use((req, res, next) => { ... })
// Asigna res.locals.nombreSitio = "Practice Hub" y llama a next().


console.log("Configuración de motor de plantillas lista.");
