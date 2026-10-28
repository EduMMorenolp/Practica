# 🗺️ Temario de ORMs & Query Builders (Sequelize, Drizzle, Prisma)

Ruta de aprendizaje estructurada, práctica y progresiva para dominar el mapeo objeto-relacional (**ORM**) y los constructores de consultas tipadas (**Query Builders**) en el ecosistema Node.js moderno, utilizando **Sequelize**, **Drizzle ORM** y **Prisma Client**.

---

## 📚 Roadmap de Módulos

### 🔹 [Módulo 1: Sequelize Modelos y Sincronización](./Modulo%201%20-%20Sequelize%20Modelos%20y%20Sincronizacion/Modulo%201%20-%20Sequelize%20Modelos%20y%20Sincronizacion.md)
Definición de modelos relacionales, tipos de datos (`DataTypes`), restricciones, validaciones, ciclo de vida de instancias y sincronización con el motor.
- **Teoría:** [Modulo 1 - Sequelize Modelos y Sincronizacion.md](./Modulo%201%20-%20Sequelize%20Modelos%20y%20Sincronizacion/Modulo%201%20-%20Sequelize%20Modelos%20y%20Sincronizacion.md)
- **Ejercicios Prácticos:**
  - [01_definicion_modelos.js](./Modulo%201%20-%20Sequelize%20Modelos%20y%20Sincronizacion/01_definicion_modelos.js) — Definición formal de esquemas con `sequelize.define()` y `DataTypes`.
  - [02_instancias_y_sync.js](./Modulo%201%20-%20Sequelize%20Modelos%20y%20Sincronizacion/02_instancias_y_sync.js) — Creación simple con `.create()`, inserción masiva con `.bulkCreate()` y persistencia.

---

### 🔹 [Módulo 2: Sequelize Consultas y Operadores Op](./Modulo%202%20-%20Sequelize%20Consultas%20y%20Operadores%20Op/Modulo%202%20-%20Sequelize%20Consultas%20y%20Operadores%20Op.md)
Búsquedas con `findAll()`, `findByPk()`, `findOne()`, filtrado fino con operadores `Op` (`Op.gt`, `Op.between`, `Op.like`, `Op.or`), ordenamiento y actualizaciones.
- **Teoría:** [Modulo 2 - Sequelize Consultas y Operadores Op.md](./Modulo%202%20-%20Sequelize%20Consultas%20y%20Operadores%20Op/Modulo%202%20-%20Sequelize%20Consultas%20y%20Operadores%20Op.md)
- **Ejercicios Prácticos:**
  - [01_queries_basicas_crud.js](./Modulo%202%20-%20Sequelize%20Consultas%20y%20Operadores%20Op/01_queries_basicas_crud.js) — Lectura por clave primaria, actualización (`Model.update()`) y borrado (`Model.destroy()`).
  - [02_operadores_y_filtros_op.js](./Modulo%202%20-%20Sequelize%20Consultas%20y%20Operadores%20Op/02_operadores_y_filtros_op.js) — Consultas complejas combinando operadores de rango, coincidencias y ordenamiento.

---

### 🔹 [Módulo 3: Sequelize Asociaciones y Relaciones](./Modulo%203%20-%20Sequelize%20Asociaciones%20y%20Relaciones/Modulo%203%20-%20Sequelize%20Asociaciones%20y%20Relaciones.md)
Modelado de relaciones relacionales con `hasOne`, `belongsTo`, `hasMany` y `belongsToMany`, carga ansiosa (*Eager Loading*) con `include`.
- **Teoría:** [Modulo 3 - Sequelize Asociaciones y Relaciones.md](./Modulo%203%20-%20Sequelize%20Asociaciones%20y%20Relaciones/Modulo%203%20-%20Sequelize%20Asociaciones%20y%20Relaciones.md)
- **Ejercicios Prácticos:**
  - [01_asociaciones_1_a_n.js](./Modulo%203%20-%20Sequelize%20Asociaciones%20y%20Relaciones/01_asociaciones_1_a_n.js) — Relación 1-a-Muchos (`Usuario.hasMany(Pedido)`) e inclusión con `include`.
  - [02_asociaciones_n_a_n.js](./Modulo%203%20-%20Sequelize%20Asociaciones%20y%20Relaciones/02_asociaciones_n_a_n.js) — Relación Muchos-a-Muchos con tabla intermedia (`through`).

---

### 🔹 [Módulo 4: Drizzle ORM Esquemas y Tablas](./Modulo%204%20-%20Drizzle%20ORM%20Esquemas%20y%20Tablas/Modulo%204%20-%20Drizzle%20ORM%20Esquemas%20y%20Tablas.md)
El ORM ligero y type-safe de moda: esquemas explícitos, columnas declarativas (`integer`, `text`, `real`), defaults y constraints.
- **Teoría:** [Modulo 4 - Drizzle ORM Esquemas y Tablas.md](./Modulo%204%20-%20Drizzle%20ORM%20Esquemas%20y%20Tablas/Modulo%204%20-%20Drizzle%20ORM%20Esquemas%20y%20Tablas.md)
- **Ejercicios Prácticos:**
  - [01_drizzle_esquemas_tablas.js](./Modulo%204%20-%20Drizzle%20ORM%20Esquemas%20y%20Tablas/01_drizzle_esquemas_tablas.js) — Definición de tablas relacionales con `sqliteTable`.
  - [02_drizzle_crud_basico.js](./Modulo%204%20-%20Drizzle%20ORM%20Esquemas%20y%20Tablas/02_drizzle_crud_basico.js) — Inserción y lectura utilizando el query builder nativo de Drizzle.

---

### 🔹 [Módulo 5: Drizzle Queries, Filtros y Relaciones](./Modulo%205%20-%20Drizzle%20Queries%20Filtros%20y%20Relaciones/Modulo%205%20-%20Drizzle%20Queries%20Filtros%20y%20Relaciones.md)
Consultas avanzadas en Drizzle con operadores (`eq`, `gt`, `like`, `between`, `and`), ordenamiento y uniones relacionales.
- **Teoría:** [Modulo 5 - Drizzle Queries Filtros y Relaciones.md](./Modulo%205%20-%20Drizzle%20Queries%20Filtros%20y%20Relaciones/Modulo%205%20-%20Drizzle%20Queries%20Filtros%20y%20Relaciones.md)
- **Ejercicios Prácticos:**
  - [01_drizzle_filtros_operadores.js](./Modulo%205%20-%20Drizzle%20Queries%20Filtros%20y%20Relaciones/01_drizzle_filtros_operadores.js) — Filtrado condicional complejo con operadores tipados de Drizzle.
  - [02_drizzle_joins_y_relaciones.js](./Modulo%205%20-%20Drizzle%20Queries%20Filtros%20y%20Relaciones/02_drizzle_joins_y_relaciones.js) — Uniones relacionales con `.leftJoin()` en Drizzle.

---

### 🔹 [Módulo 6: Prisma Schema y Prisma Client](./Modulo%206%20-%20Prisma%20Schema%20y%20Prisma%20Client/Modulo%206%20-%20Prisma%20Schema%20y%20Prisma%20Client.md)
Modelado declarativo con `schema.prisma`, atributos (`@id`, `@default`, `@relation`), y patrones de consulta con la API de Prisma Client (`findMany`, `include`, `select`).
- **Teoría:** [Modulo 6 - Prisma Schema y Prisma Client.md](./Modulo%206%20-%20Prisma%20Schema%20y%20Prisma%20Client/Modulo%206%20-%20Prisma%20Schema%20y%20Prisma%20Client.md)
- **Ejercicios Prácticos:**
  - [01_prisma_schema_modelado.js](./Modulo%206%20-%20Prisma%20Schema%20y%20Prisma%20Client/01_prisma_schema_modelado.js) — Sintaxis, directivas y relaciones en `schema.prisma`.
  - [02_prisma_client_crud.js](./Modulo%206%20-%20Prisma%20Schema%20y%20Prisma%20Client/02_prisma_client_crud.js) — Patrones de consulta tipo Prisma Client, filtros anidados y carga relacional.

---

## ⚡ Cómo Practicar

1. Cada ejercicio es un archivo `.js` ejecutable directamente con Node.js (`node ruta/al/archivo.js`) o mediante el **Practice Hub** en `http://localhost:3000`.
2. Las pruebas corren en un entorno en memoria con SQLite efímero (`:memory:`).
3. Resuelve los retos indicados en los comentarios `// TODO:` y ejecuta para comprobar tu progreso con la **Suite de Validación Automática**.
