# 📖 Módulo 11: Seguridad y Criptografía (Crypto Module)

Módulo nativo que provee funciones criptográficas seguras: hashes, HMAC, cifrado simétrico y asimétrico, y generación de números aleatorios seguros.

---

## 1. Hashes y Firmas HMAC
- `crypto.createHash('sha256').update(datos).digest('hex')`: Genera una huella digital irreversible.
- `crypto.createHmac('sha256', claveSecreta).update(datos).digest('hex')`: Hash autenticado con clave.

---

## 2. Generación Segura y Cifrado
- `crypto.randomBytes(longitud)`: Bytes criptográficamente seguros para tokens o salts.
- `crypto.createCipheriv()` y `crypto.createDecipheriv()`: Cifrado y descifrado simétrico (ej. AES-256-CBC).

---

## 🛠️ Ejercicios Prácticos del Módulo (1 a 1 por tema)

1. [01_hashes_crypto.js](./01_hashes_crypto.js):
   - **1.1** Generar un hash SHA-256 de una contraseña.

2. [02_cifrado_aes.js](./02_cifrado_aes.js):
   - **2.1** Generar un token aleatorio con `randomBytes()`.
