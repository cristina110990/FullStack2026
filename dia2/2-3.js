let prompt = require('prompt-sync')(); // Se coloca siempre al principio del fichero

function pow(num){
    return Math.pow(num, num);
}
let inputNumber = parseInt(prompt("Introduce un número: "));
console.log(`El resultado es: ${pow(inputNumber)}`);