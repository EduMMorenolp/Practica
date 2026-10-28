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
