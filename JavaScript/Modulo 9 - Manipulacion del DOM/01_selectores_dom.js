// ==========================================
// TEMA 1: SELECTORES Y QUERYSELECTOR
// Para ejecutar: node "JavaScript/Modulo 9 - Manipulacion del DOM/01_selectores_dom.js"
// ==========================================

console.log("=== TEMA 1: SELECCIÓN EN EL DOM ===");

// Emulación de un árbol HTML mínimo
const fakeDOM = {
  elements: [
    { tag: "h1", id: "titulo-principal", classList: ["header"], text: "Mi Sitio Web" },
    { tag: "button", id: "btn-enviar", classList: ["btn", "btn-primary"], text: "Enviar" },
    { tag: "p", id: "desc", classList: ["texto"], text: "Párrafo de descripción" },
    { tag: "span", id: "contador", classList: ["badge"], text: "0" }
  ],
  getElementById(id) {
    return this.elements.find(el => el.id === id) || null;
  },
  querySelector(selector) {
    if (selector.startsWith("#")) return this.getElementById(selector.slice(1));
    if (selector.startsWith(".")) {
      const cls = selector.slice(1);
      return this.elements.find(el => el.classList.includes(cls)) || null;
    }
    return this.elements.find(el => el.tag === selector) || null;
  }
};

// RETO 1.1: Búsqueda por ID
// TODO: Usa fakeDOM.getElementById() para obtener el elemento con id "titulo-principal"
// e imprime en consola su propiedad .text:


// RETO 1.2: Búsqueda por clase con querySelector
// TODO: Usa fakeDOM.querySelector() para seleccionar el elemento con clase ".btn-primary"
// e imprime en consola su propiedad .text:

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

  await validar('RETO 1.1 (getElementById)', () => fakeDOM.getElementById('titulo-principal')?.text === 'Mi Sitio Web', 'getElementById debe encontrar el h1 con id "titulo-principal"');
  await validar('RETO 1.2 (querySelector)', () => fakeDOM.querySelector('.btn-primary')?.text === 'Enviar', 'querySelector debe encontrar el botón con clase ".btn-primary"');

  console.log('\n--- Fin de la comprobación ---\n');
})();
