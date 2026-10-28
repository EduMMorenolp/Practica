// ==========================================
// EJERCICIO 1: DML INSERT, UPDATE Y DELETE EN MYSQL
// Para ejecutar: node "Databases/Modulo 2 - MySQL Consultas DML y Operadores/01_insert_update_delete.js"
// ==========================================

console.log("=== EJERCICIO 1: DML INSERT, UPDATE Y DELETE EN MYSQL ===");

// ------------------------------------------
// RETO 1: Inserción Múltiple con INSERT INTO
// ------------------------------------------
// TODO: Escribe una sentencia SQL para insertar 3 productos en la tabla 'productos' (columnas: nombre, precio, stock):
//   1. ('Teclado Mecánico', 75.00, 15)
//   2. ('Mouse Gamer', 35.00, 5)
//   3. ('Monitor 24 Pulgadas', 180.00, 0)
// Sintaxis MySQL: INSERT INTO productos (nombre, precio, stock) VALUES (...), (...), (...);
const sqlInsertMultiple = `
  -- Escribe tu sentencia INSERT INTO aquí:
`;

// ------------------------------------------
// RETO 2: Actualización Condicional con UPDATE
// ------------------------------------------
// TODO: Escribe la sentencia SQL para aplicar un aumento de precio del 10% (precio = precio * 1.10)
// a todos los productos cuyo stock sea menor o igual a 10 (stock <= 10):
// Sintaxis: UPDATE productos SET precio = precio * 1.10 WHERE stock <= 10;
const sqlUpdatePrecios = `
  -- Escribe tu sentencia UPDATE aquí:
`;

// ------------------------------------------
// RETO 3: Eliminación Segura con DELETE FROM
// ------------------------------------------
// TODO: Escribe la sentencia SQL para eliminar todos los productos que no tengan unidades disponibles (stock = 0):
// Sintaxis: DELETE FROM productos WHERE stock = 0;
const sqlDeleteAgotados = `
  -- Escribe tu sentencia DELETE FROM aquí:
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

    // Crear tabla inicial de productos
    db.exec(`
      CREATE TABLE productos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL,
        precio NUMERIC NOT NULL,
        stock INTEGER NOT NULL DEFAULT 0
      );
    `);

    // --- TEST RETO 1 ---
    try {
      const sql1 = (sqlInsertMultiple || '').trim();
      if (!sql1 || sql1.includes('-- Escribe tu')) {
        console.log("❌ RETO 1.1: sqlInsertMultiple aún no ha sido implementado.");
      } else {
        db.exec(sql1);
        const count = db.prepare("SELECT COUNT(*) AS total FROM productos").get().total;
        const teclado = db.prepare("SELECT * FROM productos WHERE nombre = 'Teclado Mecánico'").get();

        if (count >= 3 && teclado) {
          console.log(`✔ RETO 1.1: Inserción múltiple ejecutada correctamente (${count} filas insertadas).`);
          superados++;
        } else {
          console.log(`❌ RETO 1.1: Se esperaban al menos 3 productos insertados, se encontraron ${count}.`);
        }
      }
    } catch (err) {
      console.log(`❌ RETO 1.1 Error en INSERT INTO: ${err.message}`);
    }

    // --- TEST RETO 2 ---
    try {
      const sql2 = (sqlUpdatePrecios || '').trim();
      if (!sql2 || sql2.includes('-- Escribe tu')) {
        console.log("❌ RETO 2.1: sqlUpdatePrecios aún no ha sido implementado.");
      } else {
        // Obtenemos precio de Mouse antes
        const mouseAntes = db.prepare("SELECT precio FROM productos WHERE nombre = 'Mouse Gamer'").get();
        db.exec(sql2);
        const mouseDespues = db.prepare("SELECT precio FROM productos WHERE nombre = 'Mouse Gamer'").get();
        const tecladoDespues = db.prepare("SELECT precio FROM productos WHERE nombre = 'Teclado Mecánico'").get();

        // Mouse (stock 5) debió subir de 35 a 38.5. Teclado (stock 15) no debió cambiar (sigue 75)
        if (mouseDespues && mouseDespues.precio > (mouseAntes ? mouseAntes.precio : 35)) {
          console.log("✔ RETO 2.1: UPDATE condicional ejecutado correctamente con aumento del 10% según stock.");
          superados++;
        } else {
          console.log("❌ RETO 2.1: El precio de los productos con stock <= 10 no fue actualizado correctamente.");
        }
      }
    } catch (err) {
      console.log(`❌ RETO 2.1 Error en UPDATE: ${err.message}`);
    }

    // --- TEST RETO 3 ---
    try {
      const sql3 = (sqlDeleteAgotados || '').trim();
      if (!sql3 || sql3.includes('-- Escribe tu')) {
        console.log("❌ RETO 3.1: sqlDeleteAgotados aún no ha sido implementado.");
      } else {
        db.exec(sql3);
        const agotados = db.prepare("SELECT COUNT(*) AS count FROM productos WHERE stock = 0").get().count;

        if (agotados === 0) {
          console.log("✔ RETO 3.1: DELETE condicional eliminó exitosamente los productos con stock = 0.");
          superados++;
        } else {
          console.log(`❌ RETO 3.1: Aún quedan ${agotados} productos con stock = 0 en la tabla.`);
        }
      }
    } catch (err) {
      console.log(`❌ RETO 3.1 Error en DELETE: ${err.message}`);
    }

    if (superados === totalRetos) {
      console.log("\n🎉 ¡Todos los retos de DML (INSERT, UPDATE, DELETE) fueron superados!");
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
