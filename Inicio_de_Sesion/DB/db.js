const db = require('mongoose');
db.Promise = global.Promise;

async function connect(url){
    await db.connect(url, {
        useNewUrlParser: true,
    })
    .then(()=> console.log('[db] Conectada con exito'))
    .catch(err => console.log('[db]', err));
}

module.exports = connect;