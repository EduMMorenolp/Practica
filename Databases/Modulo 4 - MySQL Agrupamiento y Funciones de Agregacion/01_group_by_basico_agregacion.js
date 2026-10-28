// ==========================================
// EJERCICIO 1: FUNCIONES DE AGREGACIÓN Y GROUP BY EN MYSQL
// Para ejecutar: node "Databases/Modulo 4 - MySQL Agrupamiento y Funciones de Agregacion/01_group_by_basico_agregacion.js"
// ==========================================

console.log("=== EJERCICIO 1: FUNCIONES DE AGREGACIÓN Y GROUP BY EN MYSQL ===");

// ------------------------------------------
// RETO 1: Métricas Globales de Negocio
// ------------------------------------------
// Tabla 'ventas' (id, cliente, monto, fecha)
// TODO: Escribe la consulta SELECT para calcular:
//   1. Total de transacciones con alias 'total_ventas' (usando COUNT(*))
//   2. Facturación total acumulada con alias 'ingreso_total' (usando SUM(monto))
//   3. Monto promedio por venta con alias 'ticket_promedio' (usando AVG(monto))
//   4. El monto de la venta más alta con alias 'venta_maxima' (usando MAX(monto))
// Sintaxis: SELECT COUNT(*) AS total_ventas, SUM(monto) AS ingreso_total, AVG(monto) AS ticket_promedio, MAX(monto) AS venta_maxima FROM ventas;
const sqlReto1 = `
  -- Escribe tu consulta SELECT aquí:
`;

// ------------------------------------------
// RETO 2: Agrupamiento por Categoría
// ------------------------------------------
// Tabla 'productos' (id, nombre, categoria, precio, stock)
// TODO: Escribe la consulta SELECT para obtener 'categoria', la cantidad de productos por categoría con alias 'cantidad'
// y el precio promedio con alias 'precio_promedio', agrupando por 'categoria':
// Sintaxis: SELECT categoria, COUNT(*) AS cantidad, AVG(precio) AS precio_promedio FROM productos GROUP BY categoria;
const sqlReto2 = `
  -- Escribe tu consulta SELECT aquí:
`;

// ------------------------------------------
// RETO 3: Agrupamiento con Filtro Previo WHERE
// ------------------------------------------
// Tabla 'productos' (id, nombre, categoria, precio, stock, disponible)
// TODO: Escribe la consulta SELECT para obtener 'categoria' y el total de unidades en stock con alias 'stock_total' (SUM(stock))
// ÚNICAMENTE de aquellos productos que estén disponibles (disponible = 1), agrupados por 'categoria':
// Sintaxis: SELECT categoria, SUM(stock) AS stock_total FROM productos WHERE disponible = 1 GROUP BY categoria;
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

    // Cargar datos
    db.exec(`
      CREATE TABLE ventas (
        id INTEGER PRIMARY KEY,
        cliente TEXT,
        monto NUMERIC,
        fecha TEXT
      );

      INSERT INTO ventas (cliente, monto, fecha) VALUES
        ('Lucas', 100.00, '2026-10-01'),
        ('Romina', 250.00, '2026-10-02'),
        ('Esteban', 50.00, '2026-10-03'),
        ('Julieta', 200.00, '2026-10-04');

      CREATE TABLE productos (
        id INTEGER PRIMARY KEY,
        nombre TEXT,
        categoria TEXT,
        precio NUMERIC,
        stock INTEGER,
        disponible INTEGER
      );

      INSERT INTO productos (nombre, categoria, precio, stock, disponible) VALUES
        ('Monitor', 'Electrónica', 200.00, 10, 1),
        ('Mouse', 'Electrónica', 20.00, 30, 1),
        ('Teclado Obsoleto', 'Electrónica', 15.00, 5, 0),
        ('Silla', 'Muebles', 150.00, 8, 1),
        ('Escritorio', 'Muebles', 250.00, 4, 1);
    `);

    // --- TEST RETO 1 ---
    try {
      const q1 = (sqlReto1 || '').trim();
      if (!q1 || q1.includes('-- Escribe tu')) {
        console.log("❌ RETO 1.1: sqlReto1 aún no ha sido implementado.");
      } else {
        const row = db.prepare(q1).get();
        // total_ventas: 4, ingreso_total: 600, ticket_promedio: 150, venta_maxima: 250
        if (row && Number(row.total_ventas) === 4 && Number(row.ingreso_total) === 600 && Number(row.ticket_promedio) === 150 && Number(row.venta_maxima) === 250) {
          console.log("✔ RETO 1.1: Métricas analíticas globales (COUNT, SUM, AVG, MAX) calculadas con éxito.");
          superados++;
        } else {
          console.log("❌ RETO 1.1: Las métricas calculadas no coinciden (esperado: total=4, ingreso=600, promedio=150, max=250).");
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
        const elec = rows.find(r => r.categoria === 'Electrónica');
        const mueb = rows.find(r => r.categoria === 'Muebles');

        // Electrónica tiene 3 productos. Muebles tiene 2 productos.
        if (rows.length === 2 && elec && Number(elec.cantidad) === 3 && mueb && Number(mueb.cantidad) === 2) {
          console.log("✔ RETO 2.1: GROUP BY categoria agrupó y promedió los productos correctamente.");
          superados++;
        } else {
          console.log("❌ RETO 2.1: Revisa el GROUP BY por categoria y los alias 'cantidad' y 'precio_promedio'.");
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
        // Disponible = 1:
        // Electrónica disponibles: Monitor (10) + Mouse (30) = 40 (Teclado Obsoleto con stock 5 está excluido).
        // Muebles disponibles: Silla (8) + Escritorio (4) = 12.
        const elec = rows.find(r => r.categoria === 'Electrónica');
        const mueb = rows.find(r => r.categoria === 'Muebles');

        if (rows.length === 2 && elec && Number(elec.stock_total) === 40 && mueb && Number(mueb.stock_total) === 12) {
          console.log("✔ RETO 3.1: Filtro WHERE previo a la agregación aplicado exitosamente (stock_total filtrado).");
          superados++;
        } else {
          console.log("❌ RETO 3.1: Verifica que WHERE disponible = 1 filtre antes del GROUP BY categoria (esperado: Electrónica=40, Muebles=12).");
        }
      }
    } catch (err) {
      console.log(`❌ RETO 3.1 Error en consulta sqlReto3: ${err.message}`);
    }

    if (superados === totalRetos) {
      console.log("\n🎉 ¡Todos los retos de funciones de agregación y GROUP BY fueron superados!");
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
