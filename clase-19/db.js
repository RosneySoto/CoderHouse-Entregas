const mongoose = require('mongoose');

async function CRUD(){
    try {
        const URL = 'mongodb://localhost:27017/ecommerce'
        let rta = await  mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Base de datos conectada')
    } catch (error) {
        console.error(error)
    }
}