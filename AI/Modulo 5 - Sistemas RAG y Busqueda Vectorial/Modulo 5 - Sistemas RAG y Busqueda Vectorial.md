# Módulo 5: Sistemas RAG y Búsqueda Vectorial

## 📌 Introducción y Propósito
Los Modelos de Lenguaje (LLMs) presentan dos limitaciones estructurales críticas:
1. **Fecha de corte de conocimiento (*Knowledge Cutoff*)**: No conocen eventos posteriores a su entrenamiento.
2. **Alucinaciones (*Hallucinations*)**: Generan respuestas verosímiles pero factualmente incorrectas al extrapolar datos que no poseen en sus pesos estáticos.

**RAG (Retrieval-Augmented Generation)** resuelve este problema conectando el modelo generativo a una fuente externa de verdad (documentos, bases de datos o código). En lugar de confiar únicamente en la memoria paramétrica del modelo, RAG recupera fragmentos relevantes en tiempo de ejecución y los inyecta en la ventana de contexto del prompt.

```text
[Documentos Crudos] 
       │
       ▼ (1. Chunking)
[Fragmentos con Solapamiento] 
       │
       ▼ (2. Embedding)
[Vectores en Espacio Latente] ──▶ Almacenados en Base Vectorial
                                          │
[Pregunta del Usuario] ──▶ (3. Embed) ───┤
                                          ▼ (4. Búsqueda por Similitud Coseno)
                              [Top-K Fragmentos Más Relevantes]
                                          │
                                          ▼ (5. Augmentation)
               [Prompt Aumentado: Contexto + Pregunta]
                                          │
                                          ▼ (6. Inferencia LLM)
                                 [Respuesta Verificada]
```

---

## 1. Estrategias de Fragmentación (*Chunking*)

Para que la búsqueda semántica sea precisa, los documentos largos no pueden procesarse completos; deben dividirse en fragmentos (*chunks*):
* **Tamaño del Fragmento (*Chunk Size*)**: Cantidad de caracteres o tokens por fragmento. Un tamaño muy pequeño pierde el contexto; uno muy grande diluye la densidad semántica del vector.
* **Solapamiento (*Chunk Overlap*)**: Cantidad de caracteres o tokens que se repiten entre fragmentos adyacentes. Evita que una idea o frase crítica quede truncada a la mitad en el límite del corte.

$$\text{Paso entre fragmentos} = \text{chunk\_size} - \text{chunk\_overlap}$$

```python
def fragmentar_texto(texto, chunk_size=100, chunk_overlap=20):
    paso = chunk_size - chunk_overlap
    chunks = []
    for i in range(0, len(texto), paso):
        chunk = texto[i : i + chunk_size]
        chunks.append(chunk)
        if i + chunk_size >= len(texto):
            break
    return chunks
```

---

## 2. Representación Vectorial y Búsqueda kNN

Cada fragmento de texto $c_i$ se convierte en un vector $\mathbf{v}_i \in \mathbb{R}^d$ mediante un modelo de embeddings.
Cuando llega una consulta $q$, se obtiene su embedding $\mathbf{q} \in \mathbb{R}^d$ y se calcula la **similitud coseno** con cada fragmento en el índice:

$$\text{score}(q, c_i) = \frac{\mathbf{q} \cdot \mathbf{v}_i}{\|\mathbf{q}\|_2 \|\mathbf{v}_i\|_2}$$

Se seleccionan los $k$ fragmentos con mayor puntuación (*Top-K Retrieval*).

---

## 3. Aumentación del Prompt (*Prompt Augmentation*)

Los fragmentos recuperados se organizan dentro de una plantilla de sistema que instruye al modelo a responder **únicamente** en base a la evidencia suministrada:

```text
SISTEMA: Eres un asistente verificado. Responde la pregunta del usuario utilizando
EXCLUSIVAMENTE la siguiente información de contexto. Si la respuesta no se encuentra
en el texto, di claramente: "No dispongo de información suficiente".

CONTEXTO RECUPERADO:
---
[Fragmento 1]: ...
[Fragmento 2]: ...
---

PREGUNTA DEL USUARIO: ¿Cuál es el procedimiento de devolución?
RESPUESTA:
```

---

## 4. Implementación Completa de un VectorStore en Python Puro

```python
import math

class VectorStoreEnMemoria:
    def __init__(self, funcion_embedding):
        self.embed_fn = funcion_embedding
        self.documentos = []
        self.vectores = []

    def agregar_documentos(self, textos):
        for t in textos:
            vec = self.embed_fn(t)
            self.documentos.append(t)
            self.vectores.append(vec)

    @staticmethod
    def _similitud_coseno(u, v):
        dot = sum(a * b for a, b in zip(u, v))
        norm_u = math.sqrt(sum(a ** 2 for a in u))
        norm_v = math.sqrt(sum(b ** 2 for b in v))
        if norm_u == 0 or norm_v == 0:
            return 0.0
        return dot / (norm_u * norm_v)

    def busqueda_similar(self, query, top_k=2):
        q_vec = self.embed_fn(query)
        puntuaciones = []
        for doc, vec in zip(self.documentos, self.vectores):
            sim = self._similitud_coseno(q_vec, vec)
            puntuaciones.append((doc, sim))
        puntuaciones.sort(key=lambda x: x[1], reverse=True)
        return puntuaciones[:top_k]
```

---

## 5. Resumen
1. **Chunking**: Segmenta texto crudo con solapamiento (*overlap*).
2. **Indexing**: Mapea fragmentos a vectores en memoria o bases especializadas (Chroma, Pinecone, Qdrant).
3. **Retrieval**: Busca por similitud de coseno los $k$ mejores candidatos.
4. **Generation**: Construye el prompt con contexto enriquecido y ejecuta la inferencia causal.
