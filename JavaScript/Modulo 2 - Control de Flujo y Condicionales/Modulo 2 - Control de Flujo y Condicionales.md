# 📖 Módulo 2: Control de Flujo y Estructuras Condicionales

En este módulo aprenderás a controlar el camino que toma la ejecución de tu código según condiciones lógicas y a repetir instrucciones mediante bucles.

---

## 1. Condicionales If / Else

Evalúa si una expresión es verdadera (`truthy`) o falsa (`falsy`):

```javascript
const puntaje = 85;

if (puntaje >= 90) {
  console.log("Calificación: A");
} else if (puntaje >= 75) {
  console.log("Calificación: B");
} else {
  console.log("Calificación: C");
}
```

> **Consejo pro (Early Return)**: En funciones, sal tan pronto como no se cumpla la condición para evitar anidar `if` dentro de `if`.

---

## 2. Operador Ternario

Es la forma abreviada de un `if / else` en una sola línea que devuelve un valor:

```javascript
// Sintaxis: condicion ? valorSiVerdadero : valorSiFalso
const edad = 20;
const acceso = edad >= 18 ? "Permitido" : "Denegado";
```

---

## 3. Estructura Switch / Case

Ideal cuando una misma variable se compara con múltiples valores específicos:

```javascript
const dia = "LUNES";

switch (dia) {
  case "LUNES":
  case "MARTES":
    console.log("Comienzo de semana");
    break; // ¡Esencial para no caer en el siguiente caso!
  case "VIERNES":
    console.log("¡Fin de semana!");
    break;
  default:
    console.log("Día regular");
}
```

---

## 4. Bucles Básicos: While y Do...While

- **`while`**: Evalúa la condición **antes** de entrar al bloque (puede ejecutarse 0 veces).
- **`do...while`**: Ejecuta el bloque **al menos una vez** antes de evaluar la condición.

```javascript
let i = 0;
while (i < 3) {
  console.log("While:", i);
  i++;
}

let j = 0;
do {
  console.log("Do-While:", j);
  j++;
} while (j < 3);
```

---

## 5. Bucle For Clásico y Control (break / continue)

El bucle por excelencia cuando conoces la cantidad de iteraciones:

```javascript
for (let i = 0; i < 5; i++) {
  if (i === 2) continue; // Salta la iteración actual y pasa a i = 3
  if (i === 4) break;    // Corta el bucle por completo
  console.log(i);
}
```

---

## 🛠️ Ejercicios Prácticos del Módulo (1 a 1 por tema)

1. [01_condicionales_if_else.js](./01_condicionales_if_else.js):
   - **1.1** `if / else` básico.
   - **1.2** `else if` con rangos de temperatura.
   - **1.3** Condiciones múltiples combinadas con `&&` y `||`.

2. [02_operador_ternario.js](./02_operador_ternario.js):
   - **2.1** Asignación simple con ternario.
   - **2.2** Ternario para imprimir mensajes directos.
   - **2.3** Formato singular/plural condicional.

3. [03_switch_case.js](./03_switch_case.js):
   - **3.1** Días de la semana o estados de un pedido.
   - **3.2** Agrupación de casos (*fall-through* controlado).
   - **3.3** Cláusula `default` de fallback.

4. [04_bucles_while_dowhile.js](./04_bucles_while_dowhile.js):
   - **4.1** Contador ascendente con `while`.
   - **4.2** Generación hasta cumplir condición.
   - **4.3** `do...while` garantizando al menos una corrida.

5. [05_bucle_for_break_continue.js](./05_bucle_for_break_continue.js):
   - **5.1** Bucle `for` clásico para tabla de multiplicar.
   - **5.2** Uso de `continue` para saltar pares o impares.
   - **5.3** Uso de `break` para detener una búsqueda.

---

### 💻 Para probar cada archivo en tu terminal:
```bash
node "JavaScript/Modulo 2/01_condicionales_if_else.js"
node "JavaScript/Modulo 2/02_operador_ternario.js"
node "JavaScript/Modulo 2/03_switch_case.js"
node "JavaScript/Modulo 2/04_bucles_while_dowhile.js"
node "JavaScript/Modulo 2/05_bucle_for_break_continue.js"
```
