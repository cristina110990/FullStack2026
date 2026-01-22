let prompt = require('prompt-sync')(); // Se coloca siempre al principio del fichero

function esPar(num){
    if(num % 2 === 0) {
        return "Es un número par";
    } else {
        return "Es un número impar";
    }
}

let inputNumb = parseInt(prompt("Introduce un número: "));
console.log(esPar(inputNumb));