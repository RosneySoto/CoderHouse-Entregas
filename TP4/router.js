const express = require('express');
const router = express.Router();

let productos = [];
id = 0;

router.get('/', (req, res) =>{
    res.send({productos: productos});
});

router.get('/:id', (req, res) =>{
    const id = parseInt(req.params.id)
    const busqueda = productos.find(i => i.id == id);
    res.send({ producto: busqueda });
});

router.post('/', (req, res) =>{
    productos.push(req.body);
    res.send({ productos: productos });
});

router.delete('/:id', (req, res) =>{
    const id = parseInt(req.params.id)
    const busqueda = productos.splice(i => i.id == id);
    res.send({ producto: busqueda });
});



module.exports = router;