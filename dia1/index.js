var prompt = require('prompt-sync')(); // Se coloca siempre al principio del fichero

// Nivel 1 de Tarea 1
console.log("Cristina \n"); // Nombre por consola. \n salto de línea, \t tabulación

// Mostrar resultado
let result = 100 * 100;
console.log(result); 

// Número aleatorio entre 50 y 500
function numAleatorio (min, max){
    return Math.round(Math.random() * (max - min) + min);
}
console.log(`El número aleatorio entre 50 y 500 es ${numAleatorio(50, 500)}`);

//Nivel 2
// Cuadrado de *
function crearCuadrado(){
    let cuadrado = ""; //Variable vacía para guardar el +
    for(let i = 0; i < 5; i++){ //1º For que me genera 5 líneas horizontales
        for(let j = 0; j < 5; j++){ //2º For que me genera 5 +
            cuadrado += '+';
        }
        cuadrado += '\n' // En 1º For, salto de línea
    }
    return cuadrado; //En función, devolvemos resultado
}

console.log(crearCuadrado());

// Cuadrado hueco de *
function cuadradoHueco(){
    let cuadrado = ""; //Variable vacía para guardar el +
    for(let i = 0; i < 5; i++){ //For para crear las filas
        for(let j = 0; j < 5; j++){ //For para crear columnas
            if(i == 0 || i == 4){ //Para la fila 0 y 4, se escribe + en cada posición
                cuadrado += '+';
            }else if (j == 0 || j == 4){ //Para la columna 0 y 4, se escribe +
                cuadrado += '+';
            }else{
                cuadrado += ' ';
            }
        }
        cuadrado += '\n' 
    }
    return cuadrado; 
}

console.log(cuadradoHueco());

// Triángulo de *
console.log("\nEjercicio 2-3");
for(let i = 1; i <= 5; i++) { //For para crear las filas
    let text = "";
    for(let j = 1; j <= 5; j++){
        if (j <= i){
            text += "*";
        } else {
            text += " ";
        }
    } 
}

// Nivel 3
var n1 = prompt('Dame un número ');
var n2 = prompt('Dame otro número ');
console.log(`La suma es ${parseInt(n1) + parseInt(n2)}`);
