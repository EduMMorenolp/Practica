// ==========================================
// EJERCICIO 2: ASOCIACIONES MUCHOS A MUCHOS (N:M) EN SEQUELIZE
// Para ejecutar: node "ORMs/Modulo 3 - Sequelize Asociaciones y Relaciones/02_asociaciones_n_a_n.js"
// ==========================================

console.log("=== EJERCICIO 2: ASOCIACIONES N:M CON TABLA INTERMEDIA EN SEQUELIZE ===");

// ------------------------------------------
// RETO 1: Configurar Relación N a N con through
// ------------------------------------------
// TODO: Implementa la función 'configurarRelacionNaM(EstudianteModel, CursoModel)' que configure:
//   1. EstudianteModel.belongsToMany(CursoModel, { through: 'Inscripciones', as: 'cursos' });
//   2. CursoModel.belongsToMany(EstudianteModel, { through: 'Inscripciones', as: 'estudiantes' });

function configurarRelacionNaM(EstudianteModel, CursoModel) {
  // TODO: Escribe tus asociaciones belongsToMany aquí:
}

// ------------------------------------------
// RETO 2: Consultar Modelo con Entidades Vinculadas N:M
// ------------------------------------------
// TODO: Implementa la función async 'obtenerCursoConEstudiantes(CursoModel, cursoId)'
// que busque el curso por su 'id' e incluya el array de estudiantes inscritos usando include: ['estudiantes']:

async function obtenerCursoConEstudiantes(CursoModel, cursoId) {
  // TODO: Escribe tu consulta findByPk con include aquí:
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

    const Estudiante = sequelize.define('Estudiante', {
      nombre: { type: DataTypes.STRING, allowNull: false }
    });

    const Curso = sequelize.define('Curso', {
      titulo: { type: DataTypes.STRING, allowNull: false }
    });

    // --- TEST RETO 1 ---
    try {
      configurarRelacionNaM(Estudiante, Curso);
      await sequelize.sync({ force: true });

      if (Estudiante.associations.cursos && Curso.associations.estudiantes) {
        console.log("✔ RETO 2.1: Relación N:M (belongsToMany con through: 'Inscripciones') configurada con éxito.");
        superados++;
      } else {
        console.log("❌ RETO 2.1: Faltan las asociaciones 'cursos' o 'estudiantes'. Revisa through: 'Inscripciones' y los alias 'as'.");
      }
    } catch (err) {
      console.log(`❌ RETO 2.1 Error en configurarRelacionNaM: ${err.message}`);
    }

    // --- TEST RETO 2 ---
    try {
      if (Estudiante.associations.cursos) {
        const e1 = await Estudiante.create({ nombre: 'Tomás' });
        const e2 = await Estudiante.create({ nombre: 'Julieta' });
        const curso = await Curso.create({ titulo: 'Node.js y Bases de Datos' });

        // Vincular estudiantes al curso mediante el método addEstudiantes generado por Sequelize
        await curso.addEstudiantes([e1, e2]);

        const resCurso = await obtenerCursoConEstudiantes(Curso, curso.id);
        if (resCurso && Array.isArray(resCurso.estudiantes) && resCurso.estudiantes.length === 2) {
          console.log(`✔ RETO 2.2: Consulta N:M con include trajo el curso con sus ${resCurso.estudiantes.length} estudiantes inscritos.`);
          superados++;
        } else {
          console.log("❌ RETO 2.2: obtenerCursoConEstudiantes no retornó la lista de estudiantes inscritos.");
        }
      } else {
        console.log("❌ RETO 2.2: La relación previa N:M no está configurada.");
      }
    } catch (err) {
      console.log(`❌ RETO 2.2 Error en obtenerCursoConEstudiantes: ${err.message}`);
    }

    if (superados === totalRetos) {
      console.log("\n🎉 ¡Todos los retos de asociaciones Muchos a Muchos (N:M) fueron superados!");
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
