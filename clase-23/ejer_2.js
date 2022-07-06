const express = require('express');
const session = require('express-session')

const app = express();

app.use(session({
    secret: 'Jose',
    resave: true,
    saveUninitialized: true
}));


app.get('/root', (req, res) =>{
    const {nombre, clave} = req.params;
    if(req.session.contador){
        req.session.contador++
        return res.send(`Bienvenido ${req.session.nombre}, esta es tu visiita Nro. ${req.session.contador}`)
    } else{
        req.session.contador = 1;
        req.session.nombre = req.query.nombre;
        return res.send(`Bienvenido ${req.query.nombre}`)
    }
})


app.listen(8080, () =>{
    console.log('Sesion levantad')
})
