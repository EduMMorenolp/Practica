// ==========================================
// EJERCICIO 1: INICIALIZACIÓN Y APP.LISTEN
// Para ejecutar: node "Express/Modulo 1 - Creacion y Configuracion de App/01_creacion_app_listen.js"
// ==========================================

const express = require('express');

console.log("=== INICIALIZANDO APP EXPRESS ===");

// RETO 1.1: Instanciar la app de express
// TODO: Crea la instancia de la aplicación llamando a express() y guárdala en una constante llamada 'app'.
const app = null;

// RETO 1.2: Definir una ruta básica '/'
// TODO: Usa app.get('/', (req, res) => { ... }) para responder con el texto: "¡Hola Express!"


// RETO 1.3: Iniciar y cerrar servidor de prueba
// TODO: Si 'app' existe, llama a app.listen(0, function() { ... })
// Imprime el puerto asignado y luego invoca this.close() para que el script termine limpiamente:
if (app) {
  const server = app.listen(0, () => {
    const port = server.address().port;
    console.log(`Servidor de prueba iniciado en el puerto: ${port}`);
    server.close(() => {
      console.log("Servidor cerrado con éxito.");
    });
  });
}
