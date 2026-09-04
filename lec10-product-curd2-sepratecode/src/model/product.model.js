const { default: mongoose } = require("mongoose");


const productSchema = new mongoose.Schema({

     productName: {
    type: String,
    require: true,
  },
  description: String,
  price: {
    currency: {
      type: String,
      require: true,
    },
    amount: {
      type: Number,
      require: true,
    },
  },
  category: {
    type: String,
    require: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
},{
    timestamps:true,
})

const ProductModel = mongoose.model("produts",productSchema)

module.exports = ProductModel;