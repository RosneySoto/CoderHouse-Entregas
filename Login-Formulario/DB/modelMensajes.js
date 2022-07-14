const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MensajeColeccion = 'mensajes';

const MensajeSchema = new mongoose.Schema({
    author: {
        nombre:{
            type: String,
            require: true
        },
        apellido:{
            type: String,
            require: true
        },
        edad:{
            type: Number,
            require: true
        },
        alias:{
            type: String,
            require: true
        },
        email:{
            type: String,
            require: true
        },
        avatar:{
            type: String,
            require: true
        },
    },
    text: {
        type: String,
        required: true
    },
    fyh: {
        type: Date,
        default: Date.now(),
    }
});

const model = mongoose.model(MensajeColeccion, MensajeSchema);
module.exports = model;