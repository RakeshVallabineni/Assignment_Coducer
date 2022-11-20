const USER=require('../models/user.js');
const bcrypt=require('bcrypt');
const saltRounds=10;


exports.saveUserDetails=async (req,res,next)=>{
    try{
        const { email,password }=req.body;

        let findExistingUser=await USER.findAll({where:{emailid:email}});
    
        if(findExistingUser.length===0){
          await bcrypt.hash(password,saltRounds,async (err,hash)=>{
          if(!err){
              const saveUserDetailsResponse=await USER.create({
              emailid:email,
              password:hash,
              movieId:req.userIdentity
            })

            if(saveUserDetailsResponse){
              res.status(200).json({successfull:true,message:'Registration Successfull'});
            }
          }
        })
      }
      else{
        res.status(401).json({message:'user exist'})
      }
    }
    catch(err){
      if(err){
        res.status(404).json({message:"something went wrong"})
    }
    }

}