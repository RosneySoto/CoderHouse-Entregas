const {faker} = require('@faker-js/faker')

class ServicioMock{
    mocks =[];

    popular(cant = 50){
        for(let i = 1; i < cant; i++){
            this.mocks.push({
                nombre: faker.name.firstName(),
                website: faker.internet.domainName(),
                email: faker.internet.email(),
                imagen: faker.image.avatar()
            })
        }
    }
};

module.exports = ServicioMock;