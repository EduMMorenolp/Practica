# Módulo 6: Middlewares Fundamentales y Personalizados

Las funciones de middleware son funciones que tienen acceso al objeto de solicitud (`req`), al objeto de respuesta (`res`) y a la siguiente función de middleware en el ciclo de solicitud-respuesta de la aplicación (`next`).

---

## 1. Anatomía de un Middleware
```javascript
const miLogger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next(); // ¡Crucial! Si no llamamos a next(), la petición se queda colgada.
};

app.use(miLogger);
```

---

## 2. Middlewares Incorporados en Express (Built-in)
Express incluye por defecto middlewares esenciales:
- `express.json()`: Analiza las solicitudes entrantes con cargas útiles JSON.
- `express.urlencoded({ extended: true })`: Analiza solicitudes entrantes con cargas codificadas en URL (formularios).
- `express.static(rootPath)`: Sirve archivos estáticos (HTML, CSS, imágenes, JS).

```javascript
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));
```
