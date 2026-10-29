const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 3000;
const ROOT_DIR = path.resolve(__dirname, '..');

// Carpetas o archivos del sistema a ignorar en la raíz
const IGNORED_ROOT_DIRS = new Set([
  'node_modules',
  '.git',
  '.gemini',
  '.vscode',
  '.idea',
  'App',
  'app'
]);

// Mime types para archivos estáticos
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon'
};

// Escanear dinámicamente carpetas de tecnología (ej. JavaScript), sus módulos y ejercicios
function getProjectStructure() {
  const categories = [];

  const rootItems = fs.readdirSync(ROOT_DIR, { withFileTypes: true });

  for (const item of rootItems) {
    if (item.isDirectory() && !IGNORED_ROOT_DIRS.has(item.name) && !item.name.startsWith('.')) {
      const categoryName = item.name;
      const categoryPath = path.join(ROOT_DIR, categoryName);

      const modules = [];
      const categoryItems = fs.readdirSync(categoryPath, { withFileTypes: true });

      // Ordenar módulos (ej. Modulo 1, Modulo 2...)
      categoryItems.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));

      for (const modItem of categoryItems) {
        if (modItem.isDirectory() && modItem.name !== 'node_modules' && !modItem.name.startsWith('.')) {
          const modulePath = path.join(categoryPath, modItem.name);
          const moduleFiles = fs.readdirSync(modulePath, { withFileTypes: true });

          // Filtrar archivos de ejercicios (excluyendo Modulo.md)
          const exercises = [];
          moduleFiles.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));

          for (const file of moduleFiles) {
            if (file.isFile() && (file.name.endsWith('.js') || file.name.endsWith('.ts') || file.name.endsWith('.html') || file.name.endsWith('.py'))) {
              const relPath = path.join(categoryName, modItem.name, file.name).replace(/\\/g, '/');
              exercises.push({
                fileName: file.name,
                relativePath: relPath,
                title: formatExerciseTitle(file.name)
              });
            }
          }

          const theoryFile = moduleFiles.find(f => f.isFile() && f.name.endsWith('.md'));

          modules.push({
            name: modItem.name,
            relativePath: path.join(categoryName, modItem.name).replace(/\\/g, '/'),
            hasTheory: !!theoryFile,
            theoryFileName: theoryFile ? theoryFile.name : null,
            exercises
          });
        }
      }

      categories.push({
        name: categoryName,
        modules
      });
    }
  }

  return categories;
}

function formatExerciseTitle(fileName) {
  // Ej: 01_salidas_y_variables.js -> Salidas y variables
  const clean = fileName.replace(/\.[^/.]+$/, '').replace(/^\d+[_-\s]*/, '');
  return clean.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
}

const server = http.createServer((req, res) => {
  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const pathname = decodeURIComponent(parsedUrl.pathname);

  // API: Obtener estructura completa de carpetas y archivos en tiempo real
  if (pathname === '/api/structure') {
    try {
      const data = getProjectStructure();
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify(data));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: err.message }));
    }
  }

  // API: Obtener contenido de un archivo
  if (pathname === '/api/file' && req.method === 'GET') {
    const filePathParam = parsedUrl.searchParams.get('path');
    if (!filePathParam) {
      res.writeHead(400, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Falta parámetro path' }));
    }

    const safePath = path.join(ROOT_DIR, filePathParam);
    if (!safePath.startsWith(ROOT_DIR) || !fs.existsSync(safePath)) {
      res.writeHead(404, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: 'Archivo no encontrado' }));
    }

    try {
      const content = fs.readFileSync(safePath, 'utf8');
      res.writeHead(200, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ content }));
    } catch (err) {
      res.writeHead(500, { 'Content-Type': 'application/json' });
      return res.end(JSON.stringify({ error: err.message }));
    }
  }

  // API: Ejecutar archivo real con Node.js
  if (pathname === '/api/run' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    req.on('end', () => {
      try {
        console.log(`[POST /api/run] Recibido body: ${body}`);
        const parsed = JSON.parse(body || '{}');
        const filePath = parsed.filePath;
        if (!filePath) {
          res.writeHead(400, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ error: 'Falta filePath en el body' }));
        }

        const absoluteTarget = path.resolve(ROOT_DIR, filePath);
        if (!fs.existsSync(absoluteTarget)) {
          res.writeHead(404, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({ error: `Archivo no encontrado: ${filePath}` }));
        }

        // Determinar si corre con python o con node
        const isPython = absoluteTarget.endsWith('.py');
        const runnerCmd = isPython ? `python "${absoluteTarget}"` : `node "${absoluteTarget}"`;

        // Ejecutar en un subproceso con timeout de seguridad (10 seg para cálculos numéricos)
        exec(runnerCmd, { timeout: 10000, cwd: ROOT_DIR }, (error, stdout, stderr) => {
          const success = !error && !stderr;
          res.writeHead(200, { 'Content-Type': 'application/json' });
          return res.end(JSON.stringify({
            success,
            exitCode: error ? (error.code ?? 1) : 0,
            stdout: stdout || '',
            stderr: stderr || (error ? error.message : ''),
            completed: success && ((stdout || '').trim().length > 0)
          }));
        });
      } catch (err) {
        console.error('[POST /api/run Error]:', err);
        res.writeHead(500, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ error: err.message, stack: err.stack }));
      }
    });
    return;
  }

  // Servir archivos del repositorio para visualización directa (ej. abrir .html en iframe o nueva pestaña)
  if (pathname.startsWith('/workspace/')) {
    const relativeTarget = pathname.replace('/workspace/', '');
    const safeTarget = path.join(ROOT_DIR, relativeTarget);
    if (!safeTarget.startsWith(ROOT_DIR)) {
      res.writeHead(403);
      return res.end('Acceso denegado');
    }
    fs.stat(safeTarget, (err, stats) => {
      if (err || !stats.isFile()) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        return res.end('Archivo no encontrado');
      }
      const ext = path.extname(safeTarget).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';
      res.writeHead(200, { 'Content-Type': contentType });
      fs.createReadStream(safeTarget).pipe(res);
    });
    return;
  }

  // Servir archivos estáticos del frontend (index.html, styles.css, app.js, etc.) desde la carpeta App
  const appDir = __dirname;
  let filePath = path.join(appDir, pathname === '/' ? 'index.html' : pathname);

  if (!filePath.startsWith(appDir)) {
    res.writeHead(403);
    return res.end('Acceso denegado');
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('Archivo no encontrado');
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Servidor Practice Hub corriendo en http://localhost:${PORT}`);
});
