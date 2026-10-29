"""
EJERCICIO: Condicionales y Bucles Controlados (break, continue, else)
Módulo 7: Estructuras de Control e Iteración Avanzada

Aprende a controlar el flujo de ejecución, aplicar operadores ternarios
y utilizar la cláusula única for-else para búsquedas sin flags.
"""

# ==============================================================================
# RETO 1: Clasificación con Operador Ternario y Condicionales
# ==============================================================================
def determinar_tarifa(edad, es_estudiante):
    """
    Determina el precio del boleto según las siguientes reglas:
    - Si edad < 5: 0.0 (Gratis)
    - Si edad >= 65: 5.0 (Tercera edad)
    - Para los demás: 7.5 si 'es_estudiante' es True, de lo contrario 12.0 (Tarifa normal).
    
    Retorna:
        float: Precio exacto del boleto.
    """
    # TODO: Implementa la lógica con if/elif/else y operador ternario.
    pass


# ==============================================================================
# RETO 2: Acumulador con continue y break
# ==============================================================================
def acumular_positivos_con_tope(lista_numeros, tope_maximo):
    """
    Recorre 'lista_numeros':
    - Si el número es negativo (< 0), usa 'continue' para ignorarlo.
    - Si el número es positivo o cero, lo suma al total acumulado.
    - Si el total acumulado supera o iguala 'tope_maximo', interrumpe el bucle con 'break'.
    
    Retorna:
        float o int: Total acumulado al finalizar o al romperse el bucle.
    """
    # TODO: Implementa el acumulador utilizando continue y break.
    pass


# ==============================================
# RETO 3: Búsqueda con Cláusula for-else
# ==============================================
def buscar_primera_coincidencia(coleccion_strings, objetivo_str):
    """
    Busca 'objetivo_str' dentro de 'coleccion_strings':
    - Si lo encuentra, retorna f"ENCONTRADO_EN_INDICE_{i}" y rompe con break.
    - En el bloque 'else:' del bucle (que corre solo si nunca hubo break),
      retorna "NO_ENCONTRADO".
      
    Retorna:
        str: Resultado de la búsqueda.
    """
    # TODO: Usa un bucle for con enumerate() y la cláusula else al final.
    pass


# ==============================================================================
# RETO 4: Bucle While de Convergencia
# ==============================================================================
def contar_pasos_convergencia(valor_inicial, divisor=2.0, umbral=1.0):
    """
    Utiliza un bucle 'while' para dividir 'valor_inicial' sucesivamente entre 'divisor'
    mientras el valor sea estrictamente mayor que 'umbral'.
    Cuenta y retorna la cantidad total de divisiones realizadas.
    
    Ejemplo:
        contar_pasos_convergencia(10.0, divisor=2.0, umbral=1.0)
        - Paso 1: 10 / 2 = 5.0
        - Paso 2: 5.0 / 2 = 2.5
        - Paso 3: 2.5 / 2 = 1.25
        - Paso 4: 1.25 / 2 = 0.625 (ya es <= 1.0, se detiene)
        Retorna 4.
    """
    # TODO: Implementa el contador de pasos con while.
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
        t_bebe = determinar_tarifa(3, False)
        t_anciano = determinar_tarifa(70, False)
        t_est = determinar_tarifa(22, True)
        t_normal = determinar_tarifa(22, False)
        validar("RETO 7.1 - Clasificación de tarifa",
                t_bebe == 0.0 and t_anciano == 5.0 and t_est == 7.5 and t_normal == 12.0,
                f"Fallo en tarifas: bebe={t_bebe}, anciano={t_anciano}, est={t_est}, normal={t_normal}")
    except Exception as e:
        validar("RETO 7.1 - Clasificación de tarifa", False, f"Error: {e}")

    # Test Reto 2
    try:
        nums = [10, -5, 20, -2, 30, 40]
        acc = acumular_positivos_con_tope(nums, tope_maximo=50)
        # Suma: 10 + 20 = 30; luego 30 + 30 = 60 >= 50 -> break
        validar("RETO 7.2 - Acumulador con continue y break",
                acc == 60,
                f"Esperado 60, obtenido: {acc}")
    except Exception as e:
        validar("RETO 7.2 - Acumulador con continue y break", False, f"Error: {e}")

    # Test Reto 3
    try:
        items = ["alpha", "beta", "gamma"]
        b1 = buscar_primera_coincidencia(items, "beta")
        b2 = buscar_primera_coincidencia(items, "omega")
        validar("RETO 7.3 - Búsqueda con cláusula for-else",
                b1 == "ENCONTRADO_EN_INDICE_1" and b2 == "NO_ENCONTRADO",
                f"Fallo en for-else: b1={b1}, b2={b2}")
    except Exception as e:
        validar("RETO 7.3 - Búsqueda con cláusula for-else", False, f"Error: {e}")

    # Test Reto 4
    try:
        pasos = contar_pasos_convergencia(10.0, divisor=2.0, umbral=1.0)
        validar("RETO 7.4 - Bucle while de convergencia",
                pasos == 4,
                f"Esperado 4 pasos, obtenido: {pasos}")
    except Exception as e:
        validar("RETO 7.4 - Bucle while de convergencia", False, f"Error: {e}")

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
