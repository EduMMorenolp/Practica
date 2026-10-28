// ==========================================
// TEMA 3: OBJETO DATE
// Para ejecutar: node "JavaScript/Modulo 5 - Numeros Matematicas y Fechas/03_objeto_date.js"
// ==========================================

console.log("=== TEMA 3: OBJETO DATE ===");

// 3.1 Fecha Actual y Getters
const ahora = new Date();
// TODO: Imprime el año (getFullYear), el mes + 1 (getMonth) y el día del mes (getDate):


// 3.2 Diferencia en días entre dos fechas
const fechaInicio = new Date("2026-01-01");
const fechaFin = new Date("2026-01-15");
// Pista: (fechaFin.getTime() - fechaInicio.getTime()) / (1000 * 60 * 60 * 24)
// TODO: Calcula y muestra la cantidad de días transcurridos entre ambas fechas:


// 3.3 Formato localizado
const evento = new Date("2026-12-25T18:30:00");
// TODO: Imprime la fecha formateada en español con evento.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }):
