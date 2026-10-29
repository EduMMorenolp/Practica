# Módulo 9: Protocolo Web y Códigos de Estado HTTP

Cada vez que un navegador web solicita una página HTML, envía una petición HTTP al servidor y éste responde con un documento acompañado de un **código de estado numérico de 3 dígitos**. Comprender estos códigos (detallados en la cheat sheet de OverAPI) es fundamental para todo desarrollador web.

---

## 1. Familias de Códigos HTTP

Los códigos de estado se dividen en 5 clases según su primer dígito:

| Rango | Categoría | Significado General |
| :---: | :--- | :--- |
| **1XX** | **Informativos** | La petición fue recibida y el proceso continúa. |
| **2XX** | **Éxito (Success)** | La acción fue recibida, entendida y aceptada con éxito. |
| **3XX** | **Redirección** | Se requiere una acción adicional por parte del cliente para completar la solicitud. |
| **4XX** | **Error del Cliente** | La solicitud contiene sintaxis incorrecta o no puede ser procesada por el cliente. |
| **5XX** | **Error del Servidor** | El servidor falló al intentar completar una solicitud aparentemente válida. |

---

## 2. Códigos Más Frecuentes (OverAPI Breakdown)

### 🔹 2XX: Éxito
- `200 OK`: La petición fue exitosa y se entrega el documento HTML solicitado.
- `201 Created`: Un nuevo recurso fue creado con éxito (típico tras un formulario `POST`).
- `204 No Content`: La petición se procesó exitosamente pero no devuelve cuerpo HTML.

### 🔹 3XX: Redirección
- `301 Moved Permanently`: La página cambió de URL definitivamente; los buscadores actualizan sus índices a la nueva ruta.
- `302 Found` / `307 Temporary Redirect`: Redirección temporal.
- `304 Not Modified`: El documento en la caché del navegador sigue vigente; no se vuelve a descargar.

### 🔹 4XX: Errores del Cliente
- `400 Bad Request`: Petición mal formada o datos inválidos en el formulario.
- `401 Unauthorized`: Requiere autenticación de usuario (login).
- `403 Forbidden`: Acceso denegado (el usuario está autenticado pero no tiene permisos).
- `404 Not Found`: La página solicitada no existe en el servidor.
- `405 Method Not Allowed`: Se intentó usar un método no admitido (ej. enviar `POST` a una página estática que solo acepta `GET`).
- `429 Too Many Requests`: Se excedió el límite de peticiones (Rate Limiting).

### 🔹 5XX: Errores del Servidor
- `500 Internal Server Error`: Ocurrió una excepción no controlada en el código del backend.
- `502 Bad Gateway`: El servidor proxy o gateway recibió una respuesta inválida del servidor aguas arriba.
- `503 Service Unavailable`: El servidor está temporalmente sobrecargado o en mantenimiento.
- `504 Gateway Timeout`: El servidor proxy no recibió respuesta a tiempo del backend.
