import EmployeModel from "../models/employee.models.js";

export const createEmployeeController = async (req, res) => {
  try {
    let {
      employeeName,
      email,
      mobile,
      designation,
      address,
      company,
      employeeId,
    } = req.body;

    if (!employeeName || !email || !employeeId)
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });

    const newEmployee = await EmployeModel.create({
      employeeName,
      email,
      mobile,
      designation,
      address,
      company,
      employeeId,
    });

    return res.status(201).json({
      success: true,
      message: "Employee created",
      data: newEmployee,
    });
  } catch (error) {
    console.log("error in creation", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const getAllEmployeeController = async (req, res) => {
  try {
    const allEmployee = await EmployeModel.find();

    return res.status(200).json({
      success: true,
      message: "Employees fetched",
      data: allEmployee,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const getSingleEmployeeController = async (req, res) => {
  try {
    let { empId } = req.params;

    const employee = await EmployeModel.findById(empId);

    return res.status(200).json({
      success: true,
      message: "Employee fetched",
      data: employee,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const updateEmployeeController = async (req, res) => {
  try {
    let { empId } = req.params;

    let {
      employeeName,
      email,
      mobile,
      designation,
      address,
      company,
      employeeId,
    } = req.body;

    const employee = await EmployeModel.findByIdAndUpdate(
      empId,
      {
        employeeName,
        email,
        mobile,
        designation,
        address,
        company,
        employeeId,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    return res.status(200).json({
      success: true,
      message: "Employee Updated",
      data: employee,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const deleteEmployeeController = async (req, res) => {
  try {
    let { empId } = req.params;

    await EmployeModel.findByIdAndDelete(empId);

    return res.status(200).json({
      success: true,
      message: "Employee deleted",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong",
    });
  }
};