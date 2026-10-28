// ==========================================
// EJERCICIO 1: DEFINICIÓN DE ESQUEMAS Y TABLAS CON DRIZZLE ORM
// Para ejecutar: node "ORMs/Modulo 4 - Drizzle ORM Esquemas y Tablas/01_drizzle_esquemas_tablas.js"
// ==========================================

console.log("=== EJERCICIO 1: ESQUEMAS Y TABLAS EN DRIZZLE ORM ===");

const { sqliteTable, text, integer, real } = require('drizzle-orm/sqlite-core');

// ------------------------------------------
// RETO 1: Definición de Tabla 'usuarios' en Drizzle
// ------------------------------------------
// TODO: Define la tabla 'usuarios' usando sqliteTable('usuarios', { ... }) con:
//   - id: integer('id').primaryKey({ autoIncrement: true })
//   - nombre: text('nombre').notNull()
//   - email: text('email').notNull().unique()
//   - edad: integer('edad').default(18)

const tablaUsuarios = null; // TODO: Reemplaza null con tu sqliteTable('usuarios', { ... })

// ------------------------------------------
// RETO 2: Definición de Tabla 'articulos' con Tipos Numéricos
// ------------------------------------------
// TODO: Define la tabla 'articulos' usando sqliteTable('articulos', { ... }) con:
//   - id: integer('id').primaryKey({ autoIncrement: true })
//   - titulo: text('titulo').notNull()
//   - precio: real('precio').notNull()
//   - stock: integer('stock').default(0)

const tablaArticulos = null; // TODO: Reemplaza null con tu sqliteTable('articulos', { ... })


// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA (no modificar)
// ==========================================
(function validarEjercicio() {
  let totalRetos = 2;
  let superados = 0;

  try {
    // --- TEST RETO 1 ---
    try {
      if (!tablaUsuarios || typeof tablaUsuarios !== 'object') {
        console.log("❌ RETO 1.1: tablaUsuarios aún no ha sido definida con sqliteTable.");
      } else {
        const cols = tablaUsuarios;
        const tieneId = cols.id && cols.id.primary;
        const tieneNombre = cols.nombre && cols.nombre.notNull;
        const tieneEmail = cols.email && cols.email.notNull && cols.email.isUnique;
        const tieneEdad = cols.edad && cols.edad.default !== undefined;

        if (tieneId && tieneNombre && tieneEmail && tieneEdad) {
          console.log("✔ RETO 1.1: Tabla 'usuarios' definida en Drizzle con id (PK/AutoIncrement), nombre (notNull), email (unique) y edad (default).");
          superados++;
        } else {
          console.log("❌ RETO 1.1: Revisa las restricciones de 'tablaUsuarios': id (primaryKey), nombre (.notNull()), email (.notNull().unique()) y edad (.default(18)).");
        }
      }
    } catch (err) {
      console.log(`❌ RETO 1.1 Error en tablaUsuarios: ${err.message}`);
    }

    // --- TEST RETO 2 ---
    try {
      if (!tablaArticulos || typeof tablaArticulos !== 'object') {
        console.log("❌ RETO 1.2: tablaArticulos aún no ha sido definida con sqliteTable.");
      } else {
        const cols = tablaArticulos;
        const tieneId = cols.id && cols.id.primary;
        const tieneTitulo = cols.titulo && cols.titulo.notNull;
        const tienePrecio = cols.precio && cols.precio.notNull;
        const tieneStock = cols.stock && cols.stock.default !== undefined;

        if (tieneId && tieneTitulo && tienePrecio && tieneStock) {
          console.log("✔ RETO 1.2: Tabla 'articulos' definida exitosamente en Drizzle con columnas reales y enteras tipadas.");
          superados++;
        } else {
          console.log("❌ RETO 1.2: Revisa las columnas de 'tablaArticulos': id, titulo (.notNull()), precio (real notNull) y stock (.default(0)).");
        }
      }
    } catch (err) {
      console.log(`❌ RETO 1.2 Error en tablaArticulos: ${err.message}`);
    }

    if (superados === totalRetos) {
      console.log("\n🎉 ¡Todos los retos de definición de tablas con Drizzle ORM fueron superados!");
    } else {
      console.log(`\nProgreso: ${superados}/${totalRetos} retos superados. Completa los comentarios // TODO: para avanzar.`);
    }

  } catch (globalErr) {
    console.error("Error global en la suite de pruebas:", globalErr.message);
  }
})();
