let prompt = require('prompt-sync')(); // Se coloca siempre al principio del fichero

// Nivel 1-2 Función con nombre
function saludar(){
    let name = prompt(`¿Cuál es tu nombre? `);
    console.log(`Hola, ${name}!`);
}

saludar();