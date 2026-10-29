# Módulo 10: Programación Orientada a Objetos (POO) y Métodos Especiales

---

## 🧭 Visión General: El Modelo de Datos y el "Protocolo de Python"

En Python, la Programación Orientada a Objetos no es una imposición rígida de clases abstractas o interfaces burocráticas: es un sistema sumamente expresivo basado en el **Modelo de Datos de Python** (*Python Data Model*).

¿Cómo sabe Python qué hacer cuando escribes `len(mi_objeto)` o `objeto_a + objeto_b`?
> Python no tiene "trucos mágicos" exclusivos para los tipos del sistema.
> Si tu propia clase define los métodos especiales adecuados (llamados **métodos *dunder*** por el doble guion bajo `__nombre__`), tus objetos se comportarán **exactamente como los tipos nativos** de Python.

En este módulo aprenderás a diseñar clases robustas, instanciar objetos y sobrecargar operadores mediante los métodos especiales de la referencia OverAPI.

---

## 1. Anatomía de una Clase: `__init__`, `self` y Atributos

```python
class Usuario:
    # Atributo de CLASE: compartido por todas las instancias
    especie = "Humano"

    # Constructor (__init__): inicializa los atributos de INSTANCIA
    def __init__(self, username, email):
        self.username = username  # Atributo propio de esta instancia
        self.email = email
        self.activo = True

    # Método de instancia: el primer parámetro es siempre 'self' (la instancia actual)
    def desactivar(self):
        self.activo = False
```

```python
u1 = Usuario("ana99", "ana@web.com")
print(u1.username)  # "ana99"
u1.desactivar()
print(u1.activo)    # False
```

---

## 2. Representación en Cadena: `__str__` vs `__repr__` (OverAPI Reference)

¿Qué pasa cuando haces `print(mi_objeto)`? Por defecto, Python imprime algo feo como `<__main__.Usuario object at 0x7f4b8c>`.
Para darle una presentación legible, implementamos dos métodos complementarios:

* **`__str__(self)`:** Diseñado para **usuarios finales**. Debe ser un texto limpio, amigable y legible:
  `print(usuario)` o `str(usuario)`.
* **`__repr__(self)`:** Diseñado para **desarrolladores y depuración (debugging)**. Debe ser explícito, técnico e idealmente una cadena válida de código Python que permita recrear el objeto:
  `Usuario(username='ana99', email='ana@web.com')`.

```python
class CuentaBancaria:
    def __init__(self, titular, saldo):
        self.titular = titular
        self.saldo = saldo

    def __str__(self):
        return f"Cuenta de {self.titular}: Saldo ${self.saldo:.2f}"

    def __repr__(self):
        return f"CuentaBancaria(titular='{self.titular}', saldo={self.saldo})"

cuenta = CuentaBancaria("Carlos", 1500.0)
print(str(cuenta))   # "Cuenta de Carlos: Saldo $1500.00"
print(repr(cuenta))  # "CuentaBancaria(titular='Carlos', saldo=1500.0)"
```

---

## 3. Sobrecarga de Operadores de Comparación (OverAPI Reference)

Para que tus objetos puedan compararse con `<`, `>`, `==` u ordenarse con `sorted()`, implementamos los métodos de comparación:

| Método Mágico | Operador | Significado |
| :---: | :---: | :--- |
| `__eq__(self, other)` | `a == b` | Igual a (*Equal*) |
| `__ne__(self, other)` | `a != b` | Distinto de (*Not Equal*) |
| `__lt__(self, other)` | `a < b` | Menor que (*Less Than*) |
| `__le__(self, other)` | `a <= b` | Menor o igual (*Less or Equal*) |
| `__gt__(self, other)` | `a > b` | Mayor que (*Greater Than*) |
| `__ge__(self, other)` | `a >= b` | Mayor o igual (*Greater or Equal*) |

```python
class Producto:
    def __init__(self, nombre, precio):
        self.nombre = nombre
        self.precio = precio

    # Dos productos son iguales si tienen el mismo nombre y precio
    def __eq__(self, other):
        if not isinstance(other, Producto):
            return False
        return self.nombre == other.nombre and self.precio == other.precio

    # Comparación de menor que basada en precio (permite usar sorted)
    def __lt__(self, other):
        return self.precio < other.precio

p1 = Producto("Mouse", 25)
p2 = Producto("Teclado", 80)
print(p1 < p2)  # True (¡Usa __lt__ automáticamente!)
```

---

## 4. Secuencias, Aritmética y Llamables: `__len__`, `__add__`, `__call__`

* **`__len__(self)`:** Permite que tu objeto responda a la función `len(objeto)`.
* **`__add__(self, other)`:** Define qué ocurre cuando sumas dos objetos con el operador `+`.
* **`__call__(self, *args, **kwargs)`:** Permite que una instancia de tu clase **se invoque como una función**: `mi_objeto()`.

```python
class CarritoCompras:
    def __init__(self):
        self.items = []

    def agregar(self, producto):
        self.items.append(producto)

    # Responde a len(carrito)
    def __len__(self):
        return len(self.items)

    # Permite sumar dos carritos: carrito1 + carrito2
    def __add__(self, otro_carrito):
        nuevo = CarritoCompras()
        nuevo.items = self.items + otro_carrito.items
        return nuevo
```

---

## 💡 Resumen Rápido

1. **`__init__`**: Constructor inicializador de atributos.
2. **`__str__` vs `__repr__`**: `__str__` para personas (mensajes limpios); `__repr__` para desarrolladores (inspección de código).
3. **Comparadores**: Implementar `__eq__` y `__lt__` habilita igualdad y ordenamiento automático con `sorted()`.
4. **`__len__`**: Devuelve la longitud del objeto para `len()`.
5. **`__call__`**: Hace que una instancia de clase sea ejecutable como una función ordinaria.
