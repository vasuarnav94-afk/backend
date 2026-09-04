require("dotenv").config()
const express= require("express")
const cors = require ("cors")
const connectdb = require("./src/config/db.js")
const UserRouter = require("./src/routes/user.routes.js")
const homeRouter = require("./src/routes/home.routes.js")
const cookieParser = require("cookie-parser")
const app =  express()

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
)
connectdb()

app.use(express.json())

app.use(cookieParser())


app.use("/api/auth",UserRouter)
app.use("/api/home",homeRouter)



app.listen(3000,()=>{
    console.log(`server is runing on port 3000`)
})

