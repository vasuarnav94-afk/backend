const  mongoose = require("mongoose")



const connectdb = async (req,res)=>{
    try {
        await mongoose.connect("mongodb+srv://Arnav-vasu:Arnav2198@fs35-backend.enfcvp1.mongodb.net/authethentication")
        console.log("mongo conected succefully")
    } catch (error) {
        return res.status(500).json({
            success: false,
            message:"something went wrong"
        })
    }
}

module.exports = connectdb