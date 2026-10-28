# Módulo 2: Sequelize Consultas y Operadores Op

## 🎯 Objetivo
Aprender a consultar, filtrar, ordenar, paginar, actualizar y eliminar registros en **Sequelize** utilizando los métodos del modelo (`findAll`, `findByPk`, `findOne`, `update`, `destroy`) y el conjunto de operadores avanzados del objeto **`Op`** (`Op.gt`, `Op.between`, `Op.like`, `Op.or`).

---

## 1. Métodos de Búsqueda de Sequelize

- **`Model.findAll(opciones)`**: Retorna un array con todas las instancias que cumplan las condiciones del `where`.
  ```javascript
  const usuarios = await Usuario.findAll();
  ```
- **`Model.findByPk(id)`**: Búsqueda optimizada por clave primaria (*Primary Key*). Retorna la instancia o `null`.
  ```javascript
  const usuario = await Usuario.findByPk(5);
  ```
- **`Model.findOne({ where: { ... } })`**: Retorna el primer registro que coincida con la condición o `null`.
  ```javascript
  const admin = await Usuario.findOne({ where: { email: 'admin@sistema.com' } });
  ```

---

## 2. Operadores de Sequelize (`Op`)

Para realizar comparaciones más allá de la igualdad simple, Sequelize exporta el objeto `Op`:

```javascript
const { Op } = require('sequelize');
```

| Operador | Equivalente SQL | Ejemplo de Uso en Sequelize |
| :--- | :--- | :--- |
| `Op.eq` | `=` | `{ edad: { [Op.eq]: 25 } }` |
| `Op.ne` | `!=` | `{ estado: { [Op.ne]: 'cancelado' } }` |
| `Op.gt` / `Op.gte` | `>`, `>=` | `{ precio: { [Op.gte]: 100 } }` |
| `Op.lt` / `Op.lte` | `<`, `<=` | `{ stock: { [Op.lt]: 5 } }` |
| `Op.between` | `BETWEEN ... AND` | `{ precio: { [Op.between]: [20, 80] } }` |
| `Op.in` / `Op.notIn` | `IN (...)` | `{ rol: { [Op.in]: ['admin', 'editor'] } }` |
| `Op.like` | `LIKE` | `{ email: { [Op.like]: '%@gmail.com' } }` |
| `Op.or` | `OR` | `{ [Op.or]: [{ activo: true }, { rol: 'admin' }] }` |
| `Op.and` | `AND` | `{ [Op.and]: [{ stock: { [Op.gt]: 0 } }, { precio: { [Op.lt]: 50 } }] }` |

---

## 3. Selección de Columnas, Orden y Paginación

### 3.1 Proyección de Atributos (`attributes`)
```javascript
// Traer solo columnas específicas
const datos = await Producto.findAll({
  attributes: ['id', 'nombre', 'precio']
});

// Excluir columnas sensibles
const usuarios = await Usuario.findAll({
  attributes: { exclude: ['password_hash'] }
});
```

### 3.2 Ordenamiento y Paginación
```javascript
const pagina2 = await Producto.findAll({
  where: { activo: true },
  order: [
    ['precio', 'DESC'], // Orden principal descendente
    ['nombre', 'ASC']   // Orden secundario ascendente
  ],
  limit: 10,  // Cantidad de filas por página
  offset: 10  // Saltear las primeras 10 filas (página 2)
});
```

---

## 4. Actualización y Eliminación (`update` y `destroy`)

- **`Model.update(nuevosValores, { where: { ... } })`**:
  Retorna un array con el número de filas afectadas `[filasAfectadas]`:
  ```javascript
  const [actualizados] = await Producto.update(
    { precio: 45.00 },
    { where: { id: 3 } }
  );
  ```

- **`Model.destroy({ where: { ... } })`**:
  Retorna la cantidad de filas eliminadas:
  ```javascript
  const eliminados = await Producto.destroy({
    where: { stock: 0 }
  });
  ```
