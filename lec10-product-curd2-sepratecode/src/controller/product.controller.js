const ProductModel = require("../model/product.model");


//post api kind of
const craeteProductcontroller = async (req,res)=>{
    try {
    const {productName, price, category, description, imageUrl } = req.body;
    
    if( 
     !productName ||
      !price ||
      !price.currency ||
      !price.amount ||
      !imageUrl ||
      !category){
        return res.status(400).json({
            success: false,
            message: "all fields are required"
        })
      }
      const newproduct = await ProductModel.create({
        productName, price, category, description, imageUrl
      })
        
      return res.status(201).json({
        success: true,
        message: "product created",
        data: newproduct,
      })


    } catch (error) {
        return res.status(500).json({
            success:false,
            message: "internal server error"
        })
    }
}

//get api

const allProductcontroller = async (req,res)=>{
    try {
        
    let allproduct =     await ProductModel.find();

    return res.status(200).json({
        success: true,
        message: "all product feteched",
        data: allproduct
    })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message: "internal server error",error
        })
    }
}

//update api 
const updateProductcontroller = async(req,res)=>{
    try {
        let {productId} = req.params;

        let {productName, description, category, imageUrl, currency, amount } = req.body;

        const updateproduct = await ProductModel.findByIdAndUpdate(productId,
            {
          productName,
          description,
          category,
          imageUrl,
          price: {
           currency,
           amount,
        },
      },{
        new: true,
        runValidators: true,
      }
        )
   return res.status(200).json({
    success: true,
    message: "product updated",
    data: updateproduct,
   })
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "internal server error"
        })
    }
}



const singleProductcontroller = async (req,res) =>{
    try {
      const {productId} = req.params;
    const  singleproduct = await ProductModel.findById(productId)  
    return res.status(200).json({
        success: true,
        message: "single product fetched",
        data: singleproduct
    })
    } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });   
    }
}



const deleteProductcontroller = async (req, res) => {
  try {
    const { productId } = req.params;

    const deletedProduct = await ProductModel.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = {craeteProductcontroller,allProductcontroller,updateProductcontroller,singleProductcontroller,deleteProductcontroller}