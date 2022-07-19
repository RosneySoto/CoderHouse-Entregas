const socket = io();

const userName = document.getElementById('userName');
const envioSesion = document.getElementById('iniciaSesion');

envioSesion.addEventListener('submit', (e) => {
    e.preventDefault()
});