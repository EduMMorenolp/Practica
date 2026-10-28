// ==========================================
// PROYECTO 2: SERVIDOR DE ARCHIVOS Y GESTOR DE DESCARGAS
// Para ejecutar: node "Express/Modulo 10 - Proyectos Practicos Express/02_proyecto_servidor_archivos.js"
// ==========================================

const express = require('express');
const path = require('path');
const app = express();

console.log("=== PROYECTO 2: SERVIDOR DE DESCARGAS ===");

// RETO 2.1: Endpoint para descargar un archivo con nombre específico
// TODO: Implementa GET /descargas/:nombreArchivo
// Valida que el nombre de archivo no contenga '../' para evitar vulnerabilidades de directory traversal.
// Usa res.download(rutaCompleta, nombreArchivo) para servir el archivo:


console.log("Servidor de descargas listo.");
