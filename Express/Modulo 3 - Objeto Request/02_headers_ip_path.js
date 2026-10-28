// ==========================================
// EJERCICIO 2: ENCABEZADOS Y METADATOS DE RED
// Para ejecutar: node "Express/Modulo 3 - Objeto Request/02_headers_ip_path.js"
// ==========================================

const express = require('express');
const app = express();

console.log("=== INSPECCIÓN DE ENCABEZADOS Y CONEXIÓN ===");

// RETO 2.1: Inspeccionar User-Agent y Authorization
// TODO: Define una ruta GET '/seguridad'
// Obtén con req.get('User-Agent') el cliente que hace la petición.
// Obtén con req.get('Authorization') el token o credenciales enviadas.
// Retorna un objeto con ambos valores o imprime en consola.


// RETO 2.2: Inspeccionar IP y Protocolo
// TODO: Define una ruta GET '/info-conexion'
// Devuelve un objeto JSON con: { ip: req.ip, protocolo: req.protocol, segura: req.secure, path: req.path }


console.log("Rutas de inspección listas.");
