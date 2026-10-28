// ==========================================
// EJERCICIO 1: FILTROS Y OPERADORES AVANZADOS EN DRIZZLE ORM
// Para ejecutar: node "ORMs/Modulo 5 - Drizzle Queries Filtros y Relaciones/01_drizzle_filtros_operadores.js"
// ==========================================

console.log("=== EJERCICIO 1: FILTROS Y OPERADORES EN DRIZZLE ORM ===");

const { pgTable, serial, text, real, integer } = require('drizzle-orm/pg-core');
const { eq, gt, between, like, and, desc } = require('drizzle-orm');

const articulos = pgTable('articulos', {
  id: serial('id').primaryKey(),
  nombre: text('nombre').notNull(),
  categoria: text('categoria').notNull(),
  precio: real('precio').notNull(),
  stock: integer('stock').notNull()
});

// ------------------------------------------
// RETO 1: Filtro con and(), eq() y gt()
// ------------------------------------------
// TODO: Implementa la función async 'filtrarPorCategoriaYPrecio(db, categoriaBuscada, precioMinimo)'
// que retorne los artículos que pertenezcan a 'categoriaBuscada' Y tengan un precio mayor que 'precioMinimo':

async function filtrarPorCategoriaYPrecio(db, categoriaBuscada, precioMinimo) {
  // TODO: Escribe tu consulta db.select().from(articulos).where(...) aquí:
  return [];
}

// ------------------------------------------
// RETO 2: Rango con between() y Orden descendente desc()
// ------------------------------------------
// TODO: Implementa la función async 'obtenerPorRangoOrdenado(db, min, max)'
// que retorne los artículos con precio entre min y max (usando between(articulos.precio, min, max))
// ordenados por precio descendente (usando .orderBy(desc(articulos.precio))):

async function obtenerPorRangoOrdenado(db, min, max) {
  // TODO: Escribe tu consulta aquí:
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
      CREATE TABLE articulos (
        id SERIAL PRIMARY KEY,
        nombre TEXT NOT NULL,
        categoria TEXT NOT NULL,
        precio REAL NOT NULL,
        stock INT NOT NULL
      );

      INSERT INTO articulos (nombre, categoria, precio, stock) VALUES
        ('Teclado Mecánico', 'Hardware', 90.00, 15),
        ('Mouse Pad XL', 'Hardware', 25.00, 50),
        ('Monitor Curvo', 'Pantallas', 350.00, 8),
        ('TV 4K', 'Pantallas', 600.00, 4);
    `);

    // --- TEST RETO 1 ---
    try {
      const res1 = await filtrarPorCategoriaYPrecio(db, 'Hardware', 50.00);
      // Hardware > 50: solo 'Teclado Mecánico' (90). 'Mouse Pad XL' (25) queda fuera.
      if (Array.isArray(res1) && res1.length === 1 && res1[0].nombre === 'Teclado Mecánico') {
        console.log("✔ RETO 1.1: and(eq(), gt()) filtró correctamente los artículos por categoría y precio mínimo.");
        superados++;
      } else {
        console.log(`❌ RETO 1.1: Se esperaba solo 'Teclado Mecánico', se obtuvieron ${res1 ? res1.length : 0} artículos.`);
      }
    } catch (err) {
      console.log(`❌ RETO 1.1 Error en filtrarPorCategoriaYPrecio: ${err.message}`);
    }

    // --- TEST RETO 2 ---
    try {
      const res2 = await obtenerPorRangoOrdenado(db, 80.00, 400.00);
      // Entre 80 y 400: Monitor Curvo (350) y Teclado Mecánico (90).
      // Orden DESC: Monitor Curvo primero, Teclado segundo.
      if (Array.isArray(res2) && res2.length === 2 && res2[0].nombre === 'Monitor Curvo' && res2[1].nombre === 'Teclado Mecánico') {
        console.log("✔ RETO 1.2: between() y orderBy(desc()) devolvieron el rango ordenado de mayor a menor precio.");
        superados++;
      } else {
        console.log("❌ RETO 1.2: El rango o el orden descendente no coinciden con lo esperado.");
      }
    } catch (err) {
      console.log(`❌ RETO 1.2 Error en obtenerPorRangoOrdenado: ${err.message}`);
    }

    if (superados === totalRetos) {
      console.log("\n🎉 ¡Todos los retos de filtros y operadores en Drizzle ORM fueron superados!");
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
