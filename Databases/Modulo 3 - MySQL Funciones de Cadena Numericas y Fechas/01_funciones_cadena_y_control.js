// ==========================================
// EJERCICIO 1: FUNCIONES DE CADENA Y CONTROL CONDICIONAL (IF / CASE) EN MYSQL
// Para ejecutar: node "Databases/Modulo 3 - MySQL Funciones de Cadena Numericas y Fechas/01_funciones_cadena_y_control.js"
// ==========================================

console.log("=== EJERCICIO 1: FUNCIONES DE CADENA Y CONTROL CONDICIONAL EN MYSQL ===");

// ------------------------------------------
// RETO 1: Concatenación y Normalización de Texto
// ------------------------------------------
// Tabla 'usuarios' (id, nombre, apellido, email)
// TODO: Escribe la consulta SELECT para obtener:
//   1. El nombre completo uniendo 'nombre' y 'apellido' separados por un espacio, con alias 'nombre_completo'
//      usando CONCAT o CONCAT_WS
//   2. El correo en minúsculas usando LOWER(email) con alias 'email_minusculas'
// Sintaxis: SELECT CONCAT_WS(' ', nombre, apellido) AS nombre_completo, LOWER(email) AS email_minusculas FROM usuarios;
const sqlReto1 = `
  -- Escribe tu consulta SELECT aquí:
`;

// ------------------------------------------
// RETO 2: Lógica Condicional Binaria con IF()
// ------------------------------------------
// Tabla 'articulos' (id, titulo, stock)
// TODO: Escribe la consulta SELECT para obtener 'titulo', 'stock' y una columna llamada 'disponibilidad'
// usando la función IF(stock > 0, 'En Stock', 'Agotado') AS disponibilidad:
// Sintaxis: SELECT titulo, stock, IF(stock > 0, 'En Stock', 'Agotado') AS disponibilidad FROM articulos;
const sqlReto2 = `
  -- Escribe tu consulta SELECT aquí:
`;

// ------------------------------------------
// RETO 3: Clasificación Multicondición con CASE
// ------------------------------------------
// Tabla 'clientes' (id, nombre, puntos)
// TODO: Escribe la consulta SELECT para obtener 'nombre', 'puntos' y categorizar el nivel de fidelidad con alias 'nivel':
//   - Si puntos >= 1000 -> 'Platino'
//   - Si puntos >= 500  -> 'Oro'
//   - En cualquier otro caso -> 'Plata'
// Sintaxis:
//   SELECT nombre, puntos,
//     CASE
//       WHEN puntos >= 1000 THEN 'Platino'
//       WHEN puntos >= 500 THEN 'Oro'
//       ELSE 'Plata'
//     END AS nivel
//   FROM clientes;
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

    // Registrar funciones compatibles de MySQL en el motor SQLite
    db.function('CONCAT', (...args) => args.filter(a => a !== null).join(''));
    db.function('CONCAT_WS', (sep, ...args) => args.filter(a => a !== null).join(sep));
    db.function('IF', (cond, a, b) => (cond ? a : b));
    db.function('IFNULL', (a, b) => (a !== null && a !== undefined ? a : b));

    // Datos iniciales
    db.exec(`
      CREATE TABLE usuarios (
        id INTEGER PRIMARY KEY,
        nombre TEXT,
        apellido TEXT,
        email TEXT
      );

      INSERT INTO usuarios (nombre, apellido, email) VALUES
        ('Mario', 'Benedetti', 'MARIO@LITERATURA.ORG'),
        ('Gabriela', 'Mistral', 'Gaby@Poesia.CL');

      CREATE TABLE articulos (
        id INTEGER PRIMARY KEY,
        titulo TEXT,
        stock INTEGER
      );

      INSERT INTO articulos (titulo, stock) VALUES
        ('Cámara Digital', 12),
        ('Trípode Pro', 0);

      CREATE TABLE clientes (
        id INTEGER PRIMARY KEY,
        nombre TEXT,
        puntos INTEGER
      );

      INSERT INTO clientes (nombre, puntos) VALUES
        ('Valentina Sol', 1250),
        ('Carlos Paz', 650),
        ('Ana Vega', 120);
    `);

    // --- TEST RETO 1 ---
    try {
      const q1 = (sqlReto1 || '').trim();
      if (!q1 || q1.includes('-- Escribe tu')) {
        console.log("❌ RETO 1.1: sqlReto1 aún no ha sido implementado.");
      } else {
        const rows = db.prepare(q1).all();
        if (rows.length === 2 && rows[0].nombre_completo === 'Mario Benedetti' && rows[0].email_minusculas === 'mario@literatura.org') {
          console.log("✔ RETO 1.1: Concatenación y normalización a minúsculas ejecutadas con éxito.");
          superados++;
        } else {
          console.log("❌ RETO 1.1: Verifica los alias ('nombre_completo', 'email_minusculas') y las funciones CONCAT/LOWER.");
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
        const camara = rows.find(r => r.titulo === 'Cámara Digital');
        const tripode = rows.find(r => r.titulo === 'Trípode Pro');

        if (camara && camara.disponibilidad === 'En Stock' && tripode && tripode.disponibilidad === 'Agotado') {
          console.log("✔ RETO 2.1: Función condicional IF(stock > 0, ...) evaluó la disponibilidad correctamente.");
          superados++;
        } else {
          console.log("❌ RETO 2.1: Revisa el alias 'disponibilidad' y los textos 'En Stock' y 'Agotado'.");
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
        const v = rows.find(r => r.nombre === 'Valentina Sol');
        const c = rows.find(r => r.nombre === 'Carlos Paz');
        const a = rows.find(r => r.nombre === 'Ana Vega');

        if (v && v.nivel === 'Platino' && c && c.nivel === 'Oro' && a && a.nivel === 'Plata') {
          console.log("✔ RETO 3.1: Expresión CASE evaluó y asignó correctamente los niveles Platino, Oro y Plata.");
          superados++;
        } else {
          console.log("❌ RETO 3.1: Los valores asignados en la columna 'nivel' no coinciden con las reglas del CASE.");
        }
      }
    } catch (err) {
      console.log(`❌ RETO 3.1 Error en consulta sqlReto3: ${err.message}`);
    }

    if (superados === totalRetos) {
      console.log("\n🎉 ¡Todos los retos de funciones de cadena y condicionales fueron superados!");
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
