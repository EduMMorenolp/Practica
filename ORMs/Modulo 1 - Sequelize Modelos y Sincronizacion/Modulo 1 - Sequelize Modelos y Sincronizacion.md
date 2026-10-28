# Módulo 1: Sequelize Modelos y Sincronización

## 🎯 Objetivo
Aprender los fundamentos del ORM **Sequelize** en Node.js: inicializar la conexión con el motor de base de datos, modelar entidades relacionales mediante `sequelize.define()`, aplicar tipos de datos (`DataTypes`) y restricciones de integridad, sincronizar esquemas con la base de datos y gestionar el ciclo de vida de las instancias.

---

## 1. ¿Qué es un ORM y por qué usar Sequelize?

Un **ORM** (*Object-Relational Mapping*) es una biblioteca que traduce las tablas y filas de una base de datos relacional a clases y objetos en tu código JavaScript/TypeScript.

### Ventajas de Sequelize:
- **Abstracción del motor:** El mismo código JavaScript funciona con PostgreSQL, MySQL, MariaDB, SQLite y SQL Server.
- **Validaciones en el modelo:** Reglas de validación antes de tocar la base de datos.
- **Migraciones y sincronización:** Creación automática de tablas y columnas.

---

## 2. Conexión a la Base de Datos

Para inicializar Sequelize con SQLite en memoria (ideal para tests y práctica rápida):

```javascript
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: ':memory:', // Base de datos efímera en RAM
  logging: false       // Desactivar logs SQL en consola para mantener salidas limpias
});
```

---

## 3. Definición de Modelos con `sequelize.define()`

Un **Modelo** representa una tabla en la base de datos. Por convención, el nombre del modelo es en singular (ej. `'Usuario'`) y Sequelize creará la tabla en plural (ej. `'Usuarios'`):

```javascript
const Usuario = sequelize.define('Usuario', {
  // Clave primaria explícita (si no se define, Sequelize crea 'id' automáticamente)
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false // Restricción NOT NULL
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true     // Restricción UNIQUE
  },
  edad: {
    type: DataTypes.INTEGER,
    defaultValue: 18 // Valor por defecto
  },
  activo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
}, {
  tableName: 'usuarios', // Nombre exacto de la tabla (opcional)
  timestamps: true       // Crea automáticamente las columnas createdAt y updatedAt
});
```

### Tipos de Datos Principales (`DataTypes`):
- `DataTypes.STRING` / `STRING(n)`: Texto variable (VARCHAR).
- `DataTypes.TEXT`: Textos largos sin límite corto.
- `DataTypes.INTEGER` / `BIGINT`: Números enteros.
- `DataTypes.FLOAT` / `DOUBLE` / `DECIMAL(10, 2)`: Números decimales.
- `DataTypes.BOOLEAN`: Valores booleanos (true/false).
- `DataTypes.DATE`: Fechas y marcas temporales con hora.
- `DataTypes.ENUM('valor1', 'valor2')`: Lista fija de opciones.

---

## 4. Sincronización con la Base de Datos (`sync`)

Antes de poder guardar datos, debes sincronizar el modelo con el motor:

```javascript
// Crea la tabla si no existe
await sequelize.sync();

// Sobrescribe la tabla (DROP TABLE + CREATE TABLE) - ¡Cuidado en producción!
await sequelize.sync({ force: true });

// Modifica la tabla para adaptarse al modelo sin borrar datos
await sequelize.sync({ alter: true });
```

---

## 5. Creación de Instancias

- **`Model.create(datos)`**: Crea una instancia en memoria y la guarda inmediatamente en la base de datos con un `INSERT`:
  ```javascript
  const nuevoUsuario = await Usuario.create({
    nombre: 'Valeria Sol',
    email: 'valeria@mail.com'
  });
  console.log('ID asignado:', nuevoUsuario.id);
  ```

- **`Model.bulkCreate([datos1, datos2, ...])`**: Inserta múltiples registros en una sola consulta SQL (altamente eficiente):
  ```javascript
  await Usuario.bulkCreate([
    { nombre: 'Martín', email: 'martin@mail.com' },
    { nombre: 'Lucía', email: 'lucia@mail.com' }
  ]);
  ```
