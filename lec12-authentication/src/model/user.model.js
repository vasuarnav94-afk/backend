const  mongoose = require("mongoose");


const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true,"Name is required"],
    },
    email: {
        type: String,
        unique: true,//unique means same email nhii hogi ek email ek bar.
        required: [true,"Name is required"],
    },
    password: {
        type: String,
        required: true,
    },

},{
    timestamps: true,
})

const UserModel = mongoose.model("users", userSchema)

module.exports = UserModel;