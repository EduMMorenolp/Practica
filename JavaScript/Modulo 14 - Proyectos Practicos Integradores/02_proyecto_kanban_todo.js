// ==========================================
// PROYECTO 2: GESTOR DE TAREAS KANBAN / TO-DO
// Para ejecutar: node "JavaScript/Modulo 14 - Proyectos Practicos Integradores/02_proyecto_kanban_todo.js"
// ==========================================

console.log("=== PROYECTO 2: KANBAN TO-DO ===");

class GestorTareas {
  constructor() {
    this.tareas = [];
  }

  // RETO 2.1: Agregar Tarea
  // TODO: Crea un objeto nuevaTarea con:
  // - id: Date.now() + Math.random()
  // - titulo: titulo recibido
  // - prioridad: prioridad recibida (por defecto "MEDIA")
  // - estado: "PENDIENTE"
  // Insértalo en this.tareas y retorna la nueva tarea.
  agregarTarea(titulo, prioridad = "MEDIA") {
    // Escribe tu código aquí:
  }

  // RETO 2.2: Cambiar Estado
  // TODO: Encuentra la tarea con el 'id' dado y actualiza su propiedad .estado con 'nuevoEstado'.
  cambiarEstado(id, nuevoEstado) {
    // Escribe tu código aquí:
  }

  // RETO 2.3: Filtrar por Estado
  // TODO: Usa this.tareas.filter() para retornar solo las tareas que coincidan con 'estado'.
  filtrarPorEstado(estado) {
    // Escribe tu código aquí:
  }
}

// Pruebas:
const kanban = new GestorTareas();
const t1 = kanban.agregarTarea("Estudiar funciones de orden superior", "ALTA");
const t2 = kanban.agregarTarea("Escribir código en Node.js", "MEDIA");
kanban.cambiarEstado(t1?.id, "COMPLETADA");

console.log("Completadas:", kanban.filtrarPorEstado("COMPLETADA"));
console.log("Pendientes:", kanban.filtrarPorEstado("PENDIENTE"));

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

  await validar('RETO 2.1/2.2/2.3 (Kanban)', () => {
    const k = new GestorTareas();
    const t = k.agregarTarea('Tarea 1', 'ALTA');
    if (!t || t.estado !== 'PENDIENTE') return false;
    k.cambiarEstado(t.id, 'COMPLETADA');
    return k.filtrarPorEstado('COMPLETADA').length === 1 && k.filtrarPorEstado('PENDIENTE').length === 0;
  }, 'GestorTareas debe permitir agregar, cambiar estado y filtrar');

  console.log('\n--- Fin de la comprobación ---\n');
})();
