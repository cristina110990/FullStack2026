const express = require('express'); // Importa el módulo Express para crear el servidor web
const mongoose = require('mongoose'); // Importa el módulo Mongoose para interactuar con MongoDB

const app = express(); // Crea una instancia de la aplicación Express
const PORT = 3000; // Define el puerto en el que se ejecutará el servidor
const MONGO_URI = 'mongodb+srv://dbCristina:p6wgPSLQxOapxouP@cluster0.jpnhrk4.mongodb.net/dia0'; // URI de conexión a MongoDB

app.use(express.json()); // Middleware para parsear el cuerpo de las solicitudes como JSON

mongoose.connect(MONGO_URI) // Conecta a MongoDB usando Mongoose
    .then(() => console.log('Connected to MongoDB')) // Si la conexión es exitosa, imprime un mensaje en la consola
    .catch(err => console.error('Could not connect to MongoDB', err)); // Si hay un error al conectar, imprime el error en la consola

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); // Inicia el servidor y muestra un mensaje con la URL
});