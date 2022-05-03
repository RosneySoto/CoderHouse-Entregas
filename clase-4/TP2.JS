const fs = require('fs')

// class Contenedor{

//     static productos = [
//         {
//             id: 0,
//             tilte: '',
//             price: 0,
//             imagen: ''
//         }
//     ]

//     constructor(producto){
//         this.producto = producto
//     };
// }
// const producto1 = new Contenedor([{id: 1, title: 'Mani', price: '120', image: 'Esto es una imagen'}])

const created = () =>{
    try {
        fs.writeFile('prueba.txt', 'modelo')
    } catch (error) {
        throw new Error('Hubo un error al crear el archivo')
    }
}

try {
    created()
} catch (error) {
    console.log(error)
}

//     async function saveObject (nombreArchivo, producto){
//         try {
//             fs.writeFile(nombreArchivo, producto, (error)=>{
//                 if(error){
//                     console.log('Hubo un error al crear el producto')
//             }
//             else {
//                 this.productos.push(producto)
//             }
//         });
//     } catch (error) {
//         throw new Error('Error al crear el Archivo')
//     }
    
// };
// saveObject('prueba.txt', producto1)
//         .then(() =>{
//         console.log('Se guardo correctamente')
// })
// console.log('Fin')