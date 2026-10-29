"""
EJERCICIO: Slicing e Indexación Avanzada en Listas y Tuplas
Módulo 4: Listas, Tuplas, Indexación y Slicing

Aprende a dominar cortes bidireccionales, saltos, inversiones
y extracción segura de extremos con slicing nativo.
"""

# ==============================================================================
# RETO 1: Extracción del Núcleo Central (Recorte de Bordes)
# ==============================================================================
def extraer_nucleo_central(lista_datos, margen_elementos=1):
    """
    Retorna una nueva lista que excluye los primeros 'margen_elementos'
    y los últimos 'margen_elementos' de 'lista_datos'.
    
    Argumentos:
        lista_datos (list): Lista con al menos 2 * margen_elementos elementos.
        margen_elementos (int): Cantidad de elementos a descartar de cada extremo.
        
    Retorna:
        list: Sublista recortada.
        
    Ejemplo:
        extraer_nucleo_central([10, 20, 30, 40, 50], margen_elementos=1)
        -> [20, 30, 40]
    """
    # TODO: Si margen_elementos <= 0, retorna lista_datos[:]
    # Si len(lista_datos) < 2 * margen_elementos, retorna []
    # De lo contrario, retorna lista_datos[margen_elementos : -margen_elementos]
    pass


# ==============================================================================
# RETO 2: Inversión con Muestreo por Saltos (Step)
# ==============================================================================
def invertir_con_muestreo(secuencia, paso=2):
    """
    Invierte el orden de la secuencia y luego selecciona elementos dando saltos de tamaño 'paso'.
    
    Argumentos:
        secuencia (list): Lista de entrada (ej: [0, 1, 2, 3, 4, 5])
        paso (int): Salto entre elementos (por defecto 2)
        
    Retorna:
        list: Lista invertida y muestreada.
        
    Ejemplo:
        invertir_con_muestreo([0, 1, 2, 3, 4, 5], paso=2)
        -> Invertida es [5, 4, 3, 2, 1, 0] -> muestreo cada 2: [5, 3, 1]
    """
    # TODO: Usa secuencia[::-1][::paso] o secuencia[::-paso]
    pass


# ==============================================================================
# RETO 3: Extracción Segura de Extremos
# ==============================================================================
def obtener_extremos(secuencia):
    """
    Obtiene el primer y el último elemento de cualquier secuencia indexable.
    Si la secuencia está vacía, debe retornar la tupla (None, None).
    
    Retorna:
        tuple: (primer_elemento, ultimo_elemento)
    """
    # TODO: Si not secuencia: retorna (None, None). De lo contrario, retorna (secuencia[0], secuencia[-1]).
    pass


# ==============================================================================
# RETO 4: Clonación Superficial Inmutable (Shallow Copy)
# ==============================================================================
def duplicar_sin_efectos_secundarios(lista_original, nuevo_elemento):
    """
    Crea una copia superficial de 'lista_original' usando slicing [:] (o .copy()),
    agrega 'nuevo_elemento' a la copia y retorna la copia.
    La 'lista_original' NO debe verse modificada.
    
    Retorna:
        list: Nueva lista con el elemento agregado.
    """
    # TODO:
    # 1. copia = lista_original[:]
    # 2. copia.append(nuevo_elemento)
    # 3. Retorna copia
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
        r1 = extraer_nucleo_central([1, 2, 3, 4, 5, 6], margen_elementos=2)
        validar("RETO 4.1 - Recorte de bordes con slicing",
                r1 == [3, 4],
                f"Esperado [3, 4], obtenido: {r1}")
    except Exception as e:
        validar("RETO 4.1 - Recorte de bordes con slicing", False, f"Error: {e}")

    # Test Reto 2
    try:
        r2 = invertir_con_muestreo([0, 1, 2, 3, 4, 5], paso=2)
        validar("RETO 4.2 - Inversión y saltos con paso negativo",
                r2 == [5, 3, 1],
                f"Esperado [5, 3, 1], obtenido: {r2}")
    except Exception as e:
        validar("RETO 4.2 - Inversión y saltos con paso negativo", False, f"Error: {e}")

    # Test Reto 3
    try:
        e1 = obtener_extremos(["inicio", "medio", "fin"])
        e2 = obtener_extremos([])
        validar("RETO 4.3 - Extracción de extremos segura",
                e1 == ("inicio", "fin") and e2 == (None, None),
                f"Fallo en extremos: e1={e1}, e2={e2}")
    except Exception as e:
        validar("RETO 4.3 - Extracción de extremos segura", False, f"Error: {e}")

    # Test Reto 4
    try:
        original = [10, 20]
        resultado = duplicar_sin_efectos_secundarios(original, 30)
        validar("RETO 4.4 - Clonación independiente con slicing [:]",
                resultado == [10, 20, 30] and original == [10, 20],
                f"Fallo en mutación: original alterada={original}, resultado={resultado}")
    except Exception as e:
        validar("RETO 4.4 - Clonación independiente con slicing [:]", False, f"Error: {e}")

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
