let prompt = require('prompt-sync')(); // Se coloca siempre al principio del fichero

// Nivel 1-4 dos funciones para saludar
function saludar(nombre){ // Función saludar
    console.log(`Hola ${nombre}`);
}

function despedir(nombre){ // Función despedir
    console.log(`Adiós, ${nombre}`);
}

function procesarEntradaUsuario(callback){ // Función de orden superior
    let nombre = prompt (`Ingresa tu nombre: `); 
    callback(nombre);
}

procesarEntradaUsuario(saludar);
procesarEntradaUsuario(despedir);