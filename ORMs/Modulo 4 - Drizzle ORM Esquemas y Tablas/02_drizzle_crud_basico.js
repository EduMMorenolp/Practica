// ==========================================
// EJERCICIO 2: OPERACIONES CRUD BÁSICAS EN DRIZZLE ORM
// Para ejecutar: node "ORMs/Modulo 4 - Drizzle ORM Esquemas y Tablas/02_drizzle_crud_basico.js"
// ==========================================

console.log("=== EJERCICIO 2: CRUD BÁSICO EN DRIZZLE ORM ===");

const { pgTable, serial, text, integer } = require('drizzle-orm/pg-core');

const usersTable = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull()
});

// ------------------------------------------
// RETO 1: Inserción Individual con db.insert().values()
// ------------------------------------------
// TODO: Implementa la función async 'insertarUsuario(db, users, datos)'
// que inserte el objeto 'datos' ({ name, email }) usando db.insert(users).values(datos):

async function insertarUsuario(db, users, datos) {
  // TODO: Escribe tu db.insert(users).values(datos) aquí:
  return null;
}

// ------------------------------------------
// RETO 2: Inserción Masiva con db.insert().values([])
// ------------------------------------------
// TODO: Implementa la función async 'insertarMuchosUsuarios(db, users, listaUsuarios)'
// que inserte el array de usuarios en una sola operación usando db.insert(users).values(listaUsuarios):

async function insertarMuchosUsuarios(db, users, listaUsuarios) {
  // TODO: Escribe tu db.insert(users).values(listaUsuarios) aquí:
  return null;
}

// ------------------------------------------
// RETO 3: Selección con db.select().from()
// ------------------------------------------
// TODO: Implementa la función async 'obtenerTodosLosUsuarios(db, users)'
// que retorne todos los usuarios de la tabla usando db.select().from(users):

async function obtenerTodosLosUsuarios(db, users) {
  // TODO: Escribe tu db.select().from(users) aquí:
  return [];
}


// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA (no modificar)
// ==========================================
(async function validarEjercicio() {
  const { drizzle } = require('drizzle-orm/pglite');
  const { PGlite } = require('@electric-sql/pglite');
  let client = null;
  let totalRetos = 3;
  let superados = 0;

  try {
    client = new PGlite();
    const db = drizzle(client);

    // Crear tabla en PGlite
    await client.exec(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL
      );
    `);

    // --- TEST RETO 1 ---
    try {
      await insertarUsuario(db, usersTable, { name: 'Ignacio', email: 'ignacio@mail.com' });
      const check = await client.query("SELECT * FROM users WHERE email = 'ignacio@mail.com';");

      if (check.rows.length === 1 && check.rows[0].name === 'Ignacio') {
        console.log("✔ RETO 2.1: db.insert().values() insertó y persistió el usuario con Drizzle ORM.");
        superados++;
      } else {
        console.log("❌ RETO 2.1: El usuario no fue insertado en la base de datos.");
      }
    } catch (err) {
      console.log(`❌ RETO 2.1 Error en insertarUsuario: ${err.message}`);
    }

    // --- TEST RETO 2 ---
    try {
      const lote = [
        { name: 'Romina', email: 'romina@mail.com' },
        { name: 'Mateo', email: 'mateo@mail.com' }
      ];

      await insertarMuchosUsuarios(db, usersTable, lote);
      const countRes = await client.query("SELECT COUNT(*) AS total FROM users;");
      const total = Number(countRes.rows[0].total);

      // Total esperado: 1 (Ignacio) + 2 (lote) = 3
      if (total >= 3) {
        console.log(`✔ RETO 2.2: db.insert().values([...]) insertó masivamente los registros (${total} usuarios en total).`);
        superados++;
      } else {
        console.log(`❌ RETO 2.2: Se esperaban al menos 3 usuarios en BD, se obtuvieron ${total}.`);
      }
    } catch (err) {
      console.log(`❌ RETO 2.2 Error en insertarMuchosUsuarios: ${err.message}`);
    }

    // --- TEST RETO 3 ---
    try {
      const resultado = await obtenerTodosLosUsuarios(db, usersTable);
      if (Array.isArray(resultado) && resultado.length >= 3 && resultado.some(u => u.name === 'Ignacio')) {
        console.log(`✔ RETO 2.3: db.select().from(users) recuperó todos los registros con éxito (${resultado.length} usuarios).`);
        superados++;
      } else {
        console.log(`❌ RETO 2.3: obtenerTodosLosUsuarios no retornó el listado completo de usuarios.`);
      }
    } catch (err) {
      console.log(`❌ RETO 2.3 Error en obtenerTodosLosUsuarios: ${err.message}`);
    }

    if (superados === totalRetos) {
      console.log("\n🎉 ¡Todos los retos de CRUD básico en Drizzle ORM fueron superados!");
    } else {
      console.log(`\nProgreso: ${superados}/${totalRetos} retos superados. Completa los comentarios // TODO: para avanzar.`);
    }

  } catch (globalErr) {
    console.error("Error global en la suite de pruebas:", globalErr.message);
  } finally {
    if (client) {
      try { await client.close(); } catch (_) {}
    }
  }
})();
