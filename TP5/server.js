const express = require('express');
const router = require('./routes/routes');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/productos', router);

app.set('views', './views');
app.set('view engine', 'pug');

app.get('/productos', (req, res) =>{
    res.render('hello.pug', {mensaje: 'Usando PUG en express'});
});
// app.get('/', (req, res) =>{
//     res.render(__dirname + './views/hello.pug')
// });

app.listen(8080, () =>{
    console.log('Servidor PUG levantado');
});