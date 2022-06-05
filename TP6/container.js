const fs = require('fs');

class Container {

    static ID = 0;
    static products = [];
    static messages = [];

    static generarteID(producto){
        return producto.id = ++Container.ID;
    };

    static writeMessages = async (mensaje) =>{
        try {
            return await fs.promises.writeFile('messages.txt', JSON.stringify(mensaje));
        } catch (error) {
            console.log('[ERROR CONTAINER WRITEFILE MESSAGES]', error);
        };
    };

    static writeProducts = async (producto) =>{
        try {
            return await fs.promises.writeFile('products.txt', JSON.stringify(producto));
        } catch (error) {
            console.log('[ERROR CONTAINER WRITEFILE]', error);
        };
    };

    static readFileMessages = async () =>{
        try {
            const result = await fs.promises.readFile('messages.txt', 'utf-8');
            return JSON.parse(result);
        } catch (error) {
            console.log('[ERROR CONTAINER READFILE MESSAGES]', error);
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

    async saveMessages(message){
        // try {
        //     const listMensajes = Container.messages;
        //     listMensajes.push(message);
        //     await Container.writeMessages(listMensajes);
        //     const result = await Container.readFileMessages();
        //     return result;
        // } catch (error) {
        //     console.log('[ERROR CONTAINER SAVE MESSAGES]')
        // }

        let json = '';
        let contenido = fs.readFileSync('messages.txt','utf-8');
        if (contenido === '') {
            json = JSON.stringify([message]);
            fs.writeFileSync('messages.txt',json);
        } else {
            let messages = JSON.parse(contenido);
            json = JSON.stringify([...messages,message]);
            fs.writeFileSync('messages.txt',json);
        };
    };

    async getAllMessage(){
        try {
            return await Container.readFileMessages();
        } catch (error) {
            console.log('[ERROR READ FILE MESSAGES]', error);
        };
    };
};

module.exports = Container;