// ==========================================
// TEMA 3: MÉTODOS DE ORDEN SUPERIOR (HIGHER ORDER FUNCTIONS)
// Para ejecutar: node "JavaScript/Modulo 6 - Arrays y Colecciones Iterables/03_orden_superior.js"
// ==========================================

console.log("=== TEMA 3: ORDEN SUPERIOR ===");

const carrito = [
  { id: 1, nombre: "Mouse", precio: 25, stock: true },
  { id: 2, nombre: "Teclado", precio: 75, stock: false },
  { id: 3, nombre: "Monitor", precio: 250, stock: true },
  { id: 4, nombre: "Auriculares", precio: 50, stock: true }
];

// 3.1 Transformar con .map()
// TODO: Obtén un array solo con los nombres de los productos:


// 3.2 Filtrar con .filter()
// TODO: Obtén los productos que tengan stock === true:


// 3.3 Reducción acumulativa con .reduce()
// TODO: Calcula la suma total de los precios de todos los productos del carrito:


// 3.4 Búsqueda con .find()
// TODO: Encuentra el producto con id === 3:

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

  await validar('RETO 3.1 (map)', () => typeof nombresProductos !== 'undefined' && Array.isArray(nombresProductos) && nombresProductos.length > 0, 'Obtén los nombres con .map()');
  await validar('RETO 3.2 (filter)', () => typeof conStock !== 'undefined' && Array.isArray(conStock) && conStock.every(p => p.stock), 'Filtra productos con stock === true');
  await validar('RETO 3.3 (reduce)', () => typeof totalCarrito === 'number' && totalCarrito > 0, 'Suma los precios con .reduce()');
  await validar('RETO 3.4 (find)', () => typeof productoBuscado !== 'undefined' && productoBuscado && productoBuscado.id === 3, 'Encuentra el producto id === 3 con .find()');

  console.log('\n--- Fin de la comprobación ---\n');
})();
