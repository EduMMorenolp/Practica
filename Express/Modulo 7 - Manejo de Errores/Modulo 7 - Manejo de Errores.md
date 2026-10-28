# Módulo 7: Manejo de Errores en Express

El manejo de errores en Express se realiza mediante funciones especiales de middleware que aceptan exactamente **cuatro argumentos**: `(err, req, res, next)`.

---

## 1. Middleware de Manejo de Errores
```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: true,
    mensaje: err.message || 'Error interno del servidor'
  });
});
```

---

## 2. Propagación de Errores
- En código sincrónico: `throw new Error('Fallo')` es capturado automáticamente por Express.
- En código asincrónico (callbacks o promesas): Debes pasar el error a `next(err)`:

```javascript
app.get('/datos-async', async (req, res, next) => {
  try {
    const resultado = await operacionRiesgosa();
    res.json(resultado);
  } catch (err) {
    next(err); // Pasa el error al middleware de errores
  }
});
```

---

## 3. Captura de 404 (Not Found)
Debe colocarse al final de todas las rutas definidas:
```javascript
app.use((req, res, next) => {
  res.status(404).json({ error: 'Ruta no encontrada' });
});
```
