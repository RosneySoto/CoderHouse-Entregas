const { faker } = require('@faker-js/faker');

const generarProductos = () =>{
    return {
        producto: faker.commerce.product(),
        precio: faker.commerce.price(),
        foto: faker.image.avatar()
    }
};

const generarMensajes = () => {
    return {
        author:{
            id: faker.mersenne.rand(),
            nombre: faker.name.firstName(),
            apellido: faker.name.lastName(),
            edad: faker.mersenne.rand(20, 50),
            alias: faker.internet.userName(),
            avatar: faker.image.avatar(),
        },
        text: faker.lorem.words(5)
    }
}

module.exports = {
    generarProductos,
    generarMensajes
}