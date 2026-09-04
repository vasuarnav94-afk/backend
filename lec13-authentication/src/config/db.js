const { default: mongoose } = require("mongoose");



const connectdb = async() =>{
    try {
        await mongoose.connect("mongodb+srv://Arnav-vasu:Arnav2198@fs35-backend.enfcvp1.mongodb.net/authethentication")
     console.log("mongo is connected")

    } catch (error) {
        console.log("mongo is not connected")
    }
}

module.exports = connectdb