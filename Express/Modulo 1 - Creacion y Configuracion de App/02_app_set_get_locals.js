// ==========================================
// EJERCICIO 2: APP.SET, APP.GET Y APP.LOCALS
// Para ejecutar: node "Express/Modulo 1 - Creacion y Configuracion de App/02_app_set_get_locals.js"
// ==========================================

const express = require('express');
const app = express();

console.log("=== CONFIGURACIÓN DE APLICACIÓN Y VARIABLES ===");

// RETO 2.1: Configurar parámetros con app.set() y leerlos con app.get()
// TODO: Usa app.set('api_version', 'v2.1') y app.set('company', 'DevStudio').


// RETO 2.2: Usar app.enable() y app.disable()
// TODO: Deshabilita 'x-powered-by' usando app.disable('x-powered-by').
// Habilita 'strict routing' usando app.enable('strict routing').


// RETO 2.3: Usar app.locals para propiedades globales compartidas
// TODO: Agrega a app.locals la propiedad 'adminEmail' con valor 'admin@practice.local'.


// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA
// ==========================================
console.log("\n--- Comprobación de configuración ---");
if (app.get('api_version') === 'v2.1' && app.get('company') === 'DevStudio') {
  console.log("✔ RETO 2.1: app.set() y app.get() configurados correctamente.");
} else {
  console.log("❌ RETO 2.1: Falta configurar 'api_version' ('v2.1') o 'company' ('DevStudio').");
}

if (app.disabled('x-powered-by') && app.enabled('strict routing')) {
  console.log("✔ RETO 2.2: app.disable('x-powered-by') y app.enable('strict routing') activos.");
} else {
  console.log("❌ RETO 2.2: Revisa app.disable('x-powered-by') y app.enable('strict routing').");
}

if (app.locals && app.locals.adminEmail === 'admin@practice.local') {
  console.log("✔ RETO 2.3: app.locals.adminEmail configurado con éxito:", app.locals.adminEmail);
} else {
  console.log("❌ RETO 2.3: Falta asignar app.locals.adminEmail = 'admin@practice.local'.");
}
console.log("--- Fin de la comprobación ---\n");
