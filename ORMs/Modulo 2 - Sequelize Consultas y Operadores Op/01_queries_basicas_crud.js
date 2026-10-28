// ==========================================
// EJERCICIO 1: CONSULTAS BÁSICAS Y OPERACIONES CRUD EN SEQUELIZE
// Para ejecutar: node "ORMs/Modulo 2 - Sequelize Consultas y Operadores Op/01_queries_basicas_crud.js"
// ==========================================

console.log("=== EJERCICIO 1: CONSULTAS BÁSICAS Y CRUD EN SEQUELIZE ===");

// ------------------------------------------
// RETO 1: Búsqueda por Clave Primaria con findByPk()
// ------------------------------------------
// TODO: Implementa la función async 'obtenerProductoPorId(ProductoModel, id)'
// que utilice ProductoModel.findByPk(id) para retornar la instancia del producto:

async function obtenerProductoPorId(ProductoModel, id) {
  // TODO: Escribe tu código aquí:
  return null;
}

// ------------------------------------------
// RETO 2: Actualización de Campos con Model.update()
// ------------------------------------------
// TODO: Implementa la función async 'actualizarPrecioProducto(ProductoModel, id, nuevoPrecio)'
// que actualice el campo 'precio' al valor 'nuevoPrecio' para el producto con el 'id' recibido:

async function actualizarPrecioProducto(ProductoModel, id, nuevoPrecio) {
  // TODO: Escribe tu código aquí:
  return null;
}

// ------------------------------------------
// RETO 3: Eliminación con Model.destroy()
// ------------------------------------------
// TODO: Implementa la función async 'eliminarProducto(ProductoModel, id)'
// que elimine el producto con el 'id' recibido usando ProductoModel.destroy({ where: { id } }):

async function eliminarProducto(ProductoModel, id) {
  // TODO: Escribe tu código aquí:
  return null;
}


// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA (no modificar)
// ==========================================
(async function validarEjercicio() {
  const { Sequelize, DataTypes } = require('sequelize');
  let sequelize = null;
  let totalRetos = 3;
  let superados = 0;

  try {
    sequelize = new Sequelize({
      dialect: 'sqlite',
      storage: ':memory:',
      logging: false
    });

    const Producto = sequelize.define('Producto', {
      nombre: { type: DataTypes.STRING, allowNull: false },
      precio: { type: DataTypes.FLOAT, allowNull: false }
    });

    await sequelize.sync({ force: true });

    // Cargar productos iniciales
    const p1 = await Producto.create({ nombre: 'Auriculares Inalámbricos', precio: 50.00 });
    const p2 = await Producto.create({ nombre: 'Mouse Gamer', precio: 30.00 });

    // --- TEST RETO 1 ---
    try {
      const res1 = await obtenerProductoPorId(Producto, p1.id);
      if (res1 && res1.nombre === 'Auriculares Inalámbricos' && Number(res1.precio) === 50) {
        console.log(`✔ RETO 1.1: Model.findByPk(${p1.id}) obtuvo el producto correcto por clave primaria.`);
        superados++;
      } else {
        console.log("❌ RETO 1.1: obtenerProductoPorId no retornó el producto esperado.");
      }
    } catch (err) {
      console.log(`❌ RETO 1.1 Error en obtenerProductoPorId: ${err.message}`);
    }

    // --- TEST RETO 2 ---
    try {
      await actualizarPrecioProducto(Producto, p2.id, 45.00);
      const p2Actualizado = await Producto.findByPk(p2.id);

      if (p2Actualizado && Number(p2Actualizado.precio) === 45.00) {
        console.log(`✔ RETO 2.1: Model.update() actualizó el precio a 45.00 correctamente.`);
        superados++;
      } else {
        console.log(`❌ RETO 2.1: El precio tras la actualización no es 45.00 (actual: ${p2Actualizado ? p2Actualizado.precio : 'null'}).`);
      }
    } catch (err) {
      console.log(`❌ RETO 2.1 Error en actualizarPrecioProducto: ${err.message}`);
    }

    // --- TEST RETO 3 ---
    try {
      await eliminarProducto(Producto, p1.id);
      const p1Verificacion = await Producto.findByPk(p1.id);

      if (p1Verificacion === null) {
        console.log(`✔ RETO 3.1: Model.destroy() eliminó el registro exitosamente (findByPk retornó null).`);
        superados++;
      } else {
        console.log("❌ RETO 3.1: El producto no fue eliminado de la base de datos.");
      }
    } catch (err) {
      console.log(`❌ RETO 3.1 Error en eliminarProducto: ${err.message}`);
    }

    if (superados === totalRetos) {
      console.log("\n🎉 ¡Todos los retos de operaciones CRUD en Sequelize fueron superados!");
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
