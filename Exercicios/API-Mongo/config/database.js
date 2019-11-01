const mongoose = require('mongoose');
//mongodb+srv://denis:123@cluster0-ux2l5.mongodb.net/test?retryWrites=true&w=majority
module.exports = mongoose.connect('mongodb://localhost:27017/empresa',{
    useNewUrlParser: true
});
