const express=require('express');
const loginRouter=express.Router();
const loginController=require("../Controllers/LoginController");

loginRouter.post('/login',loginController.login);

module.exports=loginRouter