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
