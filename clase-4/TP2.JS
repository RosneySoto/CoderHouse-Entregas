const fs = require('fs')

class Contenedor{

   id = 1;

    constructor(nombreArchivo){
        this.nombreArchivo = nombreArchivo;
    };

    async save(obejto){
        obejto['id'] = this.id; //Agrego la propiedad al objeto
        this.id++;
        const contenido = JSON.parse(await fs.promises.readFile(this.nombreArchivo));
        contenido.push(obejto);
        await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(contenido));
    };

    async getAll(){
        try {
            const contenidoCrudo = await fs.promises.readFile(this.nombreArchivo, 'utf-8');
            const contenido = JSON.parse(contenidoCrudo);
            return contenido;
        } catch (error) {
            console.log('Error al listar', error);
            return [];
        };
    };

    async getById(id){
        try {
            const contenidoTotal = await fs.promises.readFile(this.nombreArchivo, 'utf-8');
            const contenido = JSON.parse(contenidoTotal);
            const contenidoById = contenido.find((i) => i.id == id);
            return contenidoById;
        } catch (error) {
            console.log('Hubo un error al buscar por ID', error); 
        };
    };

    async deleteAll(){
        try {
            await fs.promises.truncate(this.nombreArchivo, 0)
            return 'Se eliminaron correctamente todos los productos'
        } catch (error) {
            console.log(error)
        };
    };

    async deleteById(id){
        try {
            const contenido = await fs.promises.readFile(this.nombreArchivo, 'utf-8');
            const conten = JSON.parse(contenido);
            const producto = conten.map((i) => i.id == id);
            const resultado = conten.indexOf(producto);
            conten.splice(resultado, 1);
            await fs.promises.writeFile(this.nombreArchivo, JSON.stringify(conten, null));
            return 'Producto eliminado'

        } catch (error) {
            console.log('Hubo un error al eliminar el producto con ID ', id)
        }
    } 
}

const crearArhivo = (nombreArchivo, contenido) =>{
    return new Promise((resolve, reject) =>{
        fs.writeFile(nombreArchivo, contenido, (error) =>{
            if(error) reject(error)
            else resolve()
        })
    })
}
crearArhivo('productos.txt', '[]')
    .then(() =>{
        console.log('Se creo correctamente el archivo')
    })

const mostarProductos = async () =>{
    const productos = new Contenedor('productos.txt');
    //MOSTRAR TODOS LOS PRODUCTOS
        const contenido = await productos.getAll();
        console.log(contenido);
    //MOSTRAR POR ID
        // const bucarPorID = await productos.getById(2);
        // console.log(bucarPorID)
    //GUARDAR UN PRODUCTO
        await productos.save({title: 'Cif', price: 28.86, thumbnail: 'cualquiera'});
        console.log(await productos.getAll());
    //ELIMINAR TODOS LOS ARCHIVOS
        // const eliminar = await productos.deleteAll()
        // console.log(eliminar)
    //ELIMINAR POR ID
        // const eliminar = await productos.deleteById(1);
        // console.log(eliminar)

};

mostarProductos();