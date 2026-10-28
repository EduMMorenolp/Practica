// ==========================================
// EJERCICIO 1: POSTGRESQL COMMON TABLE EXPRESSIONS (CTEs CON WITH)
// Para ejecutar: node "Databases/Modulo 8 - PostgreSQL Window Functions y CTEs/01_postgres_ctes_with.js"
// ==========================================

console.log("=== EJERCICIO 1: POSTGRESQL CTEs CON WITH ===");

// ------------------------------------------
// RETO 1: CTE Simple de Agregación
// ------------------------------------------
// Tabla 'productos' (id SERIAL, nombre VARCHAR, categoria VARCHAR, precio NUMERIC)
// TODO: Escribe una consulta usando WITH para definir una CTE llamada 'promedios_categoria':
//   - La CTE calcula 'categoria' y el precio promedio con alias 'precio_promedio' (AVG(precio)) agrupando por 'categoria'
//   - La consulta exterior selecciona 'categoria' y 'precio_promedio' de la CTE filtrando donde precio_promedio >= 100:
// Sintaxis:
//   WITH promedios_categoria AS (
//     SELECT categoria, AVG(precio) AS precio_promedio
//     FROM productos
//     GROUP BY categoria
//   )
//   SELECT categoria, precio_promedio
//   FROM promedios_categoria
//   WHERE precio_promedio >= 100;
const sqlReto1 = `
  -- Escribe tu CTE simple aquí:
`;

// ------------------------------------------
// RETO 2: CTE Combinada con INNER JOIN
// ------------------------------------------
// Tablas: 'clientes' (id, nombre) y 'pedidos' (id, cliente_id, monto)
// TODO: Escribe una consulta usando WITH para definir una CTE llamada 'gasto_clientes':
//   - La CTE calcula 'cliente_id' y la suma total gastada con alias 'total_gastado' (SUM(monto)) agrupado por 'cliente_id'
//   - La consulta exterior une 'clientes c' con 'gasto_clientes g' (c.id = g.cliente_id) y retorna 'c.nombre' y 'g.total_gastado'
//     filtrando a los clientes con total_gastado > 300:
// Sintaxis:
//   WITH gasto_clientes AS (
//     SELECT cliente_id, SUM(monto) AS total_gastado
//     FROM pedidos
//     GROUP BY cliente_id
//   )
//   SELECT c.nombre, g.total_gastado
//   FROM clientes c
//   INNER JOIN gasto_clientes g ON c.id = g.cliente_id
//   WHERE g.total_gastado > 300;
const sqlReto2 = `
  -- Escribe tu CTE con INNER JOIN aquí:
`;


// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA (no modificar)
// ==========================================
(async function validarEjercicio() {
  const { PGlite } = require('@electric-sql/pglite');
  let pg = null;
  let totalRetos = 2;
  let superados = 0;

  try {
    pg = new PGlite();

    // Datos iniciales
    await pg.exec(`
      CREATE TABLE productos (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(100),
        categoria VARCHAR(50),
        precio NUMERIC
      );

      INSERT INTO productos (nombre, categoria, precio) VALUES
        ('Cargador USB', 'Accesorios', 20.00),
        ('Mouse Pad', 'Accesorios', 30.00), -- Promedio Accesorios = 25.00
        ('Monitor Gamer', 'Pantallas', 350.00),
        ('TV 55 Pulgadas', 'Pantallas', 650.00); -- Promedio Pantallas = 500.00

      CREATE TABLE clientes (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(100)
      );

      CREATE TABLE pedidos (
        id SERIAL PRIMARY KEY,
        cliente_id INT,
        monto NUMERIC
      );

      INSERT INTO clientes (id, nombre) VALUES
        (1, 'Javier Mas'),
        (2, 'Clara Campo');

      INSERT INTO pedidos (cliente_id, monto) VALUES
        (1, 150.00),
        (1, 200.00), -- Javier total = 350 (cumple > 300)
        (2, 80.00);   -- Clara total = 80 (no cumple > 300)
    `);

    // --- TEST RETO 1 ---
    try {
      const q1 = (sqlReto1 || '').trim();
      if (!q1 || q1.includes('-- Escribe tu')) {
        console.log("❌ RETO 1.1: sqlReto1 aún no ha sido implementado.");
      } else {
        const res = await pg.query(q1);
        const rows = res.rows;
        // Solo 'Pantallas' tiene promedio >= 100 (500). Accesorios tiene 25.
        if (rows.length === 1 && rows[0].categoria === 'Pantallas' && Number(rows[0].precio_promedio) === 500) {
          console.log("✔ RETO 1.1: CTE con cláusula WITH calculó y filtró los promedios por categoría exitosamente.");
          superados++;
        } else {
          console.log(`❌ RETO 1.1: Se esperaba solo la categoría 'Pantallas' con precio_promedio 500, se obtuvieron ${rows.length} filas.`);
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
        const res = await pg.query(q2);
        const rows = res.rows;
        // Solo Javier Mas tiene total_gastado > 300 (350)
        if (rows.length === 1 && rows[0].nombre === 'Javier Mas' && Number(rows[0].total_gastado) === 350) {
          console.log("✔ RETO 2.1: CTE combinada con INNER JOIN resolvió el total gastado por cliente con éxito.");
          superados++;
        } else {
          console.log(`❌ RETO 2.1: Se esperaba solo a 'Javier Mas' con total_gastado 350, se obtuvieron ${rows.length} filas.`);
        }
      }
    } catch (err) {
      console.log(`❌ RETO 2.1 Error en consulta sqlReto2: ${err.message}`);
    }

    if (superados === totalRetos) {
      console.log("\n🎉 ¡Todos los retos de Common Table Expressions (CTEs) fueron superados!");
    } else {
      console.log(`\nProgreso: ${superados}/${totalRetos} retos superados. Completa los comentarios // TODO: para avanzar.`);
    }

  } catch (globalErr) {
    console.error("Error global en la suite de pruebas:", globalErr.message);
  } finally {
    if (pg) {
      try { await pg.close(); } catch (_) {}
    }
  }
})();
