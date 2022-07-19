const Model = require('../DB/modelMensajes');
const { faker } = require('@faker-js/faker');
const posts = require('../DB/modelMensajes');
const norm = require('normalizr');
const print = require('../utils/print')

class ContenedorMensaje {
    mock = [];

    static saveMessage = async (message) => {
        let newMessage = Model(message)
        return await newMessage.save()
    }
    
    static readMessage = async () => {
        const contenido = await Model.find();
        return contenido;
    
    };

    static getMessages(){
        const ListaMensajes = Model.find();
        return ListaMensajes;    
    };

    static addMensaje(persona) {
        const mensajesMock = Model({
            author: {
                nombre: persona.nombre,
                apellido: persona.apellido,
                edad: persona.edad,
                email: persona.email,
                alias: persona.alias,
                avatar: persona.avatar,
            },
            text: persona.datos
        })
        console.log(mensajesMock)
        return mensajesMock.save()
    };

    async normalizer() {
        const mensajesDB = {
            id: 'mensajes',
            messages : posts
        };

        const esquemaAuthor = new norm.schema.Entity('authors', {}, {idAttribute: 'email'});
        const esquemaMensaje = new norm.schema.Entity('message', { 
            author: esquemaAuthor
        });
        const esquemaMensajes = new norm.schema.Entity('messages', {
            texts: [ esquemaMensaje ]
        });
        const normalizerMensajes = norm.normalize(mensajesDB, esquemaMensajes);
        print(normalizerMensajes);
        return normalizerMensajes;
    };
    
};

module.exports = ContenedorMensaje;