# Módulo 5: Diccionarios y Mapeos (`dict`)

---

## 🧭 Visión General: Búsquedas Instantáneas en Tiempo Constante $O(1)$

En una lista de un millón de elementos, buscar si existe un número específico requiere recorrer la lista elemento por elemento de principio a fin: es una operación de tiempo lineal $O(N)$. Si la lista crece, el tiempo de búsqueda se multiplica.

Los **Diccionarios (`dict`)** resuelven esto de forma mágica:
> **Almacenan pares de Clave-Valor (`key: value`) utilizando una Tabla Hash interna.**
> No importa si el diccionario tiene 10 elementos o 10.000.000 de elementos: consultar el valor de una clave toma exactamente la misma fracción de milisegundo: **tiempo constante $O(1)$**.

En este módulo aprenderás a consultar, actualizar, iterar y manipular diccionarios de forma segura y eficiente según la referencia oficial de Python.

---

## 1. Creación, Mutación y Consulta Básica (OverAPI Reference)

```python
# Creación con sintaxis de llaves
usuario = {
    "id": 101,
    "nombre": "Elena",
    "rol": "Admin",
    "activo": True
}

# 1. Cantidad de pares clave-valor
print(len(usuario))  # 4

# 2. Acceso directo por clave (Lanza KeyError si no existe)
print(usuario["nombre"])  # "Elena"
# print(usuario["telefono"])  # ¡Lanza KeyError!

# 3. Asignación y modificación
usuario["rol"] = "SuperAdmin"       # Modifica valor existente
usuario["email"] = "elena@corp.io"   # Agrega nueva clave

# 4. Eliminación con 'del'
del usuario["activo"]

# 5. Comprobación de membresía de claves con 'in' y 'not in' (Súper rápido: O(1))
print("email" in usuario)      # True
print("activo" not in usuario)  # True
```

---

## 2. Acceso Seguro con `.get()` y `.setdefault()`

En aplicaciones reales, los datos suelen venir incompletos (por ejemplo, desde una API o archivo JSON). Usar `d[key]` puede tumbar el programa con un `KeyError`. Python ofrece dos métodos elegantes:

### 2.1 `d.get(clave, valor_por_defecto)`
Intenta obtener el valor. Si la clave no existe, retorna el valor por defecto en lugar de romper el programa:
```python
perfil = {"nombre": "Carlos"}

# Retorna None si no existe
print(perfil.get("edad"))               # None

# O el valor de respaldo que tú elijas
print(perfil.get("edad", 18))           # 18
print(perfil.get("pais", "Desconocido"))# "Desconocido"
```

### 2.2 `d.setdefault(clave, valor_inicial)`
Si la clave **ya existe**, retorna su valor actual sin tocarla.
Si la clave **no existe**, la inserta en el diccionario con el valor inicial y lo retorna:
```python
# Muy útil para agrupar elementos en listas:
conteo_palabras = {}

# Si "python" no existe, la inicializa en 0 y luego le sumamos 1
conteo_palabras["python"] = conteo_palabras.get("python", 0) + 1
```

---

## 3. Vistas Iterables: `.keys()`, `.values()`, `.items()`

Python proporciona tres vistas dinámicas para recorrer un diccionario:

```python
precios = {"laptop": 1200, "mouse": 25, "teclado": 80}

# 1. d.keys(): Solo las claves
for producto in precios.keys():
    print(producto)

# 2. d.values(): Solo los valores
print("Suma total:", sum(precios.values()))  # 1305

# 3. d.items(): Tuplas (clave, valor) - La forma idiomática estándar
for producto, precio in precios.items():
    print(f"El producto {producto} cuesta ${precio}")
```

---

## 4. Métodos de Extracción y Fusión (OverAPI Reference)

* `d.pop(key[, default])`: Extrae el valor y elimina la clave del diccionario. Si no existe y no das valor por defecto, lanza `KeyError`.
* `d.popitem()`: Extrae y elimina el **último par clave-valor** insertado (comportamiento LIFO en Python 3.7+).
* `d.update(otro_dict)`: Fusiona otro diccionario o pares clave-valor dentro de `d`.
* `d.clear()`: Vacía completamente el diccionario.
* `dict.fromkeys(secuencia, valor_inicial)`: Crea un nuevo diccionario a partir de una lista de claves, todas con el mismo valor inicial.

```python
# fromkeys:
estados = dict.fromkeys(["server1", "server2", "server3"], "ONLINE")
print(estados)
# {'server1': 'ONLINE', 'server2': 'ONLINE', 'server3': 'ONLINE'}

# update:
config_base = {"tema": "oscuro", "fuente": 14}
config_usuario = {"fuente": 16, "notificaciones": True}
config_base.update(config_usuario)
print(config_base)
# {'tema': 'oscuro', 'fuente': 16, 'notificaciones': True}
```

---

## 💡 Resumen Rápido

1. **Rendimiento**: Búsquedas, inserciones y borrados en tiempo constante $O(1)$.
2. **Acceso Seguro**: Usa `.get(k, default)` para evitar `KeyError`.
3. **Iteración Idiomática**: Recorre con `for k, v in d.items():`.
4. **Membresía**: `k in d` comprueba únicamente si la **clave** existe (no el valor).
5. **Fusión**: `.update()` sobrescribe claves coincidentes e inserta las nuevas.
