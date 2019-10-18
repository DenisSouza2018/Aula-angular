var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://denis:123@cluster0-ux2l5.mongodb.net/test?retryWrites=true&w=majority";

const database = "teste";
const name_collection = "usuario";

// Criando database e schema
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(database);
    //Create a collection name "usuarios":
    dbo.createCollection(name_collection, function (err, res) {
        if (err) throw err;
        console.log("Collection created!");
        db.close();
    });
});

// inserindo no database
MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db(database);

    var myobj = [
        {
            nome: "Denis Souza",
            cpf: 20202,
            endereco: "Rua Silva",
        }, {
            nome: "Amanda",
            cpf: 20202,
            endereco: "Rua Silva",
        }, {
            nome: "Erro",
            cpf: 11111,
            endereco: "Rua Silva",
        }, {
            nome: "Pedro",
            cpf: 999,
            endereco: "Rua Silva",
        }, {
            nome: "Barbara",
            cpf: 888,
            endereco: "Rua Silva",
        }
    ];


    dbo.collection(name_collection).insert(myobj, function (err, res) {
        if (err) throw err;
        console.log("1 document inserted");

    })



    db.close();


});