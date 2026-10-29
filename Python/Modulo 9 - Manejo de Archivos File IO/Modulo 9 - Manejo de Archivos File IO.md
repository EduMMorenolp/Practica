# Módulo 9: Manejo de Archivos (File I/O) y Context Managers

---

## 🧭 Visión General: Entrada y Salida Segura en el Sistema de Archivos

Trabajar con archivos en disco (archivos de texto, logs, configuraciones, CSV o JSON) es una de las tareas más comunes de cualquier programador backend o analista de datos.

En Python, la regla de oro para la manipulación de archivos es:
> **Todo archivo que se abre DEBE cerrarse.**
> Si no cierras un archivo, los datos pueden quedarse atrapados en el búfer de memoria sin guardarse en disco (*buffer flush*), y corres el riesgo de agotar los descriptores de archivo del sistema operativo.

Para garantizar que un archivo se cierre **siempre** (incluso si ocurre un error o excepción inesperada a mitad del código), Python introdujo el **Gestor de Contexto (*Context Manager*)** mediante la instrucción `with`.

---

## 1. La Función `open()` y los Modos de Apertura

$$\text{archivo} = \text{open}(\text{"ruta/al/archivo.txt"}, \text{modo}, \text{encoding="utf-8"})$$

| Modo | Nombre | Comportamiento | ¿Crea archivo nuevo? | ¿Borra contenido existente? |
| :---: | :--- | :--- | :---: | :---: |
| `'r'` | Lectura (*Read*) | Abre el archivo solo para leer. Falla con `FileNotFoundError` si no existe. | No | No |
| `'w'` | Escritura (*Write*) | Abre para escribir. **¡Peligro! Sobrescribe y borra** todo el contenido previo. | Sí | **Sí** |
| `'a'` | Anexo (*Append*) | Abre para escribir al **final** del archivo sin borrar lo existente. | Sí | No |
| `'r+'` | Lectura y Escritura | Permite leer y modificar en posiciones específicas con punteros. | No | No |
| `'b'` | Modo Binario | Se combina con los anteriores (ej. `'rb'`, `'wb'`) para imágenes, PDFs o bytes. | - | - |

---

## 2. El Gestor de Contexto (`with open(...) as f:`)

La forma moderna, segura y profesional de abrir archivos en Python:

```python
# El bloque 'with' se encarga automáticamente de hacer f.close() al salir
with open("datos.txt", "w", encoding="utf-8") as f:
    f.write("Línea 1: Registro guardado.\n")
    f.write("Línea 2: Operación exitosa.\n")

# Fuera del bloque 'with', el archivo ya está cerrado de forma garantizada:
print("¿Está cerrado?:", f.closed)  # True
```

---

## 3. Métodos de Lectura y Escritura (OverAPI Reference)

### 3.1 Métodos de Lectura:
* `f.read([size])`: Lee todo el contenido del archivo como un único `str`. Si pasas `size`, lee como máximo esa cantidad de caracteres.
* `f.readline()`: Lee **una sola línea** (incluyendo el salto de línea `\n` al final). Si llega al final del archivo, retorna una cadena vacía `""`.
* `f.readlines()`: Lee todas las líneas y las retorna como una lista de cadenas: `['linea 1\n', 'linea 2\n']`.

```python
# Iteración eficiente línea por línea (Recomendada para archivos gigantes):
# No carga todo el archivo en memoria RAM de golpe; procesa una línea a la vez:
with open("servidor.log", "r", encoding="utf-8") as f:
    for linea in f:
        if "ERROR" in linea:
            print("Alerta detectada:", linea.strip())
```

### 3.2 Métodos de Escritura:
* `f.write(texto)`: Escribe una cadena de texto en el archivo y retorna la cantidad de caracteres escritos.
* `f.writelines(secuencia)`: Escribe una lista de cadenas en el archivo. (Ojo: no agrega saltos de línea automáticamente; cada cadena debe incluir su propio `\n`).
* `f.flush()`: Fuerza la escritura inmediata de los datos almacenados en el búfer de memoria hacia el disco físico.

---

## 4. Punteros de Archivo: `tell()` y `seek()` (OverAPI Reference)

Cuando lees un archivo, Python mantiene un **cursor interno** (o puntero de lectura/escritura) que indica en qué byte del archivo te encuentras:

* `f.tell()`: Retorna la **posición actual** del puntero en bytes desde el inicio del archivo.
* `f.seek(offset, whence=0)`: Mueve el puntero a una posición específica:
  * `whence=0` (por defecto): Desplazamiento relativo al **inicio** del archivo. `f.seek(0)` rebobina al principio.
  * `whence=1`: Desplazamiento relativo a la **posición actual**.
  * `whence=2`: Desplazamiento relativo al **final** del archivo.
* `f.truncate([size])`: Trunca el tamaño del archivo a `size` bytes. Si no se especifica, trunca en la posición actual del cursor.

```python
with open("ejemplo.txt", "w+", encoding="utf-8") as f:
    f.write("ABCDEFGHIJ")  # 10 bytes
    print("Posición tras escribir:", f.tell())  # 10
    
    # Rebobinamos el puntero al inicio
    f.seek(0)
    print("Leído tras rebobinar:", f.read(3))   # "ABC"
    print("Nueva posición:", f.tell())          # 3
    
    # Mover el puntero al byte 5
    f.seek(5)
    print("Leído desde byte 5:", f.read(2))     # "FG"
```

---

## 5. Atributos del Objeto Archivo (OverAPI Reference)

* `f.name`: Nombre o ruta del archivo abierto.
* `f.mode`: Modo en el que fue abierto (`'r'`, `'w'`, etc.).
* `f.closed`: Booleano que indica si el archivo ya fue cerrado.
* `f.encoding`: Codificación de caracteres utilizada (ej. `'utf-8'`).

---

## 💡 Resumen Rápido

1. **Gestor de Contexto**: Usa **siempre** `with open(...) as f:` para prevenir fugas de recursos.
2. **Modos Clave**: `'r'` (leer), `'w'` (sobrescribir), `'a'` (anexar al final).
3. **Codificación**: Especifica siempre `encoding="utf-8"` para evitar problemas entre Windows y Linux.
4. **Archivos Grandes**: Itera directamente con `for linea in f:` para no saturar la memoria RAM.
5. **Punteros**: `f.tell()` consulta la posición; `f.seek(0)` regresa al inicio.
