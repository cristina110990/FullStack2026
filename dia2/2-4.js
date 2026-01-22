let prompt = require('prompt-sync')(); // Se coloca siempre al principio del fichero

function rectArea(altura, ancho){
    return altura * ancho;
}
let altura = parseInt(prompt('Introduce la altura del rectángulo: '));
let ancho = parseInt(prompt('Introduce el ancho del rectángulo: '));
console.log(`El área es ${rectArea(altura, ancho)}`);