const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routers/usersRouters');

const app = express();
const PORT = 3000;
const MONGO_URI = 'mongodb://localhost:27017/mi_base_de_datos';

app.use(express.json());

mongoose.connect(MONGO_URI)
    .then(() => console.log ('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.use('/users', usersRouter);

app.listen(PORT, () => {
    console.log('Server is running on http://localhost:${PORT}');
});
