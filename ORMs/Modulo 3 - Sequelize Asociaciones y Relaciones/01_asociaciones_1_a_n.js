// ==========================================
// EJERCICIO 1: ASOCIACIONES 1 A MUCHOS Y EAGER LOADING EN SEQUELIZE
// Para ejecutar: node "ORMs/Modulo 3 - Sequelize Asociaciones y Relaciones/01_asociaciones_1_a_n.js"
// ==========================================

console.log("=== EJERCICIO 1: ASOCIACIONES 1:N Y EAGER LOADING EN SEQUELIZE ===");

// ------------------------------------------
// RETO 1: Configurar Asociación 1 a Muchos
// ------------------------------------------
// TODO: Implementa la función 'configurarRelacion1aN(UsuarioModel, PedidoModel)' que establezca:
//   1. UsuarioModel.hasMany(PedidoModel, { foreignKey: 'usuarioId', as: 'pedidos' });
//   2. PedidoModel.belongsTo(UsuarioModel, { foreignKey: 'usuarioId', as: 'usuario' });

function configurarRelacion1aN(UsuarioModel, PedidoModel) {
  // TODO: Escribe tus asociaciones hasMany y belongsTo aquí:
}

// ------------------------------------------
// RETO 2: Consulta Eager Loading con include
// ------------------------------------------
// TODO: Implementa la función async 'obtenerUsuarioConPedidos(UsuarioModel, PedidoModel, usuarioId)'
// que obtenga el usuario por su 'id' e incluya automáticamente su array de pedidos asociados:
// Sintaxis: return await UsuarioModel.findByPk(usuarioId, { include: ['pedidos'] });

async function obtenerUsuarioConPedidos(UsuarioModel, PedidoModel, usuarioId) {
  // TODO: Escribe tu consulta con include aquí:
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

    const Usuario = sequelize.define('Usuario', {
      nombre: { type: DataTypes.STRING, allowNull: false }
    });

    const Pedido = sequelize.define('Pedido', {
      monto: { type: DataTypes.FLOAT, allowNull: false }
    });

    // --- TEST RETO 1 ---
    try {
      configurarRelacion1aN(Usuario, Pedido);
      await sequelize.sync({ force: true });

      // Verificar que la asociación quedó registrada en el modelo
      if (Usuario.associations.pedidos && Pedido.associations.usuario) {
        console.log("✔ RETO 1.1: Relación 1:N configurada correctamente (Usuario.hasMany y Pedido.belongsTo con as: 'pedidos'/'usuario').");
        superados++;
      } else {
        console.log("❌ RETO 1.1: Faltan las asociaciones 'pedidos' o 'usuario'. Revisa foreignKey: 'usuarioId' y los alias 'as'.");
      }
    } catch (err) {
      console.log(`❌ RETO 1.1 Error en configurarRelacion1aN: ${err.message}`);
    }

    // --- TEST RETO 2 ---
    try {
      // Crear datos de prueba si el reto 1 no explotó
      if (Usuario.associations.pedidos) {
        const u = await Usuario.create({ nombre: 'Constanza' });
        await Pedido.create({ monto: 120.00, usuarioId: u.id });
        await Pedido.create({ monto: 85.00, usuarioId: u.id });

        const resUser = await obtenerUsuarioConPedidos(Usuario, Pedido, u.id);
        if (resUser && Array.isArray(resUser.pedidos) && resUser.pedidos.length === 2) {
          console.log(`✔ RETO 1.2: Eager Loading con include trajo el usuario junto con sus ${resUser.pedidos.length} pedidos vinculados.`);
          superados++;
        } else {
          console.log("❌ RETO 1.2: obtenerUsuarioConPedidos no incluyó el array de pedidos asociados en el resultado.");
        }
      } else {
        console.log("❌ RETO 1.2: No se puede validar la consulta porque la relación previa no está configurada.");
      }
    } catch (err) {
      console.log(`❌ RETO 1.2 Error en obtenerUsuarioConPedidos: ${err.message}`);
    }

    if (superados === totalRetos) {
      console.log("\n🎉 ¡Todos los retos de asociaciones 1:N fueron superados con éxito!");
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
