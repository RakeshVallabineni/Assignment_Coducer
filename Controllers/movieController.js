const MOVIE=require('../models/movies.js');
const ACTOR=require('../models/actors.js');
const REVIEW=require('../models/reviews.js');

exports.saveMovie=async (req,res,next)=>{
    try{
        const { movie }=req.body;
        const findMovie=await MOVIE.findAll({where:{movie:movie}})
        
        if(findMovie.length===0){
            const movieResponse=await MOVIE.create({
                movie:movie
            })
            if(movieResponse){
                res.status(200).json({message:'saved successfully'})
            }
        }
        else{
            res.status(403).json({message:"Movie Exist"})
        }
    }
    catch(err){ 
        if(err){
            res.status(404).json({message:"something went wrong"})
        }
    }
}


exports.getActorReviews=async (req,res,next)=>{
    try{
        const { moviename }=req.query;

        const findMovieId=await MOVIE.findAll({where:{movie:moviename}});

        if(findMovieId.length>0){
            const findMovie=await ACTOR.findAll({where:{movieId:findMovieId[0].id}}) 
            const findMovieReviews=await REVIEW.findAll({where:{movieId:findMovieId[0].id}})
            res.status(200).json({Actors:findMovie,Reviews:findMovieReviews})
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