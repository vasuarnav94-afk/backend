const express = require("express")
const { craeteProductcontroller, allProductcontroller, updateProductcontroller, singleProductcontroller, deleteProductcontroller } = require("../controller/product.controller.js")

const router = express.Router();


router.post("/create", craeteProductcontroller);
router.get("/",allProductcontroller);
router.patch("/update/:productId",updateProductcontroller);
router.get("/:productId",singleProductcontroller)
router.delete("/delete/:productId",deleteProductcontroller);

module.exports = router;
