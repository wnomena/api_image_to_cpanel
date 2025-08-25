const { error } = require("node:console")
const fs = require("node:fs")
const path = require("node:path")
const UnlinkImage = function (req,res) {
    const ExistedImage = path.join(__dirname,"/file",req.params ? req.params.name : "undefined")
    if(fs.existsSync(ExistedImage)) {
        try {
            fs.unlink(ExistedImage,function (err) {
                if(err) {
                    return res.status(400).json({message: "Something went wrong, verify and try again", error : err})
                }
            })
        } catch (error) {
            return res.status(400).json({message : "Something went wrong, verify and try again",error : error})
        }
    }
}
module.exports = {
    UnlinkImage : UnlinkImage
}