# Módulo 8: Proyectos Prácticos Integradores de IA

## 📌 Introducción y Propósito
Este módulo de culminación integra sistemáticamente todos los bloques de construcción desarrollados a lo largo del roadmap de Inteligencia Artificial:
1. **Representación y Geometría Latente**: Tokenización, embeddings y positional encodings (Módulos 2 y 3).
2. **Mecanismos de Atención**: Scaled dot-product attention y proyección matricial (Módulo 3).
3. **Decodificación Causal**: Predicción autorregresiva de logits y muestreo con temperatura (Módulo 4).
4. **Memoria Externa**: Fragmentación semántica y recuperación vectorial con similitud coseno (Módulo 5).
5. **Agentes y Acción en el Entorno**: Esquemas formales de herramientas, despacho y ciclos ReAct (Módulos 6 y 7).

A través de dos proyectos integradores integrales, pondrás a prueba la orquestación completa de un pipeline de Deep Learning y un sistema autónomo de ingeniería de agentes.

---

## 🛠 Proyecto Integrador 1: Mini-GPT Generador Autorregresivo

El objetivo es construir un pipeline de inferencia generativa autorregresiva de principio a fin sin librerías externas pesadas:
* **Vocabulario y Tokenizador**: Mapeo bidireccional entre caracteres/tokens y enteros.
* **Embeddings + Positional Encoding**: Conversión de tokens en representaciones matriciales temporales.
* **Bloque de Atención Causal (Self-Attention)**: Cálculo de matrices $\mathbf{Q}, \mathbf{K}, \mathbf{V}$ con máscara triangular superior ($-\infty$) para garantizar que ningún token atienda al futuro.
* **Proyección de Logits**: Mapeo del estado oculto final a la dimensión del vocabulario $|\mathcal{V}|$.
* **Muestreo con Temperatura**: Transformación softmax escalada y selección estocástica del siguiente token hasta alcanzar el delimitador de parada o la longitud máxima.

```text
Prompt de entrada ("IA")
        │
        ▼ (Lookup + Positional Encoding)
   [x_0, x_1]  (Forma: 2 x d_model)
        │
        ▼ (Scaled Dot-Product con Máscara Causal)
   [h_0, h_1]  (Representaciones contextuales)
        │
        ▼ (Proyección lineal a dimensión de vocabulario)
   Logits del último token h_1: [l_0, l_1, ..., l_V-1]
        │
        ▼ (Softmax con Temperatura T)
   Distribución de probabilidad P(t_next | prompt)
        │
        ▼ (Muestreo)
   Nuevo token generado: " " ──▶ Se concatena al prompt ("IA ")
        │
        └── Repetir autorregresivamente hasta alcanzar max_tokens
```

---

## 🤖 Proyecto Integrador 2: Asistente Autónomo con RAG y Herramientas

El segundo proyecto consolida un sistema de agentes de producción moderno combinando recuperación documental (*RAG*) y capacidad de acción (*Tool Calling*):
* **Base de Conocimiento Vectorial**: Colección de documentos técnicos indexados mediante embeddings semánticos.
* **Herramientas de Ejecución**: Registro de funciones (ej. calculadora matemática, consulta de base de datos) con validación de esquemas.
* **Bucle ReAct Orquestado**:
  1. El agente recibe una consulta compleja.
  2. Evalúa si necesita buscar conocimiento en el VectorStore o ejecutar una herramienta.
  3. Ejecuta la acción correspondiente y alimenta la observación en su ventana de contexto.
  4. Genera una respuesta final contrastada y respaldada por evidencia.

---

## 🚀 Conclusión del Track de IA
Al completar estos dos proyectos integradores, habrás dominado desde los fundamentos matemáticos de una neurona escalar hasta los paradigmas contemporáneos de agentes autónomos y LLMs causales.
