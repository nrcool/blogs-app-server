const path = require("path")


 const getIndex = (req,res)=>{
    //resolve absolute path using path module
     res.sendFile(path.resolve(__dirname ,"../views/public/index.html"))
}

module.exports={getIndex}