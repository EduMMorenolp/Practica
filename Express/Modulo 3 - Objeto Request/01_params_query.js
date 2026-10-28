// ==========================================
// EJERCICIO 1: PARÁMETROS Y CONSULTAS (REQ.PARAMS Y REQ.QUERY)
// Para ejecutar: node "Express/Modulo 3 - Objeto Request/01_params_query.js"
// ==========================================

const express = require('express');
const app = express();

console.log("=== MANIPULACIÓN DE REQ.PARAMS Y REQ.QUERY ===");

// RETO 1.1: Leer parámetros de ruta dinámicos
// TODO: Define una ruta GET '/cursos/:categoria/:cursoId'
// Responde con un JSON: { categoria: req.params.categoria, cursoId: req.params.cursoId }


// RETO 1.2: Leer query parameters opcionales
// TODO: En una ruta GET '/buscar', extrae del req.query 'q' y 'page' (por defecto '1').
// Responde con JSON: { termino: req.query.q, pagina: req.query.page || '1' }


// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA
// ==========================================
async function testRequest() {
  const server = app.listen(0, async () => {
    const port = server.address().port;
    const baseUrl = `http://localhost:${port}`;
    console.log(`
🚀 Servidor de pruebas iniciado en puerto: ${port}\n`);

    try {
      const res1 = await fetch(`${baseUrl}/cursos/backend/node-101`);
      if (res1.status === 200) {
        const json1 = await res1.json();
        if (json1.categoria === 'backend' && json1.cursoId === 'node-101') {
          console.log("✔ RETO 1.1 (req.params): Extraído con éxito ->", json1);
        } else {
          console.log("❌ RETO 1.1: El JSON devuelto no contiene categoria o cursoId esperados:", json1);
        }
      } else {
        console.log("❌ RETO 1.1: La ruta '/cursos/:categoria/:cursoId' devolvió status", res1.status);
      }

      const res2 = await fetch(`${baseUrl}/buscar?q=express&page=2`);
      if (res2.status === 200) {
        const json2 = await res2.json();
        if (json2.termino === 'express' && json2.pagina == 2) {
          console.log("✔ RETO 1.2 (req.query): Extraído con éxito ->", json2);
        } else {
          console.log("❌ RETO 1.2: Revisa las claves devueltas para req.query:", json2);
        }
      } else {
        console.log("❌ RETO 1.2: La ruta '/buscar' devolvió status", res2.status);
      }
    } catch (err) {
      console.log("❌ Error en las pruebas:", err.message);
    } finally {
      console.log("\\n--- Fin de la comprobación ---\n");
      server.close();
    }
  });
}

testRequest();
