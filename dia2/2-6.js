let prompt = require('prompt-sync')(); // Se coloca siempre al principio del fichero

function circleArea(radius){
    return Math.PI * radius * radius;
}
let radius = parseInt(prompt('Introduce el radio del círculo: '));
console.log(`El área es ${circleArea(radius)}`);
