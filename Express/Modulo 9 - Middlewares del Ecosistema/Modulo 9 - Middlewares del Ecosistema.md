# Módulo 9: Middlewares Populares del Ecosistema Express

La riqueza de Express reside en su ecosistema de paquetes de middleware de código abierto desarrollados por la comunidad.

---

## 1. Morgan (HTTP Request Logger)
```javascript
const morgan = require('morgan');
app.use(morgan('dev')); // Formato conciso con colores para desarrollo
```

---

## 2. CORS (Cross-Origin Resource Sharing)
Permite peticiones desde orígenes distintos al del servidor:
```javascript
const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST']
}));
```

---

## 3. Cookie-Parser y Compression
- `cookie-parser`: Analiza la cabecera Cookie y rellena `req.cookies` y `req.signedCookies`.
- `compression`: Comprime las respuestas HTTP usando gzip o deflate para acelerar la carga.
