const Model = require('../DB/modelUsuarios');

class ContenedorUsuarios {

    static addUser(usuario) {
        const newUser = Model({
            email: usuario.email,
            password: usuario.password
        });
        return newUser.save()
    };
}

module.exports = ContenedorUsuarios