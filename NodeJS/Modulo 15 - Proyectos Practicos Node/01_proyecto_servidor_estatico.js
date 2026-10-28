// ==========================================
// PROYECTO 1: SERVIDOR DE ARCHIVOS ESTÁTICOS
// Para ejecutar: node "NodeJS/Modulo 15 - Proyectos Practicos Node/01_proyecto_servidor_estatico.js"
// ==========================================

const http = require('http');
const fs = require('fs');
const path = require('path');

console.log("=== PROYECTO 1: SERVIDOR ESTÁTICO ===");

// RETO 1.1: Servir archivos con streams
// TODO: Implementa http.createServer((req, res) => { ... })
// Verifica si el archivo solicitado existe y sírvelo usando fs.createReadStream().pipe(res):
