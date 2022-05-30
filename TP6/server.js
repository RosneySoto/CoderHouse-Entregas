const express = require('express');
const PORT = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const router = require('./routes/routes');
const { engine } = require('express-handlebars');

const app = express();

app.engine(
    'hbs',
    engine({
      extname: '.hbs',
      defaultLayout: 'index.hbs ',
      layoutsDir: __dirname + '/hbs_views',
    //   partialsDir: __dirname + '/public'
    })
);

app.set('views', './hbs_views');
app.set('view engine', 'hbs');

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/', router);
app.get('/', (req, res) =>{
    res.render('main',{nombre: 'jose'})
})

app.listen(PORT, () =>{
    console.log(`El TP6 está conectado al Puerto ${PORT}`);
});

