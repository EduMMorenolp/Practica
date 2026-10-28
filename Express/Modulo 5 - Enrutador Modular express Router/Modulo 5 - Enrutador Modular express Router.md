# Módulo 5: Enrutador Modular (express.Router)

La clase `express.Router` se utiliza para crear manejadores de rutas modulares y montables. Un enrutador es como una mini-aplicación de Express aislada capaz de realizar funciones de middleware y enrutamiento.

---

## 1. Creación y Montaje
```javascript
// rutas/usuarios.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.json({ usuarios: [] }));
router.get('/:id', (req, res) => res.json({ id: req.params.id }));

module.exports = router;
```

Y en la aplicación principal:
```javascript
const rutaUsuarios = require('./rutas/usuarios');
app.use('/api/v1/usuarios', rutaUsuarios);
```

---

## 2. Parámetros de Enrutador con router.param()
Agrega callbacks de activación a parámetros de ruta:
```javascript
router.param('usuarioId', (req, res, next, id) => {
  console.log('ID interceptado:', id);
  req.usuario = { id, nombre: 'Juan' };
  next();
});

router.get('/:usuarioId', (req, res) => {
  res.json(req.usuario);
});
```
