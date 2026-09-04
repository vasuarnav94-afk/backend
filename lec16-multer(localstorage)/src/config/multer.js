const multer = require("multer")


//ye serif single image ke liya hota hain:

const storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,"uploads/");
    },
    filename: (req,file,cb) =>{
        cb(null, Date.now() + file.originalname);
    },
});

const upload = multer({storage});

module.exports = upload