// ==========================================
// EJERCICIO 1: DEFINICIÓN DE MODELOS Y TIPOS DE DATOS EN SEQUELIZE
// Para ejecutar: node "ORMs/Modulo 1 - Sequelize Modelos y Sincronizacion/01_definicion_modelos.js"
// ==========================================

console.log("=== EJERCICIO 1: DEFINICIÓN DE MODELOS EN SEQUELIZE ===");

// ------------------------------------------
// RETO 1: Definición del Modelo 'Producto'
// ------------------------------------------
// TODO: Define la función 'definirModeloProducto(sequelize, DataTypes)' que retorne el modelo 'Producto' con:
//   - nombre: tipo STRING, no nulo (allowNull: false)
//   - precio: tipo FLOAT (o DECIMAL), no nulo (allowNull: false)
//   - stock: tipo INTEGER, valor por defecto 0 (defaultValue: 0)
//   - activo: tipo BOOLEAN, valor por defecto true (defaultValue: true)

function definirModeloProducto(sequelize, DataTypes) {
  // TODO: Escribe tu sequelize.define('Producto', { ... }) aquí:
  return null;
}

// ------------------------------------------
// RETO 2: Definición del Modelo 'Categoria' con Restricción UNIQUE
// ------------------------------------------
// TODO: Define la función 'definirModeloCategoria(sequelize, DataTypes)' que retorne el modelo 'Categoria' con:
//   - nombre: tipo STRING, no nulo (allowNull: false) y con valor único (unique: true)
//   - descripcion: tipo STRING, opcional (allowNull: true)

function definirModeloCategoria(sequelize, DataTypes) {
  // TODO: Escribe tu sequelize.define('Categoria', { ... }) aquí:
  return null;
}


// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA (no modificar)
// ==========================================
(async function validarEjercicio() {
  const { Sequelize, DataTypes } = require('sequelize');
  let sequelize = null;
  let totalRetos = 2;
  let superados = 0;

  try {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false
    });

    // --- TEST RETO 1 ---
    try {
      const Producto = definirModeloProducto(sequelize, DataTypes);
      if (!Producto || !Producto.rawAttributes) {
        console.log("❌ RETO 1.1: definirModeloProducto aún no retorna un modelo válido de Sequelize.");
      } else {
        const attrs = Producto.rawAttributes;
        const nombreValido = attrs.nombre && attrs.nombre.allowNull === false;
        const precioValido = attrs.precio && attrs.precio.allowNull === false;
        const stockValido = attrs.stock && attrs.stock.defaultValue === 0;
        const activoValido = attrs.activo && attrs.activo.defaultValue === true;

        if (nombreValido && precioValido && stockValido && activoValido) {
          await Producto.sync({ force: true });
          console.log("✔ RETO 1.1: Modelo 'Producto' definido con tipos, restricciones y valores por defecto correctos.");
          superados++;
        } else {
          console.log("❌ RETO 1.1: Revisa las columnas de 'Producto': nombre (allowNull: false), precio (allowNull: false), stock (default: 0) y activo (default: true).");
        }
      }
    } catch (err) {
      console.log(`❌ RETO 1.1 Error en definirModeloProducto: ${err.message}`);
    }

    // --- TEST RETO 2 ---
    try {
      const Categoria = definirModeloCategoria(sequelize, DataTypes);
      if (!Categoria || !Categoria.rawAttributes) {
        console.log("❌ RETO 1.2: definirModeloCategoria aún no retorna un modelo válido de Sequelize.");
      } else {
        const attrs = Categoria.rawAttributes;
        const nombreUnico = attrs.nombre && attrs.nombre.allowNull === false && Boolean(attrs.nombre.unique);

        if (nombreUnico && attrs.descripcion) {
          await Categoria.sync({ force: true });
          console.log("✔ RETO 1.2: Modelo 'Categoria' definido exitosamente con restricción UNIQUE en la columna nombre.");
          superados++;
        } else {
          console.log("❌ RETO 1.2: Revisa que la columna 'nombre' de 'Categoria' tenga allowNull: false y unique: true.");
        }
      }
    } catch (err) {
      console.log(`❌ RETO 1.2 Error en definirModeloCategoria: ${err.message}`);
    }

    if (superados === totalRetos) {
      console.log("\n🎉 ¡Todos los retos de definición de modelos en Sequelize fueron superados!");
    } else {
      console.log(`\nProgreso: ${superados}/${totalRetos} retos superados. Completa los comentarios // TODO: para avanzar.`);
    }

  } catch (globalErr) {
    console.error("Error global en la suite de pruebas:", globalErr.message);
  } finally {
    if (sequelize) {
      try { await sequelize.close(); } catch (_) {}
    }
  }
})();
