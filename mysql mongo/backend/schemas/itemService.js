const Cliente = require('./cliente');

// Create REST API, adds CRUD
Cliente.methods(['get','post','put','delete'])

Cliente.updateOptions({new:true, runValidators: true})

module.exports = Cliente