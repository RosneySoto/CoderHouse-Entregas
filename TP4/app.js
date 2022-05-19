const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/productos', router);

app.listen(8080, () =>{
    console.log('Levantado')
})