const express = require('express');
const app = express();
const routerUsuario = require('./router_usuarios')

app.arguments(express.json());


app.listen(8080, () =>{
    console.log('Estoy escuchando')
})