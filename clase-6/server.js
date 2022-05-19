// const http = require('http');

// const server = http.createServer((req, res) =>{
//     const hora = (new Date()).getHours();
//     if(hora >= 6 && hora <= 12) res.end('Buenos dias!')
//     else if (hora >= 13 && hora <= 19) res.end('Buenas tardes');
//     else res.end('Buenas noches')
// });

// const connecServer = server.listen(8080, () =>{
//     console.log(`Servidor levantado en el puerto ${connecServer.address().port}`)
// })

const express = require('express');
const moment = require('moment');
const app = express()

let visitas = 0;

app.get('/', (req, res) =>{
    res.end('<h1 style="color:blue">Bienvenido al servidor express</h1>')
})

app.get('/visitas', (req, res, next) =>{
    visitas++;
    res.send(`La cantidad de visitas es ${visitas}`)
})

app.get('/fyh', (req, res, next) =>{
    res.send({fyh: moment().format("DD  /MM/YYYY HH:mm:ss")})
})

app.listen(8080, () =>{
    console.log('Servidor levantado')
})