// ==========================================
// 1. CAPTURA DE DATOS
// ==========================================
// Solicitamos tres datos diferentes al usuario
const nombreUsuario = prompt("Por favor, ingresa tu nombre:");
const textoPeso = prompt("¿Cuántos pesas en Kg?:");
const textoAltura = prompt("¿Cual es tu altura en metros?:");

// ==========================================
// 2. PROCESAMIENTO
// ==========================================
// Conversión de tipos: pasamos las cadenas de texto solicitadas a tipo Number
const peso = Number(textoPeso);
const altura = Number(textoAltura);

// Operación matemática con los números procesados
const pesoideal = peso/altura;

// Concatenación de strings usando Template Literals
const mensajePersonalizado = `¡Hola, ${nombreUsuario}! Si tu peso es kg ${peso} y tu altura es de m ${altura}, tu peso ideal es de  ${pesoideal}.`;

// ==========================================
// 3. SALIDA DE DATOS
// ==========================================
// Muestra el resultado final por alerta
alert(mensajePersonalizado);

// Muestra el resultado detallado en la consola
console.log("--- Registro de Datos ---");
console.log("Nombre del usuario:", nombreUsuario);
console.log("Peso ingresado (Number):", peso);
console.log("Altura ingresado (Number):", altura);
console.log("Mensaje final:", mensajePersonalizado);