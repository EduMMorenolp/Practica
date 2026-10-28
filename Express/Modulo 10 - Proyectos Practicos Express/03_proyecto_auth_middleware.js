// ==========================================
// PROYECTO 3: PROTECCIÓN DE RUTAS CON AUTH MIDDLEWARE
// Para ejecutar: node "Express/Modulo 10 - Proyectos Practicos Express/03_proyecto_auth_middleware.js"
// ==========================================

const express = require('express');
const app = express();
app.use(express.json());

console.log("=== PROYECTO 3: AUTENTICACIÓN Y ROLES ===");

// RETO 3.1: Middleware autenticador
// TODO: Crea el middleware verificarToken(req, res, next):
// Lee el header 'authorization'. Si no existe o no empieza con 'Bearer ', responde 401.
// Si el token es 'token-super-seguro', asigna req.user = { id: 1, role: 'admin' } y llama a next().
// En caso contrario responde con 403 Forbidden:


// RETO 3.2: Proteger la ruta privada
// TODO: Define GET /api/panel-admin protegida con el middleware verificarToken:


console.log("Sistema de autenticación listo.");
