var mongoose = require('mongoose');
global.db = mongoose.connect('mongodb+srv://denis:123@cluster0-ux2l5.mongodb.net/test?retryWrites=true&w=majority');
mongoose.connection.on('connected', function () {
 console.log('=====Conexão estabelecida com sucesso=====');
});
mongoose.connection.on('error', function (err) {
 console.log('=====Ocorreu um erro: ' + err);
});
mongoose.connection.on('disconnected', function () {
 console.log('=====Conexão finalizada=====');
}); 



