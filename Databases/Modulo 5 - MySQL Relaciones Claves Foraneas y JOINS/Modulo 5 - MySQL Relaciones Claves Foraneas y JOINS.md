# Módulo 5: MySQL Relaciones, Claves Foráneas y JOINS

## 🎯 Objetivo
Comprender el modelo relacional en **MySQL**, conectar tablas mediante claves foráneas y consultar información combinada utilizando los distintos tipos de unión: `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, uniones multi-tabla y auto-unión (`SELF JOIN`).

---

## 1. El Modelo Relacional y Claves Foráneas

En una base de datos normalizada, los datos se dividen en tablas especializadas conectadas mediante referencias:
- **Clave Primaria (*Primary Key*):** Identifica unívocamente una fila en la tabla padre (ej. `clientes.id`).
- **Clave Foránea (*Foreign Key*):** Columna en una tabla hija que apunta a la clave primaria de la tabla padre (ej. `pedidos.cliente_id`).

```sql
CREATE TABLE pedidos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  cliente_id INT NOT NULL,
  total DECIMAL(10, 2) NOT NULL,
  FOREIGN KEY (cliente_id) REFERENCES clientes(id)
);
```

---

## 2. Tipos de Uniones (*JOINS*)

### 2.1 `INNER JOIN` (Intersección Estricta)
Retorna **únicamente** las filas que tienen coincidencia exacta en ambas tablas según la condición del `ON`:

```sql
SELECT
  p.id AS pedido_id,
  c.nombre AS nombre_cliente,
  p.total
FROM pedidos p
INNER JOIN clientes c ON p.cliente_id = c.id;
```
*(Si un pedido no tiene cliente o un cliente nunca compró, no aparecerán en el resultado).*

### 2.2 `LEFT JOIN` (o `LEFT OUTER JOIN`)
Retorna **todas** las filas de la tabla izquierda (`pedidos` en este caso). Si no existe fila coincidente en la tabla derecha, las columnas de la tabla derecha se rellenan con `NULL`:

```sql
SELECT
  c.nombre AS cliente,
  p.id AS pedido_id,
  p.total
FROM clientes c
LEFT JOIN pedidos p ON c.id = p.cliente_id;
```

#### 💡 Caso de uso clásico: Detección de Registros Huérfanos
¿Qué clientes se registraron pero **nunca** realizaron un pedido?
```sql
SELECT c.nombre, c.email
FROM clientes c
LEFT JOIN pedidos p ON c.id = p.cliente_id
WHERE p.id IS NULL; -- Detecta clientes sin ningún pedido
```

### 2.3 `RIGHT JOIN` (o `RIGHT OUTER JOIN`)
Preserva **todas** las filas de la tabla de la derecha, rellenando con `NULL` si no hay par en la izquierda. Es el inverso de `LEFT JOIN`.

---

## 3. Uniones Multi-Tabla (3 o más tablas)

Puedes encadenar múltiples cláusulas `JOIN` para reconstruir estructuras complejas de negocio:

```sql
SELECT
  c.nombre AS cliente,
  p.id AS pedido_id,
  pr.nombre AS producto,
  dp.cantidad,
  dp.precio_unitario
FROM pedidos p
INNER JOIN clientes c ON p.cliente_id = c.id
INNER JOIN detalles_pedido dp ON p.id = dp.pedido_id
INNER JOIN productos pr ON dp.producto_id = pr.id;
```

---

## 4. Auto-Unión (*SELF JOIN*)

Un `SELF JOIN` ocurre cuando unes una tabla consigo misma. Es indispensable para modelar jerarquías (por ejemplo, empleados donde cada uno tiene una columna `supervisor_id` que apunta al `id` de otro empleado en la misma tabla):

```sql
SELECT
  e.nombre AS empleado,
  IFNULL(s.nombre, 'Sin supervisor') AS supervisor
FROM empleados e
LEFT JOIN empleados s ON e.supervisor_id = s.id;
```
> [!NOTE]
> Para realizar un `SELF JOIN` es obligatorio usar alias distintos (ej. `e` para empleado y `s` para supervisor) para diferenciar ambas instancias de la misma tabla.
