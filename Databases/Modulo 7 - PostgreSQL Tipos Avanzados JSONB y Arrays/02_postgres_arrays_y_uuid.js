// ==========================================
// EJERCICIO 2: POSTGRESQL ARRAYS Y UUID
// Para ejecutar: node "Databases/Modulo 7 - PostgreSQL Tipos Avanzados JSONB y Arrays/02_postgres_arrays_y_uuid.js"
// ==========================================

console.log("=== EJERCICIO 2: POSTGRESQL ARRAYS Y UUID ===");

// ------------------------------------------
// RETO 1: Creación de Tabla con Identificador UUID
// ------------------------------------------
// TODO: Escribe la sentencia SQL para crear la tabla 'cuentas_seguras' con:
//   - 'id': tipo UUID, clave primaria, con valor por defecto la función nativa gen_random_uuid()
//   - 'titular': texto variable hasta 100 caracteres, no nulo (VARCHAR(100) NOT NULL)
//   - 'balance': numérico con 2 decimales y valor por defecto 0.00 (NUMERIC(10,2) DEFAULT 0.00)
// Sintaxis: CREATE TABLE cuentas_seguras (id UUID PRIMARY KEY DEFAULT gen_random_uuid(), titular VARCHAR(100) NOT NULL, balance NUMERIC(10,2) DEFAULT 0.00);
const sqlCrearTablaUUID = `
  -- Escribe tu CREATE TABLE con UUID aquí:
`;

// ------------------------------------------
// RETO 2: Filtrar Filas con Operador ANY(array)
// ------------------------------------------
// Tabla 'posts' (id SERIAL, titulo VARCHAR, etiquetas TEXT[])
// TODO: Escribe la consulta SELECT para obtener 'titulo' y 'etiquetas' de los posts
// que contengan la etiqueta 'backend' dentro del array de etiquetas usando 'backend' = ANY(etiquetas):
// Sintaxis: SELECT titulo, etiquetas FROM posts WHERE 'backend' = ANY(etiquetas);
const sqlReto2 = `
  -- Escribe tu consulta con ANY(etiquetas) aquí:
`;

// ------------------------------------------
// RETO 3: Desanidar Array en Múltiples Filas con UNNEST()
// ------------------------------------------
// TODO: Escribe la consulta SELECT para obtener 'titulo' y desanidar cada etiqueta en su propia fila
// usando UNNEST(etiquetas) con alias 'etiqueta':
// Sintaxis: SELECT titulo, UNNEST(etiquetas) AS etiqueta FROM posts;
const sqlReto3 = `
  -- Escribe tu consulta con UNNEST() aquí:
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

    // Setup inicial con pg.exec
    await pg.exec(`
      CREATE TABLE posts (
        id SERIAL PRIMARY KEY,
        titulo VARCHAR(150),
        etiquetas TEXT[]
      );

      INSERT INTO posts (titulo, etiquetas) VALUES
        ('Guía de Node.js', ARRAY['javascript', 'backend', 'nodejs']),
        ('CSS Moderno con Grid', ARRAY['frontend', 'css', 'diseño']),
        ('Arquitectura PostgreSQL', ARRAY['bases-de-datos', 'backend', 'sql']);
    `);

    // --- TEST RETO 1 ---
    try {
      const sql1 = (sqlCrearTablaUUID || '').trim();
      if (!sql1 || sql1.includes('-- Escribe tu')) {
        console.log("❌ RETO 2.1: sqlCrearTablaUUID aún no ha sido implementado.");
      } else {
        await pg.exec(sql1);
        // Insertar un registro de prueba sin pasar ID para comprobar gen_random_uuid()
        await pg.query("INSERT INTO cuentas_seguras (titular) VALUES ('Elena Rossi');");
        const res = await pg.query("SELECT id, titular FROM cuentas_seguras WHERE titular = 'Elena Rossi';");
        const cuenta = res.rows[0];

        // Comprobar formato estándar de UUID (8-4-4-4-12 caracteres)
        const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
        if (cuenta && uuidRegex.test(cuenta.id)) {
          console.log(`✔ RETO 2.1: Tabla con clave primaria UUID y gen_random_uuid() creada exitosamente (UUID generado: ${cuenta.id}).`);
          superados++;
        } else {
          console.log("❌ RETO 2.1: La tabla fue creada pero el id generado no coincide con un UUID válido.");
        }
      }
    } catch (err) {
      console.log(`❌ RETO 2.1 Error en CREATE TABLE con UUID: ${err.message}`);
    }

    // --- TEST RETO 2 ---
    try {
      const q2 = (sqlReto2 || '').trim();
      if (!q2 || q2.includes('-- Escribe tu')) {
        console.log("❌ RETO 2.2: sqlReto2 aún no ha sido implementado.");
      } else {
        const res = await pg.query(q2);
        const rows = res.rows;
        // Tienen 'backend': 'Guía de Node.js' y 'Arquitectura PostgreSQL'
        if (rows.length === 2 && rows.some(r => r.titulo === 'Guía de Node.js') && rows.some(r => r.titulo === 'Arquitectura PostgreSQL')) {
          console.log(`✔ RETO 2.2: Operador 'backend' = ANY(etiquetas) filtró correctamente los posts.`);
          superados++;
        } else {
          console.log(`❌ RETO 2.2: Se esperaban 2 posts con la etiqueta 'backend', se obtuvieron ${rows.length}.`);
        }
      }
    } catch (err) {
      console.log(`❌ RETO 2.2 Error en consulta sqlReto2: ${err.message}`);
    }

    // --- TEST RETO 3 ---
    try {
      const q3 = (sqlReto3 || '').trim();
      if (!q3 || q3.includes('-- Escribe tu')) {
        console.log("❌ RETO 2.3: sqlReto3 aún no ha sido implementado.");
      } else {
        const res = await pg.query(q3);
        const rows = res.rows;
        // Total de etiquetas en los 3 posts: 3 + 3 + 3 = 9 filas desanidadas
        if (rows.length === 9 && rows[0].etiqueta !== undefined) {
          console.log(`✔ RETO 2.3: Función UNNEST(etiquetas) desanidó los elementos del array en filas individuales (${rows.length} filas generadas).`);
          superados++;
        } else {
          console.log(`❌ RETO 2.3: Se esperaban 9 filas individuales con alias 'etiqueta', se obtuvieron ${rows.length}.`);
        }
      }
    } catch (err) {
      console.log(`❌ RETO 2.3 Error en consulta sqlReto3: ${err.message}`);
    }

    if (superados === totalRetos) {
      console.log("\n🎉 ¡Todos los retos de PostgreSQL Arrays y UUID fueron superados!");
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
