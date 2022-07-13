const passport = require('passport');
const LocalStartegy = require('passport-local').Strategy;
const bcrypt = require('bcrypt')

const users = [];

/*
    Creo la estrategia apra validar los datos
*/
passport.use('registracion', new LocalStartegy((username, password, callback) => {
    
    const user = users.find(usuario => usuario.username === username);
    if (user) return callback(new Error('Ya existe el usuario'))
    const passwordHasheado = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    const usuarioCreado = {username, password: passwordHasheado};
    users.push(usuarioCreado);
    callback(null, usuarioCreado)
}));

/*
    Se usa para inicar la sesion tras una peticion HTTP
*/
passport.serializeUser((usuario, callback) => {
    callback(null, usuario.username);
});

/*
    Se usa para destruir la sesion al hacer un logout y asi el proximo usuario no trae los datos del anterior
 */

passport.deserializeUser((username, callback) => {
    const user = users.find(usr => usr.username == username)
    callback(null, user)
});

module.exports = passport