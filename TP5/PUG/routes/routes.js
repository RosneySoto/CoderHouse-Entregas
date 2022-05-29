const express = require('express');
const router = express.Router();
const Container = require('../container');
const pug = require('pug')

const productos = new Container('productos.txt');

router.get('/', (req, res) =>{
    res.render('form');
});

router.get('/productos', async (req, res) =>{
    try {
        const items = await productos.getAll();
        if(Array.isArray(items)){
            res.render('listProducts', {items});
        };
    } catch (error) {
        console.log('[ERROR EN EL ROUTER GET]', error)
    };
});

// router.get('/:id', async (req, res) =>{
//     const id = req.params.id
//     try {
//         const items = await productos.getAll();
//         if(Array.isArray(items)){
//             const items = items.find(i => i.id == id);
//             res.render('listProducts', {items})
//             // res.json({productos: item})
//         };
//     } catch (error) {
//         console.log('[ERROR AL BUSCAR POR ID]', error)
//     };
// });

router.post('/productos', async (req, res) =>{
    try {
        const items = req.body;
        const productoId = await productos.guardar(items);
        res.render('listProducts', {items});
    } catch (error) {
        console.log('[ERROR AL CREAR EL PRODUCTO]', error);
    };
});

router.put('/:id', async (req, res) =>{
    try {
        const id = req.params.id
        const productoEditado = req.body;
        const data = await productos.getAll();
        const listaProductos = data.map(i =>{
            if(parseFloat(i.id) === parseFloat(id)){
                return {
                    id: i.id,
                    ...productoEditado
                }
            }else{
                return i
            };
        })
        await Container.writeProducts(listaProductos);
        const productoId = await Container.readAllProducst();
        res.render('listProducts', {items: listaProductos});
        // res.send({items: listaProductos}).status(200);
    } catch (error) {
        console.log('[ERROR AL EDITAR PRODUCTO]', error);
    };
});

router.delete('/:id', async (req, res, next) =>{
    try {
        const id = req.params.id
        const data = await productos.getAll()
        const productList = data.filter(element => element.id != id)
        await Container.writeProducts(productList)
        res.render('listProducts', {items: productList});
        // res.send({items: productList}).status(200);
    } catch (error) {
        console.log('[ERROR AL ELIMINAR PRODUCTO', error);
    };
});

module.exports = router;