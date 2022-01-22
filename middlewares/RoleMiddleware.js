exports.roleCheck=(req,res,next)=>{
    if(req.user.role==="admin"){
        next()
    }else if(req.params.id===req.user._id || user.blogs.includes(req.params.id)){
        next()
    }else{
        let err= new Error("you don't have right permissions to perform such action")
        err.status=402;
        next(err)
    }
}