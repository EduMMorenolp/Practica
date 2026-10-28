# Módulo 8: PostgreSQL Window Functions y CTEs

## 🎯 Objetivo
Dominar dos de las herramientas analíticas más avanzadas y elegantes del SQL moderno en **PostgreSQL**: las Expresiones de Tabla Comunes (**CTEs** con `WITH`) y las Funciones de Ventana (**Window Functions**) con la cláusula `OVER()`.

---

## 1. Expresiones de Tabla Comunes (CTEs con `WITH`)

Una CTE define un conjunto de resultados temporal con nombre que existe exclusivamente durante la ejecución de una consulta. Es el sustituto moderno y legible de las subconsultas anidadas en el `FROM`:

```sql
WITH ventas_por_cliente AS (
  SELECT
    cliente_id,
    COUNT(*) AS total_pedidos,
    SUM(monto) AS total_gastado
  FROM pedidos
  GROUP BY cliente_id
)
SELECT c.nombre, v.total_pedidos, v.total_gastado
FROM clientes c
INNER JOIN ventas_por_cliente v ON c.id = v.cliente_id
WHERE v.total_gastado >= 1000;
```

### Encadenar Múltiples CTEs:
Puedes separar múltiples CTEs usando comas antes del `SELECT` principal:
```sql
WITH
clientes_vip AS (
  SELECT id, nombre FROM clientes WHERE puntos >= 1000
),
pedidos_recientes AS (
  SELECT id, cliente_id, monto FROM pedidos WHERE fecha >= '2026-01-01'
)
SELECT cv.nombre, pr.monto
FROM clientes_vip cv
INNER JOIN pedidos_recientes pr ON cv.id = pr.cliente_id;
```

---

## 2. Funciones de Ventana (*Window Functions*)

A diferencia de `GROUP BY` (que colapsa múltiples filas en una sola), una **Función de Ventana realiza cálculos a través de un conjunto de filas relacionadas, pero manteniendo la identidad de cada fila individual intacta**.

La sintaxis fundamental es:
```sql
FUNCION() OVER (
  PARTITION BY columna_agrupacion
  ORDER BY columna_ordenacion
)
```

---

## 3. Funciones de Ventana Principales

### 3.1 `ROW_NUMBER()`
Asigna un número secuencial único (1, 2, 3...) a cada fila dentro de su partición:
```sql
-- Numerar los productos del más caro al más barato por cada categoría
SELECT
  categoria,
  nombre,
  precio,
  ROW_NUMBER() OVER(PARTITION BY categoria ORDER BY precio DESC) AS ranking_categoria
FROM productos;
```

### 3.2 `RANK()` vs `DENSE_RANK()`
- `RANK()`: Asigna el mismo número en empates y saltea el siguiente número (ej. 1, 2, 2, 4).
- `DENSE_RANK()`: Asigna el mismo número en empates sin saltear números (ej. 1, 2, 2, 3).

### 3.3 `LAG()` y `LEAD()`
Permiten acceder al valor de la fila anterior (`LAG`) o posterior (`LEAD`) sin necesidad de realizar costosos `SELF JOIN`:
```sql
-- Comparar las ventas del día actual con las ventas del día anterior
SELECT
  fecha,
  monto,
  LAG(monto, 1) OVER(ORDER BY fecha) AS monto_dia_anterior,
  monto - LAG(monto, 1) OVER(ORDER BY fecha) AS diferencia
FROM ventas_diarias;
```

### 3.4 Acumulados Progresivos (*Running Totals*)
```sql
-- Suma acumulada progresiva a lo largo del tiempo
SELECT
  fecha,
  monto,
  SUM(monto) OVER(ORDER BY fecha ASC) AS total_acumulado
FROM ventas;
```
