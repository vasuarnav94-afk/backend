const express = require("express")
const { default: mongoose } = require("mongoose")

const app = express()


const db = async()=>{
    await mongoose.connect("mongodb+srv://Arnav-vasu:Arnav2198@fs35-backend.enfcvp1.mongodb.net/pr")

console.log("mongodb connected")
}


  
db();
 app.get("/", (req,res)=>{
   return res.status(200).json({
        message: "i am runing",
    })
 })

app.listen(3000,()=>{
    console.log("server is runing on port 3000")
})