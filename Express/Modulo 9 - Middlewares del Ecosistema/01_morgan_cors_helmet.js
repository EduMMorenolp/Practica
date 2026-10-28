// ==========================================
// EJERCICIO 1: INTEGRACIÓN DE MIDDLEWARES DEL ECOSISTEMA
// Para ejecutar: node "Express/Modulo 9 - Middlewares del Ecosistema/01_morgan_cors_helmet.js"
// ==========================================

const express = require('express');
const app = express();

console.log("=== CONFIGURACIÓN DE MIDDLEWARES DE TERCEROS ===");

// RETO 1.1: Configurar simulación de CORS
// TODO: Crea una función middleware que agregue los encabezados necesarios para habilitar CORS:
// 'Access-Control-Allow-Origin': '*'
// 'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
// 'Access-Control-Allow-Headers': 'Content-Type, Authorization'


// RETO 1.2: Middleware logger tipo 'dev'
// TODO: Crea un middleware que registre en consola:
// `[${req.method}] ${req.url} - IP: ${req.ip}` y continúe con next():


console.log("Middlewares de ecosistema preparados.");
