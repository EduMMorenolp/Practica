# 📖 Módulo 4: Cadenas de Texto y Expresiones Regulares (String & RegExp)

Las cadenas de texto representan secuencias de caracteres, y las expresiones regulares (RegExp) permiten validar, buscar y transformar patrones complejos dentro de ellas.

---

## 1. Propiedades y Métodos de String

Los strings en JavaScript son **inmutables** (los métodos devuelven un nuevo string, no modifican el original).

### Métodos principales:
- `.length`: Longitud de la cadena.
- `.charAt(i)` / `str[i]`: Obtener el carácter en la posición `i`.
- `.indexOf(sub)` / `.lastIndexOf(sub)`: Índice de la primera o última aparición (`-1` si no existe).
- `.includes(sub)`: Comprueba si contiene una subcadena (devuelve `true` o `false`).
- `.startsWith(sub)` / `.endsWith(sub)`: Verifica el inicio o fin del texto.
- `.slice(inicio, fin)`: Extrae una porción (soporta índices negativos).
- `.toLowerCase()` / `.toUpperCase()`: Convierte mayúsculas y minúsculas.
- `.trim()`: Elimina espacios en blanco en ambos extremos.
- `.replace(patron, nuevo)` / `.replaceAll()`: Reemplaza una o todas las coincidencias.
- `.split(separador)`: Divide la cadena en un array según el separador.

```javascript
const email = "  Usuario@Dominio.com  ";
const limpio = email.trim().toLowerCase(); // "usuario@dominio.com"
const partes = limpio.split("@");          // ["usuario", "dominio.com"]
```

---

## 2. Template Literals (ES6)

Delimitados por acentos graves (backticks: `` `...` ``):
- **Interpolación**: Inserta variables y expresiones arbitrarias con `${expresion}`.
- **Multilínea**: Permite saltos de línea naturales sin necesidad de `\n`.

```javascript
const producto = "Monitor 4K";
const precio = 350;
const factura = `Resumen:
- Producto: ${producto}
- Total con IVA: $${precio * 1.21}`;
```

---

## 3. Expresiones Regulares (RegExp)

Un objeto que describe un patrón de caracteres para validación y búsqueda avanzada.

### Sintaxis y Modificadores (Flags):
- `/patron/flags` (ej. `/abc/gi`)
  - `i`: Ignorar mayúsculas y minúsculas (*case-insensitive*).
  - `g`: Búsqueda global (no se detiene en la primera coincidencia).
  - `m`: Multilínea.

### Clases y Metacaracteres habituales:
- `\d`: Dígito (`[0-9]`).
- `\w`: Alfanumérico (`[a-zA-Z0-9_]`).
- `\s`: Espacio en blanco.
- `.`: Cualquier carácter excepto salto de línea.
- `^`: Inicio de la cadena.
- `$`: Fin de la cadena.

### Cuantificadores:
- `+`: 1 o más veces.
- `*`: 0 o más veces.
- `?`: 0 o 1 vez (opcional).
- `{n}`: Exactamente `n` veces.
- `{n,m}`: Entre `n` y `m` veces.

### Métodos Clave:
```javascript
const regexEmail = /^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/;
regexEmail.test("contacto@empresa.com"); // true

const texto = "Pedidos: #101, #102 y #103";
const codigos = texto.match(/#\d+/g);     // ["#101", "#102", "#103"]
```

---

## 🛠️ Ejercicios Prácticos del Módulo (1 a 1 por tema)

1. [01_metodos_string.js](./01_metodos_string.js):
   - **1.1** Longitud y acceso por índice.
   - **1.2** Búsqueda con `includes()`, `indexOf()` y `endsWith()`.
   - **1.3** Limpieza y transformación con `trim()`, `toLowerCase()` y `slice()`.
   - **1.4** Sustitución y división con `replace()` y `split()`.

2. [02_template_literals.js](./02_template_literals.js):
   - **2.1** Interpolación básica de datos y cálculos matemáticos.
   - **2.2** Generación de plantillas multilínea (HTML / Texto).

3. [03_expresiones_regulares.js](./03_expresiones_regulares.js):
   - **3.1** Validación de formato de teléfono o código postal con `.test()`.
   - **3.2** Extracción de valores con `.match()` y flag global `g`.
   - **3.3** Enmascaramiento y reemplazo con `.replace()` y RegExp.

---

### 💻 Para probar cada archivo en tu terminal:
```bash
node "JavaScript/Modulo 4/01_metodos_string.js"
node "JavaScript/Modulo 4/02_template_literals.js"
node "JavaScript/Modulo 4/03_expresiones_regulares.js"
```
