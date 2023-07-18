const mongoose = require('mongoose');
const schema = mongoose.Schema;

function connectDb(){
    mongoose.connect('mongodb://localhost:27017/vSquare').then(()=>{
        console.log("connected to db");
    }).catch((e)=>{
        throw e;
    });
}

module.exports = connectDb;