# Módulo 3: Formateo de Texto e Interpolación

---

## 🧭 Visión General: La Evolución del Formateo en Python

A lo largo de su historia, Python ha ofrecido tres formas de formatear e interpolar variables dentro de cadenas de texto:
1. **El Operador Clásico `%` (Estilo `printf` de C):** Presente desde los orígenes de Python. Sigue siendo muy común en bases de código heredadas y logs del sistema.
2. **El Método `str.format()` (Python 2.6 / 3.0+):** Introdujo mayor flexibilidad, marcadores posicionales y reutilización de argumentos.
3. **F-Strings (Formatted String Literals, Python 3.6+):** La sintaxis moderna más limpia, legible y rápida de la industria.

En este módulo aprenderás las tres técnicas, los especificadores de formato numérico de la referencia OverAPI y cómo alinear reportes tabulares de forma impecable.

---

## 1. El Operador Clásico `%` (Especificadores OverAPI)

La sintaxis clásica utiliza la plantilla `"formato % (valores)"`:

```python
nombre = "Lucía"
edad = 28
salario = 2450.758

# %s = String, %d = Entero decimal, %.2f = Flotante con 2 decimales
mensaje = "Empleado: %s | Edad: %d | Salario: $%.2f" % (nombre, edad, salario)
print(mensaje)
# "Empleado: Lucía | Edad: 28 | Salario: $2450.76"
```

### Tabla de Especificadores Principales:

| Código | Significado | Ejemplo | Salida |
| :---: | :--- | :---: | :---: |
| `%d` o `%i` | Entero con signo | `"%04d" % 42` | `"0042"` |
| `%f` | Punto flotante decimal | `"%.2f" % 3.14159` | `"3.14"` |
| `%s` | Cadena (convierte con `str()`) | `"%s" % [1, 2]` | `"[1, 2]"` |
| `%r` | Representación técnica (`repr()`) | `"%r" % "hola"` | `"'hola'"` |
| `%x` / `%X` | Hexadecimal minúscula / mayúscula | `"%x - %X" % (255, 255)` | `"ff - FF"` |
| `%o` | Octal | `"%o" % 8` | `"10"` |
| `%e` / `%E` | Notación científica exponencial | `"%.2e" % 1500000` | `"1.50e+06"` |
| `%%` | Carácter literal `%` | `"%d%%" % 100` | `"100%"` |

---

## 2. El Método `str.format()`

Permite usar llaves `{}` como marcadores de posición:

```python
# 1. Posicional implícito
print("Hola {}, tienes {} mensajes nuevos".format("Ana", 5))

# 2. Posicional explícito (permite reordenar y repetir)
print("{0} compró {1} manzanas. {0} está feliz.".format("Carlos", 3))

# 3. Argumentos nombrados
print("Servidor: {host}:{puerto}".format(host="localhost", puerto=8080))

# 4. Formateo numérico dentro de las llaves {:especificador}
print("Total: ${:,.2f}".format(1250000.5))  # "Total: $1,250,000.50" (con coma de miles)
```

---

## 3. F-Strings Modernos (Python 3.6+)

Los f-strings se prefijan con la letra `f` antes de la comilla: `f"..."`. Permiten evaluar **cualquier expresión de Python** directamente dentro de las llaves `{}`:

```python
producto = "Teclado Mecánico"
precio_unitario = 45.0
cantidad = 3

# Evaluación de expresiones matemáticas directas:
print(f"Total por {cantidad} {producto}s: ${precio_unitario * cantidad:.2f}")
# "Total por 3 Teclado Mecánicos: $135.00"

# Métodos y funciones dentro de llaves:
usuario = "   martin   "
print(f"Bienvenido, {usuario.strip().capitalize()}!")
# "Bienvenido, Martin!"
```

---

## 4. Alineación, Anchos de Columna y Relleno Tabular

Tanto en `str.format()` como en `f-strings`, puedes controlar el ancho exacto de cada columna:
* `<`: Alineación a la **izquierda**
* `>`: Alineación a la **derecha**
* `^`: Alineación **centrada**

```python
articulos = [
    ("Laptop Pro", 1299.99, 5),
    ("Mouse Óptico", 25.50, 42),
    ("Cable HDMI 2m", 8.90, 110)
]

print(f"{'PRODUCTO':<20} | {'PRECIO':>10} | {'STOCK':^8}")
print("-" * 44)
for nombre, precio, stock in articulos:
    print(f"{nombre:<20} | ${precio:>9.2f} | {stock:^8d}")
```

Salida resultante en terminal:
```text
PRODUCTO             |     PRECIO |  STOCK  
--------------------------------------------
Laptop Pro           |  $ 1299.99 |    5    
Mouse Óptico         |  $   25.50 |    42   
Cable HDMI 2m        |  $    8.90 |   110   
```

---

## 💡 Resumen Rápido

1. **F-Strings (`f"{var}"`)**: El estándar actual. Más rápido, limpio y permite expresiones directas.
2. **Método `.format()`**: Útil cuando la plantilla de texto se define por separado antes de tener los datos.
3. **Operador `%`**: Clásico de OverAPI; fundamental para entender bases de código históricas y librerías de logs.
4. **Modificadores Clave**:
   * `{num:.2f}`: 2 decimales flotantes.
   * `{num:06d}`: 6 dígitos rellenando con ceros.
   * `{texto:<15}`: Columna de 15 caracteres alineada a la izquierda.
