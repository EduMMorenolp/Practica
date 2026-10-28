# 📖 Módulo 8: Módulos HTTP y HTTPS (Servidores y Clientes Nativos)

Node.js cuenta con el módulo nativo `http` que permite crear servidores web de alto rendimiento sin librerías externas.

---

## 1. Creación de un Servidor HTTP
- `http.createServer((req, res) => { ... })`
- Objeto de petición (`req`): `req.url`, `req.method`, `req.headers`.
- Objeto de respuesta (`res`):
  - `res.writeHead(codigo, { 'Content-Type': 'application/json' })`
  - `res.end(contenido)`

---

## 2. Clientes HTTP
- `http.get(url, res => { ... })`
- `http.request(opciones, res => { ... })`

---

## 🛠️ Ejercicios Prácticos del Módulo (1 a 1 por tema)

1. [01_servidor_http_nativo.js](./01_servidor_http_nativo.js):
   - **1.1** Configurar un servidor HTTP que responda JSON.

2. [02_cliente_http_request.js](./02_cliente_http_request.js):
   - **2.1** Realizar una petición cliente con `http.get()`.
