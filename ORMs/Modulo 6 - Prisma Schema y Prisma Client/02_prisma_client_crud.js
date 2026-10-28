// ==========================================
// EJERCICIO 2: CONSULTAS Y OPERACIONES CRUD EN PRISMA CLIENT
// Para ejecutar: node "ORMs/Modulo 6 - Prisma Schema y Prisma Client/02_prisma_client_crud.js"
// ==========================================

console.log("=== EJERCICIO 2: CONSULTAS Y CRUD EN PRISMA CLIENT ===");

// ------------------------------------------
// RETO 1: Consulta Filtrada y Ordenada con findMany()
// ------------------------------------------
// TODO: Implementa la función async 'obtenerUsuariosActivos(prisma)'
// que devuelva todos los usuarios con 'active: true', ordenados por 'name' ascendente ('asc'):
// Sintaxis:
//   return await prisma.user.findMany({
//     where: { active: true },
//     orderBy: { name: 'asc' }
//   });

async function obtenerUsuariosActivos(prisma) {
  // TODO: Escribe tu consulta findMany aquí:
  return [];
}

// ------------------------------------------
// RETO 2: Búsqueda con Inclusión de Relación con include
// ------------------------------------------
// TODO: Implementa la función async 'obtenerUsuarioConPublicaciones(prisma, userId)'
// que busque el usuario con 'id: userId' e incluya automáticamente sus publicaciones asociadas usando include: { posts: true }:
// Sintaxis:
//   return await prisma.user.findUnique({
//     where: { id: userId },
//     include: { posts: true }
//   });

async function obtenerUsuarioConPublicaciones(prisma, userId) {
  // TODO: Escribe tu consulta findUnique con include aquí:
  return null;
}

// ------------------------------------------
// RETO 3: Creación de Registro con create({ data: ... })
// ------------------------------------------
// TODO: Implementa la función async 'crearNuevoUsuario(prisma, nombre, correo)'
// que inserte un usuario con los datos provistos usando prisma.user.create({ data: { name: nombre, email: correo } }):

async function crearNuevoUsuario(prisma, nombre, correo) {
  // TODO: Escribe tu llamada create aquí:
  return null;
}


// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA (no modificar)
// ==========================================
(async function validarEjercicio() {
  let totalRetos = 3;
  let superados = 0;

  // Emulador de Prisma Client en memoria para pruebas instantáneas y portables
  const mockDb = {
    users: [
      { id: 1, name: 'Bautista', email: 'bauti@mail.com', active: true, posts: [{ id: 101, title: 'Post 1' }] },
      { id: 2, name: 'Ana', email: 'ana@mail.com', active: true, posts: [] },
      { id: 3, name: 'Carlos', email: 'carlos@mail.com', active: false, posts: [] }
    ]
  };

  const mockPrisma = {
    user: {
      findMany: async (args = {}) => {
        let res = [...mockDb.users];
        if (args.where && args.where.active !== undefined) {
          res = res.filter(u => u.active === args.where.active);
        }
        if (args.orderBy && args.orderBy.name) {
          const dir = args.orderBy.name.toLowerCase() === 'desc' ? -1 : 1;
          res.sort((a, b) => a.name.localeCompare(b.name) * dir);
        }
        return res;
      },
      findUnique: async (args = {}) => {
        const id = args.where && args.where.id;
        const u = mockDb.users.find(user => user.id === id);
        if (!u) return null;
        if (args.include && args.include.posts) {
          return { ...u, posts: u.posts };
        }
        const { posts, ...rest } = u;
        return rest;
      },
      create: async (args = {}) => {
        const nuevo = {
          id: mockDb.users.length + 1,
          name: args.data.name,
          email: args.data.email,
          active: true,
          posts: []
        };
        mockDb.users.push(nuevo);
        return nuevo;
      }
    }
  };

  try {
    // --- TEST RETO 1 ---
    try {
      const activos = await obtenerUsuariosActivos(mockPrisma);
      // Activos ordenados ASC: 'Ana' primero, 'Bautista' segundo. 'Carlos' (active: false) fuera.
      if (Array.isArray(activos) && activos.length === 2 && activos[0].name === 'Ana' && activos[1].name === 'Bautista') {
        console.log("✔ RETO 2.1: prisma.user.findMany({ where: { active: true }, orderBy: { name: 'asc' } }) ejecutado con éxito.");
        superados++;
      } else {
        console.log(`❌ RETO 2.1: Se esperaban 2 usuarios activos ordenados alfabéticamente ('Ana', 'Bautista'), se obtuvieron ${activos ? activos.length : 0}.`);
      }
    } catch (err) {
      console.log(`❌ RETO 2.1 Error en obtenerUsuariosActivos: ${err.message}`);
    }

    // --- TEST RETO 2 ---
    try {
      const uConPosts = await obtenerUsuarioConPublicaciones(mockPrisma, 1);
      if (uConPosts && uConPosts.id === 1 && Array.isArray(uConPosts.posts) && uConPosts.posts.length === 1) {
        console.log("✔ RETO 2.2: prisma.user.findUnique({ where: { id }, include: { posts: true } }) incluyó las publicaciones vinculadas.");
        superados++;
      } else {
        console.log("❌ RETO 2.2: obtenerUsuarioConPublicaciones no retornó el usuario con su propiedad 'posts' incluida.");
      }
    } catch (err) {
      console.log(`❌ RETO 2.2 Error en obtenerUsuarioConPublicaciones: ${err.message}`);
    }

    // --- TEST RETO 3 ---
    try {
      const nuevo = await crearNuevoUsuario(mockPrisma, 'Daniela Sol', 'daniela@mail.com');
      if (nuevo && nuevo.name === 'Daniela Sol' && nuevo.email === 'daniela@mail.com' && nuevo.id) {
        console.log(`✔ RETO 2.3: prisma.user.create({ data: { name, email } }) creó y retornó el nuevo registro correctamente.`);
        superados++;
      } else {
        console.log("❌ RETO 2.3: crearNuevoUsuario no retornó el registro creado con sus datos.");
      }
    } catch (err) {
      console.log(`❌ RETO 2.3 Error en crearNuevoUsuario: ${err.message}`);
    }

    if (superados === totalRetos) {
      console.log("\n🎉 ¡Todos los retos de operaciones con Prisma Client fueron superados!");
    } else {
      console.log(`\nProgreso: ${superados}/${totalRetos} retos superados. Completa los comentarios // TODO: para avanzar.`);
    }

  } catch (globalErr) {
    console.error("Error global en la suite de pruebas:", globalErr.message);
  }
})();
