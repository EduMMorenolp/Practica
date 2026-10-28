// ==========================================
// TEMA 1: WEB STORAGE API (SERIALIZACIÓN JSON)
// Para ejecutar: node "JavaScript/Modulo 13 - Almacenamiento Web y APIs Modernas del Navegador/01_localstorage_y_sessionstorage.js"
// ==========================================

console.log("=== TEMA 1: LOCALSTORAGE Y JSON ===");

// Emulación de localStorage
class StorageEmulated {
  constructor() { this.store = {}; }
  setItem(key, val) { this.store[key] = String(val); }
  getItem(key) { return this.store[key] ?? null; }
  removeItem(key) { delete this.store[key]; }
  clear() { this.store = {}; }
}

const localStorage = new StorageEmulated();

// RETO 1.1: Serializar y guardar en LocalStorage
const preferencias = { tema: "dark", idioma: "es", fontSize: 16 };
// TODO: Guarda 'preferencias' en localStorage bajo la clave "config_app" usando JSON.stringify:


// RETO 1.2: Leer y deserializar desde LocalStorage
// TODO: Obtén el valor de "config_app" con localStorage.getItem(),
// deserialízalo con JSON.parse() e imprime: "Tema configurado: " + config.tema:

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

  await validar('RETO 1.1 (localStorage.setItem)', () => {
    const raw = localStorage.getItem('config_app');
    return raw && JSON.parse(raw).tema === 'oscuro';
  }, 'Guarda "config_app" en localStorage usando JSON.stringify');

  console.log('\n--- Fin de la comprobación ---\n');
})();
