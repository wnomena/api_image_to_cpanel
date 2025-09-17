let multer = require("multer")
const date = new Date()
const storage = multer.diskStorage({
    destination : function (req,file,cb) {
        cb(null,"./file")
    },
    filename : function(req,file,cb) {
        console.log(file)
        const name = date.getTime() + "-"+ file.fieldname + "-" + file.originalname.split(" ").join("-")
        cb(null,name)
    }
})

module.exports = {
    presentation_image : multer({storage: storage}).array("image"),
} 