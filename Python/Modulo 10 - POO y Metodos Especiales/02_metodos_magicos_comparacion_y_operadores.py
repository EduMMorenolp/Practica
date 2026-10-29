"""
EJERCICIO: Métodos Especiales de Comparación, Operadores y Llamadas (__eq__, __lt__, __add__, __call__)
Módulo 10: Programación Orientada a Objetos (POO) y Métodos Especiales

Aprende a sobrecargar operadores matemáticos, habilitar ordenamiento
y hacer que los objetos sean invocables como funciones (__call__).
"""

# ==============================================================================
# RETO: Implementación de la Clase Vector2D
# ==============================================================================
class Vector2D:
    """
    Representa un vector bidimensional en un plano cartesiano (x, y).
    
    Debe implementar:
    1. __init__(self, x, y):
       - Asigna self.x y self.y (flotantes o enteros).
       
    2. __eq__(self, other):
       - Retorna True si 'other' es instancia de Vector2D y self.x == other.x y self.y == other.y.
       - Si 'other' no es Vector2D, retorna False.
       
    3. __lt__(self, other):
       - Compara la magnitud al cuadrado de ambos vectores:
         (self.x**2 + self.y**2) < (other.x**2 + other.y**2).
         
    4. __add__(self, other):
       - Suma vectorial: retorna un NUEVO Vector2D(self.x + other.x, self.y + other.y).
       
    5. __call__(self, escalar):
       - Multiplicación por escalar: retorna un NUEVO Vector2D(self.x * escalar, self.y * escalar).
    """
    def __init__(self, x, y):
        # TODO: self.x = x; self.y = y
        pass

    def __eq__(self, other):
        # TODO: Implementa __eq__
        pass

    def __lt__(self, other):
        # TODO: Implementa __lt__
        pass

    def __add__(self, other):
        # TODO: Implementa __add__
        pass

    def __call__(self, escalar):
        # TODO: Implementa __call__
        pass

    def __repr__(self):
        return f"Vector2D({self.x}, {self.y})"


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

    try:
        v1 = Vector2D(3, 4)   # Magnitud al cuadrado = 9 + 16 = 25
        v2 = Vector2D(1, 1)   # Magnitud al cuadrado = 1 + 1 = 2
        v3 = Vector2D(3, 4)

        # Test Reto 1
        validar("RETO 10.1 - Sobrecarga de igualdad (__eq__)",
                v1 == v3 and v1 != v2 and (v1 == "no_vector") is False,
                f"Fallo en igualdad: v1==v3: {v1==v3}, v1==v2: {v1==v2}")

        # Test Reto 2
        validar("RETO 10.2 - Comparación de orden (__lt__)",
                v2 < v1 and not (v1 < v2),
                f"Fallo en comparación menor que: v2 < v1={v2 < v1}")

        # Test Reto 3
        v_sum = v1 + v2
        validar("RETO 10.3 - Sobrecarga de operador suma (__add__)",
                v_sum.x == 4 and v_sum.y == 5 and isinstance(v_sum, Vector2D),
                f"Esperado Vector2D(4, 5), obtenido: {v_sum}")

        # Test Reto 4
        v_scaled = v1(2)  # Invocación como función __call__
        validar("RETO 10.4 - Objeto llamable (__call__)",
                v_scaled.x == 6 and v_scaled.y == 8 and isinstance(v_scaled, Vector2D),
                f"Esperado Vector2D(6, 8), obtenido: {v_scaled}")

    except Exception as e:
        validar("Pruebas de Vector2D", False, f"Error durante las pruebas: {e}")

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
