# Módulo 2: Cadenas de Texto (Strings) y Métodos de Manipulación

---

## 🧭 Visión General: El Texto en Python es Inmutable

En Python, las cadenas de texto (`str`) son **secuencias inmutables** de caracteres Unicode.
¿Qué significa que sean inmutables?
> Significa que una vez creada una cadena en memoria, **jamás puede ser modificada directamente**.
> Si tienes `s = "hola"` e intentas hacer `s[0] = "H"`, Python lanzará un `TypeError`.

Cualquier método de cadena que uses (`upper()`, `replace()`, `strip()`) **no modifica la cadena original**, sino que **calcula y retorna una nueva cadena** con los cambios aplicados.

---

## 1. Transformación de Capitalización y Mayúsculas/Minúsculas

Python incluye métodos integrados para normalizar y alterar la capitalización de cualquier texto:

| Método | ¿Qué hace? | Ejemplo con `"hOlA mUnDo"` | Resultado |
| :--- | :--- | :--- | :--- |
| `s.lower()` | Convierte todo a minúsculas | `"hOlA mUnDo".lower()` | `"hola mundo"` |
| `s.upper()` | Convierte todo a mayúsculas | `"hOlA mUnDo".upper()` | `"HOLA MUNDO"` |
| `s.capitalize()` | Primera letra del texto en mayúscula, resto en minúscula | `"hOlA mUnDo".capitalize()` | `"Hola mundo"` |
| `s.title()` | Primera letra de **cada palabra** en mayúscula | `"hOlA mUnDo".title()` | `"Hola Mundo"` |
| `s.swapcase()` | Invierte mayúsculas por minúsculas y viceversa | `"hOlA mUnDo".swapcase()` | `"HoLa MuNdO"` |

```python
email_usuario = "  Juan.Perez@Empresa.COM  "
# Limpiamos y normalizamos a minúsculas
email_limpio = email_usuario.strip().lower()
print(email_limpio)  # "juan.perez@empresa.com"
```

---

## 2. Métodos de Búsqueda y Conteo

Para inspeccionar o localizar subcadenas dentro de un texto:

```python
frase = "El gato negro vio a otro gato"

# 1. startswith / endswith: Comprueba si empieza o termina con un prefijo/sufijo
print(frase.startswith("El"))    # True
print(frase.endswith("perro"))   # False

# 2. count: Cuenta cuántas veces aparece una subcadena sin solapamiento
print(frase.count("gato"))       # 2

# 3. find vs index: Encuentra la posición (índice) donde comienza la subcadena
# find: Retorna el índice de la primera aparición, o -1 si no existe (Seguro)
print(frase.find("negro"))       # 8
print(frase.find("perro"))       # -1 (No encontrado)

# index: Igual que find, pero levanta un ValueError si no lo encuentra
print(frase.index("negro"))      # 8
# frase.index("perro")           # ¡Lanza ValueError!

# 4. rfind / rindex: Busca desde la derecha hacia la izquierda
print(frase.rfind("gato"))       # 25 (el segundo "gato")
```

---

## 3. Métodos de Validación e Inspección de Caracteres

Retornan un booleano (`True` o `False`) comprobando si todos los caracteres cumplen una condición:

* `s.isalpha()`: `True` si todos los caracteres son letras alfabéticas (sin números ni espacios).
* `s.isdigit()` / `s.isnumeric()`: `True` si todos los caracteres son dígitos numéricos (`"123"` $\rightarrow$ `True`).
* `s.isalnum()`: `True` si son alfanuméricos (letras o números, sin símbolos).
* `s.isspace()`: `True` si son únicamente espacios en blanco, tabulaciones o saltos de línea (`"   \n"` $\rightarrow$ `True`).
* `s.islower()` / `s.isupper()`: `True` si todas las letras están en minúsculas o mayúsculas.

---

## 4. División, Unión y Reemplazo

Estas son las herramientas fundamentales para procesar datos, archivos CSV y logs:

### 4.1 `split()` y `rsplit()`: De Texto a Lista
Divide una cadena en una lista de palabras usando un separador:
```python
datos = "manzana,banana,pera,uva"
frutas = datos.split(",")
print(frutas)  # ['manzana', 'banana', 'pera', 'uva']

# Si no especificas separador, divide por cualquier espacio en blanco o salto de línea:
texto = "hola    mundo \n desde Python"
print(texto.split())  # ['hola', 'mundo', 'desde', 'Python']

# Limitar la cantidad de divisiones con maxsplit:
registro = "ID:102:Carlos Gomez:Admin"
print(registro.split(":", maxsplit=2))  # ['ID', '102', 'Carlos Gomez:Admin']
```

### 4.2 `join()`: De Lista a Texto
Une los elementos de una lista de cadenas mediante un delimitador:
```python
palabras = ["Python", "es", "muy", "poderoso"]
oracion = " ".join(palabras)
print(oracion)  # "Python es muy poderoso"

csv_linea = ";".join(["101", "Laptop", "850.50"])
print(csv_linea)  # "101;Laptop;850.50"
```

### 4.3 `partition()` y `rpartition()`: División en 3 Partes
Divide la cadena en la primera ocurrencia del separador y retorna una tupla exacta de 3 elementos: `(antes, separador, despues)`.
```python
url = "https://midominio.com/api/v1/usuarios"
protocolo, separador, ruta = url.partition("://")
print("Protocolo:", protocolo)  # "https"
print("Ruta:", ruta)            # "midominio.com/api/v1/usuarios"
```

### 4.4 `replace(viejo, nuevo[, cantidad])`: Reemplazar
```python
mensaje = "El error 404 es común. Otro error 404 apareció."
corregido = mensaje.replace("error 404", "aviso 200")
print(corregido)  # "El aviso 200 es común. Otro aviso 200 apareció."
```

---

## 5. Limpieza de Bordes y Relleno (`strip`, `zfill`, `center`)

```python
# strip, lstrip, rstrip: Quitan espacios (o caracteres indicados) de los bordes
crudo = "###Titulo Importante###\n"
limpio = crudo.strip("#\n")
print(limpio)  # "Titulo Importante"

# zfill: Rellena números con ceros a la izquierda
factura_id = "45"
print(factura_id.zfill(6))  # "000045"

# center, ljust, rjust: Centra o alinea texto rellenando con caracteres
print(" MENU ".center(20, "="))  # "======= MENU ======="
```

---

## 💡 Resumen Rápido

1. **Inmutabilidad**: Toda operación de string produce un nuevo objeto; no muta el original.
2. **Normalización**: `lower()`, `strip()`, `replace()`.
3. **Búsqueda Segura**: Prefiere `find()` (da `-1`) en lugar de `index()` si la subcadena puede no existir.
4. **Transformación**: `.split(sep)` desglosa a lista; `sep.join(lista)` ensambla a texto.
5. **Partición**: `.partition(sep)` separa limpiamente en `(antes, sep, despues)`.
