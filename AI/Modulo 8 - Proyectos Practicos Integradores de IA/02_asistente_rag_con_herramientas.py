"""
PROYECTO INTEGRADOR 2: Asistente Autónomo con RAG y Herramientas (Agentic AI)
Módulo 8: Proyectos Prácticos Integradores de IA

Construcción de un agente autónomo integral capaz de consultar una base
de conocimiento documental (RAG) o ejecutar herramientas matemáticas/APIs
según la naturaleza de la petición del usuario.
"""

import math

def similitud_coseno(u, v):
    dot = sum(a * b for a, b in zip(u, v))
    nu = math.sqrt(sum(a ** 2 for a in u))
    nv = math.sqrt(sum(b ** 2 for b in v))
    if nu == 0 or nv == 0:
        return 0.0
    return dot / (nu * nv)

# ==============================================================================
# RETO 1: Componente de Memoria Semántica (Vector Store RAG)
# ==============================================================================
class BaseVectorialRAG:
    """
    Gestiona el almacenamiento y búsqueda semántica de fragmentos documentales.
    """
    def __init__(self, embed_fn):
        self.embed_fn = embed_fn
        self.documentos = []
        self.vectores = []

    def indexar_documentos(self, lista_textos):
        """Calcula el vector de cada texto y los almacena."""
        # TODO: Para cada texto en lista_textos:
        # calcula vec = self.embed_fn(texto),
        # agrega texto a self.documentos y vec a self.vectores.
        pass

    def recuperar_mas_relevante(self, consulta_str):
        """
        Retorna el documento con mayor similitud coseno a la consulta.
        Si la base está vacía, retorna None.
        """
        # TODO: Calcula q_vec = self.embed_fn(consulta_str)
        # Calcula la similitud con cada vector y retorna el texto del documento con mayor puntaje.
        pass


# ==============================================================================
# RETO 2: Caja de Herramientas del Agente (Toolbox)
# ==============================================================================
class CajaHerramientas:
    """
    Almacena funciones ejecutables y permite su invocación por nombre.
    """
    def __init__(self):
        self._herramientas = {}

    def registrar_herramienta(self, nombre, funcion):
        """Registra una función bajo un nombre identificador."""
        # TODO: self._herramientas[nombre] = funcion
        pass

    def ejecutar_herramienta(self, nombre, kwargs):
        """Invoca la función con los argumentos provistos."""
        # TODO: Retorna self._herramientas[nombre](**kwargs)
        pass


# ==============================================================================
# RETO 3: Orquestador de Decisiones del Agente
# ==============================================================================
class AgenteAutonomo:
    """
    Agente que analiza la intención del usuario y decide si:
    1. Ejecutar una herramienta de cálculo ("calcular").
    2. Recuperar información documental mediante su base RAG ("consultar").
    3. Responder con su conocimiento base.
    """
    def __init__(self, base_rag, caja_herramientas):
        self.rag = base_rag
        self.tools = caja_herramientas

    def resolver_consulta(self, mensaje_usuario):
        """
        Analiza el mensaje:
        - Si contiene palabras clave de cálculo como 'calcular' o 'sumar' o 'multiplicar':
          extrae los números (o usa la herramienta 'calcular') y retorna la respuesta.
        - Si es una pregunta informativa sobre conocimiento o políticas:
          invoca self.rag.recuperar_mas_relevante() y genera la respuesta fundamentada.
          
        Retorna:
            dict con {'tipo_accion': 'herramienta'|'rag', 'resultado': str}
        """
        # TODO:
        # msg = mensaje_usuario.lower()
        # Si 'calcular' in msg o 'multiplicar' in msg:
        #     # Extrae los números y ejecuta la herramienta
        #     res = self.tools.ejecutar_herramienta('calcular', {'operacion': msg})
        #     return {'tipo_accion': 'herramienta', 'resultado': f"Resultado del cálculo: {res}"}
        # Sino:
        #     doc = self.rag.recuperar_mas_relevante(mensaje_usuario)
        #     return {'tipo_accion': 'rag', 'resultado': f"Según la documentación: {doc}"}
        pass


# ==============================================================================
# RETO 4: Capa de Prueba y Verificación (Proof Layer)
# ==============================================================================
def verificar_salida_agente(respuesta_dict, consulta_esperada):
    """
    Valida que la respuesta generada por el agente cumpla con los criterios de éxito:
    1. Si la acción fue 'herramienta', el resultado debe contener un valor numérico.
    2. Si la acción fue 'rag', el resultado debe contener la mención documental esperada.
    
    Retorna:
        bool: True si la respuesta es válida y contrastable.
    """
    # TODO:
    # 1. Si respuesta_dict['tipo_accion'] == 'herramienta':
    #    valida que algún caracter en respuesta_dict['resultado'] sea un dígito numérico.
    # 2. Si respuesta_dict['tipo_accion'] == 'rag':
    #    valida que respuesta_dict['resultado'].startswith("Según la documentación:")
    # Retorna True si se cumplen las condiciones, False en caso contrario.
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

    def mock_embed(texto):
        t = texto.lower()
        return [float("sla" in t or "soporte" in t), float("reembolso" in t)]

    # Test Reto 1
    base_rag = BaseVectorialRAG(mock_embed)
    try:
        base_rag.indexar_documentos([
            "El SLA de soporte es de 4 horas hábiles.",
            "Los reembolsos se procesan en un plazo de 10 días."
        ])
        doc = base_rag.recuperar_mas_relevante("¿Cuál es el SLA de soporte?")
        validar("RETO 8.1 - Base Vectorial RAG",
                doc == "El SLA de soporte es de 4 horas hábiles.",
                f"Recuperación incorrecta: {doc}")
    except Exception as e:
        validar("RETO 8.1 - Base Vectorial RAG", False, f"Error: {e}")

    # Test Reto 2
    tools = CajaHerramientas()
    try:
        def calc_mock(operacion):
            return 42
        tools.registrar_herramienta("calcular", calc_mock)
        r_calc = tools.ejecutar_herramienta("calcular", {"operacion": "multiplicar 6 * 7"})
        validar("RETO 8.2 - Caja de Herramientas",
                r_calc == 42,
                f"Esperado 42, obtenido: {r_calc}")
    except Exception as e:
        validar("RETO 8.2 - Caja de Herramientas", False, f"Error: {e}")

    # Test Reto 3
    agente = AgenteAutonomo(base_rag, tools)
    try:
        res_rag = agente.resolver_consulta("¿Cuál es el SLA de soporte?")
        res_tool = agente.resolver_consulta("Por favor calcular el total")
        validar("RETO 8.3 - Orquestador de Decisiones del Agente",
                res_rag.get("tipo_accion") == "rag" and res_tool.get("tipo_accion") == "herramienta",
                f"Decisión errónea: rag={res_rag}, tool={res_tool}")
    except Exception as e:
        validar("RETO 8.3 - Orquestador de Decisiones del Agente", False, f"Error: {e}")

    # Test Reto 4
    try:
        v1 = verificar_salida_agente(res_rag, "¿Cuál es el SLA de soporte?")
        v2 = verificar_salida_agente(res_tool, "Por favor calcular el total")
        validar("RETO 8.4 - Capa de Prueba y Verificación (Proof Layer)",
                v1 is True and v2 is True,
                f"Fallo en validación de salidas: v1={v1}, v2={v2}")
    except Exception as e:
        validar("RETO 8.4 - Capa de Prueba y Verificación (Proof Layer)", False, f"Error: {e}")

    print(f"\nResultado final: {pasadas}/{total} retos superados.")

if __name__ == "__main__":
    _ejecutar_pruebas()
