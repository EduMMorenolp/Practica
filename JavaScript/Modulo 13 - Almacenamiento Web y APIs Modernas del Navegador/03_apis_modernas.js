// ==========================================
// TEMA 3: WEB APIS MODERNAS
// Para ejecutar: node "JavaScript/Modulo 13 - Almacenamiento Web y APIs Modernas del Navegador/03_apis_modernas.js"
// ==========================================

console.log("=== TEMA 3: APIS MODERNAS ===");

const emulatedClipboard = {
  contenido: "",
  async writeText(texto) { this.contenido = texto; return Promise.resolve(); },
  async readText() { return Promise.resolve(this.contenido); }
};

// RETO 3.1: Copiar y leer del Portapapeles con Promesas
// TODO: Usa emulatedClipboard.writeText("https://miproyecto.dev/invitacion")
// y en el .then(), ejecuta emulatedClipboard.readText() e imprime el valor leído:

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

  await validar('RETO 3.1 (Clipboard API)', async () => {
    if (!emulatedClipboard.textoAlmacenado) return false;
    const txt = await emulatedClipboard.readText();
    return txt.includes('invitacion');
  }, 'Copia la URL usando emulatedClipboard.writeText(...)');

  console.log('\n--- Fin de la comprobación ---\n');
})();
