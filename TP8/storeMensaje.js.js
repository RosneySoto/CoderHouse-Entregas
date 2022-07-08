const Model = require('./DB/modelMensajes');
const { faker } = require('@faker-js/faker');

class ContenedorMensaje {
    mock = [];

    static getMessages(){
        const ListaMensajes = Model.find();
        return ListaMensajes;
    };

    static addMensaje() {

        const mensajesMock = Model({
            author: {
                nombre: faker.name.firstName(),
                apellido: faker.name.lastName(),
                edad: faker.mersenne.rand(20, 50),
                alias: faker.internet.userName(),
                avatar: faker.image.avatar()
            },
            text: faker.lorem.words(5)
        })
        return mensajesMock.save()

        // for(let i = 1; i < cant; i++){
        //     this.mock.push({
        //         author: {
        //             nombre: faker.name.firstName(),
        //             apellido: faker.name.lastName(),
        //             edad: faker.mersenne.rand(20, 50),
        //             alias: faker.internet.userName(),
        //             avatar: faker.image.avatar()
        //         },
        //         text: faker.lorem.words(5)
        //     })
        // }

        // const nuevoMensaje = {
        //     author: {
        //         nombre: faker.name.firstName(),
        //         apellido: faker.name.lastName(),
        //         edad: faker.mersenne.rand(20, 50),
        //         alias: faker.internet.userName(),
        //         avatar: faker.image.avatar()
        //     },
        //     text: faker.lorem.words(5)
        // };
        // return nuevoMensaje
    }
}

module.exports = ContenedorMensaje;