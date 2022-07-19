const express = require('express');
const jwt = require('./jwt');
const app = express();

app.use(express.json());

const usuarios = [];

app.post('/registro', async (req, res) => {
    const { user, pass, direccion } = req.body;
    const usuarioExiste = usuarios.find(us => us.usuario === usuario);

    if(user === 'jose' && pass === 'jose123'){
        const newJwt = jwt.generarJwt()
    }
    return newJwt
})

app.listen(8080, () =>{
    console.log('escuchandoo')
})