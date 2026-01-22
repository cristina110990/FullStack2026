let prompt = require('prompt-sync')(); // Se coloca siempre al principio del fichero

function containsS(str){
    return str.includes('s') || str.includes('S');
}

let inputString = prompt('Introduce un string: ');
console.log(containsS(inputString));
