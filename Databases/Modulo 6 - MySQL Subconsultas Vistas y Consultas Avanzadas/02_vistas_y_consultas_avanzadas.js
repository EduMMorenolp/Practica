// ==========================================
// EJERCICIO 2: VISTAS Y MODIFICACIÓN BASADA EN SUBCONSULTAS EN MYSQL
// Para ejecutar: node "Databases/Modulo 6 - MySQL Subconsultas Vistas y Consultas Avanzadas/02_vistas_y_consultas_avanzadas.js"
// ==========================================

console.log("=== EJERCICIO 2: VISTAS Y CONSULTAS AVANZADAS EN MYSQL ===");

// ------------------------------------------
// RETO 1: Creación de una Vista con CREATE VIEW
// ------------------------------------------
// Tabla 'articulos' (id, nombre, precio, stock)
// TODO: Escribe la sentencia SQL para crear una vista llamada 'vista_stock_disponible'
// que seleccione 'id', 'nombre' y 'precio' de aquellos artículos cuyo stock sea estrictamente mayor a 0:
// Sintaxis: CREATE VIEW vista_stock_disponible AS SELECT id, nombre, precio FROM articulos WHERE stock > 0;
const sqlCrearVista = `
  -- Escribe tu sentencia CREATE VIEW aquí:
`;

// ------------------------------------------
// RETO 2: Consulta Analítica sobre la Vista
// ------------------------------------------
// TODO: Escribe la consulta SELECT para obtener todas las columnas de la vista 'vista_stock_disponible'
// filtrando únicamente los artículos con precio menor o igual a 50 (precio <= 50) ordenados por precio ascendente:
// Sintaxis: SELECT * FROM vista_stock_disponible WHERE precio <= 50 ORDER BY precio ASC;
const sqlConsultarVista = `
  -- Escribe tu consulta sobre la vista aquí:
`;

// ------------------------------------------
// RETO 3: Actualización Condicional basada en Subconsulta
// ------------------------------------------
// Tablas: 'articulos' (id, nombre, precio, stock) y 'descuentos_especiales' (articulo_id, porcentaje)
// TODO: Escribe la sentencia UPDATE para reducir en un 20% el precio (precio = precio * 0.80)
// a todos los artículos cuyo 'id' se encuentre en la lista de 'articulo_id' de la tabla 'descuentos_especiales':
// Sintaxis: UPDATE articulos SET precio = precio * 0.80 WHERE id IN (SELECT articulo_id FROM descuentos_especiales);
const sqlUpdateConSubquery = `
  -- Escribe tu sentencia UPDATE con subquery aquí:
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

    // Cargar datos
    db.exec(`
      CREATE TABLE articulos (
        id INTEGER PRIMARY KEY,
        nombre TEXT,
        precio NUMERIC,
        stock INTEGER
      );

      INSERT INTO articulos (id, nombre, precio, stock) VALUES
        (1, 'Lámpara LED', 25.00, 10),
        (2, 'Escritorio Roble', 180.00, 5),
        (3, 'Mouse Pad Gamer', 15.00, 20),
        (4, 'Silla Descatalogada', 90.00, 0); -- stock 0 (excluida de la vista)

      CREATE TABLE descuentos_especiales (
        articulo_id INTEGER
      );

      INSERT INTO descuentos_especiales (articulo_id) VALUES
        (2); -- Solo el Escritorio Roble tiene descuento especial
    `);

    // --- TEST RETO 1 ---
    try {
      const q1 = (sqlCrearVista || '').trim();
      if (!q1 || q1.includes('-- Escribe tu')) {
        console.log("❌ RETO 1.1: sqlCrearVista aún no ha sido implementado.");
      } else {
        db.exec(q1);
        const vistaExiste = db.prepare("SELECT name FROM sqlite_master WHERE type='view' AND name='vista_stock_disponible'").get();

        if (vistaExiste) {
          console.log("✔ RETO 1.1: Vista 'vista_stock_disponible' creada exitosamente con CREATE VIEW.");
          superados++;
        } else {
          console.log("❌ RETO 1.1: No se encontró la vista 'vista_stock_disponible' creada en la base de datos.");
        }
      }
    } catch (err) {
      console.log(`❌ RETO 1.1 Error en CREATE VIEW: ${err.message}`);
    }

    // --- TEST RETO 2 ---
    try {
      const q2 = (sqlConsultarVista || '').trim();
      if (!q2 || q2.includes('-- Escribe tu')) {
        console.log("❌ RETO 2.1: sqlConsultarVista aún no ha sido implementado.");
      } else {
        const rows = db.prepare(q2).all();
        // Artículos en vista con precio <= 50: Mouse Pad Gamer (15) y Lámpara LED (25). Ordenados por precio ASC.
        if (rows.length === 2 && rows[0].nombre === 'Mouse Pad Gamer' && rows[1].nombre === 'Lámpara LED') {
          console.log("✔ RETO 2.1: Consulta sobre la vista devolvió los artículos filtrados (precio <= 50) y ordenados correctamente.");
          superados++;
        } else {
          console.log(`❌ RETO 2.1: Se esperaban 2 artículos (Mouse Pad Gamer a 15 y Lámpara LED a 25), obtenidos: ${rows.length}.`);
        }
      }
    } catch (err) {
      console.log(`❌ RETO 2.1 Error en consulta sobre la vista: ${err.message}`);
    }

    // --- TEST RETO 3 ---
    try {
      const q3 = (sqlUpdateConSubquery || '').trim();
      if (!q3 || q3.includes('-- Escribe tu')) {
        console.log("❌ RETO 3.1: sqlUpdateConSubquery aún no ha sido implementado.");
      } else {
        db.exec(q3);
        // Escritorio Roble (id 2) costaba 180. Reducido 20% (180 * 0.80) = 144.
        const escritorio = db.prepare("SELECT precio FROM articulos WHERE id = 2").get();
        const lampara = db.prepare("SELECT precio FROM articulos WHERE id = 1").get();

        if (escritorio && Math.abs(escritorio.precio - 144) < 0.01 && lampara && lampara.precio === 25) {
          console.log("✔ RETO 3.1: UPDATE con subquery (WHERE id IN (SELECT...)) aplicó el 20% de descuento exclusivamente a los artículos promocionados.");
          superados++;
        } else {
          console.log(`❌ RETO 3.1: El precio del artículo con id 2 debería ser 144.00, se obtuvo ${escritorio ? escritorio.precio : 'null'}.`);
        }
      }
    } catch (err) {
      console.log(`❌ RETO 3.1 Error en UPDATE con subquery: ${err.message}`);
    }

    if (superados === totalRetos) {
      console.log("\n🎉 ¡Todos los retos de vistas y consultas avanzadas fueron superados!");
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
