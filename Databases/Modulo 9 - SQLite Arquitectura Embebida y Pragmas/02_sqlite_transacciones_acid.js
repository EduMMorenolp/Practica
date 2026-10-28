// ==========================================
// EJERCICIO 2: SQLITE TRANSACCIONES ACID Y SAVEPOINTS
// Para ejecutar: node "Databases/Modulo 9 - SQLite Arquitectura Embebida y Pragmas/02_sqlite_transacciones_acid.js"
// ==========================================

console.log("=== EJERCICIO 2: SQLITE TRANSACCIONES ACID Y SAVEPOINTS ===");

// ------------------------------------------
// RETO 1: Transferencia Bancaria Atómica con COMMIT
// ------------------------------------------
// Tabla 'banco' (id, titular, saldo)
// TODO: Escribe el bloque transaccional SQL para transferir 50.00 desde la cuenta de 'Ana' (id = 1) hacia la cuenta de 'Beto' (id = 2):
//   1. Iniciar transacción: BEGIN TRANSACTION;
//   2. Restar 50 al saldo de Ana: UPDATE banco SET saldo = saldo - 50 WHERE id = 1;
//   3. Sumar 50 al saldo de Beto: UPDATE banco SET saldo = saldo + 50 WHERE id = 2;
//   4. Confirmar los cambios: COMMIT;
const sqlTransaccionExitosa = `
  -- Escribe tu bloque transaccional aquí:
`;

// ------------------------------------------
// RETO 2: Abortar Operación Errónea con ROLLBACK
// ------------------------------------------
// TODO: Escribe el bloque transaccional SQL donde se intente poner el saldo de Beto (id = 2) en 0,
// pero la operación sea completamente revertida mediante ROLLBACK para proteger los datos:
//   1. Iniciar transacción: BEGIN TRANSACTION;
//   2. Modificar saldo: UPDATE banco SET saldo = 0 WHERE id = 2;
//   3. Revertir cambios: ROLLBACK;
const sqlTransaccionRevertida = `
  -- Escribe tu bloque ROLLBACK aquí:
`;

// ------------------------------------------
// RETO 3: Punto de Guardado Parcial con SAVEPOINT
// ------------------------------------------
// TODO: Escribe el bloque de SAVEPOINT para revertir solo una acción intermedia:
//   1. Crear un punto de guardado llamado 'punto_seguro': SAVEPOINT punto_seguro;
//   2. Modificar el nombre de Ana a 'Ana (Modificada)': UPDATE banco SET titular = 'Ana (Modificada)' WHERE id = 1;
//   3. Revertir solo hasta el punto de guardado: ROLLBACK TO punto_seguro;
//   4. Liberar el savepoint: RELEASE SAVEPOINT punto_seguro;
const sqlSavepoint = `
  -- Escribe tu bloque SAVEPOINT aquí:
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

    // Datos iniciales
    db.exec(`
      CREATE TABLE banco (
        id INTEGER PRIMARY KEY,
        titular TEXT NOT NULL,
        saldo NUMERIC NOT NULL
      );

      INSERT INTO banco (id, titular, saldo) VALUES
        (1, 'Ana', 200.00),
        (2, 'Beto', 100.00);
    `);

    // --- TEST RETO 1 ---
    try {
      const t1 = (sqlTransaccionExitosa || '').trim();
      if (!t1 || t1.includes('-- Escribe tu')) {
        console.log("❌ RETO 2.1: sqlTransaccionExitosa aún no ha sido implementado.");
      } else {
        db.exec(t1);
        const ana = db.prepare("SELECT saldo FROM banco WHERE id = 1").get();
        const beto = db.prepare("SELECT saldo FROM banco WHERE id = 2").get();

        // Ana: 200 - 50 = 150. Beto: 100 + 50 = 150
        if (ana && Number(ana.saldo) === 150 && beto && Number(beto.saldo) === 150) {
          console.log("✔ RETO 2.1: Transacción bancaria atómica (BEGIN ... COMMIT) ejecutada y confirmada exitosamente.");
          superados++;
        } else {
          console.log(`❌ RETO 2.1: Los saldos tras el COMMIT no coinciden (esperado: Ana=150, Beto=150).`);
        }
      }
    } catch (err) {
      console.log(`❌ RETO 2.1 Error en transacción: ${err.message}`);
    }

    // --- TEST RETO 2 ---
    try {
      const t2 = (sqlTransaccionRevertida || '').trim();
      if (!t2 || t2.includes('-- Escribe tu')) {
        console.log("❌ RETO 2.2: sqlTransaccionRevertida aún no ha sido implementado.");
      } else {
        db.exec(t2);
        const beto = db.prepare("SELECT saldo FROM banco WHERE id = 2").get();

        // Beto debe seguir en 150 (la modificación a 0 fue revertida por ROLLBACK)
        if (beto && Number(beto.saldo) === 150) {
          console.log("✔ RETO 2.2: Transacción abortada con ROLLBACK preservó la integridad de los saldos.");
          superados++;
        } else {
          console.log(`❌ RETO 2.2: El saldo fue modificado indebidamente a ${beto ? beto.saldo : 'null'} sin ejecutar ROLLBACK.`);
        }
      }
    } catch (err) {
      console.log(`❌ RETO 2.2 Error en ROLLBACK: ${err.message}`);
    }

    // --- TEST RETO 3 ---
    try {
      const t3 = (sqlSavepoint || '').trim();
      if (!t3 || t3.includes('-- Escribe tu')) {
        console.log("❌ RETO 2.3: sqlSavepoint aún no ha sido implementado.");
      } else {
        db.exec(t3);
        const ana = db.prepare("SELECT titular FROM banco WHERE id = 1").get();

        // El titular debe seguir siendo 'Ana' tras el ROLLBACK TO punto_seguro
        if (ana && ana.titular === 'Ana') {
          console.log("✔ RETO 2.3: SAVEPOINT y ROLLBACK TO punto_seguro revirtieron parcialmente los cambios correctamente.");
          superados++;
        } else {
          console.log(`❌ RETO 2.3: El nombre sigue siendo '${ana ? ana.titular : 'null'}' en lugar de haberse revertido a 'Ana'.`);
        }
      }
    } catch (err) {
      console.log(`❌ RETO 2.3 Error en SAVEPOINT: ${err.message}`);
    }

    if (superados === totalRetos) {
      console.log("\n🎉 ¡Todos los retos de SQLite transacciones ACID y SAVEPOINT fueron superados!");
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
