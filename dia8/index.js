require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]); // Soluciona error dns en ultima version de node

const express = require('express'); // Importamos express
const mongoose = require('mongoose'); // Importamos mongoose
const usersRouter = require('./routers/usersRouters'); // Importamos la ruta de usuarios
const productsRouter = require('./routers/productsRouters'); // Importamos la ruta de productos

const app = express(); // Instanciamos express

// Variable de entorno
const PORT = 3000;
const MONGO_URI = 'mongodb+srv://dbCristina:p6wgPSLQxOapxouP@cluster0.jpnhrk4.mongodb.net/dia8';

// Conexión a la base de datos
mongoose.connect(MONGO_URI)
    .then(() => console.log ('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.use(express.json()); // api express para parsear json

// Rutas
app.use('/users', usersRouter);
app.use('/products', productsRouter);

// Iniciar servidor, mantenerlo a la escucha
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// index.js -> ruta -> controllers -> models