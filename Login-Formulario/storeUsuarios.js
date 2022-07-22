const Model = require('./DB/modelUsuarios');

class ContenedorUsuarios {

    static getUsers(){
        const ListUsuarios = Model.find();
        return ListUsuarios
    }

    static addUser(usuario){
        const newUser = Model({
            username: usuario.username,
            password: usuario.password
        })
        return newUser.save()
    };
}

module.exports = ContenedorUsuarios;