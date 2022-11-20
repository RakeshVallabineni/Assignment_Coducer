const REVIEW=require('../models/reviews.js');

const MOVIE=require('../models/movies.js');


exports.saveReview=async (req,res,next)=>{
    try{
        const { review }=req.body;
        const movieName=req.query.moviename
        const findMovie=await MOVIE.findAll({where:{movie:movieName}}) 

        if(findMovie.length>0){
                const findMovieReviews=await REVIEW.findAll({where:{movieId:findMovie[0].id}})
                const reveiwResponse=await REVIEW.create({
                review:review,
                movieId:findMovie[0].id,
        
            })

            if(reveiwResponse){
                res.status(200).json({message:'saved successfully'})
            }
        }
        else{
            res.status(403).json({message:'Movie doesnot exist'})
        }
    }

    catch(err){
        if(err){
            res.status(404).json({message:"something went wrong"})
        }
    }
}



exports.getMovieReviews=async (req,res,next)=>{
    try{
        const movieName=req.query.moviename;
        
        const findMovie=await MOVIE.findAll({where:{movie:movieName}}) 
        
        if(findMovie.length>0){
        const findMovieReviews=await REVIEW.findAll({where:{movieId:findMovie[0].id}})
            if(findMovieReviews.length>0){
            res.status(200).json({REVIEWS:findMovieReviews})
            }
            else{
                res.status(404).json({message:'There are no Reviews for this movie'})
            }
        }
        else{
            res.status(403).json({message:'Movie doesnot exist'})
        }
  }
  catch(err){
    if(err){
        res.status(404).json({message:"something went wrong"})
    }
}
    
}