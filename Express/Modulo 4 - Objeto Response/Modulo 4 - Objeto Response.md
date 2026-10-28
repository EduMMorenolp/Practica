# Módulo 4: El Objeto Response (res) a Fondo

El objeto `res` representa la respuesta HTTP que envía la aplicación Express cuando recibe una solicitud HTTP.

---

## 1. Envío de Respuestas
- `res.send([body])`: Envía la respuesta HTTP (analiza automáticamente tipos string, Buffer, Object o Array).
- `res.json([body])`: Envía una respuesta JSON formateando el objeto con `JSON.stringify()`.
- `res.status(code)`: Establece el código de estado HTTP (ej. `res.status(404).send('No encontrado')`).
- `res.type(type)`: Asigna la cabecera `Content-Type` según la extensión o tipo MIME (ej. `res.type('png')`).

---

## 2. Gestión de Cookies y Headers
- `res.cookie(name, value, [options])`: Establece una cookie (ej. `httpOnly: true`, `maxAge: 900000`).
- `res.clearCookie(name)`: Elimina una cookie previamente guardada.
- `res.set(field, [value])`: Asigna encabezados de respuesta HTTP.
- `res.get(field)`: Lee el encabezado HTTP de respuesta asignado.

---

## 3. Redirecciones y Transferencia de Archivos
- `res.redirect([status], url)`: Redirige a la URL especificada (por defecto código 302).
- `res.sendFile(path)`: Transmite el archivo en la ruta dada estableciendo el Content-Type adecuado.
- `res.download(path, [filename])`: Fuerza al navegador a descargar el archivo como un adjunto.
- `res.format(object)`: Realiza negociación de contenido en la respuesta.
