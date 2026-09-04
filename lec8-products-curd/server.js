const express = require("express")
const mongoose = require("mongoose")
const connectdb = require("./src/config/db")
const ProductModel = require("./src/model/product.model")

const app = express()
app.use(express.json())
connectdb()



//create
app.post("/create",async(req,res)=>{
    try {
   const {productName, price, category, description,imageUrl} = req.body;
   if(
     !productName ||
      !price ||
      !price.currency ||
      !price.amount ||
      !imageUrl ||
      !category )
      
    return res.status(400).json({
     success: false,
     message: "all fields are required",
})
const newProduct = await ProductModel.create({
      productName, price, category, description,imageUrl
})
    return res.status(201).json({
        success: true,
        message: "Product created",
        data: newProduct,
    })
    } catch (error) {
        console.log("error in create api",error)
        return res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
});


app.get("api/product",async(req,res)=>{
    try {
     let allProduct =   await ProductModel.find()

     return res.status(200).json({
        success: true,
        message:"all products fetched",
        data : allProduct
     })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "interna; server error"
        })
    }
})








app.listen(3000,()=>{
    console.log("server is runing on port 3000")
})

