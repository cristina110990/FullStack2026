let prompt = require('prompt-sync')(); // Se coloca siempre al principio del fichero

const words = ['manzana', 'banana', 'naranja', 'pera', 'uva', 'kiwi', 'mango', 'fresa', 'cereza', 'melocoton'];

words.forEach((word, i) => {
    console.log(`La posición ${i} contiene el elemento ${word}`);
}); // Recorremos el array e imprimimos el índice y el elemento

console.log('\n');

words.map(word => word + `!`).forEach((word, i) => console.log(`La posición ${i} contiene el elemento ${word}`)); // Recorremos el array, añadimos un signo de exclamación a cada palabra e imprimimos el índice y el elemento

console.log('\n');

const uva = words.some(word => word.includes(`uva`));
console.log(`¿El array contiene la palabra "uva"? ${uva}`); // Comprobamos si alguna palabra del array contiene "uva" e imprimimos el resultado

console.log('\n');

const hogwarts = [
    { nombre: 'Harry Potter', casa: 'Gryffindor' },
    { nombre: 'Hermione Granger', casa: 'Gryffindor' },
    { nombre: 'Ron Weasley', casa: 'Gryffindor' },
    { nombre: 'Draco Malfoy', casa: 'Slytherin' },
    { nombre: 'Luna Lovegood', casa: 'Ravenclaw' },
    { nombre: 'Cedric Diggory', casa: 'Hufflepuff' }
]

let gryffindor = hogwarts.filter(student => student.casa === 'Gryffindor');
console.log(gryffindor); // Filtramos los estudiantes que pertenecen a la casa Gryffindor e imprimimos el resultado