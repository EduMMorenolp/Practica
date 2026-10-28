// ==========================================
// TEMA 4: SCOPE, CLOSURES Y CONTEXTO
// Para ejecutar: node "JavaScript/Modulo 3/04_scope_closures_y_contexto.js"
// ==========================================

console.log("=== TEMA 4: SCOPE, CLOSURES Y CONTEXTO ===");

// ------------------------------------------
// 4.1 Scope Chain (Cadena de Ámbitos)
// ------------------------------------------
// Las funciones pueden acceder a variables de su scope padre, pero no a la inversa.
const nivelGlobal = "Global";

function scopePrueba() {
  const nivelFuncion = "Función";
  return nivelGlobal + " -> " + nivelFuncion;
}
console.log(scopePrueba());
// TODO: Intenta hacer console.log(nivelFuncion) afuera y comprueba que arroja ReferenceError (luego coméntala).


// ------------------------------------------
// 4.2 Closures (Encapsulamiento privado)
// ------------------------------------------
// Crea una función 'crearContador(inicial = 0)'.
// Adentro declara 'let cuenta = inicial;'
// La función debe retornar un objeto con dos métodos:
// - incrementar(): suma 1 y retorna 'cuenta'
// - obtener(): retorna el valor actual de 'cuenta'
// TODO: Define la función crearContador, crea una instancia e incrementa 3 veces imprimiendo los valores:


// ------------------------------------------
// 4.3 Contexto con .call() y .bind()
// ------------------------------------------
const desarrollador = {
  nombre: "Elena",
  presentarse: function(lenguajeFavorito) {
    return "Soy " + this.nombre + " y programo en " + lenguajeFavorito;
  }
};

const otroDesarrollador = { nombre: "Martín" };

// TODO 1: Usa .call() para invocar desarrollador.presentarse prestando el contexto de 'otroDesarrollador' con "JavaScript":
// TODO 2: Usa .bind() para crear una función permanente 'presentarMartin' y luego ejecútala con "TypeScript":
