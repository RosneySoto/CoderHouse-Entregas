const express = require('express');
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const router = require('./routes/routes');
const { engine } = require('express-handlebars');
const { Server: HttpServer } = require('http');
const { Server: SocketServer } = require('socket.io');
const Container = require('./container');

// const products = [];
const messages = [];

const app = express();
app.use(express.static('public'));

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

socketServer.on('connection', async (socket) =>{
    try {
        console.log('Socket Conectado');
        socket.emit('messages', messages);
        socket.emit('products', products);

        socket.on('new_product', async (product) =>{
            Container.products.push(product) //products.push(product);
            const listProducts = await Container.readFile('products.txt')
            socketServer.sockets.emit('products', listProducts);
        });

        socket.on('new_message', async (message) =>{
            messages.push(message);
            const mensajestxt = await Container.readFileMessages();
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

