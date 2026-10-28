# Módulo 6: MySQL Subconsultas, Vistas y Consultas Avanzadas

## 🎯 Objetivo
Aprender a estructurar consultas complejas mediante **subconsultas** (escalares, en `WHERE` con `IN`/`EXISTS` y tablas derivadas en `FROM`), y encapsular lógica analítica reutilizable mediante **vistas** (*Views*).

---

## 1. Subconsultas (*Subqueries*)

Una subconsulta es una sentencia `SELECT` anidada dentro de otra consulta principal.

### 1.1 Subconsultas Escalares
Retornan un único valor (una fila y una columna). Se pueden usar en el `SELECT` o en comparaciones del `WHERE`:

```sql
-- Obtener productos cuyo precio sea mayor al promedio general
SELECT nombre, precio
FROM productos
WHERE precio > (SELECT AVG(precio) FROM productos);
```

### 1.2 Subconsultas con `IN` y `NOT IN`
Retornan una lista de valores evaluados por el `WHERE` exterior:

```sql
-- Clientes que han comprado algún producto de la categoría 5
SELECT nombre, email
FROM clientes
WHERE id IN (
  SELECT DISTINCT cliente_id
  FROM pedidos
  WHERE categoria_id = 5
);
```

### 1.3 Subconsultas Correlacionadas y `EXISTS`
`EXISTS` evalúa si la subconsulta devuelve al menos un registro. Es muy eficiente porque MySQL se detiene en cuanto encuentra la primera coincidencia:

```sql
SELECT c.nombre
FROM clientes c
WHERE EXISTS (
  SELECT 1 FROM pedidos p
  WHERE p.cliente_id = c.id AND p.total >= 1000
);
```

---

## 2. Tablas Derivadas en la Cláusula `FROM`

Puedes usar una subconsulta como si fuera una tabla temporal dentro de la cláusula `FROM`:

> [!WARNING]
> En MySQL, **toda tabla derivada en la cláusula `FROM` DEBE tener un alias obligatorio** (ej. `AS resumen`). Omitir el alias provocará el clásico error `Every derived table must have its own alias`.

```sql
SELECT
  resumen.categoria,
  resumen.promedio_precio
FROM (
  SELECT categoria, AVG(precio) AS promedio_precio
  FROM productos
  GROUP BY categoria
) AS resumen
WHERE resumen.promedio_precio > 100;
```

---

## 3. Vistas (*Views*)

Una vista es una consulta SQL guardada en la base de datos con un nombre, funcionando como una tabla virtual.

### 3.1 Ventajas de las Vistas:
1. **Reutilización:** Evita escribir consultas con múltiples `JOIN` repetidamente.
2. **Seguridad:** Oculta columnas sensibles (como contraseñas o tarjetas de crédito) a ciertos usuarios.
3. **Simplicidad:** Simplifica reportes complejos para herramientas de BI o frontend.

### 3.2 Crear y Consultar una Vista
```sql
-- Crear la vista
CREATE OR REPLACE VIEW vista_resumen_clientes AS
SELECT
  c.id AS cliente_id,
  c.nombre,
  COUNT(p.id) AS total_pedidos,
  IFNULL(SUM(p.total), 0) AS total_gastado
FROM clientes c
LEFT JOIN pedidos p ON c.id = p.cliente_id
GROUP BY c.id, c.nombre;

-- Consultar la vista exactamente como si fuera una tabla normal
SELECT * FROM vista_resumen_clientes
WHERE total_gastado > 500
ORDER BY total_gastado DESC;

-- Eliminar la vista
DROP VIEW IF EXISTS vista_resumen_clientes;
```
