# Módulo 2: MySQL Consultas DML y Operadores

## 🎯 Objetivo
Dominar la manipulación de datos con **DML** (`INSERT`, `UPDATE`, `DELETE`) y el filtrado preciso de información mediante sentencias `SELECT` utilizando operadores de comparación, lógicos, rangos (`BETWEEN`), conjuntos (`IN`), coincidencia de patrones (`LIKE`, `REGEXP`), ordenamiento (`ORDER BY`) y paginación (`LIMIT`).

---

## 1. Manipulación de Datos (DML)

### 1.1 `INSERT INTO` (Inserción simple y múltiple)
```sql
-- Inserción de un registro
INSERT INTO usuarios (nombre, email, edad)
VALUES ('Carlos Gómez', 'carlos@mail.com', 29);

-- Inserción múltiple en una sola sentencia (muy eficiente en MySQL)
INSERT INTO usuarios (nombre, email, edad) VALUES
  ('Ana López', 'ana@mail.com', 25),
  ('Beatriz Soto', 'beatriz@mail.com', 31),
  ('David Mora', 'david@mail.com', 22);
```

### 1.2 `UPDATE` (Modificación condicional)
> [!WARNING]
> Siempre especifica la cláusula `WHERE` en un `UPDATE`; de lo contrario, actualizarás todas las filas de la tabla.

```sql
UPDATE usuarios
SET edad = 30, activo = 1
WHERE email = 'carlos@mail.com';
```

### 1.3 `DELETE` (Eliminación de registros)
```sql
DELETE FROM usuarios
WHERE activo = 0 AND creado_en < '2025-01-01';
```

---

## 2. Operadores de Comparación y Lógicos

### 2.1 Comparación Básica
| Operador | Significado | Ejemplo |
| :--- | :--- | :--- |
| `=` | Igual a | `WHERE rol = 'admin'` |
| `!=` o `<>` | Distinto de | `WHERE estado != 'cancelado'` |
| `<`, `<=` | Menor que, Menor o igual | `WHERE precio <= 50.00` |
| `>`, `>=` | Mayor que, Mayor o igual | `WHERE stock > 0` |
| `<=>` | Igualdad segura para `NULL` (*NULL-safe*) | `WHERE categoria_id <=> NULL` |
| `IS NULL` / `IS NOT NULL` | Comprobación de valor nulo | `WHERE telefono IS NOT NULL` |

### 2.2 Operadores Lógicos
- `AND` (o `&&`): Ambas condiciones deben cumplirse.
- `OR` (o `||`): Al menos una condición debe cumplirse.
- `NOT` (o `!`): Invierte el resultado de la condición.
- `XOR`: Verdadero si una es verdadera y la otra falsa (pero no ambas).

```sql
SELECT * FROM productos
WHERE precio >= 100 AND (categoria_id = 2 OR stock > 50);
```

---

## 3. Rangos, Conjuntos y Patrones

### 3.1 `BETWEEN ... AND ...`
Comprueba si un valor está dentro de un rango cerrado (inclusivo):
```sql
SELECT * FROM productos
WHERE precio BETWEEN 20.00 AND 80.00;
```

### 3.2 `IN (...)` y `NOT IN (...)`
Evalúa si el valor coincide con alguno de los elementos de una lista:
```sql
SELECT * FROM pedidos
WHERE estado IN ('pendiente', 'procesando', 'enviado');
```

### 3.3 `LIKE` y Comodines
- `%`: Representa cero, uno o múltiples caracteres.
- `_`: Representa exactamente un único carácter.

```sql
-- Nombres que comienzan con 'Mar' (ej. Martín, Mario, Mariana)
SELECT * FROM usuarios WHERE nombre LIKE 'Mar%';

-- Emails que terminan en '@gmail.com'
SELECT * FROM usuarios WHERE email LIKE '%@gmail.com';

-- Códigos de 4 letras que empiezan con 'A' y terminan en 'X' (ej. AB1X)
SELECT * FROM articulos WHERE codigo LIKE 'A__X';
```

---

## 4. Ordenamiento (`ORDER BY`) y Límites (`LIMIT`)

### 4.1 `ORDER BY`
Ordena los resultados de forma ascendente (`ASC`, por defecto) o descendente (`DESC`):
```sql
SELECT nombre, precio, stock
FROM productos
ORDER BY precio DESC, nombre ASC;
```

### 4.2 `LIMIT` y Paginación
Permite limitar la cantidad de registros devueltos y saltear registros (*offset*):
```sql
-- Obtener los primeros 10 registros
SELECT * FROM productos LIMIT 10;

-- Paginación: Saltear 20 registros y obtener los siguientes 10 (página 3)
-- Sintaxis MySQL: LIMIT <offset>, <count>
SELECT * FROM productos LIMIT 20, 10;

-- Sintaxis estándar ANSI: LIMIT <count> OFFSET <offset>
SELECT * FROM productos LIMIT 10 OFFSET 20;
```
