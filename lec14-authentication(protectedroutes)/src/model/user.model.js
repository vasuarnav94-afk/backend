const  mongoose  = require("mongoose");

const UserSchema =  new mongoose.Schema({
       name: {
      type: String,
      trim: true,
      required: [true, "name is required"],
    },
    email: {
      type: String,
      required: [true, "name is required"],
    },
    password: {
      type: String,
      minlength: [6, "minimum 6 characters required"],
    },
  },
  {
    timestamps: true,
  },
)
const UserModel = mongoose.model("protected", UserSchema)
module.exports = UserModel