const express = require('express');
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const router = require('./routes/routes');
const { engine } = require('express-handlebars');
const path = require('path');

const products = [];
const messages = [];

const app = express();
app.use(express.static('public'))
const {Server: HttpServer} = require('http');
const {Server: SocketServer} = require('socket.io');

app.engine(
    'hbs',
    engine({
      extname: '.hbs',
      defaultLayout: 'index.hbs',
      layoutsDir: __dirname + '/public/views/layouts',
    //   partialsDir: __dirname + '/public/views/partials'
    })
);
app.set('views', './public/views/layouts');
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const httpServer = new HttpServer(app);
const socketServer = new SocketServer(httpServer);

socketServer.on('connection', (socket) =>{
    console.log('Socket Conectado');

    socket.emit('messages', messages);
    socket.emit('products', products);

    socket.on('new_product', (product) =>{
        products.push(product);
        socketServer.socket.emit('products', products);
    });

    socket.on('new_message', (message) =>{
        messages.push(message);
        socketServer.socket.emit('message', messages);
    });
});

app.use('/', router);

app.listen(PORT, () =>{
    console.log(`El TP6 está conectado al Puerto ${PORT}`);
});

