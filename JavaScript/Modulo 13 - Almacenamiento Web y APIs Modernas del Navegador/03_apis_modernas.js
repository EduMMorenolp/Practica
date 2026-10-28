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
