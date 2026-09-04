const express = require("express")
const { default: mongoose } = require("mongoose")
const UserModel = require("./model/user.model.js")
const app = express()
app.use(express.json())


const connectdb = async()=>{
   await mongoose.connect("mongodb+srv://Arnav-vasu:Arnav2198@fs35-backend.enfcvp1.mongodb.net/pr")
  console.log("mongo db connected")
};

connectdb();
 
const user = []

app.get("/",(req,res)=>{
   res.status(200).json({
            success: true,
            message: "data fetched successfully",
            data: user,
        })

})

app.post("/create", async (req, res) => {
    const { name, email, mobile, password, gender } = req.body;

    if (!name || !email || !mobile || !password || !gender) {
        return res.status(400).json({
            success: false,
            message: "All fields are required"
        });
    }

    const newUser = await UserModel.create({
        name,
        email,
        mobile,
        password,
        gender
    });
    user.push({
         name,
        email,
        mobile,
        password,
        gender
    })


    return res.status(201).json({
        success: true,
        message: "User created",
        data: newUser
    });
});

app.listen(3000,()=>{
    console.log("server is runing on port 3000")
})