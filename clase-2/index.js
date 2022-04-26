//FUNCIONES ANONIMAS => SE PUEDE ENCERRAR EN PARENTESIS TODA LA FUNCION, NO LLEVA NOMBRE Y NO SE USA SIEMPRE
//OPCION 1
(function(numero){
    console.log(numero+1)
})(20)
//OPCION 2
let miNumero = [2,3,4];
miNumero = miNumero.map(function(a){
    return a*2
})
console.log(miNumero)

//ARROW FUNCTION  O FUNCIONES FLECHA =>

//SCOPE
// Indica el ambito o alcen actual de ejecucion de un valor

//CLOSURE
// Es un tipo especial de objeto que combina dos cosas: una funcion y el entorno en que se creo la misma

function mostrarLista(lista){
    if(lista.length == 0) {
        console.log('Lista vacia')
    } else {
        console.log(lista)
    } 
}
mostrarLista([])
mostrarLista([1,2,3,4])

function crearMulti(multiplicador){
    return function(numero){
        return numero * multiplicador
    };
};

//CLASES
//1
class Contador {

    static cuentaTotal = 0;

    constructor(nombre){
        this.nombre = nombre,
        this.conteo = 0
    }

    aumentarCuenta(cantiad){
        this.conteo = this.conteo + cantiad;
        Contador.cuentaTotal = Contador.cuentaTotal + cantiad;
    }
}

const contadorUno = new Contador ('pepe')
const contadorDos = new Contador ('jaime')
contadorUno.aumentarCuenta(50);
contadorDos.aumentarCuenta(20)
console.log(contadorUno)
console.log(contadorDos)
console.log(Contador.cuentaTotal);

//2
class Cliente{
    constructor(nombre, apellido){
        this.nombre = nombre,
        this.apellido = apellido;
    }

    imprimirNombreCompleto(){
        console.log(this.nombre, this.apellido)
    }
}

const ricardoFerrari = new Cliente ('Ricardo', 'Ferrari')
ricardoFerrari.imprimirNombreCompleto()


///////////////////////////////////
const productos = [
    {
        nombre: 'manzana',
        color: 'roja'
    }, 
    {
        nombre: 'manzana',
        color: 'verde'
    },
    {
        nombre: 'banana',
        color: 'amarillo'
    }
]

const mascotas = ['perro', 'gato','loro', 'tortuga']

console.log(mascotas + '\n')
console.log(mascotas[1] + '\n')
console.log(productos)