const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.render('views/about')
})

app.post('/', (req, res) =>{
    
});

app.listen(8080, () =>{
    console.log('Estoy escuchando')
})