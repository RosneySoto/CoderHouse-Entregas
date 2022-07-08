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
    const {id, title, price, thumbnail} = product;
    return `
        <tr>
            <td headers="name">${id}</td>
            <td headers="name">${title}</td>
            <td headers="price">${price}</td>
            <td headers="thumbnail">${thumbnail}</td>
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
const enviarMensaje = () => {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const edad = document.getElementById('edad').value;
    const alias = document.getElementById('alias').value;
    const avatar = document.getElementById('avatar').value;
    const text = document.getElementById('txt').value;
    const fyh = String(new Date().toDateString() + ' ' + new Date().toLocaleTimeString())
    const mensaje = { nombre, apellido, edad, alias, avatar, fyh, text };
    socket.emit('new_message', mensaje);
    return false;
}

const crearEtiquetasMensaje = (mensaje) => {
    const { alias, text, fyh, avatar } = mensaje;
    return `
    <div>
        <p style='color:brown'>${fyh}</p>
        <strong style='color:blue'>${alias}</strong>
        <i style='color:green'>${text}</i>
        <i style='color:green'>${avatar}</i>
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