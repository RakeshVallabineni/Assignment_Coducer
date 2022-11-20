const bcrypt=require('bcrypt');

const USER=require('../models/user.js')

const jwt=require('jsonwebtoken');

const token_secret=process.env.TOKEN_SECRET;


exports.login=async (req,res,next)=>{
    try{
        const { email,password }=req.body;

        let findExistingUser=await USER.findAll({where:{emailid:email}});
        
        if(findExistingUser.length>0){
            
            const loginResponse=await bcrypt.compare(password,findExistingUser[0].password)
            if(loginResponse){
                const TOKEN=jwt.sign(findExistingUser[0].id,token_secret);
                   
                res.status(200).json({Token:TOKEN,message:'successfully logged in'})

            }
            else{
                res.status(404).json({message:"wrong credentials"})
            }                                                     
        }
        else{
            res.status(401).json({message:'user does not exist'})
        }

    }
    catch(err){
        console.log(err)
        if(err){
            res.status(404).json({message:"something went wrong"})
        }
    }
  
}