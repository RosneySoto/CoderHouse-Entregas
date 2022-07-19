const express = require('express');
const router = express.Router();
const storeProducto = require('../productos/storeProductos');

router.get('/productos',async (req,res) => {
    let productos = await storeProducto.getAll() === '' ? '' : await storeProducto.getAll();
    res.render('formulario',{ productos });
});

router.post('/formulario', async (req, res) => {
    let prod = req.body;
    if (prod.producto === '' || prod.precio === '') {
        res.status(404).send({ error: 'El producto no se pudo cargar, hay campos vacios' });
    } else {
        await storeProducto.saveProducts(req.body);
        console.log(req.body)
        res.redirect('formulario');
    }
})

module.exports = router;