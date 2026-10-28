// ==========================================
// EJERCICIO 2: FILTRO DE GRUPOS CON HAVING Y GROUP_CONCAT EN MYSQL
// Para ejecutar: node "Databases/Modulo 4 - MySQL Agrupamiento y Funciones de Agregacion/02_having_y_group_concat.js"
// ==========================================

console.log("=== EJERCICIO 2: FILTRO CON HAVING Y GROUP_CONCAT EN MYSQL ===");

// ------------------------------------------
// RETO 1: Filtrado de Grupos Agregados con HAVING
// ------------------------------------------
// Tabla 'pedidos' (id, cliente_id, total)
// TODO: Escribe la consulta SELECT para obtener 'cliente_id' y la cantidad de pedidos con alias 'total_pedidos'
// agrupando por 'cliente_id', conservando ÚNICAMENTE aquellos clientes que tengan MÁS DE 2 pedidos (usando HAVING):
// Sintaxis: SELECT cliente_id, COUNT(*) AS total_pedidos FROM pedidos GROUP BY cliente_id HAVING COUNT(*) > 2;
const sqlReto1 = `
  -- Escribe tu consulta SELECT aquí:
`;

// ------------------------------------------
// RETO 2: Lista Agrupada en Cadena con GROUP_CONCAT()
// ------------------------------------------
// Tabla 'empleados' (id, nombre, departamento)
// TODO: Escribe la consulta SELECT para obtener 'departamento' y una lista de nombres de los empleados
// separados por coma usando GROUP_CONCAT(nombre) con alias 'nombres_empleados', agrupados por 'departamento':
// Sintaxis: SELECT departamento, GROUP_CONCAT(nombre) AS nombres_empleados FROM empleados GROUP BY departamento;
const sqlReto2 = `
  -- Escribe tu consulta SELECT aquí:
`;

// ------------------------------------------
// RETO 3: HAVING Combinado con Función SUM()
// ------------------------------------------
// Tabla 'ventas_vendedor' (id, vendedor, monto)
// TODO: Escribe la consulta SELECT para obtener 'vendedor' y el monto total vendido con alias 'facturacion' (SUM(monto))
// agrupando por 'vendedor', pero incluyendo SOLO a los vendedores cuya facturación acumulada sea mayor o igual a 500 (HAVING SUM(monto) >= 500):
// Sintaxis: SELECT vendedor, SUM(monto) AS facturacion FROM ventas_vendedor GROUP BY vendedor HAVING SUM(monto) >= 500;
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

    // Registrar GROUP_CONCAT si no estuviera nativo (SQLite lo tiene como group_concat)
    db.exec(`
      CREATE TABLE pedidos (
        id INTEGER PRIMARY KEY,
        cliente_id INTEGER,
        total NUMERIC
      );

      INSERT INTO pedidos (cliente_id, total) VALUES
        (101, 50.00),
        (101, 80.00),
        (101, 120.00), -- Cliente 101 tiene 3 pedidos
        (102, 300.00),
        (102, 150.00), -- Cliente 102 tiene 2 pedidos
        (103, 40.00);  -- Cliente 103 tiene 1 pedido

      CREATE TABLE empleados (
        id INTEGER PRIMARY KEY,
        nombre TEXT,
        departamento TEXT
      );

      INSERT INTO empleados (nombre, departamento) VALUES
        ('Ana', 'Diseño'),
        ('Carlos', 'Diseño'),
        ('Lucía', 'IT'),
        ('Marcos', 'IT'),
        ('Javier', 'IT');

      CREATE TABLE ventas_vendedor (
        id INTEGER PRIMARY KEY,
        vendedor TEXT,
        monto NUMERIC
      );

      INSERT INTO ventas_vendedor (vendedor, monto) VALUES
        ('Paula', 300.00),
        ('Paula', 250.00), -- Paula = 550 (Cumple >= 500)
        ('Gonzalo', 200.00),
        ('Gonzalo', 150.00), -- Gonzalo = 350 (No cumple)
        ('Elena', 600.00);   -- Elena = 600 (Cumple >= 500)
    `);

    // --- TEST RETO 1 ---
    try {
      const q1 = (sqlReto1 || '').trim();
      if (!q1 || q1.includes('-- Escribe tu')) {
        console.log("❌ RETO 1.1: sqlReto1 aún no ha sido implementado.");
      } else {
        const rows = db.prepare(q1).all();
        // Solo el cliente 101 tiene más de 2 pedidos (tiene 3)
        if (rows.length === 1 && Number(rows[0].cliente_id) === 101 && Number(rows[0].total_pedidos) === 3) {
          console.log("✔ RETO 1.1: Cláusula HAVING COUNT(*) > 2 filtró y conservó únicamente al cliente con más de 2 pedidos.");
          superados++;
        } else {
          console.log(`❌ RETO 1.1: Resultado incorrecto con HAVING. Se esperaba solo cliente_id 101 con 3 pedidos, se obtuvieron ${rows.length} filas.`);
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
        const diseno = rows.find(r => r.departamento === 'Diseño');
        const it = rows.find(r => r.departamento === 'IT');

        if (diseno && it && diseno.nombres_empleados.includes('Ana') && diseno.nombres_empleados.includes('Carlos')) {
          console.log("✔ RETO 2.1: GROUP_CONCAT consolidó los nombres de empleados agrupados por departamento.");
          superados++;
        } else {
          console.log("❌ RETO 2.1: Revisa el alias 'nombres_empleados' y la función GROUP_CONCAT(nombre).");
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
        // Vendedores con suma >= 500: Paula (550) y Elena (600). Gonzalo (350) queda fuera.
        const paula = rows.find(r => r.vendedor === 'Paula');
        const elena = rows.find(r => r.vendedor === 'Elena');
        const gonzalo = rows.find(r => r.vendedor === 'Gonzalo');

        if (rows.length === 2 && paula && elena && !gonzalo) {
          console.log("✔ RETO 3.1: Cláusula HAVING SUM(monto) >= 500 filtró los grupos según su facturación acumulada.");
          superados++;
        } else {
          console.log("❌ RETO 3.1: Se esperaban 2 vendedores (Paula y Elena) con facturación >= 500.");
        }
      }
    } catch (err) {
      console.log(`❌ RETO 3.1 Error en consulta sqlReto3: ${err.message}`);
    }

    if (superados === totalRetos) {
      console.log("\n🎉 ¡Todos los retos de HAVING y GROUP_CONCAT fueron superados!");
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
