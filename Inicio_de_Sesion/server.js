const express = require('express');
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');
const { Server: HttpServer } = require('http');
const { Server: SocketServer } = require('socket.io');
const db = require('./DB/db')
const storeMensaje = require('./mensajes/storeMensaje.js');
const storeProducto = require('./productos/storeProductos')
const { measureMemory } = require('vm');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const router = require('./mensajes/routes')

db('mongodb+srv://admin:123456789*@cluster0.ioqsra5.mongodb.net/ecommerce')

const app = express();

app.use(cookieParser());
app.use(session({
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://admin:123456789*@cluster0.ioqsra5.mongodb.net/ecommerce'
    }),
    secret: 'jose',
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 60000
    }
}));

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

socketServer.on('connection',async (socket) => {
    socket.emit('messages',await storeMensaje.readMessage())
    socket.emit('products',await storeProducto.readProducts())

    socket.on('new_message',async (mensaje) => {
        // console.log(mensaje);
        storeMensaje.saveMessage(mensaje);
        let mensajes = await storeMensaje.readMessage();
        socketServer.sockets.emit('messages',mensajes);
    });

    socket.on('new_products',async (product) => {
        await storeProducto.save(product)
        let productos = await storeProducto.readProducts() === '' ? '' : await storeProducto.readProducts();
        socketServer.sockets.emit('products',productos);
    });
});

app.use('/', router);

httpServer.listen(PORT, () =>{
    console.log(`El TP6 está conectado al Puerto ${PORT}`);
});

router.get('/', (req, res) => {
    res.render('login')
})

router.get('/logout', async (req, res) => {
    req.session.destroy((err) => {
        console.log(req.session)
    })
    res.render('logout')
});