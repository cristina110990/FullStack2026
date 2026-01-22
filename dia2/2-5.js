let prompt = require('prompt-sync')(); // Se coloca siempre al principio del fichero

function tringleArea(base, altura){
    return base * altura / 2;
}
let base = parseInt(prompt('Introduce la base del triángulo: '));
let altura = parseInt(prompt('Introduce la altura del triángulo: '));
console.log(`El área es ${tringleArea(base, altura)}`);