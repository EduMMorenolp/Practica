// ==========================================
// TEMA 3: EXPRESIONES REGULARES (REGEXP)
// Para ejecutar: node "JavaScript/Modulo 4/03_expresiones_regulares.js"
// ==========================================

console.log("=== TEMA 3: EXPRESIONES REGULARES ===");

// ------------------------------------------
// 3.1 Validación con .test()
// ------------------------------------------
// Crea una expresión regular para validar un código postal simple de exactamente 4 dígitos:
// Pista: ^\d{4}$
// TODO: Define 'regexCP', pruébalo con "1425" (debe dar true) y con "14A5" (debe dar false):


// ------------------------------------------
// 3.2 Extracción de coincidencias con .match() y flag 'g'
// ------------------------------------------
// Dada la siguiente frase, extrae todos los números utilizando una RegExp global:
const registro = "ID: 450, Precio: 1200, Stock: 35";
// Pista: /\d+/g
// TODO: Ejecuta registro.match(...) e imprime el array de números extraídos:


// ------------------------------------------
// 3.3 Reemplazo con RegExp y enmascaramiento
// ------------------------------------------
// Tienes un número de tarjeta o clave. Oculta todos los dígitos salvo los últimos 4.
// O reemplaza todas las vocales por '*':
const texto = "JavaScript es asombroso";
// Pista: /[aeiou]/gi
// TODO: Reemplaza todas las vocales de 'texto' por '*' usando .replace() e imprime el resultado:
