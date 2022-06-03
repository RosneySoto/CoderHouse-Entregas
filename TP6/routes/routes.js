const express = require('express');
const { messages } = require('../container');
const router = express.Router();
const Container = require('../container');
// const httpServer = require('../server'); 

const products = new Container('products.txt');

router.get('/', async (req, res) =>{
    try {
        const result = await products.getAll();
        if(Array.isArray(result)) res.render('formulario', {result});
    } catch (error) {
        console.log('[ERROR EN EL GET]', error);
    };
});

router.post('/', async (req, res) =>{
    try {
        const product = req.body;
        const result = await products.save(product);
        res.redirect('/');
    } catch (error) {
        console.log('[ERROR EN EL POST]', error);
    };
});

router.post('/', async (req, res) =>{
    try {
        const mensaje = req.body;
        const result = await messages.saveMessages(mensaje);
        res.redirect('/');
    } catch (error) {
        console.log('[ERROR EN EL POST]', error);
    };
});

module.exports = router;