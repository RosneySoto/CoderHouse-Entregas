const { MongoClient } = require('mongodb');

const ejecutar = async () =>{
    const mongo = new MongoClient("mongodb+srv://admin:123456789*@cluster0.ioqsra5.mongodb.net/?retryWrites=true&w=majority")
    await mongo.connect();
    const result = await mongo.db("ecommerce").collection("usuarios").find().toArray();
    console.log(result)

}

ejecutar();