const mongoose = require('mongoose');

const UsuariColeccion = 'usuarios';

const UsuarioSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
});

const model = mongoose.model(UsuariColeccion, UsuarioSchema);
module.exports = model;