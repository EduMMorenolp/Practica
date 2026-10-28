# Módulo 1: MySQL Creación de Tablas y Tipos de Datos

## 🎯 Objetivo
Aprender a diseñar esquemas de bases de datos relacionales en **MySQL**, seleccionando los tipos de datos adecuados y definiendo restricciones de integridad (*constraints*), claves primarias auto-incrementables y claves foráneas.

---

## 1. Tipos de Datos Principales en MySQL

MySQL ofrece una amplia gama de tipos de datos clasificados en tres categorías principales:

### 1.1 Numéricos
- `INT` o `INTEGER`: Entero estándar de 4 bytes (-2,147,483,648 a 2,147,483,647).
- `TINYINT`: Entero de 1 byte (-128 a 127). Muy usado para booleanos: `TINYINT(1)` donde `0 = FALSE` y `1 = TRUE`.
- `BIGINT`: Entero de 8 bytes para identificadores masivos o conteos globales.
- `DECIMAL(P, S)`: Número de punto fijo exacto. Ideal para dinero o finanzas (ej. `DECIMAL(10, 2)` permite 8 enteros y 2 decimales).
- `FLOAT` / `DOUBLE`: Números con coma flotante aproximada de precisión simple y doble.

### 1.2 Cadenas de Texto
- `VARCHAR(M)`: Cadena de longitud variable (0 a 65,535 caracteres). Solo ocupa el espacio real del texto + 1 o 2 bytes de longitud.
- `CHAR(M)`: Cadena de longitud fija (0 a 255 caracteres). Se rellena con espacios a la derecha si el texto es más corto. Ideal para códigos fijos como códigos de país ISO (`CHAR(2)`).
- `TEXT`: Para bloques largos de texto (hasta 64 KB). Existen también `MEDIUMTEXT` (16 MB) y `LONGTEXT` (4 GB).
- `ENUM('valor1', 'valor2', ...)`: Permite almacenar exactamente uno de los valores predefinidos en la lista.

### 1.3 Fechas y Horas
- `DATE`: Fecha en formato `YYYY-MM-DD` (ej. `'2026-10-28'`).
- `TIME`: Hora en formato `HH:MM:SS`.
- `DATETIME`: Fecha y hora combinadas `YYYY-MM-DD HH:MM:SS` (rango amplio de 1000 a 9999).
- `TIMESTAMP`: Marca de tiempo UTC vinculada a la zona horaria del servidor. Útil para auditoría con `DEFAULT CURRENT_TIMESTAMP`.

---

## 2. Sintaxis de `CREATE TABLE` y Restricciones (*Constraints*)

Una tabla define la estructura (columnas y reglas) donde residirán los datos.

```sql
CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  edad INT CHECK (edad >= 18),
  rol ENUM('admin', 'editor', 'lector') DEFAULT 'lector',
  activo TINYINT(1) DEFAULT 1,
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

### Modificadores y Restricciones Clave:
- `PRIMARY KEY`: Identificador único e irrepetible para cada fila.
- `AUTO_INCREMENT`: MySQL asigna automáticamente el siguiente valor numérico consecutivo al insertar.
- `NOT NULL`: La columna no puede tener valores nulos (`NULL`).
- `UNIQUE`: Asegura que todos los valores en la columna sean distintos (ej. email o RUT).
- `DEFAULT <valor>`: Valor por defecto aplicado si no se especifica uno en el `INSERT`.
- `CHECK (<condicion>)`: Valida que los datos cumplan una regla booleana antes de insertarse o actualizarse.

---

## 3. Claves Foráneas (*Foreign Keys*)

Vinculan una columna de una tabla hija con la clave primaria de una tabla padre, garantizando **integridad referencial**:

```sql
CREATE TABLE pedidos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  usuario_id INT NOT NULL,
  total DECIMAL(10, 2) NOT NULL,
  fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE CASCADE
);
```
- `ON DELETE CASCADE`: Si se borra un usuario, se eliminan automáticamente todos sus pedidos asociados.
- `ON DELETE RESTRICT` / `NO ACTION`: Impide borrar el usuario si tiene pedidos vinculados.

---

## 4. Modificación y Eliminación con `ALTER TABLE` y `DROP TABLE`

- **Agregar columna:**
  ```sql
  ALTER TABLE usuarios ADD COLUMN telefono VARCHAR(20) NULL;
  ```
- **Eliminar columna:**
  ```sql
  ALTER TABLE usuarios DROP COLUMN edad;
  ```
- **Modificar tipo o restricciones de una columna:**
  ```sql
  ALTER TABLE usuarios MODIFY COLUMN nombre VARCHAR(150) NOT NULL;
  ```
- **Eliminar una tabla por completo:**
  ```sql
  DROP TABLE IF EXISTS pedidos;
  ```
