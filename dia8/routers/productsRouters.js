const express = require('express');
const { createProduct, getProducts} = require('../controllers/productsControllers'); // Importamos los controladores de productos

const router = express.Router();

router.post('/', createProduct); // Ruta para crear un producto
router.get('/', getProducts); // Ruta para obtener todos los productos

module.exports = router; // Exportamos el router