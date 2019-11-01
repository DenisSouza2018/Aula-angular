const mongoose = require('mongoose');
const mongoAtlas = 'mongodb+srv://denis:123@cluster0-ux2l5.mongodb.net/test?retryWrites=true&w=majority'
const mongoLocal = 'mongodb://localhost:27017/empresa';

module.exports = mongoose.connect(mongoAtlas,{
    useNewUrlParser: true
});
