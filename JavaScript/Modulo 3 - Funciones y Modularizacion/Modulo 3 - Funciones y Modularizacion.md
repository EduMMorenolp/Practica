# 📖 Módulo 3: Funciones y Modularización

Las funciones son los bloques fundamentales de construcción en JavaScript: encapsulan lógica reutilizable, aíslan variables en su propio ámbito y pueden pasarse como valores.

---

## 1. Declaración y Expresiones de Función

Existen dos formas principales de definir funciones clásicas:

### A. Declaración tradicional (Hoisted)
Se procesa antes de ejecutar el código (*hoisting*), por lo que puede llamarse antes de su definición:
```javascript
function sumar(a, b) {
  return a + b;
}
```

### B. Expresión de función
Se asigna una función anónima o nombrada a una variable (`const` / `let`). No tiene hoisting:
```javascript
const multiplicar = function(a, b) {
  return a * b;
};
```

---

## 2. Parámetros, Argumentos y Retorno

- **Parámetros por defecto**: Asignan un valor inicial si no se pasa argumento o se pasa `undefined`.
- **Rest Parameters (`...args`)**: Agrupa un número indeterminado de argumentos en un array real.
- **Retorno (`return`)**: Devuelve un resultado e interrumpe inmediatamente la ejecución de la función.

```javascript
function crearUsuario(nombre = "Invitado", rol = "USER", ...habilidades) {
  return {
    nombre,
    rol,
    habilidades // array con todos los argumentos extra
  };
}
```

---

## 3. Funciones Flecha (Arrow Functions - ES6)

Sintaxis moderna, más corta y con retorno implícito en una sola línea:

```javascript
// Sintaxis básica:
const doble = n => n * 2;
const suma = (a, b) => a + b;

// Con cuerpo de bloque:
const dividir = (a, b) => {
  if (b === 0) return "Error: división por cero";
  return a / b;
};
```

> **Diferencia crítica de Arrow Functions**:
> - **NO tienen su propio `this`**: Heredan el `this` del contexto exterior léxico (*lexical `this`*).
> - **NO tienen el objeto `arguments`**: Usa siempre `...args`.

---

## 4. Alcance (Scope), Closures y Contexto (`call`, `apply`, `bind`)

- **Scope**: Las variables declaradas dentro de una función no son accesibles desde fuera.
- **Closure**: Una función que "recuerda" y mantiene acceso a las variables de su función padre, incluso después de que la función padre haya terminado de ejecutarse.

```javascript
function crearContador() {
  let cuenta = 0; // Variable privada protegida por el closure
  return function() {
    cuenta++;
    return cuenta;
  };
}

const miContador = crearContador();
miContador(); // 1
miContador(); // 2
```

- **Manipulación de contexto (`this`)**:
  - `fn.call(contexto, arg1, arg2)`: Ejecuta inmediatamente pasando argumentos separados por coma.
  - `fn.apply(contexto, [args])`: Ejecuta inmediatamente pasando argumentos como array.
  - `fn.bind(contexto)`: No ejecuta; devuelve una **nueva función** con el `this` fijado permanentemente.

---

## 🛠️ Ejercicios Prácticos del Módulo (1 a 1 por tema)

1. [01_declaracion_y_expresiones.js](./01_declaracion_y_expresiones.js):
   - **1.1** Declaración tradicional de función.
   - **1.2** Expresión de función asignada a `const`.
   - **1.3** Comprobación práctica de *hoisting*.

2. [02_parametros_y_retorno.js](./02_parametros_y_retorno.js):
   - **2.1** Parámetros por defecto para valores opcionales.
   - **2.2** Uso de Parámetros Rest (`...numeros`) para cálculos variables.
   - **2.3** Salida anticipada con `return` (*early return*).

3. [03_funciones_flecha.js](./03_funciones_flecha.js):
   - **3.1** Conversión de funciones clásicas a arrow functions.
   - **3.2** Retorno implícito de expresiones y objetos literales `() => ({ id: 1 })`.
   - **3.3** Demostración del comportamiento léxico de `this`.

4. [04_scope_closures_y_contexto.js](./04_scope_closures_y_contexto.js):
   - **4.1** Ámbito local vs global (*Scope Chain*).
   - **4.2** Creación de un generador / contador privado mediante *Closure*.
   - **4.3** Fijación de contexto con `.call()` y `.bind()`.

---

### 💻 Para probar cada archivo en tu terminal:
```bash
node "JavaScript/Modulo 3/01_declaracion_y_expresiones.js"
node "JavaScript/Modulo 3/02_parametros_y_retorno.js"
node "JavaScript/Modulo 3/03_funciones_flecha.js"
node "JavaScript/Modulo 3/04_scope_closures_y_contexto.js"
```
