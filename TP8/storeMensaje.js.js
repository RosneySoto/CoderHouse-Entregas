const Model = require('./DB/modelMensajes');
const { faker } = require('@faker-js/faker');
const posts = require('./DB/modelMensajes');
const norm = require('normalizr');
const print = require('./utils/print')

class ContenedorMensaje {
    mock = [];

    static getMessages(){
        const ListaMensajes = Model.find();
        return ListaMensajes;    
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
    }


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

    /*
    MOCKEO DE MENSJAES
    */
    // static addMensaje() {
    //     const mensajesMock = Model({
    //         author: {
    //             nombre: faker.name.firstName(),
    //             apellido: faker.name.lastName(),
    //             edad: faker.mersenne.rand(20, 50),
    //             email: faker.internet.email(),
    //             alias: faker.internet.userName(),
    //             avatar: faker.image.avatar(),
    //         },
    //         text: faker.lorem.words(5)
    //     })
    //     console.log(mensajesMock)
    //     return mensajesMock.save()
    // };
    
    
};

module.exports = ContenedorMensaje;