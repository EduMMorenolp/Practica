// ==========================================
// TEMA 2: PROMESAS Y PROMISE.ALL
// Para ejecutar: node "JavaScript/Modulo 11 - Asincronismo Timers y Fetch API/02_promesas.js"
// ==========================================

console.log("=== TEMA 2: PROMESAS ===");

// RETO 2.1: Crear una Promesa
// TODO: Completa la función 'consultarUsuario(id)' para que retorne una Promesa:
// - Si id > 0: Resuelve (resolve) con el objeto: { id, nombre: "Usuario " + id } tras 20ms de setTimeout.
// - Si id <= 0: Rechaza (reject) con new Error("ID inválido") tras 20ms.
function consultarUsuario(id) {
  // Escribe tu código aquí:
}

// RETO 2.2: Consumir la Promesa con .then() y .catch()
// TODO: Invoca consultarUsuario(5) e imprime el resultado con .then(u => console.log(u))
// y captura el error con .catch(err => console.error(err.message)):


// RETO 2.3: Concurrencia con Promise.all()
// TODO: Ejecuta simultáneamente consultarUsuario(10) y consultarUsuario(20) usando Promise.all([...])
// e imprime los nombres de ambos usuarios cuando resuelvan:

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

  await validar('RETO 2.1 (consultarUsuario Promise)', async () => {
    if (typeof consultarUsuario !== 'function') return false;
    const u = await consultarUsuario(5);
    return u && u.id === 5;
  }, 'consultarUsuario(id) debe retornar una Promise que resuelva con el usuario');

  console.log('\n--- Fin de la comprobación ---\n');
})();
