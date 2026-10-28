# 📖 Módulo 13: Almacenamiento Web y APIs Modernas del Navegador

Aprende a persistir datos en el navegador del cliente de forma síncrona (`localStorage`, `sessionStorage`, `Cookies`) o asíncrona estructurada (`IndexedDB`).

---

## 1. Web Storage API (`localStorage` & `sessionStorage`)
- **`localStorage`**: Almacena datos sin fecha de expiración (persiste aunque se cierre el navegador).
- **`sessionStorage`**: Los datos se borran cuando el usuario cierra la pestaña o ventana.
- Métodos estándar:
  - `setItem("clave", "valor")`: Guarda un string.
  - `getItem("clave")`: Recupera el valor (`null` si no existe).
  - `removeItem("clave")`: Borra una clave específica.
  - `clear()`: Limpia todo el almacenamiento del dominio.
- Serialización de Objetos:
  - Guardar: `localStorage.setItem("usuario", JSON.stringify(objeto))`
  - Leer: `const objeto = JSON.parse(localStorage.getItem("usuario"))`

---

## 2. Cookies y Opciones de Seguridad
- Formato clave-valor en texto plano compartido con el servidor en cada petición HTTP:
- `document.cookie = "token=xyz123; max-age=3600; path=/; SameSite=Strict; Secure"`

---

## 3. Web APIs Modernas
- **Clipboard API**: Copiar al portapapeles con `navigator.clipboard.writeText("texto")`.
- **Intersection Observer**: Detección de visibilidad de elementos para *lazy loading* y scroll infinito.

---

## 🛠️ Ejercicios Prácticos del Módulo (1 a 1 por tema)

1. [01_localstorage_y_sessionstorage.js](./01_localstorage_y_sessionstorage.js):
   - **1.1** Serialización y parseo seguro con `JSON.stringify` y `JSON.parse`.
   - **1.2** CRUD completo en almacenamiento (crear, leer, actualizar, borrar).

2. [02_cookies.js](./02_cookies.js):
   - **2.1** Formateo de cookies con expiración y rutas.

3. [03_apis_modernas.js](./03_apis_modernas.js):
   - **3.1** Simulación de copia al portapapeles y observadores de intersección.

---

### 💻 Para probar cada archivo en tu terminal:
```bash
node "JavaScript/Modulo 13 - Almacenamiento Web y APIs Modernas del Navegador/01_localstorage_y_sessionstorage.js"
node "JavaScript/Modulo 13 - Almacenamiento Web y APIs Modernas del Navegador/02_cookies.js"
node "JavaScript/Modulo 13 - Almacenamiento Web y APIs Modernas del Navegador/03_apis_modernas.js"
```
