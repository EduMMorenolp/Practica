# Módulo 4: MySQL Agrupamiento y Funciones de Agregación

## 🎯 Objetivo
Aprender a resumir, condensar y analizar conjuntos de datos mediante funciones de agregación (`COUNT`, `SUM`, `AVG`, `MIN`, `MAX`), organizar resultados con `GROUP BY`, filtrar grupos calculados con `HAVING` y utilizar la función nativa de MySQL `GROUP_CONCAT()`.

---

## 1. Funciones de Agregación

Las funciones de agregación procesan múltiples filas y retornan un único valor representativo:

- `COUNT(*)`: Cuenta todas las filas que cumplen la condición.
- `COUNT(columna)`: Cuenta únicamente las filas donde `columna` no es `NULL`.
- `COUNT(DISTINCT columna)`: Cuenta los valores únicos no nulos.
- `SUM(columna)`: Suma los valores numéricos.
- `AVG(columna)`: Calcula la media aritmética (promedio).
- `MIN(columna)` y `MAX(columna)`: Obtiene el valor mínimo y máximo respectivamente.

```sql
SELECT
  COUNT(*) AS total_ventas,
  SUM(total) AS facturacion_total,
  AVG(total) AS ticket_promedio,
  MAX(total) AS venta_mas_alta
FROM pedidos;
```

---

## 2. Cláusula `GROUP BY`

Permite dividir los registros en subgrupos basados en los valores de una o más columnas, aplicando las funciones de agregación sobre cada grupo de forma independiente:

```sql
SELECT
  categoria_id,
  COUNT(*) AS cantidad_productos,
  AVG(precio) AS precio_promedio
FROM productos
GROUP BY categoria_id;
```

> [!IMPORTANT]
> **Regla de oro de `GROUP BY`:** Todas las columnas seleccionadas en el `SELECT` deben ser parte de la cláusula `GROUP BY` o estar dentro de una función de agregación (`SUM`, `AVG`, `COUNT`, etc.).

---

## 3. Filtrar Grupos: `WHERE` vs `HAVING`

Es fundamental entender la diferencia de momento de ejecución entre ambos filtros:

- `WHERE`: Filtra **filas individuales** *antes* de que ocurra el agrupamiento. No puede usar funciones de agregación.
- `HAVING`: Filtra **grupos consolidados** *después* de que se calculó el agrupamiento. Permite evaluar condiciones sobre funciones de agregación (`COUNT`, `SUM`, etc.).

```sql
SELECT
  categoria_id,
  COUNT(*) AS total_productos,
  AVG(precio) AS precio_promedio
FROM productos
WHERE activo = 1                      -- 1. Primero filtra filas activas
GROUP BY categoria_id                 -- 2. Agrupa por categoría
HAVING COUNT(*) >= 5;                 -- 3. Conserva solo grupos con al menos 5 productos
```

---

## 4. La Función `GROUP_CONCAT()` de MySQL

Una de las funciones más distintivas y útiles de MySQL es `GROUP_CONCAT()`, que permite combinar los valores de una columna en un grupo en una sola cadena de texto separada por coma (o el delimitador que definas):

```sql
SELECT
  departamento,
  COUNT(*) AS total_empleados,
  GROUP_CONCAT(nombre ORDER BY nombre ASC SEPARATOR ', ') AS lista_empleados
FROM empleados
GROUP BY departamento;
```

**Resultado:**
| departamento | total_empleados | lista_empleados |
| :--- | :--- | :--- |
| IT | 3 | Ana, Carlos, Lucía |
| Ventas | 2 | Jorge, Marta |
