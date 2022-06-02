const socket = io();

//PRODUCTO
const enviarProducto = () => {
    const title = document.getElementById("title").value;
    const price = document.getElementById("price").value;
    const thumbnail = document.getElementById("thumbnail").value;
    const product = {title, price, thumbnail};
    title = '';
    price = '';
    thumbnail = '';
    socket.emit('new_product', product);
    return false;
};

const crearProducto = (product) =>{
    const {title, price, thumbnail} = product;
    return `
        <tr>
            <td headers="id">${id}</td>
            <td headers="name">${title}</td>
            <td headers="price">${price}</td>
            <td headers="thumbnail">${thumbnail}width="50px" height="50px" alt={{url}}></td>
        </tr>
    `
};

const agregarProductos = (products) =>{
    const productFinal = products.map(product => crearProducto(product)).join(" ");
    document.getElementById('products').innerHTML = productFinal;
};

socket.on('products', (products)=>{
    return agregarProductos(products)
});

//MENSAJES
const enviarMensaje = (e) => {
    const author = document.getElementById('author').value;
    const text = document.getElementById('text').value;
    const fyh = String(new Date().toDateString() + ' ' + new Date().toLocaleTimeString())
    const mensaje = { author,text,fyh };
    socket.emit('new_message',mensaje);
    return false;
}

const crearEtiquetasMensaje = (mensaje) => {
    const { author,text,fyh } = mensaje;
    return `
    <div>
        <strong style='color:blue'>${author}</strong>
        <i style='color:green'>${text}</i>
        <p style='color:brown'>${fyh}</p>
    </div>
    `;
}

const agregarMensajes = (mensajes) => {
    if (mensajes !== '') {
        const mensajesFinal = mensajes.map(mensaje => crearEtiquetasMensaje(mensaje)).join(' ');
        document.getElementById('messages').innerHTML = mensajesFinal;
    }
}

socket.on('messages',(messages) => agregarMensajes(messages));