const express = require("express")
const cors = require("cors")
const { InsertImage } = require("./Image/insertimage")
const { GetImage } = require("./Image/getImage")
const multer = require("multer")
const { UnlinkImage } = require("./Image/deleteImage")
const port = 8080
const app = express()
cors()

app.post("/insert/image/:name",multer,InsertImage)
app.get("/get/image/:name",GetImage)
app.delete("/delete/image/:name",UnlinkImage)
app.listen(port,function () { console.log(`Server listen on port ${port}`)})