const express = require("express")
const jwt = require("jsonwebtoken")
const UserModel = require("../model/user.model.js")
const authMiddleware = require("../middleware/auth.middleware.js")


const router = express.Router()

router.get("/", authMiddleware, (req,res)=>{
     res.status(200).json({
    message: "I m home route",
    data: req.user,
     });
})



module.exports = router