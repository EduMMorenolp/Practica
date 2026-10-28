// ==========================================
// TEMA 2: OPERADOR TERNARIO
// Para ejecutar: node "JavaScript/Modulo 2/02_operador_ternario.js"
// ==========================================

console.log("=== TEMA 2: OPERADOR TERNARIO ===");

// ------------------------------------------
// 2.1 Asignación condicional con ternario
// ------------------------------------------
// Si 'velocidad' supera 120, asigna a 'estado' el texto "Multa aplicada",
// si no, asigna "Velocidad permitida".
const velocidad = 135;
// TODO: Declara 'estado' usando el operador ternario e imprímelo:


// ------------------------------------------
// 2.2 Salida directa condicional
// ------------------------------------------
// Tienes una variable booleana 'esPremium'.
// Imprime en una sola línea usando console.log con ternario:
// Si es true -> "Descuento del 20%"
// Si es false -> "Sin descuento"
const esPremium = true;
// TODO: console.log( ... ? ... : ... );


// ------------------------------------------
// 2.3 Formato singular o plural
// ------------------------------------------
// Si 'cantidadArticulos' es 1, la variable 'unidad' debe ser "artículo".
// Si es distinta de 1 (0, 2, 3...), debe ser "artículos".
const cantidadArticulos = 3;
// TODO: Resuelve con operador ternario e imprime: `${cantidadArticulos} ${unidad}`

// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA (no modificar)
// ==========================================
async function validar(nombre, condicion, pista) {
  try {
    if (await condicion()) {
      console.log('✔ ' + nombre);
      return true;
    }
    console.log('❌ ' + nombre + ': ' + pista);
  } catch (err) {
    console.log('❌ ' + nombre + ': Error -> ' + err.message);
  }
  return false;
}

(async () => {
  console.log('\n--- Comprobación ---');

  await validar('RETO 2.1 (Ternario estado)', () => typeof estado !== 'undefined' && (estado === 'Aprobado' || estado === 'Reprobado'), 'Declara estado = nota >= 7 ? "Aprobado" : "Reprobado"');
  await validar('RETO 2.3 (Ternario singular/plural)', () => typeof unidad !== 'undefined' && (unidad === 'artículo' || unidad === 'artículos'), 'unidad debe ser "artículo" o "artículos" según la cantidad');

  console.log('\n--- Fin de la comprobación ---\n');
})();
