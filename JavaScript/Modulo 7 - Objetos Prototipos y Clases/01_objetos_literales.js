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
