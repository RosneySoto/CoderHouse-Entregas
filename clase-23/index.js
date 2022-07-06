const express = require('express')
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/setCookie', (req, res) =>{
    const {nombre, valor, duracion} = req.params
    res.cookie(nombre, valor, {maxDuracion: duracion * 1000}).send('Cookie seteada')
});



app.listen(8080, ()=>{
    console.log('escuchando')
})