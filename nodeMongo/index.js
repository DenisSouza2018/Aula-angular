const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000; //porta padrão

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));
app.use('/', router); // requisições que chegam na raiz devem ser enviadas para o router

//inicia o servidor
app.listen(port);
console.log('API funcionando!');

// Mongo
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://denis:123@cluster0-ux2l5.mongodb.net/test?retryWrites=true&w=majority";
const database = "teste";
const name_collection = "usuario";

function consulta(res) {

    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        var dbo = db.db(database);

        /*Return only the documents with the address "Park Lane 38":*/
        dbo.collection(name_collection).find().toArray(function (err, results) {
            if (err)
                res.json(err);
            else
                res.json(results);

            
         

        });
    });

}

//Retorna todos clientes no banco
router.get('/clientes', (req, res) => {
    consulta(res);
})

