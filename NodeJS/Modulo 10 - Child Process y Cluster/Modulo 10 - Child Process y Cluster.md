# 📖 Módulo 10: Procesos Hijos y Paralelismo (Child Process & Cluster)

Permite aprovechar procesadores multinúcleo ejecutando procesos del sistema o bifurcando workers de Node.

---

## 1. Módulo Child Process
- `child_process.exec(comando, callback)`: Ejecuta un comando en un shell y captura el búfer completo de salida.
- `child_process.spawn(comando, args)`: Ideal para procesos de larga duración con salida mediante streams.
- `child_process.fork(moduloPath)`: Crea un nuevo proceso Node.js con un canal de comunicación IPC (`process.send`).

---

## 2. Módulo Cluster
- Permite crear múltiples instancias de un servidor web compartiendo el mismo puerto de escucha.

---

## 🛠️ Ejercicios Prácticos del Módulo (1 a 1 por tema)

1. [01_child_process_exec_spawn.js](./01_child_process_exec_spawn.js):
   - **1.1** Ejecutar un comando simple con `exec`.

2. [02_child_process_fork.js](./02_child_process_fork.js):
   - **2.1** Comunicación IPC entre procesos.
