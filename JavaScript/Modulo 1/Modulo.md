# 📖 Módulo 1: Fundamentos y Sintaxis Básica

Bienvenido al Módulo 1. Aquí sentamos las bases de JavaScript: cómo imprimir datos, cómo guardarlos en memoria con variables, qué tipos de datos existen y cómo manipularlos mediante operadores.

---

## 1. Salida y Ejecución (`console.log`)

En Node.js y en las herramientas de desarrollo del navegador, el método principal para emitir información y depurar es `console.log()`:

```javascript
console.log("¡Hola, mundo!");
console.info("Información útil");
console.warn("Una advertencia");
console.error("Un error simulado");
```

---

## 2. Variables y Constantes (`let`, `const`, `var`)

JavaScript tiene 3 palabras clave para declarar variables:

| Palabra Clave | Alcance (Scope) | ¿Reasignable? | ¿Redeclarable? | Uso Recomendado |
|---|---|---|---|---|
| `const` | Bloque `{}` | ❌ No | ❌ No | **Por defecto siempre** (si el valor no cambia) |
| `let` | Bloque `{}` | ✔️ Sí | ❌ No | **Cuando el valor deba cambiar** (contadores, acumuladores) |
| `var` | Función / Global | ✔️ Sí | ✔️ Sí | ⚠️ **Evitar en código moderno** (genera bugs por hoisting y falta de alcance de bloque) |

### Ejemplo:
```javascript
const PI = 3.1416; // No se puede reasignar: PI = 3.14; daría TypeError
let puntuacion = 0;
puntuacion += 10; // Totalmente válido
```

---

## 3. Tipos de Datos Primitivos

JavaScript tiene 7 tipos primitivos básicos:

1. **`string`**: Cadenas de texto (`'hola'`, `"mundo"`, `` `template literals` ``).
2. **`number`**: Números enteros y decimales (`42`, `3.14`, `NaN`, `Infinity`).
3. **`boolean`**: Valores de verdad (`true` o `false`).
4. **`undefined`**: Variable declarada pero sin valor asignado.
5. **`null`**: Representa la ausencia intencional de cualquier valor de objeto.
6. **`bigint`**: Enteros arbitrariamente grandes (`9007199254740991n`).
7. **`symbol`**: Identificador único e inmutable.

### El operador `typeof`:
```javascript
console.log(typeof "Hola");     // "string"
console.log(typeof 100);        // "number"
console.log(typeof true);       // "boolean"
console.log(typeof undefined);  // "undefined"
console.log(typeof null);       // "object"  <-- ¡Curiosidad histórica de JS!
```

### Conversión de Tipos (Type Casting):
```javascript
// A número:
const n = Number("123");       // 123
const entero = parseInt("42px"); // 42

// A texto:
const s = String(123);         // "123"

// A booleano:
// Valores 'falsy': 0, "", null, undefined, NaN, false. Todo lo demás es 'truthy'.
Boolean("");  // false
Boolean("Hola"); // true
```

---

## 4. Operadores

### A. Aritméticos
`+` (suma/concatenación), `-` (resta), `*` (multiplicación), `/` (división), `%` (módulo o resto), `**` (exponente).

### B. Asignación
`=`, `+=`, `-=`, `*=`, `/=`.

### C. Comparación Estricta vs Débil
- `===` y `!==`: **Comparación estricta** (compara valor Y tipo de dato). **Siempre usar esta**.
- `==` y `!=`: **Comparación débil** (fuerza conversión de tipos implícita). Ejemplo: `'5' == 5` es `true`, pero `'5' === 5` es `false`.

### D. Operadores Lógicos y Nullish Coalescing
- `&&` (AND): Verdadero si ambos son verdaderos.
- `||` (OR): Verdadero si al menos uno es verdadero.
- `!` (NOT): Invierte el valor booleano.
- `??` (Nullish Coalescing): Devuelve el lado derecho solo si el lado izquierdo es `null` o `undefined` (a diferencia de `||`, respeta `0` y `""`).

```javascript
const username = null ?? "Invitado"; // "Invitado"
const intentos = 0 ?? 3;            // 0 (con || habría dado 3 porque 0 es falsy)
```

---

## 🛠️ Ejercicios Prácticos del Módulo
Para poner en práctica estos conceptos y codear a mano:
1. [01_salidas_y_variables.js](file:///d:/Proyectos/Practice/JavaScript/Modulo%201/01_salidas_y_variables.js)
2. [02_tipos_de_datos.js](file:///d:/Proyectos/Practice/JavaScript/Modulo%201/02_tipos_de_datos.js)
3. [03_operadores.js](file:///d:/Proyectos/Practice/JavaScript/Modulo%201/03_operadores.js)

Para probar cada archivo en tu terminal:
```bash
node "JavaScript/Modulo 1/01_salidas_y_variables.js"
node "JavaScript/Modulo 1/02_tipos_de_datos.js"
node "JavaScript/Modulo 1/03_operadores.js"
```
