let prompt = require('prompt-sync')(); // Se coloca siempre al principio del fichero

function pow(num, exp){
    return Math.pow(num, exp);
}
let inputNumber = parseInt(prompt("Introduce un número: "));
let inputExp = parseInt(prompt("Introduce el exponente: "));
console.log(`El resultado es: ${pow(inputNumber, inputExp)}`);