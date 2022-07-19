const socket = io();

socket.on('usuario',(usuario) => {
    document.getElementsByTagName('h1')[0].innerHTML = `Hasta luego ${usuario}`
})


setTimeout(() => {
    window.location.assign('/');
},5000);