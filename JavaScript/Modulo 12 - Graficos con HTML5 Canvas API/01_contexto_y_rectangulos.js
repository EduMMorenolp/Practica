// ==========================================
// TEMA 1: COORDENADAS Y RECTÁNGULOS DE CANVAS
// Para ejecutar: node "JavaScript/Modulo 12 - Graficos con HTML5 Canvas API/01_contexto_y_rectangulos.js"
// ==========================================

console.log("=== TEMA 1: RECTÁNGULOS EN CANVAS ===");

// Emulación del contexto 2D para comprobar operaciones
class EmulatedCanvasContext {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.operations = [];
  }
  fillRect(x, y, w, h) {
    this.operations.push(`fillRect(x:${x}, y:${y}, w:${w}, h:${h})`);
  }
  clearRect(x, y, w, h) {
    this.operations.push(`clearRect(x:${x}, y:${y}, w:${w}, h:${h})`);
  }
}

const ctx = new EmulatedCanvasContext(800, 600);

// RETO 1.1: Dibujar un rectángulo
// TODO: Usa ctx.fillRect(x, y, w, h) para dibujar un rectángulo en la posición x=100, y=50 con ancho 300 y alto 150:


// RETO 1.2: Limpiar un área del canvas
// TODO: Usa ctx.clearRect(x, y, w, h) para limpiar el centro del canvas desde x=150, y=75 con tamaño 50x50:


console.log("Operaciones registradas en canvas:", ctx.operations);
