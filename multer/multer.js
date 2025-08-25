const multer = require("multer")
const date = new Date()
const diskStorage = multer.diskStorage({
    destination : "./file",
    filename : function (req,file,cb) {
        const name = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear() + file.originalname.split(" ").join("-")
        cb(null,name)
    }
})

multer({storage : diskStorage}).array("image")