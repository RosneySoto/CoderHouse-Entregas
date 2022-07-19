const mongoose = require('mongoose');

const ProductoColeccion = 'productos';

const ProductoSchema = new mongoose.Schema({
    producto: {
        type: String,
        require: true
    },
    precio: {
        type: Number,
        require: true
    },
    fotoProd: {
        type: String,
        require: true
    }
});
const model = mongoose.model(ProductoColeccion, ProductoSchema);
module.exports = model;