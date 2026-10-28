# Módulo 3: MySQL Funciones de Cadena, Numéricas y Fechas

## 🎯 Objetivo
Dominar las funciones incorporadas (*built-in functions*) de **MySQL** para manipular texto, realizar cálculos matemáticos precisos, operar con fechas y horas, y estructurar lógica condicional mediante `IF()` y `CASE`.

---

## 1. Funciones de Cadenas de Texto (*String Functions*)

MySQL cuenta con potentes herramientas para dar formato y transformar cadenas:

### 1.1 Concatenación
- `CONCAT(str1, str2, ...)`: Une múltiples cadenas. Si algún argumento es `NULL`, retorna `NULL`.
  ```sql
  SELECT CONCAT(nombre, ' ', apellido) AS nombre_completo FROM usuarios;
  ```
- `CONCAT_WS(separador, str1, str2, ...)`: *Concatenate With Separator*. El primer argumento es el delimitador e ignora los valores `NULL`.
  ```sql
  SELECT CONCAT_WS(', ', ciudad, provincia, pais) AS ubicacion FROM clientes;
  ```

### 1.2 Extracción y Transformación
- `SUBSTRING(str, pos, len)` o `SUBSTR()`: Extrae una subcadena a partir de la posición `pos` (1-indexed en SQL).
  ```sql
  SELECT SUBSTRING('MySQL Database', 1, 5); -- Retorna: 'MySQL'
  ```
- `UPPER(str)` / `UCASE(str)`: Convierte a mayúsculas.
- `LOWER(str)` / `LCASE(str)`: Convierte a minúsculas.
- `TRIM(str)`: Remueve espacios al inicio y final. También existen `LTRIM()` y `RTRIM()`.
- `REPLACE(str, from_str, to_str)`: Reemplaza todas las ocurrencias de una subcadena por otra.
- `LEFT(str, len)` y `RIGHT(str, len)`: Extrae los primeros o últimos `len` caracteres.
- `LENGTH(str)`: Longitud en bytes.
- `CHAR_LENGTH(str)`: Cantidad real de caracteres (vital para textos UTF-8 con tildes o emojis).

---

## 2. Lógica Condicional en Consultas (`IF` y `CASE`)

### 2.1 Función `IF(condicion, valor_verdadero, valor_falso)`
```sql
SELECT
  nombre,
  stock,
  IF(stock > 0, 'Disponible', 'Agotado') AS estado_stock
FROM productos;
```

### 2.2 Expresión `CASE`
Ideal para evaluar múltiples condiciones:
```sql
SELECT
  nombre,
  precio,
  CASE
    WHEN precio >= 500 THEN 'Gama Alta'
    WHEN precio >= 150 THEN 'Gama Media'
    ELSE 'Gama Económica'
  END AS segmento
FROM productos;
```

### 2.3 Manejo de Nulos: `IFNULL` y `COALESCE`
- `IFNULL(valor, valor_por_defecto)`: Si `valor` es `NULL`, devuelve el reemplazo.
- `COALESCE(val1, val2, val3, ...)`: Devuelve el primer valor no nulo de la lista.
```sql
SELECT nombre, IFNULL(telefono, 'Sin teléfono registrado') AS contacto FROM clientes;
```

---

## 3. Funciones Numéricas y Matemáticas

- `ROUND(x, d)`: Redondea `x` a `d` decimales.
  ```sql
  SELECT ROUND(123.4567, 2); -- Retorna 123.46
  ```
- `TRUNCATE(x, d)`: Trunca sin redondear.
- `CEIL(x)` / `CEILING(x)`: Redondea hacia arriba al entero más próximo.
- `FLOOR(x)`: Redondea hacia abajo al entero más próximo.
- `ABS(x)`: Valor absoluto.
- `MOD(n, m)` o `n % m`: Resto de la división entera.
- `POW(x, y)` / `POWER(x, y)`: Eleva `x` a la potencia `y`.

---

## 4. Funciones de Fecha y Hora (*Date & Time*)

MySQL maneja fechas y marcas temporales de forma nativa:

### 4.1 Obtener Tiempo Actual
- `NOW()` o `CURRENT_TIMESTAMP`: Fecha y hora actual del sistema (`YYYY-MM-DD HH:MM:SS`).
- `CURDATE()` o `CURRENT_DATE`: Fecha actual (`YYYY-MM-DD`).
- `CURTIME()` o `CURRENT_TIME`: Hora actual (`HH:MM:SS`).

### 4.2 Aritmética y Diferencia de Fechas
- `DATE_ADD(fecha, INTERVAL valor unidad)` y `DATE_SUB(...)`:
  ```sql
  -- Sumar 30 días a la fecha actual
  SELECT DATE_ADD(CURDATE(), INTERVAL 30 DAY);

  -- Restar 3 meses a una fecha
  SELECT DATE_SUB(creado_en, INTERVAL 3 MONTH) FROM pedidos;
  ```
- `DATEDIFF(fecha1, fecha2)`: Calcula la diferencia en días entre dos fechas (`fecha1 - fecha2`).
  ```sql
  SELECT DATEDIFF('2026-10-31', '2026-10-01'); -- Retorna 30
  ```

### 4.3 Extracción y Formateo
- `YEAR(fecha)`, `MONTH(fecha)`, `DAY(fecha)`, `HOUR(hora)`:
  ```sql
  SELECT * FROM ventas WHERE YEAR(fecha) = 2026 AND MONTH(fecha) = 10;
  ```
- `DATE_FORMAT(fecha, '%d/%m/%Y')`: Da formato personalizado a la fecha para presentación.
