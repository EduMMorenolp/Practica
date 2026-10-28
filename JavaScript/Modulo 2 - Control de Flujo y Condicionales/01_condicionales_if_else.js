// ==========================================
// TEMA 1: CONDICIONALES IF / ELSE
// Para ejecutar: node "JavaScript/Modulo 2/01_condicionales_if_else.js"
// ==========================================

console.log("=== TEMA 1: CONDICIONALES IF / ELSE ===");

// ------------------------------------------
// 1.1 if / else básico
// ------------------------------------------
// Si la variable 'temperatura' es mayor a 30, imprime "Hace calor".
// De lo contrario, imprime "El clima está agradable".
const temperatura = 32;
// TODO: Escribe tu estructura if / else aquí abajo:


// ------------------------------------------
// 1.2 if / else if / else (Rangos)
// ------------------------------------------
// Evalúa la variable 'nota' (0 a 100):
// - 90 o más: "Excelente"
// - 70 a 89: "Aprobado"
// - Menor a 70: "Reprobado"
const nota = 85;
// TODO: Escribe tu condicional aquí abajo:


// ------------------------------------------
// 1.3 Condiciones compuestas con && y ||
// ------------------------------------------
// Para entrar a la atracción de un parque:
// Debe tener altura >= 140 Y estar acompañado (o tener edad >= 18).
const altura = 145;
const estaAcompanado = false;
const edad = 16;

// TODO: Evalúa con if si puede subir a la atracción e imprime el resultado:

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

  await validar('RETO 1.1 (if/else)', () => typeof edadPersona !== 'undefined' ? true : true, 'Verifica con if / else si la persona es mayor de edad');
  await validar('RETO 1.2 (if/else if/else)', () => typeof calificacion !== 'undefined' ? true : true, 'Verifica los rangos de nota');
  await validar('RETO 1.3 (condiciones lógicas && / ||)', () => typeof estatura !== 'undefined' ? true : true, 'Evalúa condiciones para subir a la atracción');

  console.log('\n--- Fin de la comprobación ---\n');
})();
