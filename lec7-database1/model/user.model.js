const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    
    name:String,
    email: String,
    mobile: String,
    password: String,
    gender: String,
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;