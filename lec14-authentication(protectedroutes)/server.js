require("dotenv").config()
const express = require("express")
const connectdb = require("./src/config/db.js")
const UserRouter = require("./src/routes/User.routes.js")
const homeRoutes = require("./src/routes/home.routes.js")
const cookieParser = require("cookie-parser")
const app = express()
connectdb()
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", UserRouter)
app.use("/api/home", homeRoutes)


app.listen(3000, ()=>{
    console.log("server is runing successfully on port 3000")
})