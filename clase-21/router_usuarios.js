const express = require('express')
const ServicioMock = require('./servicio_mock')

const routerUsuario = express.Router()
const servicioMock = new ServicioMock()

routerUsuario.post('/popular', (req, res) =>{
    const { cant } = req.query
    const mocks = servicioMock.popular(cant)
    res.send({mocks})
});

routerUsuario.get('/:id?', (req, res) =>{

});

routerUsuario.post('/', (req, res) =>{

});

routerUsuario.put('/:id', (req, res) =>{

});

routerUsuario.delete('/:id', (req, res) =>{

});

module.exports = routerUsuario;