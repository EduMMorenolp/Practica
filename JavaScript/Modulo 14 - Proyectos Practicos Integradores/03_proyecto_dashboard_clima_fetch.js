// ==========================================
// PROYECTO 3: DASHBOARD METEOROLÓGICO ASÍNCRONO
// Para ejecutar: node "JavaScript/Modulo 14 - Proyectos Practicos Integradores/03_proyecto_dashboard_clima_fetch.js"
// ==========================================

console.log("=== PROYECTO 3: DASHBOARD DE CLIMA ===");

function mockAPIFetch(ciudad) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const db = {
        "Buenos Aires": { temp: 22, condicion: "Despejado" },
        "Madrid": { temp: 18, condicion: "Nublado" }
      };
      if (db[ciudad]) resolve({ ok: true, json: () => Promise.resolve(db[ciudad]) });
      else reject(new Error("Ciudad no encontrada"));
    }, 40);
  });
}

// RETO 3.1: Función Async para consultar y formatear clima
// TODO: Crea una función async 'obtenerReporteClima(ciudad)'.
// - Usa await mockAPIFetch(ciudad).
// - Si resuelve, extrae los datos con await respuesta.json() e imprime:
//   `>> ${ciudad}: ${datos.temp}°C (${datos.condicion})`
// - Si falla, captura el error en catch e imprime: `>> Error en ${ciudad}: ${err.message}`
async function obtenerReporteClima(ciudad) {
  // Escribe tu código aquí:
}

// Pruebas:
obtenerReporteClima("Buenos Aires");
obtenerReporteClima("Londres");

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

(async () => {
  console.log('\n--- Comprobación ---');

  await validar('RETO 3.1 (obtenerReporteClima)', async () => {
    if (typeof obtenerReporteClima !== 'function') return false;
    const rep = await obtenerReporteClima('Madrid');
    return typeof rep === 'string' && rep.includes('Madrid') && rep.includes('°C');
  }, 'obtenerReporteClima(ciudad) debe retornar un string formateado con la ciudad y temperatura');

  console.log('\n--- Fin de la comprobación ---\n');
})();
