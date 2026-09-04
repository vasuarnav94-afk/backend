const mongoose  = require("mongoose");

// trim: true ka matlab hai string ke start aur end ke extra spaces automatically remove kar do.

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim:true,
        required: [true,"name is required"],
    },
    email: {
        type:String,
        required: [true,"email is required"],
    },
    password: {
        type:String,
        minlength:[8,"minimum 8 charecter is required"],
    },
},{
    timestamps: true,
})

const UserMOdel = mongoose.model("usersss",UserSchema)

module.exports = UserMOdel