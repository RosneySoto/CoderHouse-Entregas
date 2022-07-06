const norm = require('normalizr');
const empresa = require('./txt')
const print = require('./print')

const gerenteSchema = new norm.schema.Entity('gerentes');
const posicionSchema = new norm.schema.Entity('posicion');
const empleadoSchema = new norm.schema.Entity('empleados', {
    gerente: gerenteSchema,
    posicion: posicionSchema
}) 

const normailzaDB = norm.normalize(empresa, [empleadoSchema]);
print(normailzaDB)


