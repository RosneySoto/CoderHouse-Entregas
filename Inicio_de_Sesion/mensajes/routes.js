const express = require('express');
const router = express.Router()
const Model = require('../DB/modelMensajes');
const { MongoClient } = require('mongodb');
const storeMensaje = require('./storeMensaje.js');
const storeProducto = require('../productos/storeProductos');
const socketServer = require('../server')


// router.get('/', (req, res) => {
//     res.render('login')
// })

router.get('/mensajes', (req, res) =>{
    const list = storeMensaje.getMessages();
    console.log(list)
    res.render('formulario', list)
});

// router.get('/logout', async (req, res) => {
//     req.session.destroy((err) => {
//         console.log(req.session)
//     })
//     res.render('logout')
// });

router.post('/formulario', async (req, res) => {
    let userName = req.body.nombre;
    req.session.nombre = userName;
    req.session.request = req.session.request == null ? 1 : req.session.request + 1;
    const mongo = new MongoClient('mongodb+srv://admin:123456789*@cluster0.ioqsra5.mongodb.net/ecommerce');
    await mongo.connect();
    let conectionMongo = mongo
    res.render('formulario')

        // socketServer.on('connection',async (socket) => {

        //     socket.emit('usuario', userName);
        //     socket.emit('messages',await storeMensaje.readMessage());
        //     socket.emit('products',await storeProducto.getAll());

        //     socket.on('nuevo_usuario', async (user) => {
        //         let sesion = await conectionMongo.db('ecommerce').collection('session').find().toArray();
        //         let usuario = sesion[sesion.length - 1];
        //         if(usuario === undefined){
        //             console.log('Sesion finalizada');
        //             socket.emit('usuario', false)
        //         } else {
        //             socket.emit('usuario', userName)
        //         };
        //     });
        // });
});

module.exports = router;