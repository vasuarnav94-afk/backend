const express = require("express")
const UserRouter = require("./src/routes/user.route.js")
const connecteddb = require("./src/config/db.js")
const connectDB = require("./src/config/db.js")
const cookieParser = require("cookie-parser")

connectDB()
const app =  express()


//// nmp i cookieParserdownload ke badd ye likhe ye parcel karega:
app.use(cookieParser());


app.use(express.json())

app.use("/api/auth", UserRouter );

app.listen(3000,()=>{
    console.log("server is runing on port 3000")
})