// ==========================================
// TEMA 1: OBJETO WINDOW Y GLOBALTHIS
// Para ejecutar: node "JavaScript/Modulo 8 - BOM Browser Object Model/01_objeto_window.js"
// ==========================================

console.log("=== TEMA 1: OBJETO WINDOW & GLOBALTHIS ===");

// 1.1 globalThis: Acceso universal al objeto global (window en navegador, global en Node)
console.log("¿Existe globalThis?", typeof globalThis !== "undefined");

// 1.2 Registro de propiedades en el entorno global
globalThis.APP_VERSION = "2.4.0";
// TODO: Imprime el valor de globalThis.APP_VERSION:
