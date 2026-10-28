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
