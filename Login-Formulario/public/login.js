const socket = io();

const userName = document.getElementById('username');
const envioSesion = document.getElementById('iniciaSesion');

envioSesion.addEventListener('submit', (e) => {
    e.preventDefault()
});

const goToSignInBtn = document.querySelector('#goToSignIn');

goToSignInBtn.addEventListener('click',() => {
    window.location.assign('/signin');
})