const CommentsCollection= require("../models/CommentsSchema")
const BlogsCollection=require("../models/BlogsSchema")

//get all Comments
const getComments= async (req, res,next) => {
    try{
      const comments = await CommentsCollection.find().populate("replyComments")
      .populate("userid","firstname lastname fullname image -_id")
  
      res.send({success:true, data: comments}); 
    }
    catch(err){
      next(err)
    }
   
  }

//create new Comment
  const createComment= async (req, res,next) => {
  
    try{
      const comment = new CommentsCollection(req.body)
      await comment.save()
      if(comment.replyCommentId){
        const replytoComment= await CommentsCollection.findById(comment.replyCommentId)
        replytoComment.replyComments.push(comment._id)
        await replytoComment.save()
        return   res.json({success:true, data:replytoComment });
      }else{
          const blog= await BlogsCollection.findById(req.body.blogid)
      blog.comments.push(comment._id)
      await blog.save()
      return   res.json({success:true, data:comment });
      }
    
    
    }
    catch(err){
      next(err)
    } 
  }

const updateCommentPut=async (req, res,next) => {
    try{
      const comment = await CommentsCollection.findByIdAndUpdate(req.params.id, req.body,{new:true})
      res.send({success:true,data:comment})
    }
    catch(err){
      next(err)
    }
  
  }


const updateCommentPatch=async (req, res,next) => {
    try{
      const comment = await CommentsCollection.findByIdAndUpdate(req.params.id, req.body,{new:true})
      res.send({success:true,data:comment})
    }
    catch(err){
      next(err)
    }
  }

const deleteComment=async (req, res,next) => {
    try{
      const comment = await CommentsCollection.findByIdAndDelete(req.params.id)
      res.send({success:true,data:comment})
    }
    catch(err){
      next(err)
    }
    
   }

   const getSingleComment=async(req, res,next) => {
    try{
      const comment = await CommentsCollection.findOne({_id:req.params.id}).populate("replyComments")
      .populate("userid","firstname lastname -_id")
      .populate("blogid","-_id")
    
      res.send({success:true,data:comment})
    }
    catch(err){
      next(err)
    }
     
    }

  module.exports={getComments, createComment, updateCommentPut,updateCommentPatch,deleteComment,getSingleComment}