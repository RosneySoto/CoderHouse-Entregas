const express = require('express');
const router = require('./routes/routes');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/', router);

app.set('views', './view_ejs');
app.set('view engine', 'ejs');

app.listen(8080, () =>{
    console.log('Servidor EJS levantado');
});