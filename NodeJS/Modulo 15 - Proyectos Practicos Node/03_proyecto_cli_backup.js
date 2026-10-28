// ==========================================
// PROYECTO 3: CLI DE BACKUP COMPRIMIDO
// Para ejecutar: node "NodeJS/Modulo 15 - Proyectos Practicos Node/03_proyecto_cli_backup.js"
// ==========================================

const fs = require('fs');
const zlib = require('zlib');
const path = require('path');
const { pipeline } = require('stream/promises');

console.log("=== PROYECTO 3: CLI BACKUP COMPRIMIDO ===");

// RETO 3.1: respaldarArchivo(origen, destinoGz)
// TODO: Usa await pipeline(fs.createReadStream(origen), zlib.createGzip(), fs.createWriteStream(destinoGz))
async function respaldarArchivo(origen, destinoGz) {

}

// RETO 3.2: restaurarArchivo(origenGz, destino)
// TODO: Mismo esquema con zlib.createGunzip()
async function restaurarArchivo(origenGz, destino) {

}

// RETO 3.3 (CLI): permitir ejecutar  node 03_proyecto_cli_backup.js backup <archivo>
// TODO: Si process.argv[2] === 'backup', respalda process.argv[3] en process.argv[3] + '.gz'


// ==========================================
// 🧪 SUITE DE VALIDACIÓN AUTOMÁTICA (no modificar)
// ==========================================
async function validar(nombre, condicion, pista) {
  try {
    if (await condicion()) {
      console.log('✔ ' + nombre);
      return true;
    }
    console.log('❌ ' + nombre + ': ' + pista);
  } catch (err) {
    console.log('❌ ' + nombre + ': Error -> ' + err.message);
  }
  return false;
}

function conTiempo(promesa, ms = 1500) {
  let id;
  const limite = new Promise((_, rechazar) => {
    id = setTimeout(() => rechazar(new Error('Tiempo agotado (' + ms + 'ms). ¿Falta llamar a resolve() o al callback?')), ms);
  });
  return Promise.race([Promise.resolve(promesa), limite]).finally(() => clearTimeout(id));
}

(async () => {
  console.log('\n--- Comprobación ---');

  const original = path.join(__dirname, 'tmp_backup_origen.txt');
  const gz = original + '.gz';
  const restaurado = path.join(__dirname, 'tmp_backup_restaurado.txt');
  const texto = 'Datos importantes para respaldar. '.repeat(100);
  fs.writeFileSync(original, texto);

  try { await conTiempo(respaldarArchivo(original, gz), 3000); } catch (err) { console.log('❌ respaldarArchivo(): ' + err.message); }
  await validar('RETO 3.1 (backup .gz)', () => fs.existsSync(gz) && fs.statSync(gz).size > 0 && fs.statSync(gz).size < Buffer.byteLength(texto), 'No se generó un .gz más pequeño que el original');

  try { await conTiempo(restaurarArchivo(gz, restaurado), 3000); } catch (err) { console.log('❌ restaurarArchivo(): ' + err.message); }
  await validar('RETO 3.2 (restaurar)', () => fs.existsSync(restaurado) && fs.readFileSync(restaurado, 'utf-8') === texto, 'El archivo restaurado no coincide con el original');

  for (const f of [original, gz, restaurado]) if (fs.existsSync(f)) fs.unlinkSync(f);

  console.log('\n--- Fin de la comprobación ---\n');
})();
