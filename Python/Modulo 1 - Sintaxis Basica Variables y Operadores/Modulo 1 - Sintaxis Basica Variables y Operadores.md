# Módulo 1: Sintaxis Básica, Variables, Tipos y Operadores

---

## 🧭 Visión General: La Filosofía de Python

Python es conocido mundialmente por su sintaxis limpia, legible y cercana al pseudocódigo en inglés. Sin embargo, detrás de esa aparente simplicidad existe un sistema de tipos riguroso y elegante:
* **Tipado Dinámico:** No necesitas declarar si una variable es un entero o un texto (`x = 10` y luego `x = "hola"` es perfectamente válido). Python infiere el tipo automáticamente en tiempo de ejecución.
* **Fuertemente Tipado:** Python nunca intentará "adivinar" operaciones absurdas. Si intentas sumar un número y un texto (`"5" + 2`), en lenguajes como JavaScript obtendrías `"52"`; en Python obtendrás un explícito e insobornable `TypeError`.

En este módulo aprenderás las bases fundamentales del lenguaje, cómo almacena información en memoria y cómo operar con sus tipos primitivos.

---

## 1. Variables y Asignación: Las Etiquetas de Memoria

A diferencia de lenguajes como C o C++ (donde una variable es una "caja de tamaño fijo" en memoria), en Python:
> **Una variable es simplemente una etiqueta adhesiva (o puntero) que apunta a un objeto en memoria.**

```python
# Asignamos la etiqueta 'edad' al objeto entero 25
edad = 25

# Asignamos la etiqueta 'pi' al objeto flotante 3.14159
pi = 3.14159

# Asignamos la etiqueta 'nombre' a la cadena de texto
nombre = "Guido"

# Asignamos un booleano (Notar las mayúsculas: True o False)
activo = True

# El valor especial de ausencia: None (equivalente a null en otros lenguajes)
resultado = None
```

---

## 2. Los 5 Tipos Primitivos Esenciales

| Tipo | Clase en Python | ¿Qué representa? | Ejemplos |
| :--- | :--- | :--- | :--- |
| **Entero** | `int` | Números enteros sin límite de tamaño arbitrario | `42`, `-10`, `0`, `1000000000000` |
| **Punto Flotante** | `float` | Números con decimales (precisión IEEE 754 de 64 bits) | `3.14`, `-0.001`, `2.0`, `1e-4` |
| **Booleano** | `bool` | Valores lógicos binarios de verdad | `True`, `False` |
| **Cadena de Texto** | `str` | Secuencia inmutable de caracteres Unicode | `"Hola"`, `'Python'`, `"""Multi-línea"""` |
| **Nulo** | `NoneType` | Representa la ausencia intencional de valor | `None` |

Para consultar el tipo de cualquier variable en cualquier momento, usamos la función integrada `type()`:
```python
x = 100
print(type(x))  # <class 'int'>
```

---

## 3. Conversión Explícita de Tipos (*Type Casting*)

Dado que Python no convierte tipos automáticamente de forma insegura, debemos indicar cuándo transformar un dato:

```python
# 1. De texto a entero
texto_numero = "128"
entero = int(texto_numero)  # 128

# 2. De entero a flotante
decimal = float(50)  # 50.0

# 3. De número a texto
texto = str(99.9)  # "99.9"

# 4. A booleano (Regla de Truthy y Falsy)
# En Python, los valores vacíos o numéricamente cero son Falsy (False):
# 0, 0.0, "", [], {}, None son todos False.
# Cualquier otro valor es Truthy (True):
print(bool(0))       # False
print(bool(""))      # False
print(bool(None))    # False
print(bool(42))      # True
print(bool("hola"))  # True
```

---

## 4. Operadores Aritméticos

Python ofrece tanto los operadores matemáticos tradicionales como operadores enteros especializados:

| Operador | Nombre | Ejemplo | Resultado | Explicación |
| :---: | :--- | :---: | :---: | :--- |
| `+` | Suma | `7 + 3` | `10` | Suma normal |
| `-` | Resta | `7 - 3` | `4` | Resta normal |
| `*` | Multiplicación | `7 * 3` | `21` | Multiplicación normal |
| `/` | **División Flotante** | `7 / 2` | `3.5` | **Siempre** retorna un número decimal `float` |
| `//` | **División Entera (Floor)** | `7 // 2` | `3` | Descarta la parte decimal y redondea hacia abajo |
| `%` | **Módulo (Resto)** | `7 % 3` | `1` | El resto entero que sobra de la división |
| `**` | **Exponenciación** | `2 ** 8` | `256` | $2^8 = 256$ (potencia) |

```python
# Ejemplo de uso práctico:
segundos_totales = 3665

horas = segundos_totales // 3600       # 1 hora entera
segundos_restantes = segundos_totales % 3600 # 65 segundos sobrantes
minutos = segundos_restantes // 60    # 1 minuto entero
segundos = segundos_restantes % 60     # 5 segundos

print(f"{horas}h {minutos}m {segundos}s")  # 1h 1m 5s
```

---

## 5. Operadores de Comparación y Lógica

### 5.1 Comparación de Valores
* `==`: Igual a (compara **valores**)
* `!=`: Diferente de
* `>`, `<`: Mayor / Menor que
* `>=`, `<=`: Mayor o igual / Menor o igual

### 5.2 Lógica Booleana en Inglés Natural
A diferencia de otros lenguajes que usan símbolos como `&&`, `||`, `!`, Python utiliza palabras en inglés:
* `and`: Retorna `True` únicamente si **ambas** condiciones son verdaderas.
* `or`: Retorna `True` si **al menos una** condición es verdadera.
* `not`: Invierte el valor lógico (`not True` $\rightarrow$ `False`).

```python
edad = 20
tiene_licencia = True

# Ambas deben cumplirse
puede_conducir = (edad >= 18) and tiene_licencia
print("¿Puede conducir?:", puede_conducir)  # True
```

---

## 6. La Diferencia Crucial: `==` vs `is`

Uno de los errores más comunes para quienes aprenden Python es confundir `==` con `is`:
* **`==` (Igualdad de Valor):** Pregunta: *"¿Tienen estas dos variables el mismo contenido?"*
* **`is` (Identidad de Objeto):** Pregunta: *"¿Apuntan estas dos variables a exactamente la misma dirección de memoria física?"*

```python
lista_a = [1, 2, 3]
lista_b = [1, 2, 3]

# Tienen el mismo contenido:
print(lista_a == lista_b)  # True

# Pero son dos listas distintas en memoria:
print(lista_a is lista_b)  # False

# La convención oficial de Python para comparar con None es SIEMPRE usar 'is':
resultado = None
if resultado is None:
    print("No hay resultado disponible.")
```

---

## 💡 Resumen Rápido

1. **Variables**: Son referencias dinámicas a objetos; no requieren declaración de tipos.
2. **Tipos Primitivos**: `int`, `float`, `bool`, `str`, `NoneType`.
3. **División**: `/` da decimales siempre; `//` da la parte entera truncada; `%` da el resto.
4. **Condiciones**: Se escriben con palabras humanas: `and`, `or`, `not`.
5. **Identidad**: Usa `==` para valores y `is` para comparar con `None`.
