require("dotenv").config()
const postRoutes = require("./src/routes/post.routes.js")
const express = require("express")



const app = express()

app.use(express())

app.use("/api/post", postRoutes);


let PORT = process.env.port || 4000


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}😘`)
})