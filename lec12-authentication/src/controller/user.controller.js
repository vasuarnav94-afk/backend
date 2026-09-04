const UserModel = require("../model/user.model.js");




const registerController = async (req,res) =>{
    try {
    let {name, email, password} = req.body;
      
    if(!name || !email || !password){
        return res.status(400).json({
            success:false,
            message: "missing fields",
        })
    }
      
    // hash password :- hash karne kai liye (npm install bcrypt) yee download kare

    //hash mai return karna padta hai:
    // const hash = await bcrypt.hash(plainPassword, saltRounds);
    // return hash;

    //              (or)
 
    // hashSync mein return nahii karna padta hai:
    const hasspass = bcrypt.hasspassword(password,10);
    
    const user =  await UserModel.create({
         name,
      email,
      password: hasspass,
    })


    // tokken generate :- jwt digital ID card (token banata hai)
    // instal kare jwt (npm install jsonwebtoken)

    const token = jwt.sign({id: user._id}, "x,ckgacagcackgckcg",{
        expiresIn: "1h",
    })
    //abb store kare token ko cookie mein

    res.cookis("token",token)

    return res.status(201).json({
        success: true,
        message:"user registered",
        data: user,
    })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Something went worng",
            error,
        })
    }
}


module.exports = registerController;