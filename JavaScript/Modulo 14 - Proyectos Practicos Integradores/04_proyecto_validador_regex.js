// ==========================================
// PROYECTO 4: VALIDADOR DE FORMULARIOS CON REGEX
// Para ejecutar: node "JavaScript/Modulo 14 - Proyectos Practicos Integradores/04_proyecto_validador_regex.js"
// ==========================================

console.log("=== PROYECTO 4: VALIDADOR CON REGEX ===");

class ValidadorRegistro {
  // RETO 4.1: Validador de Email
  // TODO: Retorna true si 'email' cumple el formato de correo electrónico estándar (usuario@dominio.extensión):
  static validarEmail(email) {
    // Escribe tu código aquí:
  }

  // RETO 4.2: Validador de Contraseña Fuerte
  // TODO: Retorna true si 'password' tiene al menos 8 caracteres, 1 número, 1 mayúscula y 1 minúscula:
  static validarPasswordFuerte(password) {
    // Escribe tu código aquí:
  }

  // RETO 4.3: Validador de Teléfono Internacional
  // TODO: Retorna true si 'telefono' inicia con '+' y contiene solo dígitos (entre 8 y 15 números en total):
  static validarTelefono(telefono) {
    // Escribe tu código aquí:
  }
}

// Pruebas:
console.log("Email válido ('usuario@test.com'):", ValidadorRegistro.validarEmail("usuario@test.com"));
console.log("Email inválido ('usuario@test'):", ValidadorRegistro.validarEmail("usuario@test"));
console.log("Password fuerte ('Pass1234'):", ValidadorRegistro.validarPasswordFuerte("Pass1234"));
console.log("Password débil ('1234'):", ValidadorRegistro.validarPasswordFuerte("1234"));
console.log("Teléfono válido ('+54911223344'):", ValidadorRegistro.validarTelefono("+54911223344"));

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

  await validar('RETO 4.1 (validarEmail)', () => {
    return ValidadorFormularios.validarEmail('usuario@dominio.com') === true &&
           ValidadorFormularios.validarEmail('invalido@') === false;
  }, 'ValidadorFormularios.validarEmail debe validar el formato de correo');
  await validar('RETO 4.2 (validarPasswordFuerte)', () => {
    return ValidadorFormularios.validarPasswordFuerte('Abc12345') === true &&
           ValidadorFormularios.validarPasswordFuerte('debil') === false;
  }, 'ValidadorFormularios.validarPasswordFuerte debe requerir 8 chars, 1 num, 1 mayusc, 1 minusc');
  await validar('RETO 4.3 (validarTelefono)', () => {
    return ValidadorFormularios.validarTelefono('+5491122334455') === true &&
           ValidadorFormularios.validarTelefono('12345') === false;
  }, 'ValidadorFormularios.validarTelefono debe requerir + seguido de 8 a 15 dígitos');

  console.log('\n--- Fin de la comprobación ---\n');
})();
