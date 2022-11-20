const express=require('express');
const reviewRouter=express.Router();
const reviewController=require("../Controllers/reviewController");
const Authorization=require('../Authentication/Authorization')


reviewRouter.post('/saveReview',Authorization,reviewController.saveReview);
reviewRouter.get('/movieReviews',Authorization,reviewController.getMovieReviews);


module.exports=reviewRouter;