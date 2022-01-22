const { body, check , validationResult} = require("express-validator");
const UsersCollection = require("../models/UsersSchema")

let validationMiddlewares = [
  body("firstname")
    .isLength({ min: 2, max: 20 })
    .withMessage("please firstname shouldn't be less than 2 chars long").trim() ,
  check("lastname", "please enter something as lastname").not().isEmpty(),
  body("email").isEmail().withMessage("please provide a valid email address")
  .toLowerCase().custom(value=>{
      return UsersCollection.findOne({email:value}).then(user=>{
          if(user){
              return Promise.reject("Email already exist") 
          }
         return true;
      })
  })/* ,
  body("password", "please dont use common words as password") */
   /*  .not() */
   /*  .isIn(["1234", "abcd", "hello"]).customSanitizer((value)=>{
       return value
    }) */,

    (req,res,next)=>{
        
        const errors= validationResult(req)
        if(errors.isEmpty()){
          next()  
        }else{
            let message= errors.array().reduce((acc,item)=>{
                acc[item.param]=item.msg
                return acc
            }, {})
      
            next({status:401, message:message})
        }

        
    }

];

module.exports = validationMiddlewares;
