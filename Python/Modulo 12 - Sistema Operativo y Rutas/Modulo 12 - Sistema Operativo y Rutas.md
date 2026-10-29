# Módulo 12: Librería Estándar: Sistema Operativo y Rutas (`os`, `sys`)

---

## 🧭 Visión General: El Puente entre Python y el Sistema Operativo

Un programa de Python no vive en el vacío: se ejecuta sobre un sistema operativo (Windows, Linux, macOS), recibe órdenes desde la terminal, lee variables de entorno de configuración y navega por el sistema de ficheros.

Para interactuar de forma segura y portable entre plataformas, Python ofrece dos módulos esenciales:
1. **`sys` (Python Runtime Environment):** Provee acceso directo a variables e interacciones estrechamente vinculadas con el intérprete de Python (argumentos de línea de comandos `sys.argv`, rutas de importación `sys.path`, plataforma y versión).
2. **`os` & `os.path` (Operating System Interface):** Provee una interfaz portable para interactuar con el sistema operativo subyacente (leer variables de entorno, crear carpetas, consultar permisos y construir rutas de archivos compatibles entre barras `/` y contrabarras `\`).

---

## 1. El Módulo `sys` (OverAPI Reference)

### 1.1 Argumentos de Terminal con `sys.argv`:
Cuando ejecutas un script desde la consola con argumentos:
```bash
python mi_script.py --puerto 8080 --debug
```
`sys.argv` es una lista de cadenas que captura todo lo escrito en la terminal:
* `sys.argv[0]`: El nombre del propio script (`"mi_script.py"`).
* `sys.argv[1]`: El primer argumento (`"--puerto"`).
* `sys.argv[2]`: El segundo argumento (`"8080"`), etc.

```python
import sys

print("Argumentos recibidos:", sys.argv)
if len(sys.argv) > 1:
    print("Primer argumento:", sys.argv[1])
```

### 1.2 Inspección del Intérprete y Plataforma:
* `sys.platform`: Nombre de la plataforma actual (`"win32"` en Windows, `"linux"` en Linux, `"darwin"` en macOS).
* `sys.version_info`: Tupla con la versión de Python (ej. `(3, 12, 0, ...)`).
* `sys.path`: Lista de directorios donde Python busca módulos cuando haces `import`.
* `sys.executable`: Ruta absoluta al binario ejecutable de Python que está corriendo el script.
* `sys.exit([codigo])`: Termina la ejecución del programa inmediatamente. Un código `0` significa éxito; cualquier número distinto de cero señala un error.

---

## 2. El Módulo `os` y Constantes de Sistema (OverAPI Reference)

Los sistemas operativos difieren en detalles sutiles: Windows usa contrabarras `\` para rutas y `\r\n` para saltos de línea; Linux y macOS usan barras `/` y `\n`.
El módulo `os` expone constantes para que tu código sea **100% portable sin reescribir nada**:

| Variable en `os` | Significado | En Windows | En Linux / macOS |
| :---: | :--- | :---: | :---: |
| `os.sep` | Separador de directorios | `'\\'` | `'/'` |
| `os.linesep` | Separador de fin de línea | `'\r\n'` | `'\n'` |
| `os.pathsep` | Separador de listas en PATH | `';'` | `':'` |
| `os.name` | Nombre del núcleo del OS | `'nt'` | `'posix'` |
| `os.curdir` / `os.pardir` | Directorio actual / Directorio padre | `'.'` / `'..'` | `'.'` / `'..'` |

---

## 3. Variables de Entorno con `os.environ`

Las variables de entorno son el estándar universal para configurar credenciales, claves de API y puertos sin escribirlos en el código fuente:

```python
import os

# 1. Consultar una variable de forma segura (con valor por defecto)
puerto = os.environ.get("PORT", "3000")
print("Puerto del servidor:", puerto)

# 2. Modificar o definir una variable en el entorno actual
os.environ["MODO_EJECUCION"] = "PRODUCCION"
```

---

## 4. Manipulación Portable de Rutas con `os.path`

> **¡Regla de Oro!** Nunca concatenes rutas de archivos manualmente con cadenas como `"carpeta/" + "archivo.txt"`. En Windows fallará con ciertas APIs. Usa **siempre** `os.path.join()`.

```python
import os

# 1. os.path.join: Une partes de una ruta usando el separador correcto del OS
ruta = os.path.join("proyectos", "app", "config.json")
# En Windows: "proyectos\app\config.json"
# En Linux:   "proyectos/app/config.json"

# 2. Descomponer una ruta
print(os.path.dirname(ruta))   # Directorio contenedor: "proyectos/app"
print(os.path.basename(ruta))  # Nombre del archivo: "config.json"

# 3. Separar nombre y extensión con splitext
nombre, extension = os.path.splitext("reporte_anual.pdf")
print(nombre)     # "reporte_anual"
print(extension)  # ".pdf"

# 4. Comprobaciones en disco
print(os.path.exists(ruta))   # ¿Existe en el sistema de archivos?
print(os.path.isfile(ruta))   # ¿Es un archivo regular?
print(os.path.isdir(ruta))    # ¿Es una carpeta/directorio?
```

---

## 💡 Resumen Rápido

1. **`sys.argv`**: Lista de parámetros pasados desde la terminal al ejecutar el script.
2. **`sys.platform`**: Identifica el sistema operativo (`win32`, `linux`, `darwin`).
3. **`os.environ`**: Mapeo tipo diccionario de las variables de entorno del sistema.
4. **`os.path.join()`**: Ensambla rutas de forma multiplataforma y segura.
5. **`os.path.splitext()`**: Separa el nombre base de la extensión del archivo (`.ext`).
