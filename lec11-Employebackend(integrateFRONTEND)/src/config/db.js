import mongoose  from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://Arnav-vasu:Arnav2198@fs35-backend.enfcvp1.mongodb.net/EMPLOYEDATA");
    console.log("mongodb are connected");
  } catch (error) {
    console.log("error in mongodb", error);
  }
};