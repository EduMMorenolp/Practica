// ==========================================
// TEMA 3: CLASES Y HERENCIA (OOP ES6)
// Para ejecutar: node "JavaScript/Modulo 7 - Objetos Prototipos y Clases/03_clases_y_herencia.js"
// ==========================================

console.log("=== TEMA 3: CLASES Y HERENCIA ===");

// 3.1 Clase con campo privado (#)
class CuentaBancaria {
  #saldo = 0; // Propiedad privada inaccesible desde fuera

  constructor(titular, saldoInicial = 0) {
    this.titular = titular;
    this.#saldo = saldoInicial;
  }

  depositar(monto) {
    if (monto > 0) this.#saldo += monto;
  }

  obtenerSaldo() {
    return this.#saldo;
  }
}

// TODO: Instancia una cuenta para "Santiago" con 100 de saldo, deposita 50 y muestra el saldo con .obtenerSaldo():


// 3.2 Herencia con extends y super()
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }
  emitirSonido() {
    return "Sonido genérico";
  }
}

// TODO: Crea la clase 'Perro' que extienda de Animal, reciba (nombre, raza) y sobrescriba emitirSonido() retornando "¡Guau!":

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

  await validar('RETO 3.1 (CuentaBancaria #saldo)', () => typeof CuentaBancaria === 'function', 'Crea la clase CuentaBancaria con campo privado #saldo');
  await validar('RETO 3.2 (Herencia Perro)', () => {
    if (typeof Perro !== 'function') return false;
    const p = new Perro('Firulais', 'Labrador');
    return p.emitirSonido() === '¡Guau!';
  }, 'Clase Perro debe extender de Animal y retornar "¡Guau!" en emitirSonido()');

  console.log('\n--- Fin de la comprobación ---\n');
})();
