const restfull = require('node-restful');
const mongoose = restfull.mongoose;

const clienteSchema = new mongoose.Schema({
    id: {type: Number, require: true},
    nome: {type: String, require: true},
    cpf: {type: String, require: true}
    
})

module.exports = restfull.model('Cliente',clienteSchema);