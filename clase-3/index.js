//FUNCIONES - CALLBACKS - PROMESAS

console.group('FUNCIONES')
    //Funciones
    function sumarDosNumeros(numUno, numDos){
        const resutl = numUno + numDos
        return resutl;
    };
    console.log(sumarDosNumeros(4,3))


    /**
     * SUMA DOS NUMEROS Y DEVUELVE EL RESULTADO
     * @param {number} numUno Primer numero
     * @param {number} numDos Segundo numero
     * @returns {number} Es el resultado de la suma 
     */
    function sumarDosNumerosDoc(numUno, numDos){
        const resutl = numUno + numDos
        return resutl;
    };
    console.log(sumarDosNumerosDoc(5,9))

    //FUNCION ANONIMA E INVOCADA INMEDIATAMENTE
    console.log(
        (function(numeroUno, numeroDos){
            let resutl = numeroUno + numeroDos;
            return resutl
        })(10, 20)
    );

    const sumarDosNumerosObjetos = function(n1, n2){
        const resultado = n1 + n2;
        return resultado
    };


    //ARROW FUNCTION
    const sumarDosNumerosObjetosArrow = (n1, n2) => {
        const resultado = n1 + n2;
        return resultado
    };

    //Si tiene un solo argumento, podemo obviar los parentesis
    const imprimirMsj = mensjae => {
        console.log(mensjae)
    };

    //si tiene una sola instruccion podemos obviar las llaves, se conoce como devolucion implicita
    const imprimirMsjPantalla = mensaje => console.log(mensaje);

    //Devolucion implicita
    const sumaDevolImplici = (n1, n2) => n1 + n2;


    /////// STATIC
    class Fabrica {
        //Una variable estatica es algo que compartirian todas las instancias de Fabrica

        static cantidadAutos = 0;
        
        crearAuto(){
            //codigo 
            Fabrica.cantidadAutos = Fabrica.cantidadAutos + 1;
        }
    }
console.groupEnd()

console.group('CALLBACKS')
    /// CALLBACKS
    //Son funciones con parametros, una funcion que puede recibir otra funcion como parametro.

                            //funcion      //saludar
    function ejecutarFuncion(funcionEjecutar, argumento){
        funcionEjecutar(argumento);
    };

    function saludar(nombre){
        console.log(`Hola ${nombre}`)
    };
                //funcion  //saludar
    ejecutarFuncion(saludar, 'Alumnos')
console.groupEnd();



const suma = (num1, num2) => num1 + num2
const resta = (num1, num2) => num1 - num2
const multiplicacion = (num1, num2) => num1 * num2
const division = (num1, num2) => num1 / num2
const modulo = (num1, num2) => num1 % num2

const operacion = (funcion, arg1, arg2) => funcion(arg1, arg2);

console.log(operacion(suma,5,5))
console.log(operacion(resta, 10,5))
console.log(operacion(multiplicacion,5,5))
console.log(operacion(division, 25,5))
console.log(operacion(modulo,12,5))



console.group('PROMESAS////')
    //Es una declaracion de intencion que espermos que complete, se cumpla o se rechace

    function dividir(dividendo, divisor){
        return new Promise((resolve, reject) =>{
            if(divisor == 0) reject('No se puede dividir por cero')
            else resolve(dividendo / divisor);
        });
    };
    dividir(4,2)
        .then((resultado) => console.log(resultado))
        .catch((error) => console.log('ERROR: ', error))
        .finally(() => console.log('Finally'))
    //////////

    function multiplicarPorDos(numero){
        return new Promise((resolve, reject) =>{
            resolve(numero * 2);
        });
    };
    function multiplicarPortres(numero){
        return new Promise((resolve, reject) =>{
            resolve(numero * 3);
        });
    };
    function hacerMulti(){
        return multiplicarPorDos(4).then((valor)=>{
            return multiplicarPortres(valor)
        });
    };
    hacerMulti().then((resultado) => console.log(resultado))
console.groupEnd()


console.group('ASINCRONIA/////')

console.groupEnd()


console.group('SET-TIMEOUT y SET- INTERVAL/////')
    //Determina cuantos cada cuantos segundos se ejecuta una funcion
    const imprimir = () => console.log('termiando')
    setTimeout(imprimir, 3000) 
    setInterval(imprimir, 1000)

    const timerId = setTimeout(imprimir, 1000)
    setInterval(()=>{
        clearInterval(timerId);
    }, 5000);
console.groupEnd()