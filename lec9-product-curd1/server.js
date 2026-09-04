const express = require("express")
const connectdb = require("./src/config/db")
const ProductModel = require("./src/model/product.model.js")

const app = express()
app.use(express.json())
connectdb()


app.post("/api/product/create", async (req,res)=>{
    try {
        const {productName, price, category, description, imageUrl } = req.body
        if(  !productName ||
      !price ||
      !price.currency ||
      !price.amount ||
      !imageUrl ||
      !category){
        return res.status(400).json({
        success: false,
        message: "all fileds are required",
      });
      }
   
     const newProduct = await ProductModel.create({
        productName,
      description,
      category,
      price,
      imageUrl,
     })
      return res.status(201).json({
      success: true,
      message: "Product created",
      data: newProduct,
    });


    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
})


app.get("/api/product", async(req,res)=>{
    try {
        let allProduct = await ProductModel.find()
        return res.status(200).json({
            success:true,
            message: "all product fetched",
            data: allProduct

        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: "internal server error"
        })
    }
})

app.patch("/api/product/update/:productId",async(req,res)=>{
    try {
   let {productId}  = req.params;
   let {productName, description, category, imageUrl, currency, amount } =
      req.body;

    const updateProduct = await ProductModel.findByIdAndUpdate(
        productId,
         {
        productName,
        description,
        category,
        imageUrl,
        price: {
          currency,
          amount,
        },
      },
      {
        new:true,
        runValidators: true,
      }
    )

    return res.status(200).json({
        success: false,
        message: "product updated",
        data : updateProduct
    })

        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message:"internal server error"
        })
    }
})

app.get("/api/product/update/:productId", async(req,res)=>{
    try {
        const {productId} = req.params
   const product = await ProductModel.findById(productId)
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
})

app.delete("/api/product/delete/:productId", async(req,res)=>{
    try {
     let   {productId} = req.params;
     await ProductModel.findByIdAndDelete(productId)
     return res.status(404).json({
        success: true,
        message: "product deleted",
     })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message:"inertenal server error"
        })
    }
})

app.listen(3000,()=>{
    console.log("server is runing on port 3000")
})
