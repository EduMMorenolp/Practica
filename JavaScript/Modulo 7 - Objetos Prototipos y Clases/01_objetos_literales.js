// ==========================================
// TEMA 1: OBJETOS LITERALES Y MÉTODOS
// Para ejecutar: node "JavaScript/Modulo 7 - Objetos Prototipos y Clases/01_objetos_literales.js"
// ==========================================

console.log("=== TEMA 1: OBJETOS LITERALES ===");

const persona = {
  nombre: "Mateo",
  edad: 27,
  ciudad: "Córdoba",
  saludar() {
    return "Hola, soy " + this.nombre + " de " + this.ciudad;
  }
};

// 1.1 Acceso y modificación
// TODO: Accede a 'edad' por corchetes persona["edad"], cambia la ciudad a "Rosario" e invoca persona.saludar():


// 1.2 Desestructuración de Objetos (Destructuring)
// TODO: Extrae en variables independientes 'nombre' y 'edad' de persona usando const { nombre, edad } = persona:

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

  await validar('RETO 1.1 (Objeto literal)', () => typeof persona !== 'undefined' && persona.ciudad === 'Rosario', 'Modifica persona.ciudad = "Rosario"');
  await validar('RETO 1.2 (Destructuring)', () => typeof nombre !== 'undefined' && typeof edad !== 'undefined', 'Usa const { nombre, edad } = persona');

  console.log('\n--- Fin de la comprobación ---\n');
})();
