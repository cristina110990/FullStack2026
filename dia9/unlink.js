const fs = require('fs'); // Importar el módulo 'fs' para trabajar con el sistema de archivos
const filePath = 'archivo.txt'; // Especificar la ruta del archivo a eliminar
const fileGrande = 'archivoGrande.txt'; // Especificar la ruta del archivo grande a eliminar

// Eliminar el archivo especificado
fs.unlink(filePath, err => {
    if (err){
        console.error(err);
    } else {
        console.log("Archivo eliminado con éxito");
    }
});

fs.unlink(fileGrande, err => {
    if (err){
        console.error(err);
    } else {
        console.log("Archivo grande eliminado con éxito");
    }
});
