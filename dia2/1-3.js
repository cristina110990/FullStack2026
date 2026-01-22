let prompt = require('prompt-sync')(); // Se coloca siempre al principio del fichero

// Nivel 1-3 Tabla de multiplicar
function multiplicar(number){
    for (i = 1; i <= 10; i++){
        let result = number * i;
        console.log(`${number} x ${i} = ${result}`);
    }
}

let number = parseInt(prompt(`Introduce un número: `));
multiplicar(number);
