# 🗺️ Temario de Python Moderno (Core & Standard Library)

Ruta de aprendizaje estructurada, práctica y progresiva para dominar el lenguaje de programación **Python 3**. Basada en la referencia exhaustiva de OverAPI y estándares modernos de la industria: desde manipulación avanzada de cadenas y estructuras de datos nativas (listas, tuplas, diccionarios y conjuntos), pasando por programación orientada a objetos con métodos especiales (*dunder methods*), manejo de archivos, hasta utilidades del sistema (`os`, `sys`, `math`, `random`, `datetime`).

Cada módulo combina:
1. **Teoría concisa, profunda y pedagógica**: Con analogías intuitivas y explicaciones línea a línea.
2. **Ejercicios prácticos con Suite de Validación Automática**: Listos para resolver a mano con retroalimentación instantánea (`✔ RETO` / `❌ RETO`).

---

## 📚 Roadmap de Módulos

### 🔹 [Módulo 1: Sintaxis Básica, Variables, Tipos y Operadores](./Modulo%201%20-%20Sintaxis%20Basica%20Variables%20y%20Operadores/Modulo%201%20-%20Sintaxis%20Basica%20Variables%20y%20Operadores.md)
Comprende la filosofía de tipado dinámico pero fuertemente tipado de Python. Manejo de tipos primitivos (`int`, `float`, `bool`, `str`, `NoneType`), conversión explícita de tipos (*type casting*) y operadores aritméticos, lógicos y de pertenencia (`in`, `is`).
- **Teoría:** [Modulo 1 - Sintaxis Basica Variables y Operadores.md](./Modulo%201%20-%20Sintaxis%20Basica%20Variables%20y%20Operadores/Modulo%201%20-%20Sintaxis%20Basica%20Variables%20y%20Operadores.md)
- **Ejercicios Prácticos:**
  - `01_variables_y_tipos_primitivos.py` — Conversión de tipos, evaluación de expresiones booleanas y control de NoneType.
  - `02_operadores_aritmeticos_y_logicos.py` — Operadores matemáticos enteros (`//`, `%`, `**`), lógica booleana con cortocircuito y pertenencia.

---

### 🔹 [Módulo 2: Cadenas de Texto (Strings) y Métodos de Manipulación](./Modulo%202%20-%20Strings%20y%20Metodos%20de%20Manipulacion/Modulo%202%20-%20Strings%20y%20Metodos%20de%20Manipulacion.md)
Domina el repertorio completo de métodos de cadenas de la referencia oficial de Python: búsqueda, reemplazo, limpieza, partición y validación de tipos de caracteres.
- **Teoría:** [Modulo 2 - Strings y Metodos de Manipulacion.md](./Modulo%202%20-%20Strings%20y%20Metodos%20de%20Manipulacion/Modulo%202%20-%20Strings%20y%20Metodos%20de%20Manipulacion.md)
  - Métodos de transformación: `upper()`, `lower()`, `capitalize()`, `title()`, `swapcase()`.
  - Métodos de inspección y búsqueda: `startswith()`, `endswith()`, `find()`, `rfind()`, `index()`, `count()`.
  - Validación de caracteres: `isalpha()`, `isdigit()`, `isalnum()`, `isspace()`.
  - División, unión y limpieza: `strip()`, `lstrip()`, `rstrip()`, `split()`, `rsplit()`, `join()`, `partition()`, `replace()`.
- **Ejercicios Prácticos:**
  - `01_metodos_transformacion_y_busqueda.py` — Normalización de texto, validación de prefijos/sufijos y reemplazos controlados.
  - `02_limpieza_particion_y_ensamblado.py` — Limpieza de datos crudos con `strip`, partición con `partition` y unión con `join`.

---

### 🔹 [Módulo 3: Formateo de Texto e Interpolación](./Modulo%203%20-%20Formateo%20de%20Texto%20e%20Interpolacion/Modulo%203%20-%20Formateo%20de%20Texto%20e%20Interpolacion.md)
Aprende la evolución histórica y el uso óptimo de las tres técnicas de formateo de Python: f-strings modernos (Python 3.6+), el método `.format()` y los operadores de formato clásicos `%` (OverAPI).
- **Teoría:** [Modulo 3 - Formateo de Texto e Interpolación.md](./Modulo%203%20-%20Formateo%20de%20Texto%20e%20Interpolacion/Modulo%203%20-%20Formateo%20de%20Texto%20e%20Interpolacion.md)
  - Formateo clásico `%`: especificadores `%d`, `%f`, `%s`, `%x` y anchos de columna.
  - Método `str.format()`: marcadores posicionales `{0}`, nombrados `{nombre}` y especificadores de formato `{:.2f}`.
  - F-strings (Formatted String Literals): expresiones dinámicas, alineación (`<`, `>`, `^`), relleno con ceros (`zfill`) y formateo de precisión numérica.
- **Ejercicios Prácticos:**
  - `01_especificadores_formato_clasico_y_format.py` — Formateo tabular con precisión decimal y relleno de campos.
  - `02_fstrings_avanzados_y_alineacion.py` — Ensamblado de reportes tabulares alineados y expresiones embebidas en f-strings.

---

### 🔹 [Módulo 4: Listas, Tuplas, Indexación y Slicing](./Modulo%204%20-%20Listas%20Tuplas%20Indexacion%20y%20Slicing/Modulo%204%20-%20Listas%20Tuplas%20Indexacion%20y%20Slicing.md)
Comprende la mutabilidad de listas versus la inmutabilidad de tuplas, operaciones de slicing bidireccional y métodos de mutación.
- **Teoría:** [Modulo 4 - Listas Tuplas Indexacion y Slicing.md](./Modulo%204%20-%20Listas%20Tuplas%20Indexacion%20y%20Slicing/Modulo%204%20-%20Listas%20Tuplas%20Indexacion%20y%20Slicing.md)
  - Indexación positiva y negativa (`a[0]`, `a[-1]`).
  - Slicing profundo: `a[start:stop:step]`, inversión de secuencias con `a[::-1]`, copias superficiales (`a[:]`).
  - Métodos de listas: `append()`, `extend()`, `insert()`, `pop()`, `remove()`, `reverse()`, `index()`, `count()`.
  - Tuplas: inmutabilidad, desempaquetado (*tuple unpacking*) y uso como claves de diccionario.
- **Ejercicios Prácticos:**
  - `01_slicing_e_indexacion_avanzada.py` — Extracción de ventanas, inversión de secuencias y partición por saltos.
  - `02_mutacion_de_listas_y_desempaquetado.py` — Operaciones de cola/pila con `pop`, `insert`, ordenamiento in-place y desempaquetado múltiple.

---

### 🔹 [Módulo 5: Diccionarios y Mapeos (`dict`)](./Modulo%205%20-%20Diccionarios%20y%20Mapeos/Modulo%205%20-%20Diccionarios%20y%20Mapeos.md)
Estructura de datos clave-valor con tiempo de acceso $O(1)$ gracias a tablas hash internas.
- **Teoría:** [Modulo 5 - Diccionarios y Mapeos.md](./Modulo%205%20-%20Diccionarios%20y%20Mapeos/Modulo%205%20-%20Diccionarios%20y%20Mapeos.md)
  - Creación, mutación y borrado: `d[key] = value`, `del d[key]`.
  - Métodos seguros de consulta: `get(key, default)`, `setdefault(key, default)`.
  - Vistas iterables: `keys()`, `values()`, `items()`.
  - Modificación y extracción: `pop()`, `popitem()`, `update()`, `clear()`, `fromkeys()`.
- **Ejercicios Prácticos:**
  - `01_gestion_diccionarios_y_acceso_seguro.py` — Agrupamiento con `get` y `setdefault`, fusión con `update`.
  - `02_iteracion_y_transformacion_de_mapeos.py` — Filtrado de claves, conteo de frecuencias y mutaciones en diccionarios anidados.

---

### 🔹 [Módulo 6: Conjuntos (`set`) y Álgebra de Conjuntos](./Modulo%206%20-%20Conjuntos%20y%20Algebra%20de%20Conjuntos/Modulo%206%20-%20Conjuntos%20y%20Algebra%20de%20Conjuntos.md)
Colecciones no ordenadas de elementos únicos con comprobación de membresía instantánea.
- **Teoría:** [Modulo 6 - Conjuntos y Algebra de Conjuntos.md](./Modulo%206%20-%20Conjuntos%20y%20Algebra%20de%20Conjuntos/Modulo%206%20-%20Conjuntos%20y%20Algebra%20de%20Conjuntos.md)
  - Pertenencia e inmutabilidad de elementos (`hashable`).
  - Operaciones algebraicas: `union()` (`|`), `intersection()` (`&`), `difference()` (`-`), `symmetric_difference()` (`^`).
  - Relaciones lógicas: `issubset()`, `issuperset()`, `isdisjoint()`.
  - Mutaciones: `add()`, `remove()`, `discard()`, `pop()`, `update()`.
- **Ejercicios Prácticos:**
  - `01_operaciones_algebraicas_conjuntos.py` — Eliminación de duplicados, intersecciones de usuarios y diferencias simétricas.
  - `02_relaciones_y_mutaciones_de_sets.py` — Comprobación de subconjuntos, descarte seguro con `discard` y disyunciones.

---

### 🔹 [Módulo 7: Estructuras de Control e Iteración Avanzada](./Modulo%207%20-%20Estructuras%20de%20Control%20e%20Iteracion/Modulo%207%20-%20Estructuras%20de%20Control%20e%20Iteracion.md)
Flujo de ejecución con condicionales elegantes e iteraciones idiomáticas en Python.
- **Teoría:** [Modulo 7 - Estructuras de Control e Iteración.md](./Modulo%207%20-%20Estructuras%20de%20Control%20e%20Iteracion/Modulo%207%20-%20Estructuras%20de%20Control%20e%20Iteracion.md)
  - Condicionales: `if`, `elif`, `else`, operador ternario (`x if cond else y`).
  - Bucles: `for ... in`, `while`, sentencias `break` y `continue`.
  - La cláusula única `else` en bucles `for` y `while`.
  - Iteradores utilitarios: `range(start, stop, step)`, `enumerate()`, `zip()`, `reversed()`, `sorted()`.
- **Ejercicios Prácticos:**
  - `01_condicionales_y_bucles_controlados.py` — Filtros condicionales, banderas de búsqueda con `for-else` y acumuladores `while`.
  - `02_iteradores_nativos_enumerate_y_zip.py` — Paralelismo de listas con `zip`, indexación limpia con `enumerate` y rangos con saltos.

---

### 🔹 [Módulo 8: Funciones, Argumentos Flexibles y Lambdas](./Modulo%208%20-%20Funciones%20Argumentos%20y%20Lambdas/Modulo%208%20-%20Funciones%20Argumentos%20y%20Lambdas.md)
Modularización del código, paso de parámetros y programación funcional básica.
- **Teoría:** [Modulo 8 - Funciones Argumentos y Lambdas.md](./Modulo%208%20-%20Funciones%20Argumentos%20y%20Lambdas/Modulo%208%20-%20Funciones%20Argumentos%20y%20Lambdas.md)
  - Parámetros posicionales, nombrados y valores por defecto (el peligro de valores por defecto mutables como `def f(x=[])`).
  - Empaquetado flexible de argumentos: `*args` (tupla variable) y `**kwargs` (diccionario variable).
  - Ámbito de variables: Regla LEGB (Local, Enclosing, Global, Built-in) y palabras clave `global` y `nonlocal`.
  - Funciones lambda anónimas y ordenamiento personalizado con `sorted(key=lambda ...)`.
- **Ejercicios Prácticos:**
  - `01_funciones_con_args_y_kwargs.py` — Funciones utilitarias con argumentos variables y reenrutamiento de parámetros.
  - `02_lambdas_y_ordenamiento_custom.py` — Ordenamiento multi-criterio de colecciones complejas usando expresiones lambda.

---

### 🔹 [Módulo 9: Manejo de Archivos (File I/O) y Context Managers](./Modulo%209%20-%20Manejo%20de%20Archivos%20File%20IO/Modulo%209%20-%20Manejo%20de%20Archivos%20File%20IO.md)
Lectura y escritura en el sistema de archivos con gestión automática de recursos.
- **Teoría:** [Modulo 9 - Manejo de Archivos File IO.md](./Modulo%209%20-%20Manejo%20de%20Archivos%20File%20IO/Modulo%209%20-%20Manejo%20de%20Archivos%20File%20IO.md)
  - La función `open()`: modos `'r'` (lectura), `'w'` (escritura destructiva), `'a'` (anexo), `'r+'` y codificación `utf-8`.
  - Métodos de archivo: `read()`, `readline()`, `readlines()`, `write()`, `writelines()`, `seek()`, `tell()`, `flush()`.
  - Atributos del objeto archivo: `name`, `mode`, `closed`, `encoding`.
  - El gestor de contexto `with open(...) as f:` para garantizar el cierre seguro de descriptores de archivos.
- **Ejercicios Prácticos:**
  - `01_lectura_y_escritura_de_archivos.py` — Procesamiento línea a línea, conteo de palabras y anexo sin cargar todo en memoria.
  - `02_punteros_de_archivo_seek_y_tell.py` — Inspección de posición con `tell()`, rebobinado con `seek()` y truncado con `truncate()`.

---

### 🔹 [Módulo 10: Programación Orientada a Objetos (POO) y Métodos Especiales](./Modulo%2010%20-%20POO%20y%20Metodos%20Especiales/Modulo%2010%20-%20POO%20y%20Metodos%20Especiales.md)
Diseño de clases, encapsulación, herencia y la sobrecarga de operadores mediante métodos dunder (`__método__`).
- **Teoría:** [Modulo 10 - POO y Metodos Especiales.md](./Modulo%2010%20-%20POO%20y%20Metodos%20Especiales/Modulo%2010%20-%20POO%20y%20Metodos%20Especiales.md)
  - Clases e instancias: `class`, método constructor `__init__(self, ...)` y el puntero `self`.
  - Atributos de instancia vs atributos de clase.
  - Representación de cadenas: `__str__()` (legible para usuarios) vs `__repr__()` (técnico para desarrolladores).
  - Métodos de comparación: `__eq__()`, `__lt__()`, `__le__()`, `__gt__()`, `__ge__()`.
  - Sobrecarga de operadores y secuencias: `__add__()`, `__len__()`, `__getitem__()`, `__call__()`.
- **Ejercicios Prácticos:**
  - `01_clases_constructor_y_representacion.py` — Modelado de entidades con atributos protegidos, `__str__` y `__repr__`.
  - `02_metodos_magicos_comparacion_y_operadores.py` — Implementación de comparadores (`__eq__`, `__lt__`), longitud (`__len__`) y suma (`__add__`).

---

### 🔹 [Módulo 11: Librería Estándar: Matemáticas, Aleatoriedad y Fechas](./Modulo%2011%20-%20Matematicas%20Aleatoriedad%20y%20Fechas/Modulo%2011%20-%20Matematicas%20Aleatoriedad%20y%20Fechas.md)
Dominio de los módulos estándar esenciales: `math`, `random` y `datetime`.
- **Teoría:** [Modulo 11 - Matematicas Aleatoriedad y Fechas.md](./Modulo%2011%20-%20Matematicas%20Aleatoriedad%20y%20Fechas/Modulo%2011%20-%20Matematicas%20Aleatoriedad%20y%20Fechas.md)
  - Módulo `math`: redondeos (`ceil`, `floor`, `trunc`), potencias y raíces (`sqrt`, `pow`), constantes `math.pi`, `math.e`.
  - Módulo `random`: números pseudoaleatorios (`random()`, `uniform()`), enteros (`randint()`, `randrange()`), selección y mezcla (`choice()`, `shuffle()`, `sample()`).
  - Módulo `datetime`: objetos `date`, `time`, `datetime`, diferencias de tiempo (`timedelta`), formateo y parseo con `strftime()` y `strptime()`, formato ISO (`isoformat()`).
- **Ejercicios Prácticos:**
  - `01_calculos_con_math_y_random.py` — Cálculos trigonométricos y estadísticos, muestreo aleatorio sin reemplazo y barajado.
  - `02_manipulacion_de_fechas_y_tiempos.py` — Cálculo de diferencias de días con `timedelta`, días de la semana y formateo con `strftime`.

---

### 🔹 [Módulo 12: Librería Estándar: Sistema Operativo y Rutas (`os`, `sys`)](./Modulo%2012%20-%20Sistema%20Operativo%20y%20Rutas/Modulo%2012%20-%20Sistema%20Operativo%20y%20Rutas.md)
Interacción con el sistema subyacente, argumentos de línea de comandos y variables de entorno.
- **Teoría:** [Modulo 12 - Sistema Operativo y Rutas.md](./Modulo%2012%20-%20Sistema%20Operativo%20y%20Rutas/Modulo%2012%20-%20Sistema%20Operativo%20y%20Rutas.md)
  - Módulo `sys`: inspección de argumentos de terminal `sys.argv`, módulos cargados `sys.modules`, versión del intérprete `sys.version_info`, salida estándar y terminación `sys.exit()`.
  - Módulo `os`: variables de entorno (`os.environ`), separadores de sistema (`os.sep`, `os.linesep`), directorio actual y navegación (`os.getcwd()`, `os.listdir()`).
  - Manipulación portable de rutas con `os.path`: `join()`, `split()`, `basename()`, `dirname()`, `exists()`, `isfile()`, `isdir()`.
- **Ejercicios Prácticos:**
  - `01_argumentos_cli_y_utilidades_sys.py` — Procesamiento de flags de terminal con `sys.argv` y validación de plataforma.
  - `02_gestion_de_rutas_y_entorno_os.py` — Construcción portable de rutas con `os.path.join`, lectura de variables de entorno y filtrado de directorios.

---

## ⚡ Cómo Practicar

1. Cada ejercicio es un archivo `.py` que implementa la lógica usando únicamente la librería estándar de Python 3.
2. Puedes ejecutar los ejercicios en tu terminal con:
   ```bash
   python "Python/Modulo 1 - Sintaxis Basica Variables y Operadores/01_variables_y_tipos_primitivos.py"
   ```
   o directamente desde el **Practice Hub Web Runner** en `http://localhost:3000` con el botón **"▶ Ejecutar en Python"**.
3. Resuelve los retos indicados en los comentarios `# TODO:`.
4. La **Suite de Validación Automática** al final de cada archivo comprobará numéricamente tus funciones emitiendo:
   - `✔ RETO X.X ...` en verde cuando tu cálculo o función sea exacto.
   - `❌ RETO X.X ...` con una pista descriptiva del error puntual o del valor esperado.
