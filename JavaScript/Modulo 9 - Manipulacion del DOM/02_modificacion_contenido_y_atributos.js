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
