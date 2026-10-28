// ==========================================
// TEMA 2: HERENCIA DE EVENTEMITTER
// Para ejecutar: node "NodeJS/Modulo 6 - EventEmitter/02_clases_con_eventos.js"
// ==========================================

const EventEmitter = require('events');

console.log("=== TEMA 2: SERVICIO CON EVENTOS ===");

// RETO 2.1: Clase basada en eventos
// TODO: Crea una clase 'Temporizador' que extienda de EventEmitter.
// Debe tener un método 'iniciar()' que emita el evento "completado" tras 50ms:
