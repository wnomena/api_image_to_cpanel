const fs = require("node:fs")
const path = require("node:path")
 
const InsertImage = function (req,res) {
    const filename = req.file ? req.file.filename : undefined
    const name = req.params.name
    if(!filename) {
        return res.status(400).json({message : "There are any image in this request, please verify you connexion or all inpuut and try again"})        
    } else {
        return res.json({message : "Image added successfully"})
    }
}
module.exports = {
    InsertImage : InsertImage
}