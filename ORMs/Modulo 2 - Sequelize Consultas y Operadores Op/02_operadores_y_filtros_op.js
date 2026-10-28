// ==========================================
// EJERCICIO 2: OPERADORES AVANZADOS Op, ORDEN Y LÍMITES EN SEQUELIZE
// Para ejecutar: node "ORMs/Modulo 2 - Sequelize Consultas y Operadores Op/02_operadores_y_filtros_op.js"
// ==========================================

console.log("=== EJERCICIO 2: OPERADORES Op Y FILTROS EN SEQUELIZE ===");

// ------------------------------------------
// RETO 1: Rango de Precios con Op.between
// ------------------------------------------
// TODO: Implementa la función async 'filtrarPorRangoPrecio(ProductoModel, Op, precioMin, precioMax)'
// que retorne todos los productos cuyo precio esté entre precioMin y precioMax (inclusivo) usando [Op.between]:

async function filtrarPorRangoPrecio(ProductoModel, Op, precioMin, precioMax) {
  // TODO: Escribe tu consulta findAll() con [Op.between] aquí:
  return [];
}

// ------------------------------------------
// RETO 2: Búsqueda de Texto con Op.like y Op.or
// ------------------------------------------
// TODO: Implementa la función async 'buscarPorNombreOCategoria(ProductoModel, Op, termino, categoria)'
// que busque productos que contengan 'termino' en su 'nombre' (usando [Op.like]: `%${termino}%`)
// O pertenezcan exactamente a la 'categoria' indicada (usando [Op.or]):

async function buscarPorNombreOCategoria(ProductoModel, Op, termino, categoria) {
  // TODO: Escribe tu consulta con [Op.or] y [Op.like] aquí:
  return [];
}

// ------------------------------------------
// RETO 3: Top N Ordenado con order y limit
// ------------------------------------------
// TODO: Implementa la función async 'obtenerTopCaros(ProductoModel, cantidad)'
// que retorne los 'cantidad' productos más caros, ordenados por 'precio' de mayor a menor:

async function obtenerTopCaros(ProductoModel, cantidad) {
  // TODO: Escribe tu consulta con order: [['precio', 'DESC']] y limit aquí:
  return [];
}


// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA (no modificar)
// ==========================================
(async function validarEjercicio() {
  const { Sequelize, DataTypes, Op } = require('sequelize');
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
      categoria: { type: DataTypes.STRING, allowNull: false },
      precio: { type: DataTypes.FLOAT, allowNull: false }
    });

    await sequelize.sync({ force: true });

    // Cargar lote de datos
    await Producto.bulkCreate([
      { nombre: 'Teclado Mecánico RGB', categoria: 'Periféricos', precio: 80.00 },
      { nombre: 'Mouse Óptico', categoria: 'Periféricos', precio: 25.00 },
      { nombre: 'Monitor 27 Pulgadas', categoria: 'Pantallas', precio: 290.00 },
      { nombre: 'Cable HDMI 2.1', categoria: 'Cables', precio: 15.00 },
      { nombre: 'Notebook Pro', categoria: 'Computadoras', precio: 1200.00 }
    ]);

    // --- TEST RETO 1 ---
    try {
      const res1 = await filtrarPorRangoPrecio(Producto, Op, 20.00, 100.00);
      // Entre 20 y 100: Mouse Óptico (25) y Teclado Mecánico RGB (80)
      if (Array.isArray(res1) && res1.length === 2 && res1.some(p => p.nombre === 'Mouse Óptico') && res1.some(p => p.nombre === 'Teclado Mecánico RGB')) {
        console.log(`✔ RETO 2.1: Op.between filtró exitosamente los productos en el rango de precios (${res1.length} productos).`);
        superados++;
      } else {
        console.log(`❌ RETO 2.1: Se esperaban 2 productos con precio entre 20 y 100, se obtuvieron ${res1 ? res1.length : 0}.`);
      }
    } catch (err) {
      console.log(`❌ RETO 2.1 Error en filtrarPorRangoPrecio: ${err.message}`);
    }

    // --- TEST RETO 2 ---
    try {
      // Buscar término 'RGB' o categoría 'Cables'
      // Coincide 'Teclado Mecánico RGB' (por nombre) y 'Cable HDMI 2.1' (por categoría)
      const res2 = await buscarPorNombreOCategoria(Producto, Op, 'RGB', 'Cables');
      if (Array.isArray(res2) && res2.length === 2 && res2.some(p => p.nombre === 'Teclado Mecánico RGB') && res2.some(p => p.nombre === 'Cable HDMI 2.1')) {
        console.log("✔ RETO 2.2: Op.or combinado con Op.like filtró correctamente por coincidencia parcial y categoría.");
        superados++;
      } else {
        console.log(`❌ RETO 2.2: Se esperaban 2 coincidencias con Op.or / Op.like, se obtuvieron ${res2 ? res2.length : 0}.`);
      }
    } catch (err) {
      console.log(`❌ RETO 2.2 Error en buscarPorNombreOCategoria: ${err.message}`);
    }

    // --- TEST RETO 3 ---
    try {
      const top2 = await obtenerTopCaros(Producto, 2);
      // Los 2 más caros: Notebook Pro (1200) y Monitor 27 Pulgadas (290)
      if (Array.isArray(top2) && top2.length === 2 && top2[0].nombre === 'Notebook Pro' && top2[1].nombre === 'Monitor 27 Pulgadas') {
        console.log("✔ RETO 2.3: order: [['precio', 'DESC']] y limit devolvieron el Top 2 correctamente.");
        superados++;
      } else {
        console.log("❌ RETO 2.3: El ordenamiento o la cantidad de elementos devueltos no es correcta.");
      }
    } catch (err) {
      console.log(`❌ RETO 2.3 Error en obtenerTopCaros: ${err.message}`);
    }

    if (superados === totalRetos) {
      console.log("\n🎉 ¡Todos los retos de operadores Op y ordenamiento fueron superados!");
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
