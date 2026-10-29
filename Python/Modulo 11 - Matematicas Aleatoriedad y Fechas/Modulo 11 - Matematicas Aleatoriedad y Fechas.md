# Módulo 11: Librería Estándar: Matemáticas, Aleatoriedad y Fechas (`math`, `random`, `datetime`)

---

## 🧭 Visión General: Las "Pilas Incluidas" de Python

Una de las mayores virtudes de Python es su filosofía de **"baterías incluidas"** (*batteries included*): sin instalar librerías externas mediante `pip`, la instalación estándar de Python incluye cientos de módulos robustos y probados en producción.

En este módulo exploraremos tres de los módulos fundamentales de la referencia OverAPI:
1. **`math`:** Funciones de punto flotante de alta precisión, trigonometría, logaritmos y constantes universales ($\pi, e$).
2. **`random`:** Generación de números pseudoaleatorios, simulaciones Monte Carlo, barajado de secuencias y selección de muestras.
3. **`datetime`:** Representación precisa de instantes en el tiempo, cálculo de duraciones con `timedelta` y formateo/parseo con `strftime`.

---

## 1. El Módulo `math` (OverAPI Reference)

A diferencia de las operaciones aritméticas básicas, `math` provee funciones numéricas avanzadas implementadas en C a nivel de sistema operativo:

### 1.1 Redondeo y Análisis Numérico:
* `math.ceil(x)`: Redondea hacia arriba al entero más cercano (`ceil(4.1)` $\rightarrow$ `5`).
* `math.floor(x)`: Redondea hacia abajo al entero más cercano (`floor(4.9)` $\rightarrow$ `4`).
* `math.trunc(x)`: Trunca la parte decimal (`trunc(-3.7)` $\rightarrow$ `-3`).
* `math.fabs(x)`: Valor absoluto flotante (`fabs(-15.5)` $\rightarrow$ `15.5`).
* `math.factorial(n)`: Calcula $n!$ (`factorial(5)` $\rightarrow$ `120`).
* `math.fsum(iterable)`: Suma de números flotantes evitando la pérdida de precisión por redondeo IEEE.

### 1.2 Potencias, Logaritmos y Trigonometría:
* `math.sqrt(x)`: Raíz cuadrada ($\sqrt{x}$).
* `math.pow(x, y)`: $x^y$ en punto flotante.
* `math.log(x[, base])`: Logaritmo natural por defecto ($\ln(x)$), o en base especificada (`log(100, 10)` $\rightarrow$ `2.0`).
* `math.sin(x)`, `math.cos(x)`, `math.tan(x)`: Funciones trigonométricas (¡el argumento `x` debe estar en **radianes**!).
* `math.radians(grados)` y `math.degrees(radianes)`: Conversión angular.
* `math.hypot(x, y)`: Hipotenusa euclidiana $\sqrt{x^2 + y^2}$.

### 1.3 Constantes:
* `math.pi`: $\pi \approx 3.1415926535...$
* `math.e`: Base natural $e \approx 2.7182818284...$

---

## 2. El Módulo `random` (OverAPI Reference)

El generador de números pseudoaleatorios de Python utiliza el algoritmo **Mersenne Twister**:

```python
import random

# 1. Float en el rango [0.0, 1.0)
print(random.random())

# 2. Float en un rango continuo [a, b]
print(random.uniform(10.0, 20.0))

# 3. Entero en rango cerrado [a, b] (¡incluye ambos extremos!)
dado = random.randint(1, 6)
print("Tirada de dado:", dado)

# 4. Selección aleatoria de un elemento
opciones = ["piedra", "papel", "tijera"]
eleccion = random.choice(opciones)

# 5. Muestreo sin reemplazo (sample): selecciona k elementos únicos
cartas = list(range(1, 53))
mano = random.sample(cartas, k=5)  # 5 cartas distintas

# 6. Barajar una lista in-place (shuffle)
alumnos = ["Ana", "Beto", "Carlos", "Diana"]
random.shuffle(alumnos)  # Muta la lista original al azar
```

---

## 3. El Módulo `datetime` (OverAPI Reference)

El manejo de tiempo en Python se organiza en objetos especializados:
* `date`: Año, mes y día (calendario).
* `time`: Hora, minuto, segundo, microsegundo (reloj).
* `datetime`: La combinación de ambos (momento exacto).
* `timedelta`: Representa una **duración o diferencia entre dos fechas**.

```python
from datetime import datetime, date, timedelta

# 1. Fecha y hora actual
ahora = datetime.now()
print("Año actual:", ahora.year)
print("Formato ISO 8601:", ahora.isoformat())  # 2026-10-28T...

# 2. Operaciones con timedelta
vencimiento = ahora + timedelta(days=30, hours=12)
dias_restantes = (vencimiento - ahora).days
print("Días restantes:", dias_restantes)  # 30
```

### 3.1 Formateo con `strftime()` (String Format Time):

| Código | Significado | Ejemplo |
| :---: | :--- | :---: |
| `%Y` | Año con 4 dígitos | `2026` |
| `%m` | Mes en número (01 a 12) | `10` |
| `%d` | Día del mes (01 a 31) | `28` |
| `%H` | Hora en formato 24h (00 a 23) | `23` |
| `%M` | Minuto (00 a 59) | `45` |
| `%S` | Segundo (00 a 59) | `10` |
| `%A` / `%a` | Nombre completo / abreviado del día | `Wednesday` / `Wed` |
| `%B` / `%b` | Nombre completo / abreviado del mes | `October` / `Oct` |

```python
formato_amigable = ahora.strftime("%d/%m/%Y a las %H:%M:%S")
print("Fecha formateada:", formato_amigable)
# "28/10/2026 a las 23:45:10"
```

---

## 💡 Resumen Rápido

1. **`math`**: Operaciones exactas; recuerda que `sin/cos` reciben radianes (`math.radians(grados)`).
2. **`random.randint(a, b)`**: Incluye **ambos** extremos $a$ y $b$.
3. **`random.choice()` vs `sample()`**: `choice` toma 1 elemento; `sample(lista, k)` toma $k$ elementos distintos sin repetir.
4. **`timedelta`**: Permite sumar o restar días/horas directamente a objetos `datetime`.
5. **`strftime`**: Transforma objetos `datetime` a texto con los códigos de formato `%Y-%m-%d`.
