const mongoose = require('mongoose');
const connnection =mongoose.createConnection('mongodb://127.0.0.1:27017/NewMart').on('open',()=>{
    console.log("MongoDb Connected");
}).on('error',()=>{
    console.log("MongoDb error connection");
});
module.exports =connnection;