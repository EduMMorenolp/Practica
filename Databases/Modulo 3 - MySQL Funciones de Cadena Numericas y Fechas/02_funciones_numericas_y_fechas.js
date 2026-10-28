// ==========================================
// EJERCICIO 2: FUNCIONES NUMÉRICAS Y DE FECHA EN MYSQL
// Para ejecutar: node "Databases/Modulo 3 - MySQL Funciones de Cadena Numericas y Fechas/02_funciones_numericas_y_fechas.js"
// ==========================================

console.log("=== EJERCICIO 2: FUNCIONES NUMÉRICAS Y DE FECHA EN MYSQL ===");

// ------------------------------------------
// RETO 1: Cálculos y Redondeo Numérico
// ------------------------------------------
// Tabla 'articulos' (id, nombre, precio_base, unidades)
// TODO: Escribe la consulta SELECT para obtener:
//   1. 'nombre'
//   2. El precio con IVA del 21% redondeado a 2 decimales usando ROUND(precio_base * 1.21, 2) con alias 'precio_final'
//   3. La cantidad de cajas enteras de 12 unidades usando FLOOR(unidades / 12) con alias 'cajas_completas'
// Sintaxis: SELECT nombre, ROUND(precio_base * 1.21, 2) AS precio_final, FLOOR(unidades / 12) AS cajas_completas FROM articulos;
const sqlReto1 = `
  -- Escribe tu consulta SELECT aquí:
`;

// ------------------------------------------
// RETO 2: Cálculo de Días Transcurridos con DATEDIFF
// ------------------------------------------
// Tabla 'facturas' (id, numero, fecha_emision)
// TODO: Escribe la consulta SELECT para obtener 'numero', 'fecha_emision' y la cantidad de días transcurridos
// entre la fecha fija de corte '2026-10-31' y la 'fecha_emision' usando DATEDIFF('2026-10-31', fecha_emision) con alias 'dias_antiguedad':
// Sintaxis: SELECT numero, fecha_emision, DATEDIFF('2026-10-31', fecha_emision) AS dias_antiguedad FROM facturas;
const sqlReto2 = `
  -- Escribe tu consulta SELECT aquí:
`;

// ------------------------------------------
// RETO 3: Extracción de Componentes Temporales (YEAR y MONTH)
// ------------------------------------------
// Tabla 'suscripciones' (id, usuario, fecha_inicio)
// TODO: Escribe la consulta SELECT para obtener 'usuario' y extraer el año y mes de 'fecha_inicio'
// usando YEAR(fecha_inicio) AS anio_inicio y MONTH(fecha_inicio) AS mes_inicio:
// Sintaxis: SELECT usuario, YEAR(fecha_inicio) AS anio_inicio, MONTH(fecha_inicio) AS mes_inicio FROM suscripciones;
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

    // Registrar emuladores nativos de funciones matemáticas y de fechas de MySQL
    db.function('ROUND', (val, dec = 0) => Number(Math.round(val + 'e' + dec) + 'e-' + dec));
    db.function('FLOOR', (val) => Math.floor(val));
    db.function('CEIL', (val) => Math.ceil(val));
    db.function('DATEDIFF', (f1, f2) => {
      const ms1 = new Date(f1).getTime();
      const ms2 = new Date(f2).getTime();
      return Math.round((ms1 - ms2) / (1000 * 60 * 60 * 24));
    });
    db.function('YEAR', (fecha) => new Date(fecha).getUTCFullYear());
    db.function('MONTH', (fecha) => new Date(fecha).getUTCMonth() + 1);
    db.function('DAY', (fecha) => new Date(fecha).getUTCDate());

    // Datos iniciales
    db.exec(`
      CREATE TABLE articulos (
        id INTEGER PRIMARY KEY,
        nombre TEXT,
        precio_base NUMERIC,
        unidades INTEGER
      );

      INSERT INTO articulos (nombre, precio_base, unidades) VALUES
        ('Cafetera Express', 89.90, 26),
        ('Taza Cerámica', 5.55, 50);

      CREATE TABLE facturas (
        id INTEGER PRIMARY KEY,
        numero TEXT,
        fecha_emision TEXT
      );

      INSERT INTO facturas (numero, fecha_emision) VALUES
        ('F-001', '2026-10-01'),
        ('F-002', '2026-10-21');

      CREATE TABLE suscripciones (
        id INTEGER PRIMARY KEY,
        usuario TEXT,
        fecha_inicio TEXT
      );

      INSERT INTO suscripciones (usuario, fecha_inicio) VALUES
        ('lucas99', '2026-03-15'),
        ('maria_dev', '2025-11-01');
    `);

    // --- TEST RETO 1 ---
    try {
      const q1 = (sqlReto1 || '').trim();
      if (!q1 || q1.includes('-- Escribe tu')) {
        console.log("❌ RETO 1.1: sqlReto1 aún no ha sido implementado.");
      } else {
        const rows = db.prepare(q1).all();
        // Cafetera: 89.90 * 1.21 = 108.779 -> 108.78. Cajas: 26 / 12 = 2.
        const cafetera = rows.find(r => r.nombre === 'Cafetera Express');
        if (cafetera && cafetera.precio_final === 108.78 && cafetera.cajas_completas === 2) {
          console.log("✔ RETO 1.1: ROUND y FLOOR calcularon el precio con IVA y las cajas enteras correctamente.");
          superados++;
        } else {
          console.log("❌ RETO 1.1: Revisa las fórmulas de ROUND(precio_base * 1.21, 2) AS precio_final y FLOOR(unidades / 12) AS cajas_completas.");
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
        // F-001 (2026-10-01 hasta 2026-10-31) = 30 días. F-002 (2026-10-21 hasta 2026-10-31) = 10 días.
        const f1 = rows.find(r => r.numero === 'F-001');
        const f2 = rows.find(r => r.numero === 'F-002');

        if (f1 && f1.dias_antiguedad === 30 && f2 && f2.dias_antiguedad === 10) {
          console.log("✔ RETO 2.1: DATEDIFF calculó la antigüedad en días entre la fecha de corte y la emisión con precisión.");
          superados++;
        } else {
          console.log("❌ RETO 2.1: Los días de antigüedad calculados no coinciden con los esperados (30 y 10 días).");
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
        const lucas = rows.find(r => r.usuario === 'lucas99');
        const maria = rows.find(r => r.usuario === 'maria_dev');

        if (lucas && lucas.anio_inicio === 2026 && lucas.mes_inicio === 3 && maria && maria.anio_inicio === 2025 && maria.mes_inicio === 11) {
          console.log("✔ RETO 3.1: Funciones YEAR() y MONTH() extrajeron los componentes temporales correctamente.");
          superados++;
        } else {
          console.log("❌ RETO 3.1: Los alias 'anio_inicio' y 'mes_inicio' o los valores extraídos no son correctos.");
        }
      }
    } catch (err) {
      console.log(`❌ RETO 3.1 Error en consulta sqlReto3: ${err.message}`);
    }

    if (superados === totalRetos) {
      console.log("\n🎉 ¡Todos los retos de funciones numéricas y de fechas fueron superados!");
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
