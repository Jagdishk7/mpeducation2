require('dotenv').config()
console.log(process.env.MONGODB_URL)
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URL)
.then(() => {
    console.log('mongodb connected')
    // console.log(process.env.MONGODB_URL)
})
.catch((e)=>{
    console.log('connection failed')
    console.log(e)
})


const newSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model('collection',newSchema)

module.exports = collection