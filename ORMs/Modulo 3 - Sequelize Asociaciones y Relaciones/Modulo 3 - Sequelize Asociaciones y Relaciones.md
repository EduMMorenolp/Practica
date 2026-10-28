# Módulo 3: Sequelize Asociaciones y Relaciones

## 🎯 Objetivo
Aprender a modelar relaciones entre tablas en **Sequelize**, configurando asociaciones **1 a 1** (`hasOne` / `belongsTo`), **1 a Muchos** (`hasMany` / `belongsTo`), **Muchos a Muchos** (`belongsToMany` con tabla intermedia) y realizando consultas con carga ansiosa (*Eager Loading*) mediante la opción **`include`**.

---

## 1. Tipos de Asociaciones en Sequelize

Sequelize provee 4 métodos fundamentales para vincular modelos:
- `hasOne`: Relación 1 a 1 (la clave foránea reside en el modelo destino).
- `belongsTo`: Relación 1 a 1 o N a 1 (la clave foránea reside en el modelo origen).
- `hasMany`: Relación 1 a N (la clave foránea reside en el modelo destino).
- `belongsToMany`: Relación N a N (requiere una tabla intermedia).

---

## 2. Relación 1 a Muchos (1 : N)

Es la relación más común en bases de datos relacionales (ej. un Usuario tiene muchos Pedidos, y cada Pedido pertenece a un Usuario):

```javascript
// 1. Definir la relación bidireccional
Usuario.hasMany(Pedido, {
  foreignKey: 'usuarioId',
  as: 'pedidos'           // Alias opcional para las consultas
});

Pedido.belongsTo(Usuario, {
  foreignKey: 'usuarioId',
  as: 'usuario'
});
```

### Consultar con Carga Ansiosa (*Eager Loading* con `include`):
Al consultar el Usuario, puedes solicitar que Sequelize incluya automáticamente todos sus Pedidos asociados (haciendo un `LEFT OUTER JOIN` por detrás):

```javascript
const usuarioConPedidos = await Usuario.findOne({
  where: { id: 1 },
  include: [{
    model: Pedido,
    as: 'pedidos'
  }]
});

console.log(usuarioConPedidos.nombre);
console.log(usuarioConPedidos.pedidos.length); // Acceso directo al array de pedidos
```

---

## 3. Relación Muchos a Muchos (N : M)

Ocurre cuando múltiples registros de una tabla se asocian con múltiples registros de otra (ej. Estudiantes y Cursos, o Publicaciones y Etiquetas). Requiere el atributo `through` para especificar la tabla intermedia:

```javascript
// Relación N:M
Estudiante.belongsToMany(Curso, { through: 'Inscripciones' });
Curso.belongsToMany(Estudiante, { through: 'Inscripciones' });
```

### Consultar con `include`:
```javascript
const cursoConAlumnos = await Curso.findByPk(10, {
  include: [Estudiante]
});

console.log('Alumnos inscritos:', cursoConAlumnos.Estudiantes.length);
```

---

## 4. Métodos Especiales Generados por Sequelize

Cuando defines una asociación, Sequelize añade automáticamente métodos mágicos a las instancias:
- Para `hasMany`:
  - `usuario.getPedidos()`
  - `usuario.createPedido({ total: 100 })`
  - `usuario.addPedido(pedidoInstancia)`
- Para `belongsToMany`:
  - `estudiante.addCurso(cursoInstancia)`
  - `estudiante.getCursos()`
