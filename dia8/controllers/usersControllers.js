const User = require('../models/users');

async function createUser(req, res){ // Crear un nuevo usuario req = petición, res = respuesta
    try {
        const { name, email, password } = req.body;
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
}

async function getUsers(req, res){ // Obtener todos los usuarios
    try {
        const users = await User.find();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }   
}

async function getUser(req, res){
    try {
        const {id} = req.params; // Obtener el ID del usuario desde los parámetros de la ruta
        const user = await User.findById(id);
        if (!user){
            return res.status (400).json ({message: 'User not found'});
        }
    }
    catch (error){
        res.status (500).json ({message: 'Error fetching user', error});
    }
}

async function updateUser (req, res) // Actualizar un usuario por ID
{
    try{
        const {id} = req.params;
        const {name, email, password} = req.body;
        const updateUser = await User.findByIdAndUpdate (id, {name, email, password}, {new: true});
        if (!updatedUser){
            return res.status (404).json ({message: 'User not found'});
        } res.status (200).json (updateUser);
    }
    catch (error){
        res.status (500).json ({message: 'Error updating user', error});
    }
}

async function deleteUser (req, res) {
    try {
        const {id} = req.params;
        const deleteUser = await User.findByIdAndDelete (id);
        if (!deletedUser){
            return res.status (404).json ({message: 'User not found'});
        } res.status (200).json ({message: 'User deleted successfully'});
    }
    catch (error){
        res.status (500).json ({message: 'Error deleting user', error});
    }
}
module.exports = { createUser, getUsers, getUser, updateUser, deleteUser };