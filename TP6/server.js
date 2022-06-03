const express = require('express');
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const router = require('./routes/routes');
const { engine } = require('express-handlebars');
const { Server: HttpServer } = require('http');
const { Server: SocketServer } = require('socket.io');
const Container = require('./container');

const app = express();
app.engine(
    'hbs',
    engine({
      extname: '.hbs',
      defaultLayout: 'index.hbs',
      layoutsDir: __dirname + '/public/views/layouts',
    })
);

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('views', './public/views/layouts');
app.set('view engine', 'hbs');

const httpServer = new HttpServer(app);
const socketServer = new SocketServer(httpServer);

socketServer.on('connection', async (socket) =>{
    try {
        console.log('Socket Conectado');
        socket.emit('messages', await Container.readFileMessages());
        socket.emit('products', await Container.readFile());

        ///// PRODUCTO /////
        socket.on('new_product', async (product) =>{
            Container.products.push(product);
            const listProducts = await Container.readFile('products.txt')
            socketServer.sockets.emit('products', listProducts);
        });

        ///// MENSAJES /////
        socket.on('new_message', async (message) =>{
            console.log(message);
            Container.messages.push(message);
            const mensajestxt = await Container.readFileMessages('messages.txt');
            socketServer.sockets.emit('messages', mensajestxt);
        });
    } catch (error) {
        console.log('Error al conectar socket.io')
    }
    
});

app.use('/', router);

httpServer.listen(PORT, () =>{
    console.log(`El TP6 está conectado al Puerto ${PORT}`);
});

