// ==========================================
// TEMA 2: MÉTODOS ESTÁTICOS DE OBJECT
// Para ejecutar: node "JavaScript/Modulo 7 - Objetos Prototipos y Clases/02_metodos_object.js"
// ==========================================

console.log("=== TEMA 2: MÉTODOS DE OBJECT ===");

const configuracion = {
  tema: "dark",
  idioma: "es",
  notificaciones: true
};

// 2.1 Object.keys, values y entries
// TODO 1: Imprime las claves con Object.keys(configuracion)
// TODO 2: Imprime los valores con Object.values(configuracion)
// TODO 3: Imprime las entradas [clave, valor] con Object.entries(configuracion)


// 2.2 Inmutabilidad con Object.freeze
const constantes = Object.freeze({
  PI: 3.1416,
  VERSION: "1.0.0"
});

// TODO: Intenta modificar constantes.PI = 4.0; e imprime constantes.PI para verificar que no cambió:
