// Estado global de la aplicación
let projectCategories = [];
let selectedCategoryName = "JavaScript";
// Almacena qué ejercicios están completados (persistente en localStorage)
let completedExercises = new Set(JSON.parse(localStorage.getItem("practice_completed_files") || "[]"));

// Cargar estructura desde el servidor al iniciar
async function loadStructure() {
  try {
    const res = await fetch('/api/structure');
    if (!res.ok) throw new Error('No se pudo conectar con el servidor de archivos.');
    
    projectCategories = await res.json();
    
    if (projectCategories.length > 0) {
      // Si la categoría seleccionada no existe, tomar la primera
      if (!projectCategories.some(c => c.name === selectedCategoryName)) {
        selectedCategoryName = projectCategories[0].name;
      }
    }

    renderCategorySelector();
    renderContent();
  } catch (err) {
    console.error(err);
    document.getElementById("modules-container").innerHTML = `
      <div style="background: rgba(239, 68, 68, 0.1); border: 1px solid #ef4444; padding: 24px; border-radius: 8px; color: #fca5a5;">
        <h3>⚠️ Servidor local no conectado</h3>
        <p style="margin-top: 8px;">Asegúrate de haber iniciado el servidor ejecutando en la terminal:</p>
        <code style="display:block; margin: 12px 0; background: #000; padding: 10px; border-radius: 4px; color: #38bdf8;">npm start</code>
        <p>Luego refresca esta página en <strong>http://localhost:3000</strong>.</p>
      </div>
    `;
  }
}

// Renderizar selector de categoría en el Sidebar (JavaScript, etc.)
function renderCategorySelector() {
  const container = document.getElementById("categories-container");
  container.innerHTML = "";

  projectCategories.forEach(cat => {
    const btn = document.createElement("button");
    const isActive = cat.name === selectedCategoryName;
    btn.className = `category-btn ${isActive ? 'active' : ''}`;
    btn.innerHTML = `
      <span>${cat.name}</span>
      <span class="dot"></span>
    `;
    btn.onclick = () => {
      selectedCategoryName = cat.name;
      renderCategorySelector();
      renderContent();
    };
    container.appendChild(btn);
  });
}

// Renderizar pantalla principal de la tecnología seleccionada (JavaScript)
function renderContent() {
  const currentCategory = projectCategories.find(c => c.name === selectedCategoryName);
  if (!currentCategory) return;

  // Header Banner
  document.getElementById("current-category-tag").textContent = selectedCategoryName;
  document.getElementById("page-title").textContent = `${selectedCategoryName} - Módulos de Práctica`;
  document.getElementById("page-desc").textContent = `Lista interactiva de módulos y ejercicios detectados en la carpeta ${selectedCategoryName}/. Cada cambio que guardes en tus archivos se probará en vivo.`;

  // Render Sidebar Modules Nav
  const navList = document.getElementById("modules-nav-list");
  navList.innerHTML = "";

  // Render Main Modules Container
  const mainContainer = document.getElementById("modules-container");
  mainContainer.innerHTML = "";

  let totalModules = currentCategory.modules.length;
  let completedModulesCount = 0;

  currentCategory.modules.forEach(mod => {
    // Comprobar si todos los ejercicios de este módulo están check
    const totalExercisesInModule = mod.exercises.length;
    const completedInModule = mod.exercises.filter(ex => completedExercises.has(ex.relativePath)).length;
    const isModuleComplete = totalExercisesInModule > 0 && completedInModule === totalExercisesInModule;

    if (isModuleComplete) {
      completedModulesCount++;
    }

    // 1. Sidebar Item
    const navItem = document.createElement("div");
    navItem.className = "module-nav-item";
    navItem.innerHTML = `
      <span>${mod.name}</span>
      <span class="module-nav-status">${isModuleComplete ? '✅' : `${completedInModule}/${totalExercisesInModule}`}</span>
    `;
    navItem.onclick = () => {
      const el = document.getElementById(`section-${mod.name}`);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    };
    navList.appendChild(navItem);

    // 2. Main Module Box
    const section = document.createElement("div");
    section.className = "module-section";
    section.id = `section-${mod.name}`;

    section.innerHTML = `
      <div class="module-section-header">
        <div class="module-section-title">
          <span>📁 ${mod.name}</span>
        </div>
        <div>
          <span class="module-badge-status ${isModuleComplete ? 'complete' : ''}">
            ${isModuleComplete ? '✓ Módulo Completado' : `${completedInModule} de ${totalExercisesInModule} resueltos`}
          </span>
        </div>
      </div>
      <div class="exercises-list" id="exercises-${mod.name}">
        <!-- Tarjetas de ejercicios de este módulo -->
      </div>
    `;

    mainContainer.appendChild(section);

    const exercisesContainer = section.querySelector(`[id="exercises-${mod.name}"]`);

    if (mod.exercises.length === 0) {
      exercisesContainer.innerHTML = `<p style="color: var(--text-muted); font-size: 0.9rem;">Sin archivos .js en este módulo todavía.</p>`;
      return;
    }

    mod.exercises.forEach(ex => {
      const isDone = completedExercises.has(ex.relativePath);
      const card = document.createElement("div");
      card.className = `exercise-card ${isDone ? 'is-checked' : ''}`;
      card.id = `card-${escapeId(ex.relativePath)}`;

      card.innerHTML = `
        <div class="card-top">
          <div class="file-info">
            <span class="file-name">📄 ${ex.fileName}</span>
            <span class="file-path">${ex.relativePath}</span>
          </div>
          <div class="exercise-actions">
            <button class="btn btn-primary" onclick="runFile('${ex.relativePath}')">
              ▶ Ejecutar en Node
            </button>
            <button class="check-indicator ${isDone ? 'checked' : ''}" id="check-${escapeId(ex.relativePath)}" onclick="toggleManualCheck('${ex.relativePath}')" title="Click para marcar o desmarcar">
              ${isDone ? '✓ Resuelto' : '○ Pendiente'}
            </button>
          </div>
        </div>
        <div class="card-content">
          <div class="terminal-header">
            <span>Terminal Output (Node.js)</span>
            <span id="time-${escapeId(ex.relativePath)}"></span>
          </div>
          <div class="terminal-box" id="terminal-${escapeId(ex.relativePath)}">
            <span class="terminal-placeholder">// Haz click en "Ejecutar en Node" para correr este archivo...</span>
          </div>
        </div>
      `;

      exercisesContainer.appendChild(card);
    });
  });

  // Actualizar barra de progreso general
  const pct = totalModules > 0 ? Math.round((completedModulesCount / totalModules) * 100) : 0;
  document.getElementById("progress-fill").style.width = `${pct}%`;
  document.getElementById("progress-text").textContent = `${pct}% (${completedModulesCount}/${totalModules} Módulos)`;
}

// Ejecutar el archivo a través del backend local
async function runFile(relativePath) {
  const terminal = document.getElementById(`terminal-${escapeId(relativePath)}`);
  const checkBtn = document.getElementById(`check-${escapeId(relativePath)}`);
  const card = document.getElementById(`card-${escapeId(relativePath)}`);
  const timeSpan = document.getElementById(`time-${escapeId(relativePath)}`);

  terminal.className = "terminal-box";
  terminal.textContent = "⏳ Ejecutando en Node.js...";

  try {
    const res = await fetch('/api/run', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ filePath: relativePath })
    });

    const data = await res.json();
    const now = new Date().toLocaleTimeString();
    if (timeSpan) timeSpan.textContent = `Última corrida: ${now}`;

    if (!data.success) {
      terminal.className = "terminal-box error";
      terminal.textContent = data.stderr || "Error desconocido al ejecutar.";
      // Si falló, remover check si estuviera activo
      completedExercises.delete(relativePath);
    } else {
      terminal.className = "terminal-box";
      if (!data.stdout.trim()) {
        terminal.innerHTML = `<span style="color: #94a3b8;">(El archivo se ejecutó sin errores pero no imprimió nada en consola)</span>`;
      } else {
        terminal.textContent = data.stdout;
        // Si ejecutó con éxito y tiene salida, marcarlo como check automáticamente
        completedExercises.add(relativePath);
      }
    }

    saveAndRefresh();
  } catch (err) {
    terminal.className = "terminal-box error";
    terminal.textContent = `Error de conexión con el servidor: ${err.message}`;
  }
}

// Permitir alternar el check manualmente
function toggleManualCheck(relativePath) {
  if (completedExercises.has(relativePath)) {
    completedExercises.delete(relativePath);
  } else {
    completedExercises.add(relativePath);
  }
  saveAndRefresh();
}

function saveAndRefresh() {
  localStorage.setItem("practice_completed_files", JSON.stringify([...completedExercises]));
  renderContent();
}

function escapeId(str) {
  return str.replace(/[^a-zA-Z0-9_-]/g, '_');
}

// Iniciar aplicación
window.onload = loadStructure;
