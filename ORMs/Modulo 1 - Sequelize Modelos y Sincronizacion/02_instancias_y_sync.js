// ==========================================
// EJERCICIO 2: CREACIÓN DE INSTANCIAS Y BULK CREATE EN SEQUELIZE
// Para ejecutar: node "ORMs/Modulo 1 - Sequelize Modelos y Sincronizacion/02_instancias_y_sync.js"
// ==========================================

console.log("=== EJERCICIO 2: INSTANCIAS Y BULK CREATE EN SEQUELIZE ===");

// ------------------------------------------
// RETO 1: Creación Individual con Model.create()
// ------------------------------------------
// TODO: Implementa la función async 'crearCliente(ClienteModel, datos)' que reciba el modelo 'Cliente'
// y un objeto con datos ({ nombre, email }) y use ClienteModel.create(datos) para guardarlo:

async function crearCliente(ClienteModel, datos) {
  // TODO: Escribe tu código aquí:
  return null;
}

// ------------------------------------------
// RETO 2: Inserción Masiva con Model.bulkCreate()
// ------------------------------------------
// TODO: Implementa la función async 'crearMuchosClientes(ClienteModel, listaClientes)'
// que reciba un array de objetos y los guarde todos en una sola operación usando ClienteModel.bulkCreate(listaClientes):

async function crearMuchosClientes(ClienteModel, listaClientes) {
  // TODO: Escribe tu código aquí:
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

    const Cliente = sequelize.define('Cliente', {
      nombre: { type: DataTypes.STRING, allowNull: false },
      email: { type: DataTypes.STRING, allowNull: false, unique: true }
    });

    await sequelize.sync({ force: true });

    // --- TEST RETO 1 ---
    try {
      const res = await crearCliente(Cliente, { nombre: 'Guillermo', email: 'guille@mail.com' });
      if (!res || !res.id) {
        console.log("❌ RETO 1.1: crearCliente no retornó la instancia creada con su ID correspondiente.");
      } else {
        const clienteBD = await Cliente.findByPk(res.id);
        if (clienteBD && clienteBD.nombre === 'Guillermo') {
          console.log(`✔ RETO 1.1: Model.create() insertó y persistió el cliente correctamente (ID generado: ${res.id}).`);
          superados++;
        } else {
          console.log("❌ RETO 1.1: El cliente no fue encontrado en la base de datos tras la creación.");
        }
      }
    } catch (err) {
      console.log(`❌ RETO 1.1 Error en crearCliente: ${err.message}`);
    }

    // --- TEST RETO 2 ---
    try {
      const lista = [
        { nombre: 'Camila', email: 'camila@mail.com' },
        { nombre: 'Damián', email: 'damian@mail.com' },
        { nombre: 'Estefanía', email: 'estefi@mail.com' }
      ];

      const resBulk = await crearMuchosClientes(Cliente, lista);
      const totalEnBD = await Cliente.count();

      // Total esperado: 1 de Guillermo + 3 de bulk = 4 clientes
      if (Array.isArray(resBulk) && resBulk.length === 3 && totalEnBD >= 4) {
        console.log(`✔ RETO 1.2: Model.bulkCreate() insertó masivamente ${resBulk.length} clientes en una sola operación.`);
        superados++;
      } else {
        console.log(`❌ RETO 1.2: Se esperaba que bulkCreate insertara 3 registros (total en BD: ${totalEnBD}).`);
      }
    } catch (err) {
      console.log(`❌ RETO 1.2 Error en crearMuchosClientes: ${err.message}`);
    }

    if (superados === totalRetos) {
      console.log("\n🎉 ¡Todos los retos de creación de instancias y bulkCreate fueron superados!");
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
