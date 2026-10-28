# Módulo 7: PostgreSQL Tipos Avanzados (JSONB, Arrays y UUID)

## 🎯 Objetivo
Aprender a aprovechar las capacidades exclusivas y más potentes de **PostgreSQL**, dominando el almacenamiento semiestructurado con **JSONB**, los tipos de datos en array unidimensionales y multidimensionales, y el uso de **UUID** como identificadores universales seguros.

---

## 1. El Tipo `JSONB` en PostgreSQL

A diferencia de `JSON` plano (que almacena texto exacto sin procesar), `JSONB` almacena los datos en un formato binario descompuesto e indexable. Es mucho más rápido de consultar y permite utilizar índices especializados (GIN).

### 1.1 Creación de Tabla con Columna JSONB
```sql
CREATE TABLE productos_tech (
  id SERIAL PRIMARY KEY,
  nombre VARCHAR(100) NOT NULL,
  atributos JSONB NOT NULL
);

INSERT INTO productos_tech (nombre, atributos) VALUES
  ('Laptop Gamer', '{"marca": "Asus", "ram_gb": 16, "cpu": "i7", "colores": ["negro", "gris"], "dimensiones": {"peso_kg": 2.1}}'),
  ('Mouse Inalámbrico', '{"marca": "Logitech", "dpi": 16000, "rgb": true, "dimensiones": {"peso_kg": 0.09}}');
```

### 1.2 Operadores Clave de JSONB
| Operador | Descripción | Ejemplo | Retorno |
| :--- | :--- | :--- | :--- |
| `->` | Extrae campo o elemento de array por clave/índice | `atributos -> 'marca'` | JSON (`"Asus"`) |
| `->>` | Extrae campo como **texto plano** (*String*) | `atributos ->> 'marca'` | Texto (`Asus`) |
| `#>` | Extrae ruta anidada como JSON | `atributos #> '{dimensiones, peso_kg}'` | JSON (`2.1`) |
| `#>>` | Extrae ruta anidada como **texto plano** | `atributos #>> '{dimensiones, peso_kg}'` | Texto (`2.1`) |
| `@>` | Comprueba si el JSON de la izquierda contiene al de la derecha | `atributos @> '{"rgb": true}'` | Booleano |
| `?` | Comprueba si existe una clave de nivel superior | `atributos ? 'dpi'` | Booleano |

```sql
-- Filtrar productos de marca 'Logitech' con peso menor a 1 kg
SELECT nombre, (atributos ->> 'marca') AS marca
FROM productos_tech
WHERE atributos ->> 'marca' = 'Logitech'
  AND CAST(atributos #>> '{dimensiones, peso_kg}' AS NUMERIC) < 1.0;
```

---

## 2. Tipo `ARRAY` en PostgreSQL

PostgreSQL permite que cualquier tipo escalar estándar (`TEXT`, `INT`, `BOOLEAN`) se convierta en una columna array añadiendo corchetes `[]`:

```sql
CREATE TABLE articulos_blog (
  id SERIAL PRIMARY KEY,
  titulo VARCHAR(150),
  etiquetas TEXT[] -- Array de cadenas de texto
);

INSERT INTO articulos_blog (titulo, etiquetas) VALUES
  ('Novedades Node.js 24', ARRAY['javascript', 'backend', 'nodejs']),
  ('Dominando PostgreSQL', ARRAY['sql', 'postgresql', 'bases-de-datos', 'backend']);
```

### 2.1 Operaciones y Funciones con Arrays
- **Acceso por índice:** *(¡Ojo! En PostgreSQL los arrays son 1-indexed, empiezan en 1)*:
  ```sql
  SELECT titulo, etiquetas[1] AS primera_etiqueta FROM articulos_blog;
  ```
- **Filtro de contención con `ANY`:**
  ```sql
  SELECT titulo FROM articulos_blog WHERE 'backend' = ANY(etiquetas);
  ```
- **Operador de contención de arrays `@>`:**
  ```sql
  SELECT titulo FROM articulos_blog WHERE etiquetas @> ARRAY['postgresql'];
  ```
- **Desanidar array en filas con `UNNEST()`:**
  ```sql
  SELECT titulo, UNNEST(etiquetas) AS etiqueta_individual FROM articulos_blog;
  ```

---

## 3. Identificadores Universales Únicos (`UUID`)

En lugar de usar enteros secuenciales auto-incrementables (`SERIAL`), muchas arquitecturas modernas utilizan `UUID` para evitar ataques de enumeración y permitir la generación de claves en sistemas distribuidos.

```sql
CREATE TABLE cuentas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titular VARCHAR(100) NOT NULL,
  creado_en TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO cuentas (titular) VALUES ('Gonzalo Ramos');
-- El ID generado tendrá un formato como: 'a0eebc99-9c0b-4ef8-bb6d-6bb9bd380a11'
```
