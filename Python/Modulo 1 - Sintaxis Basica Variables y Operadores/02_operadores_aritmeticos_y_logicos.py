"""
EJERCICIO: Operadores Aritméticos, Lógicos y de Identidad
Módulo 1: Sintaxis Básica, Variables, Tipos y Operadores

Domina las operaciones numéricas especializadas (//, %, **),
la lógica booleana en inglés (and, or, not) y las relaciones in / is.
"""

# ==============================================================================
# RETO 1: Descomposición de Tiempo (Horas, Minutos, Segundos)
# ==============================================================================
def descomponer_tiempo(total_segundos):
    """
    Dado un total de segundos enteros, descompone y retorna una tupla (horas, minutos, segundos)
    utilizando división entera (//) y módulo (%).
    
    Argumentos:
        total_segundos (int): Cantidad entera de segundos (ej: 3665).
        
    Retorna:
        tuple: (horas, minutos, segundos)
        
    Ejemplo:
        descomponer_tiempo(3665) -> (1, 1, 5)
    """
    # TODO:
    # 1. horas = total_segundos // 3600
    # 2. segundos_restantes = total_segundos % 3600
    # 3. minutos = segundos_restantes // 60
    # 4. segundos = segundos_restantes % 60
    # Retorna (horas, minutos, segundos)
    pass


# ==============================================================================
# RETO 2: Potencias y Aritmética Modular
# ==============================================================================
def calcular_potencia_modular(base, exponente, divisor):
    """
    Calcula la potencia (base elevada a exponente) y luego obtiene el residuo
    de dividir el resultado entre 'divisor'.
    
    Retorna:
        int: (base ** exponente) % divisor
    """
    # TODO: Realiza el cálculo con ** y % y retorna el entero resultante.
    pass


# ==============================================================================
# RETO 3: Lógica de Autorización de Seguridad
# ==============================================================================
def verificar_acceso(edad, tiene_credencial, es_admin, sistema_bloqueado):
    """
    Determina si un usuario puede ingresar al sistema bajo las siguientes reglas:
    1. Si 'sistema_bloqueado' es True, NINGÚN usuario puede ingresar (retorna False).
    2. Si 'es_admin' es True, puede ingresar sin importar la edad ni la credencial.
    3. Si es un usuario común, debe tener al menos 18 años (edad >= 18) Y poseer credencial activa.
    
    Retorna:
        bool: True si tiene acceso concedido, False si es denegado.
    """
    # TODO: Usa operadores not, and, or para resolver la regla.
    pass


# ==============================================================================
# RETO 4: Pertenencia e Identidad de Objetos
# ==============================================================================
def verificar_pertenencia_e_identidad(elemento, lista_elementos, obj1, obj2):
    """
    Evalúa dos condiciones independientes y las retorna en una tupla:
    1. Si 'elemento' está presente dentro de 'lista_elementos' (operador 'in').
    2. Si 'obj1' y 'obj2' apuntan exactamente al mismo objeto en memoria (operador 'is').
    
    Retorna:
        tuple: (esta_presente: bool, son_identicos: bool)
    """
    # TODO:
    # esta_presente = elemento in lista_elementos
    # son_identicos = obj1 is obj2
    # retorna (esta_presente, son_identicos)
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
        t = descomponer_tiempo(3665)
        validar("RETO 1.1 - Descomposición de tiempo con // y %",
                t == (1, 1, 5),
                f"Esperado (1, 1, 5), obtenido: {t}")
    except Exception as e:
        validar("RETO 1.1 - Descomposición de tiempo con // y %", False, f"Error: {e}")

    # Test Reto 2
    try:
        pot = calcular_potencia_modular(2, 8, 100)
        validar("RETO 1.2 - Potencia modular (** y %)",
                pot == 56,
                f"Esperado 56 (2^8 = 256, 256 % 100 = 56), obtenido: {pot}")
    except Exception as e:
        validar("RETO 1.2 - Potencia modular (** y %)", False, f"Error: {e}")

    # Test Reto 3
    try:
        acc_admin = verificar_acceso(15, False, True, False)
        acc_adulto_ok = verificar_acceso(25, True, False, False)
        acc_menor = verificar_acceso(17, True, False, False)
        acc_bloqueado = verificar_acceso(30, True, True, True)
        validar("RETO 1.3 - Lógica de acceso con and, or, not",
                acc_admin is True and acc_adulto_ok is True and acc_menor is False and acc_bloqueado is False,
                f"Fallo en autorización: admin={acc_admin}, adulto={acc_adulto_ok}, menor={acc_menor}, lock={acc_bloqueado}")
    except Exception as e:
        validar("RETO 1.3 - Lógica de acceso con and, or, not", False, f"Error: {e}")

    # Test Reto 4
    try:
        base = [1, 2, 3]
        clon = [1, 2, 3]
        alias = base
        p1, i1 = verificar_pertenencia_e_identidad(2, base, base, alias)
        p2, i2 = verificar_pertenencia_e_identidad(9, base, base, clon)
        validar("RETO 1.4 - Pertenencia (in) e Identidad (is)",
                p1 is True and i1 is True and p2 is False and i2 is False,
                f"Fallo en pertenencia/identidad: caso1=({p1},{i1}), caso2=({p2},{i2})")
    except Exception as e:
        validar("RETO 1.4 - Pertenencia (in) e Identidad (is)", False, f"Error: {e}")

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
