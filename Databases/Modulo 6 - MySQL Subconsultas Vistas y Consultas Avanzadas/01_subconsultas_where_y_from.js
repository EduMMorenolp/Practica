// ==========================================
// EJERCICIO 1: SUBCONSULTAS (WHERE, IN Y TABLAS DERIVADAS EN FROM) EN MYSQL
// Para ejecutar: node "Databases/Modulo 6 - MySQL Subconsultas Vistas y Consultas Avanzadas/01_subconsultas_where_y_from.js"
// ==========================================

console.log("=== EJERCICIO 1: SUBCONSULTAS EN MYSQL ===");

// ------------------------------------------
// RETO 1: Subconsulta Escalar en WHERE
// ------------------------------------------
// Tabla 'productos' (id, nombre, precio)
// TODO: Escribe la consulta SELECT para obtener 'nombre' y 'precio' de aquellos productos
// cuyo precio sea ESTRICTAMENTE MAYOR que el precio promedio de todos los productos de la tabla:
// Sintaxis: SELECT nombre, precio FROM productos WHERE precio > (SELECT AVG(precio) FROM productos);
const sqlReto1 = `
  -- Escribe tu subconsulta escalar aquí:
`;

// ------------------------------------------
// RETO 2: Subconsulta con Cláusula IN
// ------------------------------------------
// Tablas: 'clientes' (id, nombre, email) y 'pedidos' (id, cliente_id, monto)
// TODO: Escribe la consulta SELECT para obtener 'nombre' y 'email' de los clientes
// cuyo id esté incluido en la lista de clientes que hayan realizado al menos un pedido con monto >= 200 (usando IN (SELECT ...)):
// Sintaxis: SELECT nombre, email FROM clientes WHERE id IN (SELECT cliente_id FROM pedidos WHERE monto >= 200);
const sqlReto2 = `
  -- Escribe tu consulta con IN (subquery) aquí:
`;

// ------------------------------------------
// RETO 3: Tabla Derivada en Cláusula FROM (Alias Obligatorio)
// ------------------------------------------
// Tabla 'productos' (id, nombre, categoria, precio)
// TODO: Escribe la consulta SELECT para consultar la tabla derivada 'resumen' que agrupa por 'categoria' y calcula 'AVG(precio) AS promedio':
//   - Selecciona 'resumen.categoria' y 'resumen.promedio'
//   - Filtra donde 'resumen.promedio >= 100'
// Sintaxis:
//   SELECT resumen.categoria, resumen.promedio
//   FROM (
//     SELECT categoria, AVG(precio) AS promedio
//     FROM productos
//     GROUP BY categoria
//   ) AS resumen
//   WHERE resumen.promedio >= 100;
const sqlReto3 = `
  -- Escribe tu consulta con tabla derivada aquí:
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

    // Datos iniciales
    db.exec(`
      CREATE TABLE productos (
        id INTEGER PRIMARY KEY,
        nombre TEXT,
        categoria TEXT,
        precio NUMERIC
      );

      INSERT INTO productos (nombre, categoria, precio) VALUES
        ('Funda Celular', 'Accesorios', 10.00),
        ('Cargador Rápido', 'Accesorios', 20.00), -- Promedio Accesorios = 15.00
        ('Tablet 10 Pulgadas', 'Dispositivos', 220.00),
        ('Notebook Ultrabook', 'Dispositivos', 950.00); -- Promedio Dispositivos = 585.00
      -- Promedio General: (10 + 20 + 220 + 950) / 4 = 1200 / 4 = 300.00

      CREATE TABLE clientes (
        id INTEGER PRIMARY KEY,
        nombre TEXT,
        email TEXT
      );

      CREATE TABLE pedidos (
        id INTEGER PRIMARY KEY,
        cliente_id INTEGER,
        monto NUMERIC
      );

      INSERT INTO clientes (id, nombre, email) VALUES
        (1, 'Franco', 'franco@mail.com'),
        (2, 'Gisela', 'gisela@mail.com'),
        (3, 'Horacio', 'horacio@mail.com');

      INSERT INTO pedidos (cliente_id, monto) VALUES
        (1, 50.00),
        (2, 350.00), -- Gisela tiene pedido >= 200
        (3, 100.00);
    `);

    // --- TEST RETO 1 ---
    try {
      const q1 = (sqlReto1 || '').trim();
      if (!q1 || q1.includes('-- Escribe tu')) {
        console.log("❌ RETO 1.1: sqlReto1 aún no ha sido implementado.");
      } else {
        const rows = db.prepare(q1).all();
        // Promedio general = 300. Solo 'Notebook Ultrabook' (950) supera 300.
        if (rows.length === 1 && rows[0].nombre === 'Notebook Ultrabook' && Number(rows[0].precio) === 950) {
          console.log("✔ RETO 1.1: Subconsulta escalar WHERE precio > (SELECT AVG...) evaluó correctamente el umbral global.");
          superados++;
        } else {
          console.log(`❌ RETO 1.1: Se esperaba solo 'Notebook Ultrabook' (precio 950 > promedio 300), se obtuvieron ${rows.length} filas.`);
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
        // Solo Gisela tiene pedido >= 200 (monto 350)
        if (rows.length === 1 && rows[0].nombre === 'Gisela') {
          console.log("✔ RETO 2.1: Subconsulta con cláusula IN resolvió los clientes con pedidos calificados.");
          superados++;
        } else {
          console.log(`❌ RETO 2.1: Se esperaba solo a 'Gisela', se obtuvieron ${rows.length} resultados.`);
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
        // Promedios: Accesorios = 15, Dispositivos = 585. Cumple >= 100: Solo 'Dispositivos'.
        if (rows.length === 1 && rows[0].categoria === 'Dispositivos' && Number(rows[0].promedio) === 585) {
          console.log("✔ RETO 3.1: Tabla derivada en FROM con alias calculó y filtró los promedios por categoría exitosamente.");
          superados++;
        } else {
          console.log("❌ RETO 3.1: Revisa la consulta sobre la tabla derivada (esperado: solo categoría 'Dispositivos' con promedio 585).");
        }
      }
    } catch (err) {
      console.log(`❌ RETO 3.1 Error en consulta sqlReto3: ${err.message}`);
    }

    if (superados === totalRetos) {
      console.log("\n🎉 ¡Todos los retos de subconsultas fueron superados!");
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
