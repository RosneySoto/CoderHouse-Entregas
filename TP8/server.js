const express = require('express');
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');
const { Server: HttpServer } = require('http');
const { Server: SocketServer } = require('socket.io');
const Knex = require('knex').default;
const router = express.Router();


//Conexion SQLite

const op = {
    filename: './DB/ecommerce.sqlite',
    useNullAsDefault: true
  };

const knexSQLite = Knex({
    client: 'sqlite3',
    connection: op,
    useNullAsDefault: true
});

//Conexion MySQL
const options = {
    host: '127.0.0.1',
    user: 'root',
    password: '123456789',
    database: 'websocketapp'
};

const knexMySQL = Knex({
    client: 'mysql2',
    connection: options
});

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

socketServer.on('connection',async (socket) => {
    socket.emit('messages',await readMessage())
    socket.emit('products',await getAll())

    socket.on('new_message',async (mensaje) => {
        // console.log(mensaje);
        saveMessage(mensaje);
        let mensajes = await readMessage();
        socketServer.sockets.emit('messages',mensajes);
    });

    socket.on('new_products',async (product) => {
        await save(product)
        let productos = await getAll() === '' ? '' : await getAll();
        socketServer.sockets.emit('products',productos);
    });
})


app.use('/', router);

httpServer.listen(PORT, () =>{
    console.log(`El TP6 está conectado al Puerto ${PORT}`);
});



//Guardar un nuevo producto
const save = async (producto) => {

    let contenido = await knexMySQL.select('*').from('productos');
    let existe = false;
    contenido.forEach(async (item) => {
        if (item.title === producto.title || item.thumbnail === producto.thumbnail || item.price === producto.price) {
            existe = true;
            console.log('El producto ya existe');
        }
    })
    existe ? console.log('No se pudo cargar el producto porque ya existe') : await knexMySQL('productos').insert([{ title: producto.title, price: producto.price, thumbnail: producto.thumbnail }])

    return producto;
}

//Obtener todos los productos
const getAll = async () => {
    let contenido = await knexMySQL.select('*').from('productos');
    if (contenido === '') {
        console.log('No hay productos agregados');
        let productos = '';
        return productos;
    } else {
        let productos = contenido
        return productos;
    }
}


// Websockets
//SQLITE
// const saveMessage = async (message) => {
//     await knexSQLite('message').insert([{ author: message.author, text: message.text, fyh: message.fyh }]);
// }

// const readMessage = async () => {
//     const contenido = await knexSQLite.select('*').from('message');
//     return contenido;

// }

//MONGO//////
const saveMessage = async (message) => {
    await Model.insert({
        author:{
            nombre: message.nombre,
            apellido: message.apellido,
            edad: message.edad,
            alias: message.alias,
            avatar: message.avatar},
        text: message.text})
}

const readMessage = async () => {
    const contenido = await Model.find();
    console.log(contenido)
    return contenido;

}

const Model = require('./DB/modelMensajes');

//Rutas
// router.get('/',async (req,res) => {
//     let productos = await getAll() === '' ? '' : await getAll();
//     console.log(productos);
//     res.render('formulario',{ productos });
// });

// router.post('/',async (req,res) => {
//     let prod = req.body;
//     if (prod.title === '' || prod.price === '') {
//         res.status(400).send({ error: 'El producto no se pudo cargar, hay campos vacios' });
//     } else {
//         await save(req.body);
//         res.redirect('/');
//     }
// })

/// CONSIGNA 1, ENTREGA 9
const fakerMocks = require('./fakerProducts');
const db = require('./db')
const storeMensaje = require('./storeMensaje.js');
const { measureMemory } = require('vm');


db('mongodb+srv://admin:123456789*@cluster0.ioqsra5.mongodb.net/ecommerce')

router.get('/faker', (req, res) =>{
    const { param = 5} = req.query;
    const mocks = [];
    for (let i = 0; i < param; i++){
        mocks.push(fakerMocks.generarProductos())
    };
    res.send({mocks})
});


//CONSIGNA 2, ENTREGA 9
router.get('/fakerMensajes', (req, res) =>{
    const { param = 10} = req.query;
    const mocks = [];
    for (let i = 0; i < param; i++){
        mocks.push(fakerMocks.generarMensajes())
    };
    res.send({mocks})
});

router.get('/newMensaje', (req, res) =>{
    const { param = 10} = req.query;
    const mocks = [];
    for (let i = 0; i < param; i++){
        mocks.push(storeMensaje.addMensaje())
    };
    res.send({mocks})
});

router.get('/', (req, res) =>{
    const list = storeMensaje.getMessages()
    res.render('formulario', {list})
});

router.post('/',async (req,res) => {
    let mensaje = req.body;
    if (mensaje.nombre === '' || mensaje.apellido === ''|| mensaje.edad ==='' || mensaje.alias ==='' || mensaje.text ==='') {
        res.status(400).send({ error: 'Debe indicar sus datos, hay campos vacios' });
    } else {
        await save(req.body);
        res.redirect('/');
    }
});
