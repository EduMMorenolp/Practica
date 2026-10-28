# 📖 Módulo 3: Buffers y Manipulación Binaria

Los buffers son instancias de memoria fija fuera del motor V8 utilizadas para manejar flujos de datos binarios directos (imágenes, paquetes de red, archivos).

---

## 1. Creación de Buffers
- `Buffer.alloc(tamaño)`: Crea un buffer de tamaño fijo inicializado en ceros (seguro).
- `Buffer.allocUnsafe(tamaño)`: Más rápido pero contiene memoria sin limpiar.
- `Buffer.from(origen, encoding)`: Crea un buffer a partir de strings, arrays o bytes.
- Encodings soportados: `utf8`, `base64`, `hex`, `ascii`, `latin1`.

---

## 2. Métodos y Operaciones con Buffers
- `buf.toString(encoding)`: Convierte el contenido binario a texto legible.
- `Buffer.concat([b1, b2])`: Une múltiples buffers en uno solo.
- `buf.length`: Tamaño en bytes.
- `buf.slice(inicio, fin)`: Vista sobre la misma memoria compartida.

---

## 🛠️ Ejercicios Prácticos del Módulo (1 a 1 por tema)

1. [01_creacion_buffers.js](./01_creacion_buffers.js):
   - **1.1** Crear buffer de texto con `Buffer.from()` y codificar a `base64` y `hex`.

2. [02_operaciones_buffers.js](./02_operaciones_buffers.js):
   - **2.1** Concatenación con `Buffer.concat()` y comprobación de longitud en bytes.
