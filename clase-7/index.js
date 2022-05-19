const express = require('express')
const app = express();

const autos = [
    {
        id: 1,
        marca: 'Ford',
        color: 'Rojo'
    },
    {
        id: 2,
        marca: 'Chevrolet',
        color: 'Verde'
    }
]

//Devuelve todo la lista
app.get('/', (req, res) =>{
    res.json(autos)
})

//QUERY = www.localhost8080/autos?marca=Ford (TIENE SIGO DE PREGUNTA)
app.get('/autos', (req, res) =>{
    const marca = req.query.marca;
    if(marca) res.json(autos.filter(auto => auto.marca == marca));
    else res.json(autos)
})

//PARAMETRO = www.localhost8080/autos/1
app.get('/autos/:autoId', (req, res) =>{
    const idAuto = req.params.autoId;
    const autoEncontrado = autos.find(auto => auto.id == idAuto);
    if(!autoEncontrado) res.status(404).send('El auto no existe')
    else res.json(autoEncontrado)
})

app.listen(8080, () =>{
    console.log('Servidor levantado en el puerto 8080')
})