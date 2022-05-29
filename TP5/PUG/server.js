const express = require('express');
const router = require('./routes/routes');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', router);

app.set('views', './views_pug');
app.set('view engine', 'pug');

app.listen(8080, () =>{
    console.log('Servidor PUG levantado');
});