let prompt = require('prompt-sync')(); // Se coloca siempre al principio del fichero

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //Array inicial

console.log(`El array es: ${array}`); //Mostrar por consola el array inicial

console.log(`La posición 3 del array es ${array[3]} y la posición 6 del array es ${array[6]}`); //Mostrar por consola los valores de las posiciones 3 y 6

console.log(`El tamaño del array es ${array.length}`); //Mostrar por consola el tamaño del array

array.unshift(0); //Añadir un elemento al principio del array
console.log(`El array nuevo es: ${array}`); //Mostrar por consola el array después de añadir un elemento al principio

array.push(11); //Añadir un elemento al final del array
console.log(`El array nuevo es: ${array}`); //Mostrar por consola el array después de añadir un elemento al final

array.splice(5, 2); //Eliminar los elementos de las posiciones 5 y 6
console.log(`El nuevo array quedaría así: ${array}`); //Mostrar por consola el array después de eliminar los elementos

console.log(`La posición del número 8 es: ${array.indexOf(8)}`); //Mostrar por consola la posición del número 4

console.log(`El array invertido tiene un valor de: ${array.reverse()}`); //Mostrar por consola el array invertido

let arrayString = array.join(`, `); //Convertir el array en un string
console.log(`El array convertido en un string quedaría: ${arrayString}`); //Mostrar por consola el array convertido en un string

let numbers = arrayString.split(`, `); //Convertir el string de nuevo en un array
console.log(`El string vuelve a convertirse en un array: ${numbers.reverse()}`); //Mostrar por consola el string convertido en un array