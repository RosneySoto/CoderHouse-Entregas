const express = require('express');
const app = express();
const session = require('express-session')
const cp = require('cookie-parser')

app.use(express.json())
app.use(cp())

app.use(session({
    secret: 'jose',
    saveUninitialized: false,
    resave: true
}))

const usuarios = [{usuario: 'jose', password: 'coder'}];

const requireAutenticacion = (req, res, next) =>{
    if(req.session.nombreUsuario) return next();
    res.status(401).send('No estas autenticado')
}

const rechazaAutenticado = (req, res, next) =>{
    if(req.session.nombreUsuario) return res.send('Ya estas autenticado')
}

app.post('/login', rechazaAutenticado, (req, res) =>{
    const {usuario, password} = req.body
})



//formulario
const addUser = (user)=> {
    const registro = []
    const newUser = registro.push(user)
    return newUser
};


//Rutas
app.post('/', (req, res) =>{
    const nuevo = req.body;
    const alta = addUser(nuevo)
    console.log(alta)
    res.send(`Bienvenido ${alta}`)
})

app.listen(8080, () =>{
    console.log('escuchandoo')
})