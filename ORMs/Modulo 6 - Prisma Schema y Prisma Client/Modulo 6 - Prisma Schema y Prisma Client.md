# Módulo 6: Prisma Schema y Prisma Client

## 🎯 Objetivo
Comprender la arquitectura y el flujo de trabajo de **Prisma**, el ORM declarativo más popular de Node.js y TypeScript: dominar la sintaxis de modelado en `schema.prisma`, atributos (`@id`, `@default`, `@unique`, `@relation`), y aprender los patrones de consulta type-safe de la API de **Prisma Client** (`findMany`, `findUnique`, `create`, `include`, `select`).

---

## 1. La Arquitectura de Prisma

Prisma se diferencia radicalmente de otros ORMs porque utiliza un archivo declarativo central llamado **`schema.prisma`** como la única fuente de verdad (*Single Source of Truth*):

```text
schema.prisma  --->  prisma generate  --->  Prisma Client (JS/TS Autogenerado)
```

1. Defines tus modelos en `schema.prisma`.
2. Prisma genera automáticamente un cliente JavaScript fuertemente tipado adaptado exclusivamente a tu base de datos.
3. Consumes `prisma.modelo.metodo()` con autocompletado y validación total.

---

## 2. Anatomía de `schema.prisma`

Un archivo `schema.prisma` consta de 3 bloques clave:

### 2.1 Datasource y Generator
```prisma
datasource db {
  provider = "sqlite" // Opciones: "postgresql", "mysql", "sqlite", etc.
  url      = "file:./dev.db"
}

generator client {
  provider = "prisma-client-js"
}
```

### 2.2 Modelos y Atributos
```prisma
model Usuario {
  id        Int      @id @default(autoincrement())
  nombre    String
  email     String   @unique
  edad      Int?     // El signo '?' indica que el campo es opcional (NULL)
  activo    Boolean  @default(true)
  creadoEn  DateTime @default(now())
  pedidos   Pedido[] // Relación 1 a N (un usuario tiene muchos pedidos)
}

model Pedido {
  id        Int      @id @default(autoincrement())
  total     Float
  usuarioId Int
  usuario   Usuario  @relation(fields: [usuarioId], references: [id], onDelete: Cascade)
}
```

### Atributos Clave:
- `@id`: Define la clave primaria.
- `@default(...)`: Asigna un valor por defecto (ej. `autoincrement()`, `now()`, `uuid()`).
- `@unique`: Restricción de unicidad.
- `@updatedAt`: Actualiza automáticamente la marca de tiempo al modificar el registro.
- `@relation`: Conecta los campos de clave foránea con la clave primaria del modelo referenciado.

---

## 3. Consultas con Prisma Client

### 3.1 Búsquedas y Filtros
```javascript
// Obtener usuarios activos con email de gmail
const usuarios = await prisma.usuario.findMany({
  where: {
    activo: true,
    email: {
      endsWith: '@gmail.com'
    },
    edad: {
      gte: 18 // Mayor o igual a 18
    }
  },
  orderBy: {
    nombre: 'asc'
  },
  take: 10 // Equivalente a LIMIT 10
});
```

### 3.2 Inclusión de Relaciones (`include` vs `select`)
A diferencia de SQL plano donde debes escribir un `JOIN` manual, en Prisma simplemente declaras qué relaciones deseas incluir:

```javascript
const usuarioConPedidos = await prisma.usuario.findUnique({
  where: { id: 1 },
  include: {
    pedidos: true // Incluye automáticamente el array de pedidos del usuario
  }
});
```
