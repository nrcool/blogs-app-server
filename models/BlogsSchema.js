const mongoose= require("mongoose")
const {Schema}=mongoose


const BlogSchema=new Schema({
    title: {type:String, required:true} ,
    description:{type:String},
    content:{type:String, required:true},
    image:{type:String, default: `https://source.unsplash.com/random/300x200?sig=${Math.random()}` },
    userid:{type:mongoose.Schema.Types.ObjectId, ref:"users"},
    comments:[{type:mongoose.Schema.Types.ObjectId, ref:"comments"}],
    createAt:{type:Date, default:Date.now}
})

const BlogsCollection= mongoose.model("blogs",BlogSchema)

module.exports=BlogsCollection