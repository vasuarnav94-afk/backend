const express = require("express");
const upload = require("../config/multer");

const router = express.Router();

router.post("/", upload.single("image"), (req, res) => {
  console.log(req.file);

  if (!req.file) {
    return res.status(400).json({
      success: false,
      message: "imgae not get",
    });
  }

  return res.status(200).json({
    success: true,
    message: "image get it",
  });
});

module.exports = router;