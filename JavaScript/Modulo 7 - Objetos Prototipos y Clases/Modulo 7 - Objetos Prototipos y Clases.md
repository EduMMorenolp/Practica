# 📖 Módulo 7: Objetos, Prototipos y Clases (Object & OOP)

JavaScript utiliza un modelo basado en prototipos con una sintaxis moderna de clases (ES6) para Programación Orientada a Objetos.

---

## 1. Objetos Literales y Métodos
- Sintaxis concisa y propiedades dinámicas: `obj[variable]`.
- La palabra clave `this` apunta al objeto que invoca el método.
- Desestructuración: `const { nombre, edad } = persona;`.

---

## 2. Métodos Estáticos de Object
- Inspección:
  - `Object.keys(obj)`: Array de claves.
  - `Object.values(obj)`: Array de valores.
  - `Object.entries(obj)`: Array de pares `[clave, valor]`.
- Asignación y clonación: `Object.assign({}, original)` o `{ ...original }`.
- Inmutabilidad: `Object.freeze(obj)` impide modificar o agregar propiedades.

---

## 3. Clases en JavaScript (ES6 OOP)
Sintaxis limpia sobre el modelo prototípico:
- `class Nombre { ... }`: Declaración de clase.
- `constructor(...)`: Método de inicialización llamado al hacer `new`.
- Métodos estáticos: `static metodoUtil()`.
- Campos y métodos privados (ES2022): `#propiedadPrivada`.
- Herencia: `class Hijo extends Padre` y llamada al constructor padre con `super()`.

---

## 🛠️ Ejercicios Prácticos del Módulo (1 a 1 por tema)

1. [01_objetos_literales.js](./01_objetos_literales.js):
   - **1.1** Notación punto y corchetes dinámicos.
   - **1.2** Métodos con `this` y desestructuración de propiedades.

2. [02_metodos_object.js](./02_metodos_object.js):
   - **2.1** Extracción con `Object.keys()`, `values()` y `entries()`.
   - **2.2** Inmutabilidad con `Object.freeze()` y clonación con spread.

3. [03_clases_y_herencia.js](./03_clases_y_herencia.js):
   - **3.1** Creación de clase `CuentaBancaria` con método privado `#saldo`.
   - **3.2** Herencia con `extends` y `super()`.

---

### 💻 Para probar cada archivo en tu terminal:
```bash
node "JavaScript/Modulo 7 - Objetos Prototipos y Clases/01_objetos_literales.js"
node "JavaScript/Modulo 7 - Objetos Prototipos y Clases/02_metodos_object.js"
node "JavaScript/Modulo 7 - Objetos Prototipos y Clases/03_clases_y_herencia.js"
```
