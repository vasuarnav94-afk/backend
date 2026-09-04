const  mongoose = require("mongoose")
const UserMOdel = require("../model/user.model.js")
 const bcrypt = require("bcrypt")
 const jwt = require("jsonwebtoken")


const registerController = async (req,res) =>{
    try {
        const {name,email,password} = req.body

        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message: "All fileds are required"
            })
        }
        const hashpass = bcrypt.hashSync(password,10);

       let user =  await UserMOdel.create({name,email,password : hashpass})

       if(!user){
        return res.status(400).json({ 
        success:false,
        message: "User registration failed"})
       }

    const token = jwt.sign({id: user._id},process.env.JWT_SECRET_KEY,{
       expiresIn: "3h",
    })

    res.cookie("secret",token)

    return res.status(201).json({
        success:true,
        message:"User registered",
        data: user,
    })
    } catch (error) {
        return res.status(500).json({
            sucess: false,
            message: "somthing went wrong",
            error
        })
    }
}


const loginController = async (req,res) =>{
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success:false,
                message:"email and password required",
            })
        }

      const isUserExist =   await UserMOdel.findOne({email})
        if(! isUserExist){
             return res.status(404).json({
            success: false,
            message: "User not found",
         })
        }
        
      const comparePass = bcrypt.compareSync(password, isUserExist.password);
      if(!comparePass){
        return res.status(401).json({
                success: false,
        message: "Invalid credential",
        })
      }

      const token = jwt.sign({id: isUserExist._id},process.env.JWT_SECRET_KEY,
        {expiresIn: "3h"},
      )
      res.cookie("secret",token)

      return res.status(200).json({
        success:true,
        message:"Login successfull",
        data: isUserExist
      })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"somthings went worng"
        })
    }
}

module.exports ={registerController,loginController}