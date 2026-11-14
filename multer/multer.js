let multer = require("multer")
const date = new Date()
const storage = multer.diskStorage({
    destination : function (req,file,cb) {
        cb(null,"./file")
    },
    filename : function(req,file,cb) {
        const file_extention = file.originalname.split(".").pop()
        console.log(file_extention)

        const name = file.originalname
                            .normalize("NFD")
                            .replace(/[\u0300-\u036f]/g, "")
                            .trim()
                            .replace(/\s+/g, "_")
                            .replace(/[^a-zA-Z0-9_]/g, "")
                            .replace(/^_+|_+$/g, "")
        const filename_will =name.split(file_extention.toString())[0] + "." + file_extention
        cb(null,filename_will)
    }
})

module.exports = multer({storage: storage}).array("image")