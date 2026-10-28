// ==========================================
// EJERCICIO 2: POSTGRESQL WINDOW FUNCTIONS (ROW_NUMBER, LAG Y ACUMULADOS)
// Para ejecutar: node "Databases/Modulo 8 - PostgreSQL Window Functions y CTEs/02_postgres_window_functions.js"
// ==========================================

console.log("=== EJERCICIO 2: POSTGRESQL WINDOW FUNCTIONS CON OVER() ===");

// ------------------------------------------
// RETO 1: Numeración y Ranking por Partición con ROW_NUMBER()
// ------------------------------------------
// Tabla 'empleados' (id SERIAL, nombre VARCHAR, departamento VARCHAR, salario NUMERIC)
// TODO: Escribe la consulta SELECT para obtener:
//   - 'departamento'
//   - 'nombre'
//   - 'salario'
//   - Un número de posición dentro de su propio departamento ordenado de mayor a menor salario con alias 'ranking_depto'
//     usando ROW_NUMBER() OVER(PARTITION BY departamento ORDER BY salario DESC):
// Sintaxis:
//   SELECT departamento, nombre, salario,
//     ROW_NUMBER() OVER(PARTITION BY departamento ORDER BY salario DESC) AS ranking_depto
//   FROM empleados;
const sqlReto1 = `
  -- Escribe tu Window Function con ROW_NUMBER() aquí:
`;

// ------------------------------------------
// RETO 2: Suma Acumulada Progresiva (Running Total)
// ------------------------------------------
// Tabla 'movimientos' (id SERIAL, fecha DATE, monto NUMERIC)
// TODO: Escribe la consulta SELECT para obtener 'fecha', 'monto' y calcular la suma acumulada progresiva
// a lo largo del tiempo con alias 'saldo_acumulado' usando SUM(monto) OVER(ORDER BY fecha ASC):
// Sintaxis: SELECT fecha, monto, SUM(monto) OVER(ORDER BY fecha ASC) AS saldo_acumulado FROM movimientos;
const sqlReto2 = `
  -- Escribe tu Window Function acumulada aquí:
`;

// ------------------------------------------
// RETO 3: Acceso a la Fila Anterior con LAG()
// ------------------------------------------
// Tabla 'movimientos' (id SERIAL, fecha DATE, monto NUMERIC)
// TODO: Escribe la consulta SELECT para obtener 'fecha', 'monto' y el valor del monto registrado en la fila anterior
// con alias 'monto_anterior' usando LAG(monto, 1) OVER(ORDER BY fecha ASC):
// Sintaxis: SELECT fecha, monto, LAG(monto, 1) OVER(ORDER BY fecha ASC) AS monto_anterior FROM movimientos;
const sqlReto3 = `
  -- Escribe tu Window Function con LAG() aquí:
`;


// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA (no modificar)
// ==========================================
(async function validarEjercicio() {
  const { PGlite } = require('@electric-sql/pglite');
  let pg = null;
  let totalRetos = 3;
  let superados = 0;

  try {
    pg = new PGlite();

    // Setup de datos con pg.exec
    await pg.exec(`
      CREATE TABLE empleados (
        id SERIAL PRIMARY KEY,
        nombre VARCHAR(100),
        departamento VARCHAR(50),
        salario NUMERIC
      );

      INSERT INTO empleados (nombre, departamento, salario) VALUES
        ('Pedro', 'IT', 4500.00),
        ('Laura', 'IT', 5200.00), -- Laura #1 en IT, Pedro #2 en IT
        ('Martina', 'Finanzas', 3800.00),
        ('Sergio', 'Finanzas', 4100.00); -- Sergio #1 en Finanzas, Martina #2 en Finanzas

      CREATE TABLE movimientos (
        id SERIAL PRIMARY KEY,
        fecha DATE,
        monto NUMERIC
      );

      INSERT INTO movimientos (fecha, monto) VALUES
        ('2026-10-01', 100.00),
        ('2026-10-02', 150.00),
        ('2026-10-03', 200.00);
    `);

    // --- TEST RETO 1 ---
    try {
      const q1 = (sqlReto1 || '').trim();
      if (!q1 || q1.includes('-- Escribe tu')) {
        console.log("❌ RETO 1.1: sqlReto1 aún no ha sido implementado.");
      } else {
        const res = await pg.query(q1);
        const rows = res.rows;
        const laura = rows.find(r => r.nombre === 'Laura');
        const pedro = rows.find(r => r.nombre === 'Pedro');

        if (rows.length === 4 && laura && Number(laura.ranking_depto) === 1 && pedro && Number(pedro.ranking_depto) === 2) {
          console.log("✔ RETO 1.1: ROW_NUMBER() OVER (PARTITION BY departamento ORDER BY salario DESC) ranqueó a los empleados por departamento.");
          superados++;
        } else {
          console.log("❌ RETO 1.1: El ranking por departamento no es correcto (Laura debió ser #1 y Pedro #2 en IT).");
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
        // Día 1: 100, Día 2: 250, Día 3: 450
        if (rows.length === 3 && Number(rows[0].saldo_acumulado) === 100 && Number(rows[1].saldo_acumulado) === 250 && Number(rows[2].saldo_acumulado) === 450) {
          console.log("✔ RETO 2.1: Suma progresiva acumulada (SUM() OVER(ORDER BY fecha ASC)) calculó los balances con precisión.");
          superados++;
        } else {
          console.log("❌ RETO 2.1: Los saldos acumulados calculados no coinciden con los esperados (100, 250, 450).");
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
        const res = await pg.query(q3);
        const rows = res.rows;
        // Fila 1: null, Fila 2: 100, Fila 3: 150
        if (rows.length === 3 && (rows[0].monto_anterior === null || rows[0].monto_anterior === undefined) && Number(rows[1].monto_anterior) === 100 && Number(rows[2].monto_anterior) === 150) {
          console.log("✔ RETO 3.1: Función de ventana LAG() accedió correctamente al valor de la fila previa sin uniones.");
          superados++;
        } else {
          console.log("❌ RETO 3.1: Los valores de la columna 'monto_anterior' no coinciden (esperado: null, 100, 150).");
        }
      }
    } catch (err) {
      console.log(`❌ RETO 3.1 Error en consulta sqlReto3: ${err.message}`);
    }

    if (superados === totalRetos) {
      console.log("\n🎉 ¡Todos los retos de PostgreSQL Window Functions fueron superados!");
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
