const express = require('express');

module.exports = function(server){

    // Api Routes
    const router = express.Router();
    server.use('/',router);

    // Registrando methodos de Rotas para API
    const clienteService = require('../schemas/itemService')
    clienteService.register(router,'/clientes');
}