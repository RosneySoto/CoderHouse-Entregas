const socket = io();

const enviarProducto = () => {
    const title = document.getElementById("title").value;
    const price = document.getElementById("price").value;
    const thumbnail = document.getElementById("thumbnail").value;
    const product = {title, price, thumbnail};
    socket.emit('new_product', product);
    return false;
};

const crearProducto = (product) =>{
    const {title, price, thumbnail} = product;
    return `
        <di>
            <em>${title}</em>
            <em>${price}</em>
            <em>${thumbnail}</em>
        </div>
    `
};

const agregarProductos = (products) =>{
    const productFinal = products.map(product => crearProducto(products)).join(" ");
    document.getElementById('products').innerHTML = productFinal;
};

socket.on('products', (products)=>{
    return agregarProductos(products)
});