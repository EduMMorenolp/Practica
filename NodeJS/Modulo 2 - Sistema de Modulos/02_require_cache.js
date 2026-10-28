// ==========================================
// TEMA 2: REQUIRE Y SU CACHÉ
// Para ejecutar: node "NodeJS/Modulo 2 - Sistema de Modulos/02_require_cache.js"
// ==========================================

console.log("=== TEMA 2: REQUIRE.CACHE ===");

// RETO 2.1: Inspección de require.cache
// TODO: Imprime cuántos módulos hay cacheados actualmente con Object.keys(require.cache).length:
console.log("Módulos en caché inicial:", Object.keys(require.cache || {}).length);
