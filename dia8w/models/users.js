const bcrypt = require('bcrypt'); // Importamos bcrypt para encriptar contraseñas con npm install bcrypt
const mongoose = require('mongoose'); // Importamos mongoose

const userSchema = new mongoose.Schema({
    name: String,
    email: {type: String, unique: true, required: true},
    password: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;