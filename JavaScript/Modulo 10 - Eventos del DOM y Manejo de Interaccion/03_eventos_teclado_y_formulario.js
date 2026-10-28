// ==========================================
// TEMA 3: TECLADO Y FORMULARIOS
// Para ejecutar: node "JavaScript/Modulo 10 - Eventos del DOM y Manejo de Interaccion/03_eventos_teclado_y_formulario.js"
// ==========================================

console.log("=== TEMA 3: TECLADO Y FORMULARIOS ===");

// RETO 3.1: Manejo de atajos de teclado
function onKeyDown(e) {
  // TODO: Si la tecla es "Enter" Y e.ctrlKey es true, imprime: ">> Enviar mensaje con Ctrl+Enter"
  // Si la tecla es "Escape", imprime: ">> Cancelar acción con Escape"
}

// Pruebas:
onKeyDown({ key: "Enter", ctrlKey: true });
onKeyDown({ key: "Escape", ctrlKey: false });

// RETO 3.2: Validación en envío de formulario
function validarFormulario(formEvent) {
  // TODO: Retorna true solo si formEvent.email contiene un '@' Y formEvent.terminosAceptados es true.
  // De lo contrario retorna false.
}

console.log("Formulario 1 válido?:", validarFormulario({ email: "user@test.com", terminosAceptados: true }));
console.log("Formulario 2 válido?:", validarFormulario({ email: "invalido", terminosAceptados: true }));
