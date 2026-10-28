# Módulo 2: Enrutamiento Básico y Métodos HTTP (Routing)

El enrutamiento determina cómo una aplicación responde a la solicitud de un cliente a un endpoint particular (URI/ruta) y un método de solicitud HTTP específico.

---

## 1. Métodos HTTP estándar
Express admite todos los verbos HTTP:
- `app.get(path, handler)`: Solicitar datos.
- `app.post(path, handler)`: Enviar datos nuevos.
- `app.put(path, handler)`: Reemplazar un recurso por completo.
- `app.patch(path, handler)`: Actualizar parcialmente un recurso.
- `app.delete(path, handler)`: Eliminar un recurso.

```javascript
app.get('/usuarios', (req, res) => res.send('Listado'));
app.post('/usuarios', (req, res) => res.status(201).send('Creado'));
```

---

## 2. app.all()
Captura todos los métodos HTTP (GET, POST, PUT, DELETE, etc.) en una ruta determinada:

```javascript
app.all('/secreto', (req, res, next) => {
  console.log('Accediendo a la sección secreta con método:', req.method);
  next(); // Pasa el control al siguiente manejador
});
```

---

## 3. app.route()
Permite encadenar manejadores para una misma ruta, evitando nombres de ruta redundantes:

```javascript
app.route('/libro')
  .get((req, res) => res.send('Obtener un libro'))
  .post((req, res) => res.send('Añadir un libro'))
  .put((req, res) => res.send('Actualizar el libro'));
```
