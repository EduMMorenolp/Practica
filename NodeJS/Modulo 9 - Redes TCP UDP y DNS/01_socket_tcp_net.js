// ==========================================
// TEMA 1: SOCKETS TCP CON NET
// Para ejecutar: node "NodeJS/Modulo 9 - Redes TCP UDP y DNS/01_socket_tcp_net.js"
// ==========================================

const net = require('net');

console.log("=== TEMA 1: SOCKET TCP ===");

// RETO 1.1: Servidor TCP Eco
// TODO: Crea un servidor con net.createServer(socket => { socket.write("Conectado\n"); })
// e imprime el puerto de escucha con server.address():
