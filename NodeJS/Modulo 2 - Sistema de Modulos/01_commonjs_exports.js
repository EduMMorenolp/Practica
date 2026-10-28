// ==========================================
// TEMA 1: COMMONJS Y MODULE.EXPORTS
// Para ejecutar: node "NodeJS/Modulo 2 - Sistema de Modulos/01_commonjs_exports.js"
// ==========================================

console.log("=== TEMA 1: COMMONJS EXPORTS ===");

// Emulación de exportación e importación
const moduloCalculos = {
  sumar: (a, b) => a + b,
  restar: (a, b) => a - b
};

// RETO 1.1: Consumir y verificar funciones exportadas
// TODO: Usa moduloCalculos.sumar(20, 30) y moduloCalculos.restar(50, 15) e imprime los resultados:
