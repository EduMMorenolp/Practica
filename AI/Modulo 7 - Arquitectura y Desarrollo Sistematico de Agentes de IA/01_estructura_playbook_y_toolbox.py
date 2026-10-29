# ==========================================
# RETO: ARQUITECTURA PLAYBOOK EN 3 CAPAS
# Para ejecutar: python "AI/Modulo 4 - Arquitectura y Desarrollo Sistematico de Agentes de IA/01_estructura_playbook_y_toolbox.py"
# ==========================================

import os
import json
import shutil

print("=== RETO 1: CONSTRUCCIÓN SISTEMÁTICA DE UN PLAYBOOK EN 3 CAPAS ===")

# ------------------------------------------
# 1.1 Fábrica de Playbooks Estructurados
# ------------------------------------------
# TODO: Implementa la función crear_playbook(base_dir, task_name, process_markdown, templates_dict):
#   1. Crea la estructura de carpetas:
#      {base_dir}/{task_name}/
#      ├── PROCESS.md
#      ├── toolbox/
#      │   └── templates/
#      └── proof/
#          └── CHECKS.md
#   2. Escribe process_markdown dentro de PROCESS.md.
#   3. Para cada (nombre_archivo, contenido) en templates_dict.items():
#      escribe el archivo dentro de toolbox/templates/{nombre_archivo}.
#   4. Crea un archivo proof/CHECKS.md inicial con una lista de verificación básica.
# Retorna el path absoluto a la carpeta del playbook creado.

def crear_playbook(base_dir, task_name, process_markdown, templates_dict):
    # TODO: Implementa la creación de directorios y archivos de las 3 capas
    pass


# ==========================================
# 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA (no modificar)
# ==========================================
def validar(nombre, condicion, pista):
    try:
        if condicion():
            print(f"✔ {nombre}")
            return True
        print(f"❌ {nombre}: {pista}")
    except Exception as err:
        print(f"❌ {nombre}: Error -> {err}")
    return False

if __name__ == "__main__":
    print("\n--- Comprobación de Resultados ---")

    test_dir = os.path.join(os.path.dirname(__file__), "_test_playbook_tmp")
    if os.path.exists(test_dir):
        shutil.rmtree(test_dir)

    task = "generador_reportes_semanales"
    proc_text = "# Proceso de Reportes Semanales\n1. Recolectar métricas\n2. Aplicar plantilla."
    temps = {
        "reporte.json": json.dumps({"titulo": "", "metricas": []}, indent=2)
    }

    playbook_path = None
    try:
        playbook_path = crear_playbook(test_dir, task, proc_text, temps)

        # Test 1: Existencia de Capa 1 (Process)
        def test_capa_process():
            p_file = os.path.join(playbook_path, "PROCESS.md")
            return os.path.isfile(p_file) and "Proceso de Reportes" in open(p_file, "r", encoding="utf-8").read()
        validar("RETO 1.1 (Capa 1: PROCESS.md)", test_capa_process, "Debe existir {task_name}/PROCESS.md con las reglas de negocio")

        # Test 2: Existencia de Capa 2 (Toolbox / Templates)
        def test_capa_toolbox():
            t_file = os.path.join(playbook_path, "toolbox", "templates", "reporte.json")
            return os.path.isfile(t_file) and "metricas" in open(t_file, "r", encoding="utf-8").read()
        validar("RETO 1.1 (Capa 2: toolbox/templates/)", test_capa_toolbox, "Debe existir {task_name}/toolbox/templates/ con los archivos del diccionario")

        # Test 3: Existencia de Capa 3 (Proof / CHECKS.md)
        def test_capa_proof():
            c_file = os.path.join(playbook_path, "proof", "CHECKS.md")
            return os.path.isfile(c_file)
        validar("RETO 1.1 (Capa 3: proof/CHECKS.md)", test_capa_proof, "Debe existir {task_name}/proof/CHECKS.md para evidencia de validación externa")

    finally:
        # Limpieza de archivos de prueba
        if os.path.exists(test_dir):
            shutil.rmtree(test_dir)

    print("\n--- Fin de la comprobación ---\n")
