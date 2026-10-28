// ==========================================
// EJERCICIO 2: JOINS MÚLTIPLES Y SELF JOIN EN MYSQL
// Para ejecutar: node "Databases/Modulo 5 - MySQL Relaciones Claves Foraneas y JOINS/02_multiples_joins_y_self_join.js"
// ==========================================

console.log("=== EJERCICIO 2: JOINS MÚLTIPLES Y SELF JOIN EN MYSQL ===");

// ------------------------------------------
// RETO 1: Consulta Multi-Tabla (3 Tablas)
// ------------------------------------------
// Tablas:
//   - pedidos (id, cliente_id, fecha)
//   - clientes (id, nombre)
//   - items_pedido (id, pedido_id, producto, subtotal)
// TODO: Escribe la consulta SELECT para obtener 'c.nombre' AS cliente, 'p.id' AS pedido_id y 'i.producto' AS producto
// realizando un INNER JOIN entre 'pedidos p', 'clientes c' (p.cliente_id = c.id)
// y 'items_pedido i' (p.id = i.pedido_id):
// Sintaxis:
//   SELECT c.nombre AS cliente, p.id AS pedido_id, i.producto AS producto
//   FROM pedidos p
//   INNER JOIN clientes c ON p.cliente_id = c.id
//   INNER JOIN items_pedido i ON p.id = i.pedido_id;
const sqlReto1 = `
  -- Escribe tu consulta multi-tabla aquí:
`;

// ------------------------------------------
// RETO 2: Auto-Unión Jerárquica con SELF JOIN
// ------------------------------------------
// Tabla 'empleados' (id, nombre, supervisor_id)
// TODO: Escribe la consulta SELECT para listar a todos los empleados con su supervisor a cargo:
//   - 'e.nombre' con alias 'empleado'
//   - Si no tiene supervisor (supervisor_id IS NULL), muestra 'Dirección General' usando IFNULL(s.nombre, 'Dirección General') con alias 'supervisor'
//   - Realiza un LEFT JOIN de 'empleados e' contra sí misma 'empleados s' mediante e.supervisor_id = s.id:
// Sintaxis:
//   SELECT e.nombre AS empleado, IFNULL(s.nombre, 'Dirección General') AS supervisor
//   FROM empleados e
//   LEFT JOIN empleados s ON e.supervisor_id = s.id;
const sqlReto2 = `
  -- Escribe tu consulta SELF JOIN aquí:
`;

// ------------------------------------------
// RETO 3: Agrupación y Métrica Financiera con INNER JOIN
// ------------------------------------------
// TODO: Escribe la consulta SELECT para calcular el gasto total acumulado por cada cliente:
//   - 'c.nombre' con alias 'cliente'
//   - 'SUM(p.monto)' con alias 'total_gastado'
// Realizando un INNER JOIN entre 'clientes c' y 'pedidos p' (c.id = p.cliente_id), agrupando por 'c.nombre':
// Sintaxis: SELECT c.nombre AS cliente, SUM(p.monto) AS total_gastado FROM clientes c INNER JOIN pedidos p ON c.id = p.cliente_id GROUP BY c.nombre;
const sqlReto3 = `
  -- Escribe tu consulta con JOIN y GROUP BY aquí:
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
    db.function('IFNULL', (a, b) => (a !== null && a !== undefined ? a : b));

    // Esquemas y datos de prueba
    db.exec(`
      CREATE TABLE clientes (
        id INTEGER PRIMARY KEY,
        nombre TEXT
      );

      CREATE TABLE pedidos (
        id INTEGER PRIMARY KEY,
        cliente_id INTEGER,
        monto NUMERIC,
        fecha TEXT
      );

      CREATE TABLE items_pedido (
        id INTEGER PRIMARY KEY,
        pedido_id INTEGER,
        producto TEXT,
        subtotal NUMERIC
      );

      INSERT INTO clientes (id, nombre) VALUES
        (1, 'Sara Conde'),
        (2, 'Pablo Neruda');

      INSERT INTO pedidos (id, cliente_id, monto, fecha) VALUES
        (10, 1, 100.00, '2026-10-10'),
        (20, 1, 150.00, '2026-10-12'), -- Sara gastó 250 en total
        (30, 2, 80.00, '2026-10-15');  -- Pablo gastó 80 en total

      INSERT INTO items_pedido (pedido_id, producto, subtotal) VALUES
        (10, 'Micrófono', 100.00),
        (20, 'Teclado', 150.00),
        (30, 'Libro', 80.00);

      CREATE TABLE empleados (
        id INTEGER PRIMARY KEY,
        nombre TEXT,
        supervisor_id INTEGER
      );

      INSERT INTO empleados (id, nombre, supervisor_id) VALUES
        (1, 'Victoria (CEO)', NULL),
        (2, 'Andrés (Gerente)', 1),
        (3, 'Carla (Desarrolladora)', 2);
    `);

    // --- TEST RETO 1 ---
    try {
      const q1 = (sqlReto1 || '').trim();
      if (!q1 || q1.includes('-- Escribe tu')) {
        console.log("❌ RETO 1.1: sqlReto1 aún no ha sido implementado.");
      } else {
        const rows = db.prepare(q1).all();
        if (rows.length === 3 && rows.some(r => r.cliente === 'Sara Conde' && r.producto === 'Micrófono')) {
          console.log(`✔ RETO 1.1: Consulta multi-tabla (pedidos + clientes + items_pedido) ejecutada exitosamente.`);
          superados++;
        } else {
          console.log(`❌ RETO 1.1: Se esperaban 3 filas en la unión de 3 tablas, se obtuvieron ${rows.length}. Revisa los ON y los alias.`);
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
        const ceo = rows.find(r => r.empleado === 'Victoria (CEO)');
        const dev = rows.find(r => r.empleado === 'Carla (Desarrolladora)');

        if (rows.length === 3 && ceo && ceo.supervisor === 'Dirección General' && dev && dev.supervisor === 'Andrés (Gerente)') {
          console.log("✔ RETO 2.1: SELF JOIN jerárquico resolvió correctamente las relaciones empleado-supervisor.");
          superados++;
        } else {
          console.log("❌ RETO 2.1: Revisa el SELF JOIN (LEFT JOIN empleados s ON e.supervisor_id = s.id) y la función IFNULL.");
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
        const sara = rows.find(r => r.cliente === 'Sara Conde');
        const pablo = rows.find(r => r.cliente === 'Pablo Neruda');

        if (rows.length === 2 && sara && Number(sara.total_gastado) === 250 && pablo && Number(pablo.total_gastado) === 80) {
          console.log("✔ RETO 3.1: INNER JOIN combinado con GROUP BY calculó el gasto acumulado por cliente.");
          superados++;
        } else {
          console.log("❌ RETO 3.1: Las sumas agrupadas no coinciden (Sara Conde=250, Pablo Neruda=80).");
        }
      }
    } catch (err) {
      console.log(`❌ RETO 3.1 Error en consulta sqlReto3: ${err.message}`);
    }

    if (superados === totalRetos) {
      console.log("\n🎉 ¡Todos los retos de JOINS múltiples y SELF JOIN fueron superados!");
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
