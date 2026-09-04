const express = require("express")
const jwt = require("jsonwebtoken")

const UserModel = require("../model/user.model.js")
const router = express.Router()


router.get("/", async(req,res,next) =>{
    const token = req.cookies.secret;

    if(!token){
        return res.status(401).json({
            success: false,
            message: "token not found",
        })
    }

   const decode = jwt.verify(token, process.env.JWT_SECRET_KEY);


   if(!decode){
    return res.status(401).json({
        success: false,
        message: "Invalid user"
    })
   }
  const user = await UserModel.findById(decode.id)

  req.user = user;
  next();

},  (req,res) =>{
    res.status(200).json({
        message: " I am home route",
        data: req.user,

    })
})

module.exports = router