# Módulo 8: Funciones, Argumentos Flexibles y Lambdas

---

## 🧭 Visión General: Modularización y Flexibilidad en Python

Las funciones en Python son **ciudadanos de primera clase** (*first-class citizens*):
* Pueden asignarse a variables.
* Pueden pasarse como argumentos a otras funciones.
* Pueden ser retornadas por otras funciones (permitiendo closures y decoradores).

Python ofrece uno de los sistemas de paso de parámetros más expresivos y flexibles del mundo del software: puedes recibir un número indeterminado de argumentos posicionales (`*args`), capturar opciones nombradas arbitrarias (`**kwargs`) y definir funciones anónimas en una sola línea (`lambda`).

---

## 1. Parámetros, Argumentos y la Trampa del Valor por Defecto Mutable

En Python puedes asignar valores predeterminados a los parámetros:

```python
def conectar(host="localhost", puerto=5432, timeout=30):
    return f"Conectando a {host}:{puerto} (timeout: {timeout}s)"
```

### ⚠️ ¡La Trampa Mortal de Python!: Valores por Defecto Mutables
Observa este error clásico que cometen miles de programadores:

```python
# ❌ INCORRECTO: ¡NUNCA uses listas o diccionarios vacíos como valor por defecto!
def agregar_tarea(tarea, lista=[]):
    lista.append(tarea)
    return lista

print(agregar_tarea("Comprar pan"))  # ['Comprar pan']
print(agregar_tarea("Lavar auto"))   # ['Comprar pan', 'Lavar auto']  <-- ¡LA LISTA PERSISTE ENTRE LLAMADAS!
```

**¿Por qué sucede esto?**
En Python, los valores por defecto de una función **se evalúan una sola vez, cuando el archivo se carga**, no cada vez que se llama a la función. Si el valor es mutable (como una lista `[]`), ¡todas las llamadas compartirán la misma lista en memoria!

```python
# ✅ LA FORMA CORRECTA Y PROFESIONAL:
def agregar_tarea(tarea, lista=None):
    if lista is None:
        lista = []
    lista.append(tarea)
    return lista
```

---

## 2. Argumentos Variables: `*args` y `**kwargs`

¿Qué pasa si quieres escribir una función que sume 2 números, pero también pueda sumar 5 o 100 números?

### 2.1 `*args`: Empaquetar Argumentos Posicionales en una Tupla
El asterisco `*` le dice a Python: *"Toma todos los argumentos posicionales extras y empaquétalos dentro de una tupla llamada `args`"*:

```python
def sumar_todos(*args):
    # 'args' es una tupla: (1, 2, 3, 4, 5)
    return sum(args)

print(sumar_todos(1, 2))        # 3
print(sumar_todos(1, 2, 3, 4))  # 10
```

### 2.2 `**kwargs`: Empaquetar Argumentos Nombrados en un Diccionario
El doble asterisco `**` le dice a Python: *"Toma todos los argumentos con nombre (`clave=valor`) no declarados y empaquétalos dentro de un diccionario llamado `kwargs`"*:

```python
def crear_perfil(nombre, **kwargs):
    # 'kwargs' es un diccionario: {'rol': 'Admin', 'pais': 'Chile'}
    print(f"Usuario: {nombre}")
    for clave, valor in kwargs.items():
        print(f"  {clave}: {valor}")

crear_perfil("Lucía", rol="Admin", pais="Chile", nivel=5)
```

---

## 3. Desempaquetado al Invocar Funciones

Los operadores `*` y `**` también funcionan en sentido inverso: para **desempaquetar** una lista o diccionario al pasarlo como argumento:

```python
def configurar_servidor(host, puerto, ssl=False):
    return f"https://{host}:{puerto}" if ssl else f"http://{host}:{puerto}"

# Desempaquetar lista/tupla con *:
params_posicionales = ["192.168.1.10", 8080]
print(configurar_servidor(*params_posicionales))  # "http://192.168.1.10:8080"

# Desempaquetar diccionario con **:
opciones = {"host": "api.empresa.com", "puerto": 443, "ssl": True}
print(configurar_servidor(**opciones))            # "https://api.empresa.com:443"
```

---

## 4. Funciones Anónimas (`lambda`) y Ordenamiento Personalizado

Una función `lambda` es una función pequeña, anónima y de una sola línea:

$$\text{lambda } \text{argumentos}: \text{expresion\_retornada}$$

Son ideales cuando necesitas pasar una lógica rápida a funciones como `sorted()`, `map()` o `filter()`:

```python
usuarios = [
    {"nombre": "Carlos", "edad": 35, "puntos": 95},
    {"nombre": "Ana", "edad": 22, "puntos": 120},
    {"nombre": "Beto", "edad": 28, "puntos": 80}
]

# Ordenar por edad ascendente:
por_edad = sorted(usuarios, key=lambda u: u["edad"])

# Ordenar por puntos descendente (usando signo negativo):
por_puntos = sorted(usuarios, key=lambda u: -u["puntos"])
```

---

## 💡 Resumen Rápido

1. **Valores Mutables por Defecto**: Nunca uses `def f(x=[]);` usa siempre `def f(x=None): if x is None: x = []`.
2. **`*args`**: Captura argumentos posicionales adicionales en una `tuple`.
3. **`**kwargs`**: Captura argumentos nombrados adicionales en un `dict`.
4. **Desempaquetado**: Pasa colecciones con `*lista` y diccionarios con `**dict`.
5. **Lambdas**: Funciones breves `lambda x: x * 2` perfectas para la clave `key=` de `sorted()`.
