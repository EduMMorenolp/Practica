# 🗺️ Temario de Inteligencia Artificial & Deep Learning Moderno

Ruta de aprendizaje estructurada, rigurosa y progresiva para dominar la **Inteligencia Artificial moderna**: desde la matemática elemental de redes neuronales y backpropagation desde cero, pasando por tokenización BPE, la arquitectura **Transformer** completa ($Q, K, V$ y atención multi-cabeza), modelos de lenguaje autoregresivos alineados con **Direct Preference Optimization (DPO)**, sistemas de recuperación documental **RAG**, protocolos de **Tool Calling**, hasta el nuevo estándar de la industria en **Agentes de IA** con arquitectura Playbook y proyectos prácticos integradores end-to-end.

---

## 📚 Roadmap de Módulos

### 🔹 [Módulo 1: Fundamentos Matemáticos y Redes Neuronales desde Cero](./Modulo%201%20-%20Fundamentos%20Matematicos%20y%20Redes%20Neuronales%20desde%20Cero/Modulo%201%20-%20Fundamentos%20Matematicos%20y%20Redes%20Neuronales%20desde%20Cero.md)
Aprende la evolución matemática elemental que transforma una multiplicación escalar en una red multicapa. Comprende cómo los pesos, el sesgo (*bias*) y las funciones de activación permiten resolver fronteras de decisión lineales y no lineales mediante la propagación hacia adelante (*forward pass*) y el algoritmo de retropropagación (*backpropagation*).
- **Teoría:** [Modulo 1 - Fundamentos Matematicos y Redes Neuronales desde Cero.md](./Modulo%201%20-%20Fundamentos%20Matematicos%20y%20Redes%20Neuronales%20desde%20Cero/Modulo%201%20-%20Fundamentos%20Matematicos%20y%20Redes%20Neuronales%20desde%20Cero.md)
  - La neurona artificial: Suma ponderada de entradas $z = \mathbf{w}^T \mathbf{x} + b$ y transformación no lineal con funciones de activación $f(z)$.
  - Límites del Perceptrón Simple: Separabilidad lineal y resolución de funciones lógicas básicas (AND, OR) con umbrales de disparo ($\theta$).
  - Perceptrón Multicapa (MLP): Representación matricial $\mathbf{a} = f(\mathbf{W}\mathbf{x} + \mathbf{b})$ para abordar el problema del XOR y superficies de decisión complejas.
  - Algoritmo de Retropropagación (Backpropagation): Derivada de funciones continuas (sigmoide, $\tanh$), regla de la cadena y actualización de pesos ($\Delta w_{i,j} = \eta \cdot \delta \cdot x$).
- **Ejercicios Prácticos:**
  - [01_perceptron_simple_y_puertas_logicas.py](./Modulo%201%20-%20Fundamentos%20Matematicos%20y%20Redes%20Neuronales%20desde%20Cero/01_perceptron_simple_y_puertas_logicas.py) — Implementación en Python puro de un perceptrón simple, entrenamiento iterativo ajustando pesos y umbrales para clasificar entradas lógicas OR/AND.
  - [02_red_multicapa_y_backpropagation.py](./Modulo%201%20-%20Fundamentos%20Matematicos%20y%20Redes%20Neuronales%20desde%20Cero/02_red_multicapa_y_backpropagation.py) — Construcción de una red de 3 capas con activación $\tanh$ y propagación de error hacia atrás para solucionar el problema no lineal XOR.

---

### 🔹 [Módulo 2: Tokenización y Representación Textual (BPE y Embeddings)](./Modulo%202%20-%20Tokenizacion%20y%20Representacion%20Textual%20BPE%20y%20Embeddings/Modulo%202%20-%20Tokenizacion%20y%20Representacion%20Textual%20BPE%20y%20Embeddings.md)
Comprende cómo el texto en lenguaje natural se descompone y proyecta en espacios vectoriales latentes. Domina el algoritmo Byte-Pair Encoding (BPE), la mitigación de palabras fuera de vocabulario (OOV) y la geometría de similitud coseno.
- **Teoría:** [Modulo 2 - Tokenizacion y Representacion Textual BPE y Embeddings.md](./Modulo%202%20-%20Tokenizacion%20y%20Representacion%20Textual%20BPE%20y%20Embeddings/Modulo%202%20-%20Tokenizacion%20y%20Representacion%20Textual%20BPE%20y%20Embeddings.md)
  - Granularidad de tokens: caracteres vs palabras completas vs subpalabras.
  - Algoritmo Byte-Pair Encoding (BPE): conteo de frecuencias de bigramas, reglas de fusión secuenciales y vocabulario de subpalabras.
  - Matrices de Lookup de Embeddings: mapeo de IDs discretos a vectores continuos $\mathbf{E} \in \mathbb{R}^{|\mathcal{V}| \times d}$.
  - Métricas de Espacio Vectorial: norma euclidiana ($L_2$) y similitud coseno para determinar proximidad semántica.
- **Ejercicios Prácticos:**
  - [01_tokenizador_bpe_desde_cero.py](./Modulo%202%20-%20Tokenizacion%20y%20Representacion%20Textual%20BPE%20y%20Embeddings/01_tokenizador_bpe_desde_cero.py) — Conteo de pares adyacentes, fusiones iterativas de bigramas frecuentes y tokenización de nuevas palabras.
  - [02_lookup_embeddings_y_similitud.py](./Modulo%202%20-%20Tokenizacion%20y%20Representacion%20Textual%20BPE%20y%20Embeddings/02_lookup_embeddings_y_similitud.py) — Extracción por índice en matrices de embedding, cálculo de norma L2, similitud coseno y ranking de vecinos cercanos (Top-K).

---

### 🔹 [Módulo 3: La Arquitectura Transformer y Scaled Dot-Product Attention](./Modulo%203%20-%20La%20Arquitectura%20Transformer%20y%20Scaled%20Dot-Product%20Attention/Modulo%203%20-%20La%20Arquitectura%20Transformer%20y%20Scaled%20Dot-Product%20Attention.md)
Estudia la arquitectura revolucionaria presentada en *Attention Is All You Need* (Vaswani et al., 2017). Comprende cómo el procesamiento matricial en paralelo reemplaza a las redes recurrentes mediante encodificación posicional y el álgebra de Query, Key y Value.
- **Teoría:** [Modulo 3 - La Arquitectura Transformer y Scaled Dot-Product Attention.md](./Modulo%203%20-%20La%20Arquitectura%20Transformer%20y%20Scaled%20Dot-Product%20Attention/Modulo%203%20-%20La%20Arquitectura%20Transformer%20y%20Scaled%20Dot-Product%20Attention.md)
  - Encodificación Posicional (Positional Encoding): Inyección de información secuencial matemática mediante funciones sinusoidales intercaladas.
  - Álgebra de Matrices $Q, K, V$: Proyección lineal de entradas a matrices de Consultas ($\mathbf{Q}$), Claves ($\mathbf{K}$) y Valores ($\mathbf{V}$).
  - Scaled Dot-Product Attention: Cálculo de afinidad contextual $\text{Attention}(\mathbf{Q}, \mathbf{K}, \mathbf{V}) = \text{softmax}\left(\frac{\mathbf{Q}\mathbf{K}^T}{\sqrt{d_k}}\right)\mathbf{V}$ y mitigación de gradientes desvanecientes.
  - Multi-Head Attention (MHA): Proyección en $h$ subespacios en paralelo y concatenación con $\mathbf{W}^O$.
  - Anatomía del Bloque Transformer: Redes Position-Wise Feed-Forward (FFN), conexiones residuales y Normalización por Capa ($\text{LayerNorm}$).
- **Ejercicios Prácticos:**
  - [01_positional_encoding_y_embeddings.py](./Modulo%203%20-%20La%20Arquitectura%20Transformer%20y%20Scaled%20Dot-Product%20Attention/01_positional_encoding_y_embeddings.py) — Cálculo de matrices de embedding y adición de frecuencias sinusoidales para vectores de posición.
  - [02_scaled_dot_product_y_multihead_attention.py](./Modulo%203%20-%20La%20Arquitectura%20Transformer%20y%20Scaled%20Dot-Product%20Attention/02_scaled_dot_product_y_multihead_attention.py) — Construcción desde cero de un módulo MultiHeadAttention con cabezas paralelas, máscara y proyección de salida.

---

### 🔹 [Módulo 4: Generación Autorregresiva, Muestreo y Alineación DPO](./Modulo%204%20-%20Generacion%20Autoregresiva%20Muestreo%20y%20Alineacion%20DPO/Modulo%204%20-%20Generacion%20Autoregresiva%20Muestreo%20y%20Alineacion%20DPO.md)
Analiza los modelos decodificadores causales para la predicción del siguiente token. Aprende las técnicas de decodificación y el método matemático directo de Optimización de Preferencias Directa (DPO) para alinear modelos con retroalimentación humana.
- **Teoría:** [Modulo 4 - Generacion Autoregresiva Muestreo y Alineacion DPO.md](./Modulo%204%20-%20Generacion%20Autoregresiva%20Muestreo%20y%20Alineacion%20DPO/Modulo%204%20-%20Generacion%20Autoregresiva%20Muestreo%20y%20Alineacion%20DPO.md)
  - Predicción Causal Autorregresiva: Masked Self-Attention con valores $-\infty$ para prevenir fuga de información futura.
  - Proyección a Logits y Muestreo: Escala con temperatura ($T$), filtrado Top-K y muestreo probabilístico con softmax.
  - Supervised Fine-Tuning (SFT) y RLHF tradicional frente a Direct Preference Optimization (DPO).
  - Función de Pérdida DPO: Optimización analítica directa basada en la razón de log-probabilidades entre pares elegidos ($y_w$) y rechazados ($y_l$).
- **Ejercicios Prácticos:**
  - [01_prediccion_causal_y_muestreo_logits.py](./Modulo%204%20-%20Generacion%20Autoregresiva%20Muestreo%20y%20Alineacion%20DPO/01_prediccion_causal_y_muestreo_logits.py) — Aplicación de máscaras causales, proyección de logits y simulación de muestreo con temperatura y top-k.
  - [02_loss_dpo_y_alineacion_preferencias.py](./Modulo%204%20-%20Generacion%20Autoregresiva%20Muestreo%20y%20Alineacion%20DPO/02_loss_dpo_y_alineacion_preferencias.py) — Implementación matemática de la pérdida `dpo_loss` con el parámetro de regularización $\beta$.

---

### 🔹 [Módulo 5: Sistemas RAG y Búsqueda Vectorial](./Modulo%205%20-%20Sistemas%20RAG%20y%20Busqueda%20Vectorial/Modulo%205%20-%20Sistemas%20RAG%20y%20Busqueda%20Vectorial.md)
Aprende a conectar modelos generativos con fuentes de datos externas para mitigar alucinaciones y superar la fecha de corte de conocimiento (*Knowledge Cutoff*) mediante Retrieval-Augmented Generation.
- **Teoría:** [Modulo 5 - Sistemas RAG y Busqueda Vectorial.md](./Modulo%205%20-%20Sistemas%20RAG%20y%20Busqueda%20Vectorial/Modulo%205%20-%20Sistemas%20RAG%20y%20Busqueda%20Vectorial.md)
  - Flujo integral de RAG: Indexación, Recuperación (*Retrieval*) y Generación Aumentada.
  - Estrategias de Fragmentación (*Chunking*): Tamaño de fragmento y solapamiento (*overlap*) para preservar coherencia contextual.
  - Indexación semántica y búsqueda kNN por similitud coseno.
  - Aumentación de contexto: Construcción de prompts estructurados condicionados a la evidencia recuperada.
- **Ejercicios Prácticos:**
  - [01_chunking_y_similitud_coseno.py](./Modulo%205%20-%20Sistemas%20RAG%20y%20Busqueda%20Vectorial/01_chunking_y_similitud_coseno.py) — Segmentación con solapamiento, generación de vectores de frecuencia y recuperación Top-K.
  - [02_pipeline_rag_en_memoria.py](./Modulo%205%20-%20Sistemas%20RAG%20y%20Busqueda%20Vectorial/02_pipeline_rag_en_memoria.py) — Clase `VectorStoreEnMemoria`, formateo de prompts aumentados y pipeline RAG end-to-end.

---

### 🔹 [Módulo 6: Tool Calling y Ciclo ReAct](./Modulo%206%20-%20Tool%20Calling%20y%20Ciclo%20ReAct/Modulo%206%20-%20Tool%20Calling%20y%20Ciclo%20ReAct.md)
Dota a los modelos de lenguaje de capacidad de acción sobre el entorno externo mediante esquemas de llamadas a funciones y bucles de razonamiento interactivo.
- **Teoría:** [Modulo 6 - Tool Calling y Ciclo ReAct.md](./Modulo%206%20-%20Tool%20Calling%20y%20Ciclo%20ReAct/Modulo%206%20-%20Tool%20Calling%20y%20Ciclo%20ReAct.md)
  - Especificación formal de herramientas mediante JSON Schema (nombre, descripción, propiedades, campos obligatorios).
  - El Paradigma ReAct (Yao et al., 2022): Alternancia entre Pensamiento (*Thought*), Acción (*Action*) y Observación (*Observation*).
  - Despachadores (*Tool Dispatchers*): Validación de argumentos y ejecución segura de funciones locales o APIs.
- **Ejercicios Prácticos:**
  - [01_definicion_esquemas_herramientas.py](./Modulo%206%20-%20Tool%20Calling%20y%20Ciclo%20ReAct/01_definicion_esquemas_herramientas.py) — Creación de esquemas JSON Schema, validación estricta de tipos de argumentos y registro de funciones.
  - [02_bucle_react_agente_simple.py](./Modulo%206%20-%20Tool%20Calling%20y%20Ciclo%20ReAct/02_bucle_react_agente_simple.py) — Parseo de acciones del LLM, formateo de observaciones e implementación del bucle iterativo ReAct.

---

### 🔹 [Módulo 7: Arquitectura y Desarrollo Sistemático de Agentes de IA](./Modulo%207%20-%20Arquitectura%20y%20Desarrollo%20Sistematico%20de%20Agentes%20de%20IA/Modulo%207%20-%20Arquitectura%20y%20Desarrollo%20Sistematico%20de%20Agentes%20de%20IA.md)
Supera la fragilidad de las redes multi-agente adoptando el paradigma de Delegación de IA (*AI Delegation*): un agente general guiado por directorios de trabajo estructurados (*Playbooks*).
- **Teoría:** [Modulo 7 - Arquitectura y Desarrollo Sistematico de Agentes de IA.md](./Modulo%207%20-%20Arquitectura%20y%20Desarrollo%20Sistematico%20de%20Agentes%20de%20IA/Modulo%207%20-%20Arquitectura%20y%20Desarrollo%20Sistematico%20de%20Agentes%20de%20IA.md)
  - La Arquitectura en 3 Capas del Playbook:
    1. **Proceso (Process):** Formalización de reglas de negocio en lenguaje claro (`PROCESS.md` / `SKILL.md`).
    2. **Caja de Herramientas (Toolbox):** Plantillas, scripts deterministas y activos gold-standard (`toolbox/`).
    3. **Prueba (Proof):** Listas de verificación y evidencia externa objetiva independiente del modelo (`proof/`).
  - El Bucle de Delegación (Delegation Loop): Diagnóstico, corrección a nivel de repositorio y reejecución determinista.
- **Ejercicios Prácticos:**
  - [01_estructura_playbook_y_toolbox.py](./Modulo%207%20-%20Arquitectura%20y%20Desarrollo%20Sistematico%20de%20Agentes%20de%20IA/01_estructura_playbook_y_toolbox.py) — Creación sistemática de directorios operativos de playbook con reglas, plantillas y assets.
  - [02_evals_capa_prueba_y_delegation_loop.py](./Modulo%207%20-%20Arquitectura%20y%20Desarrollo%20Sistematico%20de%20Agentes%20de%20IA/02_evals_capa_prueba_y_delegation_loop.py) — Implementación de verificaciones objetivas externas de prueba (*proof*) y simulación del ciclo de diagnóstico y corrección.

---

### 🔹 [Módulo 8: Proyectos Prácticos Integradores de IA](./Modulo%208%20-%20Proyectos%20Practicos%20Integradores%20de%20IA/Modulo%208%20-%20Proyectos%20Practicos%20Integradores%20de%20IA.md)
Módulo culminante que ensambla todos los subsistemas desarrollados en dos proyectos end-to-end completos.
- **Teoría:** [Modulo 8 - Proyectos Practicos Integradores de IA.md](./Modulo%208%20-%20Proyectos%20Practicos%20Integradores%20de%20IA/Modulo%208%20-%20Proyectos%20Practicos%20Integradores%20de%20IA.md)
  - Arquitectura del generador causal autorregresivo estilo GPT.
  - Arquitectura del agente autónomo combinando memoria documental (RAG) y capacidad de cómputo/herramientas (Tool Calling).
- **Proyectos Prácticos:**
  - [01_mini_gpt_generador_autoregresivo.py](./Modulo%208%20-%20Proyectos%20Practicos%20Integradores%20de%20IA/01_mini_gpt_generador_autoregresivo.py) — Inferencia completa estilo GPT desde cero: tokenizador, autoatención causal con máscara triangular, proyección lineal a logits, temperatura y generación autorregresiva token por token.
  - [02_asistente_rag_con_herramientas.py](./Modulo%208%20-%20Proyectos%20Practicos%20Integradores%20de%20IA/02_asistente_rag_con_herramientas.py) — Construcción de un agente autónomo integral: base vectorial en memoria para recuperación documental, caja de herramientas deterministas, orquestador de decisiones y capa de prueba objetiva (*proof layer*).

---

## ⚡ Cómo Practicar

1. Cada ejercicio es un archivo `.py` que implementa la matemática o la lógica pura con Python estándar (sin requerir librerías pesadas obligatorias).
2. Puedes ejecutar los ejercicios en tu terminal con:
   ```bash
   python "AI/Modulo 1 - Fundamentos Matematicos y Redes Neuronales desde Cero/01_perceptron_simple_y_puertas_logicas.py"
   ```
   o directamente desde la plataforma web **Practice Hub** en `http://localhost:3000` con el botón **"▶ Ejecutar en Python"**.
3. Resuelve los retos indicados en los comentarios `# TODO:`.
4. La **Suite de Validación Automática** al final de cada archivo comprobará numéricamente tus funciones emitiendo:
   - `✔ RETO X.X ...` cuando tu cálculo matemático sea exacto.
   - `❌ RETO X.X ...` con una pista descriptiva del error puntual o del valor esperado.
