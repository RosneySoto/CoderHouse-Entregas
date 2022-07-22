const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const storeUsuarios = require('./storeUsuarios');
const ModelUser = require('./DB/modelUsuarios');

passport.use('autenticacion', new LocalStrategy((username, password, callback) => {
    // const user = ModelUser.find();
    const user = storeUsuarios.getUsers();
    // const userFilter = user[0]
    if (!user || !bcrypt.compare(password, user[0].password)) return callback(new Error('Usuario no existente o password incorrecto'));
    console.log(user)
    return callback(null, user);
}));

passport.use('registracion',new LocalStrategy(async (username, password, callback) => {
    let users = await ModelUser.find();
    let user = users.find(usuario => usuario.username === username);
    if (user) {
        return callback(null, false, { message: 'No se puede registrar, el usuario ya existe' });
    }
    else if (user === undefined) {
        let passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
        user = await storeUsuarios.addUser({ username, password: passwordHash });
        return callback(null, username)
    }
}))

passport.use('login',new LocalStrategy(async (username, password, callback) => {
    let users = await ModelUser.find();
    let user = users.find(usuario => usuario.username === username);
    if (!user) {
        return callback(null, false, { message: 'El usuario no existe' });
    }
    callback(null, user);
}))

passport.serializeUser((usuario,callback) => {
    callback(null, usuario.username)
})

// passport.deserializeUser((username,callback) => {
//     console.log('Username desde deserializer: ' + username);
//     callback(null,username)
// })

// passport.serializeUser((usuario, callback) => {
//     callback(null, usuario.username)
// })

passport.deserializeUser((username, callback) => {
    const user = storeUsuarios.getUsers(username)
    callback(null, user)
})

module.exports = passport;