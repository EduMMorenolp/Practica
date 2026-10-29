"""
EJERCICIO: Fragmentación (Chunking) y Similitud Vectorial
Módulo 5: Sistemas RAG y Búsqueda Vectorial

El preprocesamiento de documentos y la búsqueda por similitud vectorial
constituyen el motor de recuperación (*Retrieval*) en arquitecturas RAG.
"""

import math
import re

# ==============================================================================
# RETO 1: Segmentación de Texto con Solapamiento (Chunking)
# ==============================================================================
def fragmentar_texto_con_solapamiento(texto, chunk_size=40, chunk_overlap=10):
    """
    Divide un texto en fragmentos continuos de longitud 'chunk_size',
    desplazándose con un paso de (chunk_size - chunk_overlap).
    
    Argumentos:
        texto (str): Cadena de texto a dividir.
        chunk_size (int): Longitud en caracteres de cada fragmento.
        chunk_overlap (int): Cantidad de caracteres compartidos entre fragmentos adyacentes.
    
    Retorna:
        list of str: Lista con los fragmentos de texto resultantes.
    
    Restricción:
        El paso debe ser: paso = chunk_size - chunk_overlap.
        Asegúrate de no generar fragmentos vacíos.
    """
    # TODO:
    # 1. Valida que chunk_size > chunk_overlap > 0
    # 2. paso = chunk_size - chunk_overlap
    # 3. Itera con un índice inicio desde 0 hasta len(texto) con saltos de paso:
    #    extrae fragmento = texto[inicio : inicio + chunk_size]
    #    si el fragmento no está vacío, agrégalo a la lista
    #    si inicio + chunk_size >= len(texto), detén el bucle.
    # 4. Retorna la lista de fragmentos.
    pass


# ==============================================================================
# RETO 2: Generación de Vector de Frecuencias (Embeddings Bag-of-Words)
# ==============================================================================
def generar_embedding_frecuencias(texto, vocabulario):
    """
    Genera un vector denso que representa la frecuencia normalizada de cada palabra
    del vocabulario presente en el texto (en minúsculas).
    
    Argumentos:
        texto (str): Texto de entrada.
        vocabulario (list of str): Lista ordenada de términos únicos del vocabulario.
    
    Retorna:
        list of float: Vector con la frecuencia (conteo) de cada término del vocabulario.
    """
    # TODO:
    # 1. Extrae las palabras del texto en minúsculas usando palabras = re.findall(r'\b\w+\b', texto.lower())
    # 2. Crea un vector con ceros de tamaño len(vocabulario).
    # 3. Para cada término con índice idx en vocabulario:
    #    vector[idx] = float(palabras.count(término.lower()))
    # 4. Retorna el vector.
    pass


# ==============================================================================
# RETO 3: Similitud Coseno
# ==============================================================================
def similitud_coseno(u, v):
    """
    Calcula la similitud coseno entre dos vectores numéricos.
    Retorna 0.0 si alguno tiene norma cero.
    """
    # TODO:
    # 1. dot_prod = sum(a * b for a, b in zip(u, v))
    # 2. norm_u = math.sqrt(sum(a ** 2 for a in u))
    # 3. norm_v = math.sqrt(sum(b ** 2 for b in v))
    # 4. Si norm_u == 0 o norm_v == 0 -> retorna 0.0
    # 5. Retorna dot_prod / (norm_u * norm_v)
    pass


# ==============================================================================
# RETO 4: Recuperación de los Top-K Fragmentos Más Relevantes
# ==============================================================================
def recuperar_top_k(query_vec, chunks, chunk_vecs, top_k=2):
    """
    Calcula la similitud entre query_vec y cada vector en chunk_vecs,
    retornando los top_k fragmentos de texto ordenados por similitud descendente.
    
    Argumentos:
        query_vec (list of float): Vector de la pregunta.
        chunks (list of str): Lista de textos de los fragmentos.
        chunk_vecs (list of list of float): Lista de vectores correspondientes a cada fragmento.
        top_k (int): Cantidad máxima de resultados a retornar.
    
    Retorna:
        list of tuple: [(chunk_texto, puntaje_similitud), ...] ordenados de mayor a menor.
    """
    # TODO:
    # 1. Itera por cada chunk y su vector correspondiente.
    # 2. Calcula sim = similitud_coseno(query_vec, vector)
    # 3. Guarda la tupla (chunk, sim)
    # 4. Ordena descendentemente por la similitud y retorna los primeros top_k.
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

    # Test Reto 1
    try:
        texto = "El aprendizaje automatico requiere datos y computo intensivo para entrenar redes."
        c = fragmentar_texto_con_solapamiento(texto, chunk_size=30, chunk_overlap=10)
        validar("RETO 5.1 - Segmentación con solapamiento",
                len(c) >= 3 and c[0].startswith("El aprendizaje") and c[1].startswith(c[0][-10:]),
                f"Error en chunking. Chunks obtenidos: {c}")
    except Exception as e:
        validar("RETO 5.1 - Segmentación con solapamiento", False, f"Error: {e}")

    # Test Reto 2
    try:
        vocab = ["redes", "neuronas", "datos", "modelo"]
        vec = generar_embedding_frecuencias("Las redes aprenden de los datos y más datos", vocab)
        validar("RETO 5.2 - Embedding de frecuencias de vocabulario",
                vec == [1.0, 0.0, 2.0, 0.0],
                f"Esperado [1.0, 0.0, 2.0, 0.0], obtenido {vec}")
    except Exception as e:
        validar("RETO 5.2 - Embedding de frecuencias de vocabulario", False, f"Error: {e}")

    # Test Reto 3
    try:
        s1 = similitud_coseno([1.0, 1.0], [1.0, 1.0])
        s2 = similitud_coseno([1.0, 0.0], [0.0, 1.0])
        validar("RETO 5.3 - Similitud coseno",
                math.isclose(s1, 1.0, abs_tol=1e-5) and math.isclose(s2, 0.0, abs_tol=1e-5),
                f"Error en similitudes: {s1}, {s2}")
    except Exception as e:
        validar("RETO 5.3 - Similitud coseno", False, f"Error: {e}")

    # Test Reto 4
    try:
        chunks_demo = ["Fragmento sobre cocina", "Fragmento sobre redes neuronales"]
        vecs_demo = [[0.0, 1.0], [1.0, 0.0]]
        query = [1.0, 0.0]
        recup = recuperar_top_k(query, chunks_demo, vecs_demo, top_k=1)
        validar("RETO 5.4 - Recuperación Top-K Relevantes",
                len(recup) == 1 and recup[0][0] == "Fragmento sobre redes neuronales",
                f"Esperado 'Fragmento sobre redes neuronales', obtenido: {recup}")
    except Exception as e:
        validar("RETO 5.4 - Recuperación Top-K Relevantes", False, f"Error: {e}")

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
