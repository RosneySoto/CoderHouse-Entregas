const { match } = require("assert");
const moment = require("moment");

//EJERCICIO 1
/*
const resultado = {};

for (let i = 0; i < 10000; i++){
   const numeroAleatorio = ( Math.floor(Math.random()*20))+1
    if(resultado[numeroAleatorio]) resultado[numeroAleatorio]++;
    else resultado [numeroAleatorio] = 1
}
*/

//EJERCICIO 2
/*
const productos = [
    {
        id: 1,
        nombre: 'Calculadora',
        precio: 235.70,
    },
    {
        id: 2,
        nombre: 'Regla',
        precio: 100.50,
    },
    {
        id: 3,
        nombre: 'Lapiz',
        precio: 15,
    }
]
*/

//EJERCICIOS 3
const fechaHoy = moment();
const fechaNacimiento = moment('1992-09-15')

console.log('hoy es', fechaHoy.format('DD/MM/YYYY'));
console.log('Naci el', fechaNacimiento.format('DD/MM/YYY'));
console.log('Desde que naci han pasado ', fechaHoy.diff(fechaNacimiento, 'years'), 'años')
console.log('Desde que naci han pasado ', fechaHoy.diff(fechaNacimiento, 'days'), 'dias')