let prompt = require('prompt-sync')(); // Se coloca siempre al principio del fichero

const array = ["Miércoles", "Enero", "2026", "18", "00", "00"];
const [dia, mes, año, hora, minuto, segundo] = array;
console.log(`El día de la semana es: ${dia}`);
console.log(`El mes es: ${mes}`);
console.log(`El año es: ${año}`);
console.log(`La hora es: ${hora}`);
console.log(`Los minutos son: ${minuto}`);
console.log(`Los segundos son: ${segundo}`);

console.log('\n');

function sum(a, b, c){
    return a + b + c;
} // Función que suma tres números
const numbers = [5, 10, 15];
console.log(`La suma de los números es: ${sum(...numbers)}`); // Llamada a la función con spread operator

console.log('\n');

const frutas = ["Manzana", "Banana", "Cereza"];
const verduras = ["Lechuga", "Tomate", "Zanahoria"];
const alimentos = [...frutas, ...verduras];
console.log("Lista de alimentos:");
console.log(...frutas, ...verduras);