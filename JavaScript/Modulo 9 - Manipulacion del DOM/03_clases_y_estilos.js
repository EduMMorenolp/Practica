// ==========================================
// TEMA 3: CLASES Y ESTILOS (CLASSLIST)
// Para ejecutar: node "JavaScript/Modulo 9 - Manipulacion del DOM/03_clases_y_estilos.js"
// ==========================================

console.log("=== TEMA 3: CLASSLIST Y ESTILOS ===");

class FakeClassList {
  constructor(initial = []) { this.classes = new Set(initial); }
  add(cls) { this.classes.add(cls); }
  remove(cls) { this.classes.delete(cls); }
  toggle(cls) {
    if (this.classes.has(cls)) { this.classes.delete(cls); return false; }
    this.classes.add(cls); return true;
  }
  contains(cls) { return this.classes.has(cls); }
}

const tarjeta = { classList: new FakeClassList(["card", "visible"]) };

// RETO 3.1: Agregar clase con .add()
// TODO: Agrega la clase "dark-mode" a la tarjeta usando tarjeta.classList.add():


// RETO 3.2: Remover clase con .remove()
// TODO: Elimina la clase "visible" de la tarjeta usando tarjeta.classList.remove():


// RETO 3.3: Alternar clase con .toggle()
// TODO: Usa tarjeta.classList.toggle("seleccionado") dos veces seguidas.
// Imprime el conjunto final de clases con [...tarjeta.classList.classes]:

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

  await validar('RETO 3.1 (classList.add)', () => tarjeta.classList.contains('dark-mode'), 'Agrega "dark-mode" a tarjeta');
  await validar('RETO 3.2 (classList.remove)', () => !tarjeta.classList.contains('visible'), 'Remueve "visible" de tarjeta');

  console.log('\n--- Fin de la comprobación ---\n');
})();
