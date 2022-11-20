const express=require('express');
const movieRouter=express.Router();
const movieController=require("../Controllers/movieController");
const Authorization=require('../Authentication/Authorization')


movieRouter.post('/saveMovie',Authorization,movieController.saveMovie);
movieRouter.get('/actorsReviews',Authorization,movieController.getActorReviews);


module.exports=movieRouter;