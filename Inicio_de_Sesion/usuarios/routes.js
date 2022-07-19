const storeUsuario = require('./storeUsuario');
const express = require('express');
const router = express.Router();

router.post('/registrar', async (req, res) => {
    const newUser = req.body;
    if(newUser.email === '' || newUser.password === ''){
        res.status(404).send({error: 'Error, no debe haber campos vacios'})
    } else {
        await storeUsuario.addUser(req.body);
        console.log(req.body)
        res.redirect('formulario')
    }
});

module.exports = router;