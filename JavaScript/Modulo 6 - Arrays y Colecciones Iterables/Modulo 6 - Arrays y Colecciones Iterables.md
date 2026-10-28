# 📖 Módulo 6: Arrays y Colecciones Iterables (Array, Set & Map)

Los arrays y estructuras coleccionables (`Set` y `Map`) son fundamentales para manipular y transformar datos en aplicaciones modernas.

---

## 1. Métodos Mutables de Array
Modifican el array original en memoria:
- `push(...items)`: Agrega al final / `pop()`: Remueve del final.
- `unshift(...items)`: Agrega al inicio / `shift()`: Remueve del inicio.
- `reverse()`: Invierte el orden.
- `sort(compareFn)`: Ordena in-place. Para números: `(a, b) => a - b`.
- `splice(inicio, conteo, ...nuevos)`: Elimina y/o inserta en cualquier posición.

---

## 2. Métodos Inmutables y Búsqueda
Devuelven un nuevo resultado sin alterar el original:
- `slice(inicio, fin)`: Copia una sección del array.
- `concat(...otros)` o Spread `[...arr1, ...arr2]`: Une arreglos.
- `join(separador)`: Convierte el array en un string.
- `includes(item)` / `indexOf(item)`: Comprueba existencia o índice.

---

## 3. Métodos de Orden Superior (Higher-Order Functions)
Iteran mediante funciones callback para programar de forma declarativa:
- `forEach(item => ...)`: Recorre sin retorno.
- `map(item => transformacion)`: Transforma cada elemento a un nuevo array.
- `filter(item => condicion)`: Filtra y retorna los que cumplan la condición `true`.
- `reduce((acumulador, item) => ..., valorInicial)`: Reduce todo el array a un único valor (ej. total acumulado).
- `find(item => condicion)` / `findIndex(condicion)`: Retorna el primer elemento o índice que coincida.
- `some(condicion)` / `every(condicion)`: Valida si al menos uno o todos cumplen la condición.

---

## 4. Colecciones Set y Map (ES6)
- **`Set`**: Colección de elementos únicos (elimina duplicados automáticamente):
  - `.add(v)`, `.has(v)`, `.delete(v)`, `.size`.
- **`Map`**: Diccionario de pares clave-valor donde la clave puede ser cualquier tipo de dato (incluso objetos o funciones):
  - `.set(k, v)`, `.get(k)`, `.has(k)`, `.delete(k)`, `.size`.

---

## 🛠️ Ejercicios Prácticos del Módulo (1 a 1 por tema)

1. [01_metodos_mutables.js](./01_metodos_mutables.js):
   - **1.1** Agregar y quitar con `push`, `pop`, `shift`, `unshift`.
   - **1.2** Ordenamiento numérico correcto con `.sort((a, b) => a - b)`.
   - **1.3** Inserción y reemplazo quirúrgico con `.splice()`.

2. [02_metodos_inmutables.js](./02_metodos_inmutables.js):
   - **2.1** Extracción con `.slice()` y clonación con spread `[...]`.
   - **2.2** Unión con `.join(' - ')` y búsqueda con `.includes()`.

3. [03_orden_superior.js](./03_orden_superior.js):
   - **3.1** Transformación de productos con `.map()`.
   - **3.2** Filtrado por precio con `.filter()`.
   - **3.3** Cálculo del costo total acumulado con `.reduce()`.
   - **3.4** Búsqueda de un usuario con `.find()`.

4. [04_set_y_map.js](./04_set_y_map.js):
   - **4.1** Eliminación instantánea de duplicados usando `new Set()`.
   - **4.2** Almacenamiento clave-valor estructurado con `new Map()`.

---

### 💻 Para probar cada archivo en tu terminal:
```bash
node "JavaScript/Modulo 6 - Arrays y Colecciones Iterables/01_metodos_mutables.js"
node "JavaScript/Modulo 6 - Arrays y Colecciones Iterables/02_metodos_inmutables.js"
node "JavaScript/Modulo 6 - Arrays y Colecciones Iterables/03_orden_superior.js"
node "JavaScript/Modulo 6 - Arrays y Colecciones Iterables/04_set_y_map.js"
```
