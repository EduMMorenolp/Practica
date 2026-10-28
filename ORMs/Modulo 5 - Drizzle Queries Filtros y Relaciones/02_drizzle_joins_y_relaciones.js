// ==========================================
// EJERCICIO 2: UNIONES RELACIONALES CON LEFTJOIN EN DRIZZLE ORM
// Para ejecutar: node "ORMs/Modulo 5 - Drizzle Queries Filtros y Relaciones/02_drizzle_joins_y_relaciones.js"
// ==========================================

console.log("=== EJERCICIO 2: UNIONES RELACIONALES (JOINS) EN DRIZZLE ORM ===");

const { pgTable, serial, text, real, integer } = require('drizzle-orm/pg-core');
const { eq, gt } = require('drizzle-orm');

const clientes = pgTable('clientes', {
  id: serial('id').primaryKey(),
  nombre: text('nombre').notNull()
});

const pedidos = pgTable('pedidos', {
  id: serial('id').primaryKey(),
  clienteId: integer('cliente_id').notNull(),
  monto: real('monto').notNull()
});

// ------------------------------------------
// RETO 1: Consulta Relacional con .leftJoin()
// ------------------------------------------
// TODO: Implementa la función async 'obtenerPedidosConCliente(db)' que realice un .leftJoin()
// uniendo 'pedidos' y 'clientes' mediante eq(pedidos.clienteId, clientes.id),
// seleccionando:
//   - pedidoId: pedidos.id
//   - monto: pedidos.monto
//   - nombreCliente: clientes.nombre

async function obtenerPedidosConCliente(db) {
  // TODO: Escribe tu db.select({ ... }).from(pedidos).leftJoin(...) aquí:
  return [];
}

// ------------------------------------------
// RETO 2: Uniones Relacionales con Filtro WHERE
// ------------------------------------------
// TODO: Implementa la función async 'obtenerPedidosMayoresA(db, montoMinimo)'
// que realice la misma unión con .leftJoin() pero agregue una cláusula .where(gt(pedidos.monto, montoMinimo)):

async function obtenerPedidosMayoresA(db, montoMinimo) {
  // TODO: Escribe tu consulta con leftJoin y where aquí:
  return [];
}


// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA (no modificar)
// ==========================================
(async function validarEjercicio() {
  const { drizzle } = require('drizzle-orm/pglite');
  const { PGlite } = require('@electric-sql/pglite');
  let client = null;
  let totalRetos = 2;
  let superados = 0;

  try {
    client = new PGlite();
    const db = drizzle(client);

    await client.exec(`
      CREATE TABLE clientes (
        id SERIAL PRIMARY KEY,
        nombre TEXT NOT NULL
      );

      CREATE TABLE pedidos (
        id SERIAL PRIMARY KEY,
        cliente_id INT NOT NULL,
        monto REAL NOT NULL
      );

      INSERT INTO clientes (id, nombre) VALUES
        (1, 'Agustín'),
        (2, 'Beatriz');

      INSERT INTO pedidos (id, cliente_id, monto) VALUES
        (10, 1, 150.00),
        (20, 1, 80.00),
        (30, 2, 220.00);
    `);

    // --- TEST RETO 1 ---
    try {
      const res1 = await obtenerPedidosConCliente(db);
      // Hay 3 pedidos en total
      if (Array.isArray(res1) && res1.length === 3 && res1.some(p => p.nombreCliente === 'Beatriz' && p.monto === 220)) {
        console.log(`✔ RETO 2.1: .leftJoin() unió pedidos y clientes proyectando las propiedades seleccionadas (${res1.length} filas).`);
        superados++;
      } else {
        console.log(`❌ RETO 2.1: Se esperaban 3 filas con propiedades { pedidoId, monto, nombreCliente }, se obtuvieron ${res1 ? res1.length : 0}.`);
      }
    } catch (err) {
      console.log(`❌ RETO 2.1 Error en obtenerPedidosConCliente: ${err.message}`);
    }

    // --- TEST RETO 2 ---
    try {
      const res2 = await obtenerPedidosMayoresA(db, 100.00);
      // Mayores a 100: Pedido 10 (150 de Agustín) y Pedido 30 (220 de Beatriz). Pedido 20 (80) queda fuera.
      if (Array.isArray(res2) && res2.length === 2 && res2.some(p => p.pedidoId === 10) && res2.some(p => p.pedidoId === 30)) {
        console.log("✔ RETO 2.2: .leftJoin() combinado con .where(gt()) filtró correctamente las filas unidas.");
        superados++;
      } else {
        console.log(`❌ RETO 2.2: Se esperaban 2 pedidos con monto > 100, se obtuvieron ${res2 ? res2.length : 0}.`);
      }
    } catch (err) {
      console.log(`❌ RETO 2.2 Error en obtenerPedidosMayoresA: ${err.message}`);
    }

    if (superados === totalRetos) {
      console.log("\n🎉 ¡Todos los retos de uniones relacionales en Drizzle ORM fueron superados!");
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
