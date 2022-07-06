import mongoose from "mongoose";

const usuarioCollection = 'usuarios';

const UsuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    apellido:  {type: String, require },
    edad: { type: Number, require },
    dni: { type: Number, required: true, unique: true },
    curso: { type: String, require },
    nota: { type: String }
})

export const usuarios = mongoose.model(usuarioCollection, UsuarioSchema);