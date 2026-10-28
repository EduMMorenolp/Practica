# Módulo 8: Motores de Plantillas y Vistas (View Engines)

Express permite renderizar páginas HTML dinámicas del lado del servidor utilizando motores de plantillas como EJS, Pug, Handlebars o motores personalizados.

---

## 1. Configuración del Motor
```javascript
app.set('views', path.join(__dirname, 'vistas'));
app.set('view engine', 'ejs'); // o 'pug', 'hbs', etc.
```

---

## 2. Renderizar Vistas con res.render()
```javascript
app.get('/perfil', (req, res) => {
  res.render('perfil', {
    usuario: 'Carlos',
    rol: 'Administrador'
  });
});
```

---

## 3. Variables Locales de Respuesta (res.locals)
Las variables asignadas a `res.locals` están disponibles automáticamente en todas las vistas renderizadas durante esa petición:

```javascript
app.use((req, res, next) => {
  res.locals.anioActual = new Date().getFullYear();
  next();
});
```
