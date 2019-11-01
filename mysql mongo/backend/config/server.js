// Link Tutorial : https://medium.com/@thiagoluiz.nunes/rest-api-com-node-js-express-and-mongodb-3967c2cb25b7
// Constante que irá armazenar o valor da porta
const port = 3000;

const bodyParser = require('body-parser');
const express = require('express');
const server = express();

server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

server.listen(process.env.PORT || port, function(){
    console.log('Listening on');
})

module.exports = server;

