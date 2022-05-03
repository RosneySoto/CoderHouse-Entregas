const fs = require('fs')

//REPASO

//OPERACION NO BLOQUEANTE
fs.writeFile('output.txt', 'ESTE ES EL MENSAJE', () =>{
    console.log('Escritura finalizada')
});

const escrituraConPromesa = (nombreArchivo, contenido) =>{
    return new Promise((resolve, reject) =>{
        fs.writeFile(nombreArchivo, contenido, (error) =>{
            if(error) reject(error)
            else resolve()
        })
    })
}
console.log('Inicio del programa')
escrituraConPromesa('salida.txt', 'EST ES EL MENSAJIT')
    .then(() =>{
        console.log('Escritura finalizada')
    })
console.log('Fin del programa')



//ASINCRONISMO Y CALLBACKS => EJERCICIOS
const mostrarLetras = (mensaje, intervalo, callback) =>{
    let cuentaCaracteres = 0;
    const intervalID = setInterval(() =>{
        console.log(mensaje[cuentaCaracteres]);//en corchetes seria como convertirlo en un array, recorre el string
        cuentaCaracteres++;
        if(cuentaCaracteres == mensaje.length){
            clearInterval(intervalID);
            callback();
        }
    }, intervalo)
};

mostrarLetras('Hola', 1000, () =>{
    console.log('FINALIZADO')
});


//MANEJO DE ARCHIVOS EN JAVASCRIPT
//SINCRONICO

const crearArchivo = () =>{
    try {
        fs.writeFile('fyh.txt', (new Date()).toISOString)
    } catch (error) {
        throw new Error('Hubo un error al crear el archivo')
    } 
}

const leerArchivo = () =>{
    try {
        const contenido = fs.readFileSync('fyh.txt', 'ufts-8');
        console.log(contenido)
    } catch (error) {
        throw new Error('HUbo un error de letcura')
    }
}
try {
    crearArchivo()
    leerArchivo()
} catch (error) {
    console.log(error)
}


//ASINCRONICO
async function leerArchivo() {
    try {
        const archivo = fs.readFile('package.json', 'ufts-8');
        console.log(archivo);
        if(archivo){
            
        }
    } catch (error) {
        throw new Error('Error al leer el package JSON')
    }
}
