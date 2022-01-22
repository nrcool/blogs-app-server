const jwt = require("jsonwebtoken")
const UsersCollection = require("../models/UsersSchema")

const authentication=async (req,res,next)=>{
    try{ 
         const token = req.header("token")
    //verify token
    let decode = jwt.verify(token,process.env.SECRET_KEY)
    if(decode){
       /*  console.log(decode) */
        const user = await UsersCollection.findById(decode.id)
        req.user= user;
        req.token=token;
        next() //forwarding the request
    }else{
        next({message:"invalid token"}) //forwarding req along with error
    }
}
    catch(err){
        next(err) //forwarding req along with error
    }
  

}

module.exports=authentication

