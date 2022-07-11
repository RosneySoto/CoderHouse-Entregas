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
                email: faker.internet.email(),
                alias: faker.internet.userName(),
                avatar: faker.image.avatar(),
            },
            text: faker.lorem.words(5)
        })
        console.log(mensajesMock)
        return mensajesMock.save()
    };
};

module.exports = ContenedorMensaje;