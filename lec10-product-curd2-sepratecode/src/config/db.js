const { default: mongoose } = require("mongoose");


const connectdb = async ()=>{
    try {
        await mongoose.connect("mongodb+srv://Arnav-vasu:Arnav2198@fs35-backend.enfcvp1.mongodb.net/pr")
        console.log("mongodb connected")
        
    } catch (error) {
        console.log("mongodb not connected",error)
    }
}

module.exports = connectdb