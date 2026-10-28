# Módulo 9: SQLite Arquitectura Embebida y Pragmas

## 🎯 Objetivo
Comprender la arquitectura interna de **SQLite** como motor de base de datos embebido sin servidor (*serverless*), dominar su sistema de **Afinidad de Tipos** (*Type Affinity*), configurar el motor mediante comandos **`PRAGMA`**, y gestionar transacciones ACID seguras con puntos de guardado (*Savepoints*).

---

## 1. La Filosofía de SQLite

A diferencia de MySQL o PostgreSQL (que funcionan como servicios de red cliente/servidor gestionando conexiones y puertos TCP), **SQLite es una biblioteca C embebida** que corre dentro del mismo espacio de memoria de tu proceso Node.js:

- **Sin Servidor (*Serverless*):** No requiere instalar demonios, usuarios ni contraseñas.
- **Un Solo Archivo:** Toda la base de datos (tablas, índices, triggers) se almacena en un único archivo en disco o en memoria (`:memory:`).
- **Cero Latencia de Red:** Las consultas se ejecutan directamente en la memoria RAM o mediante llamadas al sistema operativo de archivos.

---

## 2. Afinidad de Tipos (*Type Affinity*)

A diferencia de la mayoría de los motores SQL (que rechazan un dato si no coincide estrictamente con el tipo declarado en la columna), SQLite utiliza un sistema flexible conocido como **Type Affinity**. Cualquier columna puede almacenar cualquier valor, pero la columna tiene una "afinidad recomendada":

| Afinidad | Tipos Declarados que la Disparan | Comportamiento |
| :--- | :--- | :--- |
| `INTEGER` | `INT`, `INTEGER`, `TINYINT`, `BIGINT` | Almacena números enteros de 1 a 8 bytes según su magnitud. |
| `TEXT` | `VARCHAR`, `CHAR`, `TEXT`, `CLOB` | Almacena cadenas de texto codificadas en UTF-8 o UTF-16. |
| `REAL` | `REAL`, `FLOAT`, `DOUBLE` | Almacena valores de coma flotante de 8 bytes (IEEE). |
| `NUMERIC` | `NUMERIC`, `DECIMAL`, `BOOLEAN`, `DATE` | Intenta convertir a entero o real; si no puede, lo guarda como texto. |
| `BLOB` | `BLOB` o sin tipo especificado | Almacena datos binarios puros exactamente como se ingresan. |

---

## 3. Comandos `PRAGMA`

Las sentencias `PRAGMA` son instrucciones especiales exclusivas de SQLite para modificar el funcionamiento del motor o inspeccionar metadatos internos:

### 3.1 Activar Claves Foráneas (*Foreign Keys*)
Por motivos históricos de retrocompatibilidad con SQLite 2, las restricciones de clave foránea vienen deshabilitadas por defecto. Deben activarse por conexión:
```sql
PRAGMA foreign_keys = ON;
```

### 3.2 Inspección de Esquema: `table_info`
Permite obtener información programática de las columnas de una tabla (nombre, tipo, si es `NOT NULL`, valor por defecto y si es clave primaria):
```sql
PRAGMA table_info('usuarios');
```

### 3.3 Modo de Registro WAL (*Write-Ahead Logging*)
Aumenta drásticamente el rendimiento permitiendo lectores concurrentes mientras ocurre una escritura:
```sql
PRAGMA journal_mode = WAL;
```

---

## 4. Transacciones ACID y `SAVEPOINT`

SQLite garantiza completamente el estándar ACID (Atomicidad, Consistencia, Aislamiento y Durabilidad):

```sql
BEGIN TRANSACTION;

UPDATE cuentas SET balance = balance - 100 WHERE id = 1;
UPDATE cuentas SET balance = balance + 100 WHERE id = 2;

-- Si todo está bien:
COMMIT;

-- Si ocurre algún error:
-- ROLLBACK;
```

### Puntos de Guardado Anidados (`SAVEPOINT`)
Permiten deshacer partes parciales de una transacción sin abortar toda la operación:
```sql
SAVEPOINT paso_intermedio;
-- Operaciones riesgosas...
-- ROLLBACK TO paso_intermedio; -- Deshace solo hasta el savepoint
RELEASE SAVEPOINT paso_intermedio; -- Confirma el savepoint
```
