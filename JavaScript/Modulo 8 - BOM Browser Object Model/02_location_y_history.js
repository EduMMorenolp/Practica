// ==========================================
// TEMA 2: LOCATION Y PARSEO DE URLS
// Para ejecutar: node "JavaScript/Modulo 8 - BOM Browser Object Model/02_location_y_history.js"
// ==========================================

console.log("=== TEMA 2: LOCATION Y URLSEARCHPARAMS ===");

const urlEjemplo = "https://tienda.com:8080/productos/laptop?categoria=gaming&descuento=true#reviews";
const parsedUrl = new URL(urlEjemplo);

// 2.1 Desglose de URL (igual que en window.location)
// TODO: Imprime:
// - protocol:
// - host:
// - pathname:
// - hash:


// 2.2 Manipulación de query parameters con URLSearchParams
const params = parsedUrl.searchParams;
// TODO: Obtén el valor de "categoria" con params.get("categoria") e imprime si tiene "descuento" con params.has("descuento"):
