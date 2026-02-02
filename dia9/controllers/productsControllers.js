const Product = require('../models/products'); // Importamos el modelo de productos

async function createProduct(req, res){
    try {
        const {name, description, price, stock, category} = req.body; // Desestructuramos el cuerpo de la petición
        const newProduct = new Product({name, description, price, stock, category}); // Creamos una nueva instancia del producto
        await newProduct.save(); // Guardamos el producto en la base de datos
        res.status(201).json(newProduct); // Respondemos con el producto creado
    }
    catch (error) {
        res.status(500).json({message: 'Error creating product', error}); // Manejamos errores
    }
}

async function getProducts(req, res){
    try {
        const products = await Product.find(); // Buscamos todos los productos en la base de datos
        res.status(200).json(products); // Respondemos con la lista de productos
    }
    catch (error) {
        res.status(500).json({message: 'Error fetching products', error}); // Manejamos errores
    }
}

module.exports = { createProduct, getProducts };