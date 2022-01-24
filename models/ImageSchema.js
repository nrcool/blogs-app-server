const mongoose= require("mongoose")
const {Schema}=mongoose


const ImageSchema=new Schema({
    filename:{type:String},
    file:{
        data:{type:Buffer},
        contentType:{type:String}
    }
})

const ImageCollection= mongoose.model("images",ImageSchema)

module.exports=ImageCollection