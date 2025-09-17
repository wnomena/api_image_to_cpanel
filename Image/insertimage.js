
module.exports = async function(req,res) {
    const filename = req.files
    if(!filename) {
        return res.status(400).json({message : "Something went wrong, try later !",list: []})        
    } else {
        console.log("mande")
        return res.json({message : "Image added successfully", list : [...filename.map(file => file.filename)]})
    }
}
