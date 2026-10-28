// ==========================================
// TEMA 1: SERVIDOR HTTP NATIVO
// Para ejecutar: node "NodeJS/Modulo 8 - Servidores HTTP y HTTPS/01_servidor_http_nativo.js"
// ==========================================

const http = require('http');

console.log("=== TEMA 1: SERVIDOR HTTP ===");

// RETO 1.1: Crear servidor que responda JSON
// TODO: Crea un servidor con http.createServer((req, res) => { ... })
// Si la url es "/api/saludo", responde código 200 y JSON: { mensaje: "¡Hola desde Node nativo!" }
// Cierra el servidor tras recibir la primera petición o responde inmediatamente:
