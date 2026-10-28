# Módulo 1: Fundamentos y Creación de Aplicación (Application Core)

Express es el framework web minimalista y flexible más popular para Node.js. Proporciona un conjunto robusto de características para desarrollar aplicaciones web y móviles.

---

## 1. Inicialización y app.listen()
Para crear una aplicación Express, invocamos la función de nivel superior exportada por el módulo `express`:

```javascript
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
```

---

## 2. Configuración con app.set() y app.get()
Express permite almacenar y recuperar pares clave-valor de configuración:

```javascript
// Asignar valor
app.set('title', 'Mi Super App');
app.set('port', 8080);

// Recuperar valor
console.log(app.get('title')); // "Mi Super App"
```

### Banderas booleanas: enable() / disable()
```javascript
app.enable('trust proxy'); // Equivalente a app.set('trust proxy', true)
console.log(app.enabled('trust proxy')); // true

app.disable('x-powered-by'); // Desactiva la cabecera X-Powered-By
console.log(app.disabled('x-powered-by')); // true
```

---

## 3. Variables de aplicación globales: app.locals
`app.locals` es un objeto cuyas propiedades son variables locales dentro de la aplicación. Persiste durante todo el ciclo de vida de la aplicación:

```javascript
app.locals.appName = 'Plataforma Express';
app.locals.version = '1.0.0';
console.log(app.locals.appName);
```
