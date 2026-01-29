const mongoose = require('mongoose'); // Importamos mongoose

// Definimos el esquema del producto
const productSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: String,
    price: {type: Number, min: 0},
    stock: Number,
    category: String
})

productSchema.pre('save', function() {
    if (this.stock < 0) {
        this.stock = 0;
    }
});

// Creamos el modelo del producto
const Product = mongoose.model('Product', productSchema);

module.exports = Product;