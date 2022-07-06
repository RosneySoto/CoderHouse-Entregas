var admin = require("firebase-admin");

var serviceAccount = require("./coderbacken.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "http://coderbackend-44524.firebaseio.com"
});

const probar = async () =>{
    const db = admin.firestore()
    const query = db.collection("colores");

    // 1.-INGRESAR NUEVOS COLORES
    // const red = query.doc('red');
    // await red.create({nombre: "red"});

    // const gren = query.doc('gren');
    // await gren.create({nombre: "gren"});

    // const blue = query.doc('blue');
    // await blue.create({nombre: "blue"});

    // console.log('Documentos creados')

    // 2.- LISTAR TODOS LOS ELEMENTOS
    // const result = (await query.get()).docs;
    // console.log(result.map(resultado => resultado.data()));
    
    //3.- MODIFICAR DATOS
    // const doc = query.doc('blue');
    // await doc.update({nombre: 'navy'})
    // console.log('Nombre modificado')

    //4.- BORRAR EL COLOR GREN
    // const doc = query.doc('gren')
    // await doc.delete();
    // console.log('Color borrado')
};

probar();