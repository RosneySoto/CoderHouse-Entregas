const express = require('express');
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const { engine } = require('express-handlebars');
const { Server: HttpServer } = require('http');
const { Server: SocketServer } = require('socket.io');
const Knex = require('knex').default;
const router = express.Router();
const fakerMocks = require('./fakerProducts');
const db = require('./db')
const storeMensaje = require('./storeMensaje.js');
const { measureMemory } = require('vm');
const Model = require('./DB/modelMensajes');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const MongoStore = require('connect-mongo')
const { MongoClient } = require('mongodb');
const passport = require('./passport');


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

app.use(passport.initialize());
app.use(passport.session());

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
});


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


//Rutas
router.get('/productos',async (req,res) => {
    let productos = await getAll() === '' ? '' : await getAll();
    res.render('formulario',{ productos });
});

// router.post('/',async (req,res) => {
//     let prod = req.body;
//     if (prod.title === '' || prod.price === '') {
//         res.status(400).send({ error: 'El producto no se pudo cargar, hay campos vacios' });
//     } else {
//         await save(req.body);
//         res.redirect('/');
//     }
// });

db('mongodb+srv://admin:123456789*@cluster0.ioqsra5.mongodb.net/ecommerce')

//MONGO//////
const saveMessage = async (message) => {
    let newMessage = Model(message)
    return await newMessage.save()
}

const readMessage = async () => {
    const contenido = await Model.find();
    return contenido;

};

/*

router.get('/', (req, res, next) =>{
    if(req.isAuthenticated()) return next()
    res.redirect('login')
}, (req, res) => {
    res.render('formulario')
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.get('/signin',async (req,res) => {
    res.render('signin')
})

// router.post('/login',passport.authenticate('login',{ failureRedirect: '/',failureMessage: true }),passport.authenticate('autenticado',{ failureRedirect: '/',failureMessage: true }),async (req,res) => {
//     res.redirect('/formulario/' + req.body.username)
// })
router.post('/login',passport.authenticate('autenticacion'), passport.authenticate('login'), (req, res) => {
    res.send('Usuarui Logeado')
})
router.post('/registro',passport.authenticate('registracion'), (req, res) => {
    console.log(req.isAuthenticated())
    res.send('Usuario Registrado correctamente')
})

// router.post('/login', passport.authenticate('autenticacion', {
//     successRedirect: "/",
//     failureRedirect: "/login"
// }));

router.get('/mensajes', (req, res) =>{
    const list = storeMensaje.getMessages();
    console.log(list)
    res.render('formulario', list)
});

router.get('/logout', async (req, res) => {
    req.session.destroy((err) => {
        console.log(req.session)
    })
    res.render('logout')
});

*/

router.get('/',async (req,res) => {
    res.render('login')
});

router.post('/',passport.authenticate('login',{ failureRedirect: '/signIn',failureMessage: true }),passport.authenticate('autenticacion',{ failureRedirect: '/',failureMessage: true }),async (req,res) => {
    console.log(req.body)
    res.redirect('/formulario')
})

router.get('/logOut',async (req,res) => {
    req.session.destroy((err) => {
        console.log(err);
        console.log('Hasta luego');
    })
    res.render('logOut')
})

router.get('/signIn',async (req,res) => {
    res.render('signin')
})

router.post('/signIn',passport.authenticate('registracion',{ failureRedirect: '/',failureMessage: true }),async (req,res) => {
    res.redirect('/formulario/' + req.body.username)
})



router.post('/formulario', async (req, res) => {
    let userName = req.body.nombre;
    req.session.nombre = userName;
    req.session.request = req.session.request == null ? 1 : req.session.request + 1;
    const mongo = new MongoClient('mongodb+srv://admin:123456789*@cluster0.ioqsra5.mongodb.net/ecommerce');
    await mongo.connect();
    let conectionMongo = mongo
    res.render('formulario')

    socketServer.on('connection',async (socket) => {

        socket.emit('usuario', userName);
        socket.emit('messages',await readMessage())
        socket.emit('products',await getAll())

        socket.on('nuevo_usuario', async (user) => {
            let sesion = await conectionMongo.db('ecommerce').collection('session').find().toArray();
            let usuario = sesion[sesion.length - 1];
            if(usuario === undefined){
                console.log('Sesion finalizada');
                socket.emit('usuario', false)
            } else {
                socket.emit('usuario', userName)
            }
        })
    })
})