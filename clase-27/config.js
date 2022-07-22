const dotenv = require('dotenv').config();

const {PORT, DEBUG, MODO } = process.env;

console.log({
    port: PORT,
    modo: MODO,
    debug: DEBUG 
});

// module.exports = entorno = {
//     NODE_ENV: process.env.NODE_ENV || 'dev',
//     PORT: process.env.PORT || 8080,
//     DEBUG: process.env.DEBUG || true

// }
// console.log(entorno)
