require("node:dns/promises").setServers(["1.1.1.1", "8.8.8.8"]);

const express = require('express');
const mongoose = require('mongoose');
const usersRouter = require('./routers/usersRouters');

const app = express();
const PORT = 3000;
const MONGO_URI = 'mongodb+srv://dbCristina:p6wgPSLQxOapxouP@cluster0.jpnhrk4.mongodb.net/dia6';

app.use(express.json());

mongoose.connect(MONGO_URI)
    .then(() => console.log ('Connected to MongoDB'))
    .catch(err => console.error('Could not connect to MongoDB', err));

app.use('/users', usersRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
