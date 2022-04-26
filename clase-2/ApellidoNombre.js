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

    // 1 //
    getUsuario(){
        console.log("******************** 1 ********************")
        console.log(`${this.nombre} ${this.apellido} ${JSON.stringify(this.libros)} ${this.mascotas}`)
        return `${this.nombre} ${this.apellido} ${this.libros} ${this.mascotas}`
    };
    
    // 2 //
    getFullName() {
        console.log("******************** 2 ********************")
       console.log(`${this.nombre} ${this.apellido}`)
       return `${this.nombre} ${this.apellido}` 
    };

    // 3 //
    addMascota(mascota){
        console.log("******************** 3 ********************")
        if(!mascota){
            console.log('Debe ingresar una mascota')
        }else{
            this.mascotas.push(mascota)
        }
        for (let i = 0; i < this.mascotas.length; i++) {
            console.log(`${this.mascotas[i]}`);
            // return `${this.mascotas[i]}`
        }
    }

    // 4 //
    countMascotas(){
    console.log("******************** 4 ********************")
        this.conteo = this.conteo + this.mascotas.length;
        Usuario.cuentaTotal = Usuario.cuentaTotal + this.mascotas.length;
     console.log(`Tiene ${Usuario.cuentaTotal} mascotas`);
    }

    // 5 //
    addBook(book){
        console.log("******************** 5 ********************")
        if(!book){
            console.log('Debe agregar un libro')
        }else{
            this.libros.push(book)
        }
        // console.log(book)
        // return this.libros.map((libro) => libro)

        for (let i = 0; i < this.libros.length; i++) {
            // console.log(`${JSON.stringify(this.libros[i])}`);
            console.log(this.libros[i])
        }
    }

    // 6 //
    getBookNames(){
        console.log("******************** 6 ********************")
        // return libros.map((a) => a.nombre)
        console.log(this.libros.map((a) => a.nombre))
    }
    
};

const usuario1 = new Usuario (
    'Jose', 'Alvarez', [{nombre: 'Harry Potter', autor: 'J. K. Rowling'}, {nombre: 'Tearapia', autor: 'Sebastian Fitzek'}],
    ['perro', 'gato']);

// 1 ////////////////////////////////////////////////////////////////
usuario1.getUsuario();

// 2 ////////////////////////////////////////////////////////////////
usuario1.getFullName();

// 3 ////////////////////////////////////////////////////////////////
usuario1.addMascota(['perico', 'toruga']);

// 4 ////////////////////////////////////////////////////////////////
usuario1.countMascotas();

// 5 ////////////////////////////////////////////////////////////////
usuario1.addBook([{nombre: 'El señor de las moscas', autor: 'William Golding'},
    {nombre: 'Fundacion', autor: 'Isaac Asimov'}])

// 6 ////////////////////////////////////////////////////////////////
usuario1.getBookNames()