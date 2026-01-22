let prompt = require('prompt-sync')(); // Se coloca siempre al principio del fichero

function mostrarFibonacci(cantidad){
    let fibonacci = [0, 1];
    for(let i = 2; i < cantidad; i++){
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }

    console.log(`Los primeros ${cantidad} números de la serie Fibonacci son:`);
    console.log(fibonacci.join(', '));
}

let cantidad = prompt('Ingrese la cantidad de números de la serie Fibonacci que desea ver: ');
cantidad = Math.max(10, parseInt(cantidad)); // Asegura que la cantidad sea al menos 10
mostrarFibonacci(cantidad);