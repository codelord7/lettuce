const express = require("express")
const mongoose = require('mongoose');

const app = express()




app.get('/',(req,res) => {
res.send("Hello blog")
})

mongoose.connect('mongodb+srv://admin:admin@cluster0.umqomtm.mongodb.net/SeedingAPI?retryWrites=true&w=majority')
.then(() => {app.listen(8000, ()=>{
    console.log("node api is running on port 8000")
})
    console.log('connection successfull');
}).catch((error) => {
    console.log(error)
})