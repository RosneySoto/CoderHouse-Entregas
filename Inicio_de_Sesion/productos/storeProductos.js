const knexMySQL = require('../DB_MySQL/mysql_knex');
const Model = require('../DB/modelProductos');

class ContenedorProducto {

    static saveProducts = async (producto) => {
        const newProduct = Model(producto);
        return await newProduct.save()
    };

    static readProducts = async () => {
        const result = await Model.find();
        return result;
    };

    static getProducts(){
        const listProductos = Model.find();
        return listProductos;
    };

    static addProducts(producto) {
        const productoNuevo = Model({
            producto: producto.producto,
            precio: producto.precio,
            fotoProd: producto.fotoProd
        })
        return productoNuevo.save()
    }
    /*
    CODIGO Y CONEXION PARA MYSQL CON KNEX

        //Guardar un nuevo producto
    static save = async (producto) => {

        let contenido = await knexMySQL.select('*').from('productos');
        let existe = false;
        contenido.forEach(async (item) => {
            if (item.title === producto.title || item.thumbnail === producto.thumbnail || item.price === producto.price) {
                existe = true;
                console.log('El producto ya existe');
            }
        })
        existe ? console.log('No se pudo cargar el producto porque ya existe') : await knexMySQL('productos').insert([{ title: producto.title, price: producto.price, thumbnail: producto.thumbnail }])

        return producto;
    }
    //Obtener todos los productos
    static getAll = async () => {
        let contenido = await knexMySQL.select('*').from('productos');
        if (contenido === '') {
            console.log('No hay productos agregados');
            let productos = '';
            return productos;
        } else {
            let productos = contenido
            return productos;
        }
    }
    */
}

module.exports = ContenedorProducto;





