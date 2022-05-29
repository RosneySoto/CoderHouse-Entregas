const socket = io();

const enviarMensaje = () =>{
    const author = document.getElementById("author").value
    const text = document.getElementById("text").value
    const mensaje = {author, text};
    socket.emit('new_message', mensaje)
    return false;
};

const crearMensajes = (mensaje) =>{
    const {author, text} = mensaje;
    return `
        <div>
            <strong>${author}</strong>
            <em>${text}</em>
        </div>
    `;
};

const agregarMensajes = (mensajes) =>{
    const mensajeFinal = mensajes.map(mensaje => crearMensajes(mensaje)).join(" ");
    document.getElementById('messages').innerHTML = mensajeFinal;
};

socket.on('messages', (messages) => agregarMensajes(messages))