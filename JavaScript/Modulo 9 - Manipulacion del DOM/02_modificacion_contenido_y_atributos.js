// ==========================================
// TEMA 2: CONTENIDO Y ATRIBUTOS
// Para ejecutar: node "JavaScript/Modulo 9 - Manipulacion del DOM/02_modificacion_contenido_y_atributos.js"
// ==========================================

console.log("=== TEMA 2: CONTENIDO Y ATRIBUTOS ===");

const nodoHTML = {
  textContent: "",
  attributes: {},
  setAttribute(attr, val) { this.attributes[attr] = val; },
  getAttribute(attr) { return this.attributes[attr]; }
};

// RETO 2.1: Modificación de textContent
// TODO: Asigna a nodoHTML.textContent el texto "Bienvenido al mundo del DOM"
// Luego imprime nodoHTML.textContent en la consola:


// RETO 2.2: Modificación de atributos con setAttribute y getAttribute
// TODO: Usa nodoHTML.setAttribute() para establecer el atributo "href" con valor "https://developer.mozilla.org"
// y el atributo "target" con valor "_blank".
// Luego imprime el valor de "href" usando nodoHTML.getAttribute("href"):

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

  await validar('RETO 2.1 (textContent)', () => nodoHTML.textContent === 'Bienvenido al mundo del DOM', 'nodoHTML.textContent debe ser "Bienvenido al mundo del DOM"');
  await validar('RETO 2.2 (setAttribute)', () => nodoHTML.getAttribute('href') === 'https://developer.mozilla.org', 'nodoHTML debe tener atributo href="https://developer.mozilla.org"');

  console.log('\n--- Fin de la comprobación ---\n');
})();
