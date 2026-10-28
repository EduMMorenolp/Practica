# Módulo 5: Drizzle Queries, Filtros y Relaciones

## 🎯 Objetivo
Aprender a realizar consultas complejas en **Drizzle ORM** utilizando sus operadores de filtrado tipados (`eq`, `gt`, `like`, `between`, `and`, `or`), ordenamiento con `desc()` / `asc()`, paginación con `limit()` y `offset()`, y uniones relacionales multi-tabla mediante `.leftJoin()`.

---

## 1. Operadores de Expresión en Drizzle

Drizzle exporta operadores estándar desde el paquete raíz `drizzle-orm`:

```javascript
const { eq, ne, gt, gte, lt, lte, between, like, inArray, and, or, desc, asc } = require('drizzle-orm');
```

| Operador | Equivalente SQL | Ejemplo en Drizzle |
| :--- | :--- | :--- |
| `eq(columna, valor)` | `=` | `eq(productos.activo, true)` |
| `gt(columna, valor)` | `>` | `gt(productos.precio, 100)` |
| `gte(columna, valor)` | `>=` | `gte(productos.stock, 10)` |
| `between(columna, a, b)` | `BETWEEN a AND b` | `between(productos.precio, 20, 80)` |
| `like(columna, patron)` | `LIKE patron` | `like(productos.nombre, '%Gamer%')` |
| `inArray(columna, array)` | `IN (...)` | `inArray(productos.categoria, ['Audio', 'Video'])` |
| `and(cond1, cond2)` | `AND` | `and(gt(precio, 50), eq(activo, true))` |
| `or(cond1, cond2)` | `OR` | `or(eq(categoria, 'A'), eq(categoria, 'B'))` |

---

## 2. Consultas Filtradas y Ordenadas

```javascript
const productosFiltrados = await db
  .select({
    id: productos.id,
    nombre: productos.nombre,
    precio: productos.precio
  })
  .from(productos)
  .where(
    and(
      between(productos.precio, 30, 200),
      eq(productos.activo, true)
    )
  )
  .orderBy(desc(productos.precio))
  .limit(5);
```

---

## 3. Uniones Relacionales con `.leftJoin()`

En Drizzle, los `JOIN` son totalmente explícitos y transparentes, reflejando fielmente la sintaxis SQL:

```javascript
const pedidosConClientes = await db
  .select({
    pedidoId: pedidos.id,
    monto: pedidos.total,
    nombreCliente: clientes.nombre,
    emailCliente: clientes.email
  })
  .from(pedidos)
  .leftJoin(clientes, eq(pedidos.clienteId, clientes.id));
```
*(El resultado es un array de objetos con las propiedades tipadas que definiste en el `select`).*
