# Módulo 4: Drizzle ORM Esquemas y Tablas

## 🎯 Objetivo
Comprender la filosofía de diseño de **Drizzle ORM**, el ORM moderno ligero y *TypeScript/JS-First*, aprendiendo a definir tablas y esquemas fuertemente tipados con `sqliteTable`, aplicar restricciones (`notNull`, `unique`, `default`), e inicializar el cliente para realizar operaciones de inserción y lectura directa.

---

## 1. La Filosofía de Drizzle ORM

A diferencia de los ORMs tradicionales (como Sequelize o TypeORM, que introducen capas complejas de abstracción y estados en memoria con métodos mágicos), Drizzle sigue una regla simple:
> **"If you know SQL, you know Drizzle"** (Si sabes SQL, sabes Drizzle).

### Ventajas Clave de Drizzle:
1. **Cero Sobrecarga (*Zero Overhead*):** Sin clases pesadas ni seguimiento de entidades en memoria. Las consultas se traducen 1 a 1 a SQL nativo.
2. **Predecible y Transparente:** Tú controlas exactamente qué columnas se seleccionan y qué queries se ejecutan.
3. **Máxima Seguridad de Tipos:** Inferencia automática de tipos a partir del esquema.

---

## 2. Definición de Esquemas con `sqliteTable`

En Drizzle, cada tabla se define como un objeto plano mediante la función correspondiente al dialecto (en este caso, `sqliteTable` de `drizzle-orm/sqlite-core`):

```javascript
const { sqliteTable, text, integer, real } = require('drizzle-orm/sqlite-core');

const productos = sqliteTable('productos', {
  // Clave primaria auto-incrementable
  id: integer('id').primaryKey({ autoIncrement: true }),

  // Texto no nulo
  nombre: text('nombre').notNull(),

  // Texto único
  sku: text('sku').notNull().unique(),

  // Número real con valor por defecto
  precio: real('precio').notNull(),

  // Entero con default
  stock: integer('stock').default(0),

  // Booleano (almacenado como entero 0 o 1) con default
  activo: integer('activo', { mode: 'boolean' }).default(true)
});
```

---

## 3. Conexión del Cliente Drizzle

Drizzle se desacopla del driver de base de datos. Solo envuelve tu cliente existente:

```javascript
const { drizzle } = require('drizzle-orm/better-sqlite3'); // o cliente en memoria
const Database = require('better-sqlite3'); // o sqlite3 nativo

const sqlite = new Database(':memory:');
const db = drizzle(sqlite);
```

---

## 4. Inserción y Selección Básica

### 4.1 Inserción con `db.insert().values()`
```javascript
// Inserción individual
await db.insert(productos).values({
  nombre: 'Teclado Mecánico',
  sku: 'TEC-01',
  precio: 75.00
});

// Inserción masiva
await db.insert(productos).values([
  { nombre: 'Mouse', sku: 'MOU-01', precio: 25.00 },
  { nombre: 'Monitor', sku: 'MON-01', precio: 220.00 }
]);
```

### 4.2 Selección con `db.select().from()`
```javascript
// Seleccionar todas las columnas
const todosLosProductos = await db.select().from(productos);

// Seleccionar columnas específicas
const catalogo = await db.select({
  id: productos.id,
  titulo: productos.nombre,
  costo: productos.precio
}).from(productos);
```
