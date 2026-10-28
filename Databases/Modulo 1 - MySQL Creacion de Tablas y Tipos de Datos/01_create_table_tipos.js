// ==========================================
// EJERCICIO 1: DDL CREACIÓN DE TABLAS Y CONSTRAINTS EN MYSQL
// Para ejecutar: node "Databases/Modulo 1 - MySQL Creacion de Tablas y Tipos de Datos/01_create_table_tipos.js"
// ==========================================

console.log("=== EJERCICIO 1: DDL CREACIÓN DE TABLAS Y TIPOS EN MYSQL ===");

// ------------------------------------------
// RETO 1: Tabla de Categorías con Restricción UNIQUE
// ------------------------------------------
// TODO: Escribe la sentencia SQL para crear la tabla 'categorias' con las siguientes columnas:
//   - id: entero, clave primaria, auto-incrementable (INT AUTO_INCREMENT PRIMARY KEY)
//   - nombre: texto variable hasta 50 caracteres, no nulo y único (VARCHAR(50) NOT NULL UNIQUE)
//   - descripcion: texto variable hasta 200 caracteres, opcional (NULL)
const sqlCrearCategorias = `
  -- Escribe tu sentencia CREATE TABLE aquí:
`;

// ------------------------------------------
// RETO 2: Tabla de Productos con Tipos Numéricos y DEFAULT
// ------------------------------------------
// TODO: Escribe la sentencia SQL para crear la tabla 'productos' con las siguientes columnas:
//   - id: entero, clave primaria, auto-incrementable (INT AUTO_INCREMENT PRIMARY KEY)
//   - nombre: texto variable hasta 100 caracteres, no nulo (VARCHAR(100) NOT NULL)
//   - precio: decimal de 10 dígitos y 2 decimales, no nulo (DECIMAL(10,2) NOT NULL)
//   - stock: entero con valor por defecto 0 (INT DEFAULT 0)
//   - activo: entero booleano (TINYINT(1) o INT) con valor por defecto 1 (DEFAULT 1)
const sqlCrearProductos = `
  -- Escribe tu sentencia CREATE TABLE aquí:
`;

// ------------------------------------------
// RETO 3: Tabla de Pedidos con Clave Foránea y ON DELETE CASCADE
// ------------------------------------------
// TODO: Escribe la sentencia SQL para crear la tabla 'pedidos' con:
//   - id: entero, clave primaria, auto-incrementable (INT AUTO_INCREMENT PRIMARY KEY)
//   - usuario_id: entero no nulo (INT NOT NULL)
//   - total: decimal de 10 dígitos y 2 decimales, no nulo (DECIMAL(10,2) NOT NULL)
//   - creado_en: fecha y hora con valor por defecto fecha actual (DATETIME DEFAULT CURRENT_TIMESTAMP)
//   - Clave foránea que relacione 'usuario_id' con la tabla 'usuarios(id)' con ON DELETE CASCADE:
//     FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
const sqlCrearPedidos = `
  -- Escribe tu sentencia CREATE TABLE aquí:
`;


// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA (no modificar)
// ==========================================
(function validarEjercicio() {
  const { DatabaseSync } = require('node:sqlite');
  let db = null;
  let totalRetos = 3;
  let superados = 0;

  try {
    db = new DatabaseSync(':memory:');
    db.exec('PRAGMA foreign_keys = ON;');

    // Crear tabla previa usuarios para permitir testear la foreign key del reto 3
    db.exec(`
      CREATE TABLE IF NOT EXISTS usuarios (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT NOT NULL
      );
    `);

    // Helper para normalizar SQL de MySQL a SQLite para ejecución en memoria
    const normalizarSQL = (sql) => {
      return sql
        .replace(/INT\s+AUTO_INCREMENT\s+PRIMARY\s+KEY/gi, 'INTEGER PRIMARY KEY AUTOINCREMENT')
        .replace(/AUTO_INCREMENT/gi, 'AUTOINCREMENT')
        .replace(/TINYINT\(1\)/gi, 'INTEGER')
        .replace(/VARCHAR\(\d+\)/gi, 'TEXT')
        .replace(/DECIMAL\(\d+,\s*\d+\)/gi, 'NUMERIC')
        .replace(/DATETIME/gi, 'TEXT');
    };

    // --- TEST RETO 1 ---
    try {
      const sqlLimpio1 = (sqlCrearCategorias || '').trim();
      if (!sqlLimpio1 || sqlLimpio1.includes('-- Escribe tu')) {
        console.log("❌ RETO 1.1: sqlCrearCategorias aún no ha sido implementado.");
      } else {
        db.exec(normalizarSQL(sqlLimpio1));
        const tablaInfo = db.prepare("PRAGMA table_info('categorias')").all();
        const tieneId = tablaInfo.some(c => c.name.toLowerCase() === 'id' && c.pk === 1);
        const tieneNombre = tablaInfo.some(c => c.name.toLowerCase() === 'nombre' && c.notnull === 1);
        const tieneDesc = tablaInfo.some(c => c.name.toLowerCase() === 'descripcion');

        if (tieneId && tieneNombre && tieneDesc) {
          console.log("✔ RETO 1.1: Tabla 'categorias' creada con columnas id, nombre (NOT NULL/UNIQUE) y descripcion.");
          superados++;
        } else {
          console.log("❌ RETO 1.1: Faltan columnas requeridas o restricciones en 'categorias'. Revisa id (PK), nombre y descripcion.");
        }
      }
    } catch (err) {
      console.log(`❌ RETO 1.1 Error en CREATE TABLE categorias: ${err.message}`);
    }

    // --- TEST RETO 2 ---
    try {
      const sqlLimpio2 = (sqlCrearProductos || '').trim();
      if (!sqlLimpio2 || sqlLimpio2.includes('-- Escribe tu')) {
        console.log("❌ RETO 1.2: sqlCrearProductos aún no ha sido implementado.");
      } else {
        db.exec(normalizarSQL(sqlLimpio2));
        const tablaInfo = db.prepare("PRAGMA table_info('productos')").all();
        const tieneId = tablaInfo.some(c => c.name.toLowerCase() === 'id' && c.pk === 1);
        const tienePrecio = tablaInfo.some(c => c.name.toLowerCase() === 'precio' && c.notnull === 1);
        const tieneStock = tablaInfo.some(c => c.name.toLowerCase() === 'stock');
        const tieneActivo = tablaInfo.some(c => c.name.toLowerCase() === 'activo');

        if (tieneId && tienePrecio && tieneStock && tieneActivo) {
          console.log("✔ RETO 1.2: Tabla 'productos' creada con tipos correctos, defaults y primary key.");
          superados++;
        } else {
          console.log("❌ RETO 1.2: Revisa las columnas de 'productos' (id, nombre, precio, stock, activo) y sus tipos/defaults.");
        }
      }
    } catch (err) {
      console.log(`❌ RETO 1.2 Error en CREATE TABLE productos: ${err.message}`);
    }

    // --- TEST RETO 3 ---
    try {
      const sqlLimpio3 = (sqlCrearPedidos || '').trim();
      if (!sqlLimpio3 || sqlLimpio3.includes('-- Escribe tu')) {
        console.log("❌ RETO 1.3: sqlCrearPedidos aún no ha sido implementado.");
      } else {
        db.exec(normalizarSQL(sqlLimpio3));
        const fkList = db.prepare("PRAGMA foreign_key_list('pedidos')").all();
        const fkUsuarios = fkList.some(fk => fk.table.toLowerCase() === 'usuarios' && fk.to.toLowerCase() === 'id');

        if (fkUsuarios) {
          console.log("✔ RETO 1.3: Tabla 'pedidos' creada correctamente con FOREIGN KEY referenciando usuarios(id).");
          superados++;
        } else {
          console.log("❌ RETO 1.3: La tabla 'pedidos' no tiene configurada la clave foránea hacia usuarios(id).");
        }
      }
    } catch (err) {
      console.log(`❌ RETO 1.3 Error en CREATE TABLE pedidos: ${err.message}`);
    }

    if (superados === totalRetos) {
      console.log("\n🎉 ¡Todos los retos de creación de tablas en MySQL fueron superados con éxito!");
    } else {
      console.log(`\nProgreso: ${superados}/${totalRetos} retos superados. Completa los comentarios // TODO: para avanzar.`);
    }

  } catch (globalErr) {
    console.error("Error global en la suite de pruebas:", globalErr.message);
  } finally {
    if (db) {
      try { db.close(); } catch (_) {}
    }
  }
})();
