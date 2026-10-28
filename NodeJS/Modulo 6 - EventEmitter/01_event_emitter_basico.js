// ==========================================
// TEMA 1: EVENTEMITTER BÁSICO
// Para ejecutar: node "NodeJS/Modulo 6 - EventEmitter/01_event_emitter_basico.js"
// ==========================================

const EventEmitter = require('events');

console.log("=== TEMA 1: EMISORES DE EVENTOS ===");

const emisor = new EventEmitter();

// RETO 1.1: Suscribir listener y emitir datos
// TODO: Suscribe un evento "notificacion" con emisor.on() que reciba (mensaje, prioridad) e imprima los datos.
// Luego dispara el evento usando emisor.emit("notificacion", "Servidor listo", "ALTA"):
