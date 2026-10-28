// ==========================================
// EJERCICIO 1: SQLITE COMANDOS PRAGMA Y AFINIDAD DE TIPOS
// Para ejecutar: node "Databases/Modulo 9 - SQLite Arquitectura Embebida y Pragmas/01_sqlite_pragmas_y_affinity.js"
// ==========================================

console.log("=== EJERCICIO 1: SQLITE PRAGMAS Y TYPE AFFINITY ===");

// ------------------------------------------
// RETO 1: Activar Claves Foráneas con PRAGMA
// ------------------------------------------
// En SQLite, las foreign keys vienen deshabilitadas por defecto.
// TODO: Escribe la sentencia PRAGMA para activar la verificación estricta de claves foráneas:
// Sintaxis: PRAGMA foreign_keys = ON;
const sqlActivarFK = `
  -- Escribe tu PRAGMA aquí:
`;

// ------------------------------------------
// RETO 2: Inspección de Esquema con PRAGMA table_info
// ------------------------------------------
// Supón que existe la tabla 'articulos'
// TODO: Escribe la sentencia PRAGMA para inspeccionar la estructura de columnas de la tabla 'articulos':
// Sintaxis: PRAGMA table_info('articulos');
const sqlInspeccionarTabla = `
  -- Escribe tu PRAGMA table_info aquí:
`;

// ------------------------------------------
// RETO 3: Creación de Tabla con Afinidad Flexible (Type Affinity)
// ------------------------------------------
// TODO: Escribe la sentencia SQL para crear la tabla 'configuraciones' con:
//   - 'clave': TEXT PRIMARY KEY
//   - 'valor': NUMERIC (afinidad numérica que convierte automáticamente números pero permite strings)
// Sintaxis: CREATE TABLE configuraciones (clave TEXT PRIMARY KEY, valor NUMERIC);
const sqlCrearConfig = `
  -- Escribe tu CREATE TABLE aquí:
`;


// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA (no modificar)
// ==========================================
(function validarEjercicio() {
  const { DatabaseSync } = require('node:sqlite');
  let db = null;
  let totalRetos = 3;
  let superados = 0;

  try {
    db = new DatabaseSync(':memory:');

    // Tabla previa para el reto 2
    db.exec(`
      CREATE TABLE articulos (
        id INTEGER PRIMARY KEY,
        titulo TEXT NOT NULL,
        precio REAL
      );
    `);

    // --- TEST RETO 1 ---
    try {
      const p1 = (sqlActivarFK || '').trim();
      if (!p1 || p1.includes('-- Escribe tu')) {
        console.log("❌ RETO 1.1: sqlActivarFK aún no ha sido implementado.");
      } else {
        db.exec(p1);
        const fkStatus = db.prepare("PRAGMA foreign_keys;").get();
        // fkStatus = { foreign_keys: 1 }
        if (fkStatus && fkStatus.foreign_keys === 1) {
          console.log("✔ RETO 1.1: PRAGMA foreign_keys = ON activó exitosamente las restricciones foráneas.");
          superados++;
        } else {
          console.log("❌ RETO 1.1: Las claves foráneas continúan desactivadas en el motor SQLite.");
        }
      }
    } catch (err) {
      console.log(`❌ RETO 1.1 Error en PRAGMA foreign_keys: ${err.message}`);
    }

    // --- TEST RETO 2 ---
    try {
      const p2 = (sqlInspeccionarTabla || '').trim();
      if (!p2 || p2.includes('-- Escribe tu')) {
        console.log("❌ RETO 2.1: sqlInspeccionarTabla aún no ha sido implementado.");
      } else {
        const info = db.prepare(p2).all();
        if (info.length === 3 && info.some(c => c.name === 'titulo') && info.some(c => c.name === 'precio')) {
          console.log(`✔ RETO 2.1: PRAGMA table_info('articulos') inspeccionó las columnas de la tabla (${info.length} columnas detectadas).`);
          superados++;
        } else {
          console.log("❌ RETO 2.1: PRAGMA table_info no devolvió las columnas esperadas de la tabla 'articulos'.");
        }
      }
    } catch (err) {
      console.log(`❌ RETO 2.1 Error en PRAGMA table_info: ${err.message}`);
    }

    // --- TEST RETO 3 ---
    try {
      const q3 = (sqlCrearConfig || '').trim();
      if (!q3 || q3.includes('-- Escribe tu')) {
        console.log("❌ RETO 3.1: sqlCrearConfig aún no ha sido implementado.");
      } else {
        db.exec(q3);
        // Probar inserción con coerción automática de NUMERIC
        db.prepare("INSERT INTO configuraciones (clave, valor) VALUES ('puerto', '3000'), ('modo', 'produccion')").run();
        const puerto = db.prepare("SELECT valor FROM configuraciones WHERE clave = 'puerto'").get();
        const modo = db.prepare("SELECT valor FROM configuraciones WHERE clave = 'modo'").get();

        // En NUMERIC, la cadena '3000' se coerciona a número entero 3000, pero 'produccion' queda como texto
        if (puerto && puerto.valor === 3000 && modo && modo.valor === 'produccion') {
          console.log("✔ RETO 3.1: Tabla 'configuraciones' creada demostrando la Afinidad de Tipos (Type Affinity) de SQLite.");
          superados++;
        } else {
          console.log("❌ RETO 3.1: Revisa la definición de 'clave TEXT PRIMARY KEY, valor NUMERIC'.");
        }
      }
    } catch (err) {
      console.log(`❌ RETO 3.1 Error en CREATE TABLE configuraciones: ${err.message}`);
    }

    if (superados === totalRetos) {
      console.log("\n🎉 ¡Todos los retos de SQLite PRAGMAs y Type Affinity fueron superados!");
    } else {
      console.log(`\nProgreso: ${superados}/${totalRetos} retos superados. Completa los comentarios // TODO: para avanzar.`);
    }

  } catch (globalErr) {
    console.error("Error global en la suite de pruebas:", globalErr.message);
  } finally {
    if (db) {
      try { db.close(); } catch (_) {}
    }
  }
})();
