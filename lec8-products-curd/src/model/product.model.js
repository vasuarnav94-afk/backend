const { default: mongoose } = require("mongoose");


const ProductSchema = new mongoose.Schema({
     productName: {
      type: String,
      required: true,
    },
    description: String,
    price: {
      currency: {
        type: String,
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
    },
    category: {
      type: String,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
},{
   timestamps: true
});

const ProductModel = mongoose.model("products", ProductSchema)

module.exports = ProductModel 