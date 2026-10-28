// ==========================================
// EJERCICIO 1: RELACIONES RELACIONALES, INNER JOIN Y LEFT JOIN EN MYSQL
// Para ejecutar: node "Databases/Modulo 5 - MySQL Relaciones Claves Foraneas y JOINS/01_inner_y_left_join.js"
// ==========================================

console.log("=== EJERCICIO 1: INNER JOIN Y LEFT JOIN EN MYSQL ===");

// ------------------------------------------
// RETO 1: Consulta Combinada con INNER JOIN
// ------------------------------------------
// Tablas: 'pedidos' (id, cliente_id, monto) y 'clientes' (id, nombre, email)
// TODO: Escribe la consulta SELECT para obtener:
//   - 'p.id' con alias 'pedido_id'
//   - 'c.nombre' con alias 'cliente'
//   - 'p.monto'
// Realizando un INNER JOIN entre 'pedidos p' y 'clientes c' con la condición p.cliente_id = c.id:
// Sintaxis: SELECT p.id AS pedido_id, c.nombre AS cliente, p.monto FROM pedidos p INNER JOIN clientes c ON p.cliente_id = c.id;
const sqlReto1 = `
  -- Escribe tu consulta INNER JOIN aquí:
`;

// ------------------------------------------
// RETO 2: Conservar Todos los Clientes con LEFT JOIN
// ------------------------------------------
// TODO: Escribe la consulta SELECT para obtener 'c.nombre' con alias 'cliente' y 'p.id' con alias 'pedido_id'
// realizando un LEFT JOIN desde 'clientes c' hacia 'pedidos p' (c.id = p.cliente_id):
// Sintaxis: SELECT c.nombre AS cliente, p.id AS pedido_id FROM clientes c LEFT JOIN pedidos p ON c.id = p.cliente_id;
const sqlReto2 = `
  -- Escribe tu consulta LEFT JOIN aquí:
`;

// ------------------------------------------
// RETO 3: Detección de Clientes sin Pedidos (WHERE IS NULL)
// ------------------------------------------
// TODO: Escribe la consulta SELECT para obtener únicamente el 'c.nombre' con alias 'cliente_sin_pedidos'
// de aquellos clientes registrados que NUNCA hayan realizado ningún pedido (usando LEFT JOIN y WHERE p.id IS NULL):
// Sintaxis: SELECT c.nombre AS cliente_sin_pedidos FROM clientes c LEFT JOIN pedidos p ON c.id = p.cliente_id WHERE p.id IS NULL;
const sqlReto3 = `
  -- Escribe tu consulta aquí:
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

    // Cargar datos relacionales
    db.exec(`
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
        (1, 'Agustina Vidal', 'agustina@mail.com'),
        (2, 'Bruno Díaz', 'bruno@mail.com'),
        (3, 'Carla Méndez', 'carla@mail.com'); -- Carla nunca compró

      INSERT INTO pedidos (id, cliente_id, monto) VALUES
        (101, 1, 150.00),
        (102, 1, 230.00),
        (103, 2, 80.00);
    `);

    // --- TEST RETO 1 ---
    try {
      const q1 = (sqlReto1 || '').trim();
      if (!q1 || q1.includes('-- Escribe tu')) {
        console.log("❌ RETO 1.1: sqlReto1 aún no ha sido implementado.");
      } else {
        const rows = db.prepare(q1).all();
        // Hay 3 pedidos con cliente existente (101, 102 de Agustina y 103 de Bruno). Carla no debe figurar en INNER JOIN.
        if (rows.length === 3 && rows.some(r => r.cliente === 'Agustina Vidal') && !rows.some(r => r.cliente === 'Carla Méndez')) {
          console.log(`✔ RETO 1.1: INNER JOIN relacionó pedidos y clientes correctamente (${rows.length} coincidencias exactas).`);
          superados++;
        } else {
          console.log(`❌ RETO 1.1: Se esperaban 3 filas en INNER JOIN, se obtuvieron ${rows.length}. Revisa los alias y la condición ON.`);
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
        // Debe haber 4 filas: 2 de Agustina, 1 de Bruno y 1 de Carla con pedido_id NULL.
        const carla = rows.find(r => r.cliente === 'Carla Méndez');
        if (rows.length === 4 && carla && (carla.pedido_id === null || carla.pedido_id === undefined)) {
          console.log("✔ RETO 2.1: LEFT JOIN preservó a todos los clientes incluyendo a aquellos sin pedidos asociados.");
          superados++;
        } else {
          console.log(`❌ RETO 2.1: Se esperaban 4 filas en LEFT JOIN (con Carla Méndez teniendo pedido_id NULL). Obtenidas: ${rows.length}.`);
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
        // Solo Carla Méndez nunca compró
        if (rows.length === 1 && rows[0].cliente_sin_pedidos === 'Carla Méndez') {
          console.log("✔ RETO 3.1: Detección de registros sin relaciones (LEFT JOIN ... WHERE p.id IS NULL) superada exitosamente.");
          superados++;
        } else {
          console.log(`❌ RETO 3.1: Se esperaba solo a 'Carla Méndez' como cliente sin pedidos, se obtuvieron ${rows.length} resultados.`);
        }
      }
    } catch (err) {
      console.log(`❌ RETO 3.1 Error en consulta sqlReto3: ${err.message}`);
    }

    if (superados === totalRetos) {
      console.log("\n🎉 ¡Todos los retos de INNER JOIN y LEFT JOIN fueron superados!");
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
