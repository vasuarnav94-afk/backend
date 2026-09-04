const jwt = require("jsonwebtoken")
const UserModel =  require("../model/user.model.js")


const authMiddleware = async (req,res,next) =>{
    const token = req.cookies.secret;
    if(token)
        return res.staus(404).json({
    success: false,
    message: "Token not found",
})

const decode = jwt.verify(token,process.env.JWT_SECRET_KEY)
    if(!decode)
     return res.staus(400).json({
    success:false,
    message:"Invalid token",
})
   const user = await UserModel.findById(decode.id)

   req.user =user;
   next()
}

module.exports =  authMiddleware