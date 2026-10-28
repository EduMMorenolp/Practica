# 📖 Módulo 5: Números, Matemáticas y Fechas (Number, Math & Date)

En este módulo dominarás la representación numérica, operaciones matemáticas de precisión y el manejo completo del tiempo y fechas en JavaScript.

---

## 1. Objeto Number y Métodos Globales

- Constantes clave: `Number.MAX_SAFE_INTEGER`, `Number.MIN_VALUE`, `Number.NaN`, `Number.EPSILON`.
- Formateo numérico:
  - `num.toFixed(decimales)`: Fija decimales y devuelve un string (ej. `(3.14159).toFixed(2)` -> `"3.14"`).
  - `num.toPrecision(cifras)`: Formatea a una longitud total de dígitos significativos.
- Parsing y validación estricta (ES6):
  - `Number.parseInt(str, radix)` y `Number.parseFloat(str)`
  - `Number.isInteger(val)` y `Number.isNaN(val)` (más estricto que el global `isNaN`).

---

## 2. Objeto Math (Funciones Matemáticas)

`Math` es un objeto estático con utilidades matemáticas puras:
- Redondeo:
  - `Math.round(x)`: Redondeo al entero más cercano.
  - `Math.floor(x)`: Redondeo hacia abajo.
  - `Math.ceil(x)`: Redondeo hacia arriba.
  - `Math.trunc(x)`: Elimina la parte decimal.
- Límites y potencias:
  - `Math.min(...valores)` / `Math.max(...valores)`
  - `Math.pow(base, exp)` y `Math.sqrt(x)` / `Math.abs(x)`
- Aleatoriedad:
  - `Math.random()`: Devuelve un número pseudoaleatorio entre `[0, 1)`.
  - Fórmula para entero entre `min` y `max`: `Math.floor(Math.random() * (max - min + 1)) + min`.

---

## 3. Objeto Date (Manejo de Fechas y Tiempos)

Representa un momento único en el tiempo con precisión de milisegundos desde el 1 de enero de 1970 (Epoch):
- Creación: `new Date()`, `new Date("2026-10-27T12:00:00")`, `Date.now()`.
- Lectura (*Getters*):
  - `getFullYear()`: Año de 4 dígitos.
  - `getMonth()`: Mes (0 = Enero, 11 = Diciembre).
  - `getDate()`: Día del mes (1 - 31).
  - `getDay()`: Día de la semana (0 = Domingo, 6 = Sábado).
  - `getHours()`, `getMinutes()`, `getSeconds()`, `getTime()`.
- Formateo: `toISOString()`, `toLocaleDateString()`, `toLocaleTimeString()`.

---

## 🛠️ Ejercicios Prácticos del Módulo (1 a 1 por tema)

1. [01_metodos_number.js](./01_metodos_number.js):
   - **1.1** Formateo con `.toFixed(2)` para monedas y `.toPrecision()`.
   - **1.2** Conversión con `parseInt()` y `parseFloat()`.
   - **1.3** Validación segura con `Number.isInteger()` y `Number.isNaN()`.

2. [02_objeto_math.js](./02_objeto_math.js):
   - **2.1** Redondeo con `round()`, `floor()`, `ceil()` y `trunc()`.
   - **2.2** Cálculo de extremos con `Math.min()` y `Math.max()`.
   - **2.3** Generación de enteros aleatorios en un rango `[min, max]`.

3. [03_objeto_date.js](./03_objeto_date.js):
   - **3.1** Extracción de año, mes, día y hora actual.
   - **3.2** Cálculo de diferencia en días entre dos fechas (`getTime()`).
   - **3.3** Formateo localizado con `.toLocaleDateString('es-ES')`.

---

### 💻 Para probar cada archivo en tu terminal:
```bash
node "JavaScript/Modulo 5 - Numeros Matematicas y Fechas/01_metodos_number.js"
node "JavaScript/Modulo 5 - Numeros Matematicas y Fechas/02_objeto_math.js"
node "JavaScript/Modulo 5 - Numeros Matematicas y Fechas/03_objeto_date.js"
```
