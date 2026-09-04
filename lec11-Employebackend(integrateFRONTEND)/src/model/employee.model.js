import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    employeeName: {
      type: String,
      required: [true, "Employee name is requird"],
      trim: true, //akela input mein space deke submit na ess lita trim : ture .
    },
    email: {
      type: String,
      required: [true, "Employee email is requried"],
      trim: true,
    },
    mobile: {
      type: String,
      minlength: [10, "minimum 10 characters are required"],
      maxlength: [10, "maximun 10 characters are required"],
    },
    designation: {
      type: String,
      enum: ["MANAGER", "DEVELOPER"], //enum use hota kese mein sa ekk jo app ne [] ess main diya hoon kitbne bhe
      default: "DEVELOPER",
    },
    employeeId: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      default: "none",
    },
    address: {
      type: String,
      default: "none",
    },
  },
  {
    timestamps: true,
  },
);

const EmployeModel = mongoose.model("employees" , employeeSchema);
export default EmployeModel ; 