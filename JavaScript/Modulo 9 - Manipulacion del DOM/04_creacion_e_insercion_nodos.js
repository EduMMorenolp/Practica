// ==========================================
// TEMA 4: CREACIÓN E INSERCIÓN DE NODOS
// Para ejecutar: node "JavaScript/Modulo 9 - Manipulacion del DOM/04_creacion_e_insercion_nodos.js"
// ==========================================

console.log("=== TEMA 4: CREACIÓN Y APPEND ===");

const lista = {
  children: [],
  append(item) { this.children.push(item); }
};

function createElement(tag, text) {
  return { tag, textContent: text };
}

// RETO 4.1: Crear e insertar nodos dinámicos
// TODO: Usa la función createElement para crear 3 elementos <li>:
// 1. "Aprender JavaScript"
// 2. "Dominar el DOM"
// 3. "Construir aplicaciones reales"
// TODO: Inserta los 3 elementos en 'lista' usando lista.append():
// Luego imprime los textos de lista.children:
