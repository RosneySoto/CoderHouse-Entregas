const express = require('express');
const session = require('express-session')
const passport = require('./passport');

const app = express();

app.use(express.json());

app.use(session({
    secret: 'miSecreto',
    saveUninitialized: false,
    resave: true
}))

app.use(passport.initialize());
app.use(passport.session());

app.post('/registro', passport.authenticate('registracion'), (req, res) => {
    console.log(req.user)
    console.log(req.isAuthenticated())
    res.send('Usuario registrado')
});

app.listen(8080, () => {
    console.log('Escuchando!')
})