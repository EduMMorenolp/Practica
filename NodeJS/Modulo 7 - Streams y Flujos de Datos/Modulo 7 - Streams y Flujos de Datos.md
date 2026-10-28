# 📖 Módulo 7: Streams (Readable, Writable, Transform & Pipe)

Los streams permiten procesar grandes volúmenes de datos pieza por pieza (*chunks*) sin cargarlos por completo en memoria RAM.

---

## 1. Tipos de Streams
- **Readable**: Fuentes de datos de donde leer (`fs.createReadStream`).
- **Writable**: Destinos donde escribir (`fs.createWriteStream`).
- **Duplex**: Streams bidireccionales (sockets de red).
- **Transform**: Modifican los datos a medida que pasan (compresión gzip, cifrado).

---

## 2. Tuberías (Pipe y Pipeline)
- `readable.pipe(writable)`: Conecta un flujo de entrada con una salida.
- `pipeline(s1, s2, s3, callback)` del módulo `stream`: Maneja errores y limpieza automática de streams.

---

## 🛠️ Ejercicios Prácticos del Módulo (1 a 1 por tema)

1. [01_readable_writable_streams.js](./01_readable_writable_streams.js):
   - **1.1** Lectura de stream con eventos `data` y `end`.

2. [02_pipe_y_transform.js](./02_pipe_y_transform.js):
   - **2.1** Conectar streams con `.pipe()`.
