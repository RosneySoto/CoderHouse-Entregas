const Knex = require('knex').default;

//Conexion SQLite
const op = {
    filename: './DB_MySQL/ecommerce.sqlite',
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