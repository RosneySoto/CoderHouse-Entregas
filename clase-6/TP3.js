const express = require('express');
const fs = require('fs');
const app = express();

class Contenedor{
    constructor(archivo){
        this.archivo = archivo
    };

    async getProductos(){
        try {
            const todos = await fs.promises.readFile(this.archivo, 'utf-8');
            const contenido = JSON.parse(todos);
            // console.log(contenido)
            return contenido;
        } catch (error) {
            console.log('Error al mostrar todos los productos')
            return []
        }
    }
}

const productos = new Contenedor('productos.txt');
app.get('/', (req, res) =>{
    res.send(productos.getProductos())
})



app.listen(8080, () =>{
    console.log('Escuchando en el puerto 8080')
})

// USAR UN MAP.RANDOM con el indice del array para que devuelva