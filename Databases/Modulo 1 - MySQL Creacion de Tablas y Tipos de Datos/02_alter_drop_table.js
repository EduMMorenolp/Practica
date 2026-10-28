// ==========================================
// EJERCICIO 2: DDL ALTER TABLE Y DROP TABLE EN MYSQL
// Para ejecutar: node "Databases/Modulo 1 - MySQL Creacion de Tablas y Tipos de Datos/02_alter_drop_table.js"
// ==========================================

console.log("=== EJERCICIO 2: DDL ALTER TABLE Y DROP TABLE EN MYSQL ===");

// Supón que ya existe la tabla 'clientes' con: (id INT PRIMARY KEY, nombre VARCHAR(100), email VARCHAR(100))

// ------------------------------------------
// RETO 1: Agregar Columna con ALTER TABLE
// ------------------------------------------
// TODO: Escribe la sentencia SQL para agregar la columna 'telefono' de tipo VARCHAR(20) que permita valores nulos:
// Sintaxis: ALTER TABLE clientes ADD COLUMN telefono VARCHAR(20) NULL;
const sqlAgregarTelefono = `
  -- Escribe tu sentencia ALTER TABLE aquí:
`;

// ------------------------------------------
// RETO 2: Eliminar Columna con ALTER TABLE
// ------------------------------------------
// Supón que en la tabla 'clientes' se agregó por error la columna 'codigo_postal'.
// TODO: Escribe la sentencia SQL para eliminar la columna 'codigo_postal' de la tabla 'clientes':
// Sintaxis: ALTER TABLE clientes DROP COLUMN codigo_postal;
const sqlEliminarColumna = `
  -- Escribe tu sentencia ALTER TABLE DROP COLUMN aquí:
`;

// ------------------------------------------
// RETO 3: Eliminación Segura de Tabla con DROP TABLE IF EXISTS
// ------------------------------------------
// TODO: Escribe la sentencia SQL para eliminar de forma segura la tabla temporal 'auditoria_temp':
// Sintaxis: DROP TABLE IF EXISTS auditoria_temp;
const sqlEliminarTabla = `
  -- Escribe tu sentencia DROP TABLE aquí:
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

    // Preparar esquema inicial
    db.exec(`
      CREATE TABLE clientes (
        id INTEGER PRIMARY KEY,
        nombre TEXT NOT NULL,
        email TEXT NOT NULL,
        codigo_postal TEXT
      );

      CREATE TABLE auditoria_temp (
        id INTEGER PRIMARY KEY,
        evento TEXT
      );
    `);

    // Helper de normalización
    const normalizarSQL = (sql) => {
      return sql.replace(/VARCHAR\(\d+\)/gi, 'TEXT');
    };

    // --- TEST RETO 1 ---
    try {
      const sql1 = (sqlAgregarTelefono || '').trim();
      if (!sql1 || sql1.includes('-- Escribe tu')) {
        console.log("❌ RETO 2.1: sqlAgregarTelefono aún no ha sido implementado.");
      } else {
        db.exec(normalizarSQL(sql1));
        const cols = db.prepare("PRAGMA table_info('clientes')").all();
        const tieneTelefono = cols.some(c => c.name.toLowerCase() === 'telefono');

        if (tieneTelefono) {
          console.log("✔ RETO 2.1: Columna 'telefono' agregada con ALTER TABLE correctamente.");
          superados++;
        } else {
          console.log("❌ RETO 2.1: La columna 'telefono' no fue encontrada en la tabla 'clientes'.");
        }
      }
    } catch (err) {
      console.log(`❌ RETO 2.1 Error en ALTER TABLE ADD COLUMN: ${err.message}`);
    }

    // --- TEST RETO 2 ---
    try {
      const sql2 = (sqlEliminarColumna || '').trim();
      if (!sql2 || sql2.includes('-- Escribe tu')) {
        console.log("❌ RETO 2.2: sqlEliminarColumna aún no ha sido implementado.");
      } else {
        db.exec(normalizarSQL(sql2));
        const cols = db.prepare("PRAGMA table_info('clientes')").all();
        const tieneCP = cols.some(c => c.name.toLowerCase() === 'codigo_postal');

        if (!tieneCP) {
          console.log("✔ RETO 2.2: Columna 'codigo_postal' eliminada correctamente con ALTER TABLE DROP COLUMN.");
          superados++;
        } else {
          console.log("❌ RETO 2.2: La columna 'codigo_postal' todavía existe en la tabla 'clientes'.");
        }
      }
    } catch (err) {
      console.log(`❌ RETO 2.2 Error en ALTER TABLE DROP COLUMN: ${err.message}`);
    }

    // --- TEST RETO 3 ---
    try {
      const sql3 = (sqlEliminarTabla || '').trim();
      if (!sql3 || sql3.includes('-- Escribe tu')) {
        console.log("❌ RETO 2.3: sqlEliminarTabla aún no ha sido implementado.");
      } else {
        db.exec(normalizarSQL(sql3));
        const tables = db.prepare("SELECT name FROM sqlite_master WHERE type='table' AND name='auditoria_temp'").all();

        if (tables.length === 0) {
          console.log("✔ RETO 2.3: Tabla 'auditoria_temp' eliminada exitosamente con DROP TABLE IF EXISTS.");
          superados++;
        } else {
          console.log("❌ RETO 2.3: La tabla 'auditoria_temp' todavía existe en la base de datos.");
        }
      }
    } catch (err) {
      console.log(`❌ RETO 2.3 Error en DROP TABLE: ${err.message}`);
    }

    if (superados === totalRetos) {
      console.log("\n🎉 ¡Todos los retos de ALTER y DROP TABLE fueron superados con éxito!");
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
