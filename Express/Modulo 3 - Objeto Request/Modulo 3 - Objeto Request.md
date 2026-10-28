# Módulo 3: El Objeto Request (req) a Fondo

El objeto `req` representa la solicitud HTTP entrante y contiene información sobre la cadena de consulta (query string), parámetros, cuerpo (body), encabezados HTTP y metadatos de conexión.

---

## 1. Parámetros de Ruta (req.params) y Query (req.query)
- `req.params`: Contiene propiedades mapeadas a los "parámetros de ruta" con nombre (ej. `/usuarios/:id`).
- `req.query`: Contiene la cadena de consulta analizada (ej. `?orden=asc&limite=10`).

```javascript
app.get('/usuarios/:id', (req, res) => {
  const userId = req.params.id;
  const ordenar = req.query.orden;
  res.send(`Usuario: ${userId}, Orden: ${ordenar}`);
});
```

---

## 2. Metadatos de Red y Encabezados
- `req.get(headerName)`: Obtiene el valor del encabezado especificado (insensible a mayúsculas).
- `req.path`: Ruta de la solicitud sin query string.
- `req.ip`: Dirección IP del cliente remoto.
- `req.protocol`: Protocolo utilizado (`'http'` o `'https'`).
- `req.secure`: Booleano, `true` si la conexión es TLS/HTTPS.
- `req.originalUrl`: URL completa original retenida aún dentro de subenrutadores montados.

---

## 3. Negociación de Contenido
- `req.accepts('json', 'html')`: Comprueba si el cliente acepta los tipos MIME indicados.
- `req.is('json')`: Comprueba si el cuerpo entrante coincide con el tipo MIME.
