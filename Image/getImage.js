const fs = require("node:fs")
const path = require("node:path")
const GetImage = function (req,res) {
    const ImageLink = path.join(__dirname,"/file",req.params ? req.params.name : "undefined")
    if(fs.existsSync(ImageLink)) {
        try {
            res.sendFile(ImageLink)
        } catch (error) {
            return res.status(400).json({message: "Image not foune"})
        }
    } else {
        return res.status(400).json({message: "Something went wrong, try later !"})
    }
}
module.exports = {
    GetImage : GetImage
}