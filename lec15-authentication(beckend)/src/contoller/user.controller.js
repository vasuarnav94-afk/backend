const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const UserModel = require("../model/user.model.js")

const registerController = async( req,res)=>{
    try {
        const {name,email, password} = req.body;
        
        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message: "All fields are required",
            })
        }

        const hasspass = bcrypt.hashSync(password,10)

        const user = await UserModel.create({
           name,email, password : hasspass 
        })

        if(!user){
            return res.status(400).json({
                success:false,
                message:"User not registered"
            })
        }


        const token = jwt.sign({id: user._id},process.env.JWT_SECRET_KEY,{expiresIn: "10min"})
        
         res.cookie("secret",token)

         return res.status(201).json({
            success:true,
            message:"User registered",
            data:user
         })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message:"somthing went wrong"
        })
    }
}



const loginController = async (req,res) =>{
   try {
    
 const { email, password } = req.body;

    if (!email || !password)
      return res.status(400).json({
        success: false,
        message: "Email and password is required",
      });


    let user =  await UserModel.findOne({email});


  if(!user){
      return res.status(404).json({
        success: false,
        message: "User not found",
  })}

  const comparepass = bcrypt.compareSync(password,user.password)

  if (!comparepass)
    return res.status(401).json({
  success: false,
   message:"Invalid Credentials",
})

const token = jwt.sign({id: user._id},process.env.JWT_SECRET_KEY,{expiresIn:'1h'})

res.cookie("secret",token)

 return res.status(200).json({
    success:true,
    message:"user loggedin",
    data: user,
 })

   } catch (error) {
      return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error,
    });
  
   }
}

module.exports = {registerController,loginController}