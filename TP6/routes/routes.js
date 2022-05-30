const express = require('express');
const router = express.Router();
const Container = require('../container');

const products = new Container('products.txt');

// router.get('/', async (req, res) =>{
//     try {
//         const result = await products.getAll();
//         if(Array.isArray(result)) res.render('index');
//     } catch (error) {
//         console.log('[ERROR EN EL GET]', error);
//     };
// });

// router.post('/', async (req, res) =>{
//     try {
//         const product = req.body;
//         const result = await products.save(product);
//         res.send({Products: product});
//     } catch (error) {
//         console.log('[ERROR EN EL POST]', error);
//     };
// });

module.exports = router;