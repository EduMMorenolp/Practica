"""
EJERCICIO: Tokenizador Byte-Pair Encoding (BPE) desde Cero
Módulo 2: Tokenización y Representación Textual (BPE y Embeddings)

El algoritmo BPE es el estándar de la industria (utilizado en GPT-2, GPT-3, GPT-4, LLaMA)
para descomponer texto libre en subpalabras y evitar problemas de OOV (Out of Vocabulary).
"""

from collections import defaultdict

# ==============================================================================
# RETO 1: Conteo de pares adyacentes de tokens
# ==============================================================================
def contar_pares_en_corpus(corpus_vocab):
    """
    Cuenta la frecuencia de cada par adyacente (bigrama de tokens).
    
    Argumentos:
        corpus_vocab (dict): Diccionario donde la llave es una tupla de tokens
                             y el valor es su frecuencia entera en el corpus.
                             Ej: {('h', 'u', 'g', '</w>'): 10, ('p', 'u', 'g', '</w>'): 5}
    
    Retorna:
        dict: Diccionario {(token_a, token_b): frecuencia_total}
    """
    # TODO: Inicializa un diccionario o defaultdict(int)
    # Recorre cada (palabra_tupla, freq) en corpus_vocab.items()
    # Para cada posición i desde 0 hasta len(palabra_tupla) - 2:
    #   par = (palabra_tupla[i], palabra_tupla[i + 1])
    #   acumula freq en el contador del par
    pass


# ==============================================================================
# RETO 2: Fusión de un par de tokens en una palabra
# ==============================================================================
def fusionar_par_en_palabra(par_objetivo, palabra_tupla):
    """
    Reemplaza todas las apariciones consecutivas de par_objetivo por su concatenación.
    
    Argumentos:
        par_objetivo (tuple): Tupla de dos strings (p1, p2) a fusionar.
        palabra_tupla (tuple): Tupla con los tokens actuales de la palabra.
    
    Retorna:
        tuple: Nueva tupla con el par fusionado.
    
    Ejemplo:
        fusionar_par_en_palabra(('u', 'g'), ('h', 'u', 'g', '</w>'))
        -> ('h', 'ug', '</w>')
    """
    # TODO: Recorre palabra_tupla con un índice i
    # Si palabra_tupla[i] == par_objetivo[0] y palabra_tupla[i+1] == par_objetivo[1]:
    #     agrega p1 + p2 a la lista de salida y avanza i en 2
    # Sino:
    #     agrega palabra_tupla[i] y avanza i en 1
    # Retorna tuple(lista_de_salida)
    pass


# ==============================================================================
# RETO 3: Bucle de entrenamiento de BPE
# ==============================================================================
def entrenar_bpe(corpus_inicial, num_merges):
    """
    Ejecuta el ciclo de entrenamiento de BPE para aprender un conjunto de reglas de fusión.
    
    Argumentos:
        corpus_inicial (dict): {tupla_de_caracteres: frecuencia}
        num_merges (int): Cantidad máxima de fusiones a realizar.
    
    Retorna:
        tuple: (corpus_final, lista_de_merges)
               donde lista_de_merges es una lista de tuplas con los pares fusionados en orden.
    """
    # TODO:
    # corpus = dict(corpus_inicial)
    # lista_merges = []
    # Por cada paso en range(num_merges):
    #   1. Cuenta pares con contar_pares_en_corpus(corpus)
    #   2. Si no hay pares, rompe el bucle.
    #   3. Encuentra el par con mayor frecuencia (si hay empate, cualquiera es válido).
    #   4. Actualiza cada palabra del corpus aplicando fusionar_par_en_palabra(mejor_par, palabra).
    #   5. Agrega mejor_par a lista_merges.
    # Retorna (corpus, lista_merges)
    pass


# ==============================================================================
# RETO 4: Tokenizar una nueva palabra usando las reglas aprendidas
# ==============================================================================
def tokenizar_palabra_con_bpe(palabra_str, reglas_merges):
    """
    Toma una palabra cruda, la divide en caracteres + '</w>',
    y aplica en orden las reglas aprendidas para obtener los tokens finales.
    
    Argumentos:
        palabra_str (str): Palabra a tokenizar (ej: "hugs")
        reglas_merges (list): Lista de tuplas ordenadas por aprendizaje.
    
    Retorna:
        list: Lista de tokens finales de subpalabras.
    """
    # TODO:
    # 1. Convierte palabra_str en tupla de caracteres y añade '</w>' al final.
    #    Ej: "hug" -> ('h', 'u', 'g', '</w>')
    # 2. Itera sobre cada par en reglas_merges:
    #    Aplica fusionar_par_en_palabra(par, tokens_actuales)
    # 3. Retorna list(tokens_actuales)
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
        c1 = {('h', 'u', 'g', '</w>'): 10, ('p', 'u', 'g', '</w>'): 5}
        pares = contar_pares_en_corpus(c1)
        validar("RETO 2.1 - Conteo de pares adyacentes",
                pares.get(('u', 'g')) == 15 and pares.get(('g', '</w>')) == 15 and pares.get(('h', 'u')) == 10,
                f"Resultado inesperado en conteo: {pares}")
    except Exception as e:
        validar("RETO 2.1 - Conteo de pares adyacentes", False, f"Error: {e}")

    # Test Reto 2
    try:
        t1 = ('h', 'u', 'g', '</w>')
        res2 = fusionar_par_en_palabra(('u', 'g'), t1)
        validar("RETO 2.2 - Fusión de par en palabra",
                res2 == ('h', 'ug', '</w>'),
                f"Esperado ('h', 'ug', '</w>'), obtenido {res2}")
    except Exception as e:
        validar("RETO 2.2 - Fusión de par en palabra", False, f"Error: {e}")

    # Test Reto 3
    try:
        corpus = {
            ('l', 'o', 'w', '</w>'): 5,
            ('l', 'o', 'w', 'e', 'r', '</w>'): 2,
            ('n', 'e', 'w', 'e', 's', 't', '</w>'): 6,
            ('w', 'i', 'd', 'e', 's', 't', '</w>'): 3
        }
        corpus_f, merges = entrenar_bpe(corpus, 4)
        validar("RETO 2.3 - Bucle de entrenamiento BPE",
                len(merges) == 4 and ('e', 's') in merges,
                f"Esperado 4 fusiones aprendidas con ('e', 's') entre ellas. Obtenido: {merges}")
    except Exception as e:
        validar("RETO 2.3 - Bucle de entrenamiento BPE", False, f"Error: {e}")

    # Test Reto 4
    try:
        reglas = [('e', 's'), ('es', 't'), ('l', 'o'), ('lo', 'w')]
        toks = tokenizar_palabra_con_bpe("lowest", reglas)
        validar("RETO 2.4 - Tokenización con BPE",
                toks == ['low', 'est', '</w>'],
                f"Esperado ['low', 'est', '</w>'], obtenido {toks}")
    except Exception as e:
        validar("RETO 2.4 - Tokenización con BPE", False, f"Error: {e}")

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
