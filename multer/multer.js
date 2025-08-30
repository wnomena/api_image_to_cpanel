let multer = require("multer")
const date = new Date()
const storage = multer.diskStorage({
    destination : function (req,file,cb) {
        cb(null,"./file")
    },
    filename : function(req,file,cb) {
        const name = date.getTime() + "-" + file.originalname.split(" ").join("-")
        cb(null,name)
    }
})

module.exports = multer({storage: storage}).array("image")