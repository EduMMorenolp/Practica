# Módulo 6: Conjuntos (`set`) y Álgebra de Conjuntos

---

## 🧭 Visión General: Colecciones Sin Duplicados y Álgebra Matemática

Un **Conjunto (`set`)** en Python es una colección no ordenada de elementos **únicos** y **mutables** en su contenedor, pero cuyos elementos individuales deben ser inmutables (*hashables* como números, cadenas o tuplas).

¿Por qué son tan valiosos en programación?
1. **Deduplicación Automática:** Convertir una lista a conjunto `set(mi_lista)` elimina al instante todos los elementos duplicados.
2. **Búsqueda Instantánea $O(1)$:** Al igual que las claves de los diccionarios, comprobar `x in mi_set` toma tiempo constante $O(1)$, haciéndolo miles de veces más rápido que buscar en listas.
3. **Operaciones de Álgebra de Conjuntos:** Unión, intersección, diferencia y diferencia simétrica directamente con operadores matemáticos (`|`, `&`, `-`, `^`).

---

## 1. Operaciones Algebraicas Fundamentales (OverAPI Reference)

Imagina dos grupos de usuarios:
* Grupo A: Usuarios que compraron en la tienda web: `A = {"juan", "maria", "carlos"}`
* Grupo B: Usuarios suscritos al newsletter: `B = {"maria", "carlos", "elena"}`

```text
               Unión (A | B)                    Intersección (A & B)
            ┌─────────┬─────────┐                ┌─────────┬─────────┐
            │  juan   │  maria  │  elena         │         │  maria  │         │
            │         │  carlos │                │         │  carlos │         │
            └─────────┴─────────┘                └─────────┴─────────┘
          Todos los usuarios únicos               Los que están en AMBOS

            Diferencia (A - B)                Diferencia Simétrica (A ^ B)
            ┌─────────┬─────────┐                ┌─────────┬─────────┐
            │  juan   │         │                │  juan   │         │  elena  │
            │         │         │                │         │         │         │
            └─────────┴─────────┘                └─────────┴─────────┘
            En A pero NUNCA en B                En A o en B, pero NO en ambos
```

### Sintaxis con Operadores y Métodos:

```python
A = {"juan", "maria", "carlos"}
B = {"maria", "carlos", "elena"}

# 1. Unión (| o .union()): Elementos en A, en B o en ambos
print(A | B)
# {'juan', 'maria', 'carlos', 'elena'}

# 2. Intersección (& o .intersection()): Solo elementos compartidos
print(A & B)
# {'maria', 'carlos'}

# 3. Diferencia (- o .difference()): Elementos que están en A pero NO en B
print(A - B)
# {'juan'}

# 4. Diferencia Simétrica (^ o .symmetric_difference()): En uno u otro, pero no en ambos
print(A ^ B)
# {'juan', 'elena'}
```

---

## 2. Relaciones Lógicas entre Conjuntos

Para evaluar la jerarquía o disyunción entre dos colecciones:

* `A.issubset(B)` (o `A <= B`): Retorna `True` si **todos** los elementos de A están contenidos dentro de B.
* `A.issuperset(B)` (o `A >= B`): Retorna `True` si A contiene a la totalidad de elementos de B.
* `A.isdisjoint(B)`: Retorna `True` si A y B **no tienen ningún elemento en común** (su intersección es vacía).

```python
permisos_requeridos = {"lectura", "escritura"}
permisos_usuario = {"lectura", "escritura", "ejecucion"}

# ¿El usuario tiene todos los permisos requeridos?
tiene_acceso = permisos_requeridos.issubset(permisos_usuario)
print("Acceso concedido:", tiene_acceso)  # True

pares = {2, 4, 6}
impares = {1, 3, 5}
print(pares.isdisjoint(impares))  # True (completamente disjuntos)
```

---

## 3. Mutación y Métodos de Modificación (OverAPI Reference)

* `s.add(elem)`: Agrega un único elemento al conjunto. Si ya existía, no hace nada (sin duplicados).
* `s.remove(elem)`: Elimina el elemento. Si **no existe**, lanza un `KeyError`.
* `s.discard(elem)`: **Eliminación segura.** Elimina el elemento si existe; si no existe, no hace nada y no lanza error.
* `s.pop()`: Extrae y retorna un elemento arbitrario (ya que no tienen orden fijo).
* `s.clear()`: Vacía todos los elementos del conjunto.
* `s.update(iterable)`: Añade múltiples elementos (unión in-place).

```python
tags = set()

# Agregar elementos
tags.add("python")
tags.add("backend")
tags.add("python")  # Ignorado automáticamente
print(tags)  # {'python', 'backend'}

# Descarte seguro (no da error si no existe)
tags.discard("frontend")  # No pasa nada, ejecución fluida
tags.discard("backend")   # Lo elimina
```

---

## 💡 Resumen Rápido

1. **Unicidad**: No permite duplicados por definición.
2. **Operadores Clave**: `|` (Unión), `&` (Intersección), `-` (Diferencia), `^` (Diferencia Simétrica).
3. **Membresía**: `elem in mi_set` es ultrarrápido ($O(1)$).
4. **Eliminación**: Prefiere `s.discard(x)` sobre `s.remove(x)` para evitar excepciones si el elemento no está presente.
5. **Crear conjunto vacío**: Usa `s = set()` (¡no uses `s = {}` porque crearía un diccionario vacío!).
