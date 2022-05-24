const express = require('express');
const router = express.Router();

let productos = [];
id = 0;

router.get('/', (req, res) =>{
    res.send({productos: productos});
});

router.get('/:id', (req, res) =>{
    const id = parseInt(req.params.id)
    if(!id) res.send('Producto no encontrado')
    else{
        const busqueda = productos.find(i => i.id == id);
        res.send({ producto: busqueda });
    }
});

router.post('/', (req, res) =>{
    if(!req.body) {
        return 'Error, debe ingresar todos los datos'
    }   
    else {
        productos.push(req.body);
        res.send({ productos: productos });
    }
});

router.put('/:id', (req, res) =>{
    const id = parseInt(req.params.id)
    const newData = req.body;
    const busqueda = productos.filter(i => i.id == id)
    productos = newData
    res.send({ producto: productos });
});

router.delete('/:id', (req, res) =>{
    const id = parseInt(req.params.id)
    const busqueda = productos.filter(i => i.id !== id);
    productos = busqueda;
    res.send({ producto: productos });  
});

module.exports = router;