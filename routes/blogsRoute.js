const express = require("express");
const authentication = require("../middlewares/auth");
const router = express.Router();
const BlogsCollection= require("../models/BlogsSchema");
const UsersCollection = require("../models/UsersSchema");
const { roleCheck } = require("../middlewares/RoleMiddleware");
/* const data = fs.readFileSync(path.resolve(__dirname, "../models/db.json"),"utf-8")

console.log(JSON.parse(data))
const users = JSON.parse(data).users; */

// CRUD operation
//Create
//Read
//Update
//Delete

//Read Blogs
//endpoint /Blogs
router.get("/" ,  async (req, res,next) => {
try{
 const blogs = await BlogsCollection.find().populate("userid").populate("comments")
 res.send({success:true, data: blogs}); 
  }
  catch(err){
    next(err)
  }
 
});

//Create new Blog
router.post("/",authentication, async (req, res,next) => {
  try{
    const blog = new BlogsCollection(req.body)
    await blog.save()
    const user=await UsersCollection.findById(blog.userid)
    if(!user.blogs){
      user.blogs=[]
    }
    user.blogs.push(blog._id)
   await user.save()
    
    res.json({success:true, data:blog });
  }
  catch(err){
    next(err)
  } 
});

//Request method PUT (replacing existing resource) and PATCH (updating existing resource)
//Update Blog
router.put("/:id",authentication,roleCheck, async (req, res,next) => {
  try{
    const blog = await BlogsCollection.findByIdAndUpdate(req.params.id, req.body,{new:true})
    res.send({success:true,data:blog})
  }
  catch(err){
    next(err)
  }

});

//Patch
router.patch("/:id",authentication,roleCheck, async (req, res,next) => {
  try{
    const blog = await BlogsCollection.findByIdAndUpdate(req.params.id, req.body,{new:true})
    res.send({success:true,data:blog})
  }
  catch(err){
    next(err)
  }
});

//Delete request
//delete Blog
router.delete("/:id",authentication, roleCheck, async (req, res,next) => {
 try{
   const blog = await BlogsCollection.findByIdAndDelete(req.params.id)
   res.send({success:true,data:blog})
 }
 catch(err){
   next(err)
 }
 
});

//Read Blog
//endpoint /Blogs/:id
router.get("/:id", async(req, res,next) => {
try{
  const blog = await BlogsCollection.findOne({_id:req.params.id}).populate("userid").populate("comments").populate({path:"comments",populate:{path:"replyComments",model:"comments"}})
  res.send({success:true,data:blog})
}
catch(err){
  next(err)
}
 
});

module.exports = router;
