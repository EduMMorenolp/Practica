// ==========================================
// TEMA 4: COLECCIONES SET Y MAP (ES6)
// Para ejecutar: node "JavaScript/Modulo 6 - Arrays y Colecciones Iterables/04_set_y_map.js"
// ==========================================

console.log("=== TEMA 4: SET Y MAP ===");

// 4.1 Limpieza de duplicados con Set
const numerosDuplicados = [1, 2, 2, 3, 4, 4, 4, 5];
// TODO: Crea un Set a partir de 'numerosDuplicados' y conviértelo de nuevo a un array sin duplicados con [...new Set(...)]:


// 4.2 Diccionarios con Map
const usuariosRoles = new Map();
// TODO 1: Agrega clave "admin" con valor "SuperUsuario" usando .set()
// TODO 2: Agrega clave "editor" con valor "EditorContenido"
// TODO 3: Consulta el valor de "admin" con .get("admin") e imprime si existe con .has("invitado"):

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

  await validar('RETO 4.1 (Set sin duplicados)', () => typeof sinDuplicados !== 'undefined' && Array.isArray(sinDuplicados) && sinDuplicados.length === 5, 'Limpia duplicados usando [...new Set(numerosDuplicados)]');

  console.log('\n--- Fin de la comprobación ---\n');
})();
