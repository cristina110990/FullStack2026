const express = require('express'); // Importación de Express
const { createUser, getUsers } = require('../controllers/usersControllers');

const router = express.Router(); // Definición de rutas para usuarios

router.post('/', createUser);
router.get('/', getUsers);

module.exports = router; // Exportación del router de usuarios