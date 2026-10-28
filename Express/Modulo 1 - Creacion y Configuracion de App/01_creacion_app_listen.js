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


// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA
// ==========================================
async function testApp() {
  if (!app) {
    console.log("❌ RETO 1.1: La constante 'app' aún no está instanciada (es null).");
    return;
  }
  console.log("✔ RETO 1.1: App instanciada con express().");

  const server = app.listen(0, async () => {
    const port = server.address().port;
    const baseUrl = `http://localhost:${port}`;
    try {
      const res = await fetch(`${baseUrl}/`);
      const texto = await res.text();
      if (res.status === 200 && texto.includes("Hola Express")) {
        console.log(`✔ RETO 1.2: GET / respondió status 200 y mensaje: "${texto}"`);
      } else if (res.status === 404) {
        console.log("❌ RETO 1.2: La ruta GET '/' aún no está definida (recibió 404).");
      } else {
        console.log(`❌ RETO 1.2: La respuesta fue status ${res.status}: "${texto}"`);
      }
    } catch (err) {
      console.log(`❌ Error al conectar con el servidor: ${err.message}`);
    } finally {
      server.close();
      console.log("\n--- Fin de la comprobación ---");
    }
  });
}

testApp();
