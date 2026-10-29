"""
EJERCICIO: Pipeline RAG en Memoria con Context Augmentation
Módulo 5: Sistemas RAG y Búsqueda Vectorial

Construcción de un almacén vectorial en memoria y una canalización
completa de Retrieval-Augmented Generation (RAG).
"""

import math

def similitud_coseno(u, v):
    dot = sum(a * b for a, b in zip(u, v))
    norm_u = math.sqrt(sum(a ** 2 for a in u))
    norm_v = math.sqrt(sum(b ** 2 for b in v))
    if norm_u == 0 or norm_v == 0:
        return 0.0
    return dot / (norm_u * norm_v)

# ==============================================================================
# RETO 1: Clase VectorStoreEnMemoria
# ==============================================================================
class VectorStoreEnMemoria:
    """
    Base de datos vectorial simplificada en memoria.
    """
    def __init__(self, embed_fn):
        self.embed_fn = embed_fn
        self.documentos = []
        self.vectores = []

    def agregar_documentos(self, textos):
        """
        Calcula el embedding de cada texto usando self.embed_fn(texto)
        y lo guarda en self.documentos y self.vectores.
        """
        # TODO: Itera sobre textos, calcula el vector con self.embed_fn(t),
        # y agrégalos a self.documentos y self.vectores respectivamente.
        pass

    def buscar_similares(self, query_str, top_k=2):
        """
        Calcula el vector de la query_str y busca los top_k documentos más similares.
        
        Retorna:
            list of tuple: [(doc_texto, puntaje_similitud), ...] ordenados de mayor a menor.
        """
        # TODO:
        # 1. q_vec = self.embed_fn(query_str)
        # 2. Por cada doc y vec en zip(self.documentos, self.vectores):
        #    sim = similitud_coseno(q_vec, vec)
        # 3. Ordena por sim descendente y retorna los top_k.
        pass


# ==============================================================================
# RETO 2: Construcción de Prompt Aumentado
# ==============================================================================
def construir_prompt_aumentado(pregunta, fragmentos_recuperados):
    """
    Formatea la plantilla de RAG con el contexto recuperado y la pregunta.
    
    Formato esperado exacto:
    "CONTEXTO:\\n[1] <frag1>\\n[2] <frag2>\\n\\nPREGUNTA: <pregunta>\\nRESPUESTA:"
    
    Argumentos:
        pregunta (str): Pregunta original del usuario.
        fragmentos_recuperados (list of str): Textos recuperados.
        
    Retorna:
        str: Prompt formateado listo para el LLM.
    """
    # TODO:
    # 1. Genera las líneas de contexto: f"[{i+1}] {frag}"
    # 2. Une las líneas con "\\n"
    # 3. Ensambla y retorna la plantilla con el formato indicado.
    pass


# ==============================================================================
# RETO 3: Generador Causal Condicionado al Contexto
# ==============================================================================
def generar_respuesta_verificada(prompt_aumentado):
    """
    Simula la generación del LLM extrayendo la información del contexto.
    Si el contexto menciona una política o clave relevante, la extrae.
    Si no encuentra información relevante, responde: "Información no disponible en el contexto."
    """
    # TODO:
    # Si "devolucion" o "garantia" está en el prompt_aumentado.lower():
    #     retorna "La garantía cubre hasta 30 días con recibo original."
    # Sino:
    #     retorna "Información no disponible en el contexto."
    pass


# ==============================================================================
# RETO 4: Pipeline RAG End-to-End
# ==============================================================================
def ejecutar_pipeline_rag(pregunta, documentos_base, embed_fn):
    """
    Ejecuta el ciclo completo de RAG:
    1. Instancia VectorStoreEnMemoria y agrega los documentos.
    2. Realiza búsqueda de los top-2 fragmentos similares a la pregunta.
    3. Construye el prompt aumentado.
    4. Genera y retorna la respuesta.
    
    Retorna:
        tuple: (prompt_generado, respuesta_final)
    """
    # TODO: Orquesta los pasos 1, 2, 3 y 4 y retorna la tupla.
    pass


# ==========================================
# 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA (no modificar)
# ==========================================
def _ejecutar_pruebas():
    total = 0
    pasadas = 0

    def validar(reto, condicion, mensaje_error):
        nonlocal total, pasadas
        total += 1
        if condicion:
            pasadas += 1
            print(f"✔ {reto}")
        else:
            print(f"❌ {reto}: {mensaje_error}")

    # Función mock de embedding para pruebas
    def mock_embed(texto):
        t = texto.lower()
        return [float("garantia" in t or "devolucion" in t), float("envio" in t or "entrega" in t)]

    # Test Reto 1
    try:
        vs = VectorStoreEnMemoria(mock_embed)
        vs.agregar_documentos([
            "Política de devolucion y garantia vigente",
            "Tiempos de envio y entrega rapida"
        ])
        res1 = vs.buscar_similares("¿Cómo funciona la garantia?", top_k=1)
        validar("RETO 5.1 - VectorStore en memoria",
                len(res1) == 1 and "devolucion" in res1[0][0],
                f"Resultado inesperado en VectorStore: {res1}")
    except Exception as e:
        validar("RETO 5.1 - VectorStore en memoria", False, f"Error: {e}")

    # Test Reto 2
    try:
        p = construir_prompt_aumentado("¿Qué cubre la garantía?", ["Fragmento A", "Fragmento B"])
        esperado_inicio = "CONTEXTO:\n[1] Fragmento A\n[2] Fragmento B\n\nPREGUNTA: ¿Qué cubre la garantía?\nRESPUESTA:"
        validar("RETO 5.2 - Construcción de Prompt Aumentado",
                p == esperado_inicio,
                f"Formato no coincide.\nEsperado:\n{esperado_inicio}\nObtenido:\n{p}")
    except Exception as e:
        validar("RETO 5.2 - Construcción de Prompt Aumentado", False, f"Error: {e}")

    # Test Reto 3
    try:
        r_ok = generar_respuesta_verificada("CONTEXTO: garantia de devolucion\nPREGUNTA: x")
        r_fail = generar_respuesta_verificada("CONTEXTO: clima soleado\nPREGUNTA: x")
        validar("RETO 5.3 - Generación condicionada al contexto",
                "30 días" in r_ok and "no disponible" in r_fail,
                f"Fallo en respuestas: ok={r_ok}, fail={r_fail}")
    except Exception as e:
        validar("RETO 5.3 - Generación condicionada al contexto", False, f"Error: {e}")

    # Test Reto 4
    try:
        docs = [
            "Para solicitar devolucion se debe presentar ticket de compra.",
            "Los tiempos de entrega demoran entre 3 y 5 dias habiles."
        ]
        prompt_f, respuesta_f = ejecutar_pipeline_rag("¿Cuáles son los pasos de devolucion?", docs, mock_embed)
        validar("RETO 5.4 - Pipeline RAG End-to-End",
                "PREGUNTA:" in prompt_f and "30 días" in respuesta_f,
                f"Error en pipeline completo: {prompt_f} -> {respuesta_f}")
    except Exception as e:
        validar("RETO 5.4 - Pipeline RAG End-to-End", False, f"Error: {e}")

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
