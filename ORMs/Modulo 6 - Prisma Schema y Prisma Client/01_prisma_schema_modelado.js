// ==========================================
// EJERCICIO 1: MODELADO DECLARATIVO CON SCHEMA.PRISMA
// Para ejecutar: node "ORMs/Modulo 6 - Prisma Schema y Prisma Client/01_prisma_schema_modelado.js"
// ==========================================

console.log("=== EJERCICIO 1: MODELADO DECLARATIVO SCHEMA.PRISMA ===");

// ------------------------------------------
// RETO 1: Modelo 'Product' en Sintaxis Prisma
// ------------------------------------------
// TODO: Escribe la definición del modelo 'Product' en sintaxis de schema.prisma con los siguientes campos:
//   - id: Int con atributos @id y @default(autoincrement())
//   - title: String
//   - price: Float
//   - inStock: Boolean con atributo @default(true)
//   - createdAt: DateTime con atributo @default(now())
//
// Formato esperado:
// model Product {
//   ...
// }
const schemaProduct = `
  // Escribe tu modelo Product aquí:
`;

// ------------------------------------------
// RETO 2: Relación 1 a N entre Category y Product
// ------------------------------------------
// TODO: Escribe la definición de los dos modelos relacionados 'Category' y 'Item':
//   1. model Category con:
//      - id Int @id @default(autoincrement())
//      - name String
//      - items Item[]
//   2. model Item con:
//      - id Int @id @default(autoincrement())
//      - name String
//      - categoryId Int
//      - category Category @relation(fields: [categoryId], references: [id])
const schemaRelacion1aN = `
  // Escribe tus modelos Category e Item con @relation aquí:
`;


// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA (no modificar)
// ==========================================
(function validarEjercicio() {
  let totalRetos = 2;
  let superados = 0;

  try {
    // --- TEST RETO 1 ---
    try {
      const s1 = (schemaProduct || '').trim();
      if (!s1 || s1.includes('// Escribe tu')) {
        console.log("❌ RETO 1.1: schemaProduct aún no ha sido implementado.");
      } else {
        const tieneModel = /model\s+Product\s*\{/i.test(s1);
        const tieneId = /id\s+Int\s+@id\s+@default\(autoincrement\(\)\)/i.test(s1);
        const tieneTitle = /title\s+String/i.test(s1);
        const tienePrice = /price\s+Float/i.test(s1);
        const tieneStock = /inStock\s+Boolean\s+@default\(true\)/i.test(s1);
        const tieneCreated = /createdAt\s+DateTime\s+@default\(now\(\)\)/i.test(s1);

        if (tieneModel && tieneId && tieneTitle && tienePrice && tieneStock && tieneCreated) {
          console.log("✔ RETO 1.1: Modelo 'Product' declarado correctamente con atributos @id, @default, tipos escalares y DateTime.");
          superados++;
        } else {
          console.log("❌ RETO 1.1: Revisa los campos y directivas de 'Product' (id, title, price, inStock @default(true), createdAt @default(now())).");
        }
      }
    } catch (err) {
      console.log(`❌ RETO 1.1 Error en schemaProduct: ${err.message}`);
    }

    // --- TEST RETO 2 ---
    try {
      const s2 = (schemaRelacion1aN || '').trim();
      if (!s2 || s2.includes('// Escribe tus')) {
        console.log("❌ RETO 1.2: schemaRelacion1aN aún no ha sido implementado.");
      } else {
        const tieneCategory = /model\s+Category\s*\{[\s\S]*items\s+Item\[\][\s\S]*\}/i.test(s2);
        const tieneItem = /model\s+Item\s*\{[\s\S]*categoryId\s+Int[\s\S]*category\s+Category\s+@relation\(\s*fields:\s*\[categoryId\],\s*references:\s*\[id\]\s*\)[\s\S]*\}/i.test(s2);

        if (tieneCategory && tieneItem) {
          console.log("✔ RETO 1.2: Relación 1:N entre Category e Item declarada exitosamente con la directiva @relation.");
          superados++;
        } else {
          console.log("❌ RETO 1.2: Revisa la directiva @relation(fields: [categoryId], references: [id]) y la lista items Item[].");
        }
      }
    } catch (err) {
      console.log(`❌ RETO 1.2 Error en schemaRelacion1aN: ${err.message}`);
    }

    if (superados === totalRetos) {
      console.log("\n🎉 ¡Todos los retos de modelado con schema.prisma fueron superados!");
    } else {
      console.log(`\nProgreso: ${superados}/${totalRetos} retos superados. Completa los comentarios // TODO: para avanzar.`);
    }

  } catch (globalErr) {
    console.error("Error global en la suite de pruebas:", globalErr.message);
  }
})();
