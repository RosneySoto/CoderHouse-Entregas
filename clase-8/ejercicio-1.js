const express = require('express');
const app = express();

const listaMascotas = [];
const listaPersonas = [];

const routerMascotas = express.Router();
const routerPersonas = express.Router();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

routerMascotas.get('/', (req, res) =>{
    res.send({ mascotas: listaMascotas });
});

routerMascotas.post('/', (req, res) =>{
    listaMascotas.push(req.body);
    res.send({ mascotas: listaMascotas });
});

routerPersonas.get('/', (req, res) =>{
    res.send({ personas: listaPersonas });
});

routerPersonas.post('/', (req, res) =>{
    listaPersonas.push(req.body);
    res.send({ personas: listaPersonas });
});

app.use('/mascotas', routerMascotas);
app.use('personas', routerPersonas);

app.listen(8080, () =>{
    console.log('Levantado')
})