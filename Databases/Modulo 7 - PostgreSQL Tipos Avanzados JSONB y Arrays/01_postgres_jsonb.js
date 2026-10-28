// ==========================================
// EJERCICIO 1: POSTGRESQL TIPO JSONB Y OPERADORES DE EXTRACCIÓN
// Para ejecutar: node "Databases/Modulo 7 - PostgreSQL Tipos Avanzados JSONB y Arrays/01_postgres_jsonb.js"
// ==========================================

console.log("=== EJERCICIO 1: POSTGRESQL JSONB Y OPERADORES ===");

// ------------------------------------------
// RETO 1: Extracción de Texto con Operador ->>
// ------------------------------------------
// Tabla 'articulos_tech' (id SERIAL, nombre VARCHAR, metadata JSONB)
// Estructura de metadata: {"marca": "Sony", "categoria": "Audio", "bluetooth": true}
// TODO: Escribe la consulta SELECT para obtener:
//   - 'nombre'
//   - La marca extraída como texto plano usando (metadata ->> 'marca') con alias 'marca'
// Filtrando únicamente los artículos cuya categoría sea 'Audio' (metadata ->> 'categoria' = 'Audio'):
// Sintaxis: SELECT nombre, metadata ->> 'marca' AS marca FROM articulos_tech WHERE metadata ->> 'categoria' = 'Audio';
const sqlReto1 = `
  -- Escribe tu consulta SELECT con ->> aquí:
`;

// ------------------------------------------
// RETO 2: Extracción de Ruta Anidada con #>>
// ------------------------------------------
// Estructura de metadata con anidación: {"dimensiones": {"peso_gramos": 250, "alto_cm": 15}}
// TODO: Escribe la consulta SELECT para obtener:
//   - 'nombre'
//   - El peso en gramos extraído como texto plano usando (metadata #>> '{dimensiones, peso_gramos}') con alias 'peso'
// Sintaxis: SELECT nombre, metadata #>> '{dimensiones, peso_gramos}' AS peso FROM articulos_tech;
const sqlReto2 = `
  -- Escribe tu consulta con #>> aquí:
`;

// ------------------------------------------
// RETO 3: Contención JSON con Operador @>
// ------------------------------------------
// TODO: Escribe la consulta SELECT para obtener el 'nombre' de todos los artículos
// cuya columna 'metadata' contenga el fragmento JSON {"bluetooth": true} usando el operador @>:
// Sintaxis: SELECT nombre FROM articulos_tech WHERE metadata @> '{"bluetooth": true}';
const sqlReto3 = `
  -- Escribe tu consulta con @> aquí:
`;


// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA (no modificar)
// ==========================================
(async function validarEjercicio() {
  const { PGlite } = require('@electric-sql/pglite');
  let pg = null;
  let totalRetos = 3;
  let superados = 0;

  try {
    pg = new PGlite();

    // Crear esquema y poblar con JSONB real usando pg.exec
    await pg.exec(`
      CREATE TABLE articulos_tech (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(100),
        metadata JSONB
      );

      INSERT INTO articulos_tech (nombre, metadata) VALUES
        ('Auriculares Noise Cancelling', '{"marca": "Sony", "categoria": "Audio", "bluetooth": true, "dimensiones": {"peso_gramos": 250}}'),
        ('Parlante Portátil', '{"marca": "JBL", "categoria": "Audio", "bluetooth": true, "dimensiones": {"peso_gramos": 500}}'),
        ('Teclado Mecánico', '{"marca": "Keychron", "categoria": "Periféricos", "bluetooth": false, "dimensiones": {"peso_gramos": 800}}');
    `);

    // --- TEST RETO 1 ---
    try {
      const q1 = (sqlReto1 || '').trim();
      if (!q1 || q1.includes('-- Escribe tu')) {
        console.log("❌ RETO 1.1: sqlReto1 aún no ha sido implementado.");
      } else {
        const res = await pg.query(q1);
        const rows = res.rows;
        // Audio: Auriculares (Sony) y Parlante (JBL). Teclado queda fuera (Periféricos)
        if (rows.length === 2 && rows.some(r => r.marca === 'Sony') && rows.some(r => r.marca === 'JBL')) {
          console.log(`✔ RETO 1.1: Operador ->> extrajo texto plano de JSONB y filtró por categoría (${rows.length} filas).`);
          superados++;
        } else {
          console.log(`❌ RETO 1.1: Se esperaban 2 artículos de Audio con alias 'marca', se obtuvieron ${rows.length}.`);
        }
      }
    } catch (err) {
      console.log(`❌ RETO 1.1 Error en consulta sqlReto1: ${err.message}`);
    }

    // --- TEST RETO 2 ---
    try {
      const q2 = (sqlReto2 || '').trim();
      if (!q2 || q2.includes('-- Escribe tu')) {
        console.log("❌ RETO 2.1: sqlReto2 aún no ha sido implementado.");
      } else {
        const res = await pg.query(q2);
        const rows = res.rows;
        const auris = rows.find(r => r.nombre === 'Auriculares Noise Cancelling');

        if (rows.length === 3 && auris && String(auris.peso) === '250') {
          console.log("✔ RETO 2.1: Operador #>> '{dimensiones, peso_gramos}' extrajo la ruta anidada correctamente.");
          superados++;
        } else {
          console.log("❌ RETO 2.1: Revisa la extracción con #>> '{dimensiones, peso_gramos}' y el alias 'peso'.");
        }
      }
    } catch (err) {
      console.log(`❌ RETO 2.1 Error en consulta sqlReto2: ${err.message}`);
    }

    // --- TEST RETO 3 ---
    try {
      const q3 = (sqlReto3 || '').trim();
      if (!q3 || q3.includes('-- Escribe tu')) {
        console.log("❌ RETO 3.1: sqlReto3 aún no ha sido implementado.");
      } else {
        const res = await pg.query(q3);
        const rows = res.rows;
        // Con bluetooth: true hay 2 artículos (Auriculares y Parlante)
        if (rows.length === 2 && rows.some(r => r.nombre === 'Auriculares Noise Cancelling') && !rows.some(r => r.nombre === 'Teclado Mecánico')) {
          console.log("✔ RETO 3.1: Operador de contención @> '{\"bluetooth\": true}' resolvió el filtro con éxito.");
          superados++;
        } else {
          console.log(`❌ RETO 3.1: Se esperaban 2 artículos con bluetooth true, se obtuvieron ${rows.length}.`);
        }
      }
    } catch (err) {
      console.log(`❌ RETO 3.1 Error en consulta sqlReto3: ${err.message}`);
    }

    if (superados === totalRetos) {
      console.log("\n🎉 ¡Todos los retos de PostgreSQL JSONB fueron superados con éxito!");
    } else {
      console.log(`\nProgreso: ${superados}/${totalRetos} retos superados. Completa los comentarios // TODO: para avanzar.`);
    }

  } catch (globalErr) {
    console.error("Error global en la suite de pruebas:", globalErr.message);
  } finally {
    if (pg) {
      try { await pg.close(); } catch (_) {}
    }
  }
})();
