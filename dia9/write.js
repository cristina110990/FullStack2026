const fs = require('fs'); // Importar el módulo 'fs' para trabajar con el sistema de archivos
const content = "Algo de contenido";

// Escribir el contenido en un archivo llamado 'archivo.txt'
fs.writeFile('archivo.txt', content, err => { //archivo.txt es el nombre del archivo, content es el contenido a escribir, err es el posible error
    if (err){
        console.error(err);
    } else {
        console.log("Archivo creado con éxito");
    }
});