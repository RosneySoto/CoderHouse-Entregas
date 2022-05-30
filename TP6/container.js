const fs = require('fs');

class Container {

    static ID = 0;
    static products = [];

    static generarteID(producto){
        return producto.id = ++Container.ID;
    };

    static writeProducts = async (producto) =>{
        try {
            return await fs.promises.writeFile('products.txt', JSON.stringify(producto));
        } catch (error) {
            console.log('[ERROR CONTAINER WRITEFILE]', error);
        };
    };

    static readFile = async () =>{
        try {
            const result = await fs.promises.readFile('products.txt', 'utf-8');
            return JSON.parse(result);
        } catch (error) {
            console.log('[ERROR CONTAINER READFILE]', error);
        };
    };

    async getAll(){
        try {
            return await Container.readFile();
        } catch (error) {
            console.log('[ERROR READ FILE]', error);
        };
    };

    async save(product){
        try {
            const id = ++Container.ID;
            const listProducts = Container.products;
            product.id = id;
            listProducts.push(product);
            await Container.writeProducts(listProducts);
            const products = await Container.readFile();
            return products;
        } catch (error) {
            console.log('[ERROR CONTAINER SAVE PRODUCT]');
        };
    };


};

module.exports = Container;