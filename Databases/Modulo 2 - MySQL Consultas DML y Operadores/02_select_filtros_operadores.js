// ==========================================
// EJERCICIO 2: CONSULTAS SELECT, FILTROS Y OPERADORES EN MYSQL
// Para ejecutar: node "Databases/Modulo 2 - MySQL Consultas DML y Operadores/02_select_filtros_operadores.js"
// ==========================================

console.log("=== EJERCICIO 2: CONSULTAS SELECT, FILTROS Y OPERADORES EN MYSQL ===");

// ------------------------------------------
// RETO 1: Filtro con BETWEEN y AND
// ------------------------------------------
// Tabla 'articulos' (id, nombre, precio, stock)
// TODO: Escribe la consulta SELECT para obtener 'nombre' y 'precio' de aquellos artículos
// cuyo precio esté entre 20 y 100 (inclusivo) Y tengan stock mayor a 0:
// Sintaxis: SELECT nombre, precio FROM articulos WHERE precio BETWEEN 20 AND 100 AND stock > 0;
const sqlReto1 = `
  -- Escribe tu consulta SELECT aquí:
`;

// ------------------------------------------
// RETO 2: Filtro con IN y LIKE
// ------------------------------------------
// Tabla 'empleados' (id, nombre, email, departamento)
// TODO: Escribe la consulta SELECT para obtener 'nombre', 'email' y 'departamento' de los empleados
// que pertenezcan a los departamentos 'IT' o 'Ventas' (usando IN)
// Y cuyo correo electrónico termine en '@empresa.com' (usando LIKE):
// Sintaxis: SELECT nombre, email, departamento FROM empleados WHERE departamento IN ('IT', 'Ventas') AND email LIKE '%@empresa.com';
const sqlReto2 = `
  -- Escribe tu consulta SELECT aquí:
`;

// ------------------------------------------
// RETO 3: Top N con ORDER BY y LIMIT
// ------------------------------------------
// Tabla 'articulos' (id, nombre, precio, stock)
// TODO: Escribe la consulta SELECT para obtener los 3 artículos más caros de la tienda
// mostrando las columnas 'nombre' y 'precio', ordenados por precio de mayor a menor:
// Sintaxis: SELECT nombre, precio FROM articulos ORDER BY precio DESC LIMIT 3;
const sqlReto3 = `
  -- Escribe tu consulta SELECT aquí:
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

    // Cargar datos de prueba
    db.exec(`
      CREATE TABLE articulos (
        id INTEGER PRIMARY KEY,
        nombre TEXT,
        precio NUMERIC,
        stock INTEGER
      );

      INSERT INTO articulos (nombre, precio, stock) VALUES
        ('Auriculares', 15.00, 50),
        ('Mouse Pad', 25.00, 30),
        ('Teclado', 60.00, 10),
        ('Webcam HD', 85.00, 0),
        ('Micrófono USB', 95.00, 8),
        ('Monitor 4K', 450.00, 4),
        ('Silla Gamer', 220.00, 2);

      CREATE TABLE empleados (
        id INTEGER PRIMARY KEY,
        nombre TEXT,
        email TEXT,
        departamento TEXT
      );

      INSERT INTO empleados (nombre, email, departamento) VALUES
        ('Lucía Pérez', 'lucia@empresa.com', 'IT'),
        ('Jorge Ruiz', 'jorge@gmail.com', 'IT'),
        ('Marta Ramos', 'marta@empresa.com', 'Ventas'),
        ('Esteban Dido', 'esteban@empresa.com', 'RRHH'),
        ('Sofía Gala', 'sofia@yahoo.com', 'Ventas');
    `);

    // --- TEST RETO 1 ---
    try {
      const q1 = (sqlReto1 || '').trim();
      if (!q1 || q1.includes('-- Escribe tu')) {
        console.log("❌ RETO 1.1: sqlReto1 aún no ha sido implementado.");
      } else {
        const rows = db.prepare(q1).all();
        // Artículos esperados: Mouse Pad (25, stock 30), Teclado (60, stock 10), Micrófono (95, stock 8).
        // Webcam HD tiene stock 0 (excluida). Auriculares es 15 (<20).
        if (rows.length === 3 && rows.some(r => r.nombre === 'Teclado') && !rows.some(r => r.nombre === 'Webcam HD')) {
          console.log(`✔ RETO 1.1: Filtro BETWEEN y AND ejecutado correctamente (${rows.length} registros obtenidos).`);
          superados++;
        } else {
          console.log(`❌ RETO 1.1: Resultado incorrecto. Se esperaban 3 artículos válidos con stock > 0, se obtuvieron ${rows.length}.`);
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
        const rows = db.prepare(q2).all();
        // Esperados: Lucía Pérez (IT, @empresa.com) y Marta Ramos (Ventas, @empresa.com).
        // Jorge es gmail, Esteban es RRHH, Sofía es yahoo.
        if (rows.length === 2 && rows.some(r => r.nombre === 'Lucía Pérez') && rows.some(r => r.nombre === 'Marta Ramos')) {
          console.log(`✔ RETO 2.1: Filtro IN y LIKE '%@empresa.com' ejecutado con éxito (${rows.length} empleados).`);
          superados++;
        } else {
          console.log(`❌ RETO 2.1: Se esperaban 2 empleados ('Lucía Pérez' y 'Marta Ramos'), se obtuvieron ${rows.length}.`);
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
        const rows = db.prepare(q3).all();
        // Top 3 más caros: Monitor 4K (450), Silla Gamer (220), Micrófono USB (95)
        if (rows.length === 3 && rows[0].nombre === 'Monitor 4K' && rows[1].nombre === 'Silla Gamer') {
          console.log("✔ RETO 3.1: ORDER BY precio DESC LIMIT 3 devolvió el Top 3 correctamente ordenado.");
          superados++;
        } else {
          console.log("❌ RETO 3.1: Los 3 artículos devueltos no corresponden al orden descendente esperado.");
        }
      }
    } catch (err) {
      console.log(`❌ RETO 3.1 Error en consulta sqlReto3: ${err.message}`);
    }

    if (superados === totalRetos) {
      console.log("\n🎉 ¡Todos los retos de SELECT, filtros y operadores fueron superados!");
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
