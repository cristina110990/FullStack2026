var prompt = require('prompt-sync')();
const http = require ('http'); // Importar el módulo 'http' para crear un servidor web

const server = http.createServer((req, res) => { // Crear un servidor que maneje las solicitudes entrantes
    res.writeHead(200, {'Content-Type': 'text/plain'}); // Configurar la cabecera de la respuesta con código 200 y tipo de contenido 'text/plain'
    res.write('Hola, mundo!'); // Escribir el cuerpo de la respuesta con el texto 'Hola, mundo!'
    res.end(); // Finalizar la respuesta
});

server.listen (3000, () => {
    console.log ('Servidor escuchando en el puerto 3000'); // Mostrar un mensaje en la consola indicando que el servidor está escuchando en el puerto 3000
})