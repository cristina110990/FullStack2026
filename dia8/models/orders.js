const mongoose = require('mongoose'); // Importamos mongoose

// Definimos el esquema del pedido
const orderSchema = new mongoose.Schema({
    productId: {type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true},
    quantity: {type: Number, required: true, min: 1},
    orderDate: {type: Date, default: Date.now},
    status: {type: String, enum: ['pending', 'shipped', 'delivered'], default: 'pending'}
})

// Creamos el modelo del pedido
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;