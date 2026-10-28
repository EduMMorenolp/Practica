// ==========================================
// EJERCICIO 3: REDIRECCIONES Y DESCARGA DE ARCHIVOS
// Para ejecutar: node "Express/Modulo 4 - Objeto Response/03_archivos_redirect.js"
// ==========================================

const express = require('express');
const path = require('path');
const app = express();

console.log("=== REDIRECCIONES Y TRANSFERENCIA DE ARCHIVOS ===");

// RETO 3.1: Redirección permanente 301
// TODO: Define una ruta GET '/antigua-ruta'
// Usa res.redirect(301, '/nueva-ruta') para redirigir al cliente.


// RETO 3.2: Forzar descarga de un archivo con res.download()
// TODO: Define una ruta GET '/descargar-reporte'
// Usa res.download() para servir un archivo 'reporte.pdf' indicando el nombre con el que se guardará:


console.log("Configuración de redirect y download lista.");
