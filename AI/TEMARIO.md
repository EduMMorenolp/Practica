# 🗺️ Temario de Inteligencia Artificial & Deep Learning Moderno

Ruta de aprendizaje estructurada, rigurosa y progresiva para dominar la **Inteligencia Artificial moderna**: desde la matemática elemental de redes neuronales y backpropagation desde cero, pasando por la arquitectura **Transformer** completa ($Q, K, V$ y atención multi-cabeza), modelos de lenguaje autoregresivos alineados con **Direct Preference Optimization (DPO)**, hasta el nuevo estándar de la industria en **Agentes de IA** con arquitectura Playbook en 3 capas.

---

## 📚 Roadmap de Módulos

### 🔹 [Módulo 1: Fundamentos Matemáticos y Redes Neuronales desde Cero](./Modulo%201%20-%20Fundamentos%20Matematicos%20y%20Redes%20Neuronales%20desde%20Cero/Modulo%201%20-%20De%20la%20Neurona%20Escalar%20al%20Perceptron%20Multicapa%20y%20Backpropagation.md)
Aprende la evolución matemática elemental que transforma una multiplicación escalar en una red multicapa. Comprende cómo los pesos, el sesgo (*bias*) y las funciones de activación permiten resolver fronteras de decisión lineales y no lineales mediante la propagación hacia adelante (*forward pass*) y el algoritmo de retropropagación (*backpropagation*).
- **Teoría:** [Modulo 1 - De la Neurona Escalar al Perceptron Multicapa y Backpropagation.md](./Modulo%201%20-%20Fundamentos%20Matematicos%20y%20Redes%20Neuronales%20desde%20Cero/Modulo%201%20-%20De%20la%20Neurona%20Escalar%20al%20Perceptron%20Multicapa%20y%20Backpropagation.md)
  - La neurona artificial: Suma ponderada de entradas $z = \mathbf{w}^T \mathbf{x} + b$ y transformación no lineal con funciones de activación $f(z)$.
  - Límites del Perceptrón Simple: Separabilidad lineal y resolución de funciones lógicas básicas (AND, OR) con umbrales de disparo ($\theta$).
  - Perceptrón Multicapa (MLP): Representación matricial $\mathbf{a} = f(\mathbf{W}\mathbf{x} + \mathbf{b})$ para abordar el problema del XOR y superficies de decisión complejas.
  - Algoritmo de Retropropagación (Backpropagation): Derivada de funciones activadoras continuas (sigmoide, tangente hiperbólica $\tanh$), regla de la cadena y actualización de pesos ($\Delta w_{i,j} = \lambda \cdot e \cdot x$).
- **Ejercicios Prácticos:**
  - [01_perceptron_simple_y_puertas_logicas.py](./Modulo%201%20-%20Fundamentos%20Matematicos%20y%20Redes%20Neuronales%20desde%20Cero/01_perceptron_simple_y_puertas_logicas.py) — Implementación en Python puro de un perceptrón simple, entrenamiento iterativo ajustando pesos ($\Delta w_i$) y umbrales ($\theta$) para clasificar entradas lógicas OR/AND.
  - [02_red_multicapa_y_backpropagation.py](./Modulo%201%20-%20Fundamentos%20Matematicos%20y%20Redes%20Neuronales%20desde%20Cero/02_red_multicapa_y_backpropagation.py) — Construcción de una red de 3 capas (entrada, oculta y salida) con activación $\tanh$ y algoritmo de propagación de error hacia atrás para solucionar el problema no lineal XOR.

---

### 🔹 [Módulo 2: La Arquitectura Transformer y el Mecanismo de Autoatención](./Modulo%202%20-%20La%20Arquitectura%20Transformer%20y%20el%20Mecanismo%20de%20Autoatencion/Modulo%202%20-%20Arquitectura%20Transformer%20y%20Scaled%20Dot-Product%20Attention.md)
Estudia la arquitectura revolucionaria presentada en *Attention Is All You Need* (Vaswani et al., 2017). Comprende cómo la eliminación total de redes recurrentes (RNN) y convolucionales permite el procesamiento matricial en paralelo mediante tokens, embeddings, encodificación posicional y el álgebra de Query, Key y Value.
- **Teoría:** [Modulo 2 - Arquitectura Transformer y Scaled Dot-Product Attention.md](./Modulo%202%20-%20La%20Arquitectura%20Transformer%20y%20el%20Mecanismo%20de%20Autoatencion/Modulo%202%20-%20Arquitectura%20Transformer%20y%20Scaled%20Dot-Product%20Attention.md)
  - Tokenización y Embeddings: Deconstrucción del texto en tokens y proyección a vectores continuos multidimensionales ($d_{model} = 512$).
  - Encodificación Posicional (Positional Encoding): Inyección de información secuencial matemática mediante funciones sinusoidales y cosenoidales intercaladas ($PE_{(pos, 2i)}$ y $PE_{(pos, 2i+1)}$).
  - Álgebra de Matrices $Q, K, V$: Proyección lineal de entradas a matrices de Consultas ($\mathbf{Q}$), Claves ($\mathbf{K}$) y Valores ($\mathbf{V}$) mediante pesos entrenables ($\mathbf{W}^Q, \mathbf{W}^K, \mathbf{W}^V$).
  - Scaled Dot-Product Attention: Cálculo de afinidad contextual $\text{Attention}(\mathbf{Q}, \mathbf{K}, \mathbf{V}) = \text{softmax}\left(\frac{\mathbf{Q}\mathbf{K}^T}{\sqrt{d_k}}\right)\mathbf{V}$ y el factor de escala $\sqrt{d_k}$ para mitigar la saturación de gradientes en la función softmax.
  - Multi-Head Attention (MHA): Proyección en $h = 8$ subespacios en paralelo para atender a múltiples aspectos sintácticos y semánticos simultáneamente.
  - Anatomía del Bloque Transformer: Redes Position-Wise Feed-Forward (FFN), conexiones residuales y Normalización por Capa ($\text{LayerNorm}(\mathbf{x} + \text{Sublayer}(\mathbf{x}))$).
- **Ejercicios Prácticos:**
  - [01_positional_encoding_y_embeddings.py](./Modulo%202%20-%20La%20Arquitectura%20Transformer%20y%20el%20Mecanismo%20de%20Autoatencion/01_positional_encoding_y_embeddings.py) — Cálculo matricial con Python/NumPy de matrices de embedding y adición de frecuencias sinusoidales para vectores de posición.
  - [02_scaled_dot_product_y_multihead_attention.py](./Modulo%202%20-%20La%20Arquitectura%20Transformer%20y%20el%20Mecanismo%20de%20Autoatencion/02_scaled_dot_product_y_multihead_attention.py) — Construcción desde cero de un módulo MultiHeadAttention que divida proyecciones $d_{model}$ en cabezas paralelas, aplique la máscara de atención y la proyección de salida $\mathbf{W}^O$.

---

### 🔹 [Módulo 3: Modelos de Lenguaje Causales, Alineación y Direct Preference Optimization (DPO)](./Modulo%203%20-%20Modelos%20de%20Lenguaje%20Causales%20Alineacion%20y%20DPO/Modulo%203%20-%20Prediccion%20Autoregresiva%20SFT%20RLHF%20y%20Direct%20Preference%20Optimization.md)
Analiza la evolución de los modelos decodificadores (estilo GPT) para la predicción autoregresiva del siguiente token. Aprende las etapas necesarias para transformar un modelo generador base en un asistente seguro y útil mediante Supervised Fine-Tuning (SFT), RLHF tradicional con PPO y la alternativa matemática directa de Optimización de Preferencias Directa (DPO).
- **Teoría:** [Modulo 3 - Prediccion Autoregresiva SFT RLHF y Direct Preference Optimization.md](./Modulo%203%20-%20Modelos%20de%20Lenguaje%20Causales%20Alineacion%20y%20DPO/Modulo%203%20-%20Prediccion%20Autoregresiva%20SFT%20RLHF%20y%20Direct%20Preference%20Optimization.md)
  - Predicción Causal Autoregresiva: Uso de Masked Self-Attention con valores $-\infty$ para prevenir la fuga de información futura en el decodificador.
  - Proyección a Logits y Muestreo: Paso de representaciones ocultas a logits mediante la matriz de vocabulario $\mathbf{W}_{vocab}$ y selección con softmax (temperatura, top-k/top-p).
  - Supervised Fine-Tuning (SFT): Entrenamiento supervisado con demostraciones de alta calidad dictadas por humanos (InstructGPT).
  - RLHF Tradicional (PPO): Entrenamiento de un modelo de recompensa $r_\phi(x,y)$ bajo la formulación Bradley-Terry y optimización con Proximal Policy Optimization sujeto a penalización de divergencia KL respecto al modelo base $\pi_{ref}$.
  - Direct Preference Optimization (DPO): Demostración de que el modelo de lenguaje actúa implícitamente como su propio modelo de recompensa ($r(x,y) = \beta \log \frac{\pi_\theta(y|x)}{\pi_{ref}(y|x)}$). Eliminación del bucle de RL y entrenamiento directo con una función de pérdida de entropía cruzada binaria sobre pares preferidos ($y_w$) y no preferidos ($y_l$).
- **Ejercicios Prácticos:**
  - [01_prediccion_causal_y_muestreo_logits.py](./Modulo%203%20-%20Modelos%20de%20Lenguaje%20Causales%20Alineacion%20y%20DPO/01_prediccion_causal_y_muestreo_logits.py) — Aplicación de máscaras causales sobre matrices de atención, proyección a espacio de vocabulario y simulación de estrategias de muestreo (temperatura, top-k).
  - [02_loss_dpo_y_alineacion_preferencias.py](./Modulo%203%20-%20Modelos%20de%20Lenguaje%20Causales%20Alineacion%20y%20DPO/02_loss_dpo_y_alineacion_preferencias.py) — Implementación matemática de la función de pérdida `dpo_loss(pi_logps, ref_logps, yw_idxs, yl_idxs, beta)` utilizando la relación de probabilidades logarítmicas de la política elegida frente a la referencia.

---

### 🔹 [Módulo 4: Arquitectura y Desarrollo Sistemático de Agentes de IA](./Modulo%204%20-%20Arquitectura%20y%20Desarrollo%20Sistematico%20de%20Agentes%20de%20IA/Modulo%204%20-%20Delegacion%20de%20IA%20y%20Estructura%20de%20Playbooks.md)
Supera las limitaciones de las redes con docenas de agentes especialistas interconectados (que fallan por fragilidad y complejidad). Adopta el paradigma de Delegación de IA (*AI Delegation*): el uso de un solo agente general guiado por un directorio estructurado de archivos (*Playbook folder*).
- **Teoría:** [Modulo 4 - Delegacion de IA y Estructura de Playbooks.md](./Modulo%204%20-%20Arquitectura%20y%20Desarrollo%20Sistematico%20de%20Agentes%20de%20IA/Modulo%204%20-%20Delegacion%20de%20IA%20y%20Estructura%20de%20Playbooks.md)
  - Crítica a la Fragilidad Multiagente: Por qué encadenar agentes especialistas resulta frágil frente a un agente general que ejecuta instrucciones directas de un proyecto.
  - La Arquitectura en 3 Capas del Playbook:
    1. **Proceso (Process):** Formalización en lenguaje claro de reglas de negocio, secuencias y toma de decisiones (`SKILL.md` / `PROCESS.md`).
    2. **Caja de Herramientas (Toolbox):** Plantillas fijas, scripts mecánicos de automatización y ejemplos gold standard (`toolbox/`, `files/`, `templates/`).
    3. **Prueba (Proof):** Listas de verificación con evidencia objetiva externa fuera del borrador del modelo (`CHECKS.md` / `proof/`).
  - El Bucle de Delegación (Delegation Loop): Protocolo de mejora continua donde las correcciones jamás se realizan en el chat. Identificación de la capa que falló, actualización del archivo correspondiente en el directorio y reejecución completa del trabajo.
- **Ejercicios Prácticos:**
  - [01_estructura_playbook_y_toolbox.py](./Modulo%204%20-%20Arquitectura%20y%20Desarrollo%20Sistematico%20de%20Agentes%20de%20IA/01_estructura_playbook_y_toolbox.py) — Creación de un directorio operativo para una tarea semanal recursiva con archivo de reglas (`PROCESS.md`), carpetas de recursos (`toolbox/`) y plantilla reutilizable.
  - [02_evals_capa_prueba_y_delegation_loop.py](./Modulo%204%20-%20Arquitectura%20y%20Desarrollo%20Sistematico%20de%20Agentes%20de%20IA/02_evals_capa_prueba_y_delegation_loop.py) — Implementación de verificaciones objetivas externas de prueba (*proof*) y simulación del ciclo de diagnóstico y corrección permanente de playbooks.

---

## ⚡ Cómo Practicar

1. Cada ejercicio es un archivo `.py` que implementa la matemática o la lógica pura sin dependencias externas obligatorias (utilizando listas y funciones de Python estándar o NumPy).
2. Puedes ejecutar los ejercicios en tu terminal con:
   ```bash
   python "AI/Modulo 1 - Fundamentos Matematicos y Redes Neuronales desde Cero/01_perceptron_simple_y_puertas_logicas.py"
   ```
   o directamente desde el **Practice Hub** en `http://localhost:3000` con el botón **"▶ Ejecutar en Python"**.
3. Resuelve los retos indicados en los comentarios `# TODO:`.
4. La **Suite de Validación Automática** al final de cada archivo comprobará numéricamente tus funciones emitiendo:
   - `✔ RETO X.X ...` en verde cuando tu cálculo matemático sea exacto.
   - `❌ RETO X.X ...` con una pista descriptiva del error puntual o del valor esperado.
