const express = require("express")
const cors = require("cors")
const InsertImage  = require("./Image/insertimage")
const GetImage  = require("./Image/getImage")
const upload = require("./multer/multer")
const UnlinkImage  = require("./Image/deleteImage")
const multer = require("multer")
const port = process.env.PORT || 8080
const app = express()
app.use(cors())
app.use(function (req,res,next) {
    console.log(req.url)
    console.log(req.method)
    next()
})
app.post("/file", upload,function (req,res) {
    if (!Array.isArray(req.files) || req.files.length === 0) {
        return res.status(400).json({ message: "No image was uploaded" })
    }

    return res.json({
        message: "Image added successfully",
        filenames: req.files.map(file => file.filename)
    })
})
app.get("/get/image/:name",GetImage)
app.post("/",upload,InsertImage)
app.delete("/delete/image/:name",UnlinkImage)
app.use(function (err, req, res, next) {
    if (err instanceof multer.MulterError) {
        return res.status(400).json({ message: "Image upload failed", error: err.message })
    }

    console.error(err)
    return res.status(500).json({ message: "An unexpected error occurred" })
})
app.listen(port,function () { console.log(`Server listen on port ${port}`)})
