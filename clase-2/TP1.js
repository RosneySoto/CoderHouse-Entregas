class Usuario {

    static libros = [
        {
            nombre: '',
            autor: ''
        }
    ];
    
    static mascotas = [''];

    static cuentaTotal = 0;

    constructor(nombre, apellido, libros, mascotas){
        this.nombre = nombre,
        this.apellido = apellido,
        this.libros = libros,
        this.mascotas = mascotas
        this.conteo = 0
    };

    getFullName() {
        console.log("******************** 2 ********************")
        return `El usuario es: ${this.nombre} ${this.apellido}` 
    };

    addMascota(mascota){
        console.log("******************** 3 ********************")
        if(!mascota){
            return 'Debe ingresar una mascota';
        }else{
            this.mascotas.push(mascota)
            return `Se agrego la mascota: ${mascota} correctamente`;
        }
    };

    countMascotas(){
        console.log("******************** 4 ********************")
            return `el usuario tiene: ${this.mascotas.length} mascotas`;
    };

    addBook(book){
        console.log("******************** 5 ********************")
        if(!book){
            console.log('Debe agregar un libro')
        }else{
            this.libros.push(book)
            return `Se agrego el libro correctamente`;
        }
    };

    // 6 //
    getBookNames(){
        console.log("******************** 6 ********************")
        return this.libros.map((n) => n.nombre)
    };
    
};

const usuario1 = new Usuario (
    'Jose', 'Alvarez', [{nombre: 'Harry Potter', autor: 'J. K. Rowling'}, {nombre: 'Tearapia', autor: 'Sebastian Fitzek'}],
    ['perro', 'gato']);

// 1 ////////////////////////////////////////////////////////////////
console.log(usuario1.getFullName());

// 2 ////////////////////////////////////////////////////////////////
console.log(usuario1.addMascota(['toruga']));

// 3 ////////////////////////////////////////////////////////////////
console.log(usuario1.countMascotas());

// 4 ////////////////////////////////////////////////////////////////
console.log(usuario1.addBook([{nombre: 'El señor de las moscas', autor: 'William Golding'},
    {nombre: 'Fundacion', autor: 'Isaac Asimov'}]));

// 5 ////////////////////////////////////////////////////////////////
console.log(usuario1.getBookNames());