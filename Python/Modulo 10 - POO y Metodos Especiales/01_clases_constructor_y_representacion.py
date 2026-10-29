"""
EJERCICIO: Clases, Constructor y Métodos de Representación (__str__, __repr__, __len__)
Módulo 10: Programación Orientada a Objetos (POO) y Métodos Especiales

Aprende a estructurar clases, gestionar atributos de instancia,
y definir representaciones amigables y técnicas del objeto.
"""

# ==============================================================================
# RETO: Implementación de la Clase Libro
# ==============================================================================
class Libro:
    """
    Representa un libro en una biblioteca digital.
    
    Debe implementar:
    1. __init__(self, titulo, autor, paginas, precio):
       - Asigna los atributos de instancia self.titulo (str), self.autor (str),
         self.paginas (int) y self.precio (float).
         
    2. __str__(self):
       - Retorna una representación amigable para el usuario:
         f"'{self.titulo}' por {self.autor} ({self.paginas} págs.)"
         
    3. __repr__(self):
       - Retorna una representación técnica exacta para depuración:
         f"Libro(titulo='{self.titulo}', autor='{self.autor}', paginas={self.paginas}, precio={self.precio})"
         
    4. __len__(self):
       - Retorna la cantidad total de páginas del libro (self.paginas).
    """
    def __init__(self, titulo, autor, paginas, precio=0.0):
        # TODO: Asigna self.titulo, self.autor, self.paginas, self.precio
        pass

    def __str__(self):
        # TODO: Retorna f"'{self.titulo}' por {self.autor} ({self.paginas} págs.)"
        pass

    def __repr__(self):
        # TODO: Retorna f"Libro(titulo='{self.titulo}', autor='{self.autor}', paginas={self.paginas}, precio={self.precio})"
        pass

    def __len__(self):
        # TODO: Retorna self.paginas
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

    try:
        libro = Libro("1984", "George Orwell", 328, 15.5)

        # Test Reto 1
        validar("RETO 10.1 - Inicialización y atributos de instancia (__init__)",
                libro.titulo == "1984" and libro.autor == "George Orwell" and libro.paginas == 328 and libro.precio == 15.5,
                f"Atributos incorrectos: {libro.__dict__}")

        # Test Reto 2
        s = str(libro)
        validar("RETO 10.2 - Representación de usuario (__str__)",
                s == "'1984' por George Orwell (328 págs.)",
                f"Esperado \"'1984' por George Orwell (328 págs.)\", obtenido: '{s}'")

        # Test Reto 3
        r = repr(libro)
        validar("RETO 10.3 - Representación técnica de depuración (__repr__)",
                r == "Libro(titulo='1984', autor='George Orwell', paginas=328, precio=15.5)",
                f"Fallo en __repr__: '{r}'")

        # Test Reto 4
        longitud = len(libro)
        validar("RETO 10.4 - Longitud basada en páginas (__len__)",
                longitud == 328,
                f"Esperado 328 páginas, obtenido: {longitud}")

    except Exception as e:
        validar("Pruebas de Libro", False, f"Error durante las pruebas: {e}")

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
