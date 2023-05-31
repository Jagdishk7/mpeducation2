
const express = require('express');
const collection = require('./mongo');
const cors = require('cors');
// Node.js server code


const app = express();

// middle ware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.get('/login',cors(),(req,resp)=>{

})

app.post('/login',async(req,resp)=>{
    // req.body gets data from inputs in page
    const{email,password} = req.body

    try {
        // console.log(email + ' and ' + password)
        const checkEmail = await collection.findOne({email:email})
        const checkPassword = await collection.findOne({password:password})

        if(checkEmail){
            if(checkPassword){
                resp.json('accountExist')
            }
            else{
                resp.json('passNotMatch')
            }
        }
        else{
            resp.json('emailNotExist')
        }
    }
    catch (e) {
        resp.json('notexist')
    }
})



app.post('/register',async(req,resp)=>{
    const{name,email,password} = req.body

    const data = {
        name:name,
        email:email,
        password:password
    }

    try {
        const checkEmail = await collection.findOne({email:email})

        if(checkEmail){
            resp.json('userExist')
        }
        else{
            resp.json('notexist')
            // if not exist insert data to mongodb
            await collection.insertMany([data])
        }
    }
    catch (e) {
        resp.json('notexist')
    }
})



// ================= Contact Form Code ===============================


  app.listen(5000,()=>{
    console.log('the port is connected')
})