// ==========================================
// TEMA 2: COOKIES EN JAVASCRIPT
// Para ejecutar: node "JavaScript/Modulo 13 - Almacenamiento Web y APIs Modernas del Navegador/02_cookies.js"
// ==========================================

console.log("=== TEMA 2: COOKIES Y PARSEO ===");

// RETO 2.1: Generador de Cookies con opciones de seguridad
// TODO: Completa la función 'formatearCookie(clave, valor, diasExpiracion)'
// Debe retornar un string con el siguiente formato exacto:
// `${clave}=${valor}; max-age=${dias * 86400}; path=/; SameSite=Strict; Secure`
function formatearCookie(clave, valor, diasExpiracion = 7) {
  // Escribe tu código aquí:
}

// Pruebas:
const cookiePrueba = formatearCookie("tokenAuth", "jwt_abc123", 14);
console.log("Cookie formateada:", cookiePrueba);

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

  await validar('RETO 2.1 (formatearCookie)', () => {
    if (typeof formatearCookie !== 'function') return false;
    const c = formatearCookie('sesion', 'xyz123', 7);
    return typeof c === 'string' && c.includes('sesion=xyz123') && c.includes('SameSite=Strict');
  }, 'formatearCookie debe incluir nombre=valor, max-age, path, Secure y SameSite=Strict');

  console.log('\n--- Fin de la comprobación ---\n');
})();
