require("dotenv").config()
const express = require("express")
const connectdb = require("./src/config/db.js")
const UserRouter = require("./src/router/user.routes.js")
const cookieParser = require("cookie-parser")
const app = express()

connectdb()

app.use(cookieParser());
app.use(express.json())
 app.use("/api/auth",UserRouter);


app.listen(3000,()=>{
    console.log("server is runing on port 3000")
})