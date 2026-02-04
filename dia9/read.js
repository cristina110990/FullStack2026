const fs = require('fs'); // Importar el módulo 'fs' para trabajar con el sistema de archivos

// Leer el contenido del archivo llamado 'archivo.txt'
fs.readFile('archivo.txt', 'utf8', (err, data) => { //archivo.txt es el nombre del archivo, 'utf8' es la codificación, err es el posible error, data es el contenido leído
    if (err){
        console.error(err);
    } else {
        console.log(`Contenido del archivo: ${data}`); // Mostrar el contenido leído en la consola, data contiene el contenido del archivo
    }
});

fs.readFile('archivoMedio.txt', 'utf8', (err, data) => { //archivo.txt es el nombre del archivo, 'utf8' es la codificación, err es el posible error, data es el contenido leído
    if (err){
        console.error(err);
    } else {
        console.log(`Contenido del archivo: ${data}`); // Mostrar el contenido leído en la consola, data contiene el contenido del archivo
    }
});