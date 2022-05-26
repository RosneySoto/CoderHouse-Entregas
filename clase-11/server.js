const express = require('express');
const { Server: HttpServer } = require('http')
const { Server: IOServer } = require('socket.io');

const app = express();

app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/public/index.html')
})

const httpServer = new HttpServer(app)
const ioServer = new IOServer(httpServer)

ioServer.on('connection', (socket) =>{
    console.log('Se conecto usuario')
    // socket.emit('Bienvenido', 'Bievenido usuario')
    socket.on('mensaje', (mensaje) =>{
        
    })
})

httpServer.listen(3000, ()=>{
    console.log('Sevidor levantado')
})