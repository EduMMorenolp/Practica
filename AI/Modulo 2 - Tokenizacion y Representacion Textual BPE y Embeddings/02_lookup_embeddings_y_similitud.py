"""
EJERCICIO: Matriz de Embeddings, Lookup y Similitud Coseno
Módulo 2: Tokenización y Representación Textual (BPE y Embeddings)

Los embeddings mapean IDs discretos a vectores continuos en R^d.
La orientación de estos vectores captura analogías semánticas y proximidad conceptual.
"""

import math

# ==============================================================================
# RETO 1: Lookup de Embeddings
# ==============================================================================
def lookup_embeddings(token_ids, matriz_embeddings):
    """
    Dada una lista de IDs enteros de tokens y una matriz de embeddings (E in R^{V x d}),
    extrae y retorna la lista de vectores correspondientes a cada token.
    
    Argumentos:
        token_ids (list of int): Lista de IDs [i_1, i_2, ..., i_T]
        matriz_embeddings (list of list of float): Matriz de tamaño V x d
    
    Retorna:
        list of list of float: Tensores de embeddings con forma T x d
    """
    # TODO: Recorre token_ids y extrae matriz_embeddings[idx] para cada idx en token_ids.
    pass


# ==============================================================================
# RETO 2: Norma Euclidiana (L2) de un Vector
# ==============================================================================
def norma_l2(vector):
    """
    Calcula la norma euclidiana ||v||_2 = sqrt(sum(v_i^2)).
    
    Argumentos:
        vector (list of float): Vector numérico unidimensional.
    
    Retorna:
        float: Longitud o magnitud del vector.
    """
    # TODO: Suma los cuadrados de los elementos y retorna la raíz cuadrada (math.sqrt).
    pass


# ==============================================================================
# RETO 3: Similitud Coseno entre dos Vectores
# ==============================================================================
def similitud_coseno(u, v):
    """
    Calcula el coseno del ángulo entre dos vectores:
        cos(theta) = (u . v) / (||u||_2 * ||v||_2)
    
    Argumentos:
        u (list of float): Primer vector
        v (list of float): Segundo vector
    
    Retorna:
        float: Valor en el rango [-1.0, 1.0]. Si alguna norma es 0, retorna 0.0.
    """
    # TODO:
    # 1. Calcula el producto punto sum(a * b for a, b in zip(u, v))
    # 2. Calcula las normas de u y v usando norma_l2
    # 3. Si norm_u == 0 o norm_v == 0, retorna 0.0
    # 4. Retorna dot_prod / (norm_u * norm_v)
    pass


# ==============================================================================
# RETO 4: Búsqueda de Tokens Más Cercanos (Top-K)
# ==============================================================================
def buscar_tokens_cercanos(vector_consulta, matriz_embeddings, top_k=2):
    """
    Busca los índices de los tokens más similares a un vector de consulta.
    
    Argumentos:
        vector_consulta (list of float): Vector d-dimensional
        matriz_embeddings (list of list of float): Vocabulario de embeddings (V x d)
        top_k (int): Cantidad de candidatos más cercanos a retornar
    
    Retorna:
        list of tuple: [(indice, similitud), ...] ordenados de mayor a menor similitud.
    """
    # TODO:
    # 1. Por cada índice i y vector v en enumerate(matriz_embeddings):
    #    calcula sim = similitud_coseno(vector_consulta, v)
    #    guarda la tupla (i, sim)
    # 2. Ordena la lista de mayor a menor según la similitud.
    # 3. Retorna los primeros top_k elementos.
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

    matriz = [
        [1.0, 0.0, 0.0],  # 0: "rey"
        [0.9, 0.1, 0.0],  # 1: "reina"
        [0.0, 1.0, 0.0],  # 2: "manzana"
        [0.0, 0.8, 0.2]   # 3: "pera"
    ]

    # Test Reto 1
    try:
        res1 = lookup_embeddings([0, 2], matriz)
        validar("RETO 2.1 - Lookup de Embeddings",
                res1 == [[1.0, 0.0, 0.0], [0.0, 1.0, 0.0]],
                f"Esperado [[1.0, 0.0, 0.0], [0.0, 1.0, 0.0]], obtenido {res1}")
    except Exception as e:
        validar("RETO 2.1 - Lookup de Embeddings", False, f"Error: {e}")

    # Test Reto 2
    try:
        n = norma_l2([3.0, 4.0])
        validar("RETO 2.2 - Norma Euclidiana L2",
                math.isclose(n, 5.0, abs_tol=1e-5),
                f"Esperado 5.0, obtenido {n}")
    except Exception as e:
        validar("RETO 2.2 - Norma Euclidiana L2", False, f"Error: {e}")

    # Test Reto 3
    try:
        sim_colineal = similitud_coseno([2.0, 0.0], [5.0, 0.0])
        sim_ortogonal = similitud_coseno([1.0, 0.0], [0.0, 1.0])
        validar("RETO 2.3 - Similitud Coseno",
                math.isclose(sim_colineal, 1.0, abs_tol=1e-5) and math.isclose(sim_ortogonal, 0.0, abs_tol=1e-5),
                f"Fallo en similitudes: colineal={sim_colineal}, ortogonal={sim_ortogonal}")
    except Exception as e:
        validar("RETO 2.3 - Similitud Coseno", False, f"Error: {e}")

    # Test Reto 4
    try:
        top = buscar_tokens_cercanos([0.95, 0.05, 0.0], matriz, top_k=2)
        indices_top = [idx for idx, _ in top]
        validar("RETO 2.4 - Búsqueda Top-K Vecinos Cercanos",
                indices_top == [0, 1],
                f"Esperado índices [0, 1], obtenido {indices_top}")
    except Exception as e:
        validar("RETO 2.4 - Búsqueda Top-K Vecinos Cercanos", False, f"Error: {e}")

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
