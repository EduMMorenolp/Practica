# Módulo 7: Estructuras de Control e Iteración Avanzada

---

## 🧭 Visión General: El Flujo Idiomático de Python

En muchos lenguajes tradicionales como C, Java o JavaScript, recorrer una lista requiere manejar manualmente índices numéricos: `for (int i = 0; i < len; i++)`.

Python abraza una filosofía diferente:
> **Todo lo que sea una secuencia o colección es directamente iterable por naturaleza.**
> No recorres índices numéricos; recorres directamente los objetos reales: `for elemento in coleccion:`.

En este módulo aprenderás a controlar el flujo de ejecución mediante condicionales elegantes, bucles controlados, la cláusula única `else` en bucles y los iteradores nativos esenciales (`range`, `enumerate`, `zip`).

---

## 1. Condicionales y el Operador Ternario

La estructura de decisión en Python usa indentación estricta de 4 espacios (sin llaves `{}`):

```python
edad = 19

if edad < 13:
    categoria = "Niño"
elif edad < 18:
    categoria = "Adolescente"
else:
    categoria = "Adulto"
```

### El Operador Ternario (Expresión Condicional en una Línea)
Permite asignar un valor según una condición de forma súper compacta y legible:

$$\text{valor} = \text{resultado\_si\_verdadero} \text{ if } \text{condicion} \text{ else } \text{resultado\_si\_falso}$$

```python
es_admin = True
rol = "Administrador" if es_admin else "Usuario Estándar"
print(rol)  # "Administrador"
```

---

## 2. Bucles `for` y `while`: Control con `break` y `continue`

* `break`: Interrumpe y **termina de inmediato** el bucle por completo.
* `continue`: Salta el resto de la iteración actual y **avanza de inmediato a la siguiente**.

```python
# Imprimir solo números impares, deteniéndose si encuentra un número negativo:
numeros = [1, 3, 4, 7, -2, 9]

for n in numeros:
    if n < 0:
        print("¡Número negativo encontrado, cancelando!")
        break
    if n % 2 == 0:
        continue  # Salta los números pares
    print("Impar procesado:", n)
```

---

## 3. La Cláusula Secreta de Python: `else` en Bucles

Pocos desarrolladores conocen que los bucles `for` y `while` en Python pueden llevar un bloque `else` al final.

### ¿Cuándo se ejecuta el `else` del bucle?
> **El bloque `else` se ejecuta ÚNICAMENTE si el bucle terminó de forma natural (es decir, si NUNCA se ejecutó un `break`).**
> Si el bucle se interrumpe con `break`, el `else` es ignorado.

Esto reemplaza de forma elegante las banderas (*flags*) típicas en algoritmos de búsqueda:

```python
servidores = ["srv-us", "srv-eu", "srv-asia"]
objetivo = "srv-latam"

for srv in servidores:
    if srv == objetivo:
        print(f"Encontrado: {srv}")
        break
else:
    # Este bloque solo corre si buscamos en todos y NO lo encontramos
    print(f"El servidor '{objetivo}' no existe en el clúster.")
```

---

## 4. Iteradores Utilitarios Indispensables: `range`, `enumerate`, `zip`

### 4.1 `range(start, stop[, step])`
Genera secuencias aritméticas bajo demanda sin cargar todos los números en memoria:
```python
# Del 0 al 4
for i in range(5):
    pass

# Del 10 al 50 de 10 en 10
list(range(10, 60, 10))  # [10, 20, 30, 40, 50]
```

### 4.2 `enumerate(iterable, start=0)`: El Índice Automático
¿Necesitas tanto el índice como el elemento? **Nunca uses `range(len(lista))`**: usa `enumerate()`:

```python
lenguajes = ["Python", "Rust", "Go"]

for i, nombre in enumerate(lenguajes, start=1):
    print(f"Puesto {i}: {nombre}")
# Puesto 1: Python
# Puesto 2: Rust
# Puesto 3: Go
```

### 4.3 `zip(iterable1, iterable2, ...)`: Paralelismo de Listas
Empareja elementos de múltiples listas como una cremallera (*zipper*):

```python
nombres = ["Ana", "Beto", "Carlos"]
puntajes = [95, 88, 72]

for nombre, nota in zip(nombres, puntajes):
    print(f"{nombre} obtuvo {nota} puntos")
```

---

## 💡 Resumen Rápido

1. **Ternario**: `a if cond else b`.
2. **Control**: `break` aborta el bucle; `continue` salta a la siguiente vuelta.
3. **Loop Else**: Se ejecuta solo si el bucle terminó sin ser interrumpido por un `break`.
4. **Enumerate**: `for i, item in enumerate(lista):` para tener el índice limpio.
5. **Zip**: `for x, y in zip(lista1, lista2):` para iterar colecciones en paralelo.
