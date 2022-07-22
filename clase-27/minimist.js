const minimist = require('minimist');

const argumentos = process.argv.slice(2);
const parsear = minimist(argumentos, { 'm': 'modo', 'p': 'port', default: {debug: false, port: 0, modo: 'produccion' } })
const {debug, port, modo} = parsear
console.log({parsear})