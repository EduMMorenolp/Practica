# 🗺️ Temario de Bases de Datos & SQL (MySQL)

Ruta de aprendizaje estructurada, práctica y progresiva para dominar **SQL con MySQL**, desde el diseño de esquemas y tipos de datos hasta consultas relacionales complejas, funciones nativas, agrupamiento y subconsultas.

---

## 📚 Roadmap de Módulos

### 🔹 [Módulo 1: MySQL Creación de Tablas y Tipos de Datos](./Modulo%201%20-%20MySQL%20Creacion%20de%20Tablas%20y%20Tipos%20de%20Datos/Modulo%201%20-%20MySQL%20Creacion%20de%20Tablas%20y%20Tipos%20de%20Datos.md)
Aprende a diseñar esquemas relacionales, definir claves primarias, auto-incrementables, restricciones y dominar los tipos de datos en MySQL.
- **Teoría:** [Modulo 1 - MySQL Creacion de Tablas y Tipos de Datos.md](./Modulo%201%20-%20MySQL%20Creacion%20de%20Tablas%20y%20Tipos%20de%20Datos/Modulo%201%20-%20MySQL%20Creacion%20de%20Tablas%20y%20Tipos%20de%20Datos.md)
- **Ejercicios Prácticos:**
  - [01_create_table_tipos.js](./Modulo%201%20-%20MySQL%20Creacion%20de%20Tablas%20y%20Tipos%20de%20Datos/01_create_table_tipos.js) — Creación de tablas, constraints (`PRIMARY KEY`, `NOT NULL`, `UNIQUE`, `DEFAULT`, `CHECK`) y tipos de datos.
  - [02_alter_drop_table.js](./Modulo%201%20-%20MySQL%20Creacion%20de%20Tablas%20y%20Tipos%20de%20Datos/02_alter_drop_table.js) — Modificación de esquemas con `ALTER TABLE` (`ADD`, `DROP`, `MODIFY`) y eliminación segura.

---

### 🔹 [Módulo 2: MySQL Consultas DML y Operadores](./Modulo%202%20-%20MySQL%20Consultas%20DML%20y%20Operadores/Modulo%202%20-%20MySQL%20Consultas%20DML%20y%20Operadores.md)
Manipulación de registros con `INSERT`, `UPDATE`, `DELETE` y filtrado fino con operadores de comparación, lógicos y comodines.
- **Teoría:** [Modulo 2 - MySQL Consultas DML y Operadores.md](./Modulo%202%20-%20MySQL%20Consultas%20DML%20y%20Operadores/Modulo%202%20-%20MySQL%20Consultas%20DML%20y%20Operadores.md)
- **Ejercicios Prácticos:**
  - [01_insert_update_delete.js](./Modulo%202%20-%20MySQL%20Consultas%20DML%20y%20Operadores/01_insert_update_delete.js) — Inserción simple y múltiple, actualizaciones condicionales y borrados.
  - [02_select_filtros_operadores.js](./Modulo%202%20-%20MySQL%20Consultas%20DML%20y%20Operadores/02_select_filtros_operadores.js) — Consultas `SELECT` con `BETWEEN`, `IN`, `LIKE`, `REGEXP`, `ORDER BY` y `LIMIT`.

---

### 🔹 [Módulo 3: MySQL Funciones de Cadena, Numéricas y Fechas](./Modulo%203%20-%20MySQL%20Funciones%20de%20Cadena%20Numericas%20y%20Fechas/Modulo%203%20-%20MySQL%20Funciones%20de%20Cadena%20Numericas%20y%20Fechas.md)
Transformación y cálculo de datos en el motor: funciones escalares para strings, matemáticas y manejo temporal con fechas e intervalos.
- **Teoría:** [Modulo 3 - MySQL Funciones de Cadena Numericas y Fechas.md](./Modulo%203%20-%20MySQL%20Funciones%20de%20Cadena%20Numericas%20y%20Fechas/Modulo%203%20-%20MySQL%20Funciones%20de%20Cadena%20Numericas%20y%20Fechas.md)
- **Ejercicios Prácticos:**
  - [01_funciones_cadena_y_control.js](./Modulo%203%20-%20MySQL%20Funciones%20de%20Cadena%20Numericas%20y%20Fechas/01_funciones_cadena_y_control.js) — `CONCAT`, `CONCAT_WS`, `SUBSTRING`, `TRIM`, `UPPER`, `LOWER` y lógica con `IF()` / `CASE`.
  - [02_funciones_numericas_y_fechas.js](./Modulo%203%20-%20MySQL%20Funciones%20de%20Cadena%20Numericas%20y%20Fechas/02_funciones_numericas_y_fechas.js) — `ROUND`, `FLOOR`, `CEIL`, `ABS`, `MOD`, `NOW()`, `CURDATE()`, `DATE_ADD()` y `DATEDIFF()`.

---

### 🔹 [Módulo 4: MySQL Agrupamiento y Funciones de Agregación](./Modulo%204%20-%20MySQL%20Agrupamiento%20y%20Funciones%20de%20Agregacion/Modulo%204%20-%20MySQL%20Agrupamiento%20y%20Funciones%20de%20Agregacion.md)
Cálculo de métricas analíticas, resúmenes y segmentación de datos con `GROUP BY`, `HAVING` y agregadores avanzados.
- **Teoría:** [Modulo 4 - MySQL Agrupamiento y Funciones de Agregacion.md](./Modulo%204%20-%20MySQL%20Agrupamiento%20y%20Funciones%20de%20Agregacion/Modulo%204%20-%20MySQL%20Agrupamiento%20y%20Funciones%20de%20Agregacion.md)
- **Ejercicios Prácticos:**
  - [01_group_by_basico_agregacion.js](./Modulo%204%20-%20MySQL%20Agrupamiento%20y%20Funciones%20de%20Agregacion/01_group_by_basico_agregacion.js) — `COUNT()`, `SUM()`, `AVG()`, `MIN()`, `MAX()` y agrupamiento por columnas.
  - [02_having_y_group_concat.js](./Modulo%204%20-%20MySQL%20Agrupamiento%20y%20Funciones%20de%20Agregacion/02_having_y_group_concat.js) — Filtrado pos-agrupación con `HAVING` y concatenación de listas con `GROUP_CONCAT()`.

---

### 🔹 [Módulo 5: MySQL Relaciones, Claves Foráneas y JOINS](./Modulo%205%20-%20MySQL%20Relaciones%20Claves%20Foraneas%20y%20JOINS/Modulo%205%20-%20MySQL%20Relaciones%20Claves%20Foraneas%20y%20JOINS.md)
Cruce y combinación de múltiples tablas mediante relaciones normalizadas y tipos de unión.
- **Teoría:** [Modulo 5 - MySQL Relaciones Claves Foraneas y JOINS.md](./Modulo%205%20-%20MySQL%20Relaciones%20Claves%20Foraneas%20y%20JOINS/Modulo%205%20-%20MySQL%20Relaciones%20Claves%20Foraneas%20y%20JOINS.md)
- **Ejercicios Prácticos:**
  - [01_inner_y_left_join.js](./Modulo%205%20-%20MySQL%20Relaciones%20Claves%20Foraneas%20y%20JOINS/01_inner_y_left_join.js) — Relaciones 1-a-Muchos con `INNER JOIN` y `LEFT JOIN` detectando registros huérfanos.
  - [02_multiples_joins_y_self_join.js](./Modulo%205%20-%20MySQL%20Relaciones%20Claves%20Foraneas%20y%20JOINS/02_multiples_joins_y_self_join.js) — Reportes multi-tabla (3+ tablas) y auto-unión (`SELF JOIN`) para jerarquías.

---

### 🔹 [Módulo 6: MySQL Subconsultas, Vistas y Consultas Avanzadas](./Modulo%206%20-%20MySQL%20Subconsultas%20Vistas%20y%20Consultas%20Avanzadas/Modulo%206%20-%20MySQL%20Subconsultas%20Vistas%20y%20Consultas%20Avanzadas.md)
Técnicas avanzadas de consulta: subqueries en `WHERE` y `FROM`, tablas derivadas, y abstracción con vistas.
- **Teoría:** [Modulo 6 - MySQL Subconsultas Vistas y Consultas Avanzadas.md](./Modulo%206%20-%20MySQL%20Subconsultas%20Vistas%20y%20Consultas%20Avanzadas/Modulo%206%20-%20MySQL%20Subconsultas%20Vistas%20y%20Consultas%20Avanzadas.md)
- **Ejercicios Prácticos:**
  - [01_subconsultas_where_y_from.js](./Modulo%206%20-%20MySQL%20Subconsultas%20Vistas%20y%20Consultas%20Avanzadas/01_subconsultas_where_y_from.js) — Subconsultas escalares, operadores `IN` / `EXISTS` y tablas derivadas con alias obligatorio.
  - [02_vistas_y_consultas_avanzadas.js](./Modulo%206%20-%20MySQL%20Subconsultas%20Vistas%20y%20Consultas%20Avanzadas/02_vistas_y_consultas_avanzadas.js) — Creación y consulta de vistas (`CREATE VIEW`) y reportes de negocio analíticos.

---

### 🔹 [Módulo 7: PostgreSQL Tipos Avanzados (JSONB, Arrays y UUID)](./Modulo%207%20-%20PostgreSQL%20Tipos%20Avanzados%20JSONB%20y%20Arrays/Modulo%207%20-%20PostgreSQL%20Tipos%20Avanzados%20JSONB%20y%20Arrays.md)
Aprovecha las capacidades de Postgres en memoria (PGlite): tipos semiestructurados `JSONB`, operadores `->`, `->>`, `@>`, tipos `ARRAY` con `ANY()` y `UNNEST()`, y claves `UUID` con `gen_random_uuid()`.
- **Teoría:** [Modulo 7 - PostgreSQL Tipos Avanzados JSONB y Arrays.md](./Modulo%207%20-%20PostgreSQL%20Tipos%20Avanzados%20JSONB%20y%20Arrays/Modulo%207%20-%20PostgreSQL%20Tipos%20Avanzados%20JSONB%20y%20Arrays.md)
- **Ejercicios Prácticos:**
  - [01_postgres_jsonb.js](./Modulo%207%20-%20PostgreSQL%20Tipos%20Avanzados%20JSONB%20y%20Arrays/01_postgres_jsonb.js) — Extracción de campos y contención con operadores JSONB (`->>`, `#>>`, `@>`).
  - [02_postgres_arrays_y_uuid.js](./Modulo%207%20-%20PostgreSQL%20Tipos%20Avanzados%20JSONB%20y%20Arrays/02_postgres_arrays_y_uuid.js) — Tablas con claves UUID automáticas y manipulación de arrays con `ANY` y `UNNEST`.

---

### 🔹 [Módulo 8: PostgreSQL Window Functions y CTEs](./Modulo%208%20-%20PostgreSQL%20Window%20Functions%20y%20CTEs/Modulo%208%20-%20PostgreSQL%20Window%20Functions%20y%20CTEs.md)
Técnicas analíticas de alto rendimiento: Expresiones de Tabla Comunes (`WITH`), numeración por particiones con `ROW_NUMBER()`, acumulados con `SUM() OVER()` y comparaciones de fila previa con `LAG()`.
- **Teoría:** [Modulo 8 - PostgreSQL Window Functions y CTEs.md](./Modulo%208%20-%20PostgreSQL%20Window%20Functions%20y%20CTEs/Modulo%208%20-%20PostgreSQL%20Window%20Functions%20y%20CTEs.md)
- **Ejercicios Prácticos:**
  - [01_postgres_ctes_with.js](./Modulo%208%20-%20PostgreSQL%20Window%20Functions%20y%20CTEs/01_postgres_ctes_with.js) — CTEs con `WITH` simples y uniones analíticas de múltiples tablas.
  - [02_postgres_window_functions.js](./Modulo%208%20-%20PostgreSQL%20Window%20Functions%20y%20CTEs/02_postgres_window_functions.js) — Rankings con `ROW_NUMBER()`, acumulados progresivos y desfase temporal con `LAG()`.

---

### 🔹 [Módulo 9: SQLite Arquitectura Embebida y Pragmas](./Modulo%209%20-%20SQLite%20Arquitectura%20Embebida%20y%20Pragmas/Modulo%209%20-%20SQLite%20Arquitectura%20Embebida%20y%20Pragmas.md)
El motor serverless en proceso: Afinidad de Tipos (*Type Affinity*), instrucciones `PRAGMA` (activación de foreign keys e inspección) y transacciones ACID con `SAVEPOINT`.
- **Teoría:** [Modulo 9 - SQLite Arquitectura Embebida y Pragmas.md](./Modulo%209%20-%20SQLite%20Arquitectura%20Embebida%20y%20Pragmas/Modulo%209%20-%20SQLite%20Arquitectura%20Embebida%20y%20Pragmas.md)
- **Ejercicios Prácticos:**
  - [01_sqlite_pragmas_y_affinity.js](./Modulo%209%20-%20SQLite%20Arquitectura%20Embebida%20y%20Pragmas/01_sqlite_pragmas_y_affinity.js) — `PRAGMA foreign_keys`, inspección de metadatos y coerción de tipos flexible.
  - [02_sqlite_transacciones_acid.js](./Modulo%209%20-%20SQLite%20Arquitectura%20Embebida%20y%20Pragmas/02_sqlite_transacciones_acid.js) — Transacciones bancarias con `COMMIT`, reversiones seguras con `ROLLBACK` y puntos parciales con `SAVEPOINT`.

---

## ⚡ Cómo Practicar

1. Cada ejercicio es un archivo `.js` ejecutable directamente con Node.js (`node ruta/al/archivo.js`) o mediante el **Practice Hub** en `http://localhost:3000`.
2. Las pruebas corren en un entorno en memoria ultrarrápido y seguro (`node:sqlite` nativo y `@electric-sql/pglite` WASM).
3. Resuelve las tareas indicadas en los comentarios `// TODO:` y ejecuta para ver los resultados de la **Suite de Validación Automática**.
