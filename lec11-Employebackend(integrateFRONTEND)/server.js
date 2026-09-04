import express from "express";
//har path pe last mein .js lagana jarurui hai :
import { connectDB } from "./src/config/database.js";
import employeeRoutes from "./src/routes/employee.routes.js";
import cors from "cors";

connectDB();

const app = express();

app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(express.json());

// routes ka hai yeee
app.use("/api/employes", employeeRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});