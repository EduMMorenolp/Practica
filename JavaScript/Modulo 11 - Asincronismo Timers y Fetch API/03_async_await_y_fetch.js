// ==========================================
// TEMA 3: ASYNC / AWAIT Y MANEJO DE ERRORES
// Para ejecutar: node "JavaScript/Modulo 11 - Asincronismo Timers y Fetch API/03_async_await_y_fetch.js"
// ==========================================

console.log("=== TEMA 3: ASYNC / AWAIT ===");

function servicioRemoto(exito = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (exito) resolve({ status: 200, datos: ["itemA", "itemB"] });
      else reject(new Error("Fallo de conexión 500"));
    }, 30);
  });
}

// RETO 3.1: Función Async y Await con try...catch
// TODO: Crea una función async llamada 'cargarDatos(debeFuncionar)'.
// - Dentro de un bloque try, espera el resultado de servicioRemoto(debeFuncionar) usando 'await'.
//   Imprime: "Datos recibidos con éxito: " + JSON.stringify(resultado)
// - Dentro del bloque catch, captura el error e imprime: "Ocurrió un error: " + err.message
// - Dentro del bloque finally, imprime: "Petición finalizada."
async function cargarDatos(debeFuncionar) {
  // Escribe tu código aquí:
}

// Pruebas:
cargarDatos(true);
cargarDatos(false);

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

  await validar('RETO 3.1 (cargarDatos async)', async () => {
    if (typeof cargarDatos !== 'function') return false;
    const r = await cargarDatos(true);
    return r && r.status === 200;
  }, 'cargarDatos(true) debe resolver con status 200');

  console.log('\n--- Fin de la comprobación ---\n');
})();
