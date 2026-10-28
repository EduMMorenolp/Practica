# Contexto del Proyecto: Práctica y Desoxido de Programación (JavaScript)

## 🎯 Propósito
Este proyecto está diseñado para practicar y reaprender programación a mano, enfocado actualmente en **JavaScript**. Sigue un enfoque didáctico progresivo similar a **W3Schools**, donde cada tema combina:
1. **Teoría concisa y directa al grano**.
2. **Ejercicios prácticos** en archivos de código listos para escribir a mano y ejecutar.

---

## 📁 Estructura del Repositorio

```text
d:/Proyectos/Practice/
├── README.md                          # Guía y bienvenida para el usuario
├── AGENTS.md                          # Este archivo: contexto y pautas generales
├── index.html                         # Plataforma web interactiva local
├── styles.css                         # Estilos de la app interactiva
├── app.js                             # Lógica de runner interactivo y progreso
├── JavaScript/
│   ├── TEMARIO.md                     # Roadmap completo de JS (14 Módulos)
│   ├── Modulo 1 - Fundamentos y Sintaxis Basica/
│   │   ├── Modulo 1 - Fundamentos y Sintaxis Basica.md
│   │   └── ...
│   └── ...
│
├── NodeJS/
│   ├── TEMARIO.md                     # Roadmap completo de Node.js (15 Módulos)
│   ├── Modulo 1 - Globales y Entorno/
│   │   ├── Modulo 1 - Globales y Entorno.md
│   │   └── ...
│   └── ...
│
├── Express/
│   ├── TEMARIO.md                     # Roadmap completo de Express.js (10 Módulos)
│   ├── Modulo 1 - Creacion y Configuracion de App/
│   │   ├── Modulo 1 - Creacion y Configuracion de App.md
│   │   ├── 01_creacion_app_listen.js
│   │   └── 02_app_set_get_locals.js
│   └── ...
```

---

## 📐 Convenciones y Pautas de Trabajo

1. **Nomenclatura de Carpetas y Archivos**:
   - Cada unidad se organiza dentro de `JavaScript/Modulo X - Nombre Descriptivo/`.
   - El documento teórico principal de cada carpeta lleva el **mismo nombre del módulo**: `Modulo X - Nombre Descriptivo.md`.
   - Los ejercicios son archivos de código separados (ej. `01_tema.js`, `02_tema.js`), con consignas claras en comentarios `// TODO:` para que el usuario escriba la solución a mano.

2. **Estilo Pedagógico**:
   - Explicaciones claras, ejemplos mínimos ejecutables y sin sobrecarga innecesaria.
   - Enfoque "hands-on": menos teoría abstracta y más ejercicios prácticos guiados paso a paso.
   - Usar estándares modernos de JavaScript (ES6+), priorizando `const` y `let` sobre `var`, funciones flecha cuando corresponda, etc.

3. **Ejecución y Comprobación**:
   - Los scripts se pueden probar con Node.js (`node <archivo.js>`) o mediante el runner de la plataforma web.

4. **Suite de Validación Automática Obligatoria**:
   - Todo ejercicio práctico (`.js`) **DEBE** incluir al final una sección protegida con el encabezado exacto:
     ```javascript
     // ==========================================
     // 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA (no modificar)
     // ==========================================
     ```
   - **Propósito**: Evaluar cada reto de forma aislada e independiente mediante aserciones claras:
     - Mostrar `✔ RETO X.X ...` cuando la solución es correcta.
     - Mostrar `❌ RETO X.X ...` con una pista descriptiva del error puntual o indicando si la ruta/función aún no está implementada (en vez de lanzar un error genérico o romper toda la ejecución).
   - **Cierre Limpio y Resiliencia**:
     - En ejercicios con servidores (Express / Node `http` o `net`), levantar la prueba en puerto efímero (`port: 0`), ejecutar las peticiones mediante `fetch()` / cliente y **siempre cerrar el servidor** en el bloque `finally` (`server.close()`) para que el proceso termine con exit code `0`.
     - En ejercicios con operaciones asíncronas o streams, usar timeouts protectores para evitar bloqueos indefinidos si falta invocar callbacks o promesas.

