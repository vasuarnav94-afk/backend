const  mongoose  = require("mongoose")



const connectdb = async (req,res) =>{
    try {
        await mongoose.connect("mongodb+srv://Arnav-vasu:Arnav2198@fs35-backend.enfcvp1.mongodb.net/authethentication")

    console.log("mongo db coneccted")
    } catch (error) {
        console.log("mongodb not connected")
    }
}

module.exports = connectdb