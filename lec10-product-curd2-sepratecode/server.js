const express = require("express")
const connectdb = require("./src/config/db")
const Productroutes = require("./src/routes/product.routes.js")
const app = express()
app.use(express.json())
connectdb()


app.use("/api/product",Productroutes)









app.listen(3000,()=>{
    console.log("server is runing on port 3000")
})