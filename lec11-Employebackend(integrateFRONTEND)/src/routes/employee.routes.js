import express from "express";
import {
  createEmployeeController,
  deleteEmployeeController,
  getAllEmployeeController,
  getSingleEmployeeController,
  updateEmployeeController,
} from "../controllers/employee.controller.js";

const router = express.Router();

router.post("/create", createEmployeeController);
router.get("/", getAllEmployeeController);
router.get("/:empId", getSingleEmployeeController);
router.patch("/update/:empId", updateEmployeeController);
router.delete("/delete/:empId", deleteEmployeeController);

export default router;