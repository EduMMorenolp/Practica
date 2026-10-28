// ==========================================
// TEMA 3: FUNCIONES FLECHA (ARROW FUNCTIONS)
// Para ejecutar: node "JavaScript/Modulo 3/03_funciones_flecha.js"
// ==========================================

console.log("=== TEMA 3: FUNCIONES FLECHA ===");

// ------------------------------------------
// 3.1 Conversión y Retorno Implícito
// ------------------------------------------
// Convierte esta función tradicional a una Arrow Function de una sola línea con retorno implícito:
// function cuadrado(n) { return n * n; }
// TODO: const cuadrado = ... ;
// Imprime el cuadrado de 9:


// ------------------------------------------
// 3.2 Retorno implícito de Objetos literales
// ------------------------------------------
// Para retornar un objeto directamente con arrow functions se usan paréntesis envolventes: `() => ({ ... })`.
// Crea una arrow function 'crearProducto(id, nombre)' que retorne `{ id: id, nombre: nombre }` en una sola línea.
// TODO: Define crearProducto e imprime el resultado llamando a crearProducto(101, "Teclado Mecánico"):


// ------------------------------------------
// 3.3 El comportamiento de `this` léxico
// ------------------------------------------
// Las arrow functions heredan `this` de su entorno.
const usuario = {
  nombre: "Carlos",
  // Método tradicional: tiene su propio `this` apuntando a usuario
  saludoTradicional: function() {
    return "Hola, soy " + this.nombre;
  },
  // Arrow function: NO tiene su propio `this` (apunta al objeto global o {} en Node)
  saludoFlecha: () => {
    return "Hola, soy " + (this ? this.nombre : undefined);
  }
};

// TODO: Imprime usuario.saludoTradicional() y usuario.saludoFlecha(). Observa la diferencia:

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

  await validar('RETO 3.1 (cuadrado)', () => typeof cuadrado === 'function' && cuadrado(6) === 36, 'const cuadrado = n => n * n');
  await validar('RETO 3.2 (crearProducto)', () => typeof crearProducto === 'function' && crearProducto(1, 'Mouse').nombre === 'Mouse', 'crearProducto debe retornar un objeto ({ id, nombre })');

  console.log('\n--- Fin de la comprobación ---\n');
})();
