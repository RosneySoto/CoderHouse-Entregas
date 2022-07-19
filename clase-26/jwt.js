require('dotenv').config()
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = process.env;

const generarJwt = (payload) => jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

const verificarJwt = (jwt) => jwt.verify(token, process.env.JWT_SECRET, (err, contenido) => {
    if (err) throw new Error('Token invalido');
    return contenido;
});

// const token = generarJwt ({ data: 'jose '});
// console.log(token);
// verificarJwt(token);

module.exports = {
    generarJwt,
    verificarJwt
}