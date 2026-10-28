# 📖 Módulo 9: Redes TCP y UDP (Net, Dgram & DNS)

APIs de nivel de transporte y red para sockets TCP (`net`), datagramas UDP (`dgram`) y resolución de nombres (`dns`).

---

## 1. Módulo Net (Sockets TCP)
- `net.createServer(socket => { ... })`: Servidor TCP con comunicación continua basada en eventos (`data`, `end`).
- `net.connect({ port, host })`: Cliente de socket TCP.

---

## 2. Módulo DNS
- `dns.lookup('dominio.com', callback)`: Resuelve a dirección IP usando el sistema operativo.
- `dns.resolve4('dominio.com', callback)`: Consulta servidores DNS de red para registros A (IPv4).

---

## 🛠️ Ejercicios Prácticos del Módulo (1 a 1 por tema)

1. [01_socket_tcp_net.js](./01_socket_tcp_net.js):
   - **1.1** Crear y cerrar un servidor de sockets TCP local.

2. [02_resolucion_dns.js](./02_resolucion_dns.js):
   - **2.1** Resolver la IP de un dominio con `dns.promises.lookup()`.
