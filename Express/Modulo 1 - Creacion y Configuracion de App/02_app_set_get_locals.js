// ==========================================
// EJERCICIO 2: APP.SET, APP.GET Y APP.LOCALS
// Para ejecutar: node "Express/Modulo 1 - Creacion y Configuracion de App/02_app_set_get_locals.js"
// ==========================================

const express = require('express');
const app = express();

console.log("=== CONFIGURACIÓN DE APLICACIÓN Y VARIABLES ===");

// RETO 2.1: Configurar parámetros con app.set() y leerlos con app.get()
// TODO: Usa app.set('api_version', 'v2.1') y app.set('company', 'DevStudio').
// Luego imprime con console.log ambos valores usando app.get('api_version') y app.get('company').


// RETO 2.2: Usar app.enable() y app.disable()
// TODO: Deshabilita 'x-powered-by' usando app.disable('x-powered-by').
// Habilita 'strict routing' usando app.enable('strict routing').
// Imprime app.disabled('x-powered-by') y app.enabled('strict routing').


// RETO 2.3: Usar app.locals para propiedades globales compartidas
// TODO: Agrega a app.locals la propiedad 'adminEmail' con valor 'admin@practice.local'.
// Imprime app.locals.adminEmail en la consola:

