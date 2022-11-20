const express=require('express');
const signupRouter=express.Router();
const signupController=require("../Controllers/signupController");

signupRouter.post('/signUp',signupController.saveUserDetails)

module.exports=signupRouter;