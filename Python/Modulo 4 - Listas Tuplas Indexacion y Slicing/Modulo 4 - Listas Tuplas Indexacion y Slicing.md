# Módulo 4: Listas, Tuplas, Indexación y Slicing

---

## 🧭 Visión General: Mutabilidad vs Inmutabilidad

En Python, las dos secuencias ordenadas más importantes son las **Listas** y las **Tuplas**:
* **Lista (`list`): Mutabilidad.** Es como una pizarra en la que puedes añadir, borrar o cambiar elementos en cualquier momento. Se definen con corchetes: `[1, 2, 3]`.
* **Tupla (`tuple`): Inmutabilidad.** Es como un documento firmado en piedra: una vez creada, su contenido y orden jamás pueden modificarse. Se definen con paréntesis: `(1, 2, 3)`.

¿Por qué querrías una tupla si las listas son más flexibles?
1. **Seguridad:** Garantiza que funciones externas no modifiquen accidentalmente datos críticos.
2. **Rendimiento:** Son más ligeras en memoria y más rápidas de iterar.
3. **Claves de Diccionario:** Dado que son inmutables (y por ende tienen un *hash* fijo), las tuplas pueden utilizarse como claves de diccionarios o elementos de conjuntos; las listas **no**.

---

## 1. Indexación Positiva y Negativa (OverAPI Reference)

Python permite indexar desde ambos extremos de la secuencia:

```text
Índices positivos:    0    1    2    3    4    5
Elementos:          ['A', 'B', 'C', 'D', 'E', 'F']
Índices negativos:   -6   -5   -4   -3   -2   -1
```

```python
a = [10, 20, 30, 40, 50, 60]

print(len(a))  # 6 elementos
print(a[0])    # 10 (primer elemento)
print(a[5])    # 60 (último elemento usando positivo)
print(a[-1])   # 60 (último elemento usando negativo)
print(a[-2])   # 50 (penúltimo elemento)
```

---

## 2. El Arte del Slicing: `[inicio : fin : paso]`

El slicing (*rebanado*) permite extraer fragmentos de una secuencia sin modificar la original.
La regla fundamental del corte es que el índice `fin` es **exclusivo** (no se incluye en el resultado):

$$\text{Rango extraído} = [\text{inicio}, \text{fin})$$

```python
a = [0, 1, 2, 3, 4, 5]

# 1. Desde el índice 1 hasta el final
print(a[1:])     # [1, 2, 3, 4, 5]

# 2. Desde el inicio hasta el índice 5 (excluye el 5)
print(a[:5])     # [0, 1, 2, 3, 4]

# 3. Desde el inicio hasta los últimos 2 elementos excluidos
print(a[:-2])    # [0, 1, 2, 3]

# 4. Rango intermedio entre índice 1 e índice 3 (índices 1 y 2)
print(a[1:3])    # [1, 2]

# 5. Entre el índice 1 y el penúltimo
print(a[1:-1])   # [1, 2, 3, 4]

# 6. Salto o paso (step): a[::2] extrae elementos en posiciones pares
print(a[::2])    # [0, 2, 4]

# 7. Invertir una secuencia completa con paso negativo
print(a[::-1])   # [5, 4, 3, 2, 1, 0]

# 8. Copia superficial (Shallow copy)
b = a[:]         # Crea una copia independiente en memoria
```

---

## 3. Métodos Principales de Listas (OverAPI Reference)

| Método | ¿Qué hace? | Ejemplo |
| :--- | :--- | :--- |
| `lista.append(x)` | Agrega un único elemento al final | `[1].append(2)` $\rightarrow$ `[1, 2]` |
| `lista.extend(iterable)` | Concatena múltiples elementos al final | `[1].extend([2, 3])` $\rightarrow$ `[1, 2, 3]` |
| `lista.insert(i, x)` | Inserta el elemento `x` en la posición `i` | `[1, 3].insert(1, 2)` $\rightarrow$ `[1, 2, 3]` |
| `lista.pop([i])` | Extrae y elimina el elemento en `i` (por defecto el último) | `[1, 2, 3].pop()` $\rightarrow$ retorna `3` |
| `lista.remove(x)` | Elimina la **primera aparición** del valor `x` | `['a', 'b'].remove('a')` |
| `lista.reverse()` | Invierte los elementos **in-place** (muta la lista) | `[1, 2].reverse()` $\rightarrow$ `[2, 1]` |
| `lista.count(x)` | Cuenta cuántas veces aparece `x` | `[1, 2, 1].count(1)` $\rightarrow$ `2` |
| `lista.index(x)` | Retorna el índice de la primera aparición de `x` | `['a', 'b'].index('b')` $\rightarrow$ `1` |

```python
tareas = ["revisar_email", "programar"]

# Agregar al final
tareas.append("hacer_backup")

# Insertar con prioridad en la posición 0
tareas.insert(0, "atender_urgencia")

# Atender la última tarea pendiente (comportamiento de pila LIFO)
tarea_actual = tareas.pop()
print("Procesando:", tarea_actual)  # "hacer_backup"
```

---

## 4. Desempaquetado de Tuplas y Listas (*Unpacking*)

Python permite asignar múltiples variables simultáneamente a partir de una tupla o lista:

```python
# 1. Desempaquetado básico
coordenadas = (10.5, -45.2)
latitud, longitud = coordenadas

# 2. Desempaquetado con operador resto (*)
puntuaciones = [100, 95, 88, 70, 65, 40]
oro, plata, bronce, *resto = puntuaciones

print("Podio:", oro, plata, bronce)  # 100, 95, 88
print("Restantes:", resto)           # [70, 65, 40]

# 3. Intercambio de variables idiomático sin variable temporal:
a = 5
b = 10
a, b = b, a  # ¡Intercambio instantáneo! a vale 10, b vale 5
```

---

## 💡 Resumen Rápido

1. **Listas**: Mutables `[]`, perfectas para colecciones dinámicas.
2. **Tuplas**: Inmutables `()`, ideales para registros fijos y claves seguras.
3. **Indexación Negativa**: `-1` es el último elemento, `-2` el penúltimo.
4. **Slicing**: `[inicio:fin:paso]`; `fin` es siempre excluyente.
5. **Inversión**: `secuencia[::-1]` invierte cualquier lista, tupla o string sin mutar.
6. **Copia**: `a[:]` genera una copia superficial independiente.
