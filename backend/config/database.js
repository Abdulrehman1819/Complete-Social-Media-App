const mongoose=require("mongoose");
const { db } = require("../models/Post");
exports.connectDatabase=()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/SMapp",{
 
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log('Connection is successful');
}).catch((e)=>{
    console.log(e);
    console.log("Connection is not successful")
})

    }
